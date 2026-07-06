"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { formatDate, isOverdue } from "@/lib/date";
import type { Task, Category, TaskStatus } from "@/generated/prisma";

type TaskWithCategory = Task & {
  category: Category | null;
  children?: TaskWithCategory[];
};

type CategoryWithTasks = Category & {
  _count: { tasks: number };
  tasks: TaskWithCategory[];
  parent: Category | null;
};

const statusLabels: Record<TaskStatus, string> = {
  TODO: "待处理",
  IN_PROGRESS: "进行中",
  COMPLETED: "已完成",
  ARCHIVED: "已归档",
  CANCELLED: "已取消",
};

const statusColors: Record<TaskStatus, string> = {
  TODO: "bg-gray-100 text-gray-600",
  IN_PROGRESS: "bg-blue-100 text-blue-700",
  COMPLETED: "bg-green-100 text-green-700",
  ARCHIVED: "bg-gray-100 text-gray-400",
  CANCELLED: "bg-red-100 text-red-700",
};

const statusDotColors: Record<string, string> = {
  TODO: "bg-gray-300",
  IN_PROGRESS: "bg-blue-500",
  COMPLETED: "bg-green-500",
  ARCHIVED: "bg-gray-400",
  CANCELLED: "bg-red-500",
};

export default function CategoryBoard({
  categories: initialCategories,
}: {
  categories: CategoryWithTasks[];
}) {
  const router = useRouter();
  const [, startTransition] = useTransition();
  const [categories] = useState(initialCategories);
  const [draggingId, setDraggingId] = useState<string | null>(null);
  const [dragOverId, setDragOverId] = useState<string | null>(null);
  const [showAddCategory, setShowAddCategory] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [newCategoryColor, setNewCategoryColor] = useState("#3B82F6");
  const [deletingCategory, setDeletingCategory] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);

  function countAllTasks(): number {
    return categories.reduce((sum, cat) => sum + cat.tasks.length, 0);
  }

  async function handleAddCategory() {
    if (!newCategoryName.trim()) return;
    try {
      const res = await fetch("/api/categories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: newCategoryName.trim(),
          level: 1,
          topLevel: newCategoryName.trim().toUpperCase(),
          color: newCategoryColor,
          sortOrder: categories.length,
        }),
      });
      if (res.ok) {
        setNewCategoryName("");
        setNewCategoryColor("#3B82F6");
        setShowAddCategory(false);
        startTransition(() => router.refresh());
      }
    } catch (err) {
      console.error("创建分类失败:", err);
    }
  }

  async function handleDeleteCategory(catId: string) {
    try {
      await fetch(`/api/categories/${catId}`, { method: "DELETE" });
      setDeletingCategory(null);
      startTransition(() => router.refresh());
    } catch (err) {
      console.error("删除分类失败:", err);
    }
  }

  async function handleDrop(draggedId: string, targetId: string) {
    if (draggedId === targetId) return;
    setFeedback(null);
    try {
      const res = await fetch(`/api/tasks/${draggedId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ parentId: targetId }),
      });
      if (res.ok) {
        setFeedback("已设为子任务");
        startTransition(() => router.refresh());
        setTimeout(() => setFeedback(null), 2000);
      }
    } catch (err) {
      console.error("拖拽更新失败:", err);
    }
  }

  async function handleUnparent(taskId: string) {
    try {
      await fetch(`/api/tasks/${taskId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ parentId: null }),
      });
      startTransition(() => router.refresh());
    } catch (err) {
      console.error("取消父子关系失败:", err);
    }
  }

  return (
    <div>
      {/* 顶部操作栏 */}
      <div className="flex items-center justify-between px-6 py-3 border-b border-gray-200 bg-white">
        <div className="flex items-center gap-3">
          <h2 className="text-xl font-bold">分类视图</h2>
          <span className="text-sm text-gray-400">
            共 {categories.length} 个分类 · {countAllTasks()} 项任务
          </span>
          {feedback && (
            <span className="text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
              {feedback}
            </span>
          )}
        </div>
        <button
          onClick={() => setShowAddCategory(!showAddCategory)}
          className="px-3 py-1.5 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-1"
        >
          <span className="text-base leading-none">+</span> 新增分类
        </button>
      </div>

      {/* 新增分类表单 */}
      {showAddCategory && (
        <div className="px-6 py-3 bg-gray-50 border-b border-gray-200 flex items-center gap-3">
          <input
            type="text"
            value={newCategoryName}
            onChange={(e) => setNewCategoryName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleAddCategory();
              if (e.key === "Escape") setShowAddCategory(false);
            }}
            placeholder="分类名称（如：旅行、医疗、社交）"
            className="flex-1 max-w-xs px-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            autoFocus
          />
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500">颜色</span>
            <input
              type="color"
              value={newCategoryColor}
              onChange={(e) => setNewCategoryColor(e.target.value)}
              className="w-8 h-8 rounded cursor-pointer border border-gray-300"
            />
          </div>
          <button
            onClick={handleAddCategory}
            className="px-3 py-1.5 text-sm bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            确认
          </button>
          <button
            onClick={() => setShowAddCategory(false)}
            className="px-3 py-1.5 text-sm bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200"
          >
            取消
          </button>
        </div>
      )}

      {/* 提示栏 */}
      <div className="px-6 py-1.5 bg-blue-50/50 border-b border-blue-100 text-xs text-gray-500">
        拖拽任务行到另一行可设为子任务，点击子任务旁的 ✕ 可取消父子关系
      </div>

      {/* 表格 - 表头冻结 */}
      <table className="w-full text-sm border-collapse">
          <thead className="sticky top-0 z-20">
            <tr className="bg-gray-100 border-b-2 border-gray-300 shadow-sm">
              <th className="w-10 px-2 py-2.5 text-center font-medium text-gray-400">⋮⋮</th>
              <th className="w-8 px-1 py-2.5 text-center font-medium text-gray-400"></th>
              <th className="text-left px-3 py-2.5 font-semibold text-gray-700 min-w-[220px]">任务标题</th>
              <th className="text-left px-3 py-2.5 font-semibold text-gray-700 min-w-[120px]">分类</th>
              <th className="text-left px-3 py-2.5 font-semibold text-gray-700 min-w-[100px]">开始日期</th>
              <th className="text-left px-3 py-2.5 font-semibold text-gray-700 min-w-[100px]">截止日期</th>
              <th className="text-left px-3 py-2.5 font-semibold text-gray-700 min-w-[80px]">NPC</th>
              <th className="text-left px-3 py-2.5 font-semibold text-gray-700 min-w-[80px]">状态</th>
              <th className="w-10 px-2 py-2.5"></th>
            </tr>
          </thead>
          <tbody>
            {categories.map((cat) => (
              <CategoryRowGroup
                key={cat.id}
                category={cat}
                draggingId={draggingId}
                dragOverId={dragOverId}
                onSetDragging={setDraggingId}
                onSetDragOver={setDragOverId}
                onDrop={handleDrop}
                onUnparent={handleUnparent}
                isDeleting={deletingCategory === cat.id}
                onTryDelete={() => setDeletingCategory(cat.id)}
                onConfirmDelete={() => handleDeleteCategory(cat.id)}
                onCancelDelete={() => setDeletingCategory(null)}
              />
            ))}
          </tbody>
        </table>
    </div>
  );
}

function CategoryRowGroup({
  category,
  draggingId,
  dragOverId,
  onSetDragging,
  onSetDragOver,
  onDrop,
  onUnparent,
  isDeleting,
  onTryDelete,
  onConfirmDelete,
  onCancelDelete,
}: {
  category: CategoryWithTasks;
  draggingId: string | null;
  dragOverId: string | null;
  onSetDragging: (id: string | null) => void;
  onSetDragOver: (id: string | null) => void;
  onDrop: (draggedId: string, targetId: string) => void;
  onUnparent: (taskId: string) => void;
  isDeleting: boolean;
  onTryDelete: () => void;
  onConfirmDelete: () => void;
  onCancelDelete: () => void;
}) {
  return (
    <>
      <tr className="bg-gray-50 border-y border-gray-200">
        <td colSpan={9} className="px-3 py-2">
          <div className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-full shrink-0"
              style={{ backgroundColor: category.color || "#6b7280" }}
            />
            <span className="font-semibold text-gray-800">{category.name}</span>
            <span className="text-xs text-gray-400">
              {category.tasks.length} 项
            </span>
            {isDeleting ? (
              <span className="ml-auto flex items-center gap-2">
                <span className="text-xs text-red-600">删除此分类？任务将变为未分类</span>
                <button
                  onClick={onConfirmDelete}
                  className="text-xs px-2 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                >
                  确认删除
                </button>
                <button
                  onClick={onCancelDelete}
                  className="text-xs px-2 py-1 bg-gray-200 text-gray-600 rounded hover:bg-gray-300"
                >
                  取消
                </button>
              </span>
            ) : (
              <button
                onClick={onTryDelete}
                className="ml-auto text-xs px-2 py-1 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors"
                title="删除分类"
              >
                删除
              </button>
            )}
          </div>
        </td>
      </tr>

      {category.tasks.length === 0 ? (
        <tr className="border-b border-gray-100">
          <td colSpan={9} className="px-6 py-3 text-gray-400 text-xs">
            暂无任务
          </td>
        </tr>
      ) : (
        category.tasks.map((task) => (
          <TaskRow
            key={task.id}
            task={task}
            depth={0}
            draggingId={draggingId}
            dragOverId={dragOverId}
            onSetDragging={onSetDragging}
            onSetDragOver={onSetDragOver}
            onDrop={onDrop}
            onUnparent={onUnparent}
            categoryColor={category.color || "#6b7280"}
          />
        ))
      )}
    </>
  );
}

function TaskRow({
  task,
  depth,
  draggingId,
  dragOverId,
  onSetDragging,
  onSetDragOver,
  onDrop,
  onUnparent,
  categoryColor,
}: {
  task: TaskWithCategory;
  depth: number;
  draggingId: string | null;
  dragOverId: string | null;
  onSetDragging: (id: string | null) => void;
  onSetDragOver: (id: string | null) => void;
  onDrop: (draggedId: string, targetId: string) => void;
  onUnparent: (taskId: string) => void;
  categoryColor: string;
}) {
  const overdue = isOverdue(task.dueDate, task.status);
  const isDragging = draggingId === task.id;
  const isDropTarget = dragOverId === task.id && draggingId !== null && draggingId !== task.id;

  return (
    <>
      <tr
        draggable
        onDragStart={(e) => {
          e.dataTransfer.setData("text/plain", task.id);
          e.dataTransfer.effectAllowed = "move";
          onSetDragging(task.id);
        }}
        onDragEnd={() => {
          onSetDragging(null);
          onSetDragOver(null);
        }}
        onDragOver={(e) => {
          e.preventDefault();
          e.dataTransfer.dropEffect = "move";
          onSetDragOver(task.id);
        }}
        onDragLeave={() => {
          if (dragOverId === task.id) onSetDragOver(null);
        }}
        onDrop={(e) => {
          e.preventDefault();
          const draggedId = e.dataTransfer.getData("text/plain");
          if (draggedId && draggedId !== task.id) {
            onDrop(draggedId, task.id);
          }
          onSetDragging(null);
          onSetDragOver(null);
        }}
        className={`border-b border-gray-100 transition-colors ${
          isDragging ? "opacity-30" : ""
        } ${
          isDropTarget
            ? "bg-blue-50 ring-2 ring-inset ring-blue-300"
            : overdue
            ? "bg-red-50/30 hover:bg-red-50/50"
            : "hover:bg-gray-50"
        }`}
      >
        <td className="px-2 py-2 text-center cursor-grab active:cursor-grabbing text-gray-300 hover:text-gray-500 select-none">
          ⋮⋮
        </td>
        <td className="px-1 py-2 text-center">
          <span
            className={`inline-block w-2 h-2 rounded-full ${
              overdue ? "bg-red-500" : statusDotColors[task.status] || "bg-gray-300"
            }`}
          />
        </td>
        <td className="px-3 py-2">
          <div className="flex items-center" style={{ paddingLeft: `${depth * 20}px` }}>
            {depth > 0 && <span className="text-gray-300 mr-1.5 select-none">↳</span>}
            <Link
              href={`/tasks/${task.id}`}
              className="text-sm hover:text-blue-600 truncate block"
            >
              {task.title}
            </Link>
            {depth > 0 && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  onUnparent(task.id);
                }}
                className="ml-2 text-xs text-gray-300 hover:text-red-500"
                title="取消父子关系"
              >
                ✕
              </button>
            )}
          </div>
        </td>
        <td className="px-3 py-2">
          {task.category && (
            <span
              className="text-xs px-2 py-0.5 rounded-full whitespace-nowrap"
              style={{
                backgroundColor: (task.category.color || categoryColor) + "20",
                color: task.category.color || categoryColor,
              }}
            >
              {task.category.name}
            </span>
          )}
        </td>
        <td className="px-3 py-2 text-xs text-gray-500 whitespace-nowrap">
          {formatDate(task.startDate)}
        </td>
        <td className="px-3 py-2 text-xs whitespace-nowrap">
          <span className={overdue ? "text-red-600 font-medium" : "text-gray-600"}>
            {formatDate(task.dueDate)}
          </span>
        </td>
        <td className="px-3 py-2 text-xs text-gray-500">
          {task.npc || "—"}
        </td>
        <td className="px-3 py-2">
          <span className={`text-xs px-2 py-0.5 rounded-full whitespace-nowrap ${statusColors[task.status]}`}>
            {statusLabels[task.status]}
          </span>
        </td>
        <td className="px-2 py-2"></td>
      </tr>

      {task.children && task.children.length > 0 &&
        task.children.map((child) => (
          <TaskRow
            key={child.id}
            task={child}
            depth={depth + 1}
            draggingId={draggingId}
            dragOverId={dragOverId}
            onSetDragging={onSetDragging}
            onSetDragOver={onSetDragOver}
            onDrop={onDrop}
            onUnparent={onUnparent}
            categoryColor={categoryColor}
          />
        ))}
    </>
  );
}
