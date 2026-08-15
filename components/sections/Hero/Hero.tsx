import HeroCTA from "./HeroCTA";
import HeroLogo from "./HeroLogo";

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
          <HeroLogo />

          <div
            className="hero-brand-lockup"
            aria-label="LASAGNA, Layers of Love, Taste of Italy"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              marginTop: "0.15rem",
            }}
          >
            <div
              className="hero-lasagna-row"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.75rem",
                width: "100%",
              }}
            >
              <span aria-hidden="true" style={{ width: "clamp(2.5rem, 14vw, 7rem)", height: "1px", background: "currentColor", opacity: 0.7 }} />
              <span
                className="hero-lasagna"
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "clamp(1.05rem, 3vw, 1.8rem)",
                  fontWeight: 700,
                  letterSpacing: "0.22em",
                  lineHeight: 1,
                  whiteSpace: "nowrap",
                }}
              >
                LASAGNA
              </span>
              <span aria-hidden="true" style={{ width: "clamp(2.5rem, 14vw, 7rem)", height: "1px", background: "currentColor", opacity: 0.7 }} />
            </div>

            <img
              src="/assets/brand/italian-flag.svg"
              alt="Italian flag"
              width={34}
              height={22}
              style={{ width: "clamp(1.65rem, 5vw, 2.15rem)", height: "auto", marginTop: "0.55rem" }}
            />

            <span
              className="hero-tagline"
              style={{
                marginTop: "0.35rem",
                fontFamily: "'Segoe Script', 'Brush Script MT', cursive",
                fontSize: "clamp(0.85rem, 2.4vw, 1.2rem)",
                fontWeight: 500,
                lineHeight: 1.15,
                whiteSpace: "nowrap",
              }}
            >
              Layers of Love, Taste of Italy
            </span>
          </div>
        </div>

        <div className="hero-mascot" aria-label="Garfilas hero artwork">
          <div className="hero-mascot-halo" aria-hidden="true" />
          <div className="hero-mascot-frame">
            <img
              src="/assets/hero/garfilas-hero-final.webp"
              alt="Garfilas mascot enjoying handmade lasagna"
              width={1536}
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
        <div className="hero-scroll-cue" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </div>

      <h1 id="hero-title" className="sr-only">
        Garfilas premium handmade Italian lasagna
      </h1>
    </section>
  );
}
