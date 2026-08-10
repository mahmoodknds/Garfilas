import HeroCTA from "./HeroCTA";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
      <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
      <div className="hero-glow hero-glow-main" aria-hidden="true" />
      <div className="hero-glow hero-glow-small" aria-hidden="true" />

      <div className="hero-shell">
        <div className="hero-copy">
          <div className="hero-brand-mark" aria-label="Garfilas">
            <span className="hero-brand-name">GARFILAS</span>
            <span className="hero-brand-rule">
              <i />
              <span>ITALIAN LASAGNA</span>
              <i />
            </span>
          </div>

          <div className="hero-flag" aria-label="Italian cuisine">
            <span />
            <span />
            <span />
          </div>

          <p className="hero-kicker">PREMIUM HANDMADE LASAGNA</p>
          <p className="hero-tagline">Layers of Love, Taste of Italy</p>
        </div>

        <div className="hero-mascot" aria-label="Garfilas mascot placeholder">
          <div className="hero-mascot-halo" aria-hidden="true" />
          <div className="hero-mascot-frame">
            <img
              src="/assets/hero/garfilas-reference-hero-preview.jpg"
              alt="Garfilas mascot placeholder"
              width={1024}
              height={1024}
              fetchPriority="high"
            />
          </div>
        </div>

        <div className="hero-architecture" aria-hidden="true">
          <span className="arch arch-left" />
          <span className="arch arch-right" />
          <span className="arch arch-base" />
        </div>

        <HeroCTA />
      </div>

      <h1 id="hero-title" className="sr-only">
        Garfilas premium handmade Italian lasagna
      </h1>
    </section>
  );
}
