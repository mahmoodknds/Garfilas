import type { ReactNode } from "react";

type Props = { children: ReactNode; id?: string };

export default function GlowButton({ children, id }: Props) {
  const isBilingualMenu = children === "منو Menu";

  return (
    <span id={id} className="garfilas-glow-button group relative isolate" role="presentation">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@700&display=swap');
        .garfilas-glow-button{width:min(62vw,16.5rem)!important;height:3.05rem!important;padding-inline:2.55rem!important;animation:cta-neon-breathe 2s ease-in-out infinite!important;}
        .garfilas-menu-fa{font-family:'Vazirmatn',sans-serif!important;font-size:clamp(1.34rem,5.15vw,1.62rem)!important;font-weight:700!important;line-height:1.1!important;letter-spacing:-.025em!important;color:#fff0d0!important;text-shadow:0 0 2px rgba(255,240,210,.95),0 0 8px rgba(255,143,25,.55)!important;display:inline-block;transform:translateY(-1px)}
        .garfilas-menu-en{font-family:Georgia,'Times New Roman',serif!important;font-size:clamp(1.28rem,4.9vw,1.52rem)!important;font-weight:700!important;font-style:italic!important;line-height:1!important;letter-spacing:.025em!important}
        .garfilas-glow-button__star{animation:garfilas-star-pulse 3.6s ease-in-out infinite!important;}
        .garfilas-glow-button__star--left{left:1.25rem!important;}
        .garfilas-glow-button__star--right{right:1.25rem!important;animation-delay:.9s!important;}
        .garfilas-cta-sweep{position:absolute;inset-y:-30%;left:-42%;z-index:1;width:30%;transform:rotate(18deg);background:linear-gradient(90deg,transparent,rgba(255,247,220,.9),transparent);opacity:0;pointer-events:none;animation:cta-light-sweep 5.8s cubic-bezier(.2,.7,.2,1) infinite!important;}
        @keyframes garfilas-star-pulse{0%,100%{opacity:.28;transform:scale(.7) rotate(0deg);filter:brightness(.8)}18%{opacity:1;transform:scale(1.18) rotate(14deg);filter:brightness(1.55)}36%{opacity:.42;transform:scale(.8) rotate(-8deg);filter:brightness(.95)}55%{opacity:1;transform:scale(1.34) rotate(10deg);filter:brightness(1.8)}72%{opacity:.55;transform:scale(.9) rotate(-2deg);filter:brightness(1.05)}86%{opacity:.9;transform:scale(1.08) rotate(5deg);filter:brightness(1.4)}}
      `}</style>

      <span aria-hidden="true" className="pointer-events-none absolute inset-[2px] rounded-full border border-[rgba(255,232,190,.22)]" />
      <span aria-hidden="true" className="pointer-events-none absolute inset-x-[12%] top-[1px] h-px bg-linear-to-r from-transparent via-[rgba(255,247,224,.95)] to-transparent opacity-90 blur-[.2px]" />
      <span aria-hidden="true" className="garfilas-cta-sweep" />
      <span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,196,101,.12),transparent_48%),radial-gradient(circle_at_18%_100%,rgba(255,93,0,.12),transparent_34%)]" />

      <span aria-hidden="true" className="garfilas-glow-button__star garfilas-glow-button__star--left">✦</span>

      {isBilingualMenu ? (
        <span className="relative z-10 flex flex-row-reverse items-center gap-[.34rem] whitespace-nowrap transition-transform duration-300 group-hover:scale-[1.018]">
          <span dir="rtl" lang="fa" className="garfilas-menu-fa">منو</span>
          <span dir="ltr" className="garfilas-menu-en">Menu</span>
        </span>
      ) : (
        <span className="garfilas-glow-button__label relative z-10 whitespace-nowrap">{children}</span>
      )}

      <span aria-hidden="true" className="garfilas-glow-button__star garfilas-glow-button__star--right">✦</span>
    </span>
  );
}
