import HeroCTA from "./HeroCTA";
import HeroLogo from "./HeroLogo";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <style>{`
        /* Quiet architectural volume. The background should be felt, not read as decoration. */
        .hero-depth-scene{position:absolute;inset:0;z-index:0;overflow:hidden;pointer-events:none;perspective:2200px;perspective-origin:50% 44%;background:#020202;isolation:isolate}
        .hero-depth-room{position:absolute;inset:0;transform-style:preserve-3d;animation:depth-settle 18s ease-in-out infinite}
        .hero-depth-back{position:absolute;left:50%;top:43%;width:36vw;max-width:42rem;height:78vh;transform:translate(-50%,-50%) translateZ(-720px);background:#080807;border-radius:18% 18% 4% 4%;box-shadow:inset 0 0 130px rgba(0,0,0,.96),0 0 80px rgba(0,0,0,.8)}
        .hero-depth-back:before{content:"";position:absolute;inset:8% 10%;background:#060605;border-radius:16% 16% 3% 3%;box-shadow:inset 0 0 90px rgba(0,0,0,.95)}
        .hero-depth-left,.hero-depth-right{position:absolute;top:-16%;width:54%;height:132%;background:linear-gradient(100deg,#010101 0%,#060605 55%,#0a0908 100%);box-shadow:inset 0 0 100px rgba(0,0,0,.95),0 0 90px rgba(0,0,0,.7);backface-visibility:hidden}
        .hero-depth-left{left:-31%;transform-origin:100% 50%;transform:rotateY(28deg) translateZ(-130px);border-radius:0 3% 3% 0}
        .hero-depth-right{right:-31%;transform-origin:0 50%;transform:rotateY(-28deg) translateZ(-130px);border-radius:3% 0 0 3%}
        .hero-depth-left:after,.hero-depth-right:after{content:"";position:absolute;top:5%;bottom:5%;width:2px;background:linear-gradient(180deg,transparent 0 12%,rgba(255,255,255,.025) 40%,transparent 88%);opacity:.7}
        .hero-depth-left:after{right:8%}.hero-depth-right:after{left:8%}
        .hero-depth-ceiling{position:absolute;left:-25%;right:-25%;top:-18%;height:55%;transform-origin:50% 100%;transform:rotateX(-62deg) translateZ(-190px);background:linear-gradient(180deg,#020202,#080807 70%,#050504);box-shadow:inset 0 -80px 100px rgba(0,0,0,.92)}
        .hero-depth-floor{position:absolute;left:-34%;right:-34%;top:55%;height:72%;transform-origin:50% 0;transform:rotateX(72deg) translateZ(-150px);background:linear-gradient(90deg,#010101 0%,#070706 24%,#0b0a09 50%,#070706 76%,#010101 100%);box-shadow:inset 0 60px 110px rgba(0,0,0,.95),0 -18px 50px rgba(0,0,0,.6)}
        .hero-depth-floor:after{content:"";position:absolute;left:35%;right:35%;top:0;bottom:0;background:linear-gradient(90deg,transparent,rgba(255,255,255,.012),transparent);filter:blur(12px)}
        .hero-depth-vignette{position:absolute;inset:0;background:radial-gradient(ellipse at 50% 42%,transparent 0 37%,rgba(0,0,0,.3) 66%,rgba(0,0,0,.88) 100%)}
        .hero-grid,.hero-orbit-two,.hero-glow-small,.hero-background-wall,.hero-background-architecture{display:none!important}
        .hero-mascot-frame{background:transparent!important}.hero-mascot-halo{display:none!important}.hero-mascot{z-index:3}
        .hero-orbit-one{z-index:4;border-color:rgba(255,123,18,.9);box-shadow:0 0 6px rgba(255,91,0,.86),0 0 18px rgba(255,91,0,.38),inset 0 0 8px rgba(255,91,0,.2)}
        .hero-glow-main{z-index:2}.hero-copy,.hero-cta,.hero-scroll-cue{z-index:5}
        @keyframes depth-settle{0%,100%{transform:translateZ(0) scale(1)}50%{transform:translateZ(5px) scale(1.002)}}
        @media(max-width:699px){
          .hero-depth-back{width:54vw;height:70vh;top:42%}
          .hero-depth-left,.hero-depth-right{width:68%}
          .hero-depth-left{left:-46%;transform:rotateY(24deg) translateZ(-100px)}
          .hero-depth-right{right:-46%;transform:rotateY(-24deg) translateZ(-100px)}
          .hero-depth-floor{left:-56%;right:-56%;top:56%;height:68%}
          .hero-depth-ceiling{left:-45%;right:-45%;height:46%}
          .hero-mascot{width:min(76vw,23rem)}.hero-orbit-one{width:min(84vw,26rem)}
        }
        @media(prefers-reduced-motion:reduce){.hero-depth-room{animation:none}}
      `}</style>

      <div className="hero-depth-scene" aria-hidden="true">
        <div className="hero-depth-room">
          <div className="hero-depth-back" />
          <div className="hero-depth-left" />
          <div className="hero-depth-right" />
          <div className="hero-depth-ceiling" />
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
        <div className="hero-scroll-cue" aria-hidden="true" style={{marginTop:"10px"}}>
          <style>{`.hero-scroll-cue span{transform:rotate(225deg)}`}</style><span/><span/><span/>
        </div>
      </div>
    </section>
  );
}
