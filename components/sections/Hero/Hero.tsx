import HeroCTA from "./HeroCTA";
import HeroLogo from "./HeroLogo";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <style>{`
        .hero-grid,.hero-orbit-two,.hero-glow-small,.hero-background-wall,.hero-background-architecture{display:none!important}
        .hero-oven-scene{position:absolute;inset:0;z-index:0;overflow:hidden;pointer-events:none;perspective:1800px;perspective-origin:50% 42%;background:#030303;isolation:isolate}
        .hero-oven-room{position:absolute;inset:0;transform-style:preserve-3d;animation:depth-breathe 16s ease-in-out infinite}
        .hero-oven-shell{position:absolute;inset:-12% -10%;transform:translateZ(-620px);background:#050504;box-shadow:inset 0 0 180px rgba(0,0,0,.95)}
        .hero-oven-cavity{position:absolute;left:50%;top:42%;width:78vw;max-width:88rem;height:88vh;transform:translate(-50%,-50%) translateZ(-420px);background:#080807;clip-path:polygon(20% 0,80% 0,100% 100%,0 100%);border:1px solid rgba(255,255,255,.035);box-shadow:inset 0 0 120px rgba(0,0,0,.95)}
        .hero-oven-cavity:before{content:"";position:absolute;left:11%;right:11%;top:9%;bottom:7%;clip-path:polygon(15% 0,85% 0,100% 100%,0 100%);border:1px solid rgba(255,255,255,.03);box-shadow:inset 0 0 100px rgba(0,0,0,.9)}
        .hero-oven-jamb{position:absolute;top:-8%;height:116%;width:19%;background:linear-gradient(90deg,#010101,#0e0d0b 55%,#040403);border:1px solid rgba(255,255,255,.035);box-shadow:0 0 90px rgba(0,0,0,.95);transform-style:preserve-3d}
        .hero-oven-jamb-left{left:-3%;transform:skewY(-10deg) rotateY(32deg) translateZ(-230px)}
        .hero-oven-jamb-right{right:-3%;transform:skewY(10deg) rotateY(-32deg) translateZ(-230px)}
        .hero-oven-top{position:absolute;left:14%;right:14%;top:1%;height:23%;transform:translateZ(-300px);border-top:1px solid rgba(255,255,255,.045);border-radius:50%;background:linear-gradient(#0d0c0a,transparent);box-shadow:inset 0 -40px 80px rgba(0,0,0,.8)}
        .hero-oven-floor{position:absolute;left:-25%;right:-25%;top:53%;height:82%;transform-origin:50% 0;transform:perspective(1100px) rotateX(72deg) translateZ(-260px);background:linear-gradient(90deg,#020202,#0b0a08 18%,#12110e 50%,#0b0a08 82%,#020202);border-top:1px solid rgba(255,255,255,.055);box-shadow:inset 0 55px 100px rgba(0,0,0,.9)}
        .hero-oven-floor:after{content:"";position:absolute;inset:0;background:repeating-linear-gradient(90deg,transparent 0 14%,rgba(255,255,255,.022) 14.08%,transparent 14.2% 28%);opacity:.28}
        .hero-oven-door,.hero-oven-threshold,.hero-oven-light,.hero-oven-heat,.hero-oven-ambient{display:none!important}
        .hero-oven-vignette{position:absolute;inset:0;background:radial-gradient(ellipse at 50% 42%,transparent 0 34%,rgba(0,0,0,.3) 62%,rgba(0,0,0,.9) 100%)}
        .hero-mascot-frame{background:transparent!important}.hero-mascot-halo{display:none!important}.hero-mascot{z-index:3}.hero-orbit-one{z-index:4;border-color:rgba(255,123,18,.9);box-shadow:0 0 6px rgba(255,91,0,.86),0 0 18px rgba(255,91,0,.38),inset 0 0 8px rgba(255,91,0,.2)}.hero-glow-main{z-index:2}.hero-copy,.hero-cta,.hero-scroll-cue{z-index:5}
        @keyframes depth-breathe{0%,100%{transform:translateZ(0) scale(1)}50%{transform:translateZ(12px) scale(1.006)}}
        @media(max-width:699px){.hero-oven-cavity{width:125vw;height:78vh}.hero-oven-jamb{width:24%}.hero-oven-floor{left:-42%;right:-42%;top:55%}.hero-mascot{width:min(76vw,23rem)}.hero-orbit-one{width:min(84vw,26rem)}}
        @media(prefers-reduced-motion:reduce){.hero-oven-room{animation:none}}
      `}</style>
      <div className="hero-oven-scene" aria-hidden="true">
        <div className="hero-oven-room">
          <div className="hero-oven-shell" />
          <div className="hero-oven-cavity" />
          <div className="hero-oven-jamb hero-oven-jamb-left" />
          <div className="hero-oven-jamb hero-oven-jamb-right" />
          <div className="hero-oven-top" />
          <div className="hero-oven-floor" />
        </div>
        <div className="hero-oven-vignette" />
      </div>
      <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
      <div className="hero-glow hero-glow-main" aria-hidden="true" />
      <div className="hero-shell">
        <div className="hero-mascot" aria-label="Garfilas hero artwork"><div className="hero-mascot-frame"><img src="/assets/hero/garfilas-hero-final.webp" alt="Garfilas mascot enjoying handmade lasagna" width={1536} height={1024} fetchPriority="high" /></div></div>
        <div className="hero-copy"><HeroLogo /></div>
        <HeroCTA />
        <div className="hero-scroll-cue" aria-hidden="true" style={{marginTop:"10px"}}><style>{`.hero-scroll-cue span{transform:rotate(225deg)}`}</style><span/><span/><span/></div>
      </div>
    </section>
  );
}
