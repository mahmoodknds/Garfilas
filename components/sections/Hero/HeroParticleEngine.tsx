"use client";

import { useEffect } from "react";

const TARGET_RING_PARTICLES = 132;
const MAX_PARTICLES = 680;
const BREATH_DURATION = 7200;

export default function HeroParticleEngine() {
  useEffect(() => {
    let disposed = false;
    let raf = 0;
    let breathMascot: Animation | null = null;
    let breathRing: Animation | null = null;

    const hero = document.querySelector<HTMLElement>(".hero");
    const ring = document.querySelector<HTMLElement>(".hero-orbit-one");
    const mascot = document.querySelector<HTMLElement>(".hero-mascot");
    const mascotArt = document.querySelector<HTMLImageElement>(".hero-mascot-frame img");

    if (!hero || !ring || !mascot || !mascotArt) return;

    const particleLayer = document.createElement("div");
    particleLayer.className = "hero-particle-layer";
    Object.assign(particleLayer.style, {
      position: "absolute",
      inset: "0",
      pointerEvents: "none",
      zIndex: "4",
      overflow: "visible",
    });
    hero.insertBefore(particleLayer, hero.firstChild);

    const particles: HTMLElement[] = [];
    const ringParticles: HTMLElement[] = [];
    const rand = (min: number, max: number) => min + Math.random() * (max - min);
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));

    const createParticle = (ringMode = false) => {
      const p = document.createElement("span");
      p.className = ringMode ? "hero-particle hero-particle-ring" : "hero-particle";
      const size = ringMode ? rand(1.2, 2.8) : rand(0.9, 2.3);
      Object.assign(p.style, {
        position: "absolute",
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "50%",
        background: "rgba(255,160,58,.98)",
        opacity: "0",
        pointerEvents: "none",
      });
      p.style.boxShadow = ringMode
        ? "0 0 6px rgba(255,125,15,1),0 0 13px rgba(255,83,0,.62),0 0 22px rgba(255,63,0,.24)"
        : "0 0 5px rgba(255,126,20,.82),0 0 10px rgba(255,77,0,.34)";
      particleLayer.appendChild(p);
      return p;
    };

    const getContainingRect = (element: HTMLElement) => {
      const parent = element.offsetParent instanceof HTMLElement ? element.offsetParent : hero;
      return { parent, rect: parent.getBoundingClientRect() };
    };

    const positionRingParticle = (p: HTMLElement, index = ringParticles.length, spread = 1) => {
      const r = ring.getBoundingClientRect();
      const { rect: parentRect } = getContainingRect(particleLayer);
      if (!r.width || !r.height || !parentRect.width || !parentRect.height) return;
      const angle = index * goldenAngle + rand(-0.04, 0.04);
      const radius = rand(0.965, 1.01) * Math.min(r.width, r.height) * 0.5 * spread;
      p.style.left = `${r.left - parentRect.left + r.width * 0.5 + Math.cos(angle) * radius}px`;
      p.style.top = `${r.top - parentRect.top + r.height * 0.5 + Math.sin(angle) * radius}px`;
    };

    const positionAmbientParticle = (p: HTMLElement) => {
      const r = ring.getBoundingClientRect();
      const { rect: parentRect } = getContainingRect(particleLayer);
      if (!r.width || !r.height || !parentRect.width || !parentRect.height) return;
      const angle = rand(0, Math.PI * 2);
      const radius = rand(1.04, 1.30) * Math.min(r.width, r.height) * 0.5;
      p.style.left = `${r.left - parentRect.left + r.width * 0.5 + Math.cos(angle) * radius}px`;
      p.style.top = `${r.top - parentRect.top + r.height * 0.5 + Math.sin(angle) * radius}px`;
    };

    const spawnRing = () => {
      if (disposed) return;
      while (ringParticles.length < TARGET_RING_PARTICLES) {
        const index = ringParticles.length;
        const p = createParticle(true);
        ringParticles.push(p);
        positionRingParticle(p, index);
        p.animate(
          [
            { opacity: 0, transform: "scale(.55) translate3d(0,0,0)" },
            { opacity: rand(0.84, 1), transform: "scale(1) translate3d(0,0,0)" },
            { opacity: 0, transform: `scale(.6) translate3d(${rand(-12,12)}px,${rand(-12,12)}px,0)` },
          ],
          { duration: rand(5200, 7600), easing: "ease-in-out", iterations: Infinity }
        );
      }
    };

    const finishParticle = (p: HTMLElement) => {
      p.remove();
      const index = particles.indexOf(p);
      if (index >= 0) particles.splice(index, 1);
    };

    const sparkBurst = () => {
      if (disposed) return;
      const count = Math.round(rand(20, 30));
      for (let i = 0; i < count && particles.length < MAX_PARTICLES; i++) {
        const p = createParticle(false);
        particles.push(p);
        positionRingParticle(p, i + Math.floor(Math.random() * TARGET_RING_PARTICLES), rand(1.0, 1.035));
        const dx = rand(-42, 42);
        const dy = rand(-42, 42);
        const animation = p.animate(
          [
            { opacity: 0, transform: "scale(.28) translate3d(0,0,0)" },
            { opacity: 1, transform: "scale(2.15) translate3d(0,0,0)" },
            { opacity: 0, transform: `scale(.08) translate3d(${dx}px,${dy}px,0)` },
          ],
          { duration: rand(850, 1350), easing: "cubic-bezier(.18,.72,.25,1)" }
        );
        animation.finished.then(() => finishParticle(p)).catch(() => finishParticle(p));
      }
    };

    const ambientSpawn = () => {
      if (disposed) return;
      const count = Math.random() < 0.55 ? 2 : 1;
      for (let i = 0; i < count && particles.length < MAX_PARTICLES; i++) {
        const p = createParticle(false);
        particles.push(p);
        positionAmbientParticle(p);
        const animation = p.animate(
          [
            { opacity: 0, transform: "translate3d(0,0,0) scale(.5)" },
            { opacity: rand(.42, .82), transform: `translate3d(${rand(-12,12)}px,${rand(-14,14)}px,0) scale(1)` },
            { opacity: 0, transform: `translate3d(${rand(-28,28)}px,${rand(-28,28)}px,0) scale(.45)` },
          ],
          { duration: rand(5200, 8200), easing: "ease-in-out" }
        );
        animation.finished.then(() => finishParticle(p)).catch(() => finishParticle(p));
      }
    };

    const syncRing = () => {
      if (disposed) return;
      const target = mascotArt.getBoundingClientRect();
      const ringParent = ring.offsetParent instanceof HTMLElement ? ring.offsetParent : hero;
      const parentRect = ringParent.getBoundingClientRect();
      if (!target.width || !target.height || !parentRect.width || !parentRect.height) return;

      const centerX = target.left + target.width / 2 - parentRect.left;
      const centerY = target.top + target.height / 2 - parentRect.top;
      const diameter = Math.max(target.width, target.height) * 1.10;

      Object.assign(ring.style, {
        position: "absolute",
        left: `${centerX}px`,
        top: `${centerY}px`,
        width: `${diameter}px`,
        height: `${diameter}px`,
        border: "2px solid rgba(255,106,0,.9)",
        borderRadius: "50%",
        background: "transparent",
        boxShadow: "0 0 7px rgba(255,91,0,.72),0 0 18px rgba(255,91,0,.22),inset 0 0 8px rgba(255,91,0,.12)",
        transform: "translate(-50%,-50%)",
        transformOrigin: "50% 50%",
        transformStyle: "flat",
        zIndex: "20",
      });
      mascot.style.position = mascot.style.position || "relative";
      mascot.style.zIndex = "10";
      particleLayer.style.zIndex = "4";
    };

    const releasePulse = () => {
      if (disposed) return;
      breathMascot?.cancel();
      breathRing?.cancel();
      const keyframes: Keyframe[] = [
        { scale: 1, filter: "brightness(1) drop-shadow(0 0 0 rgba(255,70,4,0))", offset: 0 },
        { scale: .996, filter: "brightness(1.02) drop-shadow(0 0 4px rgba(255,70,4,.08))", offset: .22 },
        { scale: .991, filter: "brightness(1.045) drop-shadow(0 0 7px rgba(255,70,4,.12))", offset: .48 },
        { scale: 1.007, filter: "brightness(1.07) drop-shadow(0 0 9px rgba(255,70,4,.15))", offset: .76 },
        { scale: 1, filter: "brightness(1) drop-shadow(0 0 0 rgba(255,70,4,0))", offset: 1 },
      ];
      const options: KeyframeAnimationOptions = { duration: BREATH_DURATION, easing: "ease-in-out", fill: "both" };
      breathMascot = mascot.animate(keyframes, options);
      breathRing = ring.animate(keyframes, options);
    };

    try {
      spawnRing();
      syncRing();
      requestAnimationFrame(syncRing);
      mascotArt.addEventListener("load", syncRing);
      window.addEventListener("resize", syncRing);

      let pulseClock = rand(4200, 5000);
      let sparkClock = rand(700, 1100);
      let ambientSpawnClock = rand(70, 110);
      let last = performance.now();

      const loop = (now: number) => {
        if (disposed) return;
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
    } catch (error) {
      console.error("[Garfilas] Hero particle engine failed to initialize", error);
    }

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      breathMascot?.cancel();
      breathRing?.cancel();
      mascotArt.removeEventListener("load", syncRing);
      window.removeEventListener("resize", syncRing);
      particles.forEach((p) => p.remove());
      ringParticles.forEach((p) => p.remove());
      particleLayer.remove();
    };
  }, []);

  return null;
}
