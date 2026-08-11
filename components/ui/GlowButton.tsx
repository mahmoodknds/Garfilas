import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  id?: string;
};

export default function GlowButton({ children, id }: Props) {
  return (
    <span
      id={id}
      className="garfilas-glow-button relative inline-flex min-h-16 min-w-[min(72vw,22rem)] items-center justify-center rounded-full border border-[rgba(255,120,15,.95)] bg-[rgba(8,5,3,.78)] px-10 py-4 text-xl font-bold text-[var(--primary)] shadow-[0_0_8px_rgba(255,91,0,.9),0_0_26px_rgba(255,91,0,.25),inset_0_0_16px_rgba(255,91,0,.08)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_12px_rgba(255,91,0,1),0_0_34px_rgba(255,91,0,.34)] active:translate-y-0"
    >
      <span aria-hidden="true" className="absolute left-7 text-2xl font-normal text-[var(--primary)]">✦</span>
      {children}
      <span aria-hidden="true" className="absolute right-7 text-2xl font-normal text-[var(--primary)]">✦</span>
    </span>
  );
}
