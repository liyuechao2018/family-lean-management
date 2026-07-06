import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// PATCH: 更新分类
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await request.json();

  const data: Record<string, unknown> = {};
  if (body.name !== undefined) data.name = body.name;
  if (body.color !== undefined) data.color = body.color;
  if (body.icon !== undefined) data.icon = body.icon;
  if (body.sortOrder !== undefined) data.sortOrder = body.sortOrder;
  if (body.collapsed !== undefined) data.collapsed = body.collapsed;
  if (body.parentId !== undefined) data.parentId = body.parentId || null;

  try {
    const category = await prisma.category.update({
      where: { id },
      data,
    });
    return NextResponse.json(category);
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "更新失败" },
      { status: 500 }
    );
  }
}

// DELETE: 删除分类
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const { searchParams } = new URL(request.url);
  const reassignTo = searchParams.get("reassignTo"); // 将该分类下的任务迁移到此分类

  try {
    // 如果指定了迁移目标，先将任务迁移
    if (reassignTo) {
      await prisma.task.updateMany({
        where: { categoryId: id },
        data: { categoryId: reassignTo },
      });
    } else {
      // 否则将任务的 categoryId 设为 null
      await prisma.task.updateMany({
        where: { categoryId: id },
        data: { categoryId: null },
      });
    }

    // 删除子分类（如果有）
    await prisma.category.deleteMany({
      where: { parentId: id },
    });

    // 删除分类本身
    await prisma.category.delete({ where: { id } });

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "删除失败" },
      { status: 500 }
    );
  }
}
