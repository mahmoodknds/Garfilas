const LOGO_SRC = "/assets/brand/garfilas-reference-logo.svg";

export default function HeroLogo() {
  return (
    <div className="hero-logo" aria-label="Garfilas">
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          fontFamily: 'Georgia, "Times New Roman", serif',
          fontSize: "clamp(2.45rem, 8.9vw, 3.35rem)",
          fontWeight: 400,
          letterSpacing: "0.012em",
          lineHeight: 1,
          color: "transparent",
          WebkitTextStroke: "1px rgba(255, 184, 72, .96)",
          textShadow:
            "0 0 2px rgba(255,244,205,.95), 0 0 5px rgba(255,170,45,.92), 0 0 11px rgba(255,104,0,.78), 0 0 24px rgba(255,55,0,.42)",
          whiteSpace: "nowrap",
          pointerEvents: "none",
        }}
      >
        GARFILAS
      </span>
      <img
        className="hero-logo-fire hero-logo-fire-back"
        src={LOGO_SRC}
        alt=""
        aria-hidden="true"
        draggable={false}
        style={{ opacity: 0.28 }}
      />
      <img
        className="hero-logo-fire hero-logo-fire-wide"
        src={LOGO_SRC}
        alt=""
        aria-hidden="true"
        draggable={false}
        style={{ opacity: 0.42 }}
      />
      <img
        className="hero-logo-fire hero-logo-fire-neon"
        src={LOGO_SRC}
        alt=""
        aria-hidden="true"
        draggable={false}
        style={{ opacity: 0.52 }}
      />
      <img
        className="hero-logo-mark"
        src={LOGO_SRC}
        alt=""
        aria-hidden="true"
        draggable={false}
        style={{ opacity: 0.48 }}
      />
      <img
        className="hero-logo-hot-core"
        src={LOGO_SRC}
        alt="Garfilas Italian Lasagna"
        width={283.5}
        height={56.7}
        fetchPriority="high"
        draggable={false}
        style={{ opacity: 0.58 }}
      />
    </div>
  );
}
