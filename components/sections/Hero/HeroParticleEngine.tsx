"use client";

import { useEffect } from "react";

const TARGET_RING_PARTICLES = 132;
const MAX_PARTICLES = 680;
const BREATH_DURATION = 7200;

export default function HeroParticleEngine() {
  useEffect(() => {
    const hero = document.querySelector<HTMLElement>(".hero");
    const ring = document.querySelector<HTMLElement>(".hero-orbit-one");
    const mascot = document.querySelector<HTMLElement>(".hero-mascot");
    const mascotArt = document.querySelector<HTMLImageElement>(".hero-mascot-frame img");
    if (!hero || !ring || !mascot || !mascotArt) return;

    const stage = document.createElement("div");
    stage.className = "hero-mascot-ring-stage";
    Object.assign(stage.style, {
      position: "absolute",
      inset: "0",
      width: "100%",
      height: "100%",
      pointerEvents: "none",
      zIndex: "6",
      transformOrigin: "50% 50%",
      willChange: "transform,filter",
    });

    const particleLayer = document.createElement("div");
    particleLayer.className = "hero-particle-layer";
    Object.assign(particleLayer.style, {
      position: "absolute",
      inset: "0",
      pointerEvents: "none",
      zIndex: "4",
      overflow: "visible",
    });

    hero.insertBefore(particleLayer, stage);
    hero.insertBefore(stage, ring);
    stage.appendChild(ring);
    stage.appendChild(mascot);

    const particles: HTMLElement[] = [];
    const ringParticles: HTMLElement[] = [];
    const rand = (min: number, max: number) => min + Math.random() * (max - min);

    const createParticle = (ringMode = false) => {
      const p = document.createElement("span");
      p.className = ringMode ? "hero-particle hero-particle-ring" : "hero-particle";
      const size = ringMode ? rand(1.1, 2.7) : rand(0.8, 2.2);
      p.style.position = "absolute";
      p.style.width = `${size}px`;
      p.style.height = `${size}px`;
      p.style.borderRadius = "50%";
      p.style.background = "rgba(255,154,54,.95)";
      p.style.boxShadow = ringMode
        ? "0 0 5px rgba(255,115,12,.9),0 0 10px rgba(255,83,0,.48)"
        : "0 0 4px rgba(255,118,18,.72),0 0 8px rgba(255,77,0,.28)";
      p.style.opacity = "0";
      p.style.pointerEvents = "none";
      particleLayer.appendChild(p);
      return p;
    };

    const positionRingParticle = (p: HTMLElement) => {
      const r = ring.getBoundingClientRect();
      const h = hero.getBoundingClientRect();
      const angle = rand(0, Math.PI * 2);
      const radius = rand(0.94, 1.02) * Math.min(r.width, r.height) * 0.5;
      const x = r.left - h.left + r.width * 0.5 + Math.cos(angle) * radius;
      const y = r.top - h.top + r.height * 0.5 + Math.sin(angle) * radius;
      p.style.left = `${x}px`;
      p.style.top = `${y}px`;
    };

    const positionAmbientParticle = (p: HTMLElement) => {
      const r = ring.getBoundingClientRect();
      const h = hero.getBoundingClientRect();
      const angle = rand(0, Math.PI * 2);
      const radius = rand(1.03, 1.28) * Math.min(r.width, r.height) * 0.5;
      p.style.left = `${r.left - h.left + r.width * 0.5 + Math.cos(angle) * radius}px`;
      p.style.top = `${r.top - h.top + r.height * 0.5 + Math.sin(angle) * radius}px`;
    };

    const spawnRing = () => {
      while (ringParticles.length < TARGET_RING_PARTICLES) {
        const p = createParticle(true);
        ringParticles.push(p);
        positionRingParticle(p);
        const duration = rand(5200, 7600);
        p.animate(
          [
            { opacity: 0, transform: "scale(.55) translate3d(0,0,0)" },
            { opacity: rand(0.72, 1), transform: "scale(1) translate3d(0,0,0)" },
            { opacity: 0, transform: `scale(.6) translate3d(${rand(-18,18)}px,${rand(-18,18)}px,0)` },
          ],
          { duration, easing: "ease-in-out", iterations: Infinity }
        );
      }
    };

    const sparkBurst = () => {
      const count = Math.round(rand(16, 24));
      for (let i = 0; i < count && particles.length < MAX_PARTICLES; i++) {
        const p = createParticle(false);
        particles.push(p);
        positionRingParticle(p);
        const dx = rand(-42, 42);
        const dy = rand(-42, 42);
        p.animate(
          [
            { opacity: 0, transform: "scale(.35) translate3d(0,0,0)" },
            { opacity: 1, transform: "scale(1.65) translate3d(0,0,0)" },
            { opacity: 0, transform: `scale(.15) translate3d(${dx}px,${dy}px,0)` },
          ],
          { duration: rand(900, 1450), easing: "cubic-bezier(.18,.72,.25,1)" }
        ).finished.finally(() => {
          p.remove();
          const index = particles.indexOf(p);
          if (index >= 0) particles.splice(index, 1);
        });
      }
    };

    const ambientSpawn = () => {
      const count = Math.random() < 0.34 ? 2 : 1;
      for (let i = 0; i < count && particles.length < MAX_PARTICLES; i++) {
        const p = createParticle(false);
        particles.push(p);
        positionAmbientParticle(p);
        p.animate(
          [
            { opacity: 0, transform: "translate3d(0,0,0) scale(.5)" },
            { opacity: rand(.34, .72), transform: `translate3d(${rand(-12,12)}px,${rand(-14,14)}px,0) scale(1)` },
            { opacity: 0, transform: `translate3d(${rand(-28,28)}px,${rand(-28,28)}px,0) scale(.45)` },
          ],
          { duration: rand(5200, 8200), easing: "ease-in-out" }
        ).finished.finally(() => {
          p.remove();
          const index = particles.indexOf(p);
          if (index >= 0) particles.splice(index, 1);
        });
      }
    };

    const syncRing = () => {
      const target = mascotArt.getBoundingClientRect();
      const stageRect = stage.getBoundingClientRect();
      const centerX = target.left + target.width / 2 - stageRect.left;
      const centerY = target.top + target.height / 2 - stageRect.top;
      const diameter = Math.max(target.width, target.height) * 1.10;
      stage.style.transformOrigin = `${centerX}px ${centerY}px`;
      ring.style.left = `${centerX}px`;
      ring.style.top = `${centerY}px`;
      ring.style.width = `${diameter}px`;
      ring.style.height = `${diameter}px`;
      ring.style.border = "2px solid rgba(255,106,0,.9)";
      ring.style.borderRadius = "50%";
      ring.style.background = "transparent";
      ring.style.boxShadow = "0 0 7px rgba(255,91,0,.72),0 0 18px rgba(255,91,0,.22),inset 0 0 8px rgba(255,91,0,.12)";
      ring.style.transform = "translate(-50%,-50%)";
      ring.style.transformStyle = "flat";
      ring.style.transformOrigin = "50% 50%";
      ring.style.zIndex = "2";
      particleLayer.style.zIndex = "4";
      stage.style.zIndex = "6";
    };

    let stageBreath: Animation | null = null;
    const releasePulse = () => {
      stageBreath?.cancel();
      stageBreath = stage.animate(
        [
          { scale: 1, filter: "brightness(1) drop-shadow(0 0 0 rgba(255,70,4,0))", offset: 0 },
          { scale: .996, filter: "brightness(1.02) drop-shadow(0 0 4px rgba(255,70,4,.08))", offset: .22 },
          { scale: .991, filter: "brightness(1.045) drop-shadow(0 0 7px rgba(255,70,4,.12))", offset: .48 },
          { scale: 1.007, filter: "brightness(1.07) drop-shadow(0 0 9px rgba(255,70,4,.15))", offset: .76 },
          { scale: 1, filter: "brightness(1) drop-shadow(0 0 0 rgba(255,70,4,0))", offset: 1 },
        ],
        { duration: BREATH_DURATION, easing: "ease-in-out", fill: "both" }
      );
    };

    spawnRing();
    syncRing();
    requestAnimationFrame(syncRing);
    mascotArt.addEventListener("load", syncRing);
    window.addEventListener("resize", syncRing);

    let pulseClock = rand(4200, 5000);
    let sparkClock = rand(700, 1100);
    let ambientSpawnClock = rand(70, 110);
    let last = performance.now();
    let raf = 0;

    const loop = (now: number) => {
      const dt = now - last;
      last = now;
      pulseClock -= dt;
      sparkClock -= dt;
      ambientSpawnClock -= dt;
      if (pulseClock <= 0) {
        releasePulse();
        pulseClock = rand(7600, 8400);
      }
      if (sparkClock <= 0) {
        sparkBurst();
        sparkClock = rand(1500, 2050);
      }
      if (ambientSpawnClock <= 0) {
        ambientSpawn();
        ambientSpawnClock = rand(80, 125);
      }
      spawnRing();
      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      stageBreath?.cancel();
      mascotArt.removeEventListener("load", syncRing);
      window.removeEventListener("resize", syncRing);
      particles.forEach((p) => p.remove());
      ringParticles.forEach((p) => p.remove());
      hero.insertBefore(ring, stage);
      hero.insertBefore(mascot, ring.nextSibling);
      stage.remove();
      particleLayer.remove();
    };
  }, []);

  return null;
}
