import HeroCTA from "./HeroCTA";
import HeroLogo from "./HeroLogo";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <style>{`
        .hero-grid,.hero-orbit-two,.hero-glow-small,.hero-background-wall,.hero-background-architecture{display:none!important}

        /* Deep architectural perspective: no ambient glow, no decorative lighting. */
        .hero-oven-scene{position:absolute;inset:0;z-index:0;overflow:hidden;pointer-events:none;perspective:1900px;perspective-origin:50% 43%;background:#020202;isolation:isolate}
        .hero-oven-room{position:absolute;inset:-5%;transform-style:preserve-3d;animation:architecture-drift 18s cubic-bezier(.4,0,.2,1) infinite}
        .hero-oven-shell{position:absolute;inset:-18%;transform:translateZ(-900px);background:#020202;box-shadow:inset 0 0 220px rgba(0,0,0,.98)}

        /* Back wall and central architectural portal create the vanishing point. */
        .hero-oven-cavity{position:absolute;left:50%;top:42%;width:42vw;max-width:44rem;height:72vh;transform:translate(-50%,-50%) translateZ(-520px);background:#080807;border:1px solid rgba(255,255,255,.035);clip-path:polygon(19% 0,81% 0,100% 100%,0 100%);box-shadow:inset 0 0 110px rgba(0,0,0,.95)}
        .hero-oven-cavity:before{content:"";position:absolute;left:15%;right:15%;top:7%;bottom:8%;border:1px solid rgba(255,255,255,.028);clip-path:polygon(18% 0,82% 0,100% 100%,0 100%);background:#050504;box-shadow:inset 0 0 70px rgba(0,0,0,.9)}

        /* Large foreground planes converge toward the center instead of forming a corridor. */
        .hero-oven-jamb{position:absolute;top:-10%;height:120%;width:34%;background:linear-gradient(90deg,#010101 0%,#090908 72%,#0e0d0b 100%);border:1px solid rgba(255,255,255,.035);transform-style:preserve-3d;box-shadow:0 0 100px rgba(0,0,0,.95)}
        .hero-oven-jamb-left{left:-18%;transform:skewY(-10deg) rotateY(34deg) translateZ(-80px);transform-origin:right center}
        .hero-oven-jamb-right{right:-18%;transform:skewY(10deg) rotateY(-34deg) translateZ(-80px);transform-origin:left center}
        .hero-oven-jamb:after{content:"";position:absolute;top:7%;bottom:7%;width:1px;background:rgba(255,255,255,.045);box-shadow:0 0 30px rgba(255,255,255,.025)}
        .hero-oven-jamb-left:after{right:18%}.hero-oven-jamb-right:after{left:18%}

        /* Receding ceiling planes. */
        .hero-oven-top{position:absolute;left:-4%;right:-4%;top:-8%;height:45%;transform:perspective(1000px) rotateX(-64deg) translateZ(-180px);transform-origin:50% 100%;background:linear-gradient(180deg,#020202 0%,#0b0a09 58%,#050504 100%);border-bottom:1px solid rgba(255,255,255,.045);box-shadow:inset 0 -70px 100px rgba(0,0,0,.9)}
        .hero-oven-top:after{content:"";position:absolute;left:20%;right:20%;bottom:14%;height:1px;background:rgba(255,255,255,.035);box-shadow:0 -70px 0 rgba(255,255,255,.018),0 -140px 0 rgba(255,255,255,.012)}

        /* Long floor perspective with very restrained material changes. */
        .hero-oven-floor{position:absolute;left:-30%;right:-30%;top:52%;height:88%;transform-origin:50% 0;transform:perspective(1100px) rotateX(72deg) translateZ(-160px);background:linear-gradient(90deg,#010101 0%,#080807 17%,#0d0c0b 50%,#080807 83%,#010101 100%);border-top:1px solid rgba(255,255,255,.055);box-shadow:inset 0 55px 100px rgba(0,0,0,.95)}
        .hero-oven-floor:before{content:"";position:absolute;left:25%;right:25%;top:0;bottom:0;border-left:1px solid rgba(255,255,255,.022);border-right:1px solid rgba(255,255,255,.022);transform:perspective(800px) rotateX(0deg)}
        .hero-oven-floor:after{content:"";position:absolute;left:12%;right:12%;top:13%;height:1px;background:rgba(255,255,255,.025);box-shadow:0 55px 0 rgba(255,255,255,.016),0 110px 0 rgba(255,255,255,.01)}

        /* Thin receding side seams reinforce the vanishing point. */
        .hero-oven-threshold{position:absolute;left:17%;right:17%;top:51%;height:1px;transform:translateZ(-20px);background:rgba(255,255,255,.035);clip-path:polygon(0 0,100% 0,69% 100%,31% 100%)}
        .hero-oven-door,.hero-oven-light,.hero-oven-heat,.hero-oven-ambient{display:none!important}
        .hero-oven-vignette{position:absolute;inset:0;background:radial-gradient(ellipse at 50% 43%,transparent 0 35%,rgba(0,0,0,.2) 62%,rgba(0,0,0,.88) 100%)}

        .hero-mascot-frame{background:transparent!important}.hero-mascot-halo{display:none!important}.hero-mascot{z-index:3}
        .hero-orbit-one{z-index:4;border-color:rgba(255,123,18,.9);box-shadow:0 0 6px rgba(255,91,0,.86),0 0 18px rgba(255,91,0,.38),inset 0 0 8px rgba(255,91,0,.2)}
        .hero-glow-main{z-index:2}.hero-copy,.hero-cta,.hero-scroll-cue{z-index:5}

        @keyframes architecture-drift{0%,100%{transform:translateZ(0) scale(1)}50%{transform:translateZ(7px) scale(1.004)}}
        @media(max-width:699px){
          .hero-oven-cavity{width:68vw;height:68vh;top:41%;transform:translate(-50%,-50%) translateZ(-520px)}
          .hero-oven-jamb{width:48%}.hero-oven-jamb-left{left:-31%;transform:skewY(-8deg) rotateY(29deg) translateZ(-70px)}.hero-oven-jamb-right{right:-31%;transform:skewY(8deg) rotateY(-29deg) translateZ(-70px)}
          .hero-oven-floor{left:-58%;right:-58%;top:54%}.hero-oven-top{height:38%}.hero-oven-threshold{left:9%;right:9%}
          .hero-mascot{width:min(76vw,23rem)}.hero-orbit-one{width:min(84vw,26rem)}
        }
        @media(prefers-reduced-motion:reduce){.hero-oven-room{animation:none}}
      `}</style>

      <div className="hero-oven-scene" aria-hidden="true">
        <div className="hero-oven-room">
          <div className="hero-oven-shell" />
          <div className="hero-oven-cavity" />
          <div className="hero-oven-jamb hero-oven-jamb-left" />
          <div className="hero-oven-jamb hero-oven-jamb-right" />
          <div className="hero-oven-top" />
          <div className="hero-oven-floor" />
          <div className="hero-oven-threshold" />
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
