import { CircleUserRound, MessageCircle, ShoppingBag } from "lucide-react";

const items = [
  { href: "#profile", label: "پروفایل", icon: CircleUserRound },
  { href: "#cart", label: "سبد خرید", icon: ShoppingBag },
  { href: "#contact", label: "تماس", icon: MessageCircle },
] as const;

export default function BottomNavigation() {
  return (
    <nav className="bottom-nav" aria-label="ناوبری اصلی">
      {items.map(({ href, label, icon: Icon }, index) => (
        <a
          key={href}
          href={href}
          className={`bottom-nav-link${index === 1 ? " bottom-nav-link-active" : ""}`}
          aria-label={label}
          title={label}
        >
          <Icon aria-hidden="true" />
          <span className="sr-only">{label}</span>
        </a>
      ))}
    </nav>
  );
}
