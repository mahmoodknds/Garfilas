"use client";
import { useLayoutEffect } from "react";
type Kind="ambient"|"ring";
type Ember={el:HTMLSpanElement;animation:Animation;maxLife:number};
const rand=(a:number,b:number)=>Math.random()*(b-a)+a;
const sizeProfile=()=>{const r=Math.random();if(r<.07)return rand(1.2,1.8);if(r<.30)return rand(2,3);if(r<.56)return rand(3,4.2);if(r<.79)return rand(4.2,5.4);if(r<.94)return rand(5.4,6.7);return rand(7,9.2)};
export default function RingParticleEmitter(){
 useLayoutEffect(()=>{
  const scene=document.querySelector<HTMLElement>(".hero-depth-scene"),ring=document.querySelector<HTMLElement>(".hero-ring-heat");if(!scene||!ring)return;
  const layer=document.createElement("div");layer.className="hero-ring-particle-emitter";scene.appendChild(layer);
  const embers:Ember[]=[],maxParticles=720;let spawnTimer=rand(70,120),raf=0,last=performance.now(),stopped=false;
  const createAnimation=(el:HTMLSpanElement,kind:Kind,x:number,y:number,angle:number,size:number,depth:number,initial:boolean,releaseHold:number)=>{
   const maxLife=kind==="ambient"?rand(8200,12800):rand(7000,11000),distance=kind==="ambient"?rand(45,170):rand(55,205),outward=kind==="ambient"?rand(.45,.95):rand(.5,1),drift=rand(8,22),down=rand(8,24),sway=rand(10,30),phase=rand(0,Math.PI*2),speed=rand(.72,1.08),dx=Math.cos(angle)*distance*outward,dy=Math.sin(angle)*distance*outward+down,frames=[] as Keyframe[];
   const hold=initial&&kind==="ring"?releaseHold:0,holdRatio=hold/(maxLife/speed+hold);
   for(let i=0;i<=12;i++){const raw=i/12,t=holdRatio>0&&raw<holdRatio?0:(raw-holdRatio)/Math.max(.0001,1-holdRatio),eased=1-Math.pow(1-t,1.5),sx=Math.sin(phase+t*Math.PI*rand(.8,1.5))*sway*(1-t*.25),sy=Math.cos(phase*.73+t*Math.PI)*drift*(1-t*.2),opacity=raw<holdRatio?.28+depth*.34:(t<.06?t/.06:t>.84?(1-t)/.16:1),scale=.82+(1-t)*.30;frames.push({transform:`translate3d(${x+dx*eased+sx}px,${y+dy*eased+sy}px,0) scale(${scale})`,opacity:(opacity*depth*rand(.72,.98)).toFixed(3),offset:raw});}
   const animation=el.animate(frames,{duration:maxLife/speed+hold,delay:initial?0:rand(-3200,-500),easing:"linear",fill:"both"});animation.onfinish=()=>{if(stopped)return;el.remove();const i=embers.findIndex(p=>p.el===el);if(i>=0)embers.splice(i,1)};return {animation,maxLife};
  };
  const makeParticle=(kind:Kind,x:number,y:number,angle:number,initial=false,releaseHold=0)=>{if(embers.length>=maxParticles)return;const size=sizeProfile(),depth=rand(.34,1),el=document.createElement("span");el.className="hero-ring-particle";el.style.width=`${size}px`;el.style.height=`${size}px`;el.style.left="0";el.style.top="0";el.style.opacity="0";el.style.setProperty("--particle-depth",depth.toFixed(2));el.style.setProperty("--particle-kind",kind);layer.appendChild(el);const {animation,maxLife}=createAnimation(el,kind,x,y,angle,size,depth,initial,releaseHold);embers.push({el,animation,maxLife});};
  const sr=scene.getBoundingClientRect();for(let i=190;i--;)makeParticle("ambient",rand(18,sr.width-18),rand(18,sr.height-18),rand(0,Math.PI*2));
  const seedRing=()=>{const r=ring.getBoundingClientRect(),s=scene.getBoundingClientRect(),a=rand(0,Math.PI*2),rad=Math.min(r.width,r.height)*rand(.488,.502);makeParticle("ring",r.left-s.left+r.width/2+Math.cos(a)*rad,r.top-s.top+r.height/2+Math.sin(a)*rad,a,true,rand(350,2600));};for(let i=648;i--;)seedRing();
  const tick=(now:number)=>{if(stopped)return;const dt=Math.min(34,now-last);last=now;spawnTimer-=dt;if(spawnTimer<=0){const count=Math.random()<.55?2:1;for(let i=0;i<count;i++)seedRing();spawnTimer=rand(70,120)}raf=requestAnimationFrame(tick)};raf=requestAnimationFrame(tick);return()=>{stopped=true;cancelAnimationFrame(raf);for(const p of embers)p.animation.cancel();layer.remove()};
 },[]);return null;
}
