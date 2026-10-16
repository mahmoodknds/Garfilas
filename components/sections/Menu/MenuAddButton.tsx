"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Plus } from "lucide-react";
import { useCart, type CartProduct } from "@/components/sections/Cart/CartProvider";

type MenuAddButtonProps = {
  product: CartProduct;
  className: string;
};

export default function MenuAddButton({
  product,
  className,
}: MenuAddButtonProps) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    },
    [],
  );

  function handleAdd() {
    addItem(product);
    setAdded(true);

    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => setAdded(false), 1300);
  }

  return (
    <button
      type="button"
      className={className}
      onClick={handleAdd}
      aria-label={`افزودن ${product.name} به سبد خرید`}
    >
      <span>{added ? "اضافه شد" : "افزودن به سبد"}</span>
      {added ? <Check aria-hidden="true" size={15} /> : <Plus aria-hidden="true" size={15} />}
    </button>
  );
}
