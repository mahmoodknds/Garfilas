"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type MenuScrollRevealProps = {
  children: ReactNode;
  className: string;
  visibleClassName: string;
  readyClassName: string;
  index: number;
};

export default function MenuScrollReveal({
  children,
  className,
  visibleClassName,
  readyClassName,
  index,
}: MenuScrollRevealProps) {
  const itemRef = useRef<HTMLLIElement>(null);
  const [ready, setReady] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = itemRef.current;
    if (!element) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReady(true);
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -5% 0px",
      },
    );

    setReady(true);
    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <li
      ref={itemRef}
      className={[
        className,
        ready ? readyClassName : "",
        visible ? visibleClassName : "",
      ].filter(Boolean).join(" ")}
      style={{ "--item-index": index } as React.CSSProperties}
    >
      {children}
    </li>
  );
}
