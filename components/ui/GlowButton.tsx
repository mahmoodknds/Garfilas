import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  id?: string;
};

export default function GlowButton({ children, id }: Props) {
  return (
    <span
      id={id}
      className="group relative isolate inline-flex h-[3.55rem] w-[min(66vw,27rem)] min-w-[14.25rem] items-center justify-center overflow-hidden rounded-full border border-[#ff941f] bg-[linear-gradient(180deg,rgba(43,15,2,.88),rgba(9,4,2,.96)_52%,rgba(28,9,2,.92))] px-8 text-center shadow-[0_0_4px_rgba(255,226,157,.92),0_0_11px_rgba(255,151,23,.98),0_0_25px_rgba(255,86,0,.72),0_0_48px_rgba(255,55,0,.34),inset_0_0_16px_rgba(255,144,0,.18)] transition-[transform,box-shadow,border-color,filter] duration-300 ease-out hover:-translate-y-px hover:scale-[1.018] hover:border-[#ffd072] hover:brightness-110 hover:shadow-[0_0_5px_rgba(255,235,182,1),0_0_15px_rgba(255,169,37,1),0_0_34px_rgba(255,79,0,.82),0_0_60px_rgba(255,47,0,.40),inset_0_0_20px_rgba(255,162,0,.24)] active:scale-[.985] focus-within:border-[#ffe0a2]"
      role="presentation"
    >
      <span aria-hidden="true" className="pointer-events-none absolute inset-[3px] rounded-full border border-[rgba(255,223,158,.32)]" />
      <span aria-hidden="true" className="pointer-events-none absolute -left-1/4 top-0 h-full w-1/2 -skew-x-12 bg-[linear-gradient(90deg,transparent,rgba(255,204,110,.20),transparent)] blur-md transition-transform duration-700 group-hover:translate-x-[300%]" />
      <span aria-hidden="true" className="pointer-events-none absolute inset-x-[13%] top-[2px] h-px bg-linear-to-r from-transparent via-[#fff5d8] to-transparent opacity-95 blur-[.35px]" />
      <span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_20%_20%,rgba(255,193,84,.20),transparent_27%),radial-gradient(circle_at_78%_78%,rgba(255,63,0,.23),transparent_35%),linear-gradient(180deg,rgba(255,138,0,.08),transparent_45%)]" />
      <span aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff7a00] opacity-35 blur-2xl transition-opacity duration-300 group-hover:opacity-55" />

      <span aria-hidden="true" className="absolute left-[9%] text-[1.18rem] leading-none text-[#ffc15f] drop-shadow-[0_0_4px_rgba(255,218,139,1)] transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">✦</span>

      <span
        dir="rtl"
        className="relative z-10 whitespace-nowrap font-[Vazirmatn,Segoe_UI,Tahoma,sans-serif] text-[clamp(1.15rem,4.25vw,1.62rem)] font-extrabold leading-none tracking-[-0.055em] text-transparent bg-clip-text bg-[linear-gradient(180deg,#fff6df_0%,#ffd88c_34%,#ffae35_72%,#ff8a0a_100%)] [-webkit-text-stroke:.18px_rgba(255,246,220,.42)] [text-shadow:0_1px_0_rgba(255,255,255,.35),0_0_6px_rgba(255,202,101,.98),0_0_16px_rgba(255,113,0,.92),0_0_27px_rgba(255,64,0,.52)] transition-transform duration-300 group-hover:scale-[1.035]"
      >
        {children}
      </span>

      <span aria-hidden="true" className="absolute right-[9%] text-[1.18rem] leading-none text-[#ffc15f] drop-shadow-[0_0_4px_rgba(255,218,139,1)] transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-12">✦</span>
      <span aria-hidden="true" className="pointer-events-none absolute bottom-[3px] left-1/2 h-[2px] w-20 -translate-x-1/2 rounded-full bg-[linear-gradient(90deg,transparent,#ffe0a0,#ff7b00,transparent)] opacity-95 blur-[1.2px]" />
    </span>
  );
}
