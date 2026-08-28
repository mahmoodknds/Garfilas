import HeroCTA from "./HeroCTA";
import HeroLogo from "./HeroLogo";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <style>{`
        /* Foreground remains protected. This layer is the environmental oven scene. */
        .hero-grid,
        .hero-orbit-two,
        .hero-glow-small,
        .hero-background-wall,
        .hero-background-architecture {
          display: none !important;
        }

        .hero-oven-scene {
          position: absolute;
          inset: 0;
          z-index: 0;
          overflow: hidden;
          pointer-events: none;
          perspective: 1400px;
          perspective-origin: 50% 31%;
          background:
            radial-gradient(ellipse at 50% 30%, rgba(87, 28, 5, .18), transparent 42%),
            linear-gradient(to bottom, #020201 0%, #090503 43%, #020201 100%);
        }

        .hero-oven-ambient {
          position: absolute;
          inset: -10%;
          background:
            radial-gradient(ellipse at 50% 25%, rgba(255, 103, 18, .20) 0%, rgba(255, 67, 0, .10) 18%, transparent 43%),
            radial-gradient(ellipse at 50% 55%, rgba(120, 35, 5, .14) 0%, transparent 48%),
            linear-gradient(to bottom, rgba(0,0,0,.72), rgba(21,8,2,.30) 42%, rgba(0,0,0,.88) 82%);
          animation: oven-ambient-breathe 5.8s ease-in-out infinite;
        }

        .hero-oven-architecture {
          position: absolute;
          left: 50%;
          top: 28%;
          width: min(132vw, 76rem);
          height: min(47vh, 30rem);
          transform: translate(-50%, -50%) translateZ(-180px) scale(.94);
          opacity: .20;
          filter: blur(.25px) drop-shadow(0 0 10px rgba(255, 75, 0, .10));
        }

        .hero-oven-architecture::before,
        .hero-oven-architecture::after {
          content: "";
          position: absolute;
          top: 16%;
          width: 25%;
          height: 70%;
          border: 1px solid rgba(170, 74, 24, .26);
        }

        .hero-oven-architecture::before {
          left: -1%;
          border-right: 0;
          border-radius: 72% 0 0 0;
          transform: perspective(650px) rotateY(16deg);
        }

        .hero-oven-architecture::after {
          right: -1%;
          border-left: 0;
          border-radius: 0 72% 0 0;
          transform: perspective(650px) rotateY(-16deg);
        }

        .hero-oven-room {
          position: absolute;
          left: 50%;
          top: 26%;
          width: min(108vw, 58rem);
          height: min(50vh, 31rem);
          transform: translate(-50%, -50%) translateZ(0);
          transform-style: preserve-3d;
        }

        .hero-oven-shell {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 88%;
          height: 91%;
          transform: translate(-50%, -50%) translateZ(-40px);
          border-radius: 48% 48% 7% 7% / 34% 34% 7% 7%;
          background:
            linear-gradient(90deg, rgba(0,0,0,.96), rgba(48,17,5,.74) 8%, rgba(15,5,2,.28) 20%, rgba(15,5,2,.28) 80%, rgba(48,17,5,.74) 92%, rgba(0,0,0,.96)),
            linear-gradient(to bottom, #080302, #1b0802 52%, #040201);
          border: 1px solid rgba(129, 58, 21, .38);
          box-shadow:
            0 20px 55px rgba(0,0,0,.70),
            0 0 42px rgba(255,73,0,.10),
            inset 0 0 42px rgba(0,0,0,.90);
        }

        .hero-oven-cavity {
          position: absolute;
          left: 50%;
          top: 48%;
          width: 77%;
          height: 83%;
          transform: translate(-50%, -50%) translateZ(-22px);
          border-radius: 50% 50% 8% 8% / 38% 38% 8% 8%;
          background:
            radial-gradient(ellipse at 50% 56%,
              rgba(255, 227, 170, .98) 0%,
              rgba(255, 178, 58, .94) 10%,
              rgba(255, 93, 5, .78) 24%,
              rgba(105, 28, 2, .72) 43%,
              rgba(24, 7, 2, .94) 68%,
              #020101 100%);
          border: 2px solid rgba(126, 54, 17, .72);
          box-shadow:
            0 0 28px rgba(255, 89, 0, .32),
            0 0 90px rgba(255, 73, 0, .22),
            inset 0 0 38px rgba(255, 91, 0, .18),
            inset 0 -30px 42px rgba(0,0,0,.76);
          animation: oven-fire-breathe 4.8s ease-in-out infinite;
        }

        .hero-oven-cavity::before {
          content: "";
          position: absolute;
          inset: 5.5% 7%;
          border-radius: inherit;
          border: 1px solid rgba(255, 180, 75, .46);
          box-shadow:
            inset 0 0 22px rgba(255, 97, 0, .30),
            0 0 10px rgba(255, 108, 0, .12);
        }

        .hero-oven-cavity::after {
          content: "";
          position: absolute;
          left: 11%;
          right: 11%;
          bottom: 12%;
          height: 17%;
          border-radius: 50%;
          background: radial-gradient(ellipse at 50% 20%, rgba(255, 222, 155, .72), rgba(255, 111, 10, .28) 34%, transparent 72%);
          filter: blur(4px);
        }

        .hero-oven-inner {
          position: absolute;
          left: 50%;
          top: 55%;
          width: 48%;
          height: 29%;
          transform: translate(-50%, -50%) translateZ(6px);
          border-radius: 50%;
          background: radial-gradient(ellipse,
            rgba(255, 241, 201, 1) 0%,
            rgba(255, 184, 52, .94) 15%,
            rgba(255, 94, 3, .52) 42%,
            transparent 74%);
          filter: blur(6px);
          animation: oven-fire-core 3.8s ease-in-out infinite;
        }

        .hero-oven-jamb {
          position: absolute;
          top: 6%;
          width: 17%;
          height: 82%;
          border: 1px solid rgba(127, 56, 21, .62);
          background: linear-gradient(90deg, rgba(0,0,0,.98) 0%, rgba(21,7,2,.94) 35%, rgba(72,27,7,.70) 74%, rgba(8,3,1,.98) 100%);
          box-shadow:
            inset 0 0 25px rgba(0,0,0,.92),
            inset 0 0 8px rgba(255,84,0,.10),
            0 0 18px rgba(255,73,0,.08);
        }

        .hero-oven-jamb-left {
          left: 3.5%;
          transform: skewY(-9deg) translateZ(42px);
          border-radius: 18% 0 0 8%;
        }

        .hero-oven-jamb-right {
          right: 3.5%;
          transform: skewY(9deg) translateZ(42px);
          border-radius: 0 18% 8% 0;
          background: linear-gradient(270deg, rgba(0,0,0,.98) 0%, rgba(21,7,2,.94) 35%, rgba(72,27,7,.70) 74%, rgba(8,3,1,.98) 100%);
        }

        .hero-oven-top {
          position: absolute;
          left: 7%;
          right: 7%;
          top: 4%;
          height: 20%;
          transform: translateZ(50px);
          border-top: 2px solid rgba(137, 61, 21, .62);
          border-radius: 50% 50% 0 0;
          background: linear-gradient(to bottom, rgba(0,0,0,.98), rgba(39,13,4,.70) 55%, transparent);
          box-shadow:
            0 -8px 25px rgba(0,0,0,.78),
            inset 0 -12px 18px rgba(255,78,0,.06);
        }

        .hero-oven-ceiling-light {
          position: absolute;
          left: 50%;
          top: 13%;
          width: 72%;
          height: 38%;
          transform: translate(-50%, -50%) translateZ(10px);
          border-radius: 50%;
          background: radial-gradient(ellipse, rgba(255,183,73,.26), rgba(255,89,0,.10) 35%, transparent 70%);
          filter: blur(8px);
        }

        .hero-oven-light {
          position: absolute;
          left: 50%;
          top: 31%;
          width: min(92vw, 48rem);
          height: min(58vh, 36rem);
          transform: translate(-50%, -8%) translateZ(60px);
          background: radial-gradient(ellipse at 50% 19%, rgba(255,232,180,.30) 0%, rgba(255,151,36,.24) 13%, rgba(255,84,0,.12) 31%, rgba(255,62,0,.035) 54%, transparent 72%);
          filter: blur(2px);
          mix-blend-mode: screen;
          animation: oven-light-pulse 4.2s ease-in-out infinite;
        }

        .hero-oven-floor {
          position: absolute;
          left: 50%;
          top: 52%;
          width: min(128vw, 70rem);
          height: min(48vh, 30rem);
          transform: translateX(-50%) rotateX(68deg) translateZ(-10px);
          transform-origin: 50% 0;
          background:
            linear-gradient(to bottom, rgba(255,112,10,.24), rgba(83,25,4,.18) 22%, rgba(0,0,0,.88) 76%),
            repeating-linear-gradient(90deg, rgba(255,132,22,.055) 0 1px, transparent 1px 48px),
            linear-gradient(to bottom, #321107, #050201 72%);
          border-top: 1px solid rgba(255,107,13,.20);
          box-shadow:
            0 -18px 40px rgba(255,76,0,.18),
            inset 0 25px 35px rgba(0,0,0,.68);
        }

        .hero-oven-door {
          position: absolute;
          left: 50%;
          top: 52%;
          width: min(106vw, 56rem);
          height: min(29vh, 15rem);
          transform-origin: 50% 0;
          transform: translateX(-50%) rotateX(78deg) translateZ(48px);
          border: 1px solid rgba(133,59,21,.64);
          border-radius: 13px 13px 5px 5px;
          background: linear-gradient(to bottom, rgba(42,15,4,.92), rgba(9,3,1,.98) 70%, rgba(0,0,0,.99));
          box-shadow:
            0 -5px 25px rgba(255,76,0,.18),
            inset 0 6px 18px rgba(255,122,22,.10),
            0 22px 40px rgba(0,0,0,.68);
          animation: oven-door-open 1.15s cubic-bezier(.18,.82,.20,1) both;
        }

        .hero-oven-door::before {
          content: "";
          position: absolute;
          inset: 8px;
          border: 1px solid rgba(171,77,25,.24);
          border-radius: 8px;
          background:
            linear-gradient(to bottom, rgba(255,93,0,.10), transparent 42%),
            repeating-linear-gradient(90deg, rgba(255,126,18,.035) 0 1px, transparent 1px 40px);
        }

        .hero-oven-threshold {
          position: absolute;
          left: 50%;
          top: 50%;
          width: min(84vw, 44rem);
          height: 1.15rem;
          transform: translateX(-50%) translateZ(66px);
          border-radius: 50%;
          background: linear-gradient(90deg, transparent, rgba(255,126,20,.45) 15%, rgba(255,223,155,.94) 50%, rgba(255,126,20,.45) 85%, transparent);
          box-shadow:
            0 0 12px rgba(255,91,0,.60),
            0 0 34px rgba(255,73,0,.28);
        }

        .hero-oven-heat {
          position: absolute;
          left: 50%;
          top: 31%;
          width: min(74vw, 38rem);
          height: 46%;
          transform: translateX(-50%) translateZ(82px);
          background:
            radial-gradient(ellipse at 36% 58%, rgba(255,194,91,.17), transparent 20%),
            radial-gradient(ellipse at 65% 52%, rgba(255,120,13,.14), transparent 22%),
            radial-gradient(ellipse at 50% 27%, rgba(255,229,164,.11), transparent 28%);
          filter: blur(13px);
          mix-blend-mode: screen;
          animation: oven-heat-waver 4.8s ease-in-out infinite;
        }

        .hero-oven-vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 50% 28%, transparent 0%, rgba(0,0,0,.04) 34%, rgba(0,0,0,.72) 100%);
        }

        /* Existing foreground calibration remains unchanged. */
        .hero-mascot { width: min(62vw,32rem); top: 25.5%; }
        .hero-mascot-halo { display: none !important; }
        .hero-orbit-one {
          top: 25.5%;
          width: min(74vw,38rem);
          border-color: rgba(255,123,18,.9);
          box-shadow: 0 0 6px rgba(255,91,0,.86), 0 0 18px rgba(255,91,0,.38), inset 0 0 8px rgba(255,91,0,.2);
        }
        .hero-glow-main { top: 25.5%; width: min(68vw,34rem); }
        .hero-copy { top: 50.5%; }
        .hero-cta { top: 75.2%; }
        .hero-scroll-cue { top: 82%; }

        @keyframes oven-door-open {
          from { transform: translateX(-50%) rotateX(42deg) translateY(-3.5rem) translateZ(8px); opacity: .12; }
          62% { opacity: 1; }
          to { transform: translateX(-50%) rotateX(78deg) translateY(0) translateZ(48px); opacity: 1; }
        }
        @keyframes oven-ambient-breathe { 0%,100% { opacity:.72; } 50% { opacity:1; } }
        @keyframes oven-fire-breathe { 0%,100% { filter:brightness(.86) saturate(.94); opacity:.82; } 50% { filter:brightness(1.08) saturate(1.05); opacity:1; } }
        @keyframes oven-fire-core { 0%,100% { opacity:.72; transform:translate(-50%,-50%) translateZ(6px) scale(.94); } 50% { opacity:1; transform:translate(-50%,-50%) translateZ(6px) scale(1.06); } }
        @keyframes oven-light-pulse { 0%,100% { opacity:.58; transform:translate(-50%,-8%) translateZ(60px) scale(.97); } 50% { opacity:.96; transform:translate(-50%,-8%) translateZ(60px) scale(1.035); } }
        @keyframes oven-heat-waver { 0%,100% { opacity:.34; transform:translateX(-50%) translateZ(82px) skewX(-1deg) scaleX(.96); } 50% { opacity:.78; transform:translateX(-50%) translateZ(82px) skewX(1deg) scaleX(1.04); } }

        @media (max-width:699px) {
          .hero-oven-room { top:25.5%; width:126vw; height:45vh; }
          .hero-oven-shell { width:89%; height:88%; }
          .hero-oven-cavity { width:77%; height:79%; }
          .hero-oven-jamb { width:17%; height:79%; top:7%; }
          .hero-oven-jamb-left { left:3%; }
          .hero-oven-jamb-right { right:3%; }
          .hero-oven-door { width:114vw; height:12rem; top:51%; }
          .hero-oven-threshold { width:90vw; }
          .hero-oven-light { top:30%; width:96vw; height:50vh; }
          .hero-oven-floor { width:158vw; height:48vh; }
          .hero-oven-architecture { top:27%; width:148vw; opacity:.16; }
          .hero-mascot { width:min(76vw,23rem); top:25.5%; }
          .hero-orbit-one { top:25.5%; width:min(84vw,26rem); }
          .hero-glow-main { top:25.5%; width:min(82vw,25rem); }
          .hero-copy { top:50.8%; }
          .hero-cta { top:74.8%; }
          .hero-scroll-cue { top:81.8%; }
        }

        @media (min-width:700px) {
          .hero-mascot { width:min(45vw,29rem); top:29%; }
          .hero-orbit-one { top:29%; width:min(55vw,39rem); }
          .hero-glow-main { top:29%; width:min(50vw,34rem); }
          .hero-copy { top:54%; }
          .hero-cta { top:77%; }
          .hero-scroll-cue { top:86%; }
        }

        @media (prefers-reduced-motion:reduce) {
          .hero-oven-door,
          .hero-oven-ambient,
          .hero-oven-cavity,
          .hero-oven-inner,
          .hero-oven-light,
          .hero-oven-heat { animation:none; }
        }
      `}</style>

      <div className="hero-oven-scene" aria-hidden="true">
        <div className="hero-oven-ambient" />
        <div className="hero-oven-architecture" />
        <div className="hero-oven-room">
          <div className="hero-oven-shell" />
          <div className="hero-oven-cavity" />
          <div className="hero-oven-inner" />
          <div className="hero-oven-jamb hero-oven-jamb-left" />
          <div className="hero-oven-jamb hero-oven-jamb-right" />
          <div className="hero-oven-top" />
          <div className="hero-oven-ceiling-light" />
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
    </section>
  );
}
