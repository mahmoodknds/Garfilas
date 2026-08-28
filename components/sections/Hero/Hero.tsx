import HeroCTA from "./HeroCTA";
import HeroLogo from "./HeroLogo";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <style>{`
        .hero-grid,.hero-orbit-two,.hero-glow-small,.hero-background-wall,.hero-background-architecture{display:none!important}
        .hero-oven-scene{position:absolute;inset:0;z-index:0;overflow:hidden;pointer-events:none;perspective:1200px;perspective-origin:50% 38%;background:radial-gradient(ellipse at 50% 42%,rgba(255,84,8,.13),transparent 48%),linear-gradient(#020201 0%,#0b0402 48%,#020201 100%)}
        .hero-oven-room{position:absolute;left:50%;top:32%;width:min(110vw,66rem);height:min(56vh,36rem);transform:translate(-50%,-50%);transform-style:preserve-3d}
        .hero-oven-shell{position:absolute;inset:0;border-radius:45% 45% 5% 5%/30% 30% 5% 5%;background:linear-gradient(90deg,#020201 0%,#321108 10%,#120604 23%,#120604 77%,#321108 90%,#020201 100%);border:1px solid rgba(154,68,22,.5);box-shadow:0 30px 80px rgba(0,0,0,.95),inset 0 0 60px rgba(0,0,0,.95)}
        .hero-oven-cavity{position:absolute;left:13%;right:13%;top:9%;bottom:25%;border-radius:50% 50% 5% 5%/38% 38% 5% 5%;transform:translateZ(35px);background:radial-gradient(ellipse at 50% 55%,#fff3ce 0%,#ffc05b 7%,#ff7618 19%,#a62e06 36%,#3c0e03 55%,#070201 82%);border:8px solid #180a05;box-shadow:inset 0 0 35px rgba(255,91,0,.85),inset 0 -45px 55px rgba(0,0,0,.8),0 0 75px rgba(255,78,0,.25);animation:oven-breathe 4.5s ease-in-out infinite}
        .hero-oven-cavity:before{content:"";position:absolute;inset:6%;border:1px solid rgba(255,188,92,.48);border-radius:inherit;box-shadow:inset 0 0 25px rgba(255,88,0,.35)}
        .hero-oven-inner{position:absolute;left:50%;top:57%;width:44%;height:27%;transform:translate(-50%,-50%) translateZ(15px);border-radius:50%;background:radial-gradient(ellipse,#fff8dc 0%,#ffd078 14%,#ff7414 35%,rgba(255,66,0,.4) 58%,transparent 76%);filter:blur(7px);animation:core-breathe 3.6s ease-in-out infinite}
        .hero-oven-jamb{position:absolute;top:7%;bottom:23%;width:16%;transform:translateZ(65px);border:1px solid rgba(141,62,21,.58);background:linear-gradient(90deg,#020201,#321208 55%,#0a0301);box-shadow:inset 0 0 28px #000,0 0 20px rgba(255,75,0,.08)}
        .hero-oven-jamb-left{left:3%;transform:skewY(-8deg) translateZ(65px);border-radius:16% 0 0 6%}.hero-oven-jamb-right{right:3%;transform:skewY(8deg) translateZ(65px);border-radius:0 16% 6% 0;background:linear-gradient(270deg,#020201,#321208 55%,#0a0301)}
        .hero-oven-top{position:absolute;left:7%;right:7%;top:3%;height:20%;transform:translateZ(70px);border-top:2px solid rgba(148,66,22,.55);border-radius:50% 50% 0 0;background:linear-gradient(#020201,rgba(45,15,5,.8),transparent)}
        .hero-oven-floor{position:absolute;left:-5%;right:-5%;top:55%;height:52%;transform-origin:50% 0;transform:rotateX(68deg) translateZ(10px);background:linear-gradient(to bottom,rgba(255,112,8,.32),rgba(90,26,4,.2) 24%,rgba(0,0,0,.94) 72%),repeating-linear-gradient(90deg,rgba(255,134,23,.045) 0 1px,transparent 1px 52px);border-top:1px solid rgba(255,116,20,.2);box-shadow:0 -20px 45px rgba(255,74,0,.22)}
        .hero-oven-door{position:absolute;left:3%;right:3%;top:57%;height:31%;transform-origin:50% 0;transform:rotateX(76deg) translateZ(78px);border:1px solid rgba(151,66,21,.6);border-radius:12px;background:linear-gradient(#3a1608,#100503 45%,#020201);box-shadow:0 -12px 35px rgba(255,72,0,.24),0 35px 50px rgba(0,0,0,.8);animation:door-open 1.1s cubic-bezier(.18,.82,.2,1) both}
        .hero-oven-door:after{content:"";position:absolute;inset:8px;border:1px solid rgba(188,82,26,.2);border-radius:8px;background:linear-gradient(rgba(255,95,0,.1),transparent 42%)}
        .hero-oven-threshold{position:absolute;left:12%;right:12%;top:55%;height:6px;transform:translateZ(105px);border-radius:50%;background:#ffe4ac;box-shadow:0 0 8px #fff2cf,0 0 28px #ff7817,0 0 60px rgba(255,65,0,.65)}
        .hero-oven-light{position:absolute;left:50%;top:22%;width:90%;height:70%;transform:translate(-50%,-50%) translateZ(110px);background:radial-gradient(ellipse at 50% 48%,rgba(255,220,157,.2),rgba(255,123,16,.14) 25%,transparent 67%);filter:blur(5px);mix-blend-mode:screen;animation:light-breathe 4.2s ease-in-out infinite}
        .hero-oven-heat{position:absolute;left:50%;top:25%;width:65%;height:55%;transform:translateX(-50%) translateZ(125px);background:radial-gradient(ellipse at 35% 60%,rgba(255,201,108,.15),transparent 22%),radial-gradient(ellipse at 65% 54%,rgba(255,116,10,.14),transparent 24%);filter:blur(15px);mix-blend-mode:screen;animation:heat-waver 4.8s ease-in-out infinite}
        .hero-oven-ambient{position:absolute;inset:-15%;background:radial-gradient(ellipse at 50% 38%,rgba(255,89,7,.16),transparent 45%),linear-gradient(to bottom,rgba(0,0,0,.7),transparent 45%,rgba(0,0,0,.9));animation:ambient-breathe 5.8s ease-in-out infinite}
        .hero-oven-vignette{position:absolute;inset:0;background:radial-gradient(ellipse at 50% 35%,transparent 0 35%,rgba(0,0,0,.72) 100%)}
        .hero-mascot{z-index:2;width:min(62vw,32rem);top:25.5%}.hero-mascot-frame{background:transparent!important}.hero-mascot-halo{display:none!important}
        .hero-orbit-one{z-index:3;top:25.5%;width:min(74vw,38rem);border-color:rgba(255,123,18,.9);box-shadow:0 0 6px rgba(255,91,0,.86),0 0 18px rgba(255,91,0,.38),inset 0 0 8px rgba(255,91,0,.2)}
        .hero-glow-main{z-index:1;top:25.5%;width:min(68vw,34rem)}.hero-copy{z-index:4;top:50.5%}.hero-cta{z-index:5;top:75.2%}.hero-scroll-cue{z-index:5;top:82%}
        @keyframes door-open{from{transform:rotateX(42deg) translateY(-3rem) translateZ(15px);opacity:.15}to{transform:rotateX(76deg) translateY(0) translateZ(78px);opacity:1}}@keyframes oven-breathe{0%,100%{filter:brightness(.88);opacity:.86}50%{filter:brightness(1.08);opacity:1}}@keyframes core-breathe{0%,100%{opacity:.7;transform:translate(-50%,-50%) translateZ(15px) scale(.94)}50%{opacity:1;transform:translate(-50%,-50%) translateZ(15px) scale(1.07)}}@keyframes light-breathe{0%,100%{opacity:.5;transform:translate(-50%,-50%) translateZ(110px) scale(.96)}50%{opacity:1;transform:translate(-50%,-50%) translateZ(110px) scale(1.05)}}@keyframes heat-waver{0%,100%{opacity:.3;transform:translateX(-50%) translateZ(125px) skewX(-1deg) scaleX(.96)}50%{opacity:.78;transform:translateX(-50%) translateZ(125px) skewX(1deg) scaleX(1.05)}}@keyframes ambient-breathe{0%,100%{opacity:.7}50%{opacity:1}}
        @media(max-width:699px){.hero-oven-room{top:31%;width:132vw;height:48vh}.hero-oven-cavity{left:14%;right:14%;bottom:25%}.hero-oven-door{left:-2%;right:-2%;height:13rem}.hero-oven-floor{left:-25%;right:-25%;height:52vh}.hero-oven-light{width:115vw}.hero-oven-heat{width:90vw}.hero-mascot{width:min(76vw,23rem);top:25.5%}.hero-orbit-one{top:25.5%;width:min(84vw,26rem)}.hero-glow-main{top:25.5%;width:min(82vw,25rem)}}
        @media(min-width:700px){.hero-mascot{width:min(45vw,29rem);top:29%}.hero-orbit-one{top:29%;width:min(55vw,39rem)}.hero-glow-main{top:29%;width:min(50vw,34rem)}.hero-copy{top:54%}.hero-cta{top:77%}.hero-scroll-cue{top:86%}}
        @media(prefers-reduced-motion:reduce){.hero-oven-door,.hero-oven-cavity,.hero-oven-inner,.hero-oven-light,.hero-oven-heat,.hero-oven-ambient{animation:none}}
      `}</style>

      <div className="hero-oven-scene" aria-hidden="true">
        <div className="hero-oven-ambient" />
        <div className="hero-oven-room">
          <div className="hero-oven-shell" />
          <div className="hero-oven-cavity"><div className="hero-oven-inner" /></div>
          <div className="hero-oven-jamb hero-oven-jamb-left" />
          <div className="hero-oven-jamb hero-oven-jamb-right" />
          <div className="hero-oven-top" />
          <div className="hero-oven-light" />
          <div className="hero-oven-floor" />
          <div className="hero-oven-door" />
          <div className="hero-oven-threshold" />
          <div className="hero-oven-heat" />
        </div>
        <div className="hero-oven-vignette" />
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
