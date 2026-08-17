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

const layerBase = {
  position: "absolute" as const,
  left: "50%",
  top: "50%",
  width: "min(68vw, 21rem)",
  height: "min(16vw, 4.2rem)",
  transform: "translate(-50%, -50%)",
  pointerEvents: "none" as const,
  ...logoMask,
};

export default function HeroLogo() {
  return (
    <div className="hero-logo" aria-label="Garfilas" style={{ position: "relative", isolation: "isolate" }}>
      <span
        className="hero-logo-layer hero-logo-ambient"
        aria-hidden="true"
        style={{
          ...layerBase,
          zIndex: 1,
          background: "#ff6a00",
          opacity: 0.18,
          filter: "blur(9px)",
          transform: "translate(-50%, -50%) scale(1.075)",
        }}
      />
      <span
        className="hero-logo-layer hero-logo-outer"
        aria-hidden="true"
        style={{
          ...layerBase,
          zIndex: 2,
          background: "#ff5b00",
          opacity: 0.38,
          filter: "blur(3.6px)",
          transform: "translate(-50%, -50%) scale(1.038)",
        }}
      />
      <span
        className="hero-logo-layer hero-logo-neon"
        aria-hidden="true"
        style={{
          ...layerBase,
          zIndex: 3,
          background: "#ff8a12",
          opacity: 0.86,
          filter: "blur(.72px) drop-shadow(0 0 1px rgba(255,225,137,.95)) drop-shadow(0 0 3px rgba(255,112,8,.85))",
          transform: "translate(-50%, -50%) scale(1.012)",
        }}
      />
      <span
        className="hero-logo-layer hero-logo-core"
        aria-hidden="true"
        style={{
          ...layerBase,
          zIndex: 4,
          background: "linear-gradient(180deg, #ffe7a0 0%, #ffd064 18%, #ffb52d 45%, #ff9410 70%, #ff6b00 100%)",
          filter: "drop-shadow(0 0 .5px rgba(255,248,213,.98)) drop-shadow(0 0 1.4px rgba(255,193,65,.82))",
        }}
      />
      <span className="sr-only">Garfilas Italian Lasagna</span>
    </div>
  );
}
