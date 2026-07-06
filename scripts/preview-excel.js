const XLSX = require('xlsx');

const FILE = 'F:/Downloads/家庭精益化管理体系_按截止时间排序.xlsx';
const wb = XLSX.readFile(FILE);
const sheetName = wb.SheetNames[0];
const ws = wb.Sheets[sheetName];
const rows = XLSX.utils.sheet_to_json(ws, { defval: null });

console.log('=== Excel 解析结果 ===');
console.log('文件名:', FILE);
console.log('工作表:', sheetName);
console.log('总行数:', rows.length);

console.log('\n=== 字段名 ===');
console.log(Object.keys(rows[0]).join(' | '));

console.log('\n=== 所属清单 分布 ===');
const lists = [...new Set(rows.map(r => r['所属清单']).filter(Boolean))];
console.log(`共 ${lists.length} 个清单:`);
lists.forEach(l => console.log(' -', l));

console.log('\n=== 类型 分布 ===');
const types = [...new Set(rows.map(r => r['类型']).filter(Boolean))];
types.forEach(t => {
  const count = rows.filter(r => r['类型'] === t).length;
  console.log(` - ${t} (${count}条)`);
});

console.log('\n=== 是否完成 分布 ===');
const done = {};
rows.forEach(r => {
  const k = String(r['是否完成'] || '(空)');
  done[k] = (done[k] || 0) + 1;
});
Object.entries(done).forEach(([k, v]) => console.log(` ${k}: ${v}`));

console.log('\n=== 有父任务的数量:', rows.filter(r => r['父任务']).length);

console.log('\n=== 前3条数据预览 ===');
rows.slice(0, 3).forEach((r, i) => {
  console.log(`\n--- 第${i+1}条 ---`);
  console.log(JSON.stringify(r, null, 2));
});
