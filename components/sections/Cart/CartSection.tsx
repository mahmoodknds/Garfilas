"use client";

import { ShoppingBag, Trash2 } from "lucide-react";
import styles from "./CartSection.module.css";
import { useCart } from "./CartProvider";

function formatAmount(amount: number) {
  return new Intl.NumberFormat("fa-IR").format(amount);
}

export default function CartSection() {
  const { items, itemCount, subtotal, hydrated, setQuantity, removeItem } = useCart();

  return (
    <section
      id="cart"
      dir="rtl"
      className={styles.section}
      aria-labelledby="cart-title"
    >
      <div className={styles.content}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>IL TUO CARRELLO</span>
          <h2 id="cart-title" className={styles.title}>سبد خرید شما</h2>
          <p className={styles.subtitle}>
            {hydrated && itemCount > 0
              ? `${formatAmount(itemCount)} قلم خوشمزه در سبد شماست`
              : "انتخاب‌های خوشمزه‌ات را اینجا مرور کن"}
          </p>
        </header>

        {!hydrated ? (
          <div className={styles.loadingState} aria-live="polite">
            در حال آماده‌سازی سبد خرید…
          </div>
        ) : items.length === 0 ? (
          <div className={styles.emptyState}>
            <span className={styles.emptyIcon} aria-hidden="true">
              <ShoppingBag size={29} strokeWidth={1.4} />
            </span>
            <h3>سبد خرید هنوز خالی است</h3>
            <p>از منوی گارفیلاز، لازانیای موردعلاقه‌ات را انتخاب کن.</p>
            <a className={styles.primaryLink} href="#menu">
              رفتن به منو
            </a>
          </div>
        ) : (
          <div className={styles.cartLayout}>
            <ul className={styles.itemsList} aria-label="اقلام سبد خرید">
              {items.map((item) => (
                <li className={styles.item} key={item.id}>
                  <div className={styles.itemMain}>
                    <div className={styles.itemHeading}>
                      <div>
                        <h3>{item.name}</h3>
                        <span className={styles.italian} dir="ltr">{item.italian}</span>
                      </div>
                      <button
                        type="button"
                        className={styles.removeButton}
                        onClick={() => removeItem(item.id)}
                        aria-label={`حذف ${item.name} از سبد خرید`}
                        title="حذف محصول"
                      >
                        <Trash2 size={17} aria-hidden="true" />
                      </button>
                    </div>
                    <p className={styles.description}>{item.description}</p>
                    <div className={styles.itemFooter}>
                      <div className={styles.quantityControl} aria-label={`تعداد ${item.name}`}>
                        <button
                          type="button"
                          onClick={() => setQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                          aria-label={`کاهش تعداد ${item.name}`}
                        >
                          −
                        </button>
                        <span aria-live="polite">{formatAmount(item.quantity)}</span>
                        <button
                          type="button"
                          onClick={() => setQuantity(item.id, item.quantity + 1)}
                          aria-label={`افزایش تعداد ${item.name}`}
                        >
                          +
                        </button>
                      </div>
                      <div className={styles.itemPrice}>
                        <span>{formatAmount(item.price)} تومان / هر پرس</span>
                        <strong>{formatAmount(item.price * item.quantity)} تومان</strong>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <aside id="cart-summary" className={styles.summary} aria-label="خلاصه سفارش">
              <h3>خلاصه سفارش</h3>
              <div className={styles.summaryLine}>
                <span>تعداد اقلام</span>
                <strong>{formatAmount(itemCount)}</strong>
              </div>
              <div className={styles.summaryLine}>
                <span>جمع محصولات</span>
                <strong>{formatAmount(subtotal)} تومان</strong>
              </div>
              <div className={styles.summaryDivider} />
              <div className={styles.totalLine}>
                <span>مبلغ سفارش</span>
                <strong>{formatAmount(subtotal)} <small>تومان</small></strong>
              </div>
              <p className={styles.summaryNote}>
                هزینه ارسال، در صورت وجود، هنگام نهایی‌سازی سفارش مشخص می‌شود.
              </p>
              <a className={styles.secondaryLink} href="#menu">
                افزودن محصول دیگر
              </a>
            </aside>
          </div>
        )}
      </div>
    </section>
  );
}
