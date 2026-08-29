import HeroCTA from "./HeroCTA";
import HeroLogo from "./HeroLogo";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <style>{`
        /* Sculptural depth: readable volumes, no decorative lines or glow. */
        .hero-depth-scene{position:absolute;inset:0;z-index:0;overflow:hidden;pointer-events:none;background:#030303;isolation:isolate;perspective:1700px;perspective-origin:50% 44%}
        .hero-depth-room{position:absolute;inset:-3%;transform-style:preserve-3d;animation:depth-drift 18s ease-in-out infinite}

        /* Distant recessed chamber. */
        .hero-depth-core{position:absolute;left:50%;top:42%;width:62vw;max-width:66rem;height:94vh;transform:translate(-50%,-50%) translateZ(-460px);border-radius:44% 44% 10% 10%;background:radial-gradient(ellipse at 50% 30%,#151411 0%,#0c0b0a 42%,#050505 78%,#020202 100%);box-shadow:inset 0 0 120px rgba(0,0,0,.92)}
        .hero-depth-core:before{content:"";position:absolute;inset:10% 12%;border-radius:42% 42% 7% 7%;background:radial-gradient(ellipse at 50% 20%,#10100e 0%,#070706 54%,#020202 100%);box-shadow:inset 0 0 95px rgba(0,0,0,.95)}

        /* Two broad folded foreground planes. Their different tones create depth without outlines. */
        .hero-depth-wing{position:absolute;top:-4%;height:112%;width:48%;backface-visibility:hidden;box-shadow:inset 0 0 120px rgba(0,0,0,.82)}
        .hero-depth-wing-left{left:-16%;transform-origin:100% 50%;transform:rotateY(27deg) translateZ(80px);background:linear-gradient(105deg,#050505 0%,#0b0a09 54%,#161410 100%);clip-path:polygon(0 0,100% 8%,86% 92%,0 100%)}
        .hero-depth-wing-right{right:-16%;transform-origin:0 50%;transform:rotateY(-27deg) translateZ(80px);background:linear-gradient(255deg,#050505 0%,#0b0a09 54%,#161410 100%);clip-path:polygon(0 0,100% 0,100% 100%,14% 92%)}

        /* Secondary planes sit behind the wings and make the room recede instead of looking like a flat frame. */
        .hero-depth-reveal{position:absolute;top:5%;height:100%;width:38%;background:linear-gradient(90deg,#060606,#11100e);box-shadow:inset 0 0 95px rgba(0,0,0,.9)}
        .hero-depth-reveal-left{left:-2%;transform:rotateY(16deg) translateZ(-180px);transform-origin:right center;clip-path:polygon(0 0,100% 12%,86% 100%,0 92%)}
        .hero-depth-reveal-right{right:-2%;transform:rotateY(-16deg) translateZ(-180px);transform-origin:left center;clip-path:polygon(0 12%,100% 0,100% 92%,14% 100%)}

        /* A quiet floor plane grounds the scene without becoming a graphic object. */
        .hero-depth-floor{position:absolute;left:-20%;right:-20%;top:62%;height:58%;transform-origin:50% 0;transform:rotateX(70deg) translateZ(-120px);background:linear-gradient(90deg,#020202 0%,#0a0908 22%,#151310 50%,#0a0908 78%,#020202 100%);box-shadow:inset 0 60px 105px rgba(0,0,0,.92)}

        /* Controlled vignette only. It keeps the center open and preserves the readable side volumes. */
        .hero-depth-vignette{position:absolute;inset:0;background:radial-gradient(ellipse at 50% 43%,transparent 0 38%,rgba(0,0,0,.12) 65%,rgba(0,0,0,.62) 100%)}

        .hero-grid,.hero-orbit-two,.hero-glow-small,.hero-background-wall,.hero-background-architecture{display:none!important}
        .hero-mascot-frame{background:transparent!important}.hero-mascot-halo{display:none!important}.hero-mascot{z-index:3}
        .hero-orbit-one{z-index:4;border-color:rgba(255,123,18,.9);box-shadow:0 0 6px rgba(255,91,0,.86),0 0 18px rgba(255,91,0,.38),inset 0 0 8px rgba(255,91,0,.2)}
        .hero-glow-main{z-index:2}.hero-copy,.hero-cta,.hero-scroll-cue{z-index:5}

        @keyframes depth-drift{0%,100%{transform:translate3d(0,0,0) scale(1)}50%{transform:translate3d(0,-2px,5px) scale(1.002)}}
        @media(max-width:699px){
          .hero-depth-core{width:92vw;height:86vh;top:40%}
          .hero-depth-wing{width:61%;height:106%}
          .hero-depth-wing-left{left:-30%;transform:rotateY(22deg) translateZ(55px)}
          .hero-depth-wing-right{right:-30%;transform:rotateY(-22deg) translateZ(55px)}
          .hero-depth-reveal{width:49%;height:92%}
          .hero-depth-reveal-left{left:-14%;transform:rotateY(13deg) translateZ(-140px)}
          .hero-depth-reveal-right{right:-14%;transform:rotateY(-13deg) translateZ(-140px)}
          .hero-depth-floor{left:-46%;right:-46%;top:64%;height:55%}
          .hero-mascot{width:min(76vw,23rem)}.hero-orbit-one{width:min(84vw,26rem)}
        }
        @media(prefers-reduced-motion:reduce){.hero-depth-room{animation:none}}
      `}</style>

      <div className="hero-depth-scene" aria-hidden="true">
        <div className="hero-depth-room">
          <div className="hero-depth-core" />
          <div className="hero-depth-reveal hero-depth-reveal-left" />
          <div className="hero-depth-reveal hero-depth-reveal-right" />
          <div className="hero-depth-wing hero-depth-wing-left" />
          <div className="hero-depth-wing hero-depth-wing-right" />
          <div className="hero-depth-floor" />
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
        <div className="hero-scroll-cue" aria-hidden="true" style={{marginTop:"10px"}}><style>{`.hero-scroll-cue span{transform:rotate(225deg)}`}</style><span/><span/><span/></div>
      </div>
    </section>
  );
}
