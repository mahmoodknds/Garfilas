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
          className="bottom-nav-link"
          aria-label={label}
          title={label}
          style={
            index === 1
              ? {
                  width: "4.35rem",
                  height: "4.35rem",
                  marginTop: "-1.05rem",
                  borderWidth: "1.5px",
                }
              : {
                  width: "3.15rem",
                  height: "3.15rem",
                  borderWidth: "1px",
                }
          }
        >
          <Icon
            aria-hidden="true"
            size={index === 1 ? 32 : 24}
            strokeWidth={1.7}
          />
          <span className="sr-only">{label}</span>
        </a>
      ))}
    </nav>
  );
}
