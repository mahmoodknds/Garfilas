import HeroCTA from "./HeroCTA";
import HeroLogo from "./HeroLogo";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <style>{`
        /* Garfilas hero background: a single continuous sculptural space with strong perspective. */
        .hero-depth-scene{position:absolute;inset:0;z-index:0;overflow:hidden;pointer-events:none;isolation:isolate;background:#020202;perspective:1150px;perspective-origin:50% 42%}
        .hero-depth-world{position:absolute;inset:-10%;transform-style:preserve-3d;animation:hero-space-drift 22s ease-in-out infinite}

        /* Large rear wall, visibly recessed. */
        .hero-depth-back{position:absolute;left:50%;top:40%;width:94vw;height:102vh;transform:translate(-50%,-50%) translateZ(-620px);clip-path:polygon(17% 0,83% 0,100% 100%,0 100%);background:linear-gradient(105deg,#050505 0%,#0d0c0b 48%,#050505 100%);box-shadow:inset 0 0 150px #000}
        .hero-depth-back:after{content:"";position:absolute;inset:10% 15%;clip-path:inherit;background:radial-gradient(ellipse at 50% 34%,#11100e 0%,#070706 55%,#020202 100%);box-shadow:inset 0 0 120px #000}

        /* One monumental curved volume wraps around the hero. */
        .hero-depth-monolith{position:absolute;left:50%;top:38%;width:142vw;height:112vh;transform:translate(-50%,-50%) translateZ(-300px);border-radius:50% 50% 9% 9%;background:linear-gradient(180deg,#11100e 0%,#171512 22%,#0a0908 64%,#050505 100%);box-shadow:inset 0 -120px 160px rgba(0,0,0,.92),inset 0 20px 60px rgba(255,255,255,.025),0 40px 100px rgba(0,0,0,.55)}
        .hero-depth-monolith:before{content:"";position:absolute;left:9%;right:9%;top:9%;bottom:4%;border-radius:48% 48% 8% 8%;background:#050505;box-shadow:inset 0 0 120px #000}

        /* Deep inner aperture creates a clear foreground-to-background scale change. */
        .hero-depth-aperture{position:absolute;left:50%;top:43%;width:88vw;height:88vh;transform:translate(-50%,-50%) translateZ(-40px);border-radius:48% 48% 8% 8%;background:linear-gradient(180deg,#191714 0%,#0b0a09 48%,#040404 100%);box-shadow:inset 0 0 95px rgba(0,0,0,.9),0 32px 70px rgba(0,0,0,.6)}
        .hero-depth-aperture:before{content:"";position:absolute;inset:7%;border-radius:44% 44% 7% 7%;background:radial-gradient(ellipse at 50% 30%,#0e0d0c 0%,#050505 63%,#010101 100%);box-shadow:inset 0 0 90px #000}

        /* Foreground folded wings exaggerate the perspective toward the center. */
        .hero-depth-wing{position:absolute;top:3%;height:106%;width:61%;transform-style:preserve-3d;box-shadow:inset 0 0 95px rgba(0,0,0,.82)}
        .hero-depth-wing-left{left:-31%;transform-origin:100% 50%;transform:rotateY(37deg) translateZ(190px);clip-path:polygon(0 0,100% 9%,82% 91%,0 100%);background:linear-gradient(104deg,#030303 0%,#0b0a09 46%,#1a1713 100%)}
        .hero-depth-wing-right{right:-31%;transform-origin:0 50%;transform:rotateY(-37deg) translateZ(190px);clip-path:polygon(0 9%,100% 0,100% 100%,18% 91%);background:linear-gradient(256deg,#030303 0%,#0b0a09 46%,#1a1713 100%)}
        .hero-depth-wing-left:after,.hero-depth-wing-right:after{content:"";position:absolute;top:0;bottom:0;width:26%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.06),transparent);filter:blur(4px)}
        .hero-depth-wing-left:after{right:3%;transform:skewX(-8deg)}.hero-depth-wing-right:after{left:3%;transform:skewX(8deg)}

        /* Lower perspective plane grounds the composition. */
        .hero-depth-floor{position:absolute;left:-35%;right:-35%;top:61%;height:68%;transform-origin:50% 0;transform:rotateX(70deg) translateZ(-30px);background:linear-gradient(90deg,#010101 0%,#0a0908 19%,#171411 50%,#0a0908 81%,#010101 100%);box-shadow:inset 0 60px 110px #000,0 -20px 65px rgba(0,0,0,.55)}
        .hero-depth-floor:after{content:"";position:absolute;left:29%;right:29%;top:0;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.03),transparent);transform:skewX(-10deg);filter:blur(10px)}

        /* A few structural bevels make the volumes readable without decorative graphics. */
        .hero-depth-bevel{position:absolute;height:2px;z-index:2;background:linear-gradient(90deg,transparent,rgba(255,255,255,.13),transparent);box-shadow:0 0 18px rgba(255,255,255,.025)}
        .hero-depth-bevel-left{left:0;top:75%;width:40%;transform:rotate(12deg)}
        .hero-depth-bevel-right{right:0;top:75%;width:40%;transform:rotate(-12deg)}

        .hero-depth-vignette{position:absolute;inset:0;z-index:4;background:radial-gradient(ellipse at 50% 43%,transparent 0 39%,rgba(0,0,0,.08) 57%,rgba(0,0,0,.5) 100%)}

        .hero-grid,.hero-orbit-two,.hero-glow-small,.hero-background-wall,.hero-background-architecture{display:none!important}
        .hero-mascot-frame{background:transparent!important}.hero-mascot-halo{display:none!important}.hero-mascot{z-index:5}
        .hero-orbit-one{z-index:6;border-color:rgba(255,123,18,.9);box-shadow:0 0 6px rgba(255,91,0,.86),0 0 18px rgba(255,91,0,.38),inset 0 0 8px rgba(255,91,0,.2)}
        .hero-glow-main{z-index:5}.hero-copy,.hero-cta,.hero-scroll-cue{z-index:7}

        @keyframes hero-space-drift{0%,100%{transform:translate3d(0,0,0) scale(1)}50%{transform:translate3d(0,-3px,10px) scale(1.004)}}
        @media(max-width:699px){
          .hero-depth-back{width:150vw;height:88vh;top:40%}
          .hero-depth-monolith{width:215vw;height:102vh;top:37%}
          .hero-depth-aperture{width:140vw;height:80vh;top:42%}
          .hero-depth-wing{width:84%;height:104%}
          .hero-depth-wing-left{left:-48%;transform:rotateY(28deg) translateZ(135px)}
          .hero-depth-wing-right{right:-48%;transform:rotateY(-28deg) translateZ(135px)}
          .hero-depth-floor{left:-58%;right:-58%;top:64%;height:60%}
          .hero-depth-bevel-left{left:-5%;width:44%}.hero-depth-bevel-right{right:-5%;width:44%}
          .hero-mascot{width:min(76vw,23rem)}.hero-orbit-one{width:min(84vw,26rem)}
        }
        @media(prefers-reduced-motion:reduce){.hero-depth-world{animation:none}}
      `}</style>

      <div className="hero-depth-scene" aria-hidden="true">
        <div className="hero-depth-world">
          <div className="hero-depth-back" />
          <div className="hero-depth-monolith" />
          <div className="hero-depth-aperture" />
          <div className="hero-depth-wing hero-depth-wing-left" />
          <div className="hero-depth-wing hero-depth-wing-right" />
          <div className="hero-depth-floor" />
          <div className="hero-depth-bevel hero-depth-bevel-left" />
          <div className="hero-depth-bevel hero-depth-bevel-right" />
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
