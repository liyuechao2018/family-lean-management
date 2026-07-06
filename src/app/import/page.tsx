"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

export default function ImportPage() {
  const [uploading, setUploading] = useState(false);
  const [result, setResult] = useState<{
    total: number;
    created: number;
    skipped: number;
    errors: string[];
  } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  async function handleUpload(e: React.FormEvent) {
    e.preventDefault();
    const file = fileRef.current?.files?.[0];
    if (!file) return;

    setUploading(true);
    setError(null);
    setResult(null);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/import", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "导入失败");
      }

      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "导入失败");
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">数据导入</h2>

      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <p className="text-sm text-gray-600 mb-4">
          请上传从 Tower 导出的 Excel 文件（.xlsx）。
          <br />
          支持的字段：类型、任务标题、任务描述、父任务、是否完成、所属清单、开始日期、截止日期、NPC、完成时间、备注、链接地址。
        </p>

        <form onSubmit={handleUpload} className="space-y-4">
          <input
            ref={fileRef}
            type="file"
            accept=".xlsx,.xls"
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            required
          />

          <button
            type="submit"
            disabled={uploading}
            className="px-5 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 disabled:opacity-50 transition-colors"
          >
            {uploading ? "导入中..." : "开始导入"}
          </button>
        </form>

        {/* 错误信息 */}
        {error && (
          <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
            {error}
          </div>
        )}

        {/* 导入结果 */}
        {result && (
          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
            <h3 className="font-semibold text-green-800 mb-2">导入完成</h3>
            <ul className="text-sm text-green-700 space-y-1">
              <li>Excel 总行数：{result.total}</li>
              <li>成功创建：{result.created}</li>
              <li>跳过行数：{result.skipped}</li>
            </ul>
            {result.errors.length > 0 && (
              <div className="mt-2">
                <p className="text-sm font-medium text-red-700">警告：</p>
                <ul className="text-xs text-red-600 list-disc list-inside">
                  {result.errors.slice(0, 10).map((err, i) => (
                    <li key={i}>{err}</li>
                  ))}
                  {result.errors.length > 10 && (
                    <li>...还有 {result.errors.length - 10} 条警告</li>
                  )}
                </ul>
              </div>
            )}
            <button
              onClick={() => router.push("/tasks")}
              className="mt-3 text-sm text-blue-600 hover:underline"
            >
              → 查看导入的任务
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
