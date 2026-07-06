import Link from "next/link";
import { Task, Category, TaskStatus } from "@/generated/prisma";
import { formatDate, isOverdue } from "@/lib/date";

type TaskWithCategory = Task & { category: Category | null };

const statusLabels: Record<TaskStatus, string> = {
  TODO: "待处理",
  IN_PROGRESS: "进行中",
  COMPLETED: "已完成",
  ARCHIVED: "已归档",
  CANCELLED: "已取消",
};

const statusColors: Record<TaskStatus, string> = {
  TODO: "bg-gray-100 text-gray-700",
  IN_PROGRESS: "bg-blue-100 text-blue-700",
  COMPLETED: "bg-green-100 text-green-700",
  ARCHIVED: "bg-gray-100 text-gray-400",
  CANCELLED: "bg-red-100 text-red-700",
};

export default function TaskList({ tasks }: { tasks: TaskWithCategory[] }) {
  if (tasks.length === 0) {
    return <p className="text-gray-400 text-sm py-4">暂无任务</p>;
  }

  return (
    <ul className="bg-white rounded-xl border border-gray-200 divide-y divide-gray-100">
      {tasks.map((task) => {
        const overdue = isOverdue(task.dueDate, task.status);

        return (
          <li
            key={task.id}
            className={`px-4 py-3 flex items-center gap-3 hover:bg-gray-50 transition-colors ${
              overdue ? "bg-red-50/50" : ""
            }`}
          >
            {/* 状态指示 */}
            <span
              className={`w-2 h-2 rounded-full shrink-0 ${
                overdue
                  ? "bg-red-500"
                  : task.status === "COMPLETED"
                  ? "bg-green-500"
                  : task.status === "IN_PROGRESS"
                  ? "bg-blue-500"
                  : "bg-gray-300"
              }`}
            />

            {/* 标题 */}
            <Link
              href={`/tasks/${task.id}`}
              className="flex-1 text-sm hover:text-blue-600 truncate"
            >
              {task.title}
            </Link>

            {/* 分类 */}
            {task.category && (
              <span
                className="text-xs px-2 py-0.5 rounded-full shrink-0"
                style={{
                  backgroundColor: task.category.color + "20" || "#f3f4f6",
                  color: task.category.color || "#6b7280",
                }}
              >
                {task.category.name}
              </span>
            )}

            {/* 截止日期 */}
            {task.dueDate && (
              <span
                className={`text-xs shrink-0 ${
                  overdue ? "text-red-600 font-medium" : "text-gray-500"
                }`}
              >
                {formatDate(task.dueDate)}
              </span>
            )}

            {/* 状态标签 */}
            <span
              className={`text-xs px-2 py-0.5 rounded-full shrink-0 ${statusColors[task.status]}`}
            >
              {statusLabels[task.status]}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
