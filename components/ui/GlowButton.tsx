import type { ReactNode } from "react";

type Props = { children: ReactNode; id?: string };

export default function GlowButton({ children, id }: Props) {
  const isBilingualMenu = children === "منو Menu";

  return (
    <span id={id} className="group relative isolate inline-flex h-[2.62rem] w-[min(43vw,13.6rem)] min-w-[9.65rem] items-center justify-center overflow-hidden rounded-full border border-[rgba(255,145,35,.9)] bg-[linear-gradient(180deg,rgba(38,18,8,.74),rgba(7,5,4,.9)_55%,rgba(22,10,4,.82))] px-4 text-center shadow-[0_0_2px_rgba(255,235,201,.95),0_0_8px_rgba(255,133,22,.55),0_0_18px_rgba(255,77,0,.24),0_0_32px_rgba(255,63,0,.10),inset_0_1px_0_rgba(255,231,184,.2),inset_0_0_12px_rgba(255,123,15,.09)] animate-[cta-neon-breathe_2s_ease-in-out_infinite] transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-px hover:border-[rgba(255,204,116,.98)] hover:shadow-[0_0_3px_rgba(255,245,222,1),0_0_12px_rgba(255,151,35,.78),0_0_25px_rgba(255,77,0,.34),0_0_42px_rgba(255,62,0,.15),inset_0_1px_0_rgba(255,239,208,.35),inset_0_0_16px_rgba(255,129,18,.13)] active:scale-[.985] focus-within:border-[rgba(255,226,171,1)]" role="presentation">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@700&display=swap');
      .garfilas-menu-fa{font-family:'Vazirmatn',sans-serif!important;font-size:clamp(1.34rem,5.15vw,1.62rem)!important;font-weight:700!important;line-height:1.1!important;letter-spacing:-.025em!important;color:#fff0d0!important;text-shadow:0 0 2px rgba(255,240,210,.95),0 0 8px rgba(255,143,25,.55)!important;display:inline-block;transform:translateY(-1px)}
      .garfilas-menu-en{font-family:Georgia,'Times New Roman',serif!important;font-size:clamp(1.28rem,4.9vw,1.52rem)!important;font-weight:700!important;font-style:italic!important;line-height:1!important;letter-spacing:.025em!important}
      .garfilas-star-core,.garfilas-star-ray,.garfilas-star-twinkle{animation-play-state:running!important;}
      .garfilas-star-twinkle{animation:cta-star-twinkle 2.8s ease-in-out infinite!important;}
      .garfilas-star-core{animation:cta-star-core 2.8s ease-in-out infinite!important;}
      .garfilas-star-ray{animation:cta-star-ray 2.8s ease-in-out infinite!important;}
      .garfilas-star-ray-delay{animation-delay:.35s!important;}
      .garfilas-star-right .garfilas-star-core{animation-duration:3.2s!important;animation-delay:.6s!important;}
      .garfilas-star-right .garfilas-star-ray{animation-duration:3.2s!important;animation-delay:.6s!important;}
      .garfilas-star-right .garfilas-star-ray-delay{animation-delay:.95s!important;}
      .garfilas-star-right .garfilas-star-twinkle{animation-duration:3.2s!important;animation-delay:.6s!important;}`}</style>

      <span aria-hidden="true" className="pointer-events-none absolute inset-[2px] rounded-full border border-[rgba(255,232,190,.22)]" />
      <span aria-hidden="true" className="pointer-events-none absolute inset-x-[12%] top-[1px] h-px bg-linear-to-r from-transparent via-[rgba(255,247,224,.95)] to-transparent opacity-90 blur-[.2px]" />
      <span aria-hidden="true" className="pointer-events-none absolute inset-y-[-30%] left-[-42%] z-[1] w-[30%] rotate-[18deg] bg-linear-to-r from-transparent via-[rgba(255,247,220,.9)] to-transparent opacity-0 animate-[cta-light-sweep_6.8s_cubic-bezier(.2,.7,.2,1)_infinite] group-hover:animate-[cta-light-sweep_1.05s_cubic-bezier(.2,.7,.2,1)_1] group-hover:opacity-100" />
      <span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,196,101,.12),transparent_48%),radial-gradient(circle_at_18%_100%,rgba(255,93,0,.12),transparent_34%)]" />

      <span aria-hidden="true" className="absolute left-[7%] grid h-6 w-6 place-items-center">
        <span className="garfilas-star-core absolute h-[3px] w-[3px] rounded-full bg-[#fff8df] shadow-[0_0_5px_rgba(255,245,205,1),0_0_12px_rgba(255,161,35,.98)]" />
        <span className="garfilas-star-ray absolute h-[1px] w-5 rounded-full bg-linear-to-r from-transparent via-[rgba(255,225,157,.92)] to-transparent rotate-45 shadow-[0_0_5px_rgba(255,145,20,.8)]" />
        <span className="garfilas-star-ray garfilas-star-ray-delay absolute h-[1px] w-5 rounded-full bg-linear-to-r from-transparent via-[rgba(255,225,157,.92)] to-transparent -rotate-45 shadow-[0_0_5px_rgba(255,145,20,.8)]" />
        <span className="garfilas-star-twinkle relative text-[.72rem] leading-none text-[#ffe3a4] drop-shadow-[0_0_4px_rgba(255,210,120,1)] transition-transform duration-300 group-hover:scale-125">✦</span>
      </span>

      {isBilingualMenu ? (
        <span className="relative z-10 flex flex-row-reverse items-baseline gap-[.42rem] whitespace-nowrap transition-transform duration-300 group-hover:scale-[1.018]">
          <span dir="rtl" className="garfilas-menu-fa">منو</span>
          <span dir="ltr" className="garfilas-menu-en text-transparent bg-clip-text bg-[linear-gradient(180deg,#fff7df_0%,#ffdc96_45%,#ffae3d_100%)] [-webkit-text-stroke:.12px_rgba(255,241,204,.4)] drop-shadow-[0_0_4px_rgba(255,191,77,.72)]">Menu</span>
        </span>
      ) : (
        <span className="relative z-10 whitespace-nowrap font-[Georgia,Times_New_Roman,serif] text-[clamp(1.18rem,4.3vw,1.45rem)] font-bold italic leading-none tracking-[.06em] text-[#ffe1a4] drop-shadow-[0_0_5px_rgba(255,178,61,.62)]">{children}</span>
      )}

      <span aria-hidden="true" className="garfilas-star-right absolute right-[7%] grid h-6 w-6 place-items-center">
        <span className="garfilas-star-core absolute h-[3px] w-[3px] rounded-full bg-[#fff8df] shadow-[0_0_5px_rgba(255,245,205,1),0_0_12px_rgba(255,161,35,.98)]" />
        <span className="garfilas-star-ray absolute h-[1px] w-5 rounded-full bg-linear-to-r from-transparent via-[rgba(255,225,157,.92)] to-transparent rotate-45 shadow-[0_0_5px_rgba(255,145,20,.8)]" />
        <span className="garfilas-star-ray garfilas-star-ray-delay absolute h-[1px] w-5 rounded-full bg-linear-to-r from-transparent via-[rgba(255,225,157,.92)] to-transparent -rotate-45 shadow-[0_0_5px_rgba(255,145,20,.8)]" />
        <span className="garfilas-star-twinkle relative text-[.72rem] leading-none text-[#ffe3a4] drop-shadow-[0_0_4px_rgba(255,210,120,1)] transition-transform duration-300 group-hover:scale-125">✦</span>
      </span>
    </span>
  );
}
