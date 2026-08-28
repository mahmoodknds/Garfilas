export default function HeroLogo() {
  return (
    <div className="hero-logo-lockup" aria-label="Garfilas Italian Lasagna">
      <style>{`
        .hero-product-lockup{display:flex;align-items:center;justify-content:center;width:min(60vw,36rem);margin-top:-.64rem;gap:clamp(.28rem,.9vw,.52rem)}
        .hero-product-line{display:block;flex:1 1 0;height:.7px;min-width:2.9rem;max-width:5.8rem;background:linear-gradient(90deg,rgba(255,93,0,0),rgba(255,103,0,.66) 16%,#d98210 39%,#f1a523 50%,#d98210 61%,rgba(255,103,0,.66) 84%,rgba(255,93,0,0));box-shadow:0 0 .2px rgba(255,177,57,.72),0 0 .9px rgba(255,132,10,.48),0 0 2.2px rgba(255,88,0,.20),0 0 4px rgba(255,58,0,.04);opacity:.9}
        .hero-product-name{flex:0 0 auto;margin:0;font-family:var(--font-cormorant-garamond),serif;font-size:clamp(1.08rem,3.05vw,1.68rem);font-weight:300;line-height:.76;letter-spacing:.64em;text-indent:.64em;text-transform:uppercase;white-space:nowrap;transform:scaleX(.90);transform-origin:center;background:linear-gradient(180deg,#f2ad2d 0%,#df8b14 38%,#cc7410 70%,#b8640b 100%);-webkit-background-clip:text;background-clip:text;color:transparent;-webkit-text-fill-color:transparent;-webkit-text-stroke:0;filter:brightness(1.03) saturate(1.22);text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased;text-shadow:0 0 .10px rgba(255,207,115,.82),0 0 .38px rgba(255,164,35,.62),0 0 1.05px rgba(255,105,0,.38),0 0 2.35px rgba(255,73,0,.14),0 0 3.8px rgba(255,56,0,.035)}
        .hero-italy-flag{position:relative;width:clamp(3rem,8vw,4.8rem);height:2.5px;margin:.56rem auto 0;display:flex;overflow:hidden;isolation:isolate;clip-path:polygon(0 50%,14% 0,86% 0,100% 50%,86% 100%,14% 100%);mask-image:linear-gradient(90deg,transparent 0%,#000 12%,#000 88%,transparent 100%);-webkit-mask-image:linear-gradient(90deg,transparent 0%,#000 12%,#000 88%,transparent 100%);box-shadow:0 0 .7px rgba(255,236,188,.65),0 0 3px rgba(255,122,0,.28);opacity:.94}
        .hero-italy-flag span{height:100%;flex:1 1 33.333%;display:block}
        .hero-italy-green{background:#009246}.hero-italy-white{background:#f5f0df}.hero-italy-red{background:#ce2b37}
        .hero-slogan{margin-top:clamp(.72rem,2.5vw,.98rem);color:#f4a43c;font-family:"Brush Script MT","Segoe Script","URW Chancery L","Apple Chancery",cursive;font-size:clamp(.8rem,3.35vw,1.04rem);font-weight:400;font-style:normal;line-height:1.02;letter-spacing:-.015em;text-align:center;white-space:nowrap;text-shadow:0 0 .45px #ffe8b4,0 0 1.8px rgba(255,193,93,.72),0 0 5px rgba(255,122,0,.22)}
        @media(max-width:699px){.hero-product-lockup{width:min(74vw,24rem);margin-top:-.70rem;gap:clamp(.12rem,.8vw,.30rem)}.hero-product-line{height:.65px;min-width:1.45rem;max-width:3.0rem}.hero-product-name{font-size:clamp(.94rem,4.0vw,1.18rem);letter-spacing:.63em;text-indent:.63em;transform:scaleX(.90)}.hero-italy-flag{width:clamp(2.8rem,10vw,3.45rem);height:2.35px;margin-top:.5rem}.hero-slogan{margin-top:.72rem;font-size:clamp(.7rem,3.15vw,.86rem)}}
        @media(min-width:700px){.hero-product-lockup{width:min(60vw,36rem);margin-top:-.78rem;gap:clamp(.28rem,.9vw,.52rem)}.hero-product-line{height:.7px;min-width:2.9rem;max-width:5.8rem}.hero-product-name{font-size:clamp(1.08rem,3.05vw,1.68rem);letter-spacing:.64em;text-indent:.64em;transform:scaleX(.90)}.hero-italy-flag{width:5rem;height:2.5px;margin-top:.58rem}.hero-slogan{margin-top:.9rem;font-size:.96rem}}
      `}</style>

      <div className="hero-logo hero-logo-entrance" aria-hidden="true">
        <img className="hero-logo-artwork animate-neon-fault" src="/assets/brand/garfilas-reference-logo.svg" alt="" draggable={false} style={{display:"block",width:"min(76vw, 29rem)",height:"auto",maxWidth:"100%",maxHeight:"100%",objectFit:"contain",filter:"none"}} />
      </div>

      <div className="hero-product-lockup" aria-hidden="true">
        <span className="hero-product-line hero-product-line-left" />
        <span className="hero-product-name">LASAGNA</span>
        <span className="hero-product-line hero-product-line-right" />
      </div>

      <div className="hero-italy-flag" aria-label="Italian flag">
        <span className="hero-italy-green" />
        <span className="hero-italy-white" />
        <span className="hero-italy-red" />
      </div>

      <div className="hero-slogan" aria-hidden="true">Layers of Love, Taste of Italy</div>
      <span className="sr-only">Garfilas Italian Lasagna. Layers of Love, Taste of Italy.</span>
    </div>
  );
}
