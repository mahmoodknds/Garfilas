import { CircleUserRound, MessageCircle, ShoppingBag } from "lucide-react";

const items = [
  { href: "#profile", label: "پروفایل", icon: CircleUserRound },
  { href: "#cart", label: "سبد خرید", icon: ShoppingBag },
  { href: "#contact", label: "تماس", icon: MessageCircle },
] as const;

export default function BottomNavigation() {
  return (
    <nav className="bottom-nav" aria-label="ناوبری اصلی">
      <svg
        className="bottom-nav-frame"
        viewBox="0 0 100 44"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M8 7.5H34C37.6 7.5 39.4 10.1 40.1 13.1C41.2 17.9 44.5 20 50 20C55.5 20 58.8 17.9 59.9 13.1C60.6 10.1 62.4 7.5 66 7.5H92C96.4 7.5 99.5 10.5 99.5 14.5V36.5C99.5 40.5 96.4 43.5 92 43.5H8C3.6 43.5 0.5 40.5 0.5 36.5V14.5C0.5 10.5 3.6 7.5 8 7.5Z"
          fill="none"
          stroke="rgba(255,111,8,.56)"
          strokeWidth="0.72"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

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
