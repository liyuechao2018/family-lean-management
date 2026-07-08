"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import RichTextEditor from "./RichTextEditor";

export default function TaskDescriptionEditor({
  taskId,
  initialDescription,
}: {
  taskId: string;
  initialDescription: string;
}) {
  const [description, setDescription] = useState(initialDescription);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const saveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastSavedRef = useRef(initialDescription);

  const save = useCallback(
    async (html: string) => {
      if (html === lastSavedRef.current) return;
      setSaving(true);
      setSaved(false);
      try {
        const res = await fetch(`/lean-management/api/tasks/${taskId}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ description: html }),
        });
        if (res.ok) {
          lastSavedRef.current = html;
          setSaving(false);
          setSaved(true);
          setTimeout(() => setSaved(false), 2000);
        }
      } catch {
        setSaving(false);
      }
    },
    [taskId]
  );

  const handleChange = useCallback(
    (html: string) => {
      setDescription(html);
      // Debounced auto-save: 1.5s after last keystroke
      if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
      saveTimerRef.current = setTimeout(() => {
        save(html);
      }, 1500);
    },
    [save]
  );

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
    };
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-sm font-semibold text-gray-500">任务描述</h2>
        <div className="flex items-center gap-2">
          {saving && (
            <span className="text-xs text-gray-400">保存中...</span>
          )}
          {saved && (
            <span className="text-xs text-green-600">✓ 已保存</span>
          )}
        </div>
      </div>
      <RichTextEditor
        content={description}
        onChange={handleChange}
        placeholder="输入任务详情、操作步骤、备注等内容..."
      />
    </div>
  );
}
