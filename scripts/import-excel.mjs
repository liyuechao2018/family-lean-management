#!/usr/bin/env node
/**
 * 导入 Tower Excel 到家庭精益化管理系统
 */

import { PrismaClient } from '../src/generated/prisma/index.js';
import XLSX from 'xlsx';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { config } from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
config({ path: join(__dirname, '..', '.env') });

const prisma = new PrismaClient();

// 一级分类关键词匹配（topLevel 与种子脚本一致）
const CATEGORY_RULES = [
  { keyword: '金融', topLevel: 'FINANCE' },
  { keyword: '家庭', topLevel: 'FAMILY' },
  { keyword: '工作', topLevel: 'WORK' },
  { keyword: '课程', topLevel: 'COURSE' },
  { keyword: '务虚', topLevel: 'STRATEGIC' },
  { keyword: '文化', topLevel: 'CULTURE' },
];

function matchTopLevel(listName) {
  if (!listName) return 'OTHER';
  for (const rule of CATEGORY_RULES) {
    if (listName.includes(rule.keyword)) return rule.topLevel;
  }
  return 'OTHER';
}

function parseDate(val) {
  if (!val) return null;
  if (typeof val === 'number') {
    const d = new Date(Math.round((val - 25569) * 86400000));
    return d.toISOString();
  }
  if (typeof val === 'string') {
    const d = new Date(val);
    if (!isNaN(d.getTime())) return d.toISOString();
  }
  return null;
}

async function main() {
  const FILE = 'F:/Downloads/家庭精益化管理体系_按截止时间排序.xlsx';

  console.log('读取 Excel...');
  const wb = XLSX.readFile(FILE);
  const ws = wb.Sheets[wb.SheetNames[0]];
  const rows = XLSX.utils.sheet_to_json(ws, { defval: null });

  console.log(`共 ${rows.length} 条`);

  // 清空旧数据（避免重复导入）
  console.log('清空旧任务数据...');
  await prisma.task.deleteMany({});
  await prisma.category.deleteMany({});

  // 创建一级分类
  console.log('创建一级分类...');
  const topCatMap = {};
  for (const rule of CATEGORY_RULES) {
    const created = await prisma.category.create({
      data: {
        name: rule.topLevel,
        level: 1,
        topLevel: rule.topLevel,
        sortOrder: 0,
      },
    });
    topCatMap[rule.topLevel] = created;
    console.log(`  一级分类: ${rule.topLevel}`);
  }
  // "其他" 分类
  const otherCat = await prisma.category.create({
    data: {
      name: 'OTHER',
      level: 1,
      topLevel: 'OTHER',
      sortOrder: 99,
    },
  });
  topCatMap['OTHER'] = otherCat;

  // 创建二级分类
  console.log('创建二级分类...');
  const listNameSet = new Set(rows.map(r => r['所属清单']).filter(Boolean));
  const subCatMap = {}; // listName → category

  for (const listName of listNameSet) {
    const topLevel = matchTopLevel(listName);
    const parent = topCatMap[topLevel];
    if (!parent) continue;

    const subCat = await prisma.category.create({
      data: {
        name: listName,
        level: 2,
        topLevel: topLevel,
        parentId: parent.id,
        sortOrder: 0,
      },
    });
    subCatMap[listName] = subCat;
  }
  console.log(`  共创建 ${Object.keys(subCatMap).length} 个二级分类`);

  // 第一遍：创建所有任务
  console.log('\n创建任务...');
  const taskMap = {}; // title+listName → task

  for (const row of rows) {
    const title = row['任务标题'] || '（无标题）';
    const listName = row['所属清单'] || null;
    const subCat = listName ? subCatMap[listName] : null;

    const taskData = {
      title,
      description: row['任务描述'] || null,
      status: 'TODO',
      startDate: parseDate(row['开始日期']),
      dueDate: parseDate(row['截止日期']),
      npc: row['NPC'] || null,
      notes: row['备注'] || null,
      towerLink: row['链接地址'] || null,
    };

    // 使用 connect 语法关联分类
    if (subCat) {
      taskData.category = { connect: { id: subCat.id } };
    }

    const task = await prisma.task.create({ data: taskData });

    const key = `${title}|||${listName}`;
    taskMap[key] = task;
  }

  console.log(`  已创建 ${Object.keys(taskMap).length} 条任务`);

  // 第二遍：处理父子关系
  console.log('\n处理父子关系...');
  let parentCount = 0;
  for (const row of rows) {
    const parentTitle = row['父任务'];
    if (!parentTitle) continue;

    const childKey = `${row['任务标题']}|||${row['所属清单']}`;
    const childTask = taskMap[childKey];
    if (!childTask) continue;

    // 父任务标题可能带 "#编号 " 前缀（如 "#1258 笔记本"），需要去掉
    const cleanParentTitle = parentTitle.replace(/^#\d+\s*/, '');
    const parentKey = `${cleanParentTitle}|||${row['所属清单']}`;
    const parentTask = taskMap[parentKey];

    // 也尝试用原始标题匹配
    if (!parentTask) {
      const altKey = `${parentTitle}|||${row['所属清单']}`;
      const altTask = taskMap[altKey];
      if (altTask) {
        await prisma.task.update({
          where: { id: childTask.id },
          data: { parent: { connect: { id: altTask.id } } },
        });
        parentCount++;
        continue;
      }
    }

    if (parentTask) {
      await prisma.task.update({
        where: { id: childTask.id },
        data: { parent: { connect: { id: parentTask.id } } },
      });
      parentCount++;
    } else {
      console.warn(`  找不到父任务: "${parentTitle}"（子: "${row['任务标题']}"）`);
    }
  }

  console.log(`  已建立 ${parentCount} 条父子关系`);

  // 统计
  const total = await prisma.task.count();
  const catCount = await prisma.category.count();
  console.log(`\n=== 导入完成 ===`);
  console.log(`数据库共 ${catCount} 个分类, ${total} 条任务`);

  await prisma.$disconnect();
}

main().catch(e => {
  console.error('导入失败:', e.message);
  if (e.stack) console.error(e.stack);
  process.exit(1);
});
