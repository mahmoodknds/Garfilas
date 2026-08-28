import HeroCTA from "./HeroCTA";
import HeroLogo from "./HeroLogo";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <style>{`
        .hero-grid,.hero-orbit-two,.hero-glow-small,.hero-background-wall,.hero-background-architecture{display:none!important}
        .hero-oven-scene{position:absolute;inset:0;z-index:0;overflow:hidden;pointer-events:none;perspective:1400px;perspective-origin:50% 42%;background:radial-gradient(ellipse at 50% 35%,rgba(117,45,12,.18),transparent 42%),linear-gradient(180deg,#020201 0%,#090503 48%,#020201 100%)}
        .hero-oven-room{position:absolute;inset:-8% -10%;transform-style:preserve-3d;transform:translateZ(0)}
        .hero-oven-shell{position:absolute;left:50%;top:34%;width:min(96vw,68rem);height:min(62vh,39rem);transform:translate(-50%,-50%) translateZ(-120px) rotateX(2deg);border:1px solid rgba(157,73,28,.18);border-radius:50% 50% 12% 12%/24% 24% 8% 8%;background:linear-gradient(90deg,rgba(0,0,0,.95),rgba(41,16,7,.48) 18%,rgba(13,6,3,.18) 50%,rgba(41,16,7,.48) 82%,rgba(0,0,0,.95)),linear-gradient(180deg,rgba(38,14,5,.35),rgba(3,2,1,.7));box-shadow:inset 0 0 80px rgba(0,0,0,.9),0 40px 100px rgba(0,0,0,.8)}
        .hero-oven-cavity{position:absolute;left:50%;top:33%;width:min(70vw,48rem);height:min(47vh,29rem);transform:translate(-50%,-50%) translateZ(-35px);border-radius:50%;background:radial-gradient(ellipse at 50% 53%,rgba(255,205,112,.18),rgba(255,113,16,.10) 22%,rgba(90,27,5,.10) 43%,transparent 70%);border:1px solid rgba(176,78,25,.13);box-shadow:inset 0 0 70px rgba(255,91,8,.08),0 0 80px rgba(255,70,0,.07);animation:ambient-depth 7s ease-in-out infinite}
        .hero-oven-cavity:before{content:"";position:absolute;inset:9%;border:1px solid rgba(202,103,42,.10);border-radius:inherit;transform:translateZ(18px);box-shadow:inset 0 0 35px rgba(255,95,10,.08)}
        .hero-oven-jamb{position:absolute;top:7%;width:22%;height:63%;border:1px solid rgba(153,69,27,.12);background:linear-gradient(90deg,rgba(0,0,0,.9),rgba(55,22,8,.18),transparent);filter:blur(.15px);box-shadow:inset 0 0 45px rgba(0,0,0,.8)}
        .hero-oven-jamb-left{left:4%;transform:skewY(-7deg) translateZ(-15px);border-radius:28% 0 0 10%}.hero-oven-jamb-right{right:4%;transform:skewY(7deg) translateZ(-15px) scaleX(-1);border-radius:28% 0 0 10%}
        .hero-oven-top{position:absolute;left:17%;right:17%;top:8%;height:18%;transform:translateZ(-10px);border-top:1px solid rgba(172,79,28,.12);border-radius:50%;background:linear-gradient(180deg,rgba(34,12,4,.18),transparent);box-shadow:0 -20px 45px rgba(0,0,0,.7)}
        .hero-oven-floor{position:absolute;left:-15%;right:-15%;top:54%;height:55%;transform-origin:50% 0;transform:rotateX(67deg) translateZ(-20px);background:linear-gradient(180deg,rgba(122,39,7,.15),rgba(40,12,3,.16) 28%,rgba(0,0,0,.9) 76%),linear-gradient(90deg,transparent 0 15%,rgba(255,113,16,.035) 50%,transparent 85%);border-top:1px solid rgba(176,78,25,.08);box-shadow:0 -25px 60px rgba(255,73,0,.09),inset 0 25px 50px rgba(0,0,0,.65)}
        .hero-oven-door{position:absolute;left:20%;right:20%;top:54%;height:22%;transform-origin:50% 0;transform:rotateX(76deg) translateZ(8px);border-top:1px solid rgba(166,75,26,.10);background:linear-gradient(180deg,rgba(42,14,5,.18),rgba(4,2,1,.78));box-shadow:0 -10px 30px rgba(255,73,0,.08)}
        .hero-oven-threshold{position:absolute;left:29%;right:29%;top:53%;height:2px;transform:translateZ(28px);background:rgba(255,183,91,.32);box-shadow:0 0 12px rgba(255,103,14,.28),0 0 30px rgba(255,73,0,.12)}
        .hero-oven-light{position:absolute;left:50%;top:35%;width:min(72vw,50rem);height:min(65vh,40rem);transform:translate(-50%,-50%) translateZ(30px);background:radial-gradient(ellipse at 50% 45%,rgba(255,214,142,.13),rgba(255,124,21,.10) 24%,rgba(255,67,0,.035) 50%,transparent 72%);filter:blur(10px);mix-blend-mode:screen;animation:light-breathe 6s ease-in-out infinite}
        .hero-oven-heat{position:absolute;left:50%;top:43%;width:min(60vw,42rem);height:min(38vh,24rem);transform:translate(-50%,-50%) translateZ(50px);background:radial-gradient(ellipse at 35% 60%,rgba(255,192,91,.08),transparent 28%),radial-gradient(ellipse at 65% 55%,rgba(255,104,9,.07),transparent 30%);filter:blur(18px);mix-blend-mode:screen;animation:heat-waver 8s ease-in-out infinite}
        .hero-oven-ambient{position:absolute;inset:-20%;background:radial-gradient(ellipse at 50% 38%,rgba(255,89,7,.09),transparent 44%),radial-gradient(ellipse at 50% 68%,rgba(112,34,6,.08),transparent 48%),linear-gradient(180deg,rgba(0,0,0,.74),transparent 40%,rgba(0,0,0,.94));animation:ambient-breathe 9s ease-in-out infinite}
        .hero-oven-vignette{position:absolute;inset:0;background:radial-gradient(ellipse at 50% 38%,transparent 0 32%,rgba(0,0,0,.32) 58%,rgba(0,0,0,.82) 100%)}
        .hero-mascot{z-index:2;width:min(62vw,32rem);top:25.5%}.hero-mascot-frame{background:transparent!important}.hero-mascot-halo{display:none!important}.hero-orbit-one{z-index:3;top:25.5%;width:min(74vw,38rem);border-color:rgba(255,123,18,.9);box-shadow:0 0 6px rgba(255,91,0,.86),0 0 18px rgba(255,91,0,.38),inset 0 0 8px rgba(255,91,0,.2)}.hero-glow-main{z-index:1;top:25.5%;width:min(68vw,34rem)}.hero-copy{z-index:4;top:50.5%}.hero-cta{z-index:5;top:75.2%}.hero-scroll-cue{z-index:5;top:82%}
        @keyframes ambient-depth{0%,100%{transform:translate(-50%,-50%) translateZ(-35px) scale(.98);opacity:.68}50%{transform:translate(-50%,-50%) translateZ(-35px) scale(1.02);opacity:.9}}@keyframes light-breathe{0%,100%{opacity:.55;transform:translate(-50%,-50%) translateZ(30px) scale(.96)}50%{opacity:.9;transform:translate(-50%,-50%) translateZ(30px) scale(1.05)}}@keyframes heat-waver{0%,100%{opacity:.25;transform:translate(-50%,-50%) translateZ(50px) skewX(-1deg) scaleX(.97)}50%{opacity:.7;transform:translate(-50%,-51%) translateZ(50px) skewX(1deg) scaleX(1.04)}}@keyframes ambient-breathe{0%,100%{opacity:.68}50%{opacity:1}}
        @media(max-width:699px){.hero-oven-room{inset:-4% -30%}.hero-oven-shell{top:33%;width:130vw;height:48vh}.hero-oven-cavity{top:34%;width:90vw;height:36vh}.hero-oven-jamb{width:25%;height:54%}.hero-oven-floor{left:-35%;right:-35%;height:46vh}.hero-oven-door{left:8%;right:8%;height:14rem}.hero-oven-light{width:120vw;height:54vh}.hero-oven-heat{width:95vw}.hero-mascot{width:min(76vw,23rem);top:25.5%}.hero-orbit-one{top:25.5%;width:min(84vw,26rem)}.hero-glow-main{top:25.5%;width:min(82vw,25rem)}}
        @media(min-width:700px){.hero-mascot{width:min(45vw,29rem);top:29%}.hero-orbit-one{top:29%;width:min(55vw,39rem)}.hero-glow-main{top:29%;width:min(50vw,34rem)}.hero-copy{top:54%}.hero-cta{top:77%}.hero-scroll-cue{top:86%}}
        @media(prefers-reduced-motion:reduce){.hero-oven-cavity,.hero-oven-light,.hero-oven-heat,.hero-oven-ambient{animation:none}}
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
          <div className="hero-oven-door" />
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
