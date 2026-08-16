const LOGO_SRC = "/assets/brand/garfilas-reference-logo.svg";

export default function HeroLogo() {
  return (
    <div className="hero-logo" aria-label="Garfilas">
      <span className="hero-logo-fire hero-logo-fire-back" aria-hidden="true" />
      <span className="hero-logo-fire hero-logo-fire-wide" aria-hidden="true" />
      <span className="hero-logo-neon-core" aria-hidden="true">
        GARFILAS
      </span>
      <span className="hero-logo-neon-hot" aria-hidden="true">
        GARFILAS
      </span>
      <img
        className="hero-logo-reference-edge"
        src={LOGO_SRC}
        alt=""
        aria-hidden="true"
        draggable={false}
      />
      <img
        className="hero-logo-image-sr"
        src={LOGO_SRC}
        alt="Garfilas Italian Lasagna"
        width={283.5}
        height={56.7}
        fetchPriority="high"
      />
    </div>
  );
}
