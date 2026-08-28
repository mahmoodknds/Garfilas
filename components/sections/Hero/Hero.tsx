import HeroCTA from "./HeroCTA";
import HeroLogo from "./HeroLogo";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <style>{`
        /* Foreground calibration remains protected. Background is calibrated independently. */
        .hero-grid,.hero-orbit-two,.hero-glow-small{display:none!important}

        /* Main background: the reference shows a very dark brick wall, not a technical grid. */
        .hero-background-wall{
          position:absolute;
          inset:0;
          z-index:0;
          pointer-events:none;
          background-color:#050403;
          background-image:
            radial-gradient(circle at 50% 24%,rgba(255,89,0,.105),transparent 30%),
            radial-gradient(circle at 50% 48%,rgba(91,35,10,.16),transparent 52%),
            linear-gradient(to bottom,rgba(0,0,0,.18),rgba(0,0,0,.04) 42%,rgba(0,0,0,.42) 100%),
            linear-gradient(rgba(255,104,22,.038) 1px,transparent 1px),
            linear-gradient(90deg,rgba(255,104,22,.025) 1px,transparent 1px),
            linear-gradient(90deg,transparent 0 50%,rgba(255,104,22,.018) 50% 51%,transparent 51%);
          background-size:auto,auto,auto,100% 28px,56px 28px,56px 28px;
          background-position:center,center,center,0 0,0 0,28px 14px;
          mask-image:linear-gradient(to bottom,#000 0%,#000 88%,transparent 100%);
        }

        /* Reference-based Italian architecture. Kept faint and behind the mascot/ring. */
        .hero-background-architecture{
          position:absolute;
          z-index:2;
          left:50%;
          top:25.5%;
          width:min(116vw,56rem);
          transform:translate(-50%,-50%);
          pointer-events:none;
          opacity:.54;
          filter:drop-shadow(0 0 3px rgba(255,88,0,.22)) drop-shadow(0 0 10px rgba(255,73,0,.10));
        }
        .hero-background-architecture img{
          display:block;
          width:100%;
          height:auto;
          user-select:none;
        }

        /* One visual anchor for the current hero: artwork + one luminous ring. */
        .hero-mascot{width:min(62vw,32rem);top:25.5%}
        .hero-mascot-halo{display:none!important}
        .hero-orbit-one{top:25.5%;width:min(74vw,38rem);border-color:rgba(255,123,18,.9);box-shadow:0 0 6px rgba(255,91,0,.86),0 0 18px rgba(255,91,0,.38),inset 0 0 8px rgba(255,91,0,.2)}
        .hero-glow-main{top:25.5%;width:min(68vw,34rem)}

        /* Calibrate the lower stack from the fixed bottom navigation upward. */
        .hero-copy{top:50.5%}
        .hero-cta{top:75.2%}
        .hero-scroll-cue{top:82%}

        @media(max-width:699px){
          .hero-mascot{width:min(76vw,23rem);top:25.5%}
          .hero-orbit-one{top:25.5%;width:min(84vw,26rem)}
          .hero-glow-main{top:25.5%;width:min(82vw,25rem)}
          .hero-background-architecture{top:25.5%;width:118vw;opacity:.52}
          .hero-copy{top:50.8%}
          .hero-cta{top:74.8%}
          .hero-scroll-cue{top:81.8%}
        }

        @media(min-width:700px){
          .hero-background-architecture{top:29%;width:min(92vw,58rem);opacity:.48}
        }
      `}</style>

      {/* The supplied reference is a composition source, never a background image. */}
      <div className="hero-background-wall" aria-hidden="true" />
      <div className="hero-background-architecture" aria-hidden="true">
        <img
          src="/assets/ui/hero-background-architecture.svg"
          alt=""
          width={1200}
          height={430}
          draggable="false"
        />
      </div>

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
