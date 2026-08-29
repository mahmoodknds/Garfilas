import HeroCTA from "./HeroCTA";
import HeroLogo from "./HeroLogo";

type Ember = { angle: number; travel: number; size: number; delay: number; duration: number; opacity: number; drift: number };
type Spark = { x: number; y: number; size: number; delay: number; duration: number; opacity: number; driftX: number; driftY: number };

const ringEmbers: Ember[] = Array.from({ length: 170 }, (_, i) => ({
  angle: (i * 137.508 + 7) % 360,
  travel: 18 + ((i * 29) % 118),
  size: 1.2 + ((i * 17) % 20) * 0.34,
  delay: -((i * 0.31) % 8.5),
  duration: 3.2 + ((i * 13) % 15) * 0.34,
  opacity: 0.34 + ((i * 11) % 10) * 0.065,
  drift: -7 + ((i * 23) % 15),
}));

const hotEmbers: Ember[] = Array.from({ length: 38 }, (_, i) => ({
  angle: (i * 97.3 + 23) % 360,
  travel: 28 + ((i * 31) % 126),
  size: 3 + ((i * 7) % 10) * 0.62,
  delay: -((i * 0.67) % 10),
  duration: 3.8 + ((i * 5) % 10) * 0.48,
  opacity: 0.58 + (i % 5) * 0.08,
  drift: -10 + ((i * 17) % 23),
}));

const ambientSparks: Spark[] = Array.from({ length: 190 }, (_, i) => ({
  x: 2 + ((i * 47) % 96), y: 2 + ((i * 71) % 95),
  size: 0.8 + ((i * 19) % 22) * 0.3, delay: -((i * 0.49) % 12), duration: 5.5 + ((i * 17) % 14) * 0.52,
  opacity: 0.14 + ((i * 7) % 10) * 0.055, driftX: -20 + ((i * 23) % 41), driftY: -34 + ((i * 29) % 27),
}));

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <style>{`
        .hero-depth-scene{position:absolute;inset:0;z-index:0;overflow:hidden;pointer-events:none;background:#030201}
        .hero-ember-space{position:absolute;inset:0;overflow:hidden;background:radial-gradient(ellipse at 50% 47%,rgba(103,42,8,.4),rgba(43,15,3,.2) 30%,rgba(5,3,1,0) 69%),radial-gradient(ellipse at 20% 72%,rgba(116,42,6,.13),transparent 38%),radial-gradient(ellipse at 80% 27%,rgba(116,42,6,.11),transparent 38%),#030201}
        .hero-heat{position:absolute;inset:-16%;background:radial-gradient(circle at 50% 47%,rgba(255,91,10,.17),transparent 25%),radial-gradient(circle at 50% 47%,rgba(255,150,45,.065),transparent 45%);filter:blur(42px);animation:hero-heat-breathe 8s ease-in-out infinite}
        .hero-ambient-field{position:absolute;inset:0;z-index:1;overflow:hidden}
        .hero-ambient-spark{position:absolute;left:var(--x);top:var(--y);width:var(--size);height:var(--size);border-radius:50%;background:#ffb951;box-shadow:0 0 5px rgba(255,190,91,.75),0 0 15px rgba(255,87,8,.25);opacity:var(--opacity);animation:hero-ambient-float var(--duration) ease-in-out infinite;animation-delay:var(--delay);will-change:transform,opacity}
        .hero-ambient-spark:nth-child(6n){background:#ff9d28}.hero-ambient-spark:nth-child(11n){background:#ffe1ad;box-shadow:0 0 8px rgba(255,224,174,.9),0 0 23px rgba(255,103,10,.4)}.hero-ambient-spark:nth-child(17n){width:calc(var(--size) * 2);height:calc(var(--size) * 2)}
        .hero-ring-atmosphere{position:absolute;left:50%;top:47%;width:min(68vw,31rem);aspect-ratio:1;transform:translate(-50%,-50%);z-index:2;pointer-events:none;overflow:visible}
        .hero-ring-atmosphere:before{content:"";position:absolute;inset:0;border-radius:50%;background:radial-gradient(circle,transparent 47%,rgba(255,112,12,.09) 51%,rgba(255,72,6,.035) 63%,transparent 76%);filter:blur(13px);animation:hero-ring-breathe 5.5s ease-in-out infinite}
        .hero-ember{position:absolute;left:50%;top:50%;width:var(--size);height:var(--size);margin:calc(var(--size) * -.5);border-radius:50%;background:#ffc45f;box-shadow:0 0 6px rgba(255,211,127,.95),0 0 17px rgba(255,103,10,.52);opacity:0;z-index:3;will-change:transform,opacity;animation:hero-ring-ember var(--duration) cubic-bezier(.14,.7,.22,1) infinite;animation-delay:var(--delay)}
        .hero-ember-hot{background:#ffe5b0;box-shadow:0 0 10px rgba(255,235,190,1),0 0 28px rgba(255,112,12,.88),0 0 52px rgba(255,58,3,.36);animation-name:hero-ring-hot}
        .hero-ember:after{content:"";position:absolute;inset:-5px;border-radius:50%;background:inherit;filter:blur(6px);opacity:.42}
        .hero-shell{position:relative;z-index:10!important;isolation:isolate}
        .hero-mascot,.hero-mascot-frame,.hero-mascot-frame img{position:relative;z-index:20!important;mix-blend-mode:normal!important;opacity:1!important;visibility:visible!important}
        .hero-mascot-frame{width:100%!important;height:100%!important;overflow:visible!important;border-radius:0!important;background:transparent!important;isolation:isolate!important}
        .hero-mascot-frame::after{display:none!important;content:none!important}
        .hero-mascot-frame img{width:100%!important;height:100%!important;object-fit:contain!important;object-position:50% 50%!important;display:block!important;filter:none!important}
        .hero-copy,.hero-cta,.hero-scroll-cue{position:relative;z-index:30!important}
        .hero-orbit-one{z-index:12!important}.hero-glow-main{z-index:4!important}
        .hero-grid,.hero-orbit-two,.hero-glow-small,.hero-background-wall,.hero-background-architecture{display:none!important}
        @keyframes hero-heat-breathe{0%,100%{transform:scale(1);opacity:.62}50%{transform:scale(1.1);opacity:.95}}
        @keyframes hero-ring-breathe{0%,100%{transform:scale(.97);opacity:.42}50%{transform:scale(1.045);opacity:.9}}
        @keyframes hero-ambient-float{0%,100%{transform:translate3d(0,0,0) scale(.55);opacity:calc(var(--opacity)*.4)}17%{opacity:var(--opacity)}38%{transform:translate3d(calc(var(--drift-x)*.45),calc(var(--drift-y)*.45),0) scale(1.35);opacity:calc(var(--opacity)*1.1)}59%{transform:translate3d(calc(var(--drift-x)*.75),calc(var(--drift-y)*.78),0) scale(.7);opacity:calc(var(--opacity)*.52)}79%{transform:translate3d(var(--drift-x),var(--drift-y),0) scale(1.05);opacity:var(--opacity)}}
        @keyframes hero-ring-ember{0%{transform:rotate(var(--angle)) translateX(15.5rem) scale(.15);opacity:0}6%{opacity:var(--opacity)}19%{transform:rotate(calc(var(--angle) + var(--drift))) translateX(16.3rem) scale(1.15);opacity:var(--opacity)}43%{transform:rotate(calc(var(--angle) + var(--drift))) translateX(calc(15.5rem + var(--travel)*.45)) scale(.92);opacity:calc(var(--opacity)*.95)}72%{transform:rotate(calc(var(--angle) + var(--drift))) translateX(calc(15.5rem + var(--travel))) scale(.68);opacity:calc(var(--opacity)*.56)}100%{transform:rotate(calc(var(--angle) + var(--drift))) translateX(calc(15.5rem + var(--travel))) scale(.12);opacity:0}}
        @keyframes hero-ring-hot{0%{transform:rotate(var(--angle)) translateX(15.5rem) scale(.18);opacity:0}5%{opacity:.98}18%{transform:rotate(calc(var(--angle) + var(--drift))) translateX(16.6rem) scale(1.55);opacity:1}42%{transform:rotate(calc(var(--angle) + var(--drift))) translateX(calc(15.5rem + var(--travel)*.55)) scale(1.05);opacity:.95}68%{transform:rotate(calc(var(--angle) + var(--drift))) translateX(calc(15.5rem + var(--travel))) scale(.72);opacity:.55}100%{transform:rotate(calc(var(--angle) + var(--drift))) translateX(calc(15.5rem + var(--travel))) scale(.12);opacity:0}}
        @media(max-width:699px){.hero-ring-atmosphere{width:min(82vw,25rem);top:46%}.hero-mascot{width:min(79vw,22rem);top:27.5%}.hero-mascot,.hero-mascot-frame,.hero-mascot-frame img{z-index:20!important}.hero-ember{box-shadow:0 0 5px rgba(255,211,127,.9),0 0 13px rgba(255,103,10,.45)}}
        @media(prefers-reduced-motion:reduce){.hero-heat,.hero-ring-atmosphere:before,.hero-ember,.hero-ambient-spark{animation:none}}
      `}</style>
      <div className="hero-depth-scene" aria-hidden="true"><div className="hero-ember-space"><div className="hero-heat"/><div className="hero-ambient-field">{ambientSparks.map((s,i)=><i key={`ambient-${i}`} className="hero-ambient-spark" style={{"--x":`${s.x}%`,"--y":`${s.y}%`,"--size":`${s.size}px`,"--delay":`${s.delay}s`,"--duration":`${s.duration}s`,"--opacity":s.opacity,"--drift-x":`${s.driftX}px`,"--drift-y":`${s.driftY}px`} as React.CSSProperties}/>)}</div></div></div>
      <div className="hero-ring-atmosphere" aria-hidden="true">{ringEmbers.map((e,i)=><i key={`ember-${i}`} className="hero-ember" style={{"--angle":`${e.angle}deg`,"--travel":`${e.travel}px`,"--size":`${e.size}px`,"--delay":`${e.delay}s`,"--duration":`${e.duration}s`,"--opacity":e.opacity,"--drift":`${e.drift}deg`} as React.CSSProperties}/>)}{hotEmbers.map((e,i)=><i key={`hot-${i}`} className="hero-ember hero-ember-hot" style={{"--angle":`${e.angle}deg`,"--travel":`${e.travel}px`,"--size":`${e.size}px`,"--delay":`${e.delay}s`,"--duration":`${e.duration}s`,"--opacity":e.opacity,"--drift":`${e.drift}deg`} as React.CSSProperties}/>)}</div>
      <div className="hero-orbit hero-orbit-one" aria-hidden="true"/><div className="hero-glow hero-glow-main" aria-hidden="true"/><div className="hero-shell"><div className="hero-mascot" aria-label="Garfilas hero artwork"><div className="hero-mascot-frame"><img src="/assets/hero/garfilas-hero-final.webp" alt="Garfilas mascot enjoying handmade lasagna" width={1536} height={1024} fetchPriority="high"/></div></div><div className="hero-copy"><HeroLogo/></div><HeroCTA/><div className="hero-scroll-cue" aria-hidden="true" style={{marginTop:"10px"}}><style>{`.hero-scroll-cue span{transform:rotate(225deg)}`}</style><span/><span/><span/></div></div>
    </section>
  );
}
