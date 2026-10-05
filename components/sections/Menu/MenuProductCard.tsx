"use client";

import { useState } from "react";

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
  imageSrc = "/assets/menu/lasagna.webp",
}: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <article className="menu-product" aria-label={name}>
      <div className="menu-product__topline" aria-hidden="true">
        <span>GARFILAS</span>
        <span>01</span>
      </div>

      <div className="menu-product__name">
        <span>{name}</span>
      </div>

      <div className="menu-product__visual">
        <div className="menu-product__image-frame">
          {!imageFailed ? (
            <img
              className="menu-product__image"
              src={imageSrc}
              alt={name}
              width={760}
              height={760}
              loading="lazy"
              onError={() => setImageFailed(true)}
            />
          ) : (
            <div className="menu-product__fallback" aria-hidden="true">
              <span>LASAGNA</span>
              <i />
              <small>GARFILAS</small>
            </div>
          )}
        </div>
        <span className="menu-product__image-caption" aria-hidden="true">
          GARFILAS · LASAGNA
        </span>
      </div>

      <div className="menu-product__details">
        <p className="menu-product__description">{description}</p>

        <div className="menu-product__footer">
          <div className="menu-product__price">
            <small>PRICE</small>
            <strong>{price > 0 ? price.toLocaleString("fa-IR") : "—"}</strong>
            {price > 0 && <span>تومان</span>}
          </div>

          <div className="menu-product__quantity" aria-label="تعداد">
            <button
              type="button"
              aria-label="کاهش تعداد"
              onClick={() => setQuantity((value) => Math.max(1, value - 1))}
            >
              −
            </button>
            <span>{quantity.toLocaleString("fa-IR")}</span>
            <button
              type="button"
              aria-label="افزایش تعداد"
              onClick={() => setQuantity((value) => value + 1)}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
