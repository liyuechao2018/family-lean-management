import { prisma } from "@/lib/prisma";
import Link from "next/link";

export const dynamic = "force-dynamic";

async function getCalendarData(year: number, month: number) {
  const startDate = new Date(year, month, 1);
  const endDate = new Date(year, month + 1, 0, 23, 59, 59);

  const tasks = await prisma.task.findMany({
    where: {
      OR: [{ dueDate: { gte: startDate, lte: endDate } }],
    },
    orderBy: { dueDate: "asc" },
    include: { category: true },
  });

  return tasks;
}

export default async function CalendarPage({
  searchParams,
}: {
  searchParams: Promise<{ year?: string; month?: string }>;
}) {
  const now = new Date();
  const params = await searchParams;
  const year = params.year ? parseInt(params.year) : now.getFullYear();
  const month = params.month ? parseInt(params.month) : now.getMonth();

  const tasks = await getCalendarData(year, month);

  const tasksByDate = new Map<string, typeof tasks>();
  for (const task of tasks) {
    const dateKey = task.dueDate
      ? new Date(task.dueDate).toDateString()
      : null;
    if (dateKey) {
      if (!tasksByDate.has(dateKey)) tasksByDate.set(dateKey, []);
      tasksByDate.get(dateKey)!.push(task);
    }
  }

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const startWeekday = firstDay.getDay();
  const daysInMonth = lastDay.getDate();
  const today = new Date();
  const isCurrentMonth = today.getFullYear() === year && today.getMonth() === month;

  const monthNames = ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"];
  const weekdayNames = ["日","一","二","三","四","五","六"];

  const prevMonth = month === 0 ? 11 : month - 1;
  const prevYear = month === 0 ? year - 1 : year;
  const nextMonth = month === 11 ? 0 : month + 1;
  const nextYear = month === 11 ? year + 1 : year;

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">{year}年 {monthNames[month]}</h2>
        <div className="flex gap-2">
          <Link href={`/calendar?year=${prevYear}&month=${prevMonth}`} className="px-3 py-1.5 text-sm bg-gray-100 rounded-lg hover:bg-gray-200">← 上一月</Link>
          <Link href={`/calendar?year=${nextYear}&month=${nextMonth}`} className="px-3 py-1.5 text-sm bg-gray-100 rounded-lg hover:bg-gray-200">下一月 →</Link>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-1">
        {weekdayNames.map((wd) => (
          <div key={wd} className="text-center text-xs font-medium text-gray-500 py-2">{wd}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: startWeekday }).map((_, i) => (
          <div key={`empty-${i}`} className="min-h-[80px] bg-gray-50 rounded-lg" />
        ))}

        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1;
          const date = new Date(year, month, day);
          const dateKey = date.toDateString();
          const dayTasks = tasksByDate.get(dateKey) || [];
          const isToday = isCurrentMonth && today.getDate() === day;

          return (
            <div key={day} className={`min-h-[80px] rounded-lg border p-1.5 ${isToday ? "border-blue-400 bg-blue-50" : "border-gray-200 bg-white"}`}>
              <div className={`text-xs mb-1 ${isToday ? "font-bold text-blue-600" : "text-gray-500"}`}>{day}</div>
              <div className="space-y-0.5">
                {dayTasks.slice(0, 3).map((task) => (
                  <Link key={task.id} href={`/tasks/${task.id}`} className="block text-[10px] truncate px-1 py-0.5 rounded hover:bg-blue-100" style={{ backgroundColor: task.category?.color ? task.category.color + "15" : "#f3f4f6", color: task.category?.color || "#6b7280" }} title={task.title}>
                    {task.status === "COMPLETED" ? "✓ " : ""}{task.title}
                  </Link>
                ))}
                {dayTasks.length > 3 && <p className="text-[10px] text-gray-400 px-1">+{dayTasks.length - 3} 更多</p>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
