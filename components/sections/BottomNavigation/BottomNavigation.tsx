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
          width: min(100vw - 0.1rem, 64rem) !important;
          min-height: clamp(5.8rem, 20.4vw, 13rem) !important;
          bottom: max(0rem, env(safe-area-inset-bottom)) !important;
          padding: clamp(.8rem, 2.5vw, 1.35rem) clamp(1rem, 4vw, 2.4rem) clamp(.65rem, 2vw, 1.15rem) !important;
          border: 1px solid rgba(255, 111, 8, .62) !important;
          border-radius: clamp(1.4rem, 4.8vw, 3.25rem) clamp(1.4rem, 4.8vw, 3.25rem) clamp(1.65rem, 5vw, 3.5rem) clamp(1.65rem, 5vw, 3.5rem) !important;
          background:
            linear-gradient(180deg, rgba(10, 7, 5, .58), rgba(5, 4, 3, .94)),
            rgba(7, 5, 4, .9) !important;
          box-shadow:
            0 -1px 0 rgba(255, 168, 71, .16),
            0 0 14px rgba(255, 74, 0, .10),
            inset 0 1px 0 rgba(255, 139, 28, .08),
            inset 0 0 24px rgba(255, 74, 0, .025) !important;
          backdrop-filter: blur(18px);
          overflow: visible !important;
          isolation: isolate;
        }

        /* The reference has a raised, organic shoulder around the center control,
           rather than a conventional capsule/pill top edge. */
        .bottom-nav::before {
          content: "";
          position: absolute;
          z-index: -1;
          left: 50%;
          top: -1px;
          width: clamp(6.6rem, 25vw, 15.5rem);
          height: clamp(1.35rem, 4.5vw, 3rem);
          transform: translateX(-50%);
          border: 1px solid rgba(255, 111, 8, .62);
          border-bottom: 0;
          border-radius: 999px 999px 0 0;
          background: linear-gradient(180deg, rgba(10, 7, 5, .9), rgba(7, 5, 4, .98));
          box-shadow:
            0 -1px 0 rgba(255, 168, 71, .12),
            0 0 12px rgba(255, 74, 0, .08),
            inset 0 1px 0 rgba(255, 139, 28, .06);
          pointer-events: none;
        }

        /* Mask the original straight top border underneath the raised center. */
        .bottom-nav::after {
          content: "";
          position: absolute;
          z-index: 0;
          left: 50%;
          top: 0;
          width: clamp(5.9rem, 22vw, 13.8rem);
          height: clamp(1.2rem, 4vw, 2.7rem);
          transform: translateX(-50%);
          border-radius: 999px 999px 0 0;
          background: rgba(8, 6, 4, .96);
          pointer-events: none;
        }

        .bottom-nav-link {
          z-index: 2;
          flex: 0 0 auto;
        }

        .bottom-nav-link:nth-child(2) {
          z-index: 4;
          position: relative;
          margin-top: clamp(-1.5rem, -4vw, -0.8rem) !important;
        }

        @media (max-width: 699px) {
          .bottom-nav {
            width: calc(100vw - .15rem) !important;
            border-radius: 1.45rem 1.45rem 1.8rem 1.8rem !important;
          }

          .bottom-nav::before {
            width: 25vw;
            min-width: 6.2rem;
            max-width: 8.5rem;
            height: 1.45rem;
          }

          .bottom-nav::after {
            width: 22vw;
            min-width: 5.5rem;
            max-width: 7.7rem;
            height: 1.3rem;
          }
        }
      `}</style>

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
