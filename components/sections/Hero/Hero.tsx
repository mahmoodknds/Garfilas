import HeroCTA from "./HeroCTA";
import HeroLogo from "./HeroLogo";

type Particle = { x: number; y: number; size: number; opacity: number; delay: number; drift: number };

const makeParticles = (count: number, seed: number, sizeBase: number, opacityBase: number): Particle[] =>
  Array.from({ length: count }, (_, i) => ({
    x: (i * (37 + seed) + 11 * seed) % 100,
    y: (i * (61 + seed) + 7 * seed) % 100,
    size: sizeBase + ((i * 17 + seed) % 9) * 0.28,
    opacity: opacityBase + ((i * 13 + seed) % 6) * 0.07,
    delay: ((i * 0.43 + seed) % 14),
    drift: 0.4 + ((i * 19 + seed) % 10) / 10,
  }));

const farParticles = makeParticles(150, 3, 0.8, 0.26);
const midParticles = makeParticles(100, 7, 1.2, 0.42);
const nearParticles = makeParticles(45, 11, 1.8, 0.62);
const emberStreaks = Array.from({ length: 22 }, (_, i) => ({
  x: (i * 43 + 9) % 100,
  y: (i * 67 + 13) % 100,
  length: 7 + (i % 6) * 4,
  rotate: -55 + (i % 7) * 8,
  delay: (i * 0.71) % 10,
}));

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <style>{`
        .hero-depth-scene{position:absolute;inset:0;z-index:0;overflow:hidden;pointer-events:none;isolation:isolate;background:#030201}
        .hero-ember-space{position:absolute;inset:0;overflow:hidden;background:
          radial-gradient(ellipse at 50% 48%,rgba(92,38,7,.42) 0%,rgba(43,15,3,.25) 27%,rgba(5,3,1,0) 68%),
          radial-gradient(ellipse at 15% 68%,rgba(132,48,5,.18),transparent 34%),
          radial-gradient(ellipse at 86% 28%,rgba(120,43,4,.17),transparent 34%),#030201}
        .hero-heat{position:absolute;inset:-24%;background:
          radial-gradient(ellipse at 38% 43%,rgba(255,91,12,.16),transparent 23%),
          radial-gradient(ellipse at 69% 60%,rgba(255,68,6,.12),transparent 22%),
          radial-gradient(ellipse at 21% 27%,rgba(255,151,40,.08),transparent 19%);
          filter:blur(38px);animation:heat-breathe 8s ease-in-out infinite}
        .hero-particle-field{position:absolute;inset:-4%;overflow:hidden}
        .hero-particle{position:absolute;display:block;border-radius:50%;will-change:transform,opacity;mix-blend-mode:screen}
        .hero-particle-far{background:rgba(255,184,82,.82);box-shadow:0 0 4px rgba(255,147,34,.3);animation:particle-far 15s ease-in-out infinite}
        .hero-particle-mid{background:rgba(255,157,43,.94);box-shadow:0 0 8px rgba(255,111,18,.38),0 0 18px rgba(255,75,5,.13);animation:particle-mid 9s ease-in-out infinite}
        .hero-particle-near{background:rgba(255,192,78,1);box-shadow:0 0 9px rgba(255,137,26,.62),0 0 26px rgba(255,76,6,.23);animation:particle-near 6s ease-in-out infinite}
        .hero-particle-hot{background:#ffe0a0;box-shadow:0 0 7px rgba(255,219,137,1),0 0 18px rgba(255,117,15,.82),0 0 36px rgba(255,54,3,.3);animation:particle-hot 3.6s ease-in-out infinite}
        .hero-ember-streak{position:absolute;height:1.5px;border-radius:999px;transform-origin:left center;background:linear-gradient(90deg,transparent,rgba(255,193,76,.95),rgba(255,89,8,.22));box-shadow:0 0 8px rgba(255,108,12,.55);opacity:.82;animation:ember-flight 5.5s ease-in-out infinite}
        .hero-ember-streak:after{content:"";position:absolute;right:0;top:-1.5px;width:4px;height:4px;border-radius:50%;background:#ffe0a0;box-shadow:0 0 9px #ff9d32}
        .hero-hotspot{position:absolute;width:4px;height:4px;border-radius:50%;background:#ffe3ab;box-shadow:0 0 9px #ffd17b,0 0 24px rgba(255,105,10,.85),0 0 45px rgba(255,55,2,.3);animation:hotspot-pulse 3.2s ease-in-out infinite}
        .hero-hotspot.a{left:12%;top:23%;animation-delay:-.9s}.hero-hotspot.b{left:84%;top:21%;animation-delay:-2.2s}.hero-hotspot.c{left:7%;top:66%;animation-delay:-.4s}.hero-hotspot.d{left:92%;top:63%;animation-delay:-2.8s}.hero-hotspot.e{left:74%;top:10%;animation-delay:-1.6s}.hero-hotspot.f{left:25%;top:84%;animation-delay:-2.5s}.hero-hotspot.g{left:18%;top:46%;animation-delay:-1.2s}.hero-hotspot.h{left:88%;top:48%;animation-delay:-3.4s}
        .hero-particle-field:after{content:"";position:absolute;left:26%;right:26%;top:13%;bottom:11%;background:radial-gradient(ellipse at center,rgba(3,2,1,.24),transparent 72%);filter:blur(15px)}
        .hero-depth-vignette{position:absolute;inset:0;background:radial-gradient(ellipse at 50% 46%,transparent 0 40%,rgba(0,0,0,.08) 62%,rgba(0,0,0,.58) 100%)}
        .hero-grid,.hero-orbit-two,.hero-glow-small,.hero-background-wall,.hero-background-architecture{display:none!important}
        .hero-mascot-frame{background:transparent!important}.hero-mascot-halo{display:none!important}.hero-mascot{z-index:5}
        .hero-orbit-one{z-index:6;border-color:rgba(255,123,18,.9);box-shadow:0 0 6px rgba(255,91,0,.86),0 0 18px rgba(255,91,0,.38),inset 0 0 8px rgba(255,91,0,.2)}
        .hero-glow-main{z-index:5}.hero-copy,.hero-cta,.hero-scroll-cue{z-index:7}
        @keyframes heat-breathe{0%,100%{transform:scale(1) translate3d(-1%,0,0);opacity:.7}50%{transform:scale(1.08) translate3d(2%,-1%,0);opacity:1}}
        @keyframes particle-far{0%,100%{transform:translate3d(0,0,0);opacity:.3}50%{transform:translate3d(-1.2vw,-2vh,0);opacity:1}}
        @keyframes particle-mid{0%,100%{transform:translate3d(0,0,0) scale(1);opacity:.45}35%{transform:translate3d(1.7vw,-2.2vh,0) scale(1.22);opacity:1}70%{transform:translate3d(-1.2vw,1.7vh,0) scale(.88);opacity:.68}}
        @keyframes particle-near{0%,100%{transform:translate3d(0,0,0) scale(1);opacity:.5}40%{transform:translate3d(-2.8vw,2.2vh,0) scale(1.3);opacity:1}75%{transform:translate3d(1.8vw,-2.8vh,0) scale(.82);opacity:.72}}
        @keyframes particle-hot{0%,100%{transform:translate3d(0,0,0) scale(.55);opacity:.22}30%{transform:translate3d(-1.2vw,-2.3vh,0) scale(1.9);opacity:1}65%{transform:translate3d(1.6vw,1.2vh,0) scale(.8);opacity:.5}}
        @keyframes ember-flight{0%,100%{transform:translate3d(-1vw,2vh,0) rotate(var(--ember-rotate)) scaleX(.5);opacity:0}16%{opacity:.9}52%{transform:translate3d(4vw,-5vh,0) rotate(var(--ember-rotate)) scaleX(1.25);opacity:.78}84%{opacity:.05}}
        @keyframes hotspot-pulse{0%,100%{transform:scale(.4);opacity:.2}45%{transform:scale(1.8);opacity:1}60%{transform:scale(.8);opacity:.45}}
        @media(max-width:699px){.hero-heat{filter:blur(30px)}.hero-particle-far{opacity:.72}.hero-particle-mid{opacity:.82}.hero-particle-near{opacity:.92}.hero-particle-field:after{left:15%;right:15%}.hero-ember-streak{opacity:.6}.hero-mascot{width:min(76vw,23rem)}.hero-orbit-one{width:min(84vw,26rem)}}
        @media(prefers-reduced-motion:reduce){.hero-heat,.hero-particle,.hero-ember-streak,.hero-hotspot{animation:none}}
      `}</style>
      <div className="hero-depth-scene" aria-hidden="true">
        <div className="hero-ember-space"><div className="hero-heat"/><div className="hero-particle-field">
          {farParticles.map((p,i)=><i key={`f-${i}`} className="hero-particle hero-particle-far" style={{left:`${p.x}%`,top:`${p.y}%`,width:`${p.size}px`,height:`${p.size}px`,opacity:p.opacity,animationDelay:`-${p.delay}s`}}/>)}
          {midParticles.map((p,i)=><i key={`m-${i}`} className={`hero-particle ${i%17===0?"hero-particle-hot":"hero-particle-mid"}`} style={{left:`${p.x}%`,top:`${p.y}%`,width:`${p.size}px`,height:`${p.size}px`,opacity:p.opacity,animationDelay:`-${p.delay}s`}}/>)}
          {nearParticles.map((p,i)=><i key={`n-${i}`} className="hero-particle hero-particle-near" style={{left:`${p.x}%`,top:`${p.y}%`,width:`${p.size}px`,height:`${p.size}px`,opacity:p.opacity,animationDelay:`-${p.delay}s`}}/>)}
          {emberStreaks.map((p,i)=><i key={`e-${i}`} className="hero-ember-streak" style={{left:`${p.x}%`,top:`${p.y}%`,width:`${p.length}px`,animationDelay:`-${p.delay}s`,`--ember-rotate`:`${p.rotate}deg`} as React.CSSProperties}/>)}
          <i className="hero-hotspot a"/><i className="hero-hotspot b"/><i className="hero-hotspot c"/><i className="hero-hotspot d"/><i className="hero-hotspot e"/><i className="hero-hotspot f"/><i className="hero-hotspot g"/><i className="hero-hotspot h"/>
        </div></div><div className="hero-depth-vignette"/>
      </div>
      <div className="hero-orbit hero-orbit-one" aria-hidden="true"/><div className="hero-glow hero-glow-main" aria-hidden="true"/>
      <div className="hero-shell"><div className="hero-mascot" aria-label="Garfilas hero artwork"><div className="hero-mascot-frame"><img src="/assets/hero/garfilas-hero-final.webp" alt="Garfilas mascot enjoying handmade lasagna" width={1536} height={1024} fetchPriority="high"/></div></div><div className="hero-copy"><HeroLogo/></div><HeroCTA/><div className="hero-scroll-cue" aria-hidden="true" style={{marginTop:"10px"}}><style>{`.hero-scroll-cue span{transform:rotate(225deg)`}</style><span/><span/><span/></div></div>
    </section>
  );
}
