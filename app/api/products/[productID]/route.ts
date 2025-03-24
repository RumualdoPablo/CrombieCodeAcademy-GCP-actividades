import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

interface Params {
  productID: string;
}

export async function GET(
  req: NextRequest,
  context: { params: Promise<Params> }
) {
  try {
    const { productID } = await context.params;
    const product = await prisma.product.findUnique({
      where: { productId: productID },
      include: { category: true },
    });

    if (!product) {
      return NextResponse.json(
        { error: "Producto no encontrado" },
        { status: 404 }
      );
    }

    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json(
      { error: "Error al obtener producto" },
      { status: 500 }
    );
  }
}

export async function PUT(
  req: NextRequest,
  context: { params: Promise<Params> }
) {
  const { productID } = await context.params;
  const body = await req.json();
  const productUpdated = await prisma.product.update({
    where: { productId: productID },
    data: body,
  });
  return NextResponse.json({ productUpdated }, { status: 200 });
}

export async function DELETE(
  req: NextRequest,
  context: { params: Promise<Params> }
) {
  const { productID } = await context.params;
  const productDeleted = await prisma.product.delete({
    where: { productId: productID },
  });

  return NextResponse.json(
    { productDeleted },
    {
      status: 200,
    }
  );
}
