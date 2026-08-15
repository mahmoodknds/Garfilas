import HeroCTA from "./HeroCTA";
import HeroLogo from "./HeroLogo";

const referenceHeroStyles = `
  .hero .hero-flag {
    display:flex;
    align-items:center;
    justify-content:center;
    width:100%;
    height:8px;
    margin-top:.36rem;
  }
  .hero .hero-flag img {
    display:block;
    width:4.65rem;
    height:auto;
    filter:drop-shadow(0 0 4px rgba(255,122,15,.34));
  }
  .hero .hero-tagline {
    display:block;
    width:100%;
    margin:.48rem 0 0;
    color:rgba(255,226,196,.94);
    font-family:"Snell Roundhand","Segoe Script","Brush Script MT","URW Chancery L",cursive;
    font-size:clamp(1.05rem,4.4vw,1.38rem);
    font-style:italic;
    font-weight:600;
    line-height:1.05;
    letter-spacing:.015em;
    white-space:nowrap;
    text-align:center;
    text-shadow:0 0 5px rgba(255,150,48,.62),0 0 14px rgba(255,82,0,.26);
  }
  .hero .hero-tagline span { display:inline; }
  @media (max-width:699px) {
    .hero .hero-tagline { font-size:clamp(.92rem,4.2vw,1.12rem); }
    .hero .hero-flag { margin-top:.32rem; }
    .hero .hero-flag img { width:4.15rem; }
  }
  @media (min-width:700px) {
    .hero .hero-tagline { font-size:1.32rem; }
  }
`;

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <style>{referenceHeroStyles}</style>

      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
      <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
      <div className="hero-glow hero-glow-main" aria-hidden="true" />
      <div className="hero-glow hero-glow-small" aria-hidden="true" />

      <div className="hero-shell">
        <div className="hero-copy">
          <HeroLogo />

          <div className="hero-product-lockup" aria-label="Lasagna">
            <span className="hero-product-line" aria-hidden="true" />
            <span className="hero-product-name">LASAGNA</span>
            <span className="hero-product-line" aria-hidden="true" />
          </div>

          <div className="hero-flag" aria-hidden="true">
            <img src="/assets/brand/italian-flag.svg" alt="" width={90} height={8} />
          </div>

          <p className="hero-tagline">Layers of Love, Taste of Italy</p>
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
