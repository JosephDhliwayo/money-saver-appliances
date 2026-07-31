import { NextRequest, NextResponse } from "next/server";
import {
  addCartLines,
  createCart,
  getCart,
  removeCartLines,
  updateCartLine,
} from "@/lib/shopify";

export async function GET(request: NextRequest) {
  const cartId = request.nextUrl.searchParams.get("cartId");
  if (!cartId) {
    return NextResponse.json({ error: "cartId is required" }, { status: 400 });
  }
  const cart = await getCart(cartId);
  if (!cart) {
    return NextResponse.json({ error: "Cart not found" }, { status: 404 });
  }
  return NextResponse.json(cart);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { cartId, merchandiseId, quantity } = body as {
    cartId?: string;
    merchandiseId: string;
    quantity: number;
  };

  if (!merchandiseId || !quantity) {
    return NextResponse.json(
      { error: "merchandiseId and quantity are required" },
      { status: 400 }
    );
  }

  const cart = cartId
    ? await addCartLines(cartId, merchandiseId, quantity)
    : await createCart(merchandiseId, quantity);

  if (!cart) {
    return NextResponse.json({ error: "Failed to update cart" }, { status: 502 });
  }
  return NextResponse.json(cart);
}

export async function PATCH(request: NextRequest) {
  const body = await request.json();
  const { cartId, lineId, quantity } = body as {
    cartId: string;
    lineId: string;
    quantity: number;
  };

  if (!cartId || !lineId || quantity === undefined) {
    return NextResponse.json(
      { error: "cartId, lineId, and quantity are required" },
      { status: 400 }
    );
  }

  const cart = await updateCartLine(cartId, lineId, quantity);
  if (!cart) {
    return NextResponse.json({ error: "Failed to update cart" }, { status: 502 });
  }
  return NextResponse.json(cart);
}

export async function DELETE(request: NextRequest) {
  const body = await request.json();
  const { cartId, lineId } = body as { cartId: string; lineId: string };

  if (!cartId || !lineId) {
    return NextResponse.json(
      { error: "cartId and lineId are required" },
      { status: 400 }
    );
  }

  const cart = await removeCartLines(cartId, [lineId]);
  if (!cart) {
    return NextResponse.json({ error: "Failed to update cart" }, { status: 502 });
  }
  return NextResponse.json(cart);
}
