import { NextRequest, NextResponse } from "next/server";
import * as XLSX from "xlsx";
import { prisma } from "@/lib/prisma";
import { TaskStatus } from "@/generated/prisma";

// 一级分类映射表：Tower 清单名 → 顶级分类标识
const TOP_LEVEL_MAP: Record<string, string> = {
  // 金融相关
  "信用卡": "FINANCE",
  "贷款": "FINANCE",
  "保险": "FINANCE",
  "理财": "FINANCE",
  "投资": "FINANCE",
  "账户": "FINANCE",
  "还款": "FINANCE",
  // 家庭相关
  "家庭": "FAMILY",
  "家务": "FAMILY",
  "采购": "FAMILY",
  "车辆": "FAMILY",
  "房屋": "FAMILY",
  "宠物": "FAMILY",
  "健康": "FAMILY",
  "理发": "FAMILY",
  // 工作相关
  "工作": "WORK",
  "项目": "WORK",
  // 课程相关
  "课程": "COURSE",
  "学习": "COURSE",
  // 务虚
  "务虚": "STRATEGIC",
  "规划": "STRATEGIC",
  // 文化
  "文化": "CULTURE",
  "阅读": "CULTURE",
};

// 一级分类默认配置
const TOP_LEVEL_CATEGORIES = [
  { name: "金融", topLevel: "FINANCE", color: "#3B82F6", icon: "💰" },
  { name: "家庭", topLevel: "FAMILY", color: "#10B981", icon: "🏠" },
  { name: "工作", topLevel: "WORK", color: "#8B5CF6", icon: "💼" },
  { name: "课程", topLevel: "COURSE", color: "#F59E0B", icon: "📚" },
  { name: "务虚", topLevel: "STRATEGIC", color: "#EC4899", icon: "🎯" },
  { name: "文化", topLevel: "CULTURE", color: "#06B6D4", icon: "📖" },
  { name: "其他", topLevel: "OTHER", color: "#6B7280", icon: "📦" },
];

function parseDate(value: unknown): Date | null {
  if (!value) return null;
  if (value instanceof Date) return value;
  if (typeof value === "number") {
    // Excel 日期序列号
    const date = XLSX.SSF.parse_date_code(value);
    if (date) {
      return new Date(date.y, date.m - 1, date.d, date.H || 0, date.M || 0, date.S || 0);
    }
  }
  if (typeof value === "string") {
    // 尝试多种日期格式
    const formats = [
      /(\d{4})-(\d{1,2})-(\d{1,2})/,       // YYYY-MM-DD
      /(\d{4})\/(\d{1,2})\/(\d{1,2})/,      // YYYY/MM/DD
      /(\d{4})年(\d{1,2})月(\d{1,2})日/,    // YYYY年MM月DD日
    ];
    for (const fmt of formats) {
      const m = value.match(fmt);
      if (m) {
        const d = new Date(parseInt(m[1]), parseInt(m[2]) - 1, parseInt(m[3]));
        if (!isNaN(d.getTime())) return d;
      }
    }
    const parsed = new Date(value);
    if (!isNaN(parsed.getTime())) return parsed;
  }
  return null;
}

function getTopLevelForList(listName: string): string {
  for (const [key, value] of Object.entries(TOP_LEVEL_MAP)) {
    if (listName.includes(key)) return value;
  }
  return "OTHER";
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "未找到文件" }, { status: 400 });
    }

    const buffer = await file.arrayBuffer();
    const workbook = XLSX.read(buffer, { type: "array", cellDates: true });
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const rows = XLSX.utils.sheet_to_json<Record<string, unknown>>(sheet, {
      defval: null,
      raw: true,
    });

    if (rows.length === 0) {
      return NextResponse.json({ error: "Excel 文件中没有数据" }, { status: 400 });
    }

    // 1. 确保一级分类存在
    const topLevelCategories = await Promise.all(
      TOP_LEVEL_CATEGORIES.map(async (cat) => {
        const existing = await prisma.category.findFirst({
          where: { topLevel: cat.topLevel, level: 1 },
        });
        if (existing) return existing;
        return prisma.category.create({
          data: {
            name: cat.name,
            level: 1,
            topLevel: cat.topLevel,
            color: cat.color,
            icon: cat.icon,
            sortOrder: TOP_LEVEL_CATEGORIES.indexOf(cat),
          },
        });
      })
    );

    // 2. 收集所有"所属清单"值，创建二级分类
    const listNames = new Set<string>();
    for (const row of rows) {
      const listName = String(row["所属清单"] || "").trim();
      if (listName) listNames.add(listName);
    }

    const categoryMap = new Map<string, string>(); // listName → categoryId
    for (const listName of listNames) {
      const existing = await prisma.category.findFirst({
        where: { name: listName, level: 2 },
      });
      if (existing) {
        categoryMap.set(listName, existing.id);
        continue;
      }
      const topLevel = getTopLevelForList(listName);
      const parent = topLevelCategories.find((c) => c.topLevel === topLevel)!;
      const cat = await prisma.category.create({
        data: {
          name: listName,
          level: 2,
          topLevel,
          parentId: parent.id,
          color: parent.color,
        },
      });
      categoryMap.set(listName, cat.id);
    }

    // 3. 创建任务（先不处理父任务关系）
    const taskTitleToId = new Map<string, string>(); // title → id，用于后续匹配父任务
    let created = 0;
    let skipped = 0;
    const errors: string[] = [];

    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      const title = String(row["任务标题"] || "").trim();

      if (!title) {
        skipped++;
        errors.push(`第 ${i + 2} 行：缺少任务标题，已跳过`);
        continue;
      }

      const listName = String(row["所属清单"] || "").trim();
      const categoryId = listName ? categoryMap.get(listName) || null : null;
      const isCompleted = String(row["是否完成"] || "").trim() === "是" || String(row["是否完成"] || "").trim() === "true";
      const status: TaskStatus = isCompleted ? "COMPLETED" : "TODO";

      try {
        const task = await prisma.task.create({
          data: {
            title,
            description: row["任务描述"] ? String(row["任务描述"]) : null,
            status,
            categoryId,
            dueDate: parseDate(row["截止日期"]),
            completedAt: isCompleted ? parseDate(row["完成时间"]) || new Date() : null,
            npc: row["NPC"] ? String(row["NPC"]) : null,
            notes: row["备注"] ? String(row["备注"]) : null,
            towerLink: row["链接地址"] ? String(row["链接地址"]) : null,
            sortOrder: i,
          },
        });
        taskTitleToId.set(title, task.id);
        created++;
      } catch (err) {
        skipped++;
        errors.push(`第 ${i + 2} 行：创建失败 - ${err instanceof Error ? err.message : "未知错误"}`);
      }
    }

    // 4. 第二遍：处理父任务关系
    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      const title = String(row["任务标题"] || "").trim();
      const parentTitle = String(row["父任务"] || "").trim();

      if (!title || !parentTitle) continue;

      const taskId = taskTitleToId.get(title);
      const parentId = taskTitleToId.get(parentTitle);

      if (taskId && parentId) {
        await prisma.task.update({
          where: { id: taskId },
          data: { parentId },
        });
      }
    }

    return NextResponse.json({
      total: rows.length,
      created,
      skipped,
      errors,
    });
  } catch (err) {
    console.error("Import error:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "导入失败" },
      { status: 500 }
    );
  }
}
