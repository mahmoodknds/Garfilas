import HeroCTA from "./HeroCTA";
import HeroLogo from "./HeroLogo";

type Ember = { angle: number; travel: number; size: number; delay: number; duration: number; opacity: number; drift: number };
type Spark = { x: number; y: number; size: number; delay: number; duration: number; opacity: number; driftX: number; driftY: number };

const ringEmbers: Ember[] = Array.from({ length: 180 }, (_, i) => ({
  angle: (i * 137.508 + 11) % 360,
  travel: 8 + ((i * 29) % 64),
  size: 1 + ((i * 17) % 22) * 0.34,
  delay: -((i * 0.37) % 9),
  duration: 3.2 + ((i * 13) % 17) * 0.34,
  opacity: 0.34 + ((i * 11) % 10) * 0.065,
  drift: -8 + ((i * 23) % 17),
}));

const hotEmbers: Ember[] = Array.from({ length: 42 }, (_, i) => ({
  angle: (i * 97.3 + 37) % 360,
  travel: 12 + ((i * 31) % 78),
  size: 3 + ((i * 7) % 11) * 0.58,
  delay: -((i * 0.71) % 11),
  duration: 3.8 + ((i * 5) % 11) * 0.48,
  opacity: 0.58 + (i % 5) * 0.08,
  drift: -13 + ((i * 17) % 27),
}));

const ambientSparks: Spark[] = Array.from({ length: 190 }, (_, i) => ({
  x: 1 + ((i * 47) % 98),
  y: 2 + ((i * 71) % 95),
  size: 0.8 + ((i * 19) % 28) * 0.27,
  delay: -((i * 0.53) % 14),
  duration: 5.5 + ((i * 17) % 17) * 0.5,
  opacity: 0.18 + ((i * 7) % 11) * 0.065,
  driftX: -22 + ((i * 23) % 45),
  driftY: -38 + ((i * 29) % 31),
}));

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <style>{`
        .hero-depth-scene{position:absolute;inset:0;z-index:0;overflow:hidden;pointer-events:none;isolation:isolate;background:#030201}
        .hero-ember-space{position:absolute;inset:0;overflow:hidden;background:radial-gradient(ellipse at 50% 47%,rgba(103,42,8,.42),rgba(43,15,3,.22) 29%,rgba(5,3,1,0) 68%),radial-gradient(ellipse at 18% 72%,rgba(116,42,6,.14),transparent 37%),radial-gradient(ellipse at 82% 26%,rgba(116,42,6,.12),transparent 37%),#030201}
        .hero-heat{position:absolute;inset:-18%;background:radial-gradient(circle at 50% 47%,rgba(255,91,10,.18),transparent 25%),radial-gradient(circle at 50% 47%,rgba(255,150,45,.07),transparent 43%);filter:blur(42px);animation:heat-breathe 8s ease-in-out infinite}
        .hero-ambient-field{position:absolute;inset:0;overflow:hidden;z-index:1}
        .hero-ambient-spark{position:absolute;left:var(--x);top:var(--y);width:var(--size);height:var(--size);border-radius:50%;background:#ffbf59;box-shadow:0 0 5px rgba(255,184,70,.82),0 0 15px rgba(255,87,8,.3);opacity:var(--opacity);animation:ambient-float var(--duration) ease-in-out infinite;animation-delay:var(--delay);will-change:transform,opacity}
        .hero-ambient-spark:nth-child(4n){background:#ff9f2d}.hero-ambient-spark:nth-child(7n){background:#ffe4b6;box-shadow:0 0 8px rgba(255,224,174,.95),0 0 23px rgba(255,103,10,.45)}.hero-ambient-spark:nth-child(13n){width:calc(var(--size) * 1.8);height:calc(var(--size) * 1.8);box-shadow:0 0 10px rgba(255,198,112,.9),0 0 28px rgba(255,82,5,.42)}
        .hero-ring-atmosphere{position:absolute;left:50%;top:47%;width:min(68vw,48rem);aspect-ratio:1;transform:translate(-50%,-50%);z-index:3;overflow:visible;pointer-events:none;--ring-radius:min(34vw,24rem)}
        .hero-ring-atmosphere:before{content:"";position:absolute;inset:0;border-radius:50%;background:radial-gradient(circle,transparent 47%,rgba(255,126,18,.09) 52%,rgba(255,77,8,.035) 66%,transparent 79%);filter:blur(13px);animation:atmosphere-breathe 5.5s ease-in-out infinite}
        .hero-ember{position:absolute;left:50%;top:50%;width:var(--size);height:var(--size);margin:calc(var(--size) * -.5);border-radius:50%;background:#ffc35f;box-shadow:0 0 6px rgba(255,207,115,.95),0 0 18px rgba(255,103,10,.52);opacity:0;will-change:transform,opacity;animation:ember-from-ring var(--duration) cubic-bezier(.12,.72,.2,1) infinite;animation-delay:var(--delay)}
        .hero-ember-hot{background:#ffe3aa;box-shadow:0 0 10px rgba(255,230,178,1),0 0 28px rgba(255,112,12,.92),0 0 54px rgba(255,58,3,.44);animation-name:ember-from-ring-hot}
        .hero-ember:after{content:"";position:absolute;inset:-5px;border-radius:50%;background:inherit;filter:blur(6px);opacity:.45}
        .hero-depth-vignette{position:absolute;inset:0;z-index:2;pointer-events:none;background:radial-gradient(ellipse at 50% 47%,transparent 0 37%,rgba(0,0,0,.08) 63%,rgba(0,0,0,.62) 100%)}
        .hero-grid,.hero-orbit-two,.hero-glow-small,.hero-background-wall,.hero-background-architecture{display:none!important}
        .hero-shell{position:relative;z-index:10}.hero-mascot{position:relative;z-index:10}.hero-mascot-frame{position:relative;z-index:10;background:transparent!important;mix-blend-mode:normal!important;isolation:isolate}.hero-mascot-frame img{position:relative;z-index:10;display:block;mix-blend-mode:normal!important;isolation:isolate}
        .hero-orbit-one{z-index:12;border-color:rgba(255,123,18,.92);box-shadow:0 0 7px rgba(255,91,0,.9),0 0 22px rgba(255,91,0,.4),inset 0 0 9px rgba(255,91,0,.24)}
        .hero-glow-main{z-index:9}.hero-copy,.hero-cta,.hero-scroll-cue{position:relative;z-index:14}
        @keyframes heat-breathe{0%,100%{transform:scale(1);opacity:.68}50%{transform:scale(1.1);opacity:1}}
        @keyframes atmosphere-breathe{0%,100%{transform:scale(.96);opacity:.45}50%{transform:scale(1.06);opacity:1}}
        @keyframes ambient-float{0%,100%{transform:translate3d(0,0,0) scale(.55);opacity:calc(var(--opacity)*.42)}18%{opacity:var(--opacity)}36%{transform:translate3d(calc(var(--drift-x)*.35),calc(var(--drift-y)*.35),0) scale(1.35);opacity:calc(var(--opacity)*1.15)}57%{transform:translate3d(calc(var(--drift-x)*.7),calc(var(--drift-y)*.72),0) scale(.72);opacity:calc(var(--opacity)*.55)}76%{transform:translate3d(var(--drift-x),var(--drift-y),0) scale(1.05);opacity:var(--opacity)}}
        @keyframes ember-from-ring{0%{transform:rotate(var(--angle)) translateX(var(--ring-radius)) scale(.12);opacity:0}7%{opacity:var(--opacity)}20%{transform:rotate(calc(var(--angle) + var(--drift))) translateX(calc(var(--ring-radius) + var(--travel22))) scale(1.18);opacity:var(--opacity)}48%{transform:rotate(calc(var(--angle) + var(--drift))) translateX(calc(var(--ring-radius) + var(--travel55))) scale(.9);opacity:calc(var(--opacity)*.96)}72%{transform:rotate(calc(var(--angle) + var(--drift))) translateX(calc(var(--ring-radius) + var(--travel72))) scale(.7);opacity:calc(var(--opacity)*.62)}100%{transform:rotate(calc(var(--angle) + var(--drift))) translateX(calc(var(--ring-radius) + var(--travel))) scale(.16);opacity:0}}
        @keyframes ember-from-ring-hot{0%{transform:rotate(var(--angle)) translateX(var(--ring-radius)) scale(.12);opacity:0}5%{opacity:.98}18%{transform:rotate(calc(var(--angle) + var(--drift))) translateX(calc(var(--ring-radius) + var(--travel24))) scale(1.55);opacity:1}38%{transform:rotate(calc(var(--angle) + var(--drift))) translateX(calc(var(--ring-radius) + var(--travel56))) scale(.9);opacity:.96}64%{transform:rotate(calc(var(--angle) + var(--drift))) translateX(calc(var(--ring-radius) + var(--travel))) scale(1.15);opacity:.7}100%{transform:rotate(calc(var(--angle) + var(--drift))) translateX(calc(var(--ring-radius) + var(--travel))) scale(.12);opacity:0}}
        @media(max-width:699px){.hero-ring-atmosphere{width:min(102vw,34rem);top:46%;--ring-radius:min(51vw,17rem)}.hero-mascot{width:min(76vw,23rem)}.hero-orbit-one{width:min(84vw,26rem)}.hero-ember{box-shadow:0 0 5px rgba(255,207,115,.95),0 0 14px rgba(255,103,10,.5)}}
        @media(prefers-reduced-motion:reduce){.hero-heat,.hero-ring-atmosphere:before,.hero-ember,.hero-ambient-spark{animation:none}}
      `}</style>
      <div className="hero-depth-scene" aria-hidden="true">
        <div className="hero-ember-space">
          <div className="hero-heat" />
          <div className="hero-ambient-field">
            {ambientSparks.map((s,i)=><i key={`ambient-${i}`} className="hero-ambient-spark" style={{"--x":`${s.x}%`,"--y":`${s.y}%`,"--size":`${s.size}px`,"--delay":`${s.delay}s`,"--duration":`${s.duration}s`,"--opacity":s.opacity,"--drift-x":`${s.driftX}px`,"--drift-y":`${s.driftY}px`} as React.CSSProperties} />)}
          </div>
        </div>
        <div className="hero-depth-vignette" />
      </div>
      <div className="hero-ring-atmosphere" aria-hidden="true">
        {ringEmbers.map((e,i)=><i key={`ember-${i}`} className="hero-ember" style={{"--angle":`${e.angle}deg`,"--travel":`${e.travel}px`,"--travel22":`${e.travel*0.22}px`,"--travel55":`${e.travel*0.55}px`,"--travel72":`${e.travel*0.72}px`,"--size":`${e.size}px`,"--delay":`${e.delay}s`,"--duration":`${e.duration}s`,"--opacity":e.opacity,"--drift":`${e.drift}deg`} as React.CSSProperties} />)}
        {hotEmbers.map((e,i)=><i key={`hot-${i}`} className="hero-ember hero-ember-hot" style={{"--angle":`${e.angle}deg`,"--travel":`${e.travel}px`,"--travel24":`${e.travel*0.24}px`,"--travel56":`${e.travel*0.56}px`,"--size":`${e.size}px`,"--delay":`${e.delay}s`,"--duration":`${e.duration}s`,"--opacity":e.opacity,"--drift":`${e.drift}deg`} as React.CSSProperties} />)}
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
