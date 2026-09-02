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
    let ringSpawnClock=rand(110,175);
    let ambientSpawnClock=rand(90,150);
    let microBurstClock=rand(780,1120);
    const startedAt=performance.now();

    const make=(x:number,y:number,angle:number,isRing=false,initial=false)=>{
      if(embers.length>=360)return;
      const size=sizeProfile(isRing);
      const el=document.createElement("span");
      el.className="hero-live-ember";
      Object.assign(el.style,{position:"absolute",left:`${x}px`,top:`${y}px`,width:`${size}px`,height:`${size}px`,borderRadius:"50%",opacity:"0",background:"radial-gradient(circle,rgba(255,224,145,.98) 0%,rgba(255,145,34,.76) 45%,rgba(255,75,8,0) 100%)",boxShadow:`0 0 ${Math.max(4,size*2.6)}px rgba(255,126,22,.30)`,willChange:"transform,opacity",contain:"layout style paint"});

      const distance=isRing?rand(48,155):rand(35,135);
      const dx=Math.cos(angle)*distance;
      const dy=Math.sin(angle)*distance+(isRing?rand(8,32):rand(12,48));
      const driftX=rand(-38,38);
      const driftY=rand(-8,30);
      const duration=initial?rand(18000,28000):isRing?rand(14500,22500):rand(17000,26000);
      const alpha=rand(.34,.80);
      const scaleEnd=rand(.30,.55);

      const animation=el.animate([
        {transform:"translate3d(0,0,0) scale(.72)",opacity:0},
        {transform:`translate3d(${dx*.18}px,${dy*.18}px,0) scale(1)`,opacity:alpha,offset:.12},
        {transform:`translate3d(${dx*.50+driftX*.25}px,${dy*.50+driftY*.22}px,0) scale(.80)`,opacity:alpha*.74,offset:.52},
        {transform:`translate3d(${dx*.76+driftX*.72}px,${dy*.76+driftY*.70}px,0) scale(${Math.max(scaleEnd,.38)})`,opacity:alpha*.34,offset:.82},
        {transform:`translate3d(${dx+driftX}px,${dy+driftY}px,0) scale(${scaleEnd})`,opacity:0,offset:.965},
        {transform:`translate3d(${dx+driftX*1.12}px,${dy+driftY+rand(8,20)}px,0) scale(.16)`,opacity:0}
      ],{duration,easing:"linear",fill:"both"});

      layer.appendChild(el);
      const ember:Ember={el,animation,ring:isRing,bornAt:performance.now(),duration};
      embers.push(ember);
      animation.onfinish=()=>{el.remove();const i=embers.indexOf(ember);if(i>=0)embers.splice(i,1)};
    };

    const ringPoint=()=>{
      if(!ring)return;
      const rr=ring.getBoundingClientRect();
      const a=rand(0,Math.PI*2);
      const radius=Math.min(rr.width,rr.height)*rand(.50,.525);
      make(rr.left+rr.width/2+Math.cos(a)*radius,rr.top+rr.height/2+Math.sin(a)*radius,a+rand(-.28,.28),true);
    };

    const sparkBurst=()=>{
      if(!ring)return;
      const rr=ring.getBoundingClientRect();
      const count=Math.floor(rand(5,9));
      for(let i=0;i<count;i++)ringPoint();
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
      microBurstClock-=dt;

      if(ring){
        const ringCount=embers.reduce((n,e)=>n+(e.ring?1:0),0);
        const warmup=now-startedAt<5500;
        const target=warmup?94:88;
        if(ringSpawnClock<=0&&ringCount<target){
          const burst=warmup?(Math.random()<.34?2:1):(ringCount<76?(Math.random()<.38?2:1):1);
          for(let i=0;i<burst&&ringCount+i<target;i++)ringPoint();
          ringSpawnClock=warmup?rand(140,205):rand(175,270);
        }
        if(microBurstClock<=0){
          sparkBurst();
          microBurstClock=rand(850,1150);
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
