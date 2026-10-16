"use client";

import { useState } from "react";
import { Trash2 } from "lucide-react";
import styles from "./CartSection.module.css";
import { useCart } from "./CartProvider";

function formatAmount(amount: number) {
  return new Intl.NumberFormat("en-US").format(amount);
}

export default function CartSection() {
  const {
    items,
    itemCount,
    subtotal,
    discountTotal,
    hydrated,
    setQuantity,
    removeItem,
  } = useCart();
  const [orderNotes, setOrderNotes] = useState("");

  const hasItems = hydrated && items.length > 0;

  return (
    <section
      id="cart"
      dir="rtl"
      className={hasItems ? styles.section : styles.emptySection}
      aria-labelledby={hasItems ? "cart-title" : undefined}
    >
      {hasItems && (
        <div className={styles.content}>
          <header className={styles.header}>
            <span className={styles.eyebrow}>IL TUO CARRELLO</span>
            <h2 id="cart-title" className={styles.title}>سبد خرید شما</h2>
            <p className={styles.subtitle}>
              {formatAmount(itemCount)} عدد انتخاب‌شده
            </p>
          </header>

          <div className={styles.cartLayout}>
            <div className={styles.cartMain}>
              <ul className={styles.itemsList} aria-label="اقلام سبد خرید">
                {items.map((item, index) => (
                  <li className={styles.item} key={item.id}>
                    <span className={styles.itemNumber}>{String(index + 1).padStart(2, "0")}</span>
                    <div className={styles.itemMain}>
                      <div className={styles.itemHeading}>
                        <div className={styles.productIdentity}>
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

                      <div className={styles.itemFooter}>
                        <div className={styles.quantityControl} aria-label={`تعداد ${item.name}`}>
                          <button
                            type="button"
                            onClick={() => setQuantity(item.id, item.quantity - 1)}
                            aria-label={`کاهش تعداد ${item.name}`}
                          >
                            −
                          </button>
                          <output aria-live="polite" aria-atomic="true">
                            {formatAmount(item.quantity)}
                          </output>
                          <button
                            type="button"
                            onClick={() => setQuantity(item.id, item.quantity + 1)}
                            aria-label={`افزایش تعداد ${item.name}`}
                          >
                            +
                          </button>
                        </div>

                        <div className={styles.itemPrice}>
                          {item.originalPrice && item.originalPrice > item.price && (
                            <span className={styles.itemOriginalPrice}>
                              {formatAmount(item.originalPrice)} تومان
                            </span>
                          )}
                          <strong>{formatAmount(item.price * item.quantity)} <small>تومان</small></strong>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className={styles.notesBox}>
                <label htmlFor="order-notes">توضیحات:</label>
                <textarea
                  id="order-notes"
                  value={orderNotes}
                  onChange={(event) => setOrderNotes(event.target.value)}
                  placeholder="اگر سفارشتان نیاز به توضیح دارد اینجا بنویسید"
                  rows={3}
                />
              </div>
            </div>

            <aside id="cart-summary" className={styles.summary} aria-label="صورت‌حساب سفارش">
              <h3>صورت‌حساب</h3>
              <div className={styles.summaryLine}>
                <span>جمع سفارش‌ها ({formatAmount(itemCount)} عدد)</span>
                <strong>{formatAmount(subtotal)} تومان</strong>
              </div>
              <div className={styles.summaryLine}>
                <span>جمع تخفیف‌ها</span>
                <strong className={discountTotal > 0 ? styles.discountValue : undefined}>
                  {discountTotal > 0 ? `−${formatAmount(discountTotal)}` : formatAmount(0)} تومان
                </strong>
              </div>
              <div className={styles.summaryDivider} />
              <div className={styles.summaryLine}>
                <span>ظرف و بسته‌بندی</span>
                <strong className={styles.pendingValue}>تعیین نشده</strong>
              </div>
              <div className={styles.summaryLine}>
                <span>ارسال</span>
                <strong className={styles.pendingValue}>تعیین نشده</strong>
              </div>
              <div className={styles.summaryLine}>
                <span>مالیات</span>
                <strong className={styles.pendingValue}>تعیین نشده</strong>
              </div>
              <div className={styles.summaryDivider} />
              <div className={styles.totalLine}>
                <span>مبلغ قابل پرداخت</span>
                <strong>{formatAmount(subtotal)} <small>تومان</small></strong>
              </div>
              <span className={styles.provisionalTag}>موقت، بدون هزینه‌های تعیین‌نشده</span>
              <p className={styles.summaryNote}>
                مبلغ نهایی پس از تعیین تعرفهٔ ظرف و بسته‌بندی، ارسال و مالیات محاسبه می‌شود.
              </p>
              <a className={styles.secondaryLink} href="#menu">
                افزودن محصول دیگر
              </a>
            </aside>
          </div>
        </div>
      )}
    </section>
  );
}
