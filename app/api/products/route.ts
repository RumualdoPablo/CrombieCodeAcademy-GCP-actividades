import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    console.log(searchParams);

    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "10", 10);
    const search = searchParams.get("search") || "";

    const skip = (page - 1) * limit;

    const totalProducts = await prisma.product.count();

    const products = await prisma.product.findMany({
      where: {
        name: {
          contains: search,
        },
      },
      skip,
      take: limit,
      orderBy: { name: "asc" },
    });

    return NextResponse.json({
      products,
      total: totalProducts,
      page,
      totalPages: Math.ceil(totalProducts / limit),
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Error al obtener productos" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const newProduct = await prisma.product.create({ data: body });
  return NextResponse.json({ newProduct }, { status: 201 });
}
