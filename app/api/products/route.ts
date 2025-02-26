import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const products = await prisma.product.findMany();

  return NextResponse.json({ products }, { status: 200 });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const newProduct = await prisma.product.create({ data: body });
  return NextResponse.json({ newProduct }, { status: 201 });
}
