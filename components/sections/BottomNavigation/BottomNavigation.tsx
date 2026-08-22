import { CircleUserRound, MessageCircle, ShoppingBag } from "lucide-react";

const items = [
  { href: "#profile", label: "پروفایل", icon: CircleUserRound },
  { href: "#cart", label: "سبد خرید", icon: ShoppingBag },
  { href: "#contact", label: "تماس", icon: MessageCircle },
] as const;

export default function BottomNavigation() {
  return (
    <nav className="bottom-nav" aria-label="ناوبری اصلی">
      <img
        className="bottom-nav-frame"
        src="/assets/ui/bottom-nav-frame.svg"
        alt=""
        aria-hidden="true"
      />

      {items.map(({ href, label, icon: Icon }, index) => (
        <a
          key={href}
          href={href}
          className={`bottom-nav-link bottom-nav-link-${index}`}
          aria-label={label}
          title={label}
        >
          <Icon aria-hidden="true" size={index === 1 ? 32 : 24} strokeWidth={1.7} />
          <span className="sr-only">{label}</span>
        </a>
      ))}
    </nav>
  );
}
