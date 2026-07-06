import { prisma } from "@/lib/prisma";
import { TaskStatus } from "@/generated/prisma";
import TaskList from "@/components/TaskList";
import Link from "next/link";

export const dynamic = "force-dynamic";

async function getTodayTasks() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const [todayTasks, overdueTasks, upcomingTasks] = await Promise.all([
    // 今日到期或今日起始的任务
    prisma.task.findMany({
      where: {
        status: { not: TaskStatus.COMPLETED },
        OR: [
          { dueDate: { gte: today, lt: tomorrow } },
          { startDate: { gte: today, lt: tomorrow } },
        ],
      },
      orderBy: { dueDate: "asc" },
      include: { category: true },
    }),
    // 已逾期未完成
    prisma.task.findMany({
      where: {
        status: { not: TaskStatus.COMPLETED },
        dueDate: { lt: today },
      },
      orderBy: { dueDate: "asc" },
      include: { category: true },
      take: 20,
    }),
    // 未来3天到期
    prisma.task.findMany({
      where: {
        status: { not: TaskStatus.COMPLETED },
        dueDate: { gte: tomorrow, lte: new Date(tomorrow.getTime() + 3 * 86400000) },
      },
      orderBy: { dueDate: "asc" },
      include: { category: true },
    }),
  ]);

  return { todayTasks, overdueTasks, upcomingTasks };
}

export default async function TodayPage() {
  const { todayTasks, overdueTasks, upcomingTasks } = await getTodayTasks();

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">今日待办</h2>

      {/* 已逾期 */}
      {overdueTasks.length > 0 && (
        <section className="mb-6">
          <h3 className="text-red-600 font-semibold mb-2 text-sm">
            已逾期 ({overdueTasks.length})
          </h3>
          <TaskList tasks={overdueTasks} />
        </section>
      )}

      {/* 今日 */}
      <section className="mb-6">
        <h3 className="text-blue-700 font-semibold mb-2 text-sm">
          今日 ({todayTasks.length})
        </h3>
        {todayTasks.length === 0 ? (
          <p className="text-gray-400 text-sm py-4">今日无待办事项</p>
        ) : (
          <TaskList tasks={todayTasks} />
        )}
      </section>

      {/* 未来3天 */}
      {upcomingTasks.length > 0 && (
        <section className="mb-6">
          <h3 className="text-gray-500 font-semibold mb-2 text-sm">
            未来3天 ({upcomingTasks.length})
          </h3>
          <TaskList tasks={upcomingTasks} />
        </section>
      )}

      <div className="mt-6">
        <Link href="/tasks" className="text-sm text-blue-600 hover:underline">
          → 查看全部任务
        </Link>
      </div>
    </div>
  );
}
