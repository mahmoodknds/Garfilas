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

      <div className="hero-product-lockup" aria-hidden="true">
        <span className="hero-product-line hero-product-line-left" />
        <span className="hero-product-name">LASAGNA</span>
        <span className="hero-product-line hero-product-line-right" />
      </div>

      <span className="sr-only">Garfilas Italian Lasagna</span>
    </div>
  );
}
