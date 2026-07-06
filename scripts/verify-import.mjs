import { PrismaClient } from '../src/generated/prisma/index.js';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { config } from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
config({ path: join(__dirname, '..', '.env') });

const prisma = new PrismaClient();

async function main() {
  const taskCount = await prisma.task.count();
  const catCount = await prisma.category.count();
  const topCats = await prisma.category.findMany({ where: { level: 1 } });
  const subCats = await prisma.category.findMany({ where: { level: 2 } });
  const tasksWithParent = await prisma.task.count({ where: { parentId: { not: null } } });
  const tasksWithCategory = await prisma.task.count({ where: { categoryId: { not: null } } });
  const tasksWithDueDate = await prisma.task.count({ where: { dueDate: { not: null } } });

  console.log('=== 数据库统计 ===');
  console.log(`分类总数: ${catCount} (一级: ${topCats.length}, 二级: ${subCats.length})`);
  console.log(`任务总数: ${taskCount}`);
  console.log(`  有父任务: ${tasksWithParent}`);
  console.log(`  有分类: ${tasksWithCategory}`);
  console.log(`  有截止日期: ${tasksWithDueDate}`);

  console.log('\n=== 一级分类 ===');
  topCats.forEach(c => console.log(`  ${c.topLevel} (${c.name})`));

  console.log('\n=== 二级分类 (前10个) ===');
  subCats.slice(0, 10).forEach(c => console.log(`  ${c.topLevel} / ${c.name}`));
  console.log(`  ... 共 ${subCats.length} 个`);

  console.log('\n=== 任务样例 (前5条) ===');
  const sample = await prisma.task.findMany({ take: 5, include: { category: true } });
  sample.forEach(t => console.log(`  [${t.status}] ${t.title} | 分类: ${t.category?.name || '无'} | 截止: ${t.dueDate || '无'}`));

  await prisma.$disconnect();
}

main().catch(e => {
  console.error('查询失败:', e.message);
  process.exit(1);
});
