"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { CartData, CartLineItem } from "@/lib/shopify";

type CartContextValue = {
  lines: CartLineItem[];
  loading: boolean;
  addItem: (variantId: string, quantity?: number) => Promise<void>;
  removeItem: (lineId: string) => Promise<void>;
  setQuantity: (lineId: string, quantity: number) => Promise<void>;
  clearCart: () => void;
  itemCount: number;
  subtotal: number;
  checkoutUrl: string | undefined;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);
const STORAGE_KEY = "money-saver-cart-id";

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartData | null>(null);
  const [loading, setLoading] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const cartId = window.localStorage.getItem(STORAGE_KEY);
    if (!cartId) {
      setHydrated(true);
      return;
    }
    fetch(`/api/cart?cartId=${encodeURIComponent(cartId)}`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data: CartData | null) => {
        if (data) {
          setCart(data);
        } else {
          window.localStorage.removeItem(STORAGE_KEY);
        }
      })
      .catch(() => {
        // ignore, cart will just start empty
      })
      .finally(() => setHydrated(true));
  }, []);

  const saveCart = useCallback((data: CartData) => {
    setCart(data);
    window.localStorage.setItem(STORAGE_KEY, data.id);
  }, []);

  const addItem = useCallback(
    async (variantId: string, quantity = 1) => {
      setLoading(true);
      try {
        const res = await fetch("/api/cart", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            cartId: cart?.id,
            merchandiseId: variantId,
            quantity,
          }),
        });
        if (res.ok) {
          saveCart(await res.json());
        }
      } finally {
        setLoading(false);
      }
    },
    [cart?.id, saveCart]
  );

  const removeItem = useCallback(
    async (lineId: string) => {
      if (!cart) return;
      setLoading(true);
      try {
        const res = await fetch("/api/cart", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ cartId: cart.id, lineId }),
        });
        if (res.ok) {
          saveCart(await res.json());
        }
      } finally {
        setLoading(false);
      }
    },
    [cart, saveCart]
  );

  const setQuantity = useCallback(
    async (lineId: string, quantity: number) => {
      if (!cart) return;
      if (quantity <= 0) {
        await removeItem(lineId);
        return;
      }
      setLoading(true);
      try {
        const res = await fetch("/api/cart", {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ cartId: cart.id, lineId, quantity }),
        });
        if (res.ok) {
          saveCart(await res.json());
        }
      } finally {
        setLoading(false);
      }
    },
    [cart, saveCart, removeItem]
  );

  const clearCart = useCallback(() => {
    setCart(null);
    window.localStorage.removeItem(STORAGE_KEY);
  }, []);

  const lines = useMemo(() => cart?.lines ?? [], [cart]);

  const itemCount = useMemo(
    () => lines.reduce((sum, l) => sum + l.quantity, 0),
    [lines]
  );

  const value: CartContextValue = {
    lines,
    loading: loading || !hydrated,
    addItem,
    removeItem,
    setQuantity,
    clearCart,
    itemCount,
    subtotal: cart?.subtotal ?? 0,
    checkoutUrl: cart?.checkoutUrl,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
