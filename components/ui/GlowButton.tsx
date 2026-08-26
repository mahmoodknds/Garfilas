import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  id?: string;
};

export default function GlowButton({ children, id }: Props) {
  return (
    <span
      id={id}
      className="group relative isolate inline-flex h-[3rem] w-[min(56vw,18.5rem)] min-w-[12rem] items-center justify-center overflow-hidden rounded-full border border-[rgba(255,143,34,.82)] bg-[rgba(8,5,3,.48)] px-7 text-center shadow-[0_0_3px_rgba(255,229,184,.82),0_0_9px_rgba(255,125,16,.48),0_0_20px_rgba(255,72,0,.18),inset_0_0_10px_rgba(255,126,20,.06)] transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-px hover:border-[rgba(255,190,84,.96)] hover:shadow-[0_0_4px_rgba(255,237,201,.95),0_0_12px_rgba(255,154,38,.62),0_0_24px_rgba(255,76,0,.22),inset_0_0_12px_rgba(255,145,20,.09)] active:scale-[.985] focus-within:border-[rgba(255,214,145,1)]"
      role="presentation"
    >
      <span aria-hidden="true" className="pointer-events-none absolute inset-[2px] rounded-full border border-[rgba(255,227,175,.16)]" />
      <span aria-hidden="true" className="pointer-events-none absolute inset-x-[18%] top-[1px] h-px bg-linear-to-r from-transparent via-[rgba(255,242,211,.88)] to-transparent opacity-80 blur-[.3px]" />
      <span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_0%,rgba(255,190,82,.09),transparent_42%)]" />

      <span
        aria-hidden="true"
        className="absolute left-[12%] text-[.8rem] leading-none text-[rgba(255,194,91,.88)] drop-shadow-[0_0_3px_rgba(255,160,43,.8)] transition-transform duration-300 group-hover:scale-110"
      >
        ✦
      </span>

      <span
        dir="ltr"
        className="relative z-10 whitespace-nowrap font-[Poppins,Segoe_UI,sans-serif] text-[clamp(.92rem,3.3vw,1.08rem)] font-medium leading-none tracking-[.14em] text-[#ffd99a] drop-shadow-[0_0_4px_rgba(255,178,65,.62)] transition-[color,text-shadow] duration-300 group-hover:text-[#ffe8bf] group-hover:drop-shadow-[0_0_5px_rgba(255,194,91,.78)]"
      >
        {children}
      </span>

      <span
        aria-hidden="true"
        className="absolute right-[12%] text-[.8rem] leading-none text-[rgba(255,194,91,.88)] drop-shadow-[0_0_3px_rgba(255,160,43,.8)] transition-transform duration-300 group-hover:scale-110"
      >
        ✦
      </span>
    </span>
  );
}
