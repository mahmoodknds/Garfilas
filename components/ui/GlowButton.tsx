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
      className="group relative isolate inline-flex h-[2.72rem] w-[min(48vw,15.5rem)] min-w-[10.5rem] items-center justify-center overflow-hidden rounded-full border border-[rgba(255,145,42,.72)] bg-[linear-gradient(180deg,rgba(29,14,7,.58),rgba(7,5,4,.66))] px-5 text-center shadow-[0_0_2px_rgba(255,232,193,.78),0_0_7px_rgba(255,132,26,.34),0_0_16px_rgba(255,75,0,.13),inset_0_0_9px_rgba(255,143,36,.045)] transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-px hover:border-[rgba(255,198,104,.92)] hover:shadow-[0_0_3px_rgba(255,239,210,.88),0_0_10px_rgba(255,151,38,.48),0_0_21px_rgba(255,78,0,.18),inset_0_0_10px_rgba(255,155,34,.08)] active:scale-[.987] focus-within:border-[rgba(255,220,160,1)]"
      role="presentation"
    >
      <span aria-hidden="true" className="pointer-events-none absolute inset-[2px] rounded-full border border-[rgba(255,229,184,.13)]" />
      <span aria-hidden="true" className="pointer-events-none absolute inset-x-[20%] top-[1px] h-px bg-linear-to-r from-transparent via-[rgba(255,246,220,.72)] to-transparent opacity-75 blur-[.25px]" />
      <span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,196,98,.075),transparent_48%)]" />

      <span
        aria-hidden="true"
        className="absolute left-[10%] text-[.68rem] leading-none text-[rgba(255,198,108,.72)] drop-shadow-[0_0_2px_rgba(255,162,53,.55)] transition-transform duration-300 group-hover:scale-110"
      >
        ✦
      </span>

      {isBilingualMenu ? (
        <span className="relative z-10 flex items-baseline gap-[.42rem] whitespace-nowrap transition-transform duration-300 group-hover:scale-[1.015]">
          <span
            dir="rtl"
            className="font-[Vazirmatn,Segoe_UI,Tahoma,sans-serif] text-[clamp(1.08rem,4.1vw,1.34rem)] font-semibold leading-none tracking-[-.035em] text-[#ffe2ab] drop-shadow-[0_0_4px_rgba(255,177,66,.48)]"
          >
            منو
          </span>
          <span
            dir="ltr"
            className="font-[Poppins,Segoe_UI,sans-serif] text-[clamp(1.12rem,4.2vw,1.4rem)] font-semibold italic leading-none tracking-[.055em] text-[#ffd38b] drop-shadow-[0_0_5px_rgba(255,163,45,.56)]"
          >
            Menu
          </span>
        </span>
      ) : (
        <span className="relative z-10 whitespace-nowrap font-[Poppins,Segoe_UI,sans-serif] text-[clamp(1.08rem,4vw,1.32rem)] font-semibold leading-none tracking-[.08em] text-[#ffdaa0] drop-shadow-[0_0_4px_rgba(255,178,65,.55)]">
          {children}
        </span>
      )}

      <span
        aria-hidden="true"
        className="absolute right-[10%] text-[.68rem] leading-none text-[rgba(255,198,108,.72)] drop-shadow-[0_0_2px_rgba(255,162,53,.55)] transition-transform duration-300 group-hover:scale-110"
      >
        ✦
      </span>
    </span>
  );
}
