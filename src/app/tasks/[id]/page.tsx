import { prisma } from "@/lib/prisma";
import { TaskStatus } from "@/generated/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import TaskActions from "@/components/TaskActions";

export const dynamic = "force-dynamic";

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

function formatDate(date: Date | null): string {
  if (!date) return "—";
  return new Date(date).toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function TaskDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const task = await prisma.task.findUnique({
    where: { id },
    include: {
      category: true,
      parent: { include: { category: true } },
      children: { include: { category: true }, orderBy: { sortOrder: "asc" } },
      taskTags: { include: { tag: true } },
      recurringTask: true,
      ledgerItems: { include: { ledger: true } },
    },
  });

  if (!task) notFound();

  const isOverdue =
    task.dueDate &&
    new Date(task.dueDate) < new Date() &&
    task.status !== "COMPLETED";

  return (
    <div className="p-6 max-w-3xl mx-auto">
      {/* 返回链接 */}
      <Link href="/tasks" className="text-sm text-gray-500 hover:text-gray-700 mb-4 inline-block">
        ← 返回任务列表
      </Link>

      {/* 标题和状态 */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-4">
        <div className="flex items-start gap-3 mb-4">
          <h1 className={`text-2xl font-bold flex-1 ${task.status === "COMPLETED" ? "line-through text-gray-400" : ""}`}>
            {task.title}
          </h1>
          <span className={`text-sm px-3 py-1 rounded-full shrink-0 ${statusColors[task.status]}`}>
            {statusLabels[task.status]}
          </span>
        </div>

        {task.description && (
          <p className="text-gray-600 text-sm whitespace-pre-wrap mb-4">
            {task.description}
          </p>
        )}

        {/* 操作按钮 */}
        <TaskActions taskId={task.id} status={task.status} />
      </div>

      {/* 详细信息 */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-4">
        <h2 className="text-sm font-semibold text-gray-500 mb-3">详细信息</h2>
        <dl className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
          <InfoRow label="分类" value={task.category?.name || "未分类"} />
          <InfoRow label="NPC / 处理入口" value={task.npc || "—"} />
          <InfoRow
            label="开始日期"
            value={formatDate(task.startDate)}
          />
          <InfoRow
            label="截止日期"
            value={formatDate(task.dueDate)}
            highlight={!!isOverdue}
          />
          <InfoRow
            label="完成时间"
            value={formatDate(task.completedAt)}
          />
          <InfoRow
            label="创建时间"
            value={formatDate(task.createdAt)}
          />
        </dl>

        {/* 标签 */}
        {task.taskTags.length > 0 && (
          <div className="mt-4">
            <span className="text-xs text-gray-500">标签：</span>
            {task.taskTags.map(({ tag }) => (
              <span
                key={tag.id}
                className="inline-block text-xs px-2 py-0.5 rounded-full mr-1"
                style={{
                  backgroundColor: tag.color + "20",
                  color: tag.color,
                }}
              >
                {tag.name}
              </span>
            ))}
          </div>
        )}

        {/* Tower 链接 */}
        {task.towerLink && (
          <div className="mt-4">
            <a
              href={task.towerLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline"
            >
              🔗 原始 Tower 链接 →
            </a>
          </div>
        )}
      </div>

      {/* 备注 */}
      {task.notes && (
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-4">
          <h2 className="text-sm font-semibold text-gray-500 mb-2">备注</h2>
          <p className="text-sm text-gray-700 whitespace-pre-wrap">{task.notes}</p>
        </div>
      )}

      {/* 父任务 */}
      {task.parent && (
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-4">
          <h2 className="text-sm font-semibold text-gray-500 mb-2">父任务</h2>
          <Link
            href={`/tasks/${task.parent.id}`}
            className="text-sm text-blue-600 hover:underline"
          >
            ▸ {task.parent.title}
          </Link>
        </div>
      )}

      {/* 子任务 */}
      {task.children.length > 0 && (
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-4">
          <h2 className="text-sm font-semibold text-gray-500 mb-3">
            子任务 ({task.children.length})
          </h2>
          <ul className="space-y-2">
            {task.children.map((child) => (
              <li key={child.id} className="flex items-center gap-2">
                <span
                  className={`w-2 h-2 rounded-full shrink-0 ${
                    child.status === "COMPLETED"
                      ? "bg-green-500"
                      : child.status === "IN_PROGRESS"
                      ? "bg-blue-500"
                      : "bg-gray-300"
                  }`}
                />
                <Link
                  href={`/tasks/${child.id}`}
                  className={`text-sm hover:text-blue-600 ${
                    child.status === "COMPLETED" ? "line-through text-gray-400" : ""
                  }`}
                >
                  {child.title}
                </Link>
                {child.dueDate && (
                  <span className="text-xs text-gray-400 ml-auto">
                    {new Date(child.dueDate).toLocaleDateString("zh-CN")}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* 周期任务信息 */}
      {task.recurringTask && (
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-4">
          <h2 className="text-sm font-semibold text-gray-500 mb-2">周期任务</h2>
          <p className="text-sm text-gray-700">
            频率：{task.recurringTask.frequency}
            {task.recurringTask.nextDueDate && (
              <span className="ml-4">
                下次到期：{formatDate(task.recurringTask.nextDueDate)}
              </span>
            )}
          </p>
        </div>
      )}
    </div>
  );
}

function InfoRow({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="flex flex-col">
      <dt className="text-xs text-gray-400">{label}</dt>
      <dd className={`text-sm ${highlight ? "text-red-600 font-medium" : "text-gray-800"}`}>
        {value}
      </dd>
    </div>
  );
}
