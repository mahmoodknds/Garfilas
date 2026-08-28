import HeroCTA from "./HeroCTA";
import HeroLogo from "./HeroLogo";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <style>{`
        /* Refined 3D architecture: visible form, no decorative lighting. */
        .hero-depth-scene{position:absolute;inset:0;z-index:0;overflow:hidden;pointer-events:none;perspective:1800px;perspective-origin:50% 43%;background:#020202;isolation:isolate}
        .hero-depth-room{position:absolute;inset:0;transform-style:preserve-3d;animation:depth-breathe 14s ease-in-out infinite}
        .hero-depth-back{position:absolute;left:50%;top:43%;width:min(30vw,30rem);height:min(62vh,35rem);transform:translate(-50%,-50%) translateZ(-720px);background:#11100e;border-radius:15rem 15rem 2rem 2rem;box-shadow:inset 0 0 70px rgba(0,0,0,.92),0 0 45px rgba(0,0,0,.7)}
        .hero-depth-back:after{content:"";position:absolute;inset:7%;border-radius:13rem 13rem 1.5rem 1.5rem;background:#070706;box-shadow:inset 0 0 55px rgba(0,0,0,.95)}
        .hero-depth-portal{position:absolute;left:50%;top:43%;width:52vw;height:73vh;transform:translate(-50%,-50%) translateZ(-500px);border-radius:20rem 20rem 3rem 3rem;border:clamp(12px,1.2vw,20px) solid #0d0c0a;background:transparent;box-shadow:inset 0 0 35px rgba(0,0,0,.9),0 0 0 1px rgba(255,255,255,.035),0 22px 60px rgba(0,0,0,.75)}
        .hero-depth-portal:before{content:"";position:absolute;inset:10px;border-radius:18rem 18rem 2rem 2rem;border:1px solid rgba(255,255,255,.045)}
        .hero-depth-portal-2{width:67vw;height:82vh;transform:translate(-50%,-50%) translateZ(-350px);border-width:clamp(9px,1vw,16px);border-color:#0a0908}
        .hero-depth-portal-3{width:86vw;height:92vh;transform:translate(-50%,-50%) translateZ(-190px);border-width:clamp(7px,.8vw,13px);border-color:#080807}
        .hero-depth-side{position:absolute;top:-12%;height:124%;width:42%;background:linear-gradient(90deg,#010101 0%,#080807 78%,#0d0c0a 100%);box-shadow:inset 0 0 90px rgba(0,0,0,.95);transform-style:preserve-3d}
        .hero-depth-side-left{left:-27%;transform-origin:100% 50%;transform:rotateY(34deg) translateZ(-90px);clip-path:polygon(0 0,100% 7%,100% 93%,0 100%)}
        .hero-depth-side-right{right:-27%;transform-origin:0 50%;transform:rotateY(-34deg) translateZ(-90px);clip-path:polygon(0 7%,100% 0,100% 100%,0 93%)}
        .hero-depth-side:after{content:"";position:absolute;inset:7% 10%;border:1px solid rgba(255,255,255,.025);border-radius:50%;opacity:.55}
        .hero-depth-ceiling{position:absolute;left:-20%;right:-20%;top:-17%;height:54%;transform-origin:50% 100%;transform:rotateX(-64deg) translateZ(-100px);background:linear-gradient(180deg,#010101,#090908 72%,#0c0b09);box-shadow:inset 0 -55px 90px rgba(0,0,0,.9)}
        .hero-depth-floor{position:absolute;left:-25%;right:-25%;top:53%;height:76%;transform-origin:50% 0;transform:rotateX(70deg) translateZ(-80px);background:linear-gradient(90deg,#010101 0%,#080807 18%,#11100e 50%,#080807 82%,#010101 100%);box-shadow:inset 0 45px 90px rgba(0,0,0,.92),0 -20px 45px rgba(0,0,0,.75)}
        .hero-depth-floor:before{content:"";position:absolute;left:22%;right:22%;top:0;height:100%;border-left:1px solid rgba(255,255,255,.025);border-right:1px solid rgba(255,255,255,.025);transform:perspective(900px) rotateX(-2deg)}
        .hero-depth-vignette{position:absolute;inset:0;background:radial-gradient(ellipse at 50% 43%,transparent 0 34%,rgba(0,0,0,.24) 61%,rgba(0,0,0,.86) 100%)}
        .hero-grid,.hero-orbit-two,.hero-glow-small,.hero-background-wall,.hero-background-architecture{display:none!important}
        .hero-mascot-frame{background:transparent!important}.hero-mascot-halo{display:none!important}.hero-mascot{z-index:3}
        .hero-orbit-one{z-index:4;border-color:rgba(255,123,18,.9);box-shadow:0 0 6px rgba(255,91,0,.86),0 0 18px rgba(255,91,0,.38),inset 0 0 8px rgba(255,91,0,.2)}
        .hero-glow-main{z-index:2}.hero-copy,.hero-cta,.hero-scroll-cue{z-index:5}
        @keyframes depth-breathe{0%,100%{transform:translateZ(0) scale(1)}50%{transform:translateZ(7px) scale(1.003)}}
        @media(max-width:699px){
          .hero-depth-back{width:44vw;height:61vh;top:42%}
          .hero-depth-portal{width:78vw;height:68vh;top:42%;border-width:10px}
          .hero-depth-portal-2{width:103vw;height:78vh;border-width:8px}
          .hero-depth-portal-3{width:132vw;height:88vh;border-width:6px}
          .hero-depth-side{width:53%}.hero-depth-side-left{left:-39%;transform:rotateY(27deg) translateZ(-70px)}.hero-depth-side-right{right:-39%;transform:rotateY(-27deg) translateZ(-70px)}
          .hero-depth-floor{left:-47%;right:-47%;top:55%;height:69%}.hero-depth-ceiling{left:-38%;right:-38%;height:48%}
          .hero-mascot{width:min(76vw,23rem)}.hero-orbit-one{width:min(84vw,26rem)}
        }
        @media(prefers-reduced-motion:reduce){.hero-depth-room{animation:none}}
      `}</style>

      <div className="hero-depth-scene" aria-hidden="true">
        <div className="hero-depth-room">
          <div className="hero-depth-side hero-depth-side-left" />
          <div className="hero-depth-side hero-depth-side-right" />
          <div className="hero-depth-ceiling" />
          <div className="hero-depth-floor" />
          <div className="hero-depth-portal hero-depth-portal-3" />
          <div className="hero-depth-portal hero-depth-portal-2" />
          <div className="hero-depth-portal" />
          <div className="hero-depth-back" />
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
        <div className="hero-scroll-cue" aria-hidden="true" style={{marginTop:"10px"}}>
          <style>{`.hero-scroll-cue span{transform:rotate(225deg)}`}</style><span/><span/><span/>
        </div>
      </div>
    </section>
  );
}
