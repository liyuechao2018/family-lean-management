#!/usr/bin/env node
import { PrismaClient } from '../src/generated/prisma/index.js';

const prisma = new PrismaClient();

async function main() {
  const cats = await prisma.category.findMany({
    orderBy: [{ level: 'asc' }, { id: 'asc' }],
  });
  console.log('数据库中现有分类：');
  cats.forEach(c => {
    console.log(`  level=${c.level} topLevel=${c.topLevel} name="${c.name}"`);
  });
  console.log(`共 ${cats.length} 个`);
}

main().then(() => prisma.$disconnect()).catch(e => {
  console.error(e);
  process.exit(1);
});
