import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  id?: string;
};

export default function GlowButton({ children, id }: Props) {
  return (
    <span id={id} className="garfilas-glow-button">
      <span aria-hidden="true" className="garfilas-glow-button__star garfilas-glow-button__star--left">
        ✦
      </span>
      <span className="garfilas-glow-button__label">{children}</span>
      <span aria-hidden="true" className="garfilas-glow-button__star garfilas-glow-button__star--right">
        ✦
      </span>
    </span>
  );
}
