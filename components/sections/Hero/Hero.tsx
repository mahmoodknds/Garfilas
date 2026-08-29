import HeroCTA from "./HeroCTA";
import HeroLogo from "./HeroLogo";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <style>{`
        /* Garfilas hero: deep warm atmospheric space with suspended dust and embers. */
        .hero-depth-scene{position:absolute;inset:0;z-index:0;overflow:hidden;pointer-events:none;isolation:isolate;background:#030201}
        .hero-ember-space{position:absolute;inset:0;overflow:hidden;background:
          radial-gradient(ellipse at 50% 48%,rgba(73,31,9,.28) 0%,rgba(30,12,4,.16) 30%,rgba(4,3,2,0) 66%),
          radial-gradient(ellipse at 18% 70%,rgba(93,38,8,.13),transparent 38%),
          radial-gradient(ellipse at 84% 30%,rgba(104,43,8,.11),transparent 35%),
          #030201}
        .hero-heat{position:absolute;inset:-20%;background:
          radial-gradient(ellipse at 42% 44%,rgba(255,102,20,.10),transparent 24%),
          radial-gradient(ellipse at 67% 62%,rgba(255,72,10,.07),transparent 22%),
          radial-gradient(ellipse at 25% 28%,rgba(255,150,45,.045),transparent 20%);
          filter:blur(34px);animation:heat-breathe 9s ease-in-out infinite;transform:translateZ(0)}

        /* Distant dust: tiny, numerous, slow. */
        .hero-dust-far,.hero-dust-mid,.hero-dust-near{position:absolute;inset:-8%;border-radius:50%;will-change:transform,opacity}
        .hero-dust-far{opacity:.68;background-image:
          radial-gradient(circle at 7% 17%,rgba(255,173,74,.42) 0 1px,transparent 1.8px),radial-gradient(circle at 15% 61%,rgba(255,118,30,.34) 0 1px,transparent 1.7px),radial-gradient(circle at 24% 34%,rgba(255,203,116,.28) 0 .8px,transparent 1.5px),radial-gradient(circle at 32% 76%,rgba(255,129,35,.32) 0 1px,transparent 1.7px),radial-gradient(circle at 41% 20%,rgba(255,181,76,.3) 0 .9px,transparent 1.5px),radial-gradient(circle at 49% 66%,rgba(255,112,24,.3) 0 1px,transparent 1.7px),radial-gradient(circle at 58% 29%,rgba(255,211,133,.25) 0 .8px,transparent 1.4px),radial-gradient(circle at 67% 81%,rgba(255,133,37,.3) 0 1px,transparent 1.7px),radial-gradient(circle at 76% 43%,rgba(255,189,83,.3) 0 .9px,transparent 1.5px),radial-gradient(circle at 86% 68%,rgba(255,117,28,.35) 0 1px,transparent 1.7px),radial-gradient(circle at 94% 24%,rgba(255,199,102,.27) 0 .8px,transparent 1.4px),radial-gradient(circle at 54% 52%,rgba(255,159,53,.22) 0 .7px,transparent 1.4px);background-size:100% 100%;animation:dust-far 30s linear infinite}

        /* Middle field: larger glowing motes with depth movement. */
        .hero-dust-mid{opacity:.82;background-image:
          radial-gradient(circle at 10% 46%,rgba(255,128,30,.7) 0 1.5px,rgba(255,96,15,.18) 2px,transparent 4px),radial-gradient(circle at 19% 18%,rgba(255,194,83,.62) 0 1.2px,transparent 3.5px),radial-gradient(circle at 29% 69%,rgba(255,111,22,.68) 0 1.6px,rgba(255,76,8,.16) 2.2px,transparent 4px),radial-gradient(circle at 38% 37%,rgba(255,174,57,.62) 0 1.2px,transparent 3.5px),radial-gradient(circle at 47% 79%,rgba(255,104,17,.65) 0 1.5px,rgba(255,75,7,.13) 2px,transparent 4px),radial-gradient(circle at 57% 15%,rgba(255,207,112,.55) 0 1.1px,transparent 3px),radial-gradient(circle at 64% 57%,rgba(255,121,25,.72) 0 1.5px,rgba(255,85,10,.16) 2.2px,transparent 4px),radial-gradient(circle at 73% 31%,rgba(255,182,65,.58) 0 1.3px,transparent 3.4px),radial-gradient(circle at 83% 73%,rgba(255,114,21,.65) 0 1.5px,transparent 4px),radial-gradient(circle at 92% 49%,rgba(255,194,79,.62) 0 1.2px,transparent 3.5px),radial-gradient(circle at 52% 47%,rgba(255,147,38,.4) 0 1px,transparent 3px);animation:dust-mid 18s ease-in-out infinite}

        /* Foreground sparks: sparse, soft, slightly larger. */
        .hero-dust-near{opacity:.9;background-image:
          radial-gradient(circle at 13% 72%,rgba(255,155,43,.95) 0 2px,rgba(255,98,12,.32) 3px,transparent 8px),radial-gradient(circle at 23% 29%,rgba(255,198,83,.9) 0 1.8px,rgba(255,111,17,.22) 3px,transparent 7px),radial-gradient(circle at 34% 57%,rgba(255,126,22,.88) 0 2px,rgba(255,76,8,.25) 3px,transparent 8px),radial-gradient(circle at 44% 20%,rgba(255,183,54,.8) 0 1.6px,rgba(255,94,10,.18) 3px,transparent 7px),radial-gradient(circle at 61% 71%,rgba(255,142,27,.9) 0 2px,rgba(255,83,9,.25) 3px,transparent 8px),radial-gradient(circle at 72% 39%,rgba(255,205,94,.86) 0 1.7px,rgba(255,112,16,.2) 3px,transparent 7px),radial-gradient(circle at 87% 64%,rgba(255,132,24,.88) 0 2px,rgba(255,82,8,.22) 3px,transparent 8px),radial-gradient(circle at 79% 15%,rgba(255,174,48,.75) 0 1.6px,transparent 6px);animation:dust-near 11s ease-in-out infinite}

        /* A few directional ember streaks, intentionally rare. */
        .hero-sparks{position:absolute;inset:0;opacity:.82}
        .hero-sparks:before,.hero-sparks:after{content:"";position:absolute;width:2px;height:2px;border-radius:50%;background:#ffb34e;box-shadow:24vw 12vh 0 0 rgba(255,121,23,.75),38vw 72vh 0 0 rgba(255,170,52,.65),56vw 20vh 0 0 rgba(255,119,20,.72),68vw 67vh 0 0 rgba(255,189,69,.6),81vw 35vh 0 0 rgba(255,120,19,.72),91vw 78vh 0 0 rgba(255,171,43,.62),12vw 43vh 0 0 rgba(255,193,70,.58),31vw 15vh 0 0 rgba(255,116,19,.68);animation:spark-drift 13s linear infinite}
        .hero-sparks:after{width:1px;height:1px;opacity:.7;box-shadow:17vw 21vh 0 rgba(255,205,110,.7),28vw 83vh 0 rgba(255,130,25,.75),46vw 44vh 0 rgba(255,181,57,.7),63vw 9vh 0 rgba(255,119,20,.7),77vw 58vh 0 rgba(255,194,75,.65),95vw 31vh 0 rgba(255,137,27,.7),5vw 78vh 0 rgba(255,181,54,.6);animation:spark-drift-reverse 17s linear infinite}

        .hero-depth-vignette{position:absolute;inset:0;background:radial-gradient(ellipse at 50% 46%,transparent 0 38%,rgba(0,0,0,.12) 61%,rgba(0,0,0,.68) 100%)}
        .hero-grid,.hero-orbit-two,.hero-glow-small,.hero-background-wall,.hero-background-architecture{display:none!important}
        .hero-mascot-frame{background:transparent!important}.hero-mascot-halo{display:none!important}.hero-mascot{z-index:5}
        .hero-orbit-one{z-index:6;border-color:rgba(255,123,18,.9);box-shadow:0 0 6px rgba(255,91,0,.86),0 0 18px rgba(255,91,0,.38),inset 0 0 8px rgba(255,91,0,.2)}
        .hero-glow-main{z-index:5}.hero-copy,.hero-cta,.hero-scroll-cue{z-index:7}

        @keyframes heat-breathe{0%,100%{transform:scale(1) translate3d(-1%,0,0);opacity:.72}50%{transform:scale(1.06) translate3d(2%,-1%,0);opacity:1}}
        @keyframes dust-far{0%{transform:translate3d(0,0,0) scale(1)}50%{transform:translate3d(-1.5%,2%,0) scale(1.015)}100%{transform:translate3d(0,0,0) scale(1)}}
        @keyframes dust-mid{0%,100%{transform:translate3d(0,0,0) scale(1);opacity:.72}50%{transform:translate3d(2%,-2%,0) scale(1.035);opacity:.95}}
        @keyframes dust-near{0%,100%{transform:translate3d(0,0,0) scale(1);opacity:.72}35%{transform:translate3d(-2%,1.5%,0) scale(1.08);opacity:1}70%{transform:translate3d(1%,3%,0) scale(.97);opacity:.8}}
        @keyframes spark-drift{0%{transform:translate3d(-2vw,4vh,0)}50%{transform:translate3d(3vw,-4vh,0)}100%{transform:translate3d(-2vw,4vh,0)}}
        @keyframes spark-drift-reverse{0%{transform:translate3d(2vw,-3vh,0)}50%{transform:translate3d(-3vw,4vh,0)}100%{transform:translate3d(2vw,-3vh,0)}}

        @media(max-width:699px){.hero-heat{filter:blur(28px)}.hero-dust-far{opacity:.56}.hero-dust-mid{opacity:.7}.hero-dust-near{opacity:.82}.hero-mascot{width:min(76vw,23rem)}.hero-orbit-one{width:min(84vw,26rem)}}
        @media(prefers-reduced-motion:reduce){.hero-heat,.hero-dust-far,.hero-dust-mid,.hero-dust-near,.hero-sparks{animation:none}}
      `}</style>

      <div className="hero-depth-scene" aria-hidden="true">
        <div className="hero-ember-space">
          <div className="hero-heat" />
          <div className="hero-dust-far" />
          <div className="hero-dust-mid" />
          <div className="hero-dust-near" />
          <div className="hero-sparks" />
        </div>
        <div className="hero-depth-vignette" />
      </div>

      <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
      <div className="hero-glow hero-glow-main" aria-hidden="true" />
      <div className="hero-shell">
        <div className="hero-mascot" aria-label="Garfilas hero artwork">
          <div className="hero-mascot-frame">
            <img src="/assets/hero/garfilas-hero-final.webp" alt="Garfilas mascot enjoying handmade lasagna" width={1536} height={1024} fetchPriority="high" />
          </div>
        </div>
        <div className="hero-copy"><HeroLogo /></div>
        <HeroCTA />
        <div className="hero-scroll-cue" aria-hidden="true" style={{marginTop:"10px"}}><style>{`.hero-scroll-cue span{transform:rotate(225deg)`}</style><span/><span/><span/></div>
      </div>
    </section>
  );
}
