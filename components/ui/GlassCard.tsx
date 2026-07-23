import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function GlassCard({ children }: Props) {
  return (
    <div
      style={{
        backdropFilter: "blur(18px)",
        background: "var(--glass)",
        border: "1px solid var(--glass-border)",
        borderRadius: "var(--radius-lg)",
        boxShadow: "var(--shadow-soft)",
      }}
    >
      {children}
    </div>
  );
}