"use client";

import { useState } from "react";
import MenuCardFrame from "./MenuCardFrame";

type ProductCardProps = {
  name?: string;
  description?: string;
  price?: number;
  imageSrc?: string;
};

export default function MenuProductCard({
  name = "Tagliata di manzo",
  description = "لایه‌های لازانیا با گوشت، سس مخصوص گارفیلـاز و پنیر کش‌دار، با طعمی عمیق و پایان ایتالیایی.",
  price = 0,
  imageSrc = "/assets/hero/garfilas-hero-final.webp",
}: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);

  return (
    <article className="menu-product" aria-label={name}>
      <MenuCardFrame />

      <header className="menu-product__header">
        <span className="menu-product__name">{name}</span>
      </header>

      <div className="menu-product__art">
        <div className="menu-product__art-glow" aria-hidden="true" />
        <div className="menu-product__image-window">
          <img
            className="menu-product__image"
            src={imageSrc}
            alt={name}
            width={1536}
            height={1024}
            loading="lazy"
          />
        </div>
      </div>

      <div className="menu-product__copy">
        <p>{description}</p>
      </div>

      <div className="menu-product__meta">
        <div className="menu-product__price">
          <span>PRICE</span>
          <strong>{price > 0 ? price.toLocaleString("fa-IR") : "—"}</strong>
          {price > 0 && <small>تومان</small>}
        </div>

        <div className="menu-product__quantity" aria-label="تعداد">
          <button type="button" aria-label="کاهش تعداد" onClick={() => setQuantity((value) => Math.max(1, value - 1))}>−</button>
          <strong>{quantity.toLocaleString("fa-IR")}</strong>
          <button type="button" aria-label="افزایش تعداد" onClick={() => setQuantity((value) => value + 1)}>+</button>
        </div>
      </div>
    </article>
  );
}
