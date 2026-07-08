"use client";

import { useState, useCallback, useRef, useEffect, useTransition } from "react";
import { useRouter } from "next/navigation";
import type {
  Category,
  Task,
  TaskStatus,
  CustomField,
  CustomFieldType,
  RecurringTask,
  RecurringFrequency,
} from "@/generated/prisma";
import { formatDate } from "@/lib/date";
import { formatRecurrence } from "@/lib/recurrence";

/* ── Types ───────────────────────────────────── */

type TaskWithCategory = Task & {
  category: Category | null;
  recurringTask: RecurringTask | null;
  children: TaskWithCategory[];
};

type CategoryWithTasks = Category & {
  _count: { tasks: number };
  tasks: TaskWithCategory[];
  parent: Category | null;
};

type FieldKey = "title" | "status" | "category" | "dueDate" | "npc" | "completedAt" | "notes" | `custom_${string}`;

type EditingCell = { taskId: string; field: FieldKey } | null;

type ColumnDef = {
  id: string;
  name: string;
  width: number;
  visible: boolean;
  editable: boolean;
  field: FieldKey | null;
  isCustom: boolean;
  customField?: CustomField;
};

type FieldValueMap = Record<string, Record<string, string | null>>; // taskId -> fieldId -> value

const ALL_STATUSES: TaskStatus[] = ["TODO", "IN_PROGRESS", "COMPLETED", "ARCHIVED", "CANCELLED"];

const statusLabels: Record<TaskStatus, string> = {
  TODO: "待处理",
  IN_PROGRESS: "进行中",
  COMPLETED: "已完成",
  ARCHIVED: "已归档",
  CANCELLED: "已取消",
};

const statusColors: Record<TaskStatus, string> = {
  TODO: "bg-gray-100 text-gray-700",
  IN_PROGRESS: "bg-blue-100 text-blue-700",
  COMPLETED: "bg-green-100 text-green-700",
  ARCHIVED: "bg-stone-100 text-stone-600",
  CANCELLED: "bg-red-50 text-red-500",
};

const DEFAULT_COLUMNS: ColumnDef[] = [
  { id: "done", name: "", width: 48, visible: true, editable: false, field: null, isCustom: false },
  { id: "index", name: "编号", width: 50, visible: true, editable: false, field: null, isCustom: false },
  { id: "title", name: "任务", width: 220, visible: true, editable: true, field: "title", isCustom: false },
  { id: "status", name: "状态", width: 80, visible: true, editable: true, field: "status", isCustom: false },
  { id: "category", name: "分类", width: 100, visible: true, editable: false, field: "category", isCustom: false },
  { id: "dueDate", name: "截止日期", width: 100, visible: true, editable: true, field: "dueDate", isCustom: false },
  { id: "npc", name: "NPC", width: 100, visible: true, editable: true, field: "npc", isCustom: false },
  { id: "completedAt", name: "完成时间", width: 100, visible: true, editable: false, field: "completedAt", isCustom: false },
  { id: "notes", name: "备注", width: 150, visible: true, editable: true, field: "notes", isCustom: false },
];

/* ── Helpers ─────────────────────────────────── */

function isOverdue(date: Date | null, status: TaskStatus) {
  if (!date || status === "COMPLETED" || status === "CANCELLED" || status === "ARCHIVED") return false;
  const d = new Date(date);
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  d.setHours(0, 0, 0, 0);
  return d < now;
}

function getFieldValue(task: TaskWithCategory, field: FieldKey, customValues: FieldValueMap): string {
  if (field === null) return "";
  if (field.startsWith("custom_")) {
    const fieldId = field.replace("custom_", "");
    return customValues[task.id]?.[fieldId] ?? "";
  }
  if (field === "title") return task.title ?? "";
  if (field === "status") return task.status ?? "";
  if (field === "category") return task.category?.name ?? "";
  if (field === "dueDate") return task.dueDate ? formatDate(task.dueDate) : "";
  if (field === "npc") return task.npc ?? "";
  if (field === "completedAt") return task.completedAt ? formatDate(task.completedAt) : "";
  if (field === "notes") return task.notes ?? "";
  return "";
}

/* ── Filter helpers ─────────────────────────── */

function filterActiveTasks(tasks: TaskWithCategory[]): TaskWithCategory[] {
  return tasks
    .filter((t) => t.status !== "COMPLETED")
    .map((t) => ({ ...t, children: filterActiveTasks(t.children) }));
}

function collectCompletedTasks(tasks: TaskWithCategory[]): TaskWithCategory[] {
  const completed: TaskWithCategory[] = [];
  function walk(list: TaskWithCategory[]) {
    for (const t of list) {
      if (t.status === "COMPLETED") completed.push(t);
      walk(t.children);
    }
  }
  walk(tasks);
  return completed;
}

/* ── Main Component ──────────────────────────── */

export default function CategoryBoard({
  categories: initialCategories,
  customFields: initialCustomFields,
  settings: initialSettings,
}: {
  categories: CategoryWithTasks[];
  customFields: CustomField[];
  settings: Record<string, string | null>;
}) {
  const router = useRouter();
  const [categories, setCategories] = useState<CategoryWithTasks[]>(initialCategories);
  const [customFields, setCustomFields] = useState<CustomField[]>(initialCustomFields);

  // Columns
  const [columns, setColumns] = useState<ColumnDef[]>(() => {
    const savedWidths = JSON.parse(initialSettings["column_widths"] || "null") as Record<string, number> | null;
    const savedVisible = JSON.parse(initialSettings["field_visible_columns"] || "null") as Record<string, boolean> | null;
    const base = DEFAULT_COLUMNS.map((c) => ({
      ...c,
      width: savedWidths?.[c.id] ?? c.width,
      visible: savedVisible?.[c.id] ?? c.visible,
    }));
    initialCustomFields.forEach((f) => {
      base.push({
        id: `custom_${f.id}`,
        name: f.name,
        width: savedWidths?.[`custom_${f.id}`] ?? 120,
        visible: savedVisible?.[`custom_${f.id}`] ?? true,
        editable: true,
        field: `custom_${f.id}` as FieldKey,
        isCustom: true,
        customField: f,
      });
    });
    return base;
  });

  const [fieldValues, setFieldValues] = useState<FieldValueMap>({});
  const [loadingValues, setLoadingValues] = useState(true);

  // Load custom field values
  useEffect(() => {
    async function load() {
      const allTaskIds: string[] = [];
      const collect = (t: TaskWithCategory) => {
        allTaskIds.push(t.id);
        t.children.forEach(collect);
      };
      initialCategories.forEach((c) => c.tasks.forEach(collect));
      if (allTaskIds.length === 0 || initialCustomFields.length === 0) {
        setLoadingValues(false);
        return;
      }
      // Batch fetch by taskId (could be large; for now use one query per 50)
      const map: FieldValueMap = {};
      for (let i = 0; i < allTaskIds.length; i += 50) {
        const batch = allTaskIds.slice(i, i + 50);
        const res = await fetch(`/lean-management/api/field-values?taskIds=${batch.join(",")}`);
        if (res.ok) {
          const data = await res.json();
          data.forEach((v: { taskId: string; fieldId: string; value: string | null }) => {
            if (!map[v.taskId]) map[v.taskId] = {};
            map[v.taskId][v.fieldId] = v.value;
          });
        }
      }
      setFieldValues(map);
      setLoadingValues(false);
    }
    load();
  }, [initialCategories, initialCustomFields]);

  const [editing, setEditing] = useState<EditingCell>(null);
  const [editValue, setEditValue] = useState("");

  // Drag & drop (category)
  const [catDraggingId, setCatDraggingId] = useState<string | null>(null);
  const [catDragOverId, setCatDragOverId] = useState<string | null>(null);
  const [dragOverId, setDragOverId] = useState<string | null>(null);
  const [draggingId, setDraggingId] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const [newCatName, setNewCatName] = useState("");
  const [newCatColor, setNewCatColor] = useState("#3B82F6");
  const [addingCat, setAddingCat] = useState(false);
  const [isPending, startTransition] = useTransition();

  // Column resize
  const [resizingCol, setResizingCol] = useState<{ id: string; startX: number; startWidth: number } | null>(null);
  const resizeRef = useRef<HTMLDivElement | null>(null);

  // Field config panel
  const [showFieldPanel, setShowFieldPanel] = useState(false);
  // Add custom field modal
  const [showAddFieldModal, setShowAddFieldModal] = useState(false);
  const [newFieldName, setNewFieldName] = useState("");
  const [newFieldType, setNewFieldType] = useState<CustomFieldType>("TEXT");
  const [newFieldOptions, setNewFieldOptions] = useState("");

  // Recurring task modal
  const [showRecurringModal, setShowRecurringModal] = useState(false);
  const [recurringTaskId, setRecurringTaskId] = useState<string | null>(null);
  const [recurringTitle, setRecurringTitle] = useState("");
  const [recFreq, setRecFreq] = useState<RecurringFrequency>("MONTHLY_DATE");
  const [recInterval, setRecInterval] = useState(1);
  const [recWeekDays, setRecWeekDays] = useState<number[]>([]);
  const [recMonthDate, setRecMonthDate] = useState(1);
  const [recMonthWeekOrdinal, setRecMonthWeekOrdinal] = useState(1);
  const [recMonthWeekDay, setRecMonthWeekDay] = useState(1);
  const [recCustomDays, setRecCustomDays] = useState(30);
  const [recEndDate, setRecEndDate] = useState("");
  const [savingRecurring, setSavingRecurring] = useState(false);

  /* ── Column resize handlers ── */
  useEffect(() => {
    if (!resizingCol) return;
    const startX = resizingCol.startX;
    const startWidth = resizingCol.startWidth;
    const colId = resizingCol.id;
    function onMove(e: MouseEvent) {
      const delta = e.clientX - startX;
      const newWidth = Math.max(40, startWidth + delta);
      setColumns((prev) =>
        prev.map((c) => (c.id === colId ? { ...c, width: newWidth } : c))
      );
    }
    function onUp() {
      setResizingCol(null);
      // Save widths
      saveSettings("column_widths", columns);
    }
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, [resizingCol, columns]);

  async function saveSettings(key: string, value: unknown) {
    try {
      await fetch("/lean-management/api/settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key, value: JSON.stringify(value) }),
      });
    } catch {
      // ignore
    }
  }

  /* ── Inline editing ── */
  function startEditing(taskId: string, field: FieldKey, currentValue: string) {
    setEditing({ taskId, field });
    setEditValue(currentValue);
  }

  async function handleCellSave() {
    if (!editing) return;
    const { taskId, field } = editing;
    const value = editValue.trim();

    if (field.startsWith("custom_")) {
      const fieldId = field.replace("custom_", "");
      setFieldValues((prev) => ({
        ...prev,
        [taskId]: { ...prev[taskId], [fieldId]: value },
      }));
      await fetch("/lean-management/api/field-values", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ taskId, fieldId, value }),
      });
    } else {
      const body: Record<string, unknown> = {};
      if (field === "title") body.title = value;
      else if (field === "dueDate") body.dueDate = value || null;
      else if (field === "npc") body.npc = value || null;
      else if (field === "notes") body.notes = value || null;
      else if (field === "status") body.status = value;
      if (Object.keys(body).length === 0) {
        setEditing(null);
        return;
      }
      const res = await fetch(`/lean-management/api/tasks/${taskId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (res.ok) {
        setCategories((prev) =>
          prev.map((cat) => ({
            ...cat,
            tasks: updateTaskInTree(cat.tasks, taskId, body),
          }))
        );
        setFeedback({ type: "success", message: "已保存" });
        setTimeout(() => setFeedback(null), 1500);
      } else {
        setFeedback({ type: "error", message: "保存失败" });
      }
    }
    setEditing(null);
  }

  function updateTaskInTree(tasks: TaskWithCategory[], taskId: string, data: Record<string, unknown>): TaskWithCategory[] {
    return tasks.map((t) => {
      if (t.id === taskId) {
        return { ...t, ...data } as TaskWithCategory;
      }
      if (t.children.length > 0) {
        return { ...t, children: updateTaskInTree(t.children, taskId, data) };
      }
      return t;
    });
  }

  /* ── Drag handlers (unchanged) ── */
  async function handleCategoryDrop() {
    if (!catDraggingId || !catDragOverId || catDraggingId === catDragOverId) return;
    setFeedback(null);
    try {
      const res = await fetch(`/lean-management/api/categories/${catDraggingId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sortOrder: catDragOverId }),
      });
      if (res.ok) {
        startTransition(() => router.refresh());
        setFeedback({ type: "success", message: "分类已调整" });
      } else {
        setFeedback({ type: "error", message: "调整失败" });
      }
    } catch {
      setFeedback({ type: "error", message: "调整失败" });
    } finally {
      setCatDraggingId(null);
      setCatDragOverId(null);
    }
  }

  async function handleDrop(draggedId: string, targetId: string) {
    if (draggedId === targetId) return;
    setFeedback(null);
    try {
      const res = await fetch(`/lean-management/api/tasks/${draggedId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ parentId: targetId }),
      });
      if (res.ok) {
        startTransition(() => router.refresh());
        setFeedback({ type: "success", message: "已设为子任务" });
      } else {
        setFeedback({ type: "error", message: "拖拽失败" });
      }
    } catch {
      setFeedback({ type: "error", message: "拖拽失败" });
    } finally {
      setDragOverId(null);
      setDraggingId(null);
    }
  }

  async function handleUnparent(taskId: string) {
    try {
      await fetch(`/lean-management/api/tasks/${taskId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ parentId: null }),
      });
      startTransition(() => router.refresh());
      setFeedback({ type: "success", message: "已解除子任务关系" });
      setTimeout(() => setFeedback(null), 2000);
    } catch {
      setFeedback({ type: "error", message: "解除失败" });
    }
  }

  async function handleDeleteCategory(categoryId: string) {
    if (!confirm("确定要删除该分类吗？该分类下的任务将变为未分类。")) return;
    try {
      const res = await fetch(`/lean-management/api/categories/${categoryId}`, {
        method: "DELETE",
      });
      if (res.ok) {
        startTransition(() => router.refresh());
        setFeedback({ type: "success", message: "已删除分类" });
      } else {
        setFeedback({ type: "error", message: "删除失败" });
      }
    } catch {
      setFeedback({ type: "error", message: "删除失败" });
    }
  }

  async function handleAddCategory() {
    if (!newCatName.trim()) return;
    try {
      const res = await fetch("/lean-management/api/categories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: newCatName.trim(),
          color: newCatColor,
          topLevel: newCatName.trim().toUpperCase(),
        }),
      });
      if (res.ok) {
        setNewCatName("");
        setAddingCat(false);
        startTransition(() => router.refresh());
      } else {
        setFeedback({ type: "error", message: "创建失败" });
      }
    } catch {
      setFeedback({ type: "error", message: "创建失败" });
    }
  }

  async function handleDeleteCustomField(id: string) {
    if (!confirm("确定删除该自定义字段吗？相关数据也将删除。")) return;
    try {
      const res = await fetch(`/lean-management/api/fields/${id}`, { method: "DELETE" });
      if (res.ok) {
        setCustomFields((prev) => prev.filter((f) => f.id !== id));
        setColumns((prev) => prev.filter((c) => c.id !== `custom_${id}`));
        setFeedback({ type: "success", message: "已删除字段" });
        setTimeout(() => setFeedback(null), 2000);
      } else {
        setFeedback({ type: "error", message: "删除字段失败" });
      }
    } catch {
      setFeedback({ type: "error", message: "删除字段失败" });
    }
  }

  async function handleAddCustomField() {
    if (!newFieldName.trim()) return;
    const key = newFieldName.trim().toLowerCase().replace(/\s+/g, "_");
    try {
      const res = await fetch("/lean-management/api/fields", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: newFieldName.trim(),
          key,
          type: newFieldType,
          options: newFieldType === "SELECT" && newFieldOptions
            ? newFieldOptions.split(",").map((s) => s.trim()).filter(Boolean)
            : null,
          sortOrder: customFields.length,
        }),
      });
      if (res.ok) {
        const field = await res.json() as CustomField;
        setCustomFields((prev) => [...prev, field]);
        setColumns((prev) => [
          ...prev,
          {
            id: `custom_${field.id}`,
            name: field.name,
            width: 120,
            visible: true,
            editable: true,
            field: `custom_${field.id}` as FieldKey,
            isCustom: true,
            customField: field,
          },
        ]);
        setShowAddFieldModal(false);
        setNewFieldName("");
        setNewFieldType("TEXT");
        setNewFieldOptions("");
      } else {
        const err = await res.json();
        setFeedback({ type: "error", message: err.error || "创建字段失败" });
      }
    } catch {
      setFeedback({ type: "error", message: "创建字段失败" });
    }
  }

  async function handleComplete(taskId: string, currentStatus: TaskStatus) {
    const newStatus: TaskStatus = currentStatus === "COMPLETED" ? "TODO" : "COMPLETED";
    try {
      const body: Record<string, unknown> = { status: newStatus };
      if (newStatus === "TODO") body.completedAt = null;
      const res = await fetch(`/lean-management/api/tasks/${taskId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (res.ok) {
        const updated = await res.json() as TaskWithCategory;
        // 乐观更新本地状态，避免页面刷新闪烁
        setCategories((prev) =>
          prev.map((cat) => ({
            ...cat,
            tasks: updateTaskInTree(cat.tasks, taskId, {
              status: newStatus,
              completedAt: newStatus === "COMPLETED" ? updated.completedAt : null,
            }),
          }))
        );
      } else {
        setFeedback({ type: "error", message: "操作失败" });
        setTimeout(() => setFeedback(null), 2000);
      }
    } catch {
      setFeedback({ type: "error", message: "操作失败" });
      setTimeout(() => setFeedback(null), 2000);
    }
  }

  function openRecurringModal(task: TaskWithCategory) {
    setRecurringTaskId(task.id);
    setRecurringTitle(task.title);
    // Load existing config or set defaults
    if (task.recurringTask) {
      const rt = task.recurringTask;
      setRecFreq(rt.frequency);
      setRecInterval(rt.interval);
      setRecWeekDays(rt.weekDays ? JSON.parse(rt.weekDays) : []);
      setRecMonthDate(rt.monthDate ?? 1);
      setRecMonthWeekOrdinal(rt.monthWeekOrdinal ?? 1);
      setRecMonthWeekDay(rt.monthWeekDay ?? 1);
      setRecCustomDays(rt.customDays ?? 30);
      setRecEndDate(rt.endDate ? formatDate(rt.endDate) : "");
    } else {
      // Default: monthly on the due date's day
      const dueDay = task.dueDate ? new Date(task.dueDate).getDate() : 1;
      setRecFreq("MONTHLY_DATE");
      setRecInterval(1);
      setRecWeekDays([]);
      setRecMonthDate(dueDay);
      setRecMonthWeekOrdinal(1);
      setRecMonthWeekDay(1);
      setRecCustomDays(30);
      setRecEndDate("");
    }
    setShowRecurringModal(true);
  }

  const handleTaskOpen = useCallback((taskId: string) => {
    router.push(`/tasks/${taskId}`);
  }, [router]);

  async function handleSaveRecurring() {
    if (!recurringTaskId) return;
    setSavingRecurring(true);
    try {
      const res = await fetch("/lean-management/api/recurring", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          taskId: recurringTaskId,
          frequency: recFreq,
          interval: recInterval,
          weekDays: recFreq === "WEEKLY" ? recWeekDays : undefined,
          monthDate: recFreq === "MONTHLY_DATE" ? recMonthDate : undefined,
          monthWeekOrdinal: recFreq === "MONTHLY_DAY" ? recMonthWeekOrdinal : undefined,
          monthWeekDay: recFreq === "MONTHLY_DAY" ? recMonthWeekDay : undefined,
          customDays: recFreq === "CUSTOM" ? recCustomDays : undefined,
          endDate: recEndDate || undefined,
        }),
      });
      if (res.ok) {
        setShowRecurringModal(false);
        startTransition(() => router.refresh());
        setFeedback({ type: "success", message: "循环任务已设置" });
        setTimeout(() => setFeedback(null), 2000);
      } else {
        setFeedback({ type: "error", message: "设置失败" });
      }
    } catch {
      setFeedback({ type: "error", message: "设置失败" });
    } finally {
      setSavingRecurring(false);
    }
  }

  async function handleRemoveRecurring() {
    if (!recurringTaskId) return;
    try {
      await fetch(`/lean-management/api/recurring?taskId=${recurringTaskId}`, {
        method: "DELETE",
      });
      setShowRecurringModal(false);
      startTransition(() => router.refresh());
      setFeedback({ type: "success", message: "已取消循环" });
      setTimeout(() => setFeedback(null), 2000);
    } catch {
      setFeedback({ type: "error", message: "操作失败" });
    }
  }

  function toggleColumnVisible(id: string) {
    setColumns((prev) => {
      const next = prev.map((c) => (c.id === id ? { ...c, visible: !c.visible } : c));
      const visMap = Object.fromEntries(next.map((c) => [c.id, c.visible]));
      saveSettings("field_visible_columns", visMap);
      return next;
    });
  }

  const visibleColumns = columns.filter((c) => c.visible);
  const totalVisible = visibleColumns.length;
  const colWidthStyle = (width: number) => ({ width: `${width}px`, minWidth: `${width}px` });

  if (loadingValues) {
    return <div className="p-8 text-gray-500">加载中...</div>;
  }

  return (
    <div className="space-y-6">
      {/* Feedback */}
      {feedback && (
        <div
          className={`fixed top-4 right-4 z-50 px-4 py-2 rounded-lg shadow-lg text-sm font-medium transition-opacity ${
            feedback.type === "success"
              ? "bg-green-100 text-green-800 border border-green-200"
              : "bg-red-100 text-red-800 border border-red-200"
          }`}
        >
          {feedback.message}
        </div>
      )}

      {/* Toolbar */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => setAddingCat(!addingCat)}
          className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <span className="text-lg leading-none">+</span> 新建分类
        </button>
        <button
          onClick={() => setShowFieldPanel(true)}
          className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          字段配置
        </button>
      </div>

      {addingCat && (
        <div className="flex items-center gap-2 bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
          <input
            type="text"
            value={newCatName}
            onChange={(e) => setNewCatName(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAddCategory()}
            placeholder="分类名称"
            className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="color"
            value={newCatColor}
            onChange={(e) => setNewCatColor(e.target.value)}
            className="w-10 h-10 rounded-lg border border-gray-300 cursor-pointer"
          />
          <button
            onClick={handleAddCategory}
            className="px-3 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            创建
          </button>
          <button
            onClick={() => setAddingCat(false)}
            className="px-3 py-2 text-sm bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200"
          >
            取消
          </button>
        </div>
      )}

      {/* Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-x-auto">
        <table className="text-sm table-fixed" style={{ width: "max-content" }}>
          <thead className="bg-gray-50 sticky top-0 z-10">
            <tr className="border-b border-gray-200 select-none">
              {visibleColumns.map((col) => (
                <th
                  key={col.id}
                  className="px-3 py-2 text-left text-xs font-semibold text-gray-600 relative group"
                  style={colWidthStyle(col.width)}
                >
                  <div className="flex items-center justify-between overflow-hidden">
                    <span className="truncate">{col.name}</span>
                  </div>
                  {/* Resize handle */}
                  <div
                    className="absolute top-0 right-0 w-1 h-full cursor-col-resize bg-transparent hover:bg-blue-300 group-hover:bg-blue-200 opacity-0 group-hover:opacity-100 transition-opacity"
                    onMouseDown={(e) => {
                      e.preventDefault();
                      setResizingCol({ id: col.id, startX: e.clientX, startWidth: col.width });
                    }}
                  />
                </th>
              ))}
              <th className="w-10 px-2 py-2"></th>
            </tr>
          </thead>
          {categories.map((category) => {
            const activeTasks = filterActiveTasks(category.tasks);
            return (
              <CategoryBody
                key={category.id}
                category={{ ...category, tasks: activeTasks, _count: { tasks: activeTasks.length } }}
                columns={visibleColumns}
                catDraggingId={catDraggingId}
                catDragOverId={catDragOverId}
                draggingId={draggingId}
                dragOverId={dragOverId}
                onCatDragStart={(id) => setCatDraggingId(id)}
                onCatDragOver={(id) => setCatDragOverId(id)}
                onCatDrop={handleCategoryDrop}
                onSetDragging={setDraggingId}
                onSetDragOver={setDragOverId}
                onDrop={handleDrop}
                onUnparent={handleUnparent}
                onDeleteCategory={handleDeleteCategory}
                editing={editing}
                editValue={editValue}
                onEditChange={setEditValue}
                onEditSave={handleCellSave}
                onEditStart={startEditing}
                fieldValues={fieldValues}
                colWidthStyle={colWidthStyle}
                onComplete={handleComplete}
                onOpenRecurring={openRecurringModal}
                onTaskOpen={handleTaskOpen}
              />
            );
          })}

          {/* ── 已完成栏目 ── */}
          <CompletedSection
            tasks={categories.flatMap((c) => collectCompletedTasks(c.tasks))}
            columns={visibleColumns}
            colWidthStyle={colWidthStyle}
            onComplete={handleComplete}
            onTaskOpen={handleTaskOpen}
            fieldValues={fieldValues}
            editing={editing}
            editValue={editValue}
            onEditChange={setEditValue}
            onEditSave={handleCellSave}
            onEditStart={startEditing}
            onOpenRecurring={openRecurringModal}
          />
        </table>
      </div>

      {/* Field Config Panel */}
      {showFieldPanel && (
        <div className="fixed inset-0 z-50 flex">
          <div className="flex-1" onClick={() => setShowFieldPanel(false)} />
          <div className="w-80 bg-white shadow-xl border-l border-gray-200 h-full overflow-auto p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900">显示/隐藏字段</h3>
              <button onClick={() => setShowFieldPanel(false)} className="text-gray-400 hover:text-gray-600">
                ✕
              </button>
            </div>
            <div className="space-y-2">
              {columns.map((col) => (
                <div key={col.id} className="flex items-center justify-between py-2 px-2 rounded hover:bg-gray-50">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500 text-xs">☰</span>
                    <span className="text-sm text-gray-700">{col.name}</span>
                    {col.isCustom && (
                      <span className="text-[10px] bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded">自定义</span>
                    )}
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={col.visible}
                      onChange={() => toggleColumnVisible(col.id)}
                    />
                    <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-teal-500" />
                  </label>
                </div>
              ))}
            </div>
            <button
              onClick={() => { setShowFieldPanel(false); setShowAddFieldModal(true); }}
              className="mt-4 w-full py-2 text-sm text-teal-600 border border-teal-200 rounded-lg hover:bg-teal-50 transition-colors"
            >
              + 添加自定义字段
            </button>
          </div>
        </div>
      )}

      {/* Add Custom Field Modal */}
      {showAddFieldModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
          <div className="bg-white rounded-lg shadow-xl w-96 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">添加自定义字段</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">字段名称 <span className="text-red-400">*</span></label>
                <input
                  type="text"
                  value={newFieldName}
                  onChange={(e) => setNewFieldName(e.target.value)}
                  placeholder="例如：优先级"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">字段类型 <span className="text-red-400">*</span></label>
                <select
                  value={newFieldType}
                  onChange={(e) => setNewFieldType(e.target.value as CustomFieldType)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm bg-white"
                >
                  <option value="TEXT">文本</option>
                  <option value="DATE">日期</option>
                  <option value="SELECT">下拉选择</option>
                  <option value="NUMBER">数字</option>
                </select>
              </div>
              {newFieldType === "SELECT" && (
                <div>
                  <label className="block text-sm text-gray-600 mb-1">选项（用逗号分隔）</label>
                  <input
                    type="text"
                    value={newFieldOptions}
                    onChange={(e) => setNewFieldOptions(e.target.value)}
                    placeholder="高, 中, 低"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
                  />
                </div>
              )}
            </div>
            <div className="flex items-center justify-end gap-2 mt-6">
              <button
                onClick={() => setShowAddFieldModal(false)}
                className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              >
                取消
              </button>
              <button
                onClick={handleAddCustomField}
                className="px-4 py-2 text-sm bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors"
              >
                保存
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Recurring Task Modal */}
      {showRecurringModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
          <div className="bg-white rounded-lg shadow-xl w-96 p-6 max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-semibold text-gray-900 mb-1">循环任务设置</h3>
            <p className="text-xs text-gray-500 mb-4 truncate">{recurringTitle}</p>
            <div className="space-y-4">
              {/* Frequency */}
              <div>
                <label className="block text-sm text-gray-600 mb-1">循环频率</label>
                <select
                  value={recFreq}
                  onChange={(e) => setRecFreq(e.target.value as RecurringFrequency)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm bg-white"
                >
                  <option value="DAILY">每天</option>
                  <option value="WEEKLY">每周</option>
                  <option value="MONTHLY_DATE">每月（指定日期）</option>
                  <option value="MONTHLY_DAY">每月（指定星期）</option>
                  <option value="YEARLY">每年</option>
                  <option value="CUSTOM">自定义天数</option>
                </select>
              </div>

              {/* Interval */}
              <div>
                <label className="block text-sm text-gray-600 mb-1">间隔</label>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">每</span>
                  <input
                    type="number"
                    min={1}
                    max={99}
                    value={recInterval}
                    onChange={(e) => setRecInterval(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-20 px-2 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm text-center"
                  />
                  <span className="text-sm text-gray-500">
                    {recFreq === "DAILY" ? "天" : recFreq === "WEEKLY" ? "周" : recFreq === "MONTHLY_DATE" || recFreq === "MONTHLY_DAY" ? "月" : recFreq === "YEARLY" ? "年" : "次"}
                  </span>
                </div>
              </div>

              {/* Weekly: weekday selector */}
              {recFreq === "WEEKLY" && (
                <div>
                  <label className="block text-sm text-gray-600 mb-1">星期几</label>
                  <div className="flex gap-1">
                    {["日", "一", "二", "三", "四", "五", "六"].map((label, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setRecWeekDays((prev) =>
                            prev.includes(idx) ? prev.filter((d) => d !== idx) : [...prev, idx]
                          );
                        }}
                        className={`w-8 h-8 rounded-lg text-xs font-medium transition-colors ${
                          recWeekDays.includes(idx)
                            ? "bg-blue-600 text-white"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                  <p className="text-xs text-gray-400 mt-1">可多选</p>
                </div>
              )}

              {/* Monthly date */}
              {recFreq === "MONTHLY_DATE" && (
                <div>
                  <label className="block text-sm text-gray-600 mb-1">每月几号</label>
                  <input
                    type="number"
                    min={1}
                    max={31}
                    value={recMonthDate}
                    onChange={(e) => setRecMonthDate(Math.min(31, Math.max(1, parseInt(e.target.value) || 1)))}
                    className="w-20 px-2 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm text-center"
                  />
                  <span className="text-sm text-gray-500 ml-2">号</span>
                </div>
              )}

              {/* Monthly weekday */}
              {recFreq === "MONTHLY_DAY" && (
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">第</span>
                  <select
                    value={recMonthWeekOrdinal}
                    onChange={(e) => setRecMonthWeekOrdinal(parseInt(e.target.value))}
                    className="px-2 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm bg-white"
                  >
                    <option value={1}>一</option>
                    <option value={2}>二</option>
                    <option value={3}>三</option>
                    <option value={4}>四</option>
                    <option value={5}>五</option>
                  </select>
                  <select
                    value={recMonthWeekDay}
                    onChange={(e) => setRecMonthWeekDay(parseInt(e.target.value))}
                    className="px-2 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm bg-white"
                  >
                    {["日", "一", "二", "三", "四", "五", "六"].map((label, idx) => (
                      <option key={idx} value={idx}>周{label}</option>
                    ))}
                  </select>
                  <span className="text-sm text-gray-500">个</span>
                </div>
              )}

              {/* Custom days */}
              {recFreq === "CUSTOM" && (
                <div>
                  <label className="block text-sm text-gray-600 mb-1">每多少天</label>
                  <input
                    type="number"
                    min={1}
                    max={365}
                    value={recCustomDays}
                    onChange={(e) => setRecCustomDays(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-20 px-2 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm text-center"
                  />
                  <span className="text-sm text-gray-500 ml-2">天</span>
                </div>
              )}

              {/* End date */}
              <div>
                <label className="block text-sm text-gray-600 mb-1">结束日期（可选）</label>
                <input
                  type="date"
                  value={recEndDate}
                  onChange={(e) => setRecEndDate(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
                />
              </div>

              {/* Preview */}
              <div className="bg-blue-50 rounded-lg p-3 text-xs text-blue-700">
                {(() => {
                  const preview = formatRecurrence(recFreq, recInterval, {
                    weekDays: recFreq === "WEEKLY" ? recWeekDays : undefined,
                    monthDate: recFreq === "MONTHLY_DATE" ? recMonthDate : null,
                    monthWeekOrdinal: recFreq === "MONTHLY_DAY" ? recMonthWeekOrdinal : null,
                    monthWeekDay: recFreq === "MONTHLY_DAY" ? recMonthWeekDay : null,
                    customDays: recFreq === "CUSTOM" ? recCustomDays : null,
                  });
                  return `循环规则：${preview}，完成后自动生成下一期`;
                })()}
              </div>
            </div>

            <div className="flex items-center justify-between gap-2 mt-6">
              {recurringTaskId && (
                <button
                  onClick={handleRemoveRecurring}
                  className="px-3 py-2 text-sm text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                >
                  取消循环
                </button>
              )}
              <div className="flex items-center gap-2 ml-auto">
                <button
                  onClick={() => setShowRecurringModal(false)}
                  className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  关闭
                </button>
                <button
                  onClick={handleSaveRecurring}
                  disabled={savingRecurring}
                  className="px-4 py-2 text-sm bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors disabled:opacity-50"
                >
                  {savingRecurring ? "保存中..." : "保存"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ── CategoryBody ─────────────────────────────── */

function CategoryBody({
  category,
  columns,
  catDraggingId,
  catDragOverId,
  draggingId,
  dragOverId,
  onCatDragStart,
  onCatDragOver,
  onCatDrop,
  onSetDragging,
  onSetDragOver,
  onDrop,
  onUnparent,
  onDeleteCategory,
  editing,
  editValue,
  onEditChange,
  onEditSave,
  onEditStart,
  fieldValues,
  colWidthStyle,
  onComplete,
  onOpenRecurring,
  onTaskOpen,
}: {
  category: CategoryWithTasks;
  columns: ColumnDef[];
  catDraggingId: string | null;
  catDragOverId: string | null;
  draggingId: string | null;
  dragOverId: string | null;
  onCatDragStart: (id: string) => void;
  onCatDragOver: (id: string | null) => void;
  onCatDrop: () => void;
  onSetDragging: (id: string | null) => void;
  onSetDragOver: (id: string | null) => void;
  onDrop: (draggedId: string, targetId: string) => void;
  onUnparent: (taskId: string) => void;
  onDeleteCategory: (id: string) => void;
  editing: EditingCell;
  editValue: string;
  onEditChange: (v: string) => void;
  onEditSave: () => void;
  onEditStart: (taskId: string, field: FieldKey, value: string) => void;
  fieldValues: FieldValueMap;
  colWidthStyle: (w: number) => React.CSSProperties;
  onComplete: (taskId: string, currentStatus: TaskStatus) => void;
  onOpenRecurring: (task: TaskWithCategory) => void;
  onTaskOpen: (taskId: string) => void;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const isDragging = catDraggingId === category.id;
  const isDragOver = catDragOverId === category.id;
  const totalCols = columns.length + 1;

  return (
    <tbody
      className={`border-t border-gray-200 transition-opacity ${
        isDragging ? "opacity-50" : ""
      } ${isDragOver ? "outline-2 outline-dashed outline-blue-400" : ""}`}
      draggable
      onDragStart={() => onCatDragStart(category.id)}
      onDragOver={(e) => {
        e.preventDefault();
        onCatDragOver(category.id);
      }}
      onDragLeave={() => onCatDragOver(null)}
      onDrop={(e) => {
        e.preventDefault();
        onCatDrop();
      }}
    >
      {/* Category header row */}
      <tr className="bg-gray-50/80">
        <td colSpan={totalCols} className="px-4 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCollapsed(!collapsed)}
                className="text-gray-400 hover:text-gray-600 transition-colors w-5 flex-shrink-0"
                title={collapsed ? "展开" : "收起"}
              >
                {collapsed ? "▶" : "▼"}
              </button>
              <span className="text-gray-400 cursor-move">☰</span>
              {category.color && (
                <span
                  className="w-3 h-3 rounded-full flex-shrink-0"
                  style={{ backgroundColor: category.color }}
                />
              )}
              <span className="font-semibold text-gray-700 text-sm">
                {category.name}
              </span>
              <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                {category._count.tasks}
              </span>
            </div>
            <button
              onClick={() => onDeleteCategory(category.id)}
              className="text-gray-400 hover:text-red-500 text-xs px-2 py-1 rounded hover:bg-red-50 transition-colors"
              title="删除分类"
            >
              🗑
            </button>
          </div>
        </td>
      </tr>

      {!collapsed && (category.tasks.length === 0 ? (
        <tr>
          <td
            colSpan={totalCols}
            className="px-4 py-6 text-center text-sm text-gray-400 italic"
          >
            暂无任务
          </td>
        </tr>
      ) : (
        <>
          {category.tasks.map((task) => (
            <TaskRow
              key={task.id}
              task={task}
              depth={0}
              columns={columns}
              draggingId={draggingId}
              dragOverId={dragOverId}
              onSetDragging={onSetDragging}
              onSetDragOver={onSetDragOver}
              onDrop={onDrop}
              onUnparent={onUnparent}
              categoryColor={category.color || "#9CA3AF"}
              editing={editing}
              editValue={editValue}
              onEditChange={onEditChange}
              onEditSave={onEditSave}
              onEditStart={onEditStart}
              fieldValues={fieldValues}
              colWidthStyle={colWidthStyle}
              onComplete={onComplete}
              onOpenRecurring={onOpenRecurring}
              onTaskOpen={onTaskOpen}
            />
          ))}
        </>
      ))}
    </tbody>
  );
}

/* ── TaskRow ─────────────────────────────────── */

function TaskRow({
  task,
  depth,
  columns,
  draggingId,
  dragOverId,
  onSetDragging,
  onSetDragOver,
  onDrop,
  onUnparent,
  categoryColor,
  editing,
  editValue,
  onEditChange,
  onEditSave,
  onEditStart,
  fieldValues,
  colWidthStyle,
  onComplete,
  onOpenRecurring,
  onTaskOpen,
}: {
  task: TaskWithCategory;
  depth: number;
  columns: ColumnDef[];
  draggingId: string | null;
  dragOverId: string | null;
  onSetDragging: (id: string | null) => void;
  onSetDragOver: (id: string | null) => void;
  onDrop: (draggedId: string, targetId: string) => void;
  onUnparent: (taskId: string) => void;
  categoryColor: string;
  editing: EditingCell;
  editValue: string;
  onEditChange: (v: string) => void;
  onEditSave: () => void;
  onEditStart: (taskId: string, field: FieldKey, value: string) => void;
  fieldValues: FieldValueMap;
  colWidthStyle: (w: number) => React.CSSProperties;
  onComplete: (taskId: string, currentStatus: TaskStatus) => void;
  onOpenRecurring: (task: TaskWithCategory) => void;
  onTaskOpen: (taskId: string) => void;
}) {
  const overdue = isOverdue(task.dueDate, task.status);
  const isDragging = draggingId === task.id;
  const isDragOver = dragOverId === task.id;
  const isEditingTitle = editing?.taskId === task.id && editing?.field === "title";
  const isCompleted = task.status === "COMPLETED";

  return (
    <>
      <tr
        className={`border-b border-gray-100 transition-colors cursor-pointer ${
          isDragging ? "opacity-40" : ""
        } ${isDragOver ? "bg-blue-50/50 ring-1 ring-inset ring-blue-200" : ""} ${
          depth > 0 ? "bg-gray-50/30" : ""
        } ${
          isCompleted ? "bg-gray-50/50" : "hover:bg-gray-50/60"
        }`}
        draggable
        onDoubleClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onTaskOpen(task.id);
        }}
        onDragStart={() => onSetDragging(task.id)}
        onDragOver={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onSetDragOver(task.id);
        }}
        onDragLeave={() => onSetDragOver(null)}
        onDrop={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onDrop(draggingId!, task.id);
        }}
      >
        {columns.map((col) => {
          const isEditing = editing?.taskId === task.id && editing?.field === col.field;
          const displayValue = col.field ? getFieldValue(task, col.field, fieldValues) : "";
          const field = col.field;

          // Editable cells
          if (isEditing && field) {
            if (field === "status") {
              return (
                <td key={col.id} className="px-3 py-2" style={colWidthStyle(col.width)}>
                  <select
                    autoFocus
                    value={editValue}
                    onChange={(e) => onEditChange(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") { e.preventDefault(); onEditSave(); }
                      if (e.key === "Escape") { e.preventDefault(); onEditChange(displayValue); }
                    }}
                    onBlur={onEditSave}
                    className="w-full px-1 py-0.5 text-xs border border-blue-400 rounded bg-blue-50 focus:outline-none focus:ring-1 focus:ring-blue-400"
                  >
                    {ALL_STATUSES.map((s) => (
                      <option key={s} value={s}>{statusLabels[s]}</option>
                    ))}
                  </select>
                </td>
              );
            }
            if (field === "dueDate" || field === "completedAt") {
              return (
                <td key={col.id} className="px-3 py-2" style={colWidthStyle(col.width)}>
                  <input
                    autoFocus
                    type="date"
                    value={editValue}
                    onChange={(e) => onEditChange(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") { e.preventDefault(); onEditSave(); }
                      if (e.key === "Escape") { e.preventDefault(); onEditChange(displayValue); }
                    }}
                    onBlur={onEditSave}
                    className="w-full px-1 py-0.5 text-xs border border-blue-400 rounded bg-blue-50 focus:outline-none focus:ring-1 focus:ring-blue-400"
                  />
                </td>
              );
            }
            // Custom select
            if (field.startsWith("custom_") && col.customField?.type === "SELECT") {
              const options = col.customField.options ? JSON.parse(col.customField.options) as string[] : [];
              return (
                <td key={col.id} className="px-3 py-2" style={colWidthStyle(col.width)}>
                  <select
                    autoFocus
                    value={editValue}
                    onChange={(e) => onEditChange(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") { e.preventDefault(); onEditSave(); }
                      if (e.key === "Escape") { e.preventDefault(); onEditChange(displayValue); }
                    }}
                    onBlur={onEditSave}
                    className="w-full px-1 py-0.5 text-xs border border-blue-400 rounded bg-blue-50 focus:outline-none focus:ring-1 focus:ring-blue-400"
                  >
                    <option value="">--</option>
                    {options.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </td>
              );
            }
            // Default text input for title, npc, notes, custom text
            return (
              <td key={col.id} className="px-3 py-2" style={colWidthStyle(col.width)}>
                <input
                  autoFocus
                  type={col.customField?.type === "NUMBER" ? "number" : "text"}
                  value={editValue}
                  onChange={(e) => onEditChange(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") { e.preventDefault(); onEditSave(); }
                    if (e.key === "Escape") { e.preventDefault(); onEditChange(displayValue); }
                  }}
                  onBlur={onEditSave}
                  className="w-full px-1 py-0.5 text-xs border border-blue-400 rounded bg-blue-50 focus:outline-none focus:ring-1 focus:ring-blue-400"
                />
              </td>
            );
          }

          // Display cells
          if (col.id === "done") {
            const isCompleted = task.status === "COMPLETED";
            return (
              <td key={col.id} className="px-2 py-2 text-center" style={colWidthStyle(col.width)}>
                <label
                  className="inline-flex items-center cursor-pointer"
                  title={isCompleted ? "取消完成" : "标记为完成"}
                >
                  <input
                    type="checkbox"
                    checked={isCompleted}
                    onChange={() => onComplete(task.id, task.status)}
                    className="sr-only"
                  />
                  <span
                    className={`inline-flex flex-shrink-0 items-center justify-center w-5 h-5 rounded border-2 transition-colors ${
                      isCompleted
                        ? "bg-teal-600 border-teal-600"
                        : "border-gray-300 hover:border-teal-400"
                    }`}
                  >
                    {isCompleted && (
                      <svg
                        className="w-3 h-3 text-white"
                        viewBox="0 0 12 12"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          d="M2 6 L5 9 L10 3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </span>
                </label>
              </td>
            );
          }

          if (col.id === "index") {
            return (
              <td key={col.id} className="px-3 py-2 text-xs text-gray-400" style={colWidthStyle(col.width)}>
                <span className="cursor-move">⋮⋮</span>
              </td>
            );
          }

          if (col.id === "title") {
            return (
              <td key={col.id} className="px-3 py-2" style={colWidthStyle(col.width)}>
                <div className="flex items-center gap-2">
                  {depth > 0 && (
                    <span className="text-gray-300 text-xs flex-shrink-0">
                      {"↳".repeat(depth)}
                    </span>
                  )}
                  {isEditingTitle ? (
                    <input
                      autoFocus
                      type="text"
                      value={editValue}
                      onChange={(e) => onEditChange(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") { e.preventDefault(); onEditSave(); }
                        if (e.key === "Escape") { e.preventDefault(); onEditChange(task.title); }
                      }}
                      onBlur={onEditSave}
                      className="flex-1 px-1 py-0.5 text-sm border border-blue-400 rounded bg-blue-50 focus:outline-none focus:ring-1 focus:ring-blue-400"
                    />
                  ) : (
                    <button
                      onClick={() => onEditStart(task.id, "title", task.title)}
                      className={`flex-1 text-left text-sm font-medium cursor-text truncate ${
                        isCompleted ? "text-gray-400 line-through" : "text-gray-900 hover:text-blue-600"
                      }`}
                      title={task.title}
                    >
                      {task.title}
                    </button>
                  )}
                  {task.recurringTask && (
                    <button
                      onClick={() => onOpenRecurring(task)}
                      className="text-teal-500 hover:text-teal-600 flex-shrink-0 text-xs"
                      title="循环任务设置"
                    >
                      <span className="inline-flex items-center gap-0.5">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                      </span>
                    </button>
                  )}
                  <button
                    onClick={() => onOpenRecurring(task)}
                    className={`flex-shrink-0 text-xs ${task.recurringTask ? "text-gray-300 hover:text-gray-400" : "text-gray-200 hover:text-gray-400"}`}
                    title="设置循环"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </button>
                </div>
              </td>
            );
          }

          if (col.id === "status") {
            return (
              <td key={col.id} className="px-3 py-2" style={colWidthStyle(col.width)}>
                <button
                  onClick={() => col.editable && onEditStart(task.id, "status", task.status)}
                  className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${statusColors[task.status]} cursor-text`}
                >
                  {statusLabels[task.status]}
                </button>
              </td>
            );
          }

          if (col.id === "category") {
            return (
              <td key={col.id} className="px-3 py-2" style={colWidthStyle(col.width)}>
                <span className="flex items-center gap-1 text-xs">
                  <span
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ backgroundColor: categoryColor }}
                  />
                  <span className="truncate">{task.category?.name}</span>
                </span>
              </td>
            );
          }

          if (col.id === "dueDate") {
            const overdueClass = overdue ? "text-red-600 font-medium" : "text-gray-600";
            return (
              <td key={col.id} className="px-3 py-2" style={colWidthStyle(col.width)}>
                <button
                  onClick={() => col.editable && onEditStart(task.id, "dueDate", task.dueDate ? formatDate(task.dueDate) : "")}
                  className={`text-xs cursor-text ${overdueClass}`}
                >
                  {task.dueDate ? formatDate(task.dueDate) : "—"}
                </button>
              </td>
            );
          }

          if (col.id === "completedAt") {
            return (
              <td key={col.id} className="px-3 py-2 text-xs text-gray-500" style={colWidthStyle(col.width)}>
                {task.completedAt ? formatDate(task.completedAt) : "—"}
              </td>
            );
          }

          // Generic editable cell (npc, notes, custom fields)
          if (col.editable && field) {
            return (
              <td key={col.id} className="px-3 py-2 group" style={colWidthStyle(col.width)}>
                <button
                  onClick={() => onEditStart(task.id, field, displayValue)}
                  className="text-xs text-gray-600 cursor-text truncate hover:text-blue-600 inline-flex items-center gap-1"
                  title={displayValue || undefined}
                >
                  <span className="truncate">{displayValue || "—"}</span>
                  <span className="opacity-0 group-hover:opacity-100 text-blue-400 text-[10px]">✎</span>
                </button>
              </td>
            );
          }

          // Read-only generic
          return (
            <td key={col.id} className="px-3 py-2 text-xs text-gray-500 truncate" style={colWidthStyle(col.width)}>
              {displayValue || "—"}
            </td>
          );
        })}

        <td className="px-2 py-2 w-10 text-center">
          {task.parentId && (
            <button
              onClick={() => onUnparent(task.id)}
              className="text-gray-300 hover:text-blue-500 text-xs transition-colors"
              title="解除父子关系"
            >
              ⤴
            </button>
          )}
        </td>
      </tr>

      {/* Children */}
      {task.children.map((child) => (
        <TaskRow
          key={child.id}
          task={child}
          depth={depth + 1}
          columns={columns}
          draggingId={draggingId}
          dragOverId={dragOverId}
          onSetDragging={onSetDragging}
          onSetDragOver={onSetDragOver}
          onDrop={onDrop}
          onUnparent={onUnparent}
          categoryColor={categoryColor}
          editing={editing}
          editValue={editValue}
          onEditChange={onEditChange}
          onEditSave={onEditSave}
          onEditStart={onEditStart}
          fieldValues={fieldValues}
          colWidthStyle={colWidthStyle}
          onComplete={onComplete}
          onOpenRecurring={onOpenRecurring}
          onTaskOpen={onTaskOpen}
        />
      ))}
    </>
  );
}

/* ── CompletedSection ────────────────────────── */

function CompletedSection({
  tasks,
  columns,
  colWidthStyle,
  onComplete,
  fieldValues,
  editing,
  editValue,
  onEditChange,
  onEditSave,
  onEditStart,
  onOpenRecurring,
  onTaskOpen,
}: {
  tasks: TaskWithCategory[];
  columns: ColumnDef[];
  colWidthStyle: (w: number) => React.CSSProperties;
  onComplete: (taskId: string, currentStatus: TaskStatus) => void;
  fieldValues: FieldValueMap;
  editing: EditingCell;
  editValue: string;
  onEditChange: (v: string) => void;
  onEditSave: () => void;
  onEditStart: (taskId: string, field: FieldKey, value: string) => void;
  onOpenRecurring: (task: TaskWithCategory) => void;
  onTaskOpen: (taskId: string) => void;
}) {
  const [collapsed, setCollapsed] = useState(false);
  if (tasks.length === 0) return null;

  return (
    <tbody className="border-t-2 border-gray-300">
      {/* Header */}
      <tr className="bg-green-50/60">
        <td colSpan={columns.length + 1} className="px-4 py-2">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="text-gray-400 hover:text-gray-600 transition-colors w-5 flex-shrink-0"
              title={collapsed ? "展开" : "收起"}
            >
              {collapsed ? "▶" : "▼"}
            </button>
            <span className="w-3 h-3 rounded-full bg-green-500 flex-shrink-0" />
            <span className="font-semibold text-green-700 text-sm">已完成</span>
            <span className="text-xs text-green-500 bg-green-100 px-2 py-0.5 rounded-full">
              {tasks.length}
            </span>
          </div>
        </td>
      </tr>

      {!collapsed && tasks.map((task) => (
        <TaskRow
          key={task.id}
          task={task}
          depth={0}
          columns={columns}
          draggingId={null}
          dragOverId={null}
          onSetDragging={() => {}}
          onSetDragOver={() => {}}
          onDrop={() => {}}
          onUnparent={() => {}}
          categoryColor="#10B981"
          editing={editing}
          editValue={editValue}
          onEditChange={onEditChange}
          onEditSave={onEditSave}
          onEditStart={onEditStart}
          fieldValues={fieldValues}
          colWidthStyle={colWidthStyle}
          onComplete={onComplete}
          onOpenRecurring={onOpenRecurring}
          onTaskOpen={onTaskOpen}
        />
      ))}
    </tbody>
  );
}
