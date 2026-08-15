export default function HeroLogo() {
  return (
    <div className="hero-logo" aria-label="Garfilas">
      <span className="hero-logo-color" aria-hidden="true" />
      <img
        className="hero-logo-image"
        src="/assets/brand/garfilas-reference-logo.svg"
        alt="Garfilas Italian Lasagna"
        width={1134}
        height={227}
        fetchPriority="high"
      />
    </div>
  );
}
