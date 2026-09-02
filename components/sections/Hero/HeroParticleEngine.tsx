"use client";
import { useLayoutEffect } from "react";

type Ember={el:HTMLSpanElement;animation:Animation;ring:boolean;bornAt:number;duration:number};
const rand=(a:number,b:number)=>Math.random()*(b-a)+a;
function sizeProfile(ring:boolean){const r=Math.random();if(r<.03)return rand(1.4,2.1);if(r<.17)return rand(2.3,3.4);if(r<.42)return rand(3.4,4.8);if(r<.67)return rand(4.8,6.2);if(r<.92)return rand(6.2,7.8);if(r<.985)return rand(8,10.5);return ring?rand(10.5,13):rand(9,11)}

export default function HeroParticleEngine(){
  useLayoutEffect(()=>{
    const ring=document.querySelector<HTMLElement>(".hero-orbit-one");
    const layer=document.createElement("div");
    layer.className="hero-live-embers";
    Object.assign(layer.style,{position:"fixed",inset:"0",overflow:"visible",pointerEvents:"none",zIndex:"2",isolation:"isolate"});
    document.body.appendChild(layer);

    const embers:Ember[]=[];
    let stopped=false;
    let raf=0;
    let ringSpawnClock=rand(90,145);
    let ambientSpawnClock=rand(90,150);
    let sparkClock=rand(700,980);
    const startedAt=performance.now();

    const make=(x:number,y:number,angle:number,isRing=false,initial=false,spark=false)=>{
      if(embers.length>=360)return;
      const size=spark?rand(2.2,5.2):sizeProfile(isRing);
      const el=document.createElement("span");
      el.className=spark?"hero-live-ember hero-live-spark":"hero-live-ember";
      Object.assign(el.style,{position:"absolute",left:`${x}px`,top:`${y}px`,width:`${size}px`,height:`${size}px`,borderRadius:"50%",opacity:"0",background:spark?"radial-gradient(circle,rgba(255,250,205,1) 0%,rgba(255,188,62,.98) 34%,rgba(255,93,8,.78) 62%,rgba(255,50,0,0) 100%)":"radial-gradient(circle,rgba(255,224,145,.98) 0%,rgba(255,145,34,.76) 45%,rgba(255,75,8,0) 100%)",boxShadow:spark?`0 0 ${Math.max(8,size*3.8)}px rgba(255,164,48,.72) 0 0 ${Math.max(14,size*6)}px rgba(255,76,8,.24)`: `0 0 ${Math.max(4,size*2.6)}px rgba(255,126,22,.30)`,willChange:"transform,opacity",contain:"layout style paint"});

      const distance=spark?rand(22,72):isRing?rand(48,155):rand(35,135);
      const dx=Math.cos(angle)*distance;
      const dy=Math.sin(angle)*distance+(spark?rand(10,34):isRing?rand(8,32):rand(12,48));
      const driftX=rand(-26,26);
      const driftY=rand(-5,24);
      const duration=spark?rand(900,1700):initial?rand(18000,28000):isRing?rand(14500,22500):rand(17000,26000);
      const alpha=spark?rand(.78,1):rand(.34,.80);
      const scaleEnd=spark?rand(.12,.30):rand(.30,.55);

      const animation=el.animate([
        {transform:"translate3d(0,0,0) scale(.45)",opacity:0},
        {transform:`translate3d(${dx*.10}px,${dy*.10}px,0) scale(${spark?1.15:1})`,opacity:alpha,offset:spark?.10:.12},
        {transform:`translate3d(${dx*.42+driftX*.18}px,${dy*.42+driftY*.16}px,0) scale(${spark?.78:.80})`,opacity:spark?alpha*.78:alpha*.74,offset:spark?.42:.52},
        {transform:`translate3d(${dx*.72+driftX*.55}px,${dy*.72+driftY*.62}px,0) scale(${Math.max(scaleEnd,spark?.24:.38)})`,opacity:spark?alpha*.34:alpha*.34,offset:spark?.72:.82},
        {transform:`translate3d(${dx+driftX}px,${dy+driftY}px,0) scale(${scaleEnd})`,opacity:0,offset:.965},
        {transform:`translate3d(${dx+driftX*1.12}px,${dy+driftY+rand(5,14)}px,0) scale(.08)`,opacity:0}
      ],{duration,easing:spark?"cubic-bezier(.18,.72,.28,1)":"linear",fill:"both"});

      layer.appendChild(el);
      const ember:Ember={el,animation,ring:isRing,bornAt:performance.now(),duration};
      embers.push(ember);
      animation.onfinish=()=>{el.remove();const i=embers.indexOf(ember);if(i>=0)embers.splice(i,1)};
    };

    const ringPoint=(spark=false)=>{
      if(!ring)return;
      const rr=ring.getBoundingClientRect();
      const a=rand(0,Math.PI*2);
      const radius=Math.min(rr.width,rr.height)*rand(.50,.525);
      make(rr.left+rr.width/2+Math.cos(a)*radius,rr.top+rr.height/2+Math.sin(a)*radius,a+rand(-.28,.28),true,false,spark);
    };

    const sparkBurst=()=>{
      if(!ring)return;
      const count=Math.floor(rand(8,14));
      for(let i=0;i<count;i++)ringPoint(true);
    };

    const ambientPoint=()=>{
      const w=innerWidth,h=innerHeight;
      const x=rand(w*.08,w*.92);
      const y=rand(h*.08,h*.78);
      if(y>h*.60&&Math.random()<.64)return false;
      make(x,y,rand(-Math.PI*.16,Math.PI*.16),false);
      return true;
    };

    const seedAmbient=()=>{
      const w=innerWidth,h=innerHeight;
      for(let i=0;i<185;i++){
        const x=rand(w*.08,w*.92),y=rand(h*.08,h*.78);
        if(y>h*.60&&Math.random()<.64)continue;
        make(x,y,rand(-Math.PI*.16,Math.PI*.16),false,true);
      }
    };

    seedAmbient();
    for(let i=0;i<84;i++)ringPoint();
    sparkBurst();

    let last=performance.now();
    const tick=(now:number)=>{
      if(stopped)return;
      const dt=Math.min(64,Math.max(0,now-last));
      last=now;
      ringSpawnClock-=dt;
      ambientSpawnClock-=dt;
      sparkClock-=dt;

      if(ring){
        const ringCount=embers.reduce((n,e)=>n+(e.ring&&!e.el.classList.contains("hero-live-spark")?1:0),0);
        const warmup=now-startedAt<5500;
        const target=warmup?94:88;
        if(ringSpawnClock<=0&&ringCount<target){
          const burst=warmup?(Math.random()<.34?2:1):(ringCount<76?(Math.random()<.38?2:1):1);
          for(let i=0;i<burst&&ringCount+i<target;i++)ringPoint();
          ringSpawnClock=warmup?rand(120,180):rand(155,235);
        }
        if(sparkClock<=0){
          sparkBurst();
          sparkClock=rand(900,1150);
        }
        if(ringCount<74){
          ringPoint();
          if(Math.random()<.32)ringPoint();
        }
      }

      if(ambientSpawnClock<=0){
        let made=0;
        while(made<2&&ambientPoint())made++;
        ambientSpawnClock=rand(140,240);
      }

      raf=requestAnimationFrame(tick);
    };

    raf=requestAnimationFrame((now)=>{last=now;tick(now)});

    return()=>{
      stopped=true;
      cancelAnimationFrame(raf);
      for(const ember of embers)ember.animation.cancel();
      layer.remove();
    };
  },[]);

  return null;
}
