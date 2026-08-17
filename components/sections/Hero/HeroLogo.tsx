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
          filter: "drop-shadow(0 0 1px #ffb13b) drop-shadow(0 0 3px #ff7a08) drop-shadow(0 0 7px rgba(255,101,0,.95)) drop-shadow(0 0 15px rgba(255,74,0,.68)) drop-shadow(0 0 28px rgba(255,64,0,.34))",
        }}
      />
      <span className="sr-only">Garfilas Italian Lasagna</span>
    </div>
  );
}
