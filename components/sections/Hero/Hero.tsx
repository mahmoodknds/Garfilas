import HeroCTA from "./HeroCTA";
import HeroLogo from "./HeroLogo";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <style>{`
        /* Temporary luxury background: deliberately quiet, deep and premium. */
        .hero-oven-scene{position:absolute;inset:0;z-index:0;overflow:hidden;pointer-events:none;background:#030201;isolation:isolate}
        .hero-oven-room{position:absolute;inset:0;overflow:hidden;transform-style:preserve-3d}
        .hero-oven-shell{position:absolute;left:50%;top:39%;width:74vw;max-width:72rem;height:62vh;transform:translate(-50%,-50%) translateZ(-180px);border-radius:50%;background:radial-gradient(ellipse at center,rgba(101,36,8,.15) 0%,rgba(42,13,4,.08) 34%,transparent 66%);filter:blur(1px);box-shadow:inset 0 0 90px rgba(0,0,0,.82),0 0 120px rgba(255,71,5,.035);animation:luxury-breathe 10s ease-in-out infinite}
        .hero-oven-cavity{position:absolute;left:50%;top:40%;width:min(62vw,54rem);height:min(48vh,31rem);transform:translate(-50%,-50%) translateZ(-80px);border-radius:50%;background:radial-gradient(ellipse at 50% 52%,rgba(255,184,84,.13),rgba(255,94,8,.055) 22%,transparent 64%);box-shadow:inset 0 0 90px rgba(255,81,7,.035);animation:luxury-float 12s ease-in-out infinite}
        .hero-oven-cavity:before{content:"";position:absolute;inset:18%;border:1px solid rgba(255,154,70,.035);border-radius:50%;transform:rotateX(2deg);box-shadow:0 0 45px rgba(255,90,8,.025)}
        .hero-oven-jamb{position:absolute;top:13%;width:13%;height:57%;opacity:.16;filter:blur(2px);background:linear-gradient(90deg,transparent,rgba(103,42,14,.22),transparent)}
        .hero-oven-jamb-left{left:4%;transform:skewY(-9deg) translateZ(-130px)}
        .hero-oven-jamb-right{right:4%;transform:skewY(9deg) translateZ(-130px)}
        .hero-oven-top{position:absolute;left:23%;right:23%;top:11%;height:18%;border-top:1px solid rgba(179,91,37,.035);border-radius:50%;transform:translateZ(-120px);box-shadow:0 -20px 50px rgba(0,0,0,.55)}
        .hero-oven-floor{position:absolute;left:-12%;right:-12%;top:61%;height:50%;transform-origin:50% 0;transform:perspective(900px) rotateX(69deg) translateZ(-90px);background:radial-gradient(ellipse at 50% 0%,rgba(255,105,12,.055),transparent 48%),linear-gradient(180deg,rgba(37,11,3,.16),rgba(0,0,0,.82) 70%);border-top:1px solid rgba(177,83,30,.035);box-shadow:0 -22px 70px rgba(255,72,4,.035)}
        .hero-oven-door{display:none}
        .hero-oven-threshold{position:absolute;left:37%;right:37%;top:58%;height:1px;transform:translateZ(-20px);background:rgba(255,183,91,.12);box-shadow:0 0 18px rgba(255,94,8,.08)}
        .hero-oven-light{position:absolute;left:50%;top:39%;width:min(68vw,60rem);height:min(62vh,40rem);transform:translate(-50%,-50%) translateZ(40px);background:radial-gradient(ellipse at 50% 48%,rgba(255,206,130,.085),rgba(255,103,11,.055) 22%,rgba(255,67,0,.018) 48%,transparent 72%);filter:blur(18px);mix-blend-mode:screen;animation:light-breathe 8s ease-in-out infinite}
        .hero-oven-heat{position:absolute;left:50%;top:51%;width:min(52vw,42rem);height:min(32vh,22rem);transform:translate(-50%,-50%) translateZ(70px);background:radial-gradient(ellipse,rgba(255,179,80,.055),transparent 62%);filter:blur(24px);mix-blend-mode:screen;animation:heat-drift 11s ease-in-out infinite}
        .hero-oven-ambient{position:absolute;inset:0;background:radial-gradient(ellipse at 50% 38%,rgba(109,42,10,.09),transparent 38%),radial-gradient(ellipse at 50% 65%,rgba(64,20,5,.06),transparent 50%);animation:ambient-breathe 12s ease-in-out infinite}
        .hero-oven-vignette{position:absolute;inset:0;background:radial-gradient(ellipse at 50% 38%,transparent 0 38%,rgba(0,0,0,.32) 68%,rgba(0,0,0,.8) 100%)}
        .hero-grid,.hero-orbit-two,.hero-glow-small,.hero-background-wall,.hero-background-architecture{display:none!important}
        .hero-mascot-frame{background:transparent!important}
        .hero-mascot-halo{display:none!important}
        .hero-mascot{z-index:2}
        .hero-orbit-one{z-index:3;border-color:rgba(255,123,18,.9);box-shadow:0 0 6px rgba(255,91,0,.86),0 0 18px rgba(255,91,0,.38),inset 0 0 8px rgba(255,91,0,.2)}
        .hero-glow-main{z-index:1}
        .hero-copy,.hero-cta,.hero-scroll-cue{z-index:4}
        @keyframes luxury-breathe{0%,100%{opacity:.55;transform:translate(-50%,-50%) translateZ(-180px) scale(.985)}50%{opacity:.8;transform:translate(-50%,-50%) translateZ(-180px) scale(1.015)}}
        @keyframes luxury-float{0%,100%{transform:translate(-50%,-50%) translateZ(-80px) scale(.98)}50%{transform:translate(-50%,-51%) translateZ(-80px) scale(1.02)}}
        @keyframes light-breathe{0%,100%{opacity:.42;transform:translate(-50%,-50%) translateZ(40px) scale(.97)}50%{opacity:.75;transform:translate(-50%,-50%) translateZ(40px) scale(1.035)}}
        @keyframes heat-drift{0%,100%{opacity:.3;transform:translate(-50%,-50%) translateZ(70px) translateX(-1%) scaleX(.97)}50%{opacity:.62;transform:translate(-50%,-51%) translateZ(70px) translateX(1%) scaleX(1.03)}}
        @keyframes ambient-breathe{0%,100%{opacity:.62}50%{opacity:.9}}
        @media(max-width:699px){.hero-oven-shell{width:125vw;height:52vh;top:39%}.hero-oven-cavity{width:94vw;height:38vh;top:40%}.hero-oven-jamb{width:17%;height:52%}.hero-oven-floor{left:-35%;right:-35%;top:59%}.hero-oven-light{width:125vw;height:52vh}.hero-oven-heat{width:100vw}.hero-orbit-one{width:min(84vw,26rem)}}
        @media(prefers-reduced-motion:reduce){.hero-oven-shell,.hero-oven-cavity,.hero-oven-light,.hero-oven-heat,.hero-oven-ambient{animation:none}}
      `}</style>
      <div className="hero-oven-scene" aria-hidden="true">
        <div className="hero-oven-ambient" />
        <div className="hero-oven-room">
          <div className="hero-oven-shell" />
          <div className="hero-oven-cavity" />
          <div className="hero-oven-jamb hero-oven-jamb-left" />
          <div className="hero-oven-jamb hero-oven-jamb-right" />
          <div className="hero-oven-top" />
          <div className="hero-oven-light" />
          <div className="hero-oven-floor" />
          <div className="hero-oven-threshold" />
          <div className="hero-oven-heat" />
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
