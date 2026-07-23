import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Section({ children }: Props) {
  return (
    <section
      style={{
        padding: "64px 0",
        position: "relative",
      }}
    >
      {children}
    </section>
  );
}