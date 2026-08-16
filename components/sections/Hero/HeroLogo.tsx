export default function HeroLogo() {
  return (
    <div className="hero-logo" aria-label="Garfilas">
      <img
        className="hero-logo-image hero-logo-glow hero-logo-glow-outer"
        src="/assets/brand/garfilas-reference-logo.svg"
        alt=""
        aria-hidden="true"
        width={790}
        height={235}
        fetchPriority="high"
      />
      <img
        className="hero-logo-image hero-logo-glow hero-logo-glow-neon"
        src="/assets/brand/garfilas-reference-logo.svg"
        alt=""
        aria-hidden="true"
        width={790}
        height={235}
      />
      <img
        className="hero-logo-image hero-logo-core"
        src="/assets/brand/garfilas-reference-logo.svg"
        alt="Garfilas Italian Lasagna"
        width={790}
        height={235}
      />
    </div>
  );
}
