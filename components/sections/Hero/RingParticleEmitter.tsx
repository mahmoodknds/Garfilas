"use client";

import { useEffect } from "react";

type Ember={el:HTMLSpanElement;x:number;y:number;vx:number;vy:number;life:number;maxLife:number;size:number;drift:number;phase:number;opacity:number;exit:"edge"|"fade"};
const rand=(a:number,b:number)=>Math.random()*(b-a)+a;

export default function RingParticleEmitter(){
 useEffect(()=>{
  const scene=document.querySelector<HTMLElement>(".hero-depth-scene"),ring=document.querySelector<HTMLElement>(".hero-ring-heat");
  if(!scene||!ring)return;
  const layer=document.createElement("div");layer.className="hero-ring-particle-emitter";scene.appendChild(layer);
  const embers:Ember[]=[];const maxParticles=360;let last=performance.now(),acc=0,raf=0,stopped=false;
  const spawn=(warm=false,initialAge=0)=>{
   if(embers.length>=maxParticles)return;
   const rr=ring.getBoundingClientRect(),sr=scene.getBoundingClientRect(),cx=rr.left-sr.left+rr.width/2,cy=rr.top-sr.top+rr.height/2;
   const radius=Math.min(rr.width,rr.height)*rand(.488,.502),angle=rand(0,Math.PI*2),x=cx+Math.cos(angle)*radius,y=cy+Math.sin(angle)*radius;
   const size=rand(1,warm?3.4:3.2),outward=rand(1.5,5.8),tangent=rand(-6.5,6.5),gravity=rand(2.5,6.5),depth=rand(.32,1),speed=warm?rand(.32,.7):rand(.42,1);
   const el=document.createElement("span");el.className="hero-ring-particle";el.style.width=`${size}px`;el.style.height=`${size}px`;el.style.opacity="0";el.style.setProperty("--particle-depth",depth.toFixed(2));layer.appendChild(el);
   embers.push({el,x,y,vx:(Math.cos(angle)*outward+Math.cos(angle+Math.PI/2)*tangent)*speed,vy:(Math.sin(angle)*outward+Math.sin(angle+Math.PI/2)*tangent)*speed+gravity*.08,life:initialAge,maxLife:rand(1900,4100),size,drift:rand(.65,2.05),phase:rand(0,Math.PI*2),opacity:rand(.3,.82)*depth,exit:Math.random()<.72?"edge":"fade"});
  };
  // Start with a calm, spatially distributed population. Nothing is launched together.
  for(let i=0;i<216;i++)spawn(true,rand(250,1250));
  let initialRelease=0;
  const tick=(now:number)=>{
   if(stopped)return;const dt=Math.min(34,now-last);last=now;acc+=dt;
   // Continuous births: one or two at irregular intervals, never a synchronized burst.
   while(acc>=92){acc-=rand(68,112);spawn(false);if(Math.random()<.18)spawn(false);}
   const seconds=now/1000,rect=scene.getBoundingClientRect(),width=rect.width,height=rect.height;
   for(let i=embers.length-1;i>=0;i--){const p=embers[i];p.life+=dt;const t=p.life/p.maxLife;
    const swayX=Math.sin(seconds*p.drift+p.phase)*.34,swayY=Math.cos(seconds*p.drift*.71+p.phase*1.17)*.14;
    p.vy+=.0022*dt;p.vx+=swayX*.0055*dt;p.vy+=swayY*.0025*dt;p.vx*=.9991;p.vy*=.99935;p.x+=p.vx*dt*.035;p.y+=p.vy*dt*.035;
    const outside=p.x<-24||p.x>width+24||p.y<-24||p.y>height+24;
    if(outside||(p.exit==="fade"&&t>=.82)||t>=1){p.el.remove();embers.splice(i,1);continue;}
    const fadeIn=Math.min(1,p.life/220),fadeOut=p.exit==="fade"?Math.min(1,(1-t)/.16):Math.min(1,(1-t)/.1),pulse=.82+Math.sin(seconds*p.drift*1.9+p.phase)*.18,alpha=p.opacity*fadeIn*fadeOut*pulse,scale=.7+(1-t)*.34;
    p.el.style.transform=`translate3d(${p.x}px,${p.y}px,0) scale(${scale})`;p.el.style.opacity=alpha.toFixed(3);
   }
   raf=requestAnimationFrame(tick);
  };
  raf=requestAnimationFrame(tick);
  const onResize=()=>{for(const p of embers)p.life=Math.min(p.life,p.maxLife-50)};window.addEventListener("resize",onResize);
  return()=>{stopped=true;cancelAnimationFrame(raf);window.removeEventListener("resize",onResize);layer.remove()};
 },[]);return null;
}
