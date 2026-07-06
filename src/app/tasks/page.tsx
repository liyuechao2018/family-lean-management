import { prisma } from "@/lib/prisma";
import { TaskStatus } from "@/generated/prisma";
import TaskList from "@/components/TaskList";
import Link from "next/link";

export const dynamic = "force-dynamic";

const statusFilter = [
  { value: "all", label: "全部" },
  { value: "TODO", label: "待处理" },
  { value: "IN_PROGRESS", label: "进行中" },
  { value: "COMPLETED", label: "已完成" },
  { value: "ARCHIVED", label: "已归档" },
];

async function getTasks(status?: string) {
  const where =
    status && status !== "all"
      ? { status: { equals: status as TaskStatus } }
      : {};

  return prisma.task.findMany({
    where,
    orderBy: [{ dueDate: "asc" }, { createdAt: "desc" }],
    include: { category: true },
    take: 100,
  });
}

export default async function TasksPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>;
}) {
  const { status } = await searchParams;
  const tasks = await getTasks(status);
  const totalCount = await prisma.task.count();

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">全部任务</h2>
        <span className="text-sm text-gray-500">
          共 {totalCount} 项
        </span>
      </div>

      {/* 状态筛选 */}
      <div className="flex gap-2 mb-4 flex-wrap">
        {statusFilter.map((f) => (
          <Link
            key={f.value}
            href={f.value === "all" ? "/tasks" : `/tasks?status=${f.value}`}
            className={`text-sm px-3 py-1.5 rounded-lg transition-colors ${
              (!status && f.value === "all") || status === f.value
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {f.label}
          </Link>
        ))}
      </div>

      <TaskList tasks={tasks} />
    </div>
  );
}
