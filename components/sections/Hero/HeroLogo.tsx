export default function HeroLogo() {
  return (
    <div className="hero-logo-lockup" aria-label="Garfilas Italian Lasagna">
      <div className="hero-logo hero-logo-entrance" aria-hidden="true">
        <img
          className="hero-logo-artwork animate-neon-fault"
          src="/assets/brand/garfilas-reference-logo.svg"
          alt=""
          draggable={false}
          style={{
            display: "block",
            width: "min(76vw, 29rem)",
            height: "auto",
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "contain",
            filter: "none",
          }}
        />
      </div>

      <div
        className="hero-product-name"
        aria-hidden="true"
        style={{
          marginTop: "clamp(0.18rem, 0.8vw, 0.42rem)",
          color: "#ff7a00",
          fontFamily: 'Didot, "Bodoni 72", "Bodoni MT", "Times New Roman", serif',
          fontSize: "clamp(0.72rem, 2.45vw, 1.02rem)",
          fontWeight: 400,
          lineHeight: 1,
          letterSpacing: "0.34em",
          textIndent: "0.34em",
          textTransform: "uppercase",
          whiteSpace: "nowrap",
          textAlign: "center",
          textShadow: "0 0 3px rgba(255,122,0,.9), 0 0 8px rgba(255,122,0,.55), 0 0 18px rgba(255,122,0,.28)",
        }}
      >
        LASAGNA
      </div>

      <span className="sr-only">Garfilas Italian Lasagna</span>
    </div>
  );
}
