import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { TaskStatus } from "@/generated/prisma";

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await request.json();

  const data: Record<string, unknown> = {};
  if (body.status) data.status = body.status as TaskStatus;
  if (body.title) data.title = body.title;
  if (body.description !== undefined) data.description = body.description;
  if (body.categoryId !== undefined) data.categoryId = body.categoryId;
  if (body.startDate !== undefined) {
    data.startDate = body.startDate ? new Date(body.startDate) : null;
  }
  if (body.dueDate !== undefined) {
    data.dueDate = body.dueDate ? new Date(body.dueDate) : null;
  }
  if (body.completedAt !== undefined) {
    data.completedAt = body.completedAt ? new Date(body.completedAt) : null;
  }
  if (body.npc !== undefined) data.npc = body.npc;
  if (body.notes !== undefined) data.notes = body.notes;
  if (body.parentId !== undefined) data.parentId = body.parentId || null;

  try {
    const task = await prisma.task.update({
      where: { id },
      data,
    });
    return NextResponse.json(task);
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "更新失败" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    await prisma.task.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "删除失败" },
      { status: 500 }
    );
  }
}

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const task = await prisma.task.findUnique({
    where: { id },
    include: {
      category: true,
      parent: true,
      children: { include: { category: true } },
      taskTags: { include: { tag: true } },
    },
  });
  if (!task) {
    return NextResponse.json({ error: "未找到任务" }, { status: 404 });
  }
  return NextResponse.json(task);
}
