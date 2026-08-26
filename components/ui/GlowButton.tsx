import type { ReactNode } from "react";

type Props = { children: ReactNode; id?: string };

export default function GlowButton({ children, id }: Props) {
  const isBilingualMenu = children === "منو Menu";

  return (
    <span
      id={id}
      className="garfilas-glow-button group relative isolate"
      style={{ animation: "cta-neon-breathe 2s ease-in-out infinite" }}
      role="presentation"
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400&display=swap'); .garfilas-menu-fa{font-family:'Noto Nastaliq Urdu',serif!important;font-size:clamp(1rem,4vw,1.26rem)!important;font-weight:400!important;line-height:1.25!important;letter-spacing:0!important;color:#fff0d0!important;text-shadow:0 0 2px rgba(255,240,210,.9),0 0 7px rgba(255,143,25,.5)!important;display:inline-block;transform:translateY(-1px)} .garfilas-menu-en{font-family:Georgia,'Times New Roman',serif!important;font-size:clamp(1.08rem,4.2vw,1.34rem)!important;font-weight:700!important;font-style:italic!important;line-height:1!important;letter-spacing:.025em!important}`}</style>

      <span aria-hidden="true" className="pointer-events-none absolute inset-[2px] rounded-full border border-[rgba(255,232,190,.22)]" />
      <span aria-hidden="true" className="pointer-events-none absolute inset-x-[12%] top-[1px] h-px bg-linear-to-r from-transparent via-[rgba(255,247,224,.95)] to-transparent opacity-90 blur-[.2px]" />
      <span aria-hidden="true" className="pointer-events-none absolute inset-y-[-30%] left-[-42%] z-[1] w-[30%] rotate-[18deg] bg-linear-to-r from-transparent via-[rgba(255,247,220,.9)] to-transparent opacity-0 animate-[cta-light-sweep_7.2s_cubic-bezier(.2,.7,.2,1)_infinite] group-hover:animate-[cta-light-sweep_1.05s_cubic-bezier(.2,.7,.2,1)_1] group-hover:opacity-100" />
      <span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,196,101,.12),transparent_48%),radial-gradient(circle_at_18%_100%,rgba(255,93,0,.12),transparent_34%)]" />

      <span aria-hidden="true" className="garfilas-glow-button__star garfilas-glow-button__star--left animate-[cta-star-twinkle_4.8s_ease-in-out_infinite]">✦</span>

      {isBilingualMenu ? (
        <span className="relative z-10 flex flex-row-reverse items-center gap-[.32rem] whitespace-nowrap transition-transform duration-300 group-hover:scale-[1.018]">
          <span dir="rtl" lang="fa" className="garfilas-menu-fa garfilas-glow-button__label">منو</span>
          <span dir="ltr" className="garfilas-menu-en">Menu</span>
        </span>
      ) : (
        <span className="garfilas-glow-button__label relative z-10 whitespace-nowrap">{children}</span>
      )}

      <span aria-hidden="true" className="garfilas-glow-button__star garfilas-glow-button__star--right animate-[cta-star-twinkle_5.3s_ease-in-out_.8s_infinite]">✦</span>
    </span>
  );
}
