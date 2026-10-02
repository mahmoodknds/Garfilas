import { Phone, UserRound, ShoppingCart } from "lucide-react";

const items = [
  { href: "#profile", label: "پروفایل", icon: UserRound },
  { href: "#cart", label: "سبد خرید", icon: ShoppingCart },
  { href: "#contact", label: "تماس", icon: Phone },
] as const;

export default function BottomNavigation() {
  return (
    <nav className="bottom-nav" aria-label="ناوبری اصلی">
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
