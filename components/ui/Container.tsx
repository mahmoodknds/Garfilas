import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Container({ children }: Props) {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "var(--container)",
        margin: "0 auto",
        paddingInline: "24px",
      }}
    >
      {children}
    </div>
  );
}