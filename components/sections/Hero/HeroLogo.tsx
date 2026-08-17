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
    <div className="hero-logo" aria-label="Garfilas">
      <span
        className="hero-logo-neon"
        aria-hidden="true"
        style={logoMask}
      />
      <span className="sr-only">Garfilas Italian Lasagna</span>
    </div>
  );
}
