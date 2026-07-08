import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const key = searchParams.get("key");
    if (key) {
      const setting = await prisma.setting.findUnique({ where: { key } });
      return NextResponse.json({ key, value: setting?.value ?? null });
    }
    const settings = await prisma.setting.findMany();
    return NextResponse.json(settings);
  } catch (error: unknown) {
    console.error("Error fetching settings:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to fetch settings" },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    if (!body.key) {
      return NextResponse.json({ error: "Missing key" }, { status: 400 });
    }
    const setting = await prisma.setting.upsert({
      where: { key: body.key },
      update: { value: body.value },
      create: { key: body.key, value: body.value },
    });
    return NextResponse.json(setting);
  } catch (error: unknown) {
    console.error("Error saving setting:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to save setting" },
      { status: 500 }
    );
  }
}
