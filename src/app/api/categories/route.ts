import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET: 获取所有分类（含任务数）
export async function GET() {
  const categories = await prisma.category.findMany({
    orderBy: [{ sortOrder: "asc" }, { name: "asc" }],
    include: {
      _count: { select: { tasks: true } },
      parent: true,
    },
  });
  return NextResponse.json(categories);
}

// POST: 创建新分类
export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, level = 1, topLevel, parentId, color, icon } = body;

  if (!name) {
    return NextResponse.json({ error: "分类名称不能为空" }, { status: 400 });
  }

  try {
    const category = await prisma.category.create({
      data: {
        name,
        level,
        topLevel: topLevel || (level === 1 ? name.toUpperCase() : "OTHER"),
        parentId: parentId || null,
        color: color || null,
        icon: icon || null,
        sortOrder: body.sortOrder ?? 0,
      },
    });
    return NextResponse.json(category, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "创建失败" },
      { status: 500 }
    );
  }
}
