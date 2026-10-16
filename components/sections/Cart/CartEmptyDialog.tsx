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

    window.addEventListener("pointerdown", dismissOnPointerDown);
    window.addEventListener("keydown", dismissOnEscape);

    return () => {
      window.removeEventListener("pointerdown", dismissOnPointerDown);
      window.removeEventListener("keydown", dismissOnEscape);
    };
  }, [onClose]);

  return (
    <div className={styles.emptyToast} role="status" aria-live="polite" dir="rtl">
      سبد خرید هنوز خالی است
    </div>
  );
}
