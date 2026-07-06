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
          status: { not: "COMPLETED" },
          parentId: null, // 只获取顶层任务，子任务通过 include children 获取
        },
        orderBy: [{ dueDate: "asc" }, { createdAt: "desc" }],
        include: {
          category: true,
          children: {
            include: {
              category: true,
              children: {
                include: {
                  category: true,
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

export default async function CategoriesPage() {
  const categories = await getCategoriesWithTasks();

  return <CategoryBoard categories={categories} />;
}
