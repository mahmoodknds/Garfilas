"use client";

import { useEffect } from "react";
import styles from "./CartSection.module.css";

type CartEmptyDialogProps = {
  onClose: () => void;
};

export default function CartEmptyDialog({ onClose }: CartEmptyDialogProps) {
  useEffect(() => {
    const dismissOnPointerDown = () => onClose();
    const dismissOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("click", dismissOnPointerDown);
    window.addEventListener("keydown", dismissOnEscape);

    return () => {
      document.removeEventListener("click", dismissOnPointerDown);
      window.removeEventListener("keydown", dismissOnEscape);
    };
  }, [onClose]);

  return (
    <div id="empty-cart-toast" className={styles.emptyToast} role="status" aria-live="polite" dir="rtl">
      سبد خرید هنوز خالی است
    </div>
  );
}
