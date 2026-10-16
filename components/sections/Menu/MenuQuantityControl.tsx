"use client";

import { useCart, type CartProduct } from "@/components/sections/Cart/CartProvider";

type MenuQuantityControlProps = {
  product: CartProduct;
  className: string;
};

function formatQuantity(value: number) {
  return new Intl.NumberFormat("fa-IR").format(value);
}

export default function MenuQuantityControl({
  product,
  className,
}: MenuQuantityControlProps) {
  const { items, addItem, setQuantity } = useCart();
  const quantity = items.find((item) => item.id === product.id)?.quantity ?? 0;

  return (
    <div className={className} dir="ltr" aria-label={`تعداد ${product.name}`}>
      <button
        type="button"
        onClick={() => addItem(product)}
        aria-label={`افزایش تعداد ${product.name}`}
      >
        +
      </button>
      <output aria-live="polite" aria-atomic="true">
        {formatQuantity(quantity)}
      </output>
      <button
        type="button"
        onClick={() => setQuantity(product.id, quantity - 1)}
        disabled={quantity === 0}
        aria-label={`کاهش تعداد ${product.name}`}
      >
        −
      </button>
    </div>
  );
}
