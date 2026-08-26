import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  id?: string;
};

export default function GlowButton({ children, id }: Props) {
  const isBilingualMenu = children === "منو Menu";

  return (
    <span
      id={id}
      className="group relative isolate inline-flex h-[2.58rem] w-[min(45vw,14.25rem)] min-w-[9.85rem] items-center justify-center overflow-hidden rounded-full border border-[rgba(255,139,28,.82)] bg-[linear-gradient(180deg,rgba(34,16,7,.72),rgba(8,5,4,.82)_58%,rgba(20,9,4,.76))] px-4 text-center shadow-[0_0_2px_rgba(255,229,183,.82),0_0_7px_rgba(255,119,15,.44),0_0_17px_rgba(255,76,0,.20),0_0_30px_rgba(255,67,0,.08),inset_0_1px_0_rgba(255,224,166,.14),inset_0_0_11px_rgba(255,117,12,.07)] animate-[cta-neon-breathe_3.8s_ease-in-out_infinite] transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-px hover:border-[rgba(255,190,82,.98)] hover:shadow-[0_0_3px_rgba(255,240,210,.96),0_0_11px_rgba(255,135,24,.62),0_0_23px_rgba(255,72,0,.28),0_0_38px_rgba(255,62,0,.12),inset_0_1px_0_rgba(255,233,190,.22),inset_0_0_14px_rgba(255,126,17,.10)] active:scale-[.985] focus-within:border-[rgba(255,221,154,1)]"
      role="presentation"
    >
      <span aria-hidden="true" className="pointer-events-none absolute inset-[2px] rounded-full border border-[rgba(255,222,158,.16)]" />
      <span aria-hidden="true" className="pointer-events-none absolute inset-x-[17%] top-[1px] h-px bg-linear-to-r from-transparent via-[rgba(255,239,203,.88)] to-transparent opacity-80 blur-[.25px]" />
      <span aria-hidden="true" className="pointer-events-none absolute inset-0 -translate-x-[125%] skew-x-[-18deg] bg-linear-to-r from-transparent via-[rgba(255,236,196,.42)] to-transparent opacity-0 group-hover:animate-[cta-light-sweep_1.05s_ease-out_1] group-hover:opacity-100" />
      <span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,177,63,.10),transparent_48%),radial-gradient(circle_at_78%_95%,rgba(255,72,0,.09),transparent_32%)]" />

      <span aria-hidden="true" className="absolute left-[8%] grid h-5 w-5 place-items-center">
        <span className="absolute h-[2px] w-[2px] rounded-full bg-[#fff1c8] shadow-[0_0_5px_rgba(255,225,151,1),0_0_10px_rgba(255,146,28,.9)] animate-[cta-star-core_2.8s_ease-in-out_infinite]" />
        <span className="relative text-[.76rem] leading-none text-[#ffd778] drop-shadow-[0_0_3px_rgba(255,208,105,.95)] animate-[cta-star-twinkle_2.25s_ease-in-out_infinite] transition-transform duration-300 group-hover:scale-125">✦</span>
      </span>

      {isBilingualMenu ? (
        <span className="relative z-10 flex flex-row-reverse items-baseline gap-[.48rem] whitespace-nowrap transition-transform duration-300 group-hover:scale-[1.018]">
          <span
            dir="rtl"
            className="font-[Vazirmatn,Segoe_UI,Tahoma,sans-serif] text-[clamp(1.13rem,4.3vw,1.4rem)] font-bold leading-none tracking-[-.055em] text-[#ffe6b4] drop-shadow-[0_0_3px_rgba(255,224,160,.55),0_0_7px_rgba(255,151,34,.38)]"
          >
            منو
          </span>
          <span
            dir="ltr"
            className="font-[Georgia,Times_New_Roman,serif] text-[clamp(1.22rem,4.55vw,1.52rem)] font-bold italic leading-none tracking-[.025em] text-transparent bg-clip-text bg-[linear-gradient(180deg,#fff5d7_0%,#ffd98c_46%,#ffad37_100%)] [-webkit-text-stroke:.12px_rgba(255,241,204,.35)] drop-shadow-[0_0_4px_rgba(255,187,69,.62)]"
          >
            Menu
          </span>
        </span>
      ) : (
        <span className="relative z-10 whitespace-nowrap font-[Georgia,Times_New_Roman,serif] text-[clamp(1.18rem,4.3vw,1.45rem)] font-bold italic leading-none tracking-[.06em] text-[#ffe1a4] drop-shadow-[0_0_5px_rgba(255,178,61,.62)]">
          {children}
        </span>
      )}

      <span aria-hidden="true" className="absolute right-[8%] grid h-5 w-5 place-items-center">
        <span className="absolute h-[2px] w-[2px] rounded-full bg-[#fff1c8] shadow-[0_0_5px_rgba(255,225,151,1),0_0_10px_rgba(255,146,28,.9)] animate-[cta-star-core_3.15s_ease-in-out_.45s_infinite]" />
        <span className="relative text-[.76rem] leading-none text-[#ffd778] drop-shadow-[0_0_3px_rgba(255,208,105,.95)] animate-[cta-star-twinkle_2.55s_ease-in-out_.3s_infinite] transition-transform duration-300 group-hover:scale-125">✦</span>
      </span>
    </span>
  );
}
