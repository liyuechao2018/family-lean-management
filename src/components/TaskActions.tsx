"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { TaskStatus } from "@/generated/prisma";

export default function TaskActions({
  taskId,
  status,
}: {
  taskId: string;
  status: TaskStatus;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  async function updateStatus(newStatus: TaskStatus) {
    const data: Record<string, unknown> = { status: newStatus };
    if (newStatus === "COMPLETED") {
      data.completedAt = new Date().toISOString();
    }

    await fetch(`/api/tasks/${taskId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    startTransition(() => router.refresh());
  }

  async function deleteTask() {
    const res = await fetch(`/api/tasks/${taskId}`, { method: "DELETE" });
    if (res.ok) {
      router.push("/tasks");
    }
  }

  return (
    <div className="flex gap-2 flex-wrap mt-4">
      {status !== "COMPLETED" && (
        <button
          onClick={() => updateStatus("COMPLETED")}
          disabled={isPending}
          className="px-3 py-1.5 text-sm bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50"
        >
          ✓ 完成
        </button>
      )}
      {status === "COMPLETED" && (
        <button
          onClick={() => updateStatus("TODO")}
          disabled={isPending}
          className="px-3 py-1.5 text-sm bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 disabled:opacity-50"
        >
          ↩ 重新打开
        </button>
      )}
      {status !== "IN_PROGRESS" && status !== "COMPLETED" && (
        <button
          onClick={() => updateStatus("IN_PROGRESS")}
          disabled={isPending}
          className="px-3 py-1.5 text-sm bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 disabled:opacity-50"
        >
          ▶ 开始
        </button>
      )}
      {status !== "ARCHIVED" && (
        <button
          onClick={() => updateStatus("ARCHIVED")}
          disabled={isPending}
          className="px-3 py-1.5 text-sm bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 disabled:opacity-50"
        >
          📦 归档
        </button>
      )}

      <button
        onClick={() => setShowDeleteConfirm(!showDeleteConfirm)}
        disabled={isPending}
        className="px-3 py-1.5 text-sm bg-red-50 text-red-600 rounded-lg hover:bg-red-100 disabled:opacity-50 ml-auto"
      >
        🗑 删除
      </button>

      {showDeleteConfirm && (
        <div className="w-full mt-2 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
          <span className="text-sm text-red-700">确认删除此任务？此操作不可撤销。</span>
          <button
            onClick={deleteTask}
            className="px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700"
          >
            确认删除
          </button>
          <button
            onClick={() => setShowDeleteConfirm(false)}
            className="px-3 py-1 text-sm bg-white text-gray-600 border rounded hover:bg-gray-50"
          >
            取消
          </button>
        </div>
      )}
    </div>
  );
}
