const logoMask = {
  WebkitMaskImage: "url('/assets/brand/garfilas-reference-logo.svg')",
  maskImage: "url('/assets/brand/garfilas-reference-logo.svg')",
  WebkitMaskRepeat: "no-repeat",
  maskRepeat: "no-repeat",
  WebkitMaskPosition: "center",
  maskPosition: "center",
  WebkitMaskSize: "contain",
  maskSize: "contain",
} as const;

export default function HeroLogo() {
  return (
    <div className="hero-logo" aria-label="Garfilas" style={{ position: "relative", isolation: "isolate" }}>
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: "min(68vw, 21rem)",
          height: "min(16vw, 4.2rem)",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          background: "#ff6500",
          ...logoMask,
          filter: [
            "drop-shadow(0 0 0.45px rgba(255,248,214,1))",
            "drop-shadow(0 0 1.15px rgba(255,218,133,1))",
            "drop-shadow(0 0 2.8px rgba(255,145,34,.98))",
            "drop-shadow(0 0 5.5px rgba(255,101,0,.92))",
            "drop-shadow(0 0 10px rgba(255,101,0,.68))",
            "drop-shadow(0 0 18px rgba(255,82,0,.38))",
          ].join(" "),
        }}
      />
      <span className="sr-only">Garfilas Italian Lasagna</span>
    </div>
  );
}
