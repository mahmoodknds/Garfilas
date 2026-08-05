import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  id?: string;
};

export default function GlowButton({ children, id }: Props) {
  return (
    <span
      id={id}
      className="inline-flex min-h-14 items-center justify-center rounded-full bg-[var(--primary)] px-10 py-4 text-lg font-bold text-black shadow-[0_0_40px_rgba(255,138,0,.35)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_48px_rgba(255,138,0,.5)] active:translate-y-0"
    >
      {children}
    </span>
  );
}
