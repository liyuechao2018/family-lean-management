import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { calculateNextDueDate } from "@/lib/recurrence";
import { RecurringFrequency } from "@/generated/prisma";

// GET /api/recurring?taskId=xxx
export async function GET(req: NextRequest) {
  const taskId = req.nextUrl.searchParams.get("taskId");
  if (!taskId) {
    return NextResponse.json({ error: "Need taskId" }, { status: 400 });
  }
  const recurring = await prisma.recurringTask.findUnique({
    where: { taskId },
    include: { task: { include: { category: true } } },
  });
  return NextResponse.json(recurring || null);
}

// POST /api/recurring — 创建或更新循环配置
export async function POST(req: NextRequest) {
  const body = await req.json();
  const {
    taskId,
    frequency,
    interval = 1,
    weekDays,
    monthDate,
    monthWeekOrdinal,
    monthWeekDay,
    yearMonth,
    yearDate,
    customDays,
    endDate,
  } = body;

  if (!taskId || !frequency) {
    return NextResponse.json({ error: "Need taskId and frequency" }, { status: 400 });
  }

  // 获取任务的当前 dueDate 作为计算基准
  const task = await prisma.task.findUnique({ where: { id: taskId } });
  if (!task) {
    return NextResponse.json({ error: "Task not found" }, { status: 404 });
  }

  const baseDate = task.dueDate ? new Date(task.dueDate) : new Date();
  const nextDueDate = calculateNextDueDate(
    frequency as RecurringFrequency,
    interval,
    baseDate,
    {
      weekDays: weekDays || undefined,
      monthDate: monthDate ?? undefined,
      monthWeekOrdinal: monthWeekOrdinal ?? undefined,
      monthWeekDay: monthWeekDay ?? undefined,
      yearMonth: yearMonth ?? undefined,
      yearDate: yearDate ?? undefined,
      customDays: customDays ?? undefined,
    }
  );

  // 检查是否已有循环配置
  const existing = await prisma.recurringTask.findUnique({ where: { taskId } });

  const data = {
    frequency,
    interval,
    weekDays: weekDays ? JSON.stringify(weekDays) : "[]",
    monthDate: monthDate ?? null,
    monthWeekOrdinal: monthWeekOrdinal ?? null,
    monthWeekDay: monthWeekDay ?? null,
    yearMonth: yearMonth ?? null,
    yearDate: yearDate ?? null,
    customDays: customDays ?? null,
    nextDueDate,
    endDate: endDate ? new Date(endDate) : null,
  };

  let result;
  if (existing) {
    result = await prisma.recurringTask.update({
      where: { taskId },
      data,
    });
  } else {
    result = await prisma.recurringTask.create({
      data: { taskId, ...data },
    });
  }

  return NextResponse.json(result);
}

// DELETE /api/recurring?taskId=xxx — 删除循环配置
export async function DELETE(req: NextRequest) {
  const taskId = req.nextUrl.searchParams.get("taskId");
  if (!taskId) {
    return NextResponse.json({ error: "Need taskId" }, { status: 400 });
  }
  try {
    await prisma.recurringTask.delete({ where: { taskId } });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "删除失败" }, { status: 500 });
  }
}
