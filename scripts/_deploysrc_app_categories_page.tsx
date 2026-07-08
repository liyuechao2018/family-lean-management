import { prisma } from "@/lib/prisma";
import CategoryBoard from "@/components/CategoryBoard";

export const dynamic = "force-dynamic";

async function getCategoriesWithTasks() {
  const categories = await prisma.category.findMany({
    orderBy: [{ sortOrder: "asc" }, { name: "asc" }],
    include: {
      _count: { select: { tasks: true } },
      parent: true,
      tasks: {
        where: {
          parentId: null, // 只获取顶层任务，子任务通过 include children 获取
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

export default async function CategoriesPage() {
  const [categories, customFields, settings] = await Promise.all([
    getCategoriesWithTasks(),
    getCustomFields(),
    getSettings(),
  ]);

  return (
    <CategoryBoard
      categories={categories}
      customFields={customFields}
      settings={settings}
    />
  );
}
