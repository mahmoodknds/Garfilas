import HeroCTA from "./HeroCTA";
import HeroLogo from "./HeroLogo";

const referenceHeroStyles = `
  /* Brand lockup calibrated as one compact unit against the approved reference. */
  .hero .hero-copy {
    top:49.7%;
    width:min(92vw,34rem);
  }
  .hero .hero-logo-image {
    width:min(70vw,24rem);
    max-height:none;
  }
  .hero .hero-product-lockup {
    display:flex;
    align-items:center;
    justify-content:center;
    margin-top:.34rem;
    gap:clamp(.55rem,2.1vw,.9rem);
  }
  .hero .hero-product-name {
    color:#f1d4b5;
    font-family:Georgia,"Times New Roman",serif;
    font-size:clamp(.62rem,2.35vw,.86rem);
    font-weight:600;
    letter-spacing:.31em;
    line-height:1;
    text-indent:.31em;
    text-shadow:0 0 5px rgba(255,137,30,.48),0 0 11px rgba(255,91,0,.18);
  }
  .hero .hero-product-line {
    flex:0 0 auto;
    width:clamp(2.1rem,11vw,4.1rem);
    height:1px;
    background:linear-gradient(90deg,transparent,rgba(255,143,36,.9));
    box-shadow:0 0 6px rgba(255,91,0,.48);
  }
  .hero .hero-product-line:last-child {
    background:linear-gradient(90deg,rgba(255,143,36,.9),transparent);
  }
  .hero .hero-flag {
    display:flex;
    align-items:center;
    justify-content:center;
    width:100%;
    height:auto;
    margin-top:.48rem;
  }
  .hero .hero-flag img {
    display:block;
    width:2.15rem;
    height:auto;
    filter:drop-shadow(0 0 4px rgba(255,122,15,.38));
  }
  .hero .hero-tagline {
    display:block;
    width:100%;
    margin:.34rem 0 0;
    color:rgba(255,226,196,.94);
    font-family:"Snell Roundhand","Segoe Script","Brush Script MT","URW Chancery L",cursive;
    font-size:clamp(.86rem,3.55vw,1.08rem);
    font-style:italic;
    font-weight:500;
    line-height:1;
    letter-spacing:.01em;
    white-space:nowrap;
    text-align:center;
    text-shadow:0 0 5px rgba(255,150,48,.58),0 0 13px rgba(255,82,0,.24);
  }
  @media (max-width:699px) {
    .hero .hero-copy { top:49.85%; width:94vw; }
    .hero .hero-logo-image { width:min(70vw,22rem); }
    .hero .hero-product-lockup { margin-top:.30rem; gap:.52rem; }
    .hero .hero-product-name {
      font-size:clamp(.58rem,2.3vw,.76rem);
      letter-spacing:.27em;
      text-indent:.27em;
    }
    .hero .hero-product-line { width:clamp(1.9rem,10.5vw,3.25rem); }
    .hero .hero-flag { margin-top:.42rem; }
    .hero .hero-flag img { width:2rem; }
    .hero .hero-tagline {
      margin-top:.32rem;
      font-size:clamp(.82rem,3.7vw,1rem);
    }
  }
  @media (min-width:700px) {
    .hero .hero-copy { top:52.5%; width:min(88vw,36rem); }
    .hero .hero-logo-image { width:min(40vw,27rem); }
    .hero .hero-product-name { font-size:.92rem; }
    .hero .hero-product-line { width:4.5rem; }
    .hero .hero-flag img { width:2.25rem; }
    .hero .hero-tagline { font-size:1.16rem; }
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
