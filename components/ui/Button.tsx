import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Button({ children }: Props) {
  return (
    <button
      style={{
        background: "linear-gradient(90deg,#ff9f2d,#ff7a00)",
        color: "white",
        border: "none",
        borderRadius: "999px",
        padding: "16px 34px",
        cursor: "pointer",
        fontWeight: 700,
        boxShadow: "var(--shadow-orange)",
        transition: "all var(--transition)",
      }}
    >
      {children}
    </button>
  );
}