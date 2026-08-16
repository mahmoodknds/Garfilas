const LOGO_SRC = "/assets/brand/garfilas-reference-logo.svg";

export default function HeroLogo() {
  return (
    <div className="hero-logo" aria-label="Garfilas">
      <img
        className="hero-logo-fire hero-logo-fire-back"
        src={LOGO_SRC}
        alt=""
        aria-hidden="true"
        draggable={false}
        style={{ opacity: 0.55 }}
      />
      <img
        className="hero-logo-fire hero-logo-fire-wide"
        src={LOGO_SRC}
        alt=""
        aria-hidden="true"
        draggable={false}
        style={{ opacity: 0.72 }}
      />
      <img
        className="hero-logo-fire hero-logo-fire-neon"
        src={LOGO_SRC}
        alt=""
        aria-hidden="true"
        draggable={false}
        style={{ opacity: 0.96 }}
      />
      <img
        className="hero-logo-mark"
        src={LOGO_SRC}
        alt=""
        aria-hidden="true"
        draggable={false}
        style={{
          opacity: 1,
          filter:
            "brightness(1.18) saturate(1.18) drop-shadow(0 0 1px rgba(255,252,235,1)) drop-shadow(0 0 3px rgba(255,229,166,.98)) drop-shadow(0 0 7px rgba(255,151,35,.96)) drop-shadow(0 0 15px rgba(255,92,0,.86))",
        }}
      />
      <img
        className="hero-logo-hot-core"
        src={LOGO_SRC}
        alt="Garfilas Italian Lasagna"
        width={283.5}
        height={56.7}
        fetchPriority="high"
        draggable={false}
        style={{
          opacity: 0.94,
          filter:
            "brightness(1.32) saturate(.78) drop-shadow(0 0 1px rgba(255,255,245,1)) drop-shadow(0 0 3px rgba(255,246,207,.98))",
        }}
      />
    </div>
  );
}
