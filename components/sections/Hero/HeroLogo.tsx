export default function HeroLogo() {
  return (
    <div className="hero-logo" aria-label="Garfilas">
      <span className="hero-logo-mark" aria-hidden="true" />
      <img
        className="hero-logo-image-sr"
        src="/assets/brand/garfilas-reference-logo.svg"
        alt="Garfilas Italian Lasagna"
        width={790}
        height={235}
        fetchPriority="high"
      />
    </div>
  );
}
