import { prisma } from "@/lib/prisma";
import Link from "next/link";

export const dynamic = "force-dynamic";

const typeLabels: Record<string, string> = {
  FINANCIAL: "金融账户",
  LOAN: "贷款",
  INSURANCE: "保险",
  MEMBERSHIP: "会员",
  VEHICLE: "车辆",
  PROPERTY: "房屋",
  RECHARGE_CARD: "充值卡",
  EQUIPMENT: "设备",
  LOST_ITEM: "失物",
  HEALTH: "健康记录",
  DOMAIN: "网站域名",
  OTHER: "其他",
};

const typeIcons: Record<string, string> = {
  FINANCIAL: "💰",
  LOAN: "🏦",
  INSURANCE: "🛡️",
  MEMBERSHIP: "🎫",
  VEHICLE: "🚗",
  PROPERTY: "🏠",
  RECHARGE_CARD: "💳",
  EQUIPMENT: "🔧",
  LOST_ITEM: "❓",
  HEALTH: "💊",
  DOMAIN: "🌐",
  OTHER: "📦",
};

export default async function LedgerPage() {
  const ledgers = await prisma.ledger.findMany({
    orderBy: [{ type: "asc" }, { name: "asc" }],
    include: {
      _count: { select: { tasks: true } },
    },
  });

  const grouped = ledgers.reduce((acc, ledger) => {
    const type = ledger.type;
    if (!acc[type]) acc[type] = [];
    acc[type].push(ledger);
    return acc;
  }, {} as Record<string, typeof ledgers>);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">家庭台账</h2>
        <span className="text-sm text-gray-500">共 {ledgers.length} 项</span>
      </div>

      {ledgers.length === 0 ? (
        <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
          <p className="text-gray-400 text-sm mb-4">暂无台账记录</p>
          <p className="text-xs text-gray-400">
            台账用于管理金融账户、贷款、保险、会员、车辆、房屋等长期存在的家庭对象。
            <br />
            可在任务详情页将任务关联到台账对象。
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {Object.entries(grouped).map(([type, items]) => (
            <section key={type}>
              <h3 className="text-sm font-semibold text-gray-500 mb-2">
                {typeIcons[type] || "📦"} {typeLabels[type] || type} ({items.length})
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {items.map((ledger) => (
                  <div
                    key={ledger.id}
                    className="bg-white rounded-xl border border-gray-200 p-4 hover:border-blue-300 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-sm">{ledger.name}</span>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full ${
                          ledger.status === "active"
                            ? "bg-green-50 text-green-700"
                            : ledger.status === "expired"
                            ? "bg-red-50 text-red-700"
                            : "bg-gray-100 text-gray-500"
                        }`}
                      >
                        {ledger.status === "active" ? "有效" : ledger.status === "expired" ? "已过期" : "未激活"}
                      </span>
                    </div>
                    {ledger.description && (
                      <p className="text-xs text-gray-500 mt-1">{ledger.description}</p>
                    )}
                    {ledger._count.tasks > 0 && (
                      <p className="text-xs text-blue-600 mt-2">
                        关联 {ledger._count.tasks} 个任务
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
