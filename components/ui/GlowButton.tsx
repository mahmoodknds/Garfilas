import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  id?: string;
};

export default function GlowButton({ children, id }: Props) {
  return (
    <span
      id={id}
      className="group relative isolate inline-flex h-[4.15rem] w-[min(74vw,36rem)] min-w-[17rem] items-center justify-center overflow-hidden rounded-full border border-[#ff8a18] bg-[linear-gradient(180deg,rgba(26,11,3,.58),rgba(5,3,2,.82))] px-10 text-center shadow-[0_0_5px_rgba(255,136,20,.95),0_0_16px_rgba(255,102,0,.54),0_0_34px_rgba(255,77,0,.20),inset_0_0_18px_rgba(255,121,0,.10)] transition-[transform,box-shadow,border-color] duration-300 ease-out hover:scale-[1.012] hover:border-[#ffae45] hover:shadow-[0_0_6px_rgba(255,169,69,.98),0_0_20px_rgba(255,104,0,.66),0_0_42px_rgba(255,77,0,.28),inset_0_0_20px_rgba(255,128,0,.14)] active:scale-[.995] focus-within:border-[#ffd08a]"
      role="presentation"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-[3px] rounded-full border border-[rgba(255,205,130,.20)] opacity-80"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-[12%] top-0 h-px bg-linear-to-r from-transparent via-[#fff0d0] to-transparent opacity-80 blur-[.25px]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_0%,rgba(255,214,152,.16),transparent_42%),radial-gradient(circle_at_50%_100%,rgba(255,101,0,.12),transparent_48%)]"
      />

      <span
        aria-hidden="true"
        className="absolute left-[8%] text-[1.35rem] leading-none text-[#ffb75d] drop-shadow-[0_0_5px_rgba(255,151,43,.95)] transition-transform duration-300 group-hover:scale-110"
      >
        ✦
      </span>

      <span
        dir="rtl"
        className="relative z-10 whitespace-nowrap text-[clamp(1.35rem,4.8vw,2rem)] font-semibold leading-none tracking-[-0.02em] text-[#ffd9a0] [text-shadow:0_0_1px_#fff3d7,0_0_6px_rgba(255,164,64,.95),0_0_14px_rgba(255,94,0,.62)]"
      >
        {children}
      </span>

      <span
        aria-hidden="true"
        className="absolute right-[8%] text-[1.35rem] leading-none text-[#ffb75d] drop-shadow-[0_0_5px_rgba(255,151,43,.95)] transition-transform duration-300 group-hover:scale-110"
      >
        ✦
      </span>

      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[3px] left-1/2 h-[2px] w-16 -translate-x-1/2 rounded-full bg-[#ffc36b] opacity-80 blur-[1.5px]"
      />
    </span>
  );
}
