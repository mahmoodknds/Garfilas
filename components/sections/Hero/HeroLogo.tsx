export default function HeroLogo() {
  return (
    <div className="hero-logo-lockup" aria-label="Garfilas Italian Lasagna">
      <style>{`
        .hero-product-lockup{display:flex;align-items:center;justify-content:center;width:min(60vw,36rem);margin-top:-.64rem;gap:clamp(.28rem,.9vw,.52rem)}
        .hero-product-line{display:block;flex:1 1 0;height:.7px;min-width:2.9rem;max-width:5.8rem;background:linear-gradient(90deg,rgba(255,102,0,0),rgba(255,119,5,.72) 16%,#f39a1b 38%,#ffb936 50%,#f39a1b 62%,rgba(255,119,5,.72) 84%,rgba(255,102,0,0));box-shadow:0 0 .3px rgba(255,219,135,.9),0 0 1.2px rgba(255,176,48,.72),0 0 3px rgba(255,116,0,.38),0 0 6px rgba(255,76,0,.12);opacity:.94}
        .hero-product-name{flex:0 0 auto;margin:0;font-family:var(--font-cormorant-garamond),serif;font-size:clamp(1.08rem,3.05vw,1.68rem);font-weight:300;line-height:.76;letter-spacing:.64em;text-indent:.64em;text-transform:uppercase;white-space:nowrap;transform:scaleX(.90);transform-origin:center;background:linear-gradient(180deg,#ffc24b 0%,#f3a01f 44%,#dc7b0d 100%);-webkit-background-clip:text;background-clip:text;color:transparent;-webkit-text-fill-color:transparent;-webkit-text-stroke:0;filter:brightness(1.28) saturate(1.08);text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased;text-shadow:0 0 .16px rgba(255,229,169,.98),0 0 .62px rgba(255,194,78,.9),0 0 1.7px rgba(255,142,20,.56),0 0 3.8px rgba(255,91,0,.28),0 0 6.5px rgba(255,67,0,.10)}
        .hero-italy-flag{position:relative;width:clamp(7.4rem,25vw,16rem);height:2.1px;margin:.56rem auto 0;display:flex;overflow:hidden;isolation:isolate;clip-path:none;mask-image:linear-gradient(90deg,transparent 0%,#000 4%,#000 96%,transparent 100%);-webkit-mask-image:linear-gradient(90deg,transparent 0%,#000 4%,#000 96%,transparent 100%);box-shadow:0 0 .45px rgba(255,208,113,.75),0 0 2.4px rgba(255,119,5,.42),0 0 5px rgba(255,76,0,.14);opacity:.96}
        .hero-italy-flag span{height:100%;flex:1 1 0;display:block}
        .hero-italy-green{background:#009246}.hero-italy-white{background:#f4ead2}.hero-italy-red{background:#ce2b37}
        .hero-slogan{margin-top:clamp(.72rem,2.5vw,.98rem);color:#f4a43c;font-family:"Brush Script MT","Segoe Script","URW Chancery L","Apple Chancery",cursive;font-size:clamp(.8rem,3.35vw,1.04rem);font-weight:400;font-style:normal;line-height:1.02;letter-spacing:-.015em;text-align:center;white-space:nowrap;text-shadow:0 0 .45px #ffe8b4,0 0 1.8px rgba(255,193,93,.72),0 0 5px rgba(255,122,0,.22)}
        @media(max-width:699px){.hero-product-lockup{width:min(74vw,24rem);margin-top:-.70rem;gap:clamp(.12rem,.8vw,.30rem)}.hero-product-line{height:.65px;min-width:1.45rem;max-width:3.0rem}.hero-product-name{font-size:clamp(.94rem,4.0vw,1.18rem);letter-spacing:.63em;text-indent:.63em;transform:scaleX(.90)}.hero-italy-flag{width:clamp(5.1rem,29vw,8.2rem);height:1.9px;margin-top:.5rem}.hero-slogan{margin-top:.72rem;font-size:clamp(.7rem,3.15vw,.86rem)}}
        @media(min-width:700px){.hero-product-lockup{width:min(60vw,36rem);margin-top:-.78rem;gap:clamp(.28rem,.9vw,.52rem)}.hero-product-line{height:.7px;min-width:2.9rem;max-width:5.8rem}.hero-product-name{font-size:clamp(1.08rem,3.05vw,1.68rem);letter-spacing:.64em;text-indent:.64em;transform:scaleX(.90)}.hero-italy-flag{width:clamp(7.4rem,25vw,16rem);height:2.1px;margin-top:.58rem}.hero-slogan{margin-top:.9rem;font-size:.96rem}}
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
