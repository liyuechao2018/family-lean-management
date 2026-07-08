import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import type { CustomFieldType } from "@/generated/prisma";

export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await req.json();
    const data: { name?: string; type?: CustomFieldType; options?: string | null; sortOrder?: number } = {};
    if (body.name !== undefined) data.name = body.name;
    if (body.type !== undefined) data.type = body.type;
    if (body.options !== undefined) data.options = body.options ? JSON.stringify(body.options) : null;
    if (body.sortOrder !== undefined) data.sortOrder = body.sortOrder;

    const field = await prisma.customField.update({
      where: { id },
      data,
    });
    return NextResponse.json(field);
  } catch (error: unknown) {
    console.error("Error updating custom field:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to update field" },
      { status: 500 }
    );
  }
}

export async function DELETE(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    await prisma.customField.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    console.error("Error deleting custom field:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to delete field" },
      { status: 500 }
    );
  }
}
