"use client";

import { useEffect } from "react";

type Kind="ambient"|"ring";
type Ember={el:HTMLSpanElement;x:number;y:number;vx:number;vy:number;life:number;maxLife:number;size:number;drift:number;phase:number;opacity:number;kind:Kind;exit:"edge"|"fade";releaseAt:number;released:boolean};
const rand=(a:number,b:number)=>Math.random()*(b-a)+a;
const sizeProfile=()=>{const r=Math.random();if(r<.42)return rand(1.4,2.4);if(r<.76)return rand(2.4,4.2);if(r<.95)return rand(4.2,6.5);return rand(6.5,9);};

export default function RingParticleEmitter(){
 useEffect(()=>{
  const scene=document.querySelector<HTMLElement>(".hero-depth-scene"),ring=document.querySelector<HTMLElement>(".hero-ring-heat");if(!scene||!ring)return;
  const layer=document.createElement("div");layer.className="hero-ring-particle-emitter";scene.appendChild(layer);
  const embers:Ember[]=[];const maxParticles=720;let last=performance.now(),nextBirth=rand(45,90),raf=0,stopped=false;
  const makeParticle=(kind:Kind,x:number,y:number,angle:number,initial=false,releaseAt=0)=>{
   if(embers.length>=maxParticles)return;
   const size=sizeProfile(),depth=rand(.34,1),outward=rand(1.2,4.2),tangent=rand(-5.2,5.2),speed=rand(.34,.78),gravity=rand(1.8,4.2);
   const el=document.createElement("span");el.className="hero-ring-particle";el.style.width=`${size}px`;el.style.height=`${size}px`;el.style.opacity="0";el.style.setProperty("--particle-depth",depth.toFixed(2));el.style.setProperty("--particle-kind",kind);layer.appendChild(el);
   embers.push({el,x,y,vx:initial?0:(Math.cos(angle)*outward+Math.cos(angle+Math.PI/2)*tangent)*speed,vy:initial?0:(Math.sin(angle)*outward+Math.sin(angle+Math.PI/2)*tangent)*speed+gravity*.08,life:0,maxLife:kind==="ambient"?rand(5200,9200):rand(4600,7800),size,drift:rand(.55,1.65),phase:rand(0,Math.PI*2),opacity:rand(.34,.9)*depth,kind,exit:Math.random()<.72?"edge":"fade",releaseAt,released:!initial});
  };
  const sr=scene.getBoundingClientRect();
  for(let i=190;i--;)makeParticle("ambient",rand(18,sr.width-18),rand(18,sr.height-18),rand(0,Math.PI*2));
  const rr=ring.getBoundingClientRect(),cx=rr.left-sr.left+rr.width/2,cy=rr.top-sr.top+rr.height/2;
  for(let i=648;i--;){const angle=rand(0,Math.PI*2),radius=Math.min(rr.width,rr.height)*rand(.488,.502);makeParticle("ring",cx+Math.cos(angle)*radius,cy+Math.sin(angle)*radius,angle,true,rand(350,3200));}
  const tick=(now:number)=>{
   if(stopped)return;const dt=Math.min(34,now-last);last=now;nextBirth-=dt;
   if(nextBirth<=0){const n=Math.random()<.38?2:1;for(let i=0;i<n;i++)makeParticleAtRing();nextBirth=rand(45,90);}
   const seconds=now/1000,rect=scene.getBoundingClientRect(),width=rect.width,height=rect.height;
   for(let i=embers.length-1;i>=0;i--){const p=embers[i];
    if(p.kind==="ring"&&!p.released){p.releaseAt-=dt;const pulse=.72+Math.sin(seconds*p.drift+p.phase)*.07;p.el.style.transform=`translate3d(${p.x}px,${p.y}px,0) scale(${pulse})`;p.el.style.opacity=(p.opacity*.38).toFixed(3);if(p.releaseAt>0)continue;p.released=true;p.el.style.opacity="0";const a=Math.atan2(p.y-height/2,p.x-width/2);p.vx=(Math.cos(a)*rand(1.2,4.2)+Math.cos(a+Math.PI/2)*rand(-5.2,5.2))*rand(.34,.78);p.vy=(Math.sin(a)*rand(1.2,4.2)+Math.sin(a+Math.PI/2)*rand(-5.2,5.2))*rand(.34,.78);p.life=0;}
    if(!p.released)continue;p.life+=dt;const t=p.life/p.maxLife,swayX=Math.sin(seconds*p.drift+p.phase)*.34,swayY=Math.cos(seconds*p.drift*.71+p.phase*1.17)*.14;p.vy+=.0012*dt;p.vx+=swayX*.0035*dt;p.vy+=swayY*.0018*dt;p.vx*=.99935;p.vy*=.99955;p.x+=p.vx*dt*.035;p.y+=p.vy*dt*.035;
    const outside=p.x<-32||p.x>width+32||p.y<-32||p.y>height+32;if(outside||(p.exit==="fade"&&t>=.88)||t>=1){p.el.remove();embers.splice(i,1);continue;}
    const fadeIn=Math.min(1,p.life/260),fadeOut=p.exit==="fade"?Math.min(1,(1-t)/.14):Math.min(1,(1-t)/.08),pulse=.84+Math.sin(seconds*p.drift*1.7+p.phase)*.16,alpha=p.opacity*fadeIn*fadeOut*pulse,scale=.7+(1-t)*.36;p.el.style.transform=`translate3d(${p.x}px,${p.y}px,0) scale(${scale})`;p.el.style.opacity=alpha.toFixed(3);
   }raf=requestAnimationFrame(tick);
  };
  const makeParticleAtRing=()=>{const r=ring.getBoundingClientRect(),s=scene.getBoundingClientRect(),a=rand(0,Math.PI*2),rad=Math.min(r.width,r.height)*rand(.488,.502);makeParticle("ring",r.left-s.left+r.width/2+Math.cos(a)*rad,r.top-s.top+r.height/2+Math.sin(a)*rad,a,false);};
  raf=requestAnimationFrame(tick);return()=>{stopped=true;cancelAnimationFrame(raf);layer.remove()};
 },[]);return null;
}
