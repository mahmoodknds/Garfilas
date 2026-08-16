export default function HeroLogo() {
  return (
    <div className="hero-logo" aria-label="Garfilas">
      <span className="hero-logo-fire hero-logo-fire-back" aria-hidden="true" />
      <span className="hero-logo-fire hero-logo-fire-wide" aria-hidden="true" />
      <span className="hero-logo-fire hero-logo-fire-neon" aria-hidden="true" />
      <span className="hero-logo-mark" aria-hidden="true" />
      <span className="hero-logo-hot-core" aria-hidden="true" />
      <img
        className="hero-logo-image-sr"
        src="/assets/brand/garfilas-reference-logo.svg"
        alt="Garfilas Italian Lasagna"
        width={283.5}
        height={56.7}
        fetchPriority="high"
      />
    </div>
  );
}
