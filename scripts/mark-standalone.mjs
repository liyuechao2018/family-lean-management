// 将指定分类标记为独立视图（standalone=true），并分配 viewKey 用于路由到对应页面
// 用法: node scripts/mark-standalone.mjs
import { PrismaClient } from '../src/generated/prisma/index.js';

const prisma = new PrismaClient();

// 分类名称关键字 -> 独立视图标识
const MAPPINGS = [
  { keyword: '会员管理', viewKey: 'members' },
  { keyword: '充值卡余额', viewKey: 'cards' },
];

for (const { keyword, viewKey } of MAPPINGS) {
  const cats = await prisma.category.findMany({
    where: { name: { contains: keyword } },
    select: { id: true, name: true, level: true, topLevel: true },
  });

  if (cats.length === 0) {
    console.log(`未找到名称包含"${keyword}"的分类，跳过。`);
    continue;
  }

  for (const c of cats) {
    await prisma.category.update({
      where: { id: c.id },
      data: { standalone: true, viewKey },
    });
    console.log(`已标记 standalone=true, viewKey="${viewKey}": ${c.name} (${c.id})`);
  }
}

const remaining = await prisma.category.findMany({
  where: { standalone: true },
  select: { id: true, name: true, viewKey: true },
});
console.log(`当前 standalone 分类: ${JSON.stringify(remaining)}`);

await prisma.$disconnect();
