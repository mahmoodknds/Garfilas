"use client";

import { Trash2 } from "lucide-react";
import { useCart, type CartProduct } from "@/components/sections/Cart/CartProvider";

type MenuQuantityControlProps = {
  product: CartProduct;
  className: string;
};

function formatQuantity(value: number) {
  return new Intl.NumberFormat("en-US").format(value);
}

export default function MenuQuantityControl({
  product,
  className,
}: MenuQuantityControlProps) {
  const { items, addItem, setQuantity, removeItem } = useCart();
  const quantity = items.find((item) => item.id === product.id)?.quantity ?? 0;

  if (quantity === 0) {
    return (
      <div className={`${className} addMode`} dir="rtl" aria-label={`تعداد ${product.name}`}>
        <button
          type="button"
          className="addButton"
          onClick={() => addItem(product)}
          aria-label={`افزودن ${product.name} به سبد خرید`}
        >
          افزودن
        </button>
      </div>
    );
  }

  return (
    <div className={className} dir="rtl" aria-label={`تعداد ${product.name}`}>
      <button
        type="button"
        onClick={() => addItem(product)}
        aria-label={`افزایش تعداد ${product.name}`}
      >
        +
      </button>
      <output className="quantityValue" aria-live="polite" aria-atomic="true">
        {formatQuantity(quantity)}
      </output>
      {quantity === 1 ? (
        <button
          type="button"
          onClick={() => removeItem(product.id)}
          aria-label={`حذف ${product.name} از سبد خرید`}
          title="حذف محصول"
        >
          <Trash2 size={17} strokeWidth={1.9} aria-hidden="true" />
        </button>
      ) : (
        <button
          type="button"
          onClick={() => setQuantity(product.id, quantity - 1)}
          aria-label={`کاهش تعداد ${product.name}`}
        >
          −
        </button>
      )}
    </div>
  );
}
