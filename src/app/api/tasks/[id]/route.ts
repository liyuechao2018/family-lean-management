import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { TaskStatus, RecurringFrequency } from "@/generated/prisma";
import { calculateNextDueDate } from "@/lib/recurrence";

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
    // 检查是否是标记为完成
    const wasCompleted = body.status === "COMPLETED";
    const now = new Date();

    if (wasCompleted) {
      data.completedAt = now;
    }

    const task = await prisma.task.update({
      where: { id },
      data,
    });

    // 如果标记为完成，检查是否有循环任务配置
    if (wasCompleted) {
      const recurring = await prisma.recurringTask.findUnique({
        where: { taskId: id },
      });

      if (recurring && (!recurring.endDate || now <= recurring.endDate)) {
        // 基于上一个截止日期计算下一次截止日期
        const baseDate = task.dueDate ? new Date(task.dueDate) : now;
        const nextDue = calculateNextDueDate(
          recurring.frequency as RecurringFrequency,
          recurring.interval,
          baseDate,
          {
            weekDays: recurring.weekDays ? JSON.parse(recurring.weekDays) : undefined,
            monthDate: recurring.monthDate ?? undefined,
            monthWeekOrdinal: recurring.monthWeekOrdinal ?? undefined,
            monthWeekDay: recurring.monthWeekDay ?? undefined,
            yearMonth: recurring.yearMonth ?? undefined,
            yearDate: recurring.yearDate ?? undefined,
            customDays: recurring.customDays ?? undefined,
          }
        );

        // 检查是否超过结束日期
        if (!recurring.endDate || nextDue <= recurring.endDate) {
          // 创建新任务（复制原任务属性）
          const newTask = await prisma.task.create({
            data: {
              title: task.title,
              description: task.description,
              status: "TODO",
              categoryId: task.categoryId,
              dueDate: nextDue,
              npc: task.npc,
              notes: task.notes,
              towerLink: task.towerLink,
              sortOrder: task.sortOrder,
            },
          });

          // 为新任务创建循环配置（复制原配置）
          await prisma.recurringTask.create({
            data: {
              taskId: newTask.id,
              frequency: recurring.frequency,
              interval: recurring.interval,
              weekDays: recurring.weekDays,
              monthDate: recurring.monthDate,
              monthWeekOrdinal: recurring.monthWeekOrdinal,
              monthWeekDay: recurring.monthWeekDay,
              yearMonth: recurring.yearMonth,
              yearDate: recurring.yearDate,
              customDays: recurring.customDays,
              nextDueDate: nextDue,
              endDate: recurring.endDate,
            },
          });

          // 更新旧任务的循环配置：标记最后完成时间
          await prisma.recurringTask.update({
            where: { taskId: id },
            data: { lastCompletedAt: now, nextDueDate: null },
          });
        }
      }
    }

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
      recurringTask: true,
    },
  });
  if (!task) {
    return NextResponse.json({ error: "未找到任务" }, { status: 404 });
  }
  return NextResponse.json(task);
}
