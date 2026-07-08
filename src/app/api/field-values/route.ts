import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET /api/field-values?taskId=xxx&fieldId=yyy  or ?taskIds=id1,id2
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const taskId = searchParams.get("taskId");
    const taskIds = searchParams.get("taskIds");
    const fieldId = searchParams.get("fieldId");
    if (!taskId && !taskIds && !fieldId) {
      return NextResponse.json(
        { error: "Need taskId, taskIds or fieldId" },
        { status: 400 }
      );
    }

    const where: Record<string, unknown> = {};
    if (taskId) where.taskId = taskId;
    else if (taskIds) where.taskId = { in: taskIds.split(",") };
    if (fieldId) where.fieldId = fieldId;

    const values = await prisma.taskFieldValue.findMany({
      where,
      include: { field: true },
    });
    return NextResponse.json(values);
  } catch (error: unknown) {
    console.error("Error fetching field values:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to fetch" },
      { status: 500 }
    );
  }
}

// POST 创建或更新字段值
export async function POST(req: Request) {
  try {
    const body = await req.json();
    if (!body.taskId || !body.fieldId || body.value === undefined) {
      return NextResponse.json(
        { error: "Missing taskId, fieldId or value" },
        { status: 400 }
      );
    }

    const upserted = await prisma.taskFieldValue.upsert({
      where: {
        taskId_fieldId: {
          taskId: body.taskId,
          fieldId: body.fieldId,
        },
      },
      update: { value: body.value === "" ? null : body.value },
      create: {
        taskId: body.taskId,
        fieldId: body.fieldId,
        value: body.value === "" ? null : body.value,
      },
    });
    return NextResponse.json(upserted);
  } catch (error: unknown) {
    console.error("Error upserting field value:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to save" },
      { status: 500 }
    );
  }
}
