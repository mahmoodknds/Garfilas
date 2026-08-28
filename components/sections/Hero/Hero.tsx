import HeroCTA from "./HeroCTA";
import HeroLogo from "./HeroLogo";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <style>{`
        /* Foreground calibration remains protected. Background is rebuilt as a 3D oven scene. */
        .hero-grid,.hero-orbit-two,.hero-glow-small,.hero-background-wall,.hero-background-architecture{display:none!important}

        .hero-oven-scene{
          position:absolute;
          inset:0;
          z-index:0;
          overflow:hidden;
          pointer-events:none;
          perspective:1100px;
          perspective-origin:50% 30%;
          background:#040302;
        }
        .hero-oven-ambient{
          position:absolute;
          inset:-12%;
          background:
            radial-gradient(ellipse at 50% 23%,rgba(255,91,12,.20) 0%,rgba(255,69,0,.09) 20%,transparent 43%),
            radial-gradient(ellipse at 50% 54%,rgba(130,43,8,.12) 0%,transparent 48%),
            linear-gradient(to bottom,#020201 0%,#080503 42%,#030201 100%);
          animation:oven-ambient-breathe 5.8s ease-in-out infinite;
        }
        .hero-oven-architecture{
          position:absolute;
          left:50%;
          top:23%;
          width:min(122vw,72rem);
          height:min(44vh,28rem);
          transform:translate(-50%,-50%) translateZ(-90px) scale(.96);
          opacity:.24;
          filter:blur(.15px) drop-shadow(0 0 8px rgba(255,82,0,.12));
        }
        .hero-oven-architecture::before,
        .hero-oven-architecture::after{
          content:"";
          position:absolute;
          top:16%;
          width:24%;
          height:70%;
          border:1px solid rgba(170,74,24,.26);
        }
        .hero-oven-architecture::before{
          left:-2%;
          border-right:0;
          border-radius:72% 0 0 0;
          transform:perspective(500px) rotateY(14deg);
        }
        .hero-oven-architecture::after{
          right:-2%;
          border-left:0;
          border-radius:0 72% 0 0;
          transform:perspective(500px) rotateY(-14deg);
        }
        .hero-oven-room{
          position:absolute;
          left:50%;
          top:25%;
          width:min(92vw,48rem);
          height:min(44vh,27rem);
          transform:translate(-50%,-50%) translateZ(0);
          transform-style:preserve-3d;
        }
        .hero-oven-cavity{
          position:absolute;
          left:50%;
          top:50%;
          width:72%;
          height:78%;
          transform:translate(-50%,-50%) translateZ(-12px);
          border-radius:48% 48% 8% 8% / 36% 36% 8% 8%;
          background:
            radial-gradient(ellipse at 50% 58%,rgba(255,196,100,.98) 0%,rgba(255,119,13,.82) 16%,rgba(171,49,3,.58) 35%,rgba(34,10,2,.92) 64%,#030201 100%);
          box-shadow:
            0 0 30px rgba(255,91,0,.24),
            0 0 90px rgba(255,74,0,.16),
            inset 0 0 42px rgba(0,0,0,.82),
            inset 0 -18px 30px rgba(0,0,0,.78);
          animation:oven-fire-breathe 4.6s ease-in-out infinite;
        }
        .hero-oven-cavity::before{
          content:"";
          position:absolute;
          inset:7% 9% 10%;
          border-radius:inherit;
          border:1px solid rgba(255,164,60,.34);
          box-shadow:inset 0 0 24px rgba(255,95,0,.25);
        }
        .hero-oven-inner{
          position:absolute;
          left:50%;
          top:55%;
          width:55%;
          height:36%;
          transform:translate(-50%,-50%) translateZ(4px);
          border-radius:50%;
          background:radial-gradient(ellipse,rgba(255,230,168,.98) 0%,rgba(255,144,22,.72) 18%,rgba(103,27,2,.38) 48%,transparent 72%);
          filter:blur(5px);
          animation:oven-fire-breathe 3.9s ease-in-out .25s infinite reverse;
        }
        .hero-oven-jamb{
          position:absolute;
          top:8%;
          width:15%;
          height:78%;
          border:1px solid rgba(117,54,23,.55);
          background:linear-gradient(90deg,rgba(0,0,0,.92),rgba(55,22,8,.72),rgba(8,4,2,.96));
          box-shadow:inset 0 0 18px rgba(0,0,0,.9),0 0 12px rgba(255,74,0,.07);
        }
        .hero-oven-jamb-left{
          left:8%;
          transform:skewY(-8deg) translateZ(18px);
          border-radius:18% 0 0 8%;
        }
        .hero-oven-jamb-right{
          right:8%;
          transform:skewY(8deg) translateZ(18px);
          border-radius:0 18% 8% 0;
        }
        .hero-oven-top{
          position:absolute;
          left:12%;
          right:12%;
          top:7%;
          height:16%;
          border-top:1px solid rgba(124,55,22,.56);
          border-radius:50% 50% 0 0;
          background:linear-gradient(to bottom,rgba(3,2,1,.96),rgba(34,13,5,.62),transparent);
          box-shadow:0 -7px 22px rgba(0,0,0,.72);
          transform:translateZ(22px);
        }
        .hero-oven-light{
          position:absolute;
          left:50%;
          top:31%;
          width:min(72vw,36rem);
          height:min(55vh,34rem);
          transform:translate(-50%,-10%) translateZ(30px) rotateX(4deg);
          background:radial-gradient(ellipse at 50% 18%,rgba(255,190,84,.28) 0%,rgba(255,103,0,.13) 24%,rgba(255,66,0,.04) 47%,transparent 70%);
          filter:blur(2px);
          mix-blend-mode:screen;
          animation:oven-light-pulse 4.2s ease-in-out infinite;
        }
        .hero-oven-floor{
          position:absolute;
          left:50%;
          top:43%;
          width:min(118vw,64rem);
          height:min(52vh,32rem);
          transform:translateX(-50%) rotateX(67deg) translateZ(-8px);
          transform-origin:50% 0;
          background:
            linear-gradient(to bottom,rgba(255,104,8,.19),rgba(49,17,5,.13) 28%,rgba(0,0,0,.72) 100%),
            repeating-linear-gradient(90deg,rgba(255,119,20,.045) 0 1px,transparent 1px 52px),
            linear-gradient(to bottom,#321207,#070302 68%);
          box-shadow:0 -15px 35px rgba(255,76,0,.13),inset 0 24px 35px rgba(0,0,0,.62);
        }
        .hero-oven-door{
          position:absolute;
          left:50%;
          top:51%;
          width:min(92vw,48rem);
          height:min(27vh,14rem);
          transform-origin:50% 0;
          transform:translateX(-50%) rotateX(72deg) translateZ(26px);
          border:1px solid rgba(123,57,24,.56);
          border-radius:10px 10px 4px 4px;
          background:linear-gradient(to bottom,rgba(30,11,4,.86),rgba(4,2,1,.98));
          box-shadow:0 -4px 22px rgba(255,74,0,.13),inset 0 5px 15px rgba(255,121,24,.08),0 16px 34px rgba(0,0,0,.54);
          animation:oven-door-open .95s cubic-bezier(.2,.8,.2,1) both;
        }
        .hero-oven-door::before{
          content:"";
          position:absolute;
          inset:8px;
          border:1px solid rgba(164,76,25,.22);
          border-radius:6px;
          background:linear-gradient(to bottom,rgba(255,83,0,.08),transparent 40%);
        }
        .hero-oven-threshold{
          position:absolute;
          left:50%;
          top:50%;
          width:min(76vw,39rem);
          height:1.1rem;
          transform:translateX(-50%) translateZ(34px);
          border-radius:50%;
          background:linear-gradient(90deg,transparent,rgba(255,147,43,.55),rgba(255,202,110,.72),rgba(255,147,43,.55),transparent);
          box-shadow:0 0 13px rgba(255,91,0,.5),0 0 32px rgba(255,73,0,.22);
        }
        .hero-oven-heat{
          position:absolute;
          left:50%;
          top:34%;
          width:min(62vw,31rem);
          height:40%;
          transform:translateX(-50%) translateZ(38px);
          background:
            radial-gradient(ellipse at 36% 60%,rgba(255,177,67,.13),transparent 20%),
            radial-gradient(ellipse at 64% 50%,rgba(255,122,14,.10),transparent 22%),
            radial-gradient(ellipse at 50% 30%,rgba(255,212,124,.08),transparent 28%);
          filter:blur(11px);
          animation:oven-heat-waver 4.8s ease-in-out infinite;
        }
        .hero-oven-vignette{
          position:absolute;
          inset:0;
          background:radial-gradient(ellipse at 50% 27%,transparent 0%,rgba(0,0,0,.06) 38%,rgba(0,0,0,.60) 100%);
        }

        /* Existing foreground calibration remains unchanged. */
        .hero-mascot{width:min(62vw,32rem);top:25.5%}
        .hero-mascot-halo{display:none!important}
        .hero-orbit-one{top:25.5%;width:min(74vw,38rem);border-color:rgba(255,123,18,.9);box-shadow:0 0 6px rgba(255,91,0,.86),0 0 18px rgba(255,91,0,.38),inset 0 0 8px rgba(255,91,0,.2)}
        .hero-glow-main{top:25.5%;width:min(68vw,34rem)}
        .hero-copy{top:50.5%}
        .hero-cta{top:75.2%}
        .hero-scroll-cue{top:82%}

        @keyframes oven-door-open{
          from{transform:translateX(-50%) rotateX(38deg) translateY(-2.5rem) translateZ(8px);opacity:.2}
          to{transform:translateX(-50%) rotateX(72deg) translateY(0) translateZ(26px);opacity:1}
        }
        @keyframes oven-ambient-breathe{0%,100%{opacity:.78}50%{opacity:1}}
        @keyframes oven-fire-breathe{0%,100%{filter:brightness(.88);opacity:.82}50%{filter:brightness(1.08);opacity:1}}
        @keyframes oven-light-pulse{0%,100%{opacity:.58;transform:translate(-50%,-10%) translateZ(30px) rotateX(4deg) scale(.97)}50%{opacity:.94;transform:translate(-50%,-10%) translateZ(30px) rotateX(4deg) scale(1.035)}}
        @keyframes oven-heat-waver{0%,100%{opacity:.48;transform:translateX(-50%) translateZ(38px) skewX(-1deg) scaleX(.96)}50%{opacity:.82;transform:translateX(-50%) translateZ(38px) skewX(1deg) scaleX(1.03)}}

        @media(max-width:699px){
          .hero-oven-room{top:25.5%;width:112vw;height:42vh}
          .hero-oven-cavity{width:70%;height:74%}
          .hero-oven-jamb{width:16%;height:74%;top:10%}
          .hero-oven-jamb-left{left:7%}
          .hero-oven-jamb-right{right:7%}
          .hero-oven-door{width:102vw;height:12rem;top:50%}
          .hero-oven-threshold{width:80vw}
          .hero-oven-light{top:30%;width:86vw;height:48vh}
          .hero-oven-floor{width:145vw;height:50vh}
          .hero-oven-architecture{top:24%;width:140vw;opacity:.18}
          .hero-mascot{width:min(76vw,23rem);top:25.5%}
          .hero-orbit-one{top:25.5%;width:min(84vw,26rem)}
          .hero-glow-main{top:25.5%;width:min(82vw,25rem)}
          .hero-copy{top:50.8%}
          .hero-cta{top:74.8%}
          .hero-scroll-cue{top:81.8%}
        }

        @media(min-width:700px){
          .hero-mascot{width:min(45vw,29rem);top:29%}
          .hero-orbit-one{top:29%;width:min(55vw,39rem)}
          .hero-glow-main{top:29%;width:min(50vw,34rem)}
          .hero-copy{top:54%}
          .hero-cta{top:77%}
          .hero-scroll-cue{top:86%}
        }

        @media(prefers-reduced-motion:reduce){
          .hero-oven-door,.hero-oven-ambient,.hero-oven-cavity,.hero-oven-inner,.hero-oven-light,.hero-oven-heat{animation:none}
        }
      `}</style>

      <div className="hero-oven-scene" aria-hidden="true">
        <div className="hero-oven-ambient" />
        <div className="hero-oven-architecture" />
        <div className="hero-oven-room">
          <div className="hero-oven-cavity" />
          <div className="hero-oven-inner" />
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
