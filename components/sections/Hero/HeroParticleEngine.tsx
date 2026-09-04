"use client";
import { useLayoutEffect } from "react";

type Ember={el:HTMLSpanElement;animation:Animation;ring:boolean;bornAt:number;duration:number;spark:boolean};
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
    let liveRingCount=0;
    let stopped=false;
    let raf=0;
    let ambientSpawnClock=rand(90,150);
    let sparkClock=rand(1100,1500);
    let pulseClock=rand(1750,2150);
    let pulseRemaining=0;
    let pulseBudget=0;
    let pulseSpawnClock=0;
    let sparkSide:"left"|"right"="right";
    let ringPoint:(spark?:boolean,forcedSide?:"left"|"right")=>void=()=>{};

    const make=(x:number,y:number,angle:number,isRing=false,initial=false,spark=false)=>{
      if(embers.length>=280)return;
      const size=spark?rand(2.4,5.6):sizeProfile(isRing);
      const el=document.createElement("span");
      el.className=spark?"hero-live-ember hero-live-spark":"hero-live-ember";
      Object.assign(el.style,{position:"absolute",left:`${x}px`,top:`${y}px`,width:`${size}px`,height:`${size}px`,borderRadius:"50%",opacity:"0",background:spark?"radial-gradient(circle,rgba(255,252,220,1) 0%,rgba(255,191,70,.98) 34%,rgba(255,91,8,.78) 62%,rgba(255,50,0,0) 100%)":"radial-gradient(circle,rgba(255,224,145,.98) 0%,rgba(255,145,34,.76) 45%,rgba(255,75,8,0) 100%)",boxShadow:spark?`0 0 ${Math.max(8,size*4)}px rgba(255,174,52,.72),0 0 ${Math.max(14,size*5.8)}px rgba(255,76,8,.24)`:`0 0 ${Math.max(4,size*2.6)}px rgba(255,126,22,.30)`,contain:"layout style paint"});

      const distance=spark?rand(40,88):isRing?rand(48,155):rand(35,135);
      const dx=Math.cos(angle)*distance;
      const dy=Math.sin(angle)*distance+(spark?rand(8,24):isRing?rand(10,36):rand(14,46));
      const driftX=rand(-3,3);
      const driftY=rand(-4,16);
      const duration=spark?rand(9000,13000):initial?rand(12000,18000):isRing?rand(10000,16000):rand(11000,17000);
      const alpha=spark?rand(.84,1):rand(.34,.80);
      const scaleEnd=spark?rand(.22,.38):rand(.30,.55);

      const animation=el.animate([
        {transform:"translate3d(0,0,0) scale(.45)",opacity:0},
        {transform:`translate3d(${dx*.08}px,${dy*.08}px,0) scale(${spark?1.04:1})`,opacity:0,offset:0},
        {transform:`translate3d(${dx*.10}px,${dy*.10}px,0) scale(${spark?1.12:1})`,opacity:alpha,offset:spark?.12:.12},
        {transform:`translate3d(${dx*.38+driftX*.18}px,${dy*.38+driftY*.16}px,0) scale(${spark?.92:.80})`,opacity:spark?alpha*.92:alpha*.74,offset:spark?.38:.52},
        {transform:`translate3d(${dx*.70+driftX*.45}px,${dy*.70+driftY*.60}px,0) scale(${Math.max(scaleEnd,spark?.54:.38)})`,opacity:spark?alpha*.58:alpha*.34,offset:spark?.68:.82},
        {transform:`translate3d(${dx+driftX}px,${dy+driftY}px,0) scale(${scaleEnd})`,opacity:0,offset:.975},
        {transform:`translate3d(${dx+driftX*1.05}px,${dy+driftY+rand(4,10)}px,0) scale(.08)`,opacity:0}
      ],{duration,easing:spark?"cubic-bezier(.28,.58,.38,1)":"linear",fill:"both"});

      layer.appendChild(el);
      const ember:Ember={el,animation,ring:isRing,bornAt:performance.now(),duration,spark};
      embers.push(ember);
      if(isRing)liveRingCount++;
      if(initial&&isRing)animation.currentTime=rand(0,4200);
      animation.onfinish=()=>{
        if(stopped)return;
        el.remove();
        const i=embers.indexOf(ember);
        if(i>=0)embers.splice(i,1);
        if(isRing){
          liveRingCount=Math.max(0,liveRingCount-1);
          ringPoint(false);
        }
      };
    };

    ringPoint=(spark=false,forcedSide?:"left"|"right")=>{
      if(!ring)return;
      const rr=ring.getBoundingClientRect();
      let a=rand(0,Math.PI*2);
      if(forcedSide){
        const leftSide=a>Math.PI/2&&a<Math.PI*1.5;
        if((forcedSide==="left")!==leftSide)a+=Math.PI;
      }
      const radius=Math.min(rr.width,rr.height)*rand(.50,.525);
      make(rr.left+rr.width/2+Math.cos(a)*radius,rr.top+rr.height/2+Math.sin(a)*radius,a+rand(-.18,.18),true,false,spark);
    };

    const sparkBurst=()=>{
      if(!ring)return;
      const count=Math.floor(rand(6,10));
      for(let i=0;i<count;i++){
        const side=sparkSide;
        ringPoint(true,side);
        sparkSide=side==="right"?"left":"right";
      }
    };

    const startPulse=()=>{
      pulseRemaining=rand(340,500);
      pulseBudget=Math.floor(rand(20,30));
      pulseSpawnClock=rand(0,45);
    };

    const pulseStep=(dt:number)=>{
      if(!ring||pulseRemaining<=0||pulseBudget<=0)return;
      pulseRemaining-=dt;
      pulseSpawnClock-=dt;
      if(pulseSpawnClock<=0){
        const batch=Math.min(pulseBudget,Math.floor(rand(2,4)));
        for(let i=0;i<batch;i++){
          const side=Math.random()<.20?(Math.random()<.5?"left":"right"):undefined;
          ringPoint(false,side);
        }
        pulseBudget-=batch;
        pulseSpawnClock=rand(55,95);
      }
    };

    const ambientPoint=()=>{
      const w=innerWidth,h=innerHeight;
      const x=rand(w*.08,w*.92);
      const y=rand(h*.08,h*.78);
      if(y>h*.60&&Math.random()<.64)return false;
      make(x,y,rand(-Math.PI*.10,Math.PI*.10),false);
      return true;
    };

    const seedAmbient=()=>{
      const w=innerWidth,h=innerHeight;
      for(let i=0;i<120;i++){
        const x=rand(w*.08,w*.92),y=rand(h*.08,h*.78);
        if(y>h*.60&&Math.random()<.64)continue;
        make(x,y,rand(-Math.PI*.10,Math.PI*.10),false,true);
      }
    };

    seedAmbient();
    for(let i=0;i<72;i++)ringPoint();
    startPulse();
    sparkBurst();

    let last=performance.now();
    const tick=(now:number)=>{
      if(stopped)return;
      const dt=Math.min(64,Math.max(0,now-last));
      last=now;
      ambientSpawnClock-=dt;
      sparkClock-=dt;
      pulseClock-=dt;

      if(ring){
        if(pulseClock<=0){
          startPulse();
          pulseClock=rand(1900,2250);
        }
        pulseStep(dt);

        if(sparkClock<=0){
          sparkBurst();
          sparkClock=rand(1900,2500);
        }
      }

      if(ambientSpawnClock<=0){
        let made=0;
        let attempts=0;
        while(made<2&&attempts<8){
          attempts++;
          if(!ambientPoint())continue;
          made++;
        }
        ambientSpawnClock=rand(150,260);
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
