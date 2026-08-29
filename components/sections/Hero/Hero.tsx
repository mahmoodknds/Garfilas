import HeroCTA from "./HeroCTA";
import HeroLogo from "./HeroLogo";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <style>{`
        /* Visible architectural depth: large material volumes, not decorative lines. */
        .hero-depth-scene{position:absolute;inset:0;z-index:0;overflow:hidden;pointer-events:none;background:#030303;isolation:isolate;perspective:1600px;perspective-origin:50% 43%}
        .hero-depth-room{position:absolute;inset:0;transform-style:preserve-3d;animation:depth-drift 16s ease-in-out infinite}

        /* Three recessed portal shells. Their broad bands stay readable even behind the hero artwork. */
        .hero-depth-portal{position:absolute;left:50%;top:41%;transform:translate(-50%,-50%);border-radius:48% 48% 8% 8%;box-sizing:border-box;box-shadow:inset 0 0 70px rgba(0,0,0,.72),0 26px 80px rgba(0,0,0,.5)}
        .hero-depth-portal-far{width:min(122vw,92rem);height:94vh;transform:translate(-50%,-50%) translateZ(-420px);border:clamp(24px,3vw,52px) solid #090908;background:radial-gradient(ellipse at 50% 28%,#151310 0%,#0c0b0a 52%,#050505 100%);opacity:.98}
        .hero-depth-portal-mid{width:min(98vw,74rem);height:82vh;transform:translate(-50%,-50%) translateZ(-180px);border:clamp(22px,2.6vw,44px) solid #14120f;background:linear-gradient(180deg,#1b1814 0%,#0b0a09 54%,#050505 100%)}
        .hero-depth-portal-near{width:min(78vw,59rem);height:70vh;transform:translate(-50%,-50%) translateZ(40px);border:clamp(18px,2.2vw,36px) solid #201c16;background:linear-gradient(180deg,#252019 0%,#11100e 48%,#070706 100%);box-shadow:inset 0 0 62px rgba(0,0,0,.78),0 32px 72px rgba(0,0,0,.62)}

        /* Faceted side walls give the portals a real room-like perspective rather than a flat graphic frame. */
        .hero-depth-facet{position:absolute;top:-4%;height:110%;width:34%;background:linear-gradient(180deg,#171410 0%,#0c0b0a 42%,#050505 100%);box-shadow:inset 0 0 90px rgba(0,0,0,.84)}
        .hero-depth-facet-left{left:-14%;transform-origin:right center;transform:rotateY(33deg) translateZ(170px);clip-path:polygon(0 0,100% 8%,83% 92%,0 100%)}
        .hero-depth-facet-right{right:-14%;transform-origin:left center;transform:rotateY(-33deg) translateZ(170px);clip-path:polygon(0 8%,100% 0,100% 100%,17% 92%)}

        /* A darker rear void keeps the center deep and lets the orange hero remain dominant. */
        .hero-depth-void{position:absolute;left:50%;top:43%;width:42vw;height:66vh;transform:translate(-50%,-50%) translateZ(-520px);border-radius:46% 46% 10% 10%;background:radial-gradient(ellipse at 50% 35%,#080807 0%,#030303 70%);box-shadow:inset 0 0 100px #000}

        .hero-depth-floor{position:absolute;left:-24%;right:-24%;top:64%;height:56%;transform-origin:50% 0;transform:rotateX(68deg) translateZ(-80px);background:linear-gradient(90deg,#030303 0%,#0e0d0b 22%,#1c1813 50%,#0e0d0b 78%,#030303 100%);box-shadow:inset 0 58px 95px rgba(0,0,0,.9)}
        .hero-depth-floor:after{content:"";position:absolute;left:34%;right:34%;top:0;bottom:0;background:linear-gradient(90deg,transparent,rgba(255,255,255,.04),transparent);filter:blur(12px)}

        .hero-depth-vignette{position:absolute;inset:0;background:radial-gradient(ellipse at 50% 43%,transparent 0 42%,rgba(0,0,0,.12) 68%,rgba(0,0,0,.48) 100%)}

        .hero-grid,.hero-orbit-two,.hero-glow-small,.hero-background-wall,.hero-background-architecture{display:none!important}
        .hero-mascot-frame{background:transparent!important}.hero-mascot-halo{display:none!important}.hero-mascot{z-index:3}
        .hero-orbit-one{z-index:4;border-color:rgba(255,123,18,.9);box-shadow:0 0 6px rgba(255,91,0,.86),0 0 18px rgba(255,91,0,.38),inset 0 0 8px rgba(255,91,0,.2)}
        .hero-glow-main{z-index:2}.hero-copy,.hero-cta,.hero-scroll-cue{z-index:5}

        @keyframes depth-drift{0%,100%{transform:translate3d(0,0,0) scale(1)}50%{transform:translate3d(0,-3px,7px) scale(1.003)}}
        @media(max-width:699px){
          .hero-depth-portal{top:40%}
          .hero-depth-portal-far{width:142vw;height:86vh;border-width:26px}
          .hero-depth-portal-mid{width:116vw;height:76vh;border-width:22px}
          .hero-depth-portal-near{width:91vw;height:66vh;border-width:18px}
          .hero-depth-facet{width:46%;height:106%}
          .hero-depth-facet-left{left:-28%;transform:rotateY(27deg) translateZ(115px)}
          .hero-depth-facet-right{right:-28%;transform:rotateY(-27deg) translateZ(115px)}
          .hero-depth-void{width:60vw;height:58vh;top:41%}
          .hero-depth-floor{left:-54%;right:-54%;top:66%;height:52%}
          .hero-mascot{width:min(76vw,23rem)}.hero-orbit-one{width:min(84vw,26rem)}
        }
        @media(prefers-reduced-motion:reduce){.hero-depth-room{animation:none}}
      `}</style>

      <div className="hero-depth-scene" aria-hidden="true">
        <div className="hero-depth-room">
          <div className="hero-depth-void" />
          <div className="hero-depth-portal hero-depth-portal-far" />
          <div className="hero-depth-portal hero-depth-portal-mid" />
          <div className="hero-depth-portal hero-depth-portal-near" />
          <div className="hero-depth-facet hero-depth-facet-left" />
          <div className="hero-depth-facet hero-depth-facet-right" />
          <div className="hero-depth-floor" />
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
