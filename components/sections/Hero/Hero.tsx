import HeroCTA from "./HeroCTA";
import HeroLogo from "./HeroLogo";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <style>{`
        /* Reference composition calibration: keep the bottom navigation fixed and rebalance the hero stack above it. */
        .hero-mascot{width:min(70vw,25rem);top:26.5%}
        .hero-orbit{top:26.5%}
        .hero-glow-main{top:26.5%}
        .hero-glow-small{top:45%}
        .hero-architecture{top:26.5%;width:min(104vw,50rem);height:min(44vh,30rem)}
        .hero-copy{top:48.3%}
        .hero-cta{top:70%}
        .hero-scroll-cue{top:80%}
        @media(max-width:699px){
          .hero-mascot{width:min(70vw,20rem);top:26.5%}
          .hero-orbit{top:26.5%}
          .hero-glow-main{top:26.5%;width:76vw}
          .hero-glow-small{top:45%;width:40vw}
          .hero-architecture{top:26.5%;width:104vw;height:43vh}
          .hero-copy{top:48.3%}
          .hero-cta{top:70%}
          .hero-scroll-cue{top:80%}
        }
      `}</style>
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
      <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
      <div className="hero-glow hero-glow-main" aria-hidden="true" />
      <div className="hero-glow hero-glow-small" aria-hidden="true" />

      <div className="hero-shell">
        <div className="hero-copy">
          <HeroLogo />
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
        <div className="hero-scroll-cue" aria-hidden="true" style={{ marginTop: "10px" }}>
          <style>{`.hero-scroll-cue span{transform:rotate(225deg)}`}</style>
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
