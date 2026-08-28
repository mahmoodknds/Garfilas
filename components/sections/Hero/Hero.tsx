import HeroCTA from "./HeroCTA";
import HeroLogo from "./HeroLogo";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <style>{`
        /* Sculptural 3D background: large forms, deep perspective, restrained detail. */
        .hero-depth-scene{position:absolute;inset:0;z-index:0;overflow:hidden;pointer-events:none;perspective:2000px;perspective-origin:50% 45%;background:#030303;isolation:isolate}
        .hero-depth-room{position:absolute;inset:0;transform-style:preserve-3d;animation:depth-drift 18s ease-in-out infinite}
        .hero-depth-shell{position:absolute;left:50%;top:43%;width:96vw;height:112vh;transform:translate(-50%,-50%) translateZ(-520px);border-radius:48% 48% 8% 8%;background:#090807;box-shadow:inset 0 0 150px rgba(0,0,0,.92),0 35px 100px rgba(0,0,0,.72)}
        .hero-depth-shell:before{content:"";position:absolute;left:7%;right:7%;top:5%;bottom:4%;border-radius:45% 45% 7% 7%;background:#060606;box-shadow:inset 0 0 110px rgba(0,0,0,.96)}
        .hero-depth-rib{position:absolute;left:50%;top:45%;width:76vw;height:100vh;transform:translate(-50%,-50%) translateZ(-250px);border-radius:43% 43% 7% 7%;border:clamp(22px,2.4vw,42px) solid #11100e;background:transparent;box-shadow:inset 0 0 45px rgba(0,0,0,.9),0 28px 80px rgba(0,0,0,.72)}
        .hero-depth-rib:after{content:"";position:absolute;inset:clamp(10px,1vw,18px);border-radius:inherit;border:1px solid rgba(255,255,255,.035)}
        .hero-depth-rib-2{width:61vw;height:86vh;transform:translate(-50%,-50%) translateZ(-20px);border-width:clamp(16px,1.8vw,32px);border-color:#0d0c0a}
        .hero-depth-rib-3{width:47vw;height:72vh;transform:translate(-50%,-50%) translateZ(180px);border-width:clamp(12px,1.3vw,24px);border-color:#0a0908}
        .hero-depth-inner{position:absolute;left:50%;top:45%;width:34vw;height:60vh;transform:translate(-50%,-50%) translateZ(330px);border-radius:46% 46% 6% 6%;background:#040404;box-shadow:inset 0 0 90px rgba(0,0,0,.98),0 0 55px rgba(0,0,0,.8)}
        .hero-depth-inner:after{content:"";position:absolute;left:10%;right:10%;top:9%;bottom:6%;border-radius:42% 42% 5% 5%;border:1px solid rgba(255,255,255,.025)}
        .hero-depth-side{position:absolute;top:-15%;height:130%;width:29%;background:linear-gradient(90deg,#010101 0%,#080706 74%,#11100e 100%);box-shadow:inset 0 0 100px rgba(0,0,0,.94);transform-style:preserve-3d}
        .hero-depth-side-left{left:-10%;transform-origin:100% 50%;transform:skewY(-3deg) rotateY(37deg) translateZ(-180px);border-radius:0 5% 5% 0}
        .hero-depth-side-right{right:-10%;transform-origin:0 50%;transform:skewY(3deg) rotateY(-37deg) translateZ(-180px);border-radius:5% 0 0 5%}
        .hero-depth-side:after{content:"";position:absolute;top:8%;bottom:8%;right:8%;width:1px;background:linear-gradient(180deg,transparent,rgba(255,255,255,.035),transparent)}
        .hero-depth-side-right:after{right:auto;left:8%}
        .hero-depth-floor{position:absolute;left:-30%;right:-30%;top:55%;height:75%;transform-origin:50% 0;transform:rotateX(72deg) translateZ(-130px);background:linear-gradient(90deg,#010101 0%,#070706 24%,#0e0d0b 50%,#070706 76%,#010101 100%);box-shadow:inset 0 55px 120px rgba(0,0,0,.96),0 -22px 55px rgba(0,0,0,.75)}
        .hero-depth-floor:before{content:"";position:absolute;left:31%;right:31%;top:0;height:100%;border-left:1px solid rgba(255,255,255,.025);border-right:1px solid rgba(255,255,255,.025);transform:perspective(1000px) rotateX(-1deg)}
        .hero-depth-vignette{position:absolute;inset:0;background:radial-gradient(ellipse at 50% 44%,transparent 0 38%,rgba(0,0,0,.28) 68%,rgba(0,0,0,.88) 100%)}
        .hero-grid,.hero-orbit-two,.hero-glow-small,.hero-background-wall,.hero-background-architecture{display:none!important}
        .hero-mascot-frame{background:transparent!important}.hero-mascot-halo{display:none!important}.hero-mascot{z-index:3}
        .hero-orbit-one{z-index:4;border-color:rgba(255,123,18,.9);box-shadow:0 0 6px rgba(255,91,0,.86),0 0 18px rgba(255,91,0,.38),inset 0 0 8px rgba(255,91,0,.2)}
        .hero-glow-main{z-index:2}.hero-copy,.hero-cta,.hero-scroll-cue{z-index:5}
        @keyframes depth-drift{0%,100%{transform:translate3d(0,0,0) scale(1)}50%{transform:translate3d(0,-3px,7px) scale(1.003)}}
        @media(max-width:699px){
          .hero-depth-shell{width:150vw;height:108vh;top:43%}
          .hero-depth-rib{width:116vw;height:88vh;top:44%;border-width:20px}
          .hero-depth-rib-2{width:96vw;height:76vh;border-width:15px}
          .hero-depth-rib-3{width:75vw;height:64vh;border-width:11px}
          .hero-depth-inner{width:55vw;height:55vh}
          .hero-depth-side{width:40%}.hero-depth-side-left{left:-18%;transform:skewY(-3deg) rotateY(30deg) translateZ(-120px)}.hero-depth-side-right{right:-18%;transform:skewY(3deg) rotateY(-30deg) translateZ(-120px)}
          .hero-depth-floor{left:-54%;right:-54%;top:57%;height:66%}
          .hero-mascot{width:min(76vw,23rem)}.hero-orbit-one{width:min(84vw,26rem)}
        }
        @media(prefers-reduced-motion:reduce){.hero-depth-room{animation:none}}
      `}</style>

      <div className="hero-depth-scene" aria-hidden="true">
        <div className="hero-depth-room">
          <div className="hero-depth-shell" />
          <div className="hero-depth-side hero-depth-side-left" />
          <div className="hero-depth-side hero-depth-side-right" />
          <div className="hero-depth-rib" />
          <div className="hero-depth-rib hero-depth-rib-2" />
          <div className="hero-depth-rib hero-depth-rib-3" />
          <div className="hero-depth-inner" />
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
