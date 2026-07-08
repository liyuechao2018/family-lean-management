import { prisma } from "@/lib/prisma";
import CategoryBoard from "@/components/CategoryBoard";

export const dynamic = "force-dynamic";

async function getStandaloneCategories() {
  const categories = await prisma.category.findMany({
    where: { standalone: true },
    orderBy: [{ sortOrder: "asc" }, { name: "asc" }],
    include: {
      _count: { select: { tasks: true } },
      parent: true,
      tasks: {
        where: {
          parentId: null,
        },
        orderBy: [{ dueDate: "asc" }, { createdAt: "desc" }],
        include: {
          category: true,
          recurringTask: true,
          children: {
            include: {
              category: true,
              recurringTask: true,
              children: {
                include: {
                  category: true,
                  recurringTask: true,
                },
                orderBy: { sortOrder: "asc" },
              },
            },
            orderBy: { sortOrder: "asc" },
          },
        },
      },
    },
  });
  return categories;
}

async function getCustomFields() {
  return prisma.customField.findMany({
    orderBy: { sortOrder: "asc" },
  });
}

async function getSettings() {
  const keys = ["field_visible_columns", "column_widths", "custom_field_panel_open"];
  const settings = await prisma.setting.findMany({
    where: { key: { in: keys } },
  });
  return Object.fromEntries(settings.map((s) => [s.key, s.value]));
}

export default async function MembersPage() {
  const [categories, customFields, settings] = await Promise.all([
    getStandaloneCategories(),
    getCustomFields(),
    getSettings(),
  ]);

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">会员管理</h1>
        <p className="text-sm text-gray-500 mt-1">
          家庭层面的会员、订阅与权益管理
        </p>
      </div>
      <CategoryBoard
        categories={categories}
        customFields={customFields}
        settings={settings}
        singleMode
      />
    </div>
  );
}
