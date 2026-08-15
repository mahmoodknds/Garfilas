import HeroCTA from "./HeroCTA";
import HeroLogo from "./HeroLogo";

const referenceHeroStyles = `
  .hero .hero-copy {
    top:49.6%;
    width:min(92vw,32rem);
  }
  .hero .hero-logo-image {
    width:min(58vw,19rem);
    max-height:none;
  }
  .hero .hero-product-lockup {
    display:flex;
    align-items:center;
    justify-content:center;
    margin-top:.28rem;
    gap:clamp(.55rem,2vw,.82rem);
  }
  .hero .hero-product-name {
    color:#f0d1ad;
    font-family:Georgia,"Times New Roman",serif;
    font-size:clamp(.60rem,2.1vw,.78rem);
    font-weight:600;
    letter-spacing:.29em;
    line-height:1;
    text-indent:.29em;
    text-shadow:0 0 5px rgba(255,137,30,.48),0 0 11px rgba(255,91,0,.18);
  }
  .hero .hero-product-line {
    flex:0 0 auto;
    width:clamp(2rem,10vw,3.7rem);
    height:1px;
    background:linear-gradient(90deg,transparent,rgba(255,143,36,.88));
    box-shadow:0 0 6px rgba(255,91,0,.45);
  }
  .hero .hero-product-line:last-child {
    background:linear-gradient(90deg,rgba(255,143,36,.88),transparent);
  }
  .hero .hero-flag {
    display:flex;
    align-items:center;
    justify-content:center;
    width:100%;
    height:auto;
    margin-top:.40rem;
  }
  .hero .hero-flag img {
    display:block;
    width:1.85rem;
    height:auto;
    filter:drop-shadow(0 0 4px rgba(255,122,15,.34));
  }
  .hero .hero-tagline {
    display:block;
    width:100%;
    margin:.28rem 0 0;
    color:rgba(255,226,196,.94);
    font-family:"Snell Roundhand","Segoe Script","Brush Script MT","URW Chancery L",cursive;
    font-size:clamp(.78rem,3.15vw,.98rem);
    font-style:italic;
    font-weight:500;
    line-height:1;
    letter-spacing:.01em;
    white-space:nowrap;
    text-align:center;
    text-shadow:0 0 5px rgba(255,150,48,.55),0 0 13px rgba(255,82,0,.22);
  }
  @media (max-width:699px) {
    .hero .hero-copy { top:49.65%; width:94vw; }
    .hero .hero-logo-image { width:min(58vw,18.5rem); }
    .hero .hero-product-lockup { margin-top:.25rem; gap:.50rem; }
    .hero .hero-product-name {
      font-size:clamp(.56rem,2.15vw,.72rem);
      letter-spacing:.25em;
      text-indent:.25em;
    }
    .hero .hero-product-line { width:clamp(1.8rem,10vw,3rem); }
    .hero .hero-flag { margin-top:.38rem; }
    .hero .hero-flag img { width:1.75rem; }
    .hero .hero-tagline { margin-top:.28rem; font-size:clamp(.76rem,3.25vw,.92rem); }
  }
  @media (min-width:700px) {
    .hero .hero-copy { top:52.3%; width:min(86vw,34rem); }
    .hero .hero-logo-image { width:min(34vw,23rem); }
    .hero .hero-product-name { font-size:.84rem; }
    .hero .hero-product-line { width:4rem; }
    .hero .hero-flag img { width:2rem; }
    .hero .hero-tagline { font-size:1.02rem; }
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
            <img src="/assets/hero/garfilas-hero-final.webp" alt="Garfilas mascot enjoying handmade lasagna" width={1536} height={1024} fetchPriority="high" />
          </div>
        </div>

        <div className="hero-architecture" aria-hidden="true">
          <span className="arch arch-left" />
          <span className="arch arch-right" />
          <span className="arch arch-base" />
        </div>
        <HeroCTA />
        <div className="hero-scroll-cue" aria-hidden="true"><span /><span /><span /></div>
      </div>

      <h1 id="hero-title" className="sr-only">Garfilas premium handmade Italian lasagna</h1>
    </section>
  );
}
