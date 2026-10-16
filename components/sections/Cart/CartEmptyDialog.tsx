"use client";

import { useEffect, useRef } from "react";
import styles from "./CartSection.module.css";

type CartEmptyDialogProps = {
  onClose: () => void;
};

export default function CartEmptyDialog({ onClose }: CartEmptyDialogProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previousFocus = document.activeElement instanceof HTMLElement
      ? document.activeElement
      : null;

    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      previousFocus?.focus();
    };
  }, [onClose]);

  return (
    <div
      className={styles.emptyOverlay}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className={styles.emptyDialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby="empty-cart-title"
        aria-describedby="empty-cart-message"
        dir="rtl"
      >
        <span className={styles.modalEyebrow}>GARFILAS</span>
        <h2 id="empty-cart-title" className={styles.modalTitle}>
          سبد خرید هنوز خالی است
        </h2>
        <p id="empty-cart-message" className={styles.modalText}>
          برای شروع، از منو محصول دلخواهت را انتخاب کن.
        </p>
        <div className={styles.dialogActions}>
          <button
            ref={closeButtonRef}
            type="button"
            className={styles.dialogButton}
            onClick={onClose}
          >
            بستن
          </button>
          <a
            className={styles.dialogLink}
            href="#menu"
            onClick={onClose}
          >
            رفتن به منو
          </a>
        </div>
      </section>
    </div>
  );
}
