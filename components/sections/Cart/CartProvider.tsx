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

export type CartProduct = {
  id: string;
  name: string;
  italian: string;
  description: string;
  price: number;
  originalPrice?: number;
  discountPercent?: number;
  tag?: string;
};

export type CartItem = CartProduct & {
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  discountTotal: number;
  hydrated: boolean;
  addItem: (product: CartProduct) => void;
  setQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
};

const STORAGE_KEY = "garfilas-cart-v1";
const CartContext = createContext<CartContextValue | undefined>(undefined);

function isCartItem(value: unknown): value is CartItem {
  if (!value || typeof value !== "object") return false;

  const item = value as Partial<CartItem>;
  return (
    typeof item.id === "string" &&
    typeof item.name === "string" &&
    typeof item.italian === "string" &&
    typeof item.description === "string" &&
    typeof item.price === "number" &&
    Number.isFinite(item.price) &&
    item.price >= 0 &&
    (item.originalPrice === undefined ||
      (typeof item.originalPrice === "number" &&
        Number.isFinite(item.originalPrice) &&
        item.originalPrice >= item.price)) &&
    (item.discountPercent === undefined ||
      (typeof item.discountPercent === "number" &&
        Number.isInteger(item.discountPercent) &&
        item.discountPercent > 0 &&
        item.discountPercent <= 100)) &&
    typeof item.quantity === "number" &&
    Number.isInteger(item.quantity) &&
    item.quantity > 0
  );
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    let restoredItems: CartItem[] = [];

    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed: unknown = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          restoredItems = parsed.filter(isCartItem);
        }
      }
    } catch {
      // Keep the cart usable when storage is unavailable or contains invalid data.
    }

    const hydrationFrame = window.requestAnimationFrame(() => {
      setItems(restoredItems);
      setHydrated(true);
    });

    return () => window.cancelAnimationFrame(hydrationFrame);
  }, []);

  useEffect(() => {
    if (!hydrated) return;

    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // The current in-memory cart remains usable if storage is unavailable.
    }
  }, [hydrated, items]);

  const addItem = useCallback((product: CartProduct) => {
    setItems((current) => {
      const existing = current.find((item) => item.id === product.id);
      if (existing) {
        return current.map((item) =>
          item.id === product.id
            ? { ...item, ...product, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...current, { ...product, quantity: 1 }];
    });
  }, []);

  const setQuantity = useCallback((id: string, quantity: number) => {
    const safeQuantity = Math.floor(quantity);
    if (safeQuantity <= 0) {
      setItems((current) => current.filter((item) => item.id !== id));
      return;
    }

    setItems((current) =>
      current.map((item) =>
        item.id === id ? { ...item, quantity: safeQuantity } : item,
      ),
    );
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems((current) => current.filter((item) => item.id !== id));
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const itemCount = useMemo(
    () => items.reduce((count, item) => count + item.quantity, 0),
    [items],
  );
  const subtotal = useMemo(
    () => items.reduce((total, item) => total + item.price * item.quantity, 0),
    [items],
  );
  const discountTotal = useMemo(
    () =>
      items.reduce(
        (total, item) =>
          total + Math.max(0, (item.originalPrice ?? item.price) - item.price) * item.quantity,
        0,
      ),
    [items],
  );

  const value = useMemo(
    () => ({
      items,
      itemCount,
      subtotal,
      discountTotal,
      hydrated,
      addItem,
      setQuantity,
      removeItem,
      clearCart,
    }),
    [
      items,
      itemCount,
      subtotal,
      discountTotal,
      hydrated,
      addItem,
      setQuantity,
      removeItem,
      clearCart,
    ],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside CartProvider.");
  }
  return context;
}
