import HeroCTA from "./HeroCTA";
import HeroLogo from "./HeroLogo";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <style>{`
        .hero-depth-scene{position:absolute;inset:0;z-index:0;overflow:hidden;pointer-events:none;background:#020202;isolation:isolate;perspective:1400px;perspective-origin:50% 46%}
        .hero-depth-room{position:absolute;inset:0;transform-style:preserve-3d;animation:depth-drift 16s ease-in-out infinite}
        .hero-depth-panel{position:absolute;transform-style:preserve-3d;border:1px solid rgba(255,255,255,.055);background:linear-gradient(135deg,#11100e,#070706 62%,#030303);box-shadow:inset 0 0 70px rgba(0,0,0,.78),0 35px 90px rgba(0,0,0,.5)}
        .hero-depth-panel-a{left:-19%;top:7%;width:67%;height:72%;transform:rotateY(38deg) rotateZ(-1deg) translateZ(160px);clip-path:polygon(0 0,100% 9%,82% 100%,0 88%)}
        .hero-depth-panel-b{right:-19%;top:7%;width:67%;height:72%;transform:rotateY(-38deg) rotateZ(1deg) translateZ(160px);clip-path:polygon(0 9%,100% 0,100% 88%,18% 100%)}
        .hero-depth-panel-c{left:50%;top:18%;width:82%;height:82%;transform:translateX(-50%) translateZ(-180px);background:linear-gradient(120deg,#080807,#12110f 48%,#070706);clip-path:polygon(13% 0,87% 0,100% 100%,0 100%);box-shadow:inset 0 0 120px #000}
        .hero-depth-panel-d{left:50%;top:25%;width:62%;height:75%;transform:translateX(-50%) translateZ(-40px);background:#0b0a09;clip-path:polygon(15% 0,85% 0,100% 100%,0 100%);box-shadow:inset 0 0 95px #000,0 25px 60px rgba(0,0,0,.65)}
        .hero-depth-panel-e{left:50%;top:31%;width:45%;height:69%;transform:translateX(-50%) translateZ(110px);background:#11100e;clip-path:polygon(17% 0,83% 0,100% 100%,0 100%);box-shadow:inset 0 0 75px rgba(0,0,0,.9),0 25px 55px rgba(0,0,0,.6)}
        .hero-depth-panel-e:before{content:"";position:absolute;inset:7%;border:1px solid rgba(255,255,255,.045);clip-path:inherit;background:#080807;box-shadow:inset 0 0 65px #000}
        .hero-depth-slab{position:absolute;left:50%;top:67%;width:110%;height:48%;transform:translateX(-50%) rotateX(69deg) translateZ(100px);transform-origin:50% 0;background:linear-gradient(90deg,#020202 0%,#11100e 25%,#181614 50%,#11100e 75%,#020202);border:1px solid rgba(255,255,255,.05);box-shadow:inset 0 55px 90px #000}
        .hero-depth-slab:before{content:"";position:absolute;left:27%;right:27%;top:0;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.028),transparent);filter:blur(7px)}
        .hero-depth-edge{position:absolute;height:1px;background:rgba(255,255,255,.07);box-shadow:0 0 18px rgba(255,255,255,.035)}
        .hero-depth-edge.a{left:8%;top:73%;width:34%;transform:rotate(11deg)}.hero-depth-edge.b{right:8%;top:73%;width:34%;transform:rotate(-11deg)}
        .hero-depth-vignette{position:absolute;inset:0;background:radial-gradient(ellipse at 50% 47%,transparent 0 32%,rgba(0,0,0,.22) 57%,rgba(0,0,0,.82) 100%)}
        .hero-grid,.hero-orbit-two,.hero-glow-small,.hero-background-wall,.hero-background-architecture{display:none!important}
        .hero-mascot-frame{background:transparent!important}.hero-mascot-halo{display:none!important}.hero-mascot{z-index:3}.hero-orbit-one{z-index:4;border-color:rgba(255,123,18,.9);box-shadow:0 0 6px rgba(255,91,0,.86),0 0 18px rgba(255,91,0,.38),inset 0 0 8px rgba(255,91,0,.2)}.hero-glow-main{z-index:2}.hero-copy,.hero-cta,.hero-scroll-cue{z-index:5}
        @keyframes depth-drift{0%,100%{transform:translate3d(0,0,0) scale(1)}50%{transform:translate3d(0,-2px,7px) scale(1.004)}}
        @media(max-width:699px){.hero-depth-panel-a,.hero-depth-panel-b{width:84%;height:68%;top:10%}.hero-depth-panel-a{left:-39%;transform:rotateY(29deg) translateZ(120px)}.hero-depth-panel-b{right:-39%;transform:rotateY(-29deg) translateZ(120px)}.hero-depth-panel-c{width:150%;height:78%;top:21%}.hero-depth-panel-d{width:115%;height:73%;top:27%}.hero-depth-panel-e{width:84%;height:67%;top:33%}.hero-depth-slab{width:170%;top:68%}.hero-depth-edge.a{left:2%;width:39%}.hero-depth-edge.b{right:2%;width:39%}.hero-mascot{width:min(76vw,23rem)}.hero-orbit-one{width:min(84vw,26rem)}}
        @media(prefers-reduced-motion:reduce){.hero-depth-room{animation:none}}
      `}</style>
      <div className="hero-depth-scene" aria-hidden="true"><div className="hero-depth-room"><div className="hero-depth-panel hero-depth-panel-a"/><div className="hero-depth-panel hero-depth-panel-b"/><div className="hero-depth-panel hero-depth-panel-c"/><div className="hero-depth-panel hero-depth-panel-d"/><div className="hero-depth-panel hero-depth-panel-e"/><div className="hero-depth-slab"/><div className="hero-depth-edge a"/><div className="hero-depth-edge b"/></div><div className="hero-depth-vignette"/></div>
      <div className="hero-orbit hero-orbit-one" aria-hidden="true" /><div className="hero-glow hero-glow-main" aria-hidden="true" />
      <div className="hero-shell"><div className="hero-mascot" aria-label="Garfilas hero artwork"><div className="hero-mascot-frame"><img src="/assets/hero/garfilas-hero-final.webp" alt="Garfilas mascot enjoying handmade lasagna" width={1536} height={1024} fetchPriority="high" /></div></div><div className="hero-copy"><HeroLogo /></div><HeroCTA /><div className="hero-scroll-cue" aria-hidden="true" style={{marginTop:"10px"}}><style>{`.hero-scroll-cue span{transform:rotate(225deg)`}</style><span/><span/><span/></div></div>
    </section>
  );
}
