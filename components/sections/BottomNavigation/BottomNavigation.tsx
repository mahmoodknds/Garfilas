import { CircleUserRound, MessageCircle, ShoppingBag } from "lucide-react";

const items = [
  { href: "#profile", label: "پروفایل", icon: CircleUserRound },
  { href: "#cart", label: "سبد خرید", icon: ShoppingBag },
  { href: "#contact", label: "تماس", icon: MessageCircle },
] as const;

export default function BottomNavigation() {
  return (
    <nav
      className="bottom-nav"
      aria-label="ناوبری اصلی"
      style={{
        width: "min(22rem, calc(100vw - 1.25rem))",
        height: "4.2rem",
        padding: ".35rem 1.55rem",
        borderRadius: "1rem",
      }}
    >
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
                  width: "4.25rem",
                  height: "4.25rem",
                  flexBasis: "4.25rem",
                  marginTop: "-1.25rem",
                }
              : {
                  width: "3.15rem",
                  height: "3.15rem",
                  flexBasis: "3.15rem",
                }
          }
        >
          <Icon aria-hidden="true" size={index === 1 ? 30 : 23} strokeWidth={1.7} />
          <span className="sr-only">{label}</span>
        </a>
      ))}
    </nav>
  );
}
