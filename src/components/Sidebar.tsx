"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "总览", icon: "📊" },
  { href: "/today", label: "今日待办", icon: "📋" },
  { href: "/tasks", label: "全部任务", icon: "✅" },
  { href: "/categories", label: "分类视图", icon: "📁" },
  { href: "/ledger", label: "家庭台账", icon: "📒" },
  { href: "/recurring", label: "周期任务", icon: "🔄" },
  { href: "/calendar", label: "日历视图", icon: "📅" },
  { href: "/import", label: "数据导入", icon: "📥" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`h-screen bg-white border-r border-gray-200 flex flex-col shrink-0 transition-width ${
        collapsed ? "w-16" : "w-56"
      }`}
    >
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        {!collapsed && (
          <h1 className="text-lg font-bold text-blue-700 truncate">
            家庭精益管理
          </h1>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1 rounded hover:bg-gray-100 text-gray-500 ml-auto"
          title={collapsed ? "展开" : "折叠"}
        >
          {collapsed ? "▶" : "◀"}
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto py-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center px-4 py-2.5 text-sm mx-2 rounded-lg mb-0.5 transition-colors ${
                isActive
                  ? "bg-blue-50 text-blue-700 font-medium"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              title={collapsed ? item.label : undefined}
            >
              <span className="text-lg w-7 text-center shrink-0">{item.icon}</span>
              {!collapsed && <span className="truncate">{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      <div className="p-3 border-t border-gray-200 text-xs text-gray-400 text-center">
        {!collapsed && "v0.1 · Phase 1"}
      </div>
    </aside>
  );
}
