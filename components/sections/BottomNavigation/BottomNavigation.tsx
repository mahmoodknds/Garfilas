"use client";

import Image from "next/image";
import { CreditCard, Menu as MenuIcon, Phone, ShoppingCart, UserRound } from "lucide-react";
import { useEffect, useState } from "react";
import { useCart } from "@/components/sections/Cart/CartProvider";

const sideItems = [
  { href: "#profile", label: "پروفایل", icon: UserRound, index: 0 },
  { href: "tel:09130312060", label: "تماس با گارفیلاز", icon: Phone, index: 2 },
] as const;

type CenterMode = "cart" | "menu" | "payment";

export default function BottomNavigation() {
  const { itemCount } = useCart();
  const [isCartVisible, setIsCartVisible] = useState(false);

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
        ? `سبد خرید، ${itemCount.toLocaleString("fa-IR")} مورد`
        : "سبد خرید",
      icon: ShoppingCart,
    },
    menu: {
      href: "#menu",
      label: "منو",
      icon: MenuIcon,
    },
    payment: {
      href: "#cart-summary",
      label: "پرداخت",
      icon: CreditCard,
    },
  }[centerMode];
  const CenterIcon = centerConfig.icon;

  return (
    <nav className="bottom-nav" aria-label="ناوبری اصلی">
      <style>{`
        .bottom-nav { position:fixed!important;left:50%!important;right:auto!important;bottom:0!important;width:min(100%,860px)!important;height:5.8rem!important;min-height:0!important;padding:0!important;margin:0!important;transform:translateX(-50%)!important;display:block!important;visibility:visible!important;opacity:1!important;background:transparent!important;border:0!important;border-radius:0!important;box-shadow:none!important;backdrop-filter:none!important;overflow:visible!important;isolation:isolate;z-index:9999!important;pointer-events:none!important; }
        .bottom-nav::before { content:"";position:fixed;left:calc(50% - 50vw);right:auto;bottom:0;width:100vw;height:7.4rem;transform:none;z-index:0;pointer-events:none;background:linear-gradient(to bottom,rgba(5,4,3,.04) 0%,rgba(5,4,3,.10) 48%,rgba(5,4,3,.16) 100%),var(--garfilas-page-background);background-attachment:fixed;backdrop-filter:blur(14px) saturate(1.22);-webkit-backdrop-filter:blur(14px) saturate(1.22);mask-image:linear-gradient(to bottom,transparent 0%,rgba(0,0,0,.28) 12%,rgba(0,0,0,.72) 23%,#000 34%);-webkit-mask-image:linear-gradient(to bottom,transparent 0%,rgba(0,0,0,.28) 12%,rgba(0,0,0,.72) 23%,#000 34%); }
        .bottom-nav-frame { position:absolute;left:0;top:0;width:100%;height:100%;display:block;z-index:1;pointer-events:none;object-fit:fill;visibility:visible!important;opacity:1!important; }
        .bottom-nav-link { position:absolute!important;z-index:2;display:grid!important;place-items:center!important;margin:0!important;padding:0!important;transform:translate(-50%,-50%)!important;flex:none!important;visibility:visible!important;opacity:1!important;pointer-events:auto!important;color:#ff8a18;border:2px solid rgba(255,106,0,.9);border-radius:50%;background:rgba(7,5,4,.72);box-shadow:0 0 7px rgba(255,91,0,.72),0 0 18px rgba(255,91,0,.22),inset 0 0 8px rgba(255,91,0,.12); }
        .bottom-nav-link-0 { left:20%!important;top:65.8125%!important;width:3.35rem!important;height:3.35rem!important; }
        .bottom-nav-link-1 { left:50%!important;top:50.671875%!important;width:4.5rem!important;height:4.5rem!important;border-width:1.5px;z-index:4;background:rgba(7,5,4,.9);box-shadow:0 0 8px rgba(255,91,0,.9),0 0 26px rgba(255,91,0,.28),inset 0 0 12px rgba(255,91,0,.14); }
        .bottom-nav-center { position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:.08rem;max-width:100%; }
        .bottom-nav-center-label { color:#ffb347;font:600 .59rem/1.2 var(--font-vazirmatn),sans-serif;white-space:nowrap; }
        .bottom-nav-badge { position:absolute;top:-.42rem;right:-.48rem;z-index:5;display:grid;place-items:center;min-width:1.28rem;height:1.28rem;padding:0 .22rem;border:1px solid rgba(255,229,181,.9);border-radius:999px;color:#1a0c03;background:linear-gradient(145deg,#ffe2a0,#ff9b27);box-shadow:0 0 8px rgba(255,122,0,.65),0 0 15px rgba(255,122,0,.22);font:700 .58rem/1 var(--font-vazirmatn),sans-serif;font-variant-numeric:tabular-nums; }
        .bottom-nav-link-2 { left:80%!important;top:65.8125%!important;width:3.35rem!important;height:3.35rem!important; }
        .bottom-nav-link svg { filter:drop-shadow(0 0 4px rgba(255,91,0,.55)); }
        .bottom-nav-link-0 svg,.bottom-nav-link-2 svg { width:1.8rem;height:1.8rem; }
        .bottom-nav-link:hover,.bottom-nav-link:focus-visible { transform:translate(-50%,-52%)!important;color:#ffb04a;box-shadow:0 0 10px rgba(255,91,0,.9),0 0 24px rgba(255,91,0,.3),inset 0 0 10px rgba(255,91,0,.16); }
        @media (max-width:380px) { .bottom-nav-link-1 { width:4.25rem!important;height:4.25rem!important; } .bottom-nav-center-label { font-size:.55rem; } .bottom-nav-badge { top:-.38rem;right:-.42rem; } }
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
        className="bottom-nav-link bottom-nav-link-1"
        aria-label={centerConfig.label}
        title={centerConfig.label}
        aria-current={centerMode !== "cart" ? "location" : undefined}
      >
        <span className="bottom-nav-center">
          <CenterIcon aria-hidden="true" size={centerMode === "cart" ? 30 : 21} strokeWidth={1.7} />
          {centerMode !== "cart" && (
            <span className="bottom-nav-center-label">{centerConfig.label}</span>
          )}
        </span>
        {centerMode === "cart" && itemCount > 0 && (
          <span className="bottom-nav-badge" aria-hidden="true">
            {itemCount > 99 ? "۹۹+" : itemCount.toLocaleString("fa-IR")}
          </span>
        )}
        <span className="sr-only">{centerConfig.label}</span>
      </a>
    </nav>
  );
}
