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

const referenceNeon = {
  ...logoMask,
  width: "min(76vw, 29rem)",
  height: "auto",
  aspectRatio: "5 / 1",
  background: "#ff7a00",
  filter:
    "brightness(1.55) saturate(1.18) drop-shadow(0 0 0.35px #fff6c8) drop-shadow(0 0 0.9px #ffe9a3) drop-shadow(0 0 1.8px #ffbd4a) drop-shadow(0 0 3.5px #ff8a0a) drop-shadow(0 0 7px rgba(255,122,0,.95)) drop-shadow(0 0 13px rgba(255,103,0,.72)) drop-shadow(0 0 22px rgba(255,84,0,.42)) drop-shadow(0 0 34px rgba(255,70,0,.20))",
} as const;

export default function HeroLogo() {
  return (
    <div className="hero-logo-lockup" aria-label="Garfilas Italian Lasagna">
      <div className="hero-logo" aria-hidden="true">
        <span
          className="hero-logo-neon"
          style={referenceNeon}
        />
      </div>

      <div className="hero-product-name" aria-hidden="true">
        LASAGNA
      </div>

      <span className="sr-only">Garfilas Italian Lasagna</span>
    </div>
  );
}
