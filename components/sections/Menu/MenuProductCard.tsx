"use client";

import { useState } from "react";

type ProductCardProps = {
  name?: string;
  italianName?: string;
  description?: string;
  price?: number;
  imageSrc?: string;
};

export default function MenuProductCard({
  name = "Tagliata di manzo",
  italianName = "TAGLIATA DI MANZO",
  description = "Sliced beef, roasted vegetables, parmesan and a refined Italian finish.",
  price = 0,
  imageSrc = "/assets/menu/tagliata-di-manzo.webp",
}: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <article className="menu-product" aria-label={name}>
      <div className="menu-product__halo" aria-hidden="true" />
      <div className="menu-product__visual">
        <span className="menu-product__stamp">GARFILAS · 01</span>
        {!imageFailed ? (
          <img className="menu-product__image" src={imageSrc} alt={name} width={760} height={760} loading="lazy" onError={() => setImageFailed(true)} />
        ) : (
          <div className="menu-product__fallback" aria-hidden="true">
            <span>TAGLIATA</span><i /><small>DI MANZO</small>
          </div>
        )}
        <span className="menu-product__line" aria-hidden="true" />
      </div>

      <div className="menu-product__content">
        <div className="menu-product__eyebrow"><span>01</span><span>CARNE · ITALIANO</span></div>
        <div className="menu-product__title-row">
          <div>
            <p className="menu-product__italian">{italianName}</p>
            <h2>{name}</h2>
          </div>
          <span className="menu-product__number">01</span>
        </div>
        <p className="menu-product__description">{description}</p>

        <div className="menu-product__footer">
          <div className="menu-product__price">
            <small>FROM</small>
            <strong>{price > 0 ? price.toLocaleString("fa-IR") : "—"}</strong>
            {price > 0 && <span>تومان</span>}
          </div>

          <div className="menu-product__quantity" aria-label="تعداد">
            <button type="button" aria-label="کاهش تعداد" onClick={() => setQuantity((value) => Math.max(1, value - 1))}>−</button>
            <span>{quantity.toLocaleString("fa-IR")}</span>
            <button type="button" aria-label="افزایش تعداد" onClick={() => setQuantity((value) => value + 1)}>+</button>
          </div>
        </div>
      </div>
    </article>
  );
}
