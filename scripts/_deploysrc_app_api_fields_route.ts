import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import type { CustomFieldType } from "@/generated/prisma";

export async function GET() {
  try {
    const fields = await prisma.customField.findMany({
      orderBy: { sortOrder: "asc" },
    });
    return NextResponse.json(fields);
  } catch (error: unknown) {
    console.error("Error fetching custom fields:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to fetch fields" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    if (!body.name || !body.key || !body.type) {
      return NextResponse.json(
        { error: "Missing required fields: name, key, type" },
        { status: 400 }
      );
    }

    const existing = await prisma.customField.findUnique({
      where: { key: body.key },
    });
    if (existing) {
      return NextResponse.json(
        { error: `Field key '${body.key}' already exists` },
        { status: 400 }
      );
    }

    const field = await prisma.customField.create({
      data: {
        name: body.name,
        key: body.key,
        type: body.type as CustomFieldType,
        options: body.options ? JSON.stringify(body.options) : null,
        sortOrder: body.sortOrder ?? 0,
      },
    });
    return NextResponse.json(field, { status: 201 });
  } catch (error: unknown) {
    console.error("Error creating custom field:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to create field" },
      { status: 500 }
    );
  }
}
