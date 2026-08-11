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
          d="M8 6.5H35.8C38.6 6.5 40.2 8.4 41.2 11.8C42.5 16.2 45.3 18.8 50 18.8C54.7 18.8 57.5 16.2 58.8 11.8C59.8 8.4 61.4 6.5 64.2 6.5H92C96.5 6.5 99.5 9.5 99.5 14V36.5C99.5 41 96.5 43.5 92 43.5H8C3.5 43.5 0.5 41 0.5 36.5V14C0.5 9.5 3.5 6.5 8 6.5Z"
          fill="rgba(5,4,3,.78)"
          stroke="rgba(255,111,8,.68)"
          strokeWidth="0.72"
          vectorEffect="non-scaling-stroke"
          strokeLinejoin="round"
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
