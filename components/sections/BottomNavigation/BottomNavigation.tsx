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
          padding: 0 !important;
          display: block !important;
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
          position: absolute !important;
          top: 50% !important;
          left: auto !important;
          z-index: 2;
          display: grid !important;
          place-items: center !important;
          flex: none !important;
          margin: 0 !important;
          transform: translate(-50%, -50%) !important;
        }

        /* Reference centers: 22%, 50%, 78% of the 1024px artwork. */
        .bottom-nav-link:nth-of-type(2) {
          left: 50% !important;
          top: 50% !important;
          z-index: 4;
          margin: 0 !important;
          transform: translate(-50%, -50%) !important;
        }

        .bottom-nav-link:nth-of-type(3) {
          left: 78.2% !important;
        }

        .bottom-nav-link:nth-of-type(4) {
          left: 78.2% !important;
        }

        @media (max-width: 699px) {
          .bottom-nav {
            width: 100vw !important;
            height: 21.485vw !important;
            min-height: 5.25rem !important;
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
            index === 0
              ? {
                  left: "21.8%",
                  width: "3.15rem",
                  height: "3.15rem",
                  borderWidth: "1px",
                }
              : index === 1
                ? {
                    left: "50%",
                    width: "4.35rem",
                    height: "4.35rem",
                    borderWidth: "1.5px",
                  }
                : {
                    left: "78.2%",
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
