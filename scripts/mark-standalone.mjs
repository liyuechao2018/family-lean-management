// 将"会员管理"分类标记为独立视图（standalone=true）
// 用法: node scripts/mark-standalone.mjs
import { PrismaClient } from '../src/generated/prisma/index.js';

const prisma = new PrismaClient();

const KEYWORD = '会员管理';

const cats = await prisma.category.findMany({
  where: { name: { contains: KEYWORD } },
  select: { id: true, name: true, level: true, topLevel: true },
});

if (cats.length === 0) {
  console.log(`未找到名称包含"${KEYWORD}"的分类，跳过。`);
} else {
  for (const c of cats) {
    await prisma.category.update({
      where: { id: c.id },
      data: { standalone: true },
    });
    console.log(`已标记 standalone=true: ${c.name} (${c.id})`);
  }
}

const remaining = await prisma.category.findMany({
  where: { standalone: true },
  select: { id: true, name: true },
});
console.log(`当前 standalone 分类: ${JSON.stringify(remaining)}`);

await prisma.$disconnect();
