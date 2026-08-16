const LOGO_SRC = "/assets/brand/garfilas-reference-logo.svg";

export default function HeroLogo() {
  return (
    <div className="hero-logo" aria-label="Garfilas">
      <span className="hero-logo-continuous" aria-hidden="true">
        GARFILAS
      </span>
      <img
        className="hero-logo-fire hero-logo-fire-back"
        src={LOGO_SRC}
        alt=""
        aria-hidden="true"
        draggable={false}
      />
      <img
        className="hero-logo-fire hero-logo-fire-wide"
        src={LOGO_SRC}
        alt=""
        aria-hidden="true"
        draggable={false}
      />
      <img
        className="hero-logo-fire hero-logo-fire-neon"
        src={LOGO_SRC}
        alt=""
        aria-hidden="true"
        draggable={false}
      />
      <img
        className="hero-logo-mark"
        src={LOGO_SRC}
        alt=""
        aria-hidden="true"
        draggable={false}
      />
      <img
        className="hero-logo-hot-core"
        src={LOGO_SRC}
        alt="Garfilas Italian Lasagna"
        width={283.5}
        height={56.7}
        fetchPriority="high"
        draggable={false}
      />
    </div>
  );
}
