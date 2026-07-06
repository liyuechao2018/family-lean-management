import { prisma } from "@/lib/prisma";
import Link from "next/link";

export const dynamic = "force-dynamic";

const freqLabels: Record<string, string> = {
  DAILY: "每天",
  WEEKLY: "每周",
  MONTHLY_DATE: "每月(指定日期)",
  MONTHLY_DAY: "每月(指定星期)",
  YEARLY: "每年",
  CUSTOM: "自定义",
};

export default async function RecurringPage() {
  const recurringTasks = await prisma.recurringTask.findMany({
    include: {
      task: { include: { category: true } },
    },
    orderBy: { nextDueDate: "asc" },
  });

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">周期任务</h2>
        <span className="text-sm text-gray-500">共 {recurringTasks.length} 项</span>
      </div>

      {recurringTasks.length === 0 ? (
        <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
          <p className="text-gray-400 text-sm mb-4">暂无周期任务</p>
          <p className="text-xs text-gray-400">
            周期任务适用于还款、保险、会员、车辆维护、理发、宠物护理等定期事务。
            <br />
            完成后会自动生成下一次任务。
          </p>
        </div>
      ) : (
        <ul className="bg-white rounded-xl border border-gray-200 divide-y divide-gray-100">
          {recurringTasks.map((rt) => {
            const isOverdue =
              rt.nextDueDate && new Date(rt.nextDueDate) < new Date();
            return (
              <li key={rt.id} className="px-4 py-3 flex items-center gap-3">
                <span
                  className={`w-2 h-2 rounded-full shrink-0 ${
                    isOverdue ? "bg-red-500" : "bg-blue-400"
                  }`}
                />
                <Link
                  href={`/tasks/${rt.taskId}`}
                  className="flex-1 text-sm hover:text-blue-600 truncate"
                >
                  {rt.task.title}
                </Link>
                <span className="text-xs text-gray-500 shrink-0">
                  {freqLabels[rt.frequency] || rt.frequency}
                </span>
                {rt.nextDueDate && (
                  <span
                    className={`text-xs shrink-0 ${
                      isOverdue ? "text-red-600 font-medium" : "text-gray-500"
                    }`}
                  >
                    {new Date(rt.nextDueDate).toLocaleDateString("zh-CN")}
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
