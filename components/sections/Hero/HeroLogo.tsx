export default function HeroLogo() {
  return (
    <div className="hero-logo-lockup" aria-label="Garfilas Italian Lasagna">
      <style>{`
        .hero-product-lockup{display:flex;align-items:center;justify-content:center;width:min(82vw,31rem);margin-top:-.64rem;gap:clamp(1.02rem,3.5vw,1.42rem)}
        .hero-product-line{display:block;flex:1 1 0;height:1px;min-width:3.1rem;max-width:7.25rem;background:linear-gradient(90deg,rgba(255,154,54,0),rgba(255,168,65,.58) 18%,#fff9e7 50%,rgba(255,168,65,.58) 82%,rgba(255,154,54,0));box-shadow:0 0 .35px rgba(255,255,245,.98),0 0 1.5px rgba(255,232,184,.78),0 0 3.5px rgba(255,170,72,.42),0 0 7px rgba(255,119,12,.14);opacity:.88}
        .hero-product-name{flex:0 0 auto;margin:0;font-family:var(--font-bodoni-moda),serif;font-optical-sizing:auto;font-variation-settings:"opsz" 96,"wght" 400;font-size:clamp(.90rem,3.85vw,1.30rem);font-weight:400;line-height:.92;letter-spacing:.56em;text-indent:.56em;text-transform:uppercase;white-space:nowrap;transform:scaleX(.96);transform-origin:center;background:linear-gradient(180deg,#fffef7 0%,#fff7df 30%,#ffe6ad 63%,#ffd17d 100%);-webkit-background-clip:text;background-clip:text;color:transparent;-webkit-text-fill-color:transparent;filter:brightness(1.34) saturate(.82);text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased;text-shadow:0 0 .16px rgba(255,255,255,.98),0 0 .58px rgba(255,247,220,.98),0 0 1.45px rgba(255,229,175,.78),0 0 3.2px rgba(255,179,83,.46),0 0 7px rgba(255,119,18,.13)}
        .hero-italy-flag{position:relative;width:clamp(3rem,8vw,4.8rem);height:2.5px;margin:.56rem auto 0;display:flex;overflow:hidden;isolation:isolate;clip-path:polygon(0 50%,14% 0,86% 0,100% 50%,86% 100%,14% 100%);mask-image:linear-gradient(90deg,transparent 0%,#000 12%,#000 88%,transparent 100%);-webkit-mask-image:linear-gradient(90deg,transparent 0%,#000 12%,#000 88%,transparent 100%);box-shadow:0 0 .7px rgba(255,236,188,.65),0 0 3px rgba(255,122,0,.28);opacity:.94}
        .hero-italy-flag span{height:100%;flex:1 1 33.333%;display:block}
        .hero-italy-green{background:#009246}.hero-italy-white{background:#f5f0df}.hero-italy-red{background:#ce2b37}
        .hero-slogan{margin-top:clamp(.72rem,2.5vw,.98rem);color:#f4a43c;font-family:"Brush Script MT","Segoe Script","URW Chancery L","Apple Chancery",cursive;font-size:clamp(.8rem,3.35vw,1.04rem);font-weight:400;font-style:normal;line-height:1.02;letter-spacing:-.015em;text-align:center;white-space:nowrap;text-shadow:0 0 .45px #ffe8b4,0 0 1.8px rgba(255,193,93,.72),0 0 5px rgba(255,122,0,.22)}
        @media(max-width:699px){.hero-product-lockup{width:min(88vw,25rem);margin-top:-.70rem;gap:.82rem}.hero-product-line{min-width:2.6rem;max-width:5.25rem}.hero-product-name{font-size:clamp(.82rem,4.05vw,1.14rem);letter-spacing:.43em;text-indent:.43em;transform:scaleX(.97)}.hero-italy-flag{width:clamp(2.8rem,10vw,3.45rem);height:2.35px;margin-top:.5rem}.hero-slogan{margin-top:.72rem;font-size:clamp(.7rem,3.15vw,.86rem)}}
        @media(min-width:700px){.hero-product-lockup{width:min(68vw,30rem);margin-top:-.78rem;gap:1.28rem}.hero-product-line{min-width:5.05rem;max-width:7.8rem}.hero-product-name{font-size:1.34rem;letter-spacing:.45em;text-indent:.45em;transform:scaleX(.96)}.hero-italy-flag{width:5rem;height:2.5px;margin-top:.58rem}.hero-slogan{margin-top:.9rem;font-size:.96rem}}
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
