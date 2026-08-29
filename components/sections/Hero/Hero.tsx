import HeroCTA from "./HeroCTA";
import HeroLogo from "./HeroLogo";

const farParticles = Array.from({ length: 70 }, (_, i) => ({
  x: (i * 47 + 13) % 100,
  y: (i * 71 + 9) % 100,
  size: 1 + (i % 3) * 0.35,
  opacity: 0.22 + (i % 5) * 0.07,
  delay: (i * 0.83) % 12,
}));

const midParticles = Array.from({ length: 46 }, (_, i) => ({
  x: (i * 61 + 7) % 100,
  y: (i * 37 + 17) % 100,
  size: 1.2 + (i % 4) * 0.55,
  opacity: 0.38 + (i % 4) * 0.09,
  delay: (i * 0.61) % 9,
}));

const nearParticles = Array.from({ length: 24 }, (_, i) => ({
  x: (i * 73 + 19) % 100,
  y: (i * 43 + 11) % 100,
  size: 2 + (i % 4) * 0.8,
  opacity: 0.55 + (i % 4) * 0.09,
  delay: (i * 0.47) % 7,
}));

const emberStreaks = Array.from({ length: 13 }, (_, i) => ({
  x: (i * 79 + 8) % 100,
  y: (i * 53 + 14) % 100,
  length: 8 + (i % 5) * 4,
  rotate: -55 + (i % 6) * 7,
  delay: (i * 0.73) % 8,
}));

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <style>{`
        /* Garfilas hero: warm atmospheric space, now with a dense multi-depth ember field. */
        .hero-depth-scene{position:absolute;inset:0;z-index:0;overflow:hidden;pointer-events:none;isolation:isolate;background:#030201}
        .hero-ember-space{position:absolute;inset:0;overflow:hidden;background:
          radial-gradient(ellipse at 50% 48%,rgba(73,31,9,.30) 0%,rgba(30,12,4,.18) 30%,rgba(4,3,2,0) 68%),
          radial-gradient(ellipse at 18% 70%,rgba(93,38,8,.15),transparent 38%),
          radial-gradient(ellipse at 84% 30%,rgba(104,43,8,.13),transparent 35%),#030201}
        .hero-heat{position:absolute;inset:-20%;background:
          radial-gradient(ellipse at 42% 44%,rgba(255,102,20,.11),transparent 24%),
          radial-gradient(ellipse at 67% 62%,rgba(255,72,10,.08),transparent 22%),
          radial-gradient(ellipse at 25% 28%,rgba(255,150,45,.05),transparent 20%);
          filter:blur(34px);animation:heat-breathe 9s ease-in-out infinite;transform:translateZ(0)}

        .hero-particle-field{position:absolute;inset:-3%;overflow:hidden;transform:translateZ(0)}
        .hero-particle{position:absolute;display:block;border-radius:999px;will-change:transform,opacity;mix-blend-mode:screen}
        .hero-particle-far{background:rgba(255,183,78,.72);box-shadow:0 0 5px rgba(255,151,40,.25);animation:particle-far 18s ease-in-out infinite}
        .hero-particle-mid{background:rgba(255,157,45,.88);box-shadow:0 0 7px rgba(255,113,20,.32),0 0 14px rgba(255,87,10,.11);animation:particle-mid 11s ease-in-out infinite}
        .hero-particle-near{background:rgba(255,188,73,.96);box-shadow:0 0 8px rgba(255,133,26,.52),0 0 22px rgba(255,83,8,.18);animation:particle-near 7s ease-in-out infinite}
        .hero-particle-hot{background:#ffd58a;box-shadow:0 0 5px rgba(255,210,123,.95),0 0 15px rgba(255,120,22,.7),0 0 30px rgba(255,69,7,.22);animation:particle-hot 4.2s ease-in-out infinite}

        /* Keep the center readable for Garfield while making the outer field much richer. */
        .hero-particle-field:after{content:"";position:absolute;left:28%;right:28%;top:17%;bottom:14%;background:radial-gradient(ellipse at center,rgba(3,2,1,.32) 0%,rgba(3,2,1,.08) 48%,transparent 75%);filter:blur(18px)}

        .hero-ember-streak{position:absolute;height:1px;border-radius:999px;transform-origin:left center;background:linear-gradient(90deg,transparent,rgba(255,180,68,.9),rgba(255,105,16,.18));box-shadow:0 0 7px rgba(255,104,16,.42);opacity:.7;animation:ember-flight 6s ease-in-out infinite}
        .hero-ember-streak:after{content:"";position:absolute;right:0;top:-1px;width:3px;height:3px;border-radius:50%;background:#ffd27e;box-shadow:0 0 7px #ff9b31}

        /* Rare hot motes create small visual surprises instead of a uniform particle texture. */
        .hero-hotspot{position:absolute;width:3px;height:3px;border-radius:50%;background:#ffe0a3;box-shadow:0 0 8px #ffc267,0 0 22px rgba(255,105,12,.75),0 0 42px rgba(255,60,4,.22);animation:hotspot-pulse 3.7s ease-in-out infinite}
        .hero-hotspot.a{left:14%;top:24%;animation-delay:-1.1s}.hero-hotspot.b{left:82%;top:22%;animation-delay:-2.5s}.hero-hotspot.c{left:8%;top:67%;animation-delay:-.6s}.hero-hotspot.d{left:91%;top:64%;animation-delay:-3.1s}.hero-hotspot.e{left:73%;top:11%;animation-delay:-1.8s}.hero-hotspot.f{left:27%;top:82%;animation-delay:-2.9s}

        .hero-depth-vignette{position:absolute;inset:0;background:radial-gradient(ellipse at 50% 46%,transparent 0 38%,rgba(0,0,0,.10) 61%,rgba(0,0,0,.66) 100%)}
        .hero-grid,.hero-orbit-two,.hero-glow-small,.hero-background-wall,.hero-background-architecture{display:none!important}
        .hero-mascot-frame{background:transparent!important}.hero-mascot-halo{display:none!important}.hero-mascot{z-index:5}
        .hero-orbit-one{z-index:6;border-color:rgba(255,123,18,.9);box-shadow:0 0 6px rgba(255,91,0,.86),0 0 18px rgba(255,91,0,.38),inset 0 0 8px rgba(255,91,0,.2)}
        .hero-glow-main{z-index:5}.hero-copy,.hero-cta,.hero-scroll-cue{z-index:7}

        @keyframes heat-breathe{0%,100%{transform:scale(1) translate3d(-1%,0,0);opacity:.72}50%{transform:scale(1.06) translate3d(2%,-1%,0);opacity:1}}
        @keyframes particle-far{0%,100%{transform:translate3d(0,0,0);opacity:.45}50%{transform:translate3d(-1vw,-2vh,0);opacity:1}}
        @keyframes particle-mid{0%,100%{transform:translate3d(0,0,0) scale(1);opacity:.55}35%{transform:translate3d(1.5vw,-2vh,0) scale(1.18);opacity:1}70%{transform:translate3d(-1vw,1.5vh,0) scale(.9);opacity:.7}}
        @keyframes particle-near{0%,100%{transform:translate3d(0,0,0) scale(1);opacity:.58}40%{transform:translate3d(-2.5vw,2vh,0) scale(1.25);opacity:1}75%{transform:translate3d(1.5vw,-2.5vh,0) scale(.85);opacity:.7}}
        @keyframes particle-hot{0%,100%{transform:translate3d(0,0,0) scale(.7);opacity:.3}30%{transform:translate3d(-1vw,-2vh,0) scale(1.8);opacity:1}65%{transform:translate3d(1.4vw,1vh,0) scale(.9);opacity:.5}}
        @keyframes ember-flight{0%,100%{transform:translate3d(0,0,0) rotate(var(--ember-rotate)) scaleX(.72);opacity:0}18%{opacity:.85}52%{transform:translate3d(3vw,-4vh,0) rotate(var(--ember-rotate)) scaleX(1);opacity:.65}82%{opacity:.1}}
        @keyframes hotspot-pulse{0%,100%{transform:scale(.5);opacity:.25}45%{transform:scale(1.7);opacity:1}60%{transform:scale(.8);opacity:.45}}

        @media(max-width:699px){
          .hero-heat{filter:blur(28px)}.hero-particle-far{opacity:.7}.hero-particle-mid{opacity:.8}.hero-particle-near{opacity:.9}.hero-particle-field:after{left:18%;right:18%}.hero-ember-streak{opacity:.55}.hero-mascot{width:min(76vw,23rem)}.hero-orbit-one{width:min(84vw,26rem)}
        }
        @media(prefers-reduced-motion:reduce){.hero-heat,.hero-particle,.hero-ember-streak,.hero-hotspot{animation:none}}
      `}</style>

      <div className="hero-depth-scene" aria-hidden="true">
        <div className="hero-ember-space">
          <div className="hero-heat" />
          <div className="hero-particle-field">
            {farParticles.map((p, i) => <i key={`far-${i}`} className="hero-particle hero-particle-far" style={{left:`${p.x}%`,top:`${p.y}%`,width:`${p.size}px`,height:`${p.size}px`,opacity:p.opacity,animationDelay:`-${p.delay}s`}} />)}
            {midParticles.map((p, i) => <i key={`mid-${i}`} className={`hero-particle hero-particle-mid${i % 13 === 0 ? " hero-particle-hot" : ""}`} style={{left:`${p.x}%`,top:`${p.y}%`,width:`${p.size}px`,height:`${p.size}px`,opacity:p.opacity,animationDelay:`-${p.delay}s`}} />)}
            {nearParticles.map((p, i) => <i key={`near-${i}`} className="hero-particle hero-particle-near" style={{left:`${p.x}%`,top:`${p.y}%`,width:`${p.size}px`,height:`${p.size}px`,opacity:p.opacity,animationDelay:`-${p.delay}s`}} />)}
            {emberStreaks.map((p, i) => <i key={`ember-${i}`} className="hero-ember-streak" style={{left:`${p.x}%`,top:`${p.y}%`,width:`${p.length}px`,transform:`rotate(${p.rotate}deg)`,animationDelay:`-${p.delay}s`,`--ember-rotate`:`${p.rotate}deg`} as React.CSSProperties} />)}
            <i className="hero-hotspot a"/><i className="hero-hotspot b"/><i className="hero-hotspot c"/><i className="hero-hotspot d"/><i className="hero-hotspot e"/><i className="hero-hotspot f"/>
          </div>
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
