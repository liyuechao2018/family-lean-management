import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { TaskStatus } from "@/generated/prisma";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const status = searchParams.get("status");
  const categoryId = searchParams.get("categoryId");

  const where: Record<string, unknown> = {};
  if (status && status !== "all") {
    where.status = { equals: status as TaskStatus };
  }
  if (categoryId) {
    where.categoryId = categoryId;
  }

  const tasks = await prisma.task.findMany({
    where,
    orderBy: [{ dueDate: "asc" }, { createdAt: "desc" }],
    include: { category: true },
    take: 200,
  });

  return NextResponse.json(tasks);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  try {
    const task = await prisma.task.create({
      data: {
        title: body.title,
        description: body.description || null,
        status: (body.status as TaskStatus) || "TODO",
        categoryId: body.categoryId || null,
        parentId: body.parentId || null,
        startDate: body.startDate ? new Date(body.startDate) : null,
        dueDate: body.dueDate ? new Date(body.dueDate) : null,
        npc: body.npc || null,
        notes: body.notes || null,
        towerLink: body.towerLink || null,
      },
    });
    return NextResponse.json(task, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "创建失败" },
      { status: 500 }
    );
  }
}
