import { prisma } from "../src/lib/prisma";

const topLevelCategories = [
  { name: "金融", topLevel: "FINANCE", color: "#3B82F6", icon: "💰", sortOrder: 0 },
  { name: "家庭", topLevel: "FAMILY", color: "#10B981", icon: "🏠", sortOrder: 1 },
  { name: "工作", topLevel: "WORK", color: "#8B5CF6", icon: "💼", sortOrder: 2 },
  { name: "课程", topLevel: "COURSE", color: "#F59E0B", icon: "📚", sortOrder: 3 },
  { name: "务虚", topLevel: "STRATEGIC", color: "#EC4899", icon: "🎯", sortOrder: 4 },
  { name: "文化", topLevel: "CULTURE", color: "#06B6D4", icon: "📖", sortOrder: 5 },
  { name: "其他", topLevel: "OTHER", color: "#6B7280", icon: "📦", sortOrder: 6 },
];

async function main() {
  console.log("开始种子数据初始化...");

  for (const cat of topLevelCategories) {
    const existing = await prisma.category.findFirst({
      where: { topLevel: cat.topLevel, level: 1 },
    });
    if (existing) {
      console.log("  分类已存在: " + cat.name);
      continue;
    }
    await prisma.category.create({
      data: { ...cat, level: 1 },
    });
    console.log("  创建分类: " + cat.name + " (" + cat.topLevel + ")");
  }

  await prisma.setting.upsert({
    where: { key: "systemInitialized" },
    update: {},
    create: {
      key: "systemInitialized",
      value: new Date().toISOString(),
    },
  });
  console.log("系统设置已初始化");
  console.log("种子数据初始化完成！");
}

main()
  .catch((e) => {
    console.error("种子数据初始化失败:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
