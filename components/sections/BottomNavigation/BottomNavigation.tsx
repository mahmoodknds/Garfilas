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
          d="M8 7.5H40C42.8 7.5 44.4 9.3 44.8 11.8C45.2 14.4 47.2 16 50 16C52.8 16 54.8 14.4 55.2 11.8C55.6 9.3 57.2 7.5 60 7.5H92C96.4 7.5 99.5 10.5 99.5 14.5V36.5C99.5 40.5 96.4 43.5 92 43.5H8C3.6 43.5 0.5 40.5 0.5 36.5V14.5C0.5 10.5 3.6 7.5 8 7.5Z"
          fill="rgba(7,5,4,.90)"
          stroke="rgba(255,111,8,.48)"
          strokeWidth="0.7"
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
