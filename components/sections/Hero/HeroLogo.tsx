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
        className="hero-logo-layer hero-logo-bloom"
        aria-hidden="true"
        style={{
          ...layerBase,
          zIndex: 1,
          background: "#ff4f00",
          opacity: 0.30,
          filter: "blur(11px)",
          transform: "translate(-50%, -50%) scale(1.11)",
        }}
      />
      <span
        className="hero-logo-layer hero-logo-ambient"
        aria-hidden="true"
        style={{
          ...layerBase,
          zIndex: 2,
          background: "#ff6400",
          opacity: 0.42,
          filter: "blur(5.5px)",
          transform: "translate(-50%, -50%) scale(1.065)",
        }}
      />
      <span
        className="hero-logo-layer hero-logo-outer"
        aria-hidden="true"
        style={{
          ...layerBase,
          zIndex: 3,
          background: "#ff5a00",
          opacity: 0.62,
          filter: "blur(2.4px)",
          transform: "translate(-50%, -50%) scale(1.035)",
        }}
      />
      <span
        className="hero-logo-layer hero-logo-neon"
        aria-hidden="true"
        style={{
          ...layerBase,
          zIndex: 4,
          background: "#ff9b20",
          opacity: 0.96,
          filter: "blur(.48px) drop-shadow(0 0 1.5px rgba(255,242,180,1)) drop-shadow(0 0 4px rgba(255,128,12,.98)) drop-shadow(0 0 9px rgba(255,72,0,.72))",
          transform: "translate(-50%, -50%) scale(1.016)",
        }}
      />
      <span
        className="hero-logo-layer hero-logo-hot"
        aria-hidden="true"
        style={{
          ...layerBase,
          zIndex: 5,
          background: "#ffd978",
          opacity: 0.95,
          filter: "blur(.18px) drop-shadow(0 0 .9px rgba(255,247,215,1))",
          transform: "translate(-50%, -50%) scale(1.002)",
        }}
      />
      <span
        className="hero-logo-layer hero-logo-core"
        aria-hidden="true"
        style={{
          ...layerBase,
          zIndex: 6,
          background: "linear-gradient(180deg, #fff0b0 0%, #ffd76b 22%, #ffb42b 52%, #ff8610 78%, #ff6200 100%)",
          filter: "drop-shadow(0 0 .7px rgba(255,249,220,1)) drop-shadow(0 0 1.8px rgba(255,201,78,.95))",
        }}
      />
      <span className="sr-only">Garfilas Italian Lasagna</span>
    </div>
  );
}
