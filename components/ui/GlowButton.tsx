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
        .garfilas-glow-button__star{position:absolute!important;top:50%!important;width:1.8rem!important;height:1.8rem!important;display:grid!important;place-items:center!important;margin-top:-.9rem!important;font-size:.9rem!important;color:#fff4cf!important;text-shadow:0 0 3px #fff8df,0 0 7px rgba(255,210,120,.98),0 0 15px rgba(255,125,15,.9)!important;animation:garfilas-star-shimmer 3.9s ease-in-out infinite!important;}
        .garfilas-glow-button__star--left{left:1.05rem!important;}
        .garfilas-glow-button__star--right{right:1.05rem!important;animation-delay:1.55s!important;}
        .garfilas-cta-sweep{position:absolute;inset-y:-30%;left:-42%;z-index:1;width:30%;transform:rotate(18deg);background:linear-gradient(90deg,transparent,rgba(255,247,220,.9),transparent);opacity:0;pointer-events:none;animation:cta-light-sweep 5.8s cubic-bezier(.2,.7,.2,1) infinite!important;}
        @keyframes garfilas-star-shimmer{0%,100%{opacity:.28;transform:scale(.72) rotate(0deg);filter:brightness(.8) blur(.15px);text-shadow:0 0 2px rgba(255,248,223,.55),0 0 5px rgba(255,170,45,.5),0 0 9px rgba(255,105,0,.35)}12%{opacity:.52;transform:scale(.86) rotate(4deg);filter:brightness(1) blur(.1px)}22%{opacity:1;transform:scale(1.08) rotate(12deg);filter:brightness(1.75) blur(0);text-shadow:0 0 4px #fff,0 0 10px rgba(255,231,170,1),0 0 22px rgba(255,139,22,1),0 0 32px rgba(255,73,0,.65)}32%{opacity:.68;transform:scale(.9) rotate(2deg);filter:brightness(1.2) blur(.08px)}45%{opacity:.36;transform:scale(.76) rotate(-6deg);filter:brightness(.9) blur(.12px)}58%{opacity:.92;transform:scale(1.02) rotate(8deg);filter:brightness(1.55) blur(0);text-shadow:0 0 3px #fff,0 0 9px rgba(255,226,160,1),0 0 19px rgba(255,130,18,.95)}70%{opacity:.48;transform:scale(.82) rotate(-3deg);filter:brightness(1) blur(.08px)}84%{opacity:.78;transform:scale(.94) rotate(3deg);filter:brightness(1.3) blur(.02px)}}
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
