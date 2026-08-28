import HeroCTA from "./HeroCTA";
import HeroLogo from "./HeroLogo";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <style>{`
        .hero-depth-scene{position:absolute;inset:0;z-index:0;overflow:hidden;pointer-events:none;perspective:1800px;perspective-origin:50% 48%;background:#020202;isolation:isolate}
        .hero-depth-room{position:absolute;inset:-4%;transform-style:preserve-3d;animation:hero-depth-float 14s ease-in-out infinite}
        .hero-depth-void{position:absolute;left:50%;top:45%;width:42vw;height:78vh;transform:translate(-50%,-50%) translateZ(-700px);background:#050505;clip-path:polygon(18% 0,82% 0,100% 100%,0 100%);box-shadow:inset 0 0 110px #000}
        .hero-depth-arch{position:absolute;left:50%;top:46%;width:92vw;height:108vh;transform:translate(-50%,-50%) translateZ(-360px);border-radius:48% 48% 7% 7%;background:#0a0908;box-shadow:inset 0 0 100px rgba(0,0,0,.96),0 30px 100px rgba(0,0,0,.7)}
        .hero-depth-arch:before{content:"";position:absolute;inset:7%;border-radius:inherit;background:#060606;box-shadow:inset 0 0 90px #000}
        .hero-depth-arch-inner{position:absolute;left:50%;top:47%;width:72vw;height:92vh;transform:translate(-50%,-50%) translateZ(-80px);border-radius:45% 45% 5% 5%;background:#0d0c0b;box-shadow:inset 0 0 90px rgba(0,0,0,.94),0 25px 70px rgba(0,0,0,.6)}
        .hero-depth-arch-inner:before{content:"";position:absolute;inset:7%;border-radius:inherit;background:#070706;box-shadow:inset 0 0 80px #000}
        .hero-depth-arch-front{position:absolute;left:50%;top:48%;width:55vw;height:76vh;transform:translate(-50%,-50%) translateZ(170px);border-radius:42% 42% 4% 4%;background:#11100e;box-shadow:inset 0 0 65px rgba(0,0,0,.92),0 18px 55px rgba(0,0,0,.65)}
        .hero-depth-arch-front:before{content:"";position:absolute;inset:8%;border-radius:inherit;background:#080807;box-shadow:inset 0 0 70px #000}
        .hero-depth-side{position:absolute;top:-10%;width:34%;height:120%;background:#070706;box-shadow:inset 0 0 90px rgba(0,0,0,.96)}
        .hero-depth-side.left{left:-16%;transform:rotateY(32deg) translateZ(-180px);transform-origin:right center}
        .hero-depth-side.right{right:-16%;transform:rotateY(-32deg) translateZ(-180px);transform-origin:left center}
        .hero-depth-floor{position:absolute;left:-28%;right:-28%;top:55%;height:70%;transform-origin:50% 0;transform:rotateX(70deg) translateZ(-120px);background:linear-gradient(90deg,#010101,#090908 25%,#0f0e0c 50%,#090908 75%,#010101);box-shadow:inset 0 60px 100px #000}
        .hero-depth-floor:before{content:"";position:absolute;left:20%;right:20%;top:0;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.018),transparent);transform:skewX(-8deg)}
        .hero-depth-vignette{position:absolute;inset:0;background:radial-gradient(ellipse at 50% 46%,transparent 0 34%,rgba(0,0,0,.25) 60%,rgba(0,0,0,.9) 100%)}
        .hero-grid,.hero-orbit-two,.hero-glow-small,.hero-background-wall,.hero-background-architecture{display:none!important}
        .hero-mascot-frame{background:transparent!important}.hero-mascot-halo{display:none!important}.hero-mascot{z-index:3}
        .hero-orbit-one{z-index:4;border-color:rgba(255,123,18,.9);box-shadow:0 0 6px rgba(255,91,0,.86),0 0 18px rgba(255,91,0,.38),inset 0 0 8px rgba(255,91,0,.2)}
        .hero-glow-main{z-index:2}.hero-copy,.hero-cta,.hero-scroll-cue{z-index:5}
        @keyframes hero-depth-float{0%,100%{transform:translate3d(0,0,0) scale(1)}50%{transform:translate3d(0,-3px,6px) scale(1.003)}}
        @media(max-width:699px){.hero-depth-void{width:58vw;height:70vh}.hero-depth-arch{width:150vw;height:105vh}.hero-depth-arch-inner{width:118vw;height:86vh}.hero-depth-arch-front{width:88vw;height:70vh}.hero-depth-side{width:46%}.hero-depth-side.left{left:-27%;transform:rotateY(25deg) translateZ(-120px)}.hero-depth-side.right{right:-27%;transform:rotateY(-25deg) translateZ(-120px)}.hero-depth-floor{left:-55%;right:-55%;top:57%}.hero-mascot{width:min(76vw,23rem)}.hero-orbit-one{width:min(84vw,26rem)}}
        @media(prefers-reduced-motion:reduce){.hero-depth-room{animation:none}}
      `}</style>
      <div className="hero-depth-scene" aria-hidden="true">
        <div className="hero-depth-room">
          <div className="hero-depth-void" />
          <div className="hero-depth-arch" />
          <div className="hero-depth-arch-inner" />
          <div className="hero-depth-arch-front" />
          <div className="hero-depth-side left" />
          <div className="hero-depth-side right" />
          <div className="hero-depth-floor" />
        </div>
        <div className="hero-depth-vignette" />
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
