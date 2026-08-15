import HeroCTA from "./HeroCTA";
import HeroLogo from "./HeroLogo";

const referenceHeroStyles = `
  /* Brand lockup calibration against the approved mobile reference. */
  .hero .hero-copy {
    top:51.25%;
  }
  .hero .hero-logo-image {
    width:min(76vw,28rem);
  }
  .hero .hero-product-lockup {
    margin-top:.18rem;
    gap:clamp(.55rem,2.4vw,.95rem);
  }
  .hero .hero-product-name {
    color:#f3d8ba;
    font-family:Georgia,"Times New Roman",serif;
    font-size:clamp(.68rem,2.7vw,.94rem);
    font-weight:700;
    letter-spacing:.34em;
    line-height:1;
    text-indent:.34em;
    text-shadow:0 0 5px rgba(255,137,30,.45),0 0 12px rgba(255,91,0,.18);
  }
  .hero .hero-product-line {
    width:clamp(2.35rem,14vw,5rem);
    height:1px;
    background:linear-gradient(90deg,transparent,rgba(255,143,36,.90));
    box-shadow:0 0 6px rgba(255,91,0,.50);
  }
  .hero .hero-product-line:last-child {
    background:linear-gradient(90deg,rgba(255,143,36,.90),transparent);
  }
  .hero .hero-flag {
    display:flex;
    align-items:center;
    justify-content:center;
    width:100%;
    height:8px;
    margin-top:.42rem;
  }
  .hero .hero-flag img {
    display:block;
    width:2.7rem;
    height:auto;
    filter:drop-shadow(0 0 4px rgba(255,122,15,.34));
  }
  .hero .hero-tagline {
    display:block;
    width:100%;
    margin:.42rem 0 0;
    color:rgba(255,226,196,.94);
    font-family:"Snell Roundhand","Segoe Script","Brush Script MT","URW Chancery L",cursive;
    font-size:clamp(1rem,4vw,1.28rem);
    font-style:italic;
    font-weight:600;
    line-height:1.05;
    letter-spacing:.012em;
    white-space:nowrap;
    text-align:center;
    text-shadow:0 0 5px rgba(255,150,48,.62),0 0 14px rgba(255,82,0,.26);
  }
  @media (max-width:699px) {
    .hero .hero-copy { top:51.45%; }
    .hero .hero-logo-image { width:min(80vw,25.5rem); max-width:25.5rem; }
    .hero .hero-product-lockup { margin-top:.16rem; gap:.58rem; }
    .hero .hero-product-name {
      font-size:clamp(.64rem,2.55vw,.82rem);
      letter-spacing:.28em;
      text-indent:.28em;
    }
    .hero .hero-product-line { width:clamp(2rem,13vw,3.8rem); }
    .hero .hero-flag { margin-top:.38rem; }
    .hero .hero-flag img { width:2.45rem; }
    .hero .hero-tagline {
      margin-top:.40rem;
      font-size:clamp(.92rem,4.15vw,1.12rem);
    }
  }
  @media (min-width:700px) {
    .hero .hero-copy { top:53%; }
    .hero .hero-logo-image { width:min(46vw,30rem); }
    .hero .hero-product-name { font-size:1rem; }
    .hero .hero-flag img { width:2.9rem; }
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
