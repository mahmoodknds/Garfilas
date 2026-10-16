"use client";

import Image from "next/image";
import { Phone, ShoppingCart, UserRound } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import CartEmptyDialog from "@/components/sections/Cart/CartEmptyDialog";
import { useCart } from "@/components/sections/Cart/CartProvider";

const sideItems = [
  { href: "#profile", label: "پروفایل", icon: UserRound, index: 0 },
  { href: "tel:09130312060", label: "تماس با گارفیلاز", icon: Phone, index: 2 },
] as const;

type CenterMode = "cart" | "menu" | "payment";

export default function BottomNavigation() {
  const { itemCount, hydrated } = useCart();
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [showEmptyCartDialog, setShowEmptyCartDialog] = useState(false);
  const closeEmptyCartDialog = useCallback(() => setShowEmptyCartDialog(false), []);

  useEffect(() => {
    const cartSection = document.getElementById("cart");
    if (!cartSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsCartVisible(entry.isIntersecting),
      {
        threshold: 0,
        rootMargin: "-20% 0px -15% 0px",
      },
    );

    observer.observe(cartSection);
    return () => observer.disconnect();
  }, []);

  const centerMode: CenterMode = !isCartVisible
    ? "cart"
    : itemCount === 0
      ? "menu"
      : "payment";

  const centerConfig = {
    cart: {
      href: "#cart",
      label: itemCount > 0
        ? `سبد خرید، ${itemCount.toLocaleString("en-US")} مورد`
        : "سبد خرید",
    },
    menu: {
      href: "#menu",
      label: "منو",
    },
    payment: {
      href: "#cart-summary",
      label: "پرداخت",
    },
  }[centerMode];

  return (
    <>
    <nav className="bottom-nav" aria-label="ناوبری اصلی">
      <style>{`
        .bottom-nav { position:fixed!important;left:50%!important;right:auto!important;bottom:0!important;width:min(100%,860px)!important;height:5.8rem!important;min-height:0!important;padding:0!important;margin:0!important;transform:translateX(-50%)!important;display:block!important;visibility:visible!important;opacity:1!important;background:transparent!important;border:0!important;border-radius:0!important;box-shadow:none!important;backdrop-filter:none!important;overflow:visible!important;isolation:isolate;z-index:9999!important;pointer-events:none!important; }
        .bottom-nav::before { content:"";position:fixed;left:calc(50% - 50vw);right:auto;bottom:0;width:100vw;height:7.4rem;transform:none;z-index:0;pointer-events:none;background:linear-gradient(to bottom,rgba(5,4,3,.04) 0%,rgba(5,4,3,.10) 48%,rgba(5,4,3,.16) 100%),var(--garfilas-page-background);background-attachment:fixed;backdrop-filter:blur(14px) saturate(1.22);-webkit-backdrop-filter:blur(14px) saturate(1.22);mask-image:linear-gradient(to bottom,transparent 0%,rgba(0,0,0,.28) 12%,rgba(0,0,0,.72) 23%,#000 34%);-webkit-mask-image:linear-gradient(to bottom,transparent 0%,rgba(0,0,0,.28) 12%,rgba(0,0,0,.72) 23%,#000 34%); }
        .bottom-nav-frame { position:absolute;left:0;top:0;width:100%;height:100%;display:block;z-index:1;pointer-events:none;object-fit:fill;visibility:visible!important;opacity:1!important; }
        .bottom-nav-link { position:absolute!important;z-index:2;display:grid!important;place-items:center!important;margin:0!important;padding:0!important;transform:translate(-50%,-50%)!important;flex:none!important;visibility:visible!important;opacity:1!important;pointer-events:auto!important;color:#ff8a18;border:2px solid rgba(255,106,0,.9);border-radius:50%;background:rgba(7,5,4,.72);box-shadow:0 0 7px rgba(255,91,0,.72),0 0 18px rgba(255,91,0,.22),inset 0 0 8px rgba(255,91,0,.12); }
        .bottom-nav-link-0 { left:20%!important;top:65.8125%!important;width:3.35rem!important;height:3.35rem!important; }
        .bottom-nav-link-1 { left:50%!important;top:50.671875%!important;width:4.5rem!important;height:4.5rem!important;border-width:1.5px;z-index:4;background:rgba(7,5,4,.9);box-shadow:0 0 8px rgba(255,91,0,.9),0 0 26px rgba(255,91,0,.28),inset 0 0 12px rgba(255,91,0,.14); }
        .bottom-nav-center { position:relative;display:flex;align-items:center;justify-content:center;max-width:100%; }
        .bottom-nav-cart-icon { position:relative;display:inline-flex;align-items:center;justify-content:center;width:2.2rem;height:2.2rem; }
        .bottom-nav-cart-icon svg { display:block;width:1.875rem;height:1.875rem; }
        .bottom-nav-action-label { display:block;max-width:100%;color:transparent;background:linear-gradient(180deg,#fff7df 0%,#ffdc96 45%,#ffae3d 100%);background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;font-family:IRANSansX,Vazirmatn,system-ui,sans-serif;font-size:clamp(1.22rem,4.55vw,1.5rem);font-weight:700;line-height:1;letter-spacing:.025em;white-space:nowrap;-webkit-text-stroke:.12px rgba(255,241,204,.4);filter:drop-shadow(0 0 4px rgba(255,191,77,.72)); }
        .bottom-nav-action-label--payment { font-size:clamp(.92rem,3.7vw,1.12rem);letter-spacing:0; }
        .bottom-nav-badge { position:absolute;top:-.48rem;left:50%;z-index:5;display:block;min-width:0;height:auto;padding:0;border:0;border-radius:0;color:#ffd58b;background:transparent;box-shadow:none;transform:translateX(-50%);font:700 .98rem/.95 var(--font-cormorant-garamond),Georgia,serif;font-variant-numeric:lining-nums tabular-nums;letter-spacing:.015em;white-space:nowrap;pointer-events:none;text-shadow:0 0 2px rgba(255,248,223,.82),0 0 5px rgba(255,169,74,.85),0 0 11px rgba(255,122,0,.55); }
        .bottom-nav-link-2 { left:80%!important;top:65.8125%!important;width:3.35rem!important;height:3.35rem!important; }
        .bottom-nav-link svg { filter:drop-shadow(0 0 4px rgba(255,91,0,.55)); }
        .bottom-nav-link-0 svg,.bottom-nav-link-2 svg { width:1.8rem;height:1.8rem; }
        .bottom-nav-link:hover,.bottom-nav-link:focus-visible { transform:translate(-50%,-52%)!important;color:#ffb04a;box-shadow:0 0 10px rgba(255,91,0,.9),0 0 24px rgba(255,91,0,.3),inset 0 0 10px rgba(255,91,0,.16); }
        @media (max-width:380px) { .bottom-nav-link-1 { width:4.25rem!important;height:4.25rem!important; } .bottom-nav-action-label { font-size:1.14rem; } .bottom-nav-action-label--payment { font-size:.92rem; } .bottom-nav-badge { top:-.43rem;font-size:.9rem; } }
        @media (prefers-reduced-motion:reduce) { .bottom-nav-link { scroll-behavior:auto; } }
      `}</style>

      <Image
        className="bottom-nav-frame"
        src="/assets/ui/bottom-nav-frame.svg"
        alt=""
        aria-hidden="true"
        width={860}
        height={93}
        loading="eager"
      />

      {sideItems.map(({ href, label, icon: Icon, index }) => (
        <a key={href} href={href} className={`bottom-nav-link bottom-nav-link-${index}`} aria-label={label} title={label}>
          <Icon aria-hidden="true" size={22} strokeWidth={1.7} />
          <span className="sr-only">{label}</span>
        </a>
      ))}

      <a
        href={centerConfig.href}
        onClick={(event) => {
          if (!hydrated) {
            event.preventDefault();
            return;
          }
          if (centerMode === "cart" && itemCount === 0) {
            event.preventDefault();
            setShowEmptyCartDialog(true);
          }
        }}
        className="bottom-nav-link bottom-nav-link-1"
        aria-label={centerConfig.label}
        title={centerConfig.label}
        aria-haspopup={centerMode === "cart" && itemCount === 0 ? "dialog" : undefined}
        aria-expanded={centerMode === "cart" && itemCount === 0 ? showEmptyCartDialog : undefined}
        aria-current={centerMode !== "cart" ? "location" : undefined}
      >
        <span className="bottom-nav-center">
          {centerMode === "cart" ? (
            <span className="bottom-nav-cart-icon">
              <ShoppingCart aria-hidden="true" size={30} strokeWidth={1.7} />
              {itemCount > 0 && (
                <span className="bottom-nav-badge" aria-hidden="true">
                  {itemCount > 99 ? "99+" : itemCount.toLocaleString("en-US")}
                </span>
              )}
            </span>
          ) : (
            <span className={`bottom-nav-action-label${centerMode === "payment" ? " bottom-nav-action-label--payment" : ""}`}>
              {centerConfig.label}
            </span>
          )}
        </span>
        <span className="sr-only">{centerConfig.label}</span>
      </a>
    </nav>
    {showEmptyCartDialog && (
      <CartEmptyDialog onClose={closeEmptyCartDialog} />
    )}
    </>
  );
}
