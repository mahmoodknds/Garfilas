import { CircleUserRound, MessageCircle, ShoppingBag } from "lucide-react";

const items = [
  { href: "#profile", label: "پروفایل", icon: CircleUserRound },
  { href: "#cart", label: "سبد خرید", icon: ShoppingBag },
  { href: "#contact", label: "تماس", icon: MessageCircle },
] as const;

export default function BottomNavigation() {
  return (
    <nav className="bottom-nav" aria-label="ناوبری اصلی">
      <style>{`
        .bottom-nav {
          position: fixed !important;
          left: 50% !important;
          bottom: max(0px, env(safe-area-inset-bottom)) !important;
          transform: translateX(-50%) !important;
          width: min(100vw, 64rem) !important;
          height: min(21.485vw, 13.75rem) !important;
          min-height: 6.25rem !important;
          padding: 1.55rem clamp(1.25rem, 8vw, 5rem) .8rem !important;
          display: flex !important;
          align-items: center !important;
          justify-content: space-between !important;
          background: transparent !important;
          border: 0 !important;
          border-radius: 0 !important;
          box-shadow: none !important;
          backdrop-filter: none !important;
          overflow: visible !important;
          isolation: isolate;
          z-index: 50 !important;
        }

        .bottom-nav-frame {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          display: block;
          z-index: 0;
          pointer-events: none;
          object-fit: fill;
        }

        .bottom-nav-link {
          position: relative;
          z-index: 2;
          flex: 0 0 auto;
          display: grid !important;
          place-items: center !important;
          margin: 0 !important;
        }

        .bottom-nav-link:nth-of-type(2) {
          z-index: 4;
          margin-top: -.25rem !important;
        }

        @media (max-width: 699px) {
          .bottom-nav {
            width: 100vw !important;
            height: 21.485vw !important;
            min-height: 5.25rem !important;
            padding: 1.25rem 8vw .65rem !important;
          }
        }

        @media (min-width: 700px) {
          .bottom-nav-link:nth-of-type(2) {
            margin-top: -.35rem !important;
          }
        }
      `}</style>

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
          className="bottom-nav-link"
          aria-label={label}
          title={label}
          style={
            index === 1
              ? {
                  width: "4.35rem",
                  height: "4.35rem",
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
