import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { TaskStatus } from "@/generated/prisma";

export const dynamic = "force-dynamic";

async function getDashboardData() {
  const [totalTasks, todoTasks, inProgressTasks, completedToday, overdueTasks] =
    await Promise.all([
      prisma.task.count(),
      prisma.task.count({ where: { status: TaskStatus.TODO } }),
      prisma.task.count({ where: { status: TaskStatus.IN_PROGRESS } }),
      prisma.task.count({
        where: {
          status: TaskStatus.COMPLETED,
          completedAt: {
            gte: new Date(new Date().setHours(0, 0, 0, 0)),
          },
        },
      }),
      prisma.task.count({
        where: {
          status: { not: TaskStatus.COMPLETED },
          dueDate: { lt: new Date(new Date().setHours(0, 0, 0, 0)) },
        },
      }),
    ]);

  const upcomingTasks = await prisma.task.findMany({
    where: {
      status: { not: TaskStatus.COMPLETED },
      dueDate: {
        gte: new Date(),
        lte: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      },
    },
    orderBy: { dueDate: "asc" },
    take: 10,
    include: { category: true },
  });

  return { totalTasks, todoTasks, inProgressTasks, completedToday, overdueTasks, upcomingTasks };
}

export default async function DashboardPage() {
  const data = await getDashboardData();

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">总览</h2>

      {/* 统计卡片 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <StatCard label="全部事项" count={data.totalTasks} color="blue" />
        <StatCard label="待处理" count={data.todoTasks} color="yellow" />
        <StatCard label="进行中" count={data.inProgressTasks} color="purple" />
        <StatCard label="已逾期" count={data.overdueTasks} color="red" />
      </div>

      {/* 本周到期 */}
      <div className="bg-white rounded-xl border border-gray-200 p-5">
        <h3 className="text-lg font-semibold mb-4">近期到期事项</h3>
        {data.upcomingTasks.length === 0 ? (
          <p className="text-gray-400 text-sm">未来7天内没有到期事项</p>
        ) : (
          <ul className="divide-y divide-gray-100">
            {data.upcomingTasks.map((task) => (
              <li key={task.id} className="py-3 flex items-center gap-3">
                <span
                  className={`w-2 h-2 rounded-full shrink-0 ${
                    task.dueDate && new Date(task.dueDate) < new Date()
                      ? "bg-red-500"
                      : "bg-yellow-400"
                  }`}
                />
                <span className="flex-1 text-sm">{task.title}</span>
                {task.dueDate && (
                  <span className="text-xs text-gray-500">
                    {new Date(task.dueDate).toLocaleDateString("zh-CN")}
                  </span>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function StatCard({
  label,
  count,
  color,
}: {
  label: string;
  count: number;
  color: string;
}) {
  const colors: Record<string, string> = {
    blue: "bg-blue-50 text-blue-700 border-blue-200",
    yellow: "bg-yellow-50 text-yellow-700 border-yellow-200",
    purple: "bg-purple-50 text-purple-700 border-purple-200",
    red: "bg-red-50 text-red-700 border-red-200",
  };
  return (
    <div className={`rounded-xl border p-4 ${colors[color] || colors.blue}`}>
      <div className="text-2xl font-bold">{count}</div>
      <div className="text-sm mt-1">{label}</div>
    </div>
  );
}
