import HeroCTA from "./HeroCTA";
import HeroLogo from "./HeroLogo";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <style>{`
        /* Temporary composition calibration: simplify the scene before rebuilding the final background. */
        .hero-grid,.hero-orbit-two,.hero-glow-small,.hero-architecture{display:none!important}

        /* One visual anchor for the temporary hero: artwork + one luminous ring. */
        .hero-mascot{width:min(62vw,32rem);top:25.5%}
        .hero-mascot-halo{display:none!important}
        .hero-orbit-one{top:25.5%;width:min(74vw,38rem);border-color:rgba(255,123,18,.9);box-shadow:0 0 6px rgba(255,91,0,.86),0 0 18px rgba(255,91,0,.38),inset 0 0 8px rgba(255,91,0,.2)}
        .hero-glow-main{top:25.5%;width:min(68vw,34rem)}

        /* Calibrate the lower stack from the fixed bottom navigation upward. */
        .hero-copy{top:50.5%}
        .hero-cta{top:73.5%}
        .hero-scroll-cue{top:82%}

        @media(max-width:699px){
          .hero-mascot{width:min(76vw,23rem);top:25.5%}
          .hero-orbit-one{top:25.5%;width:min(84vw,26rem)}
          .hero-glow-main{top:25.5%;width:min(82vw,25rem)}
          .hero-copy{top:50.8%}
          .hero-cta{top:73.2%}
          .hero-scroll-cue{top:81.8%}
        }
      `}</style>

      <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
      <div className="hero-glow hero-glow-main" aria-hidden="true" />

      <div className="hero-shell">
        <div className="hero-mascot" aria-label="Garfilas hero artwork">
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

        <div className="hero-copy">
          <HeroLogo />
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
