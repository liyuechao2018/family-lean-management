# 家庭精益化管理系统

> 替代 Tower 的本地化家庭事务管理系统，支持长期事项、周期事项、金融账户、会员到期、车辆维护等全品类管理。

## 技术栈

- **前端**: Next.js 16 + TypeScript + Tailwind CSS 4
- **数据库**: SQLite (本地文件)
- **ORM**: Prisma 6
- **Excel 解析**: SheetJS (xlsx)
- **日期处理**: date-fns

## 快速开始

```bash
# 1. 安装依赖
npm install

# 2. 初始化数据库
npx prisma migrate dev

# 3. 生成 Prisma Client
npx prisma generate

# 4. 初始化默认分类
npm run seed

# 5. 启动开发服务器
npm run dev
```

打开 http://localhost:3000 即可使用。

## 功能模块

### Phase 1 (已实现)

| 模块 | 路由 | 说明 |
|------|------|------|
| 总览 Dashboard | `/` | 统计卡片 + 近期到期事项 |
| 今日待办 | `/today` | 逾期/今日/未来3天分组展示 |
| 全部任务 | `/tasks` | 支持按状态筛选 |
| 任务详情 | `/tasks/[id]` | 完整信息 + 父子任务树 + 操作按钮 |
| 分类视图 | `/categories` | 按分类分组展示任务 |
| 家庭台账 | `/ledger` | 按类型分组展示台账对象 |
| 周期任务 | `/recurring` | 展示周期任务及下次到期 |
| 日历视图 | `/calendar` | 月历展示任务分布 |
| 数据导入 | `/import` | 上传 Tower 导出的 Excel |

### API 路由

| 路由 | 方法 | 说明 |
|------|------|------|
| `/api/tasks` | GET, POST | 任务列表查询 / 创建任务 |
| `/api/tasks/[id]` | GET, PATCH, DELETE | 任务详情 / 更新 / 删除 |
| `/api/import` | POST | Excel 文件导入 |

## 数据模型

```
Category (分类)        ── 一级/二级分类，支持层级
  ├── Task (事项)       ── 核心任务模型
  │   ├── TaskTag       ── 任务-标签多对多
  │   ├── RecurringTask ── 周期任务配置
  │   ├── Reminder      ── 提醒
  │   └── LedgerTask    ── 任务-台账关联
  ├── Tag (标签)
  ├── Ledger (台账)     ── 金融账户/贷款/保险/会员/车辆/房屋等
  └── Setting (设置)
```

## Excel 导入

支持 Tower 导出的 Excel 文件，字段映射：

| Tower 字段 | 系统字段 |
|------------|----------|
| 任务标题 | title |
| 任务描述 | description |
| 父任务 | parentId (按标题匹配) |
| 是否完成 | status |
| 所属清单 | categoryId (自动创建二级分类) |
| 开始日期 | startDate |
| 截止日期 | dueDate |
| NPC | npc |
| 完成时间 | completedAt |
| 备注 | notes |
| 链接地址 | towerLink |

导入后可在任务详情页人工修正分类和周期规则。

## 默认一级分类

| 分类 | 标识 | 颜色 |
|------|------|------|
| 金融 | FINANCE | #3B82F6 |
| 家庭 | FAMILY | #10B981 |
| 工作 | WORK | #8B5CF6 |
| 课程 | COURSE | #F59E0B |
| 务虚 | STRATEGIC | #EC4899 |
| 文化 | CULTURE | #06B6D4 |
| 其他 | OTHER | #6B7280 |

## 开发命令

```bash
npm run dev        # 开发服务器
npm run build      # 生产构建
npm run seed       # 初始化种子数据
npm run db:push    # 推送 schema 变更
npm run db:studio  # Prisma Studio 数据库管理界面
```

## 后续规划 (Phase 2+)

- [ ] 任务编辑表单
- [ ] 周期任务自动生成下一次
- [ ] 提醒系统（通知/推送）
- [ ] 看板视图
- [ ] 已完成/已归档独立视图
- [ ] 台账 CRUD 操作
- [ ] 标签管理界面
- [ ] 搜索功能
- [ ] 数据导出
