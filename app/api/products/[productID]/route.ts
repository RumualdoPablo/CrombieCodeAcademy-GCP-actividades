import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { productID: string } }
) {
  try {
    const product = await prisma.product.findUnique({
      where: { productId: params.productID },
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
  req: Request,
  { params }: { params: { productID: string } }
) {
  const productID = (await params).productID;
  const body = await req.json();
  const productUpdated = await prisma.product.update({
    where: { productId: productID },
    data: body,
  });
  return NextResponse.json({ productUpdated }, { status: 200 });
}

export async function DELETE(
  req: Request,
  { params }: { params: { productID: string } }
) {
  const productID = (await params).productID;
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
