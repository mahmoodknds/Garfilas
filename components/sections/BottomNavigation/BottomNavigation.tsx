import { Phone, UserRound, ShoppingBag } from "lucide-react";

const items = [
  { href: "#profile", label: "پروفایل", icon: UserRound },
  { href: "#cart", label: "سبد خرید", icon: ShoppingBag },
  { href: "#contact", label: "تماس", icon: Phone },
] as const;

export default function BottomNavigation() {
  return (
    <nav className="bottom-nav" aria-label="ناوبری اصلی">
      <style>{`
        .bottom-nav { position:fixed!important;left:0!important;right:0!important;bottom:0!important;width:100vw!important;height:20vw!important;padding:0!important;margin:0!important;transform:none!important;display:block!important;background:transparent!important;border:0!important;border-radius:0!important;box-shadow:none!important;backdrop-filter:none!important;overflow:visible!important;isolation:isolate;z-index:50!important; }
        .bottom-nav-frame { position:absolute;left:0;top:0;width:100%;height:100%;display:block;z-index:0;pointer-events:none;object-fit:fill; }
        .bottom-nav-link { position:absolute!important;z-index:2;display:grid!important;place-items:center!important;margin:0!important;padding:0!important;transform:translate(-50%,-50%)!important;flex:none!important;color:#ff8a18;border:2px solid rgba(255,106,0,.9);border-radius:50%;background:rgba(7,5,4,.72);box-shadow:0 0 7px rgba(255,91,0,.72),0 0 18px rgba(255,91,0,.22),inset 0 0 8px rgba(255,91,0,.12); }
        .bottom-nav-link-0 { left:16.4%!important;top:59.23125%!important;width:clamp(2.8rem,11.5vw,3.6rem)!important;height:clamp(2.8rem,11.5vw,3.6rem)!important; }
        .bottom-nav-link-1 { left:50%!important;top:50.671875%!important;width:clamp(4.1975rem,15.64vw,5.3475rem)!important;height:clamp(4.1975rem,15.64vw,5.3475rem)!important;border-width:1.5px;z-index:4;background:rgba(7,5,4,.9);box-shadow:0 0 8px rgba(255,91,0,.9),0 0 26px rgba(255,91,0,.28),inset 0 0 12px rgba(255,91,0,.14); }
        .bottom-nav-link-1::after { content:"";position:absolute;bottom:-.64rem;width:.41rem;height:.41rem;border-radius:50%;background:#ff7b0b;box-shadow:0 0 8px rgba(255,91,0,.9); }
        .bottom-nav-link-2 { left:83.6%!important;top:59.23125%!important;width:clamp(2.8rem,11.5vw,3.6rem)!important;height:clamp(2.8rem,11.5vw,3.6rem)!important; }
        .bottom-nav-link svg { filter:drop-shadow(0 0 4px rgba(255,91,0,.55)); }
        .bottom-nav-link-0 svg,.bottom-nav-link-2 svg { width:1.8rem;height:1.8rem; }
        .bottom-nav-link-1 svg { width:2.24rem;height:2.24rem; }
        .bottom-nav-link:hover,.bottom-nav-link:focus-visible { transform:translate(-50%,-52%)!important;color:#ffb04a;box-shadow:0 0 10px rgba(255,91,0,.9),0 0 24px rgba(255,91,0,.3),inset 0 0 10px rgba(255,91,0,.16); }
      `}</style>
      <img className="bottom-nav-frame" src="/assets/ui/bottom-nav-frame.svg" alt="" aria-hidden="true" />
      {items.map(({ href, label, icon: Icon }, index) => (
        <a key={href} href={href} className={`bottom-nav-link bottom-nav-link-${index}`} aria-label={label} title={label}>
          <Icon aria-hidden="true" size={index === 1 ? 30 : 22} strokeWidth={1.7} />
          <span className="sr-only">{label}</span>
        </a>
      ))}
    </nav>
  );
}
