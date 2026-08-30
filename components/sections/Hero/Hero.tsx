import type { CSSProperties } from "react";
import HeroCTA from "./HeroCTA";
import HeroLogo from "./HeroLogo";

type Particle = { x: number; y: number; size: number; opacity: number; delay: number };
type RingParticle = Particle & { dx: number; dy: number; angle: number; spark: boolean };

const makeParticles = (count: number, seed: number, size: number, opacity: number): Particle[] =>
  Array.from({ length: count }, (_, i) => ({
    x: (i * (37 + seed) + 11 * seed) % 100,
    y: (i * (61 + seed) + 7 * seed) % 100,
    size: size + ((i * 17 + seed) % 9) * 0.3,
    opacity: opacity + ((i * 13 + seed) % 6) * 0.07,
    delay: (i * 0.43 + seed) % 14,
  }));

const makeRingParticles = (count: number): RingParticle[] =>
  Array.from({ length: count }, (_, i) => {
    const angle = (i / count) * Math.PI * 2 + Math.sin(i * 2.37) * 0.08;
    const wave = ((i * 19) % 11) / 10;
    const radiusX = 23 + wave * 3.2;
    const radiusY = 27 + wave * 3.8;
    const x = 50 + Math.cos(angle) * radiusX;
    const y = 43 + Math.sin(angle) * radiusY;
    const power = 2.5 + ((i * 7) % 9) * 0.55;
    return {
      x,
      y,
      size: 0.9 + ((i * 11) % 12) / 4.8,
      opacity: 0.34 + ((i * 13) % 8) / 15,
      delay: (i * 1.37) % 8.6,
      dx: Math.cos(angle) * power,
      dy: Math.sin(angle) * power,
      angle: (angle * 180) / Math.PI,
      spark: i % 7 === 0,
    };
  });

const farParticles = makeParticles(170, 3, 0.75, 0.18);
const midParticles = makeParticles(110, 7, 1.15, 0.28);
const nearParticles = makeParticles(55, 11, 1.9, 0.42);
const ringParticles = makeRingParticles(110);

const css = `
.hero{position:relative;isolation:isolate;overflow:hidden}
.hero-background-layer{position:absolute;inset:0;z-index:0;overflow:hidden;pointer-events:none;isolation:isolate;background:#030201}
.hero-background-layer *{pointer-events:none}
.hero-ember-space{position:absolute;inset:0;overflow:hidden;background:radial-gradient(ellipse at 50% 48%,rgba(73,31,9,.28) 0%,rgba(30,12,4,.16) 30%,rgba(4,3,2,0) 66%),radial-gradient(ellipse at 18% 70%,rgba(93,38,8,.13),transparent 38%),radial-gradient(ellipse at 84% 30%,rgba(104,43,8,.11),transparent 35%),#030201}
.hero-heat{position:absolute;inset:-20%;background:radial-gradient(ellipse at 42% 44%,rgba(255,102,20,.1),transparent 24%),radial-gradient(ellipse at 67% 62%,rgba(255,72,10,.07),transparent 22%),radial-gradient(ellipse at 25% 28%,rgba(255,150,45,.045),transparent 20%);filter:blur(34px);animation:heat-breathe 9s ease-in-out infinite;transform:translateZ(0)}
.hero-particle-field{position:absolute;inset:-8%;overflow:hidden}
.hero-particle{position:absolute;display:block;border-radius:50%;will-change:transform,opacity}
.hero-particle-far{background:rgba(255,173,74,.78);box-shadow:0 0 4px rgba(255,147,34,.25);animation:dust-far 30s ease-in-out infinite}
.hero-particle-mid{background:rgba(255,139,38,.9);box-shadow:0 0 8px rgba(255,111,18,.32),0 0 18px rgba(255,75,5,.12);animation:dust-mid 18s ease-in-out infinite}
.hero-particle-near{background:#ffc04e;box-shadow:0 0 9px rgba(255,137,26,.56),0 0 26px rgba(255,76,6,.2);animation:dust-near 11s ease-in-out infinite}
.hero-ring-embers{position:absolute;inset:0;overflow:hidden}
.hero-ring-ember{position:absolute;display:block;border-radius:50%;background:#ffc15a;box-shadow:0 0 7px rgba(255,181,73,.78),0 0 18px rgba(255,94,8,.3);will-change:transform,opacity;animation:ring-bloom 5.8s cubic-bezier(.22,.61,.36,1) infinite}
.hero-ring-ember:nth-child(4n){background:#ffe0a1;box-shadow:0 0 8px rgba(255,221,159,.92),0 0 20px rgba(255,114,10,.48)}
.hero-ring-ember:nth-child(7n){background:#ff8b27;box-shadow:0 0 8px rgba(255,107,12,.78),0 0 22px rgba(255,58,4,.34)}
.hero-ring-spark{position:absolute;display:block;width:1.5px!important;border-radius:999px;background:linear-gradient(to bottom,#fff2c9,#ffb343 45%,rgba(255,85,5,0));box-shadow:0 0 6px rgba(255,188,91,.9);will-change:transform,opacity;animation:ring-spark 3.7s ease-out infinite}
.hero-spark-field{position:absolute;inset:0;opacity:.9}
.hero-spark-field:before,.hero-spark-field:after{content:"";position:absolute;width:2px;height:2px;border-radius:50%;background:#ffbd62;box-shadow:8vw 14vh 0 rgba(255,126,22,.82),15vw 64vh 0 rgba(255,177,51,.72),23vw 31vh 0 rgba(255,211,112,.7),31vw 78vh 0 rgba(255,117,17,.78),39vw 17vh 0 rgba(255,174,45,.72),47vw 69vh 0 rgba(255,126,20,.8),56vw 27vh 0 rgba(255,198,78,.76),64vw 84vh 0 rgba(255,113,16,.72),72vw 12vh 0 rgba(255,181,52,.8),80vw 55vh 0 rgba(255,132,20,.76),89vw 26vh 0 rgba(255,204,93,.7),95vw 72vh 0 rgba(255,125,19,.82);animation:spark-drift 12s ease-in-out infinite}
.hero-spark-field:after{width:1px;height:1px;opacity:.9;box-shadow:5vw 44vh 0 rgba(255,224,143,.8),18vw 82vh 0 rgba(255,144,27,.82),27vw 11vh 0 rgba(255,190,60,.76),36vw 53vh 0 rgba(255,114,15,.8),44vw 34vh 0 rgba(255,207,103,.78),52vw 91vh 0 rgba(255,139,22,.76),61vw 49vh 0 rgba(255,182,51,.8),70vw 71vh 0 rgba(255,120,17,.82),78vw 38vh 0 rgba(255,216,118,.76),86vw 88vh 0 rgba(255,135,20,.8),93vw 47vh 0 rgba(255,195,67,.8);animation:spark-drift-reverse 15s ease-in-out infinite}
.hero-background-layer .hero-depth-vignette{position:absolute;inset:0;background:radial-gradient(ellipse at 50% 46%,transparent 0 39%,rgba(0,0,0,.08) 57%,rgba(0,0,0,.62) 100%)}
.hero-foreground-layer{position:relative;z-index:20;width:100%;min-height:100svh;pointer-events:none}
.hero-foreground-layer>*{pointer-events:auto}
.hero-mascot{z-index:21}.hero-copy,.hero-cta,.hero-scroll-cue{z-index:23}.hero-orbit-one,.hero-glow-main{z-index:22}
.hero-mascot-frame{background:transparent!important}.hero-grid,.hero-orbit-two,.hero-glow-small,.hero-background-wall,.hero-background-architecture,.hero-mascot-halo{display:none!important}
.hero-orbit-one{border-color:rgba(255,123,18,.9);box-shadow:0 0 6px rgba(255,91,0,.86),0 0 18px rgba(255,91,0,.38),inset 0 0 8px rgba(255,91,0,.2)}
@keyframes heat-breathe{0%,100%{transform:scale(1) translate3d(-1%,0,0);opacity:.7}50%{transform:scale(1.06) translate3d(2%,-1%,0);opacity:1}}
@keyframes dust-far{0%,100%{transform:translate3d(0,0,0) scale(1);opacity:.3}50%{transform:translate3d(-1.2%,1.7%,0) scale(1.018);opacity:.95}}
@keyframes dust-mid{0%,100%{transform:translate3d(0,0,0) scale(1);opacity:.42}35%{transform:translate3d(1.5%,-1.8%,0) scale(1.035);opacity:.95}70%{transform:translate3d(-1%,1.5%,0) scale(.975);opacity:.62}}
@keyframes dust-near{0%,100%{transform:translate3d(0,0,0) scale(1);opacity:.42}35%{transform:translate3d(-2.2%,1.8%,0) scale(1.07);opacity:1}70%{transform:translate3d(1.5%,-2.2%,0) scale(.94);opacity:.68}}
@keyframes ring-bloom{0%{transform:translate3d(0,0,0) scale(.35);opacity:0}10%{opacity:.16}24%{opacity:var(--ember-opacity,1);transform:translate3d(calc(var(--drift-x)*.12),calc(var(--drift-y)*.12),0) scale(1)}56%{opacity:calc(var(--ember-opacity,1)*.78);transform:translate3d(calc(var(--drift-x)*.48),calc(var(--drift-y)*.48),0) scale(.92)}100%{opacity:0;transform:translate3d(var(--drift-x),var(--drift-y),0) scale(.5)}}
@keyframes ring-spark{0%{opacity:0;transform:translate3d(0,0,0) rotate(var(--ember-rotate)) scaleY(.25)}9%{opacity:.95}34%{opacity:1;transform:translate3d(calc(var(--drift-x)*.35),calc(var(--drift-y)*.35),0) rotate(var(--ember-rotate)) scaleY(1)}100%{opacity:0;transform:translate3d(var(--drift-x),var(--drift-y),0) rotate(var(--ember-rotate)) scaleY(.18)}}
@keyframes spark-drift{0%,100%{transform:translate3d(-1.5vw,1.5vh,0);opacity:.55}50%{transform:translate3d(2vw,-2vh,0);opacity:1}}
@keyframes spark-drift-reverse{0%,100%{transform:translate3d(1vw,-1.5vh,0);opacity:.5}50%{transform:translate3d(-2vw,2vh,0);opacity:1}}
@media(max-width:699px){.hero-heat{filter:blur(28px)}.hero-particle-far{opacity:.56}.hero-particle-mid{opacity:.7}.hero-particle-near{opacity:.82}.hero-mascot{width:min(76vw,23rem)}.hero-orbit-one{width:min(84vw,26rem)}.hero-ring-ember{animation-duration:5.1s}}
@media(prefers-reduced-motion:reduce){.hero-heat,.hero-particle,.hero-ring-ember,.hero-ring-spark,.hero-spark-field:before,.hero-spark-field:after{animation:none}}
`;

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <style>{css}</style>

      <div className="hero-background-layer" aria-hidden="true">
        <div className="hero-ember-space">
          <div className="hero-heat" />
          <div className="hero-particle-field">
            {farParticles.map((p, i) => (
              <i key={"f-" + i} className="hero-particle hero-particle-far" style={{ left: p.x + "%", top: p.y + "%", width: p.size + "px", height: p.size + "px", opacity: p.opacity, animationDelay: "-" + p.delay + "s" }} />
            ))}
            {midParticles.map((p, i) => (
              <i key={"m-" + i} className="hero-particle hero-particle-mid" style={{ left: p.x + "%", top: p.y + "%", width: p.size + "px", height: p.size + "px", opacity: p.opacity, animationDelay: "-" + p.delay + "s" }} />
            ))}
            {nearParticles.map((p, i) => (
              <i key={"n-" + i} className="hero-particle hero-particle-near" style={{ left: p.x + "%", top: p.y + "%", width: p.size + "px", height: p.size + "px", opacity: p.opacity, animationDelay: "-" + p.delay + "s" }} />
            ))}
          </div>

          <div className="hero-ring-embers">
            {ringParticles.map((p, i) => {
              const style = {
                left: p.x + "%",
                top: p.y + "%",
                width: (p.spark ? Math.max(1.2, p.size * 0.7) : p.size) + "px",
                height: (p.spark ? Math.max(6, p.size * 4.5) : p.size) + "px",
                animationDelay: "-" + p.delay + "s",
                "--drift-x": p.dx + "vw",
                "--drift-y": p.dy + "vh",
                "--ember-rotate": p.angle + 90 + "deg",
                "--ember-opacity": String(p.opacity),
              } as CSSProperties;
              return <i key={"r-" + i} className={p.spark ? "hero-ring-spark" : "hero-ring-ember"} style={style} />;
            })}
          </div>

          <div className="hero-spark-field" />
        </div>
        <div className="hero-depth-vignette" />
      </div>

      <div className="hero-foreground-layer">
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
          <div className="hero-scroll-cue" aria-hidden="true" style={{ marginTop: "10px" }}>
            <style>{".hero-scroll-cue span{transform:rotate(225deg)}"}</style>
            <span /><span /><span />
          </div>
        </div>
      </div>
    </section>
  );
}
