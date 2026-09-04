"use client";
import { useLayoutEffect } from "react";

type ParticleMode = "ambient" | "ring" | "burst" | "spark";
type Particle = {
  el: HTMLSpanElement;
  animation: Animation | null;
  mode: ParticleMode;
  bornAt: number;
};

const rand = (a: number, b: number) => Math.random() * (b - a) + a;

function sizeProfile(ring: boolean) {
  const r = Math.random();
  if (r < 0.03) return rand(1.4, 2.1);
  if (r < 0.17) return rand(2.3, 3.4);
  if (r < 0.42) return rand(3.4, 4.8);
  if (r < 0.67) return rand(4.8, 6.2);
  if (r < 0.92) return rand(6.2, 7.8);
  if (r < 0.985) return rand(8, 10.5);
  return ring ? rand(10.5, 13) : rand(9, 11);
}

export default function HeroParticleEngine() {
  useLayoutEffect(() => {
    const ring = document.querySelector<HTMLElement>(".hero-orbit-one");
    if (!ring) return;

    const layer = document.createElement("div");
    layer.className = "hero-live-embers";
    Object.assign(layer.style, {
      position: "fixed",
      inset: "0",
      overflow: "visible",
      pointerEvents: "none",
      zIndex: "2",
      isolation: "isolate",
    });
    document.body.appendChild(layer);

    const particles: Particle[] = [];
    const ringPool: Particle[] = [];
    const burstPool: Particle[] = [];
    const ambientPool: Particle[] = [];
    const sparkPool: Particle[] = [];
    let stopped = false;
    let raf = 0;
    let pulseClock = rand(1800, 2200);
    let pulseActive = false;
    let pulseRemaining = 0;
    let pulseIndex = 0;
    let sparkClock = rand(1600, 2100);
    let sparkSide: "left" | "right" = "right";

    const applyAnimation = (
      particle: Particle,
      keyframes: Keyframe[],
      duration: number,
      easing: string,
    ) => {
      particle.animation?.cancel();
      particle.animation = particle.el.animate(keyframes, {
        duration,
        easing,
        fill: "both",
      });
      particle.bornAt = performance.now();
    };

    const styleParticle = (el: HTMLSpanElement, size: number, spark = false) => {
      el.className = spark
        ? "hero-live-ember hero-live-spark"
        : "hero-live-ember";
      Object.assign(el.style, {
        position: "absolute",
        left: "0px",
        top: "0px",
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "50%",
        opacity: "0",
        background: spark
          ? "radial-gradient(circle,rgba(255,252,220,1) 0%,rgba(255,191,70,.98) 34%,rgba(255,91,8,.78) 62%,rgba(255,50,0,0) 100%)"
          : "radial-gradient(circle,rgba(255,224,145,.98) 0%,rgba(255,145,34,.76) 45%,rgba(255,75,8,0) 100%)",
        boxShadow: spark
          ? `0 0 ${Math.max(8, size * 4)}px rgba(255,174,52,.72),0 0 ${Math.max(14, size * 5.8)}px rgba(255,76,8,.24)`
          : `0 0 ${Math.max(4, size * 2.6)}px rgba(255,126,22,.30)`,
        contain: "layout style paint",
      });
    };

    const placeOnRing = (particle: Particle, mode: "ring" | "burst", side?: "left" | "right") => {
      const rr = ring.getBoundingClientRect();
      let angle = rand(0, Math.PI * 2);
      if (side) {
        const leftSide = angle > Math.PI / 2 && angle < Math.PI * 1.5;
        if ((side === "left") !== leftSide) angle += Math.PI;
      }

      const radius = Math.min(rr.width, rr.height) * rand(0.50, 0.525);
      const x = rr.left + rr.width / 2 + Math.cos(angle) * radius;
      const y = rr.top + rr.height / 2 + Math.sin(angle) * radius;
      const size = sizeProfile(true);
      const el = particle.el;
      styleParticle(el, size, mode === "burst");
      el.style.left = `${x}px`;
      el.style.top = `${y}px`;
      particle.mode = mode;

      if (mode === "burst") {
        const distance = rand(82, 155);
        const dx = Math.cos(angle) * distance;
        const dy = Math.sin(angle) * distance + rand(12, 32);
        const alpha = rand(0.72, 0.98);
        applyAnimation(
          particle,
          [
            { transform: "translate3d(0,0,0) scale(.42)", opacity: 0 },
            { transform: "translate3d(0,0,0) scale(1.12)", opacity: alpha, offset: 0.12 },
            { transform: `translate3d(${dx * 0.40}px,${dy * 0.40}px,0) scale(.94)`, opacity: alpha * 0.88, offset: 0.42 },
            { transform: `translate3d(${dx * 0.78}px,${dy * 0.78}px,0) scale(.56)`, opacity: alpha * 0.36, offset: 0.78 },
            { transform: `translate3d(${dx}px,${dy}px,0) scale(.10)`, opacity: 0, offset: 1 },
          ],
          rand(1050, 1550),
          "cubic-bezier(.18,.62,.30,1)",
        );
      } else {
        const distance = rand(24, 72);
        const dx = Math.cos(angle) * distance;
        const dy = Math.sin(angle) * distance + rand(7, 26);
        const alpha = rand(0.34, 0.78);
        applyAnimation(
          particle,
          [
            { transform: "translate3d(0,0,0) scale(.34)", opacity: 0 },
            { transform: `translate3d(${dx * 0.10}px,${dy * 0.10}px,0) scale(1)`, opacity: alpha, offset: 0.10 },
            { transform: `translate3d(${dx * 0.48}px,${dy * 0.48}px,0) scale(.82)`, opacity: alpha * 0.78, offset: 0.52 },
            { transform: `translate3d(${dx}px,${dy}px,0) scale(.30)`, opacity: 0, offset: 1 },
          ],
          rand(6200, 9200),
          "linear",
        );
      }
    };

    const placeAmbient = (particle: Particle) => {
      const w = innerWidth;
      const h = innerHeight;
      const x = rand(w * 0.08, w * 0.92);
      const y = rand(h * 0.08, h * 0.78);
      const size = sizeProfile(false);
      const el = particle.el;
      styleParticle(el, size);
      el.style.left = `${x}px`;
      el.style.top = `${y}px`;
      particle.mode = "ambient";
      const dx = rand(-18, 18);
      const dy = rand(16, 70);
      const alpha = rand(0.24, 0.68);
      applyAnimation(
        particle,
        [
          { transform: "translate3d(0,0,0) scale(.36)", opacity: 0 },
          { transform: `translate3d(${dx * 0.10}px,${dy * 0.10}px,0) scale(1)`, opacity: alpha, offset: 0.12 },
          { transform: `translate3d(${dx * 0.55}px,${dy * 0.55}px,0) scale(.72)`, opacity: alpha * 0.62, offset: 0.62 },
          { transform: `translate3d(${dx}px,${dy}px,0) scale(.22)`, opacity: 0, offset: 1 },
        ],
        rand(7600, 11200),
        "linear",
      );
    };

    const placeSpark = (particle: Particle, side: "left" | "right") => {
      const rr = ring.getBoundingClientRect();
      let angle = rand(0, Math.PI * 2);
      const leftSide = angle > Math.PI / 2 && angle < Math.PI * 1.5;
      if ((side === "left") !== leftSide) angle += Math.PI;
      const radius = Math.min(rr.width, rr.height) * rand(0.505, 0.53);
      const x = rr.left + rr.width / 2 + Math.cos(angle) * radius;
      const y = rr.top + rr.height / 2 + Math.sin(angle) * radius;
      const size = rand(2.4, 5.6);
      const el = particle.el;
      styleParticle(el, size, true);
      el.style.left = `${x}px`;
      el.style.top = `${y}px`;
      particle.mode = "spark";
      const distance = rand(42, 88);
      const dx = Math.cos(angle) * distance;
      const dy = Math.sin(angle) * distance + rand(8, 24);
      const alpha = rand(0.84, 1);
      applyAnimation(
        particle,
        [
          { transform: "translate3d(0,0,0) scale(.36)", opacity: 0 },
          { transform: `translate3d(${dx * 0.10}px,${dy * 0.10}px,0) scale(1.12)`, opacity: alpha, offset: 0.12 },
          { transform: `translate3d(${dx * 0.42}px,${dy * 0.42}px,0) scale(.92)`, opacity: alpha * 0.88, offset: 0.42 },
          { transform: `translate3d(${dx * 0.78}px,${dy * 0.78}px,0) scale(.48)`, opacity: alpha * 0.38, offset: 0.80 },
          { transform: `translate3d(${dx}px,${dy}px,0) scale(.12)`, opacity: 0, offset: 1 },
        ],
        rand(950, 1450),
        "cubic-bezier(.20,.62,.32,1)",
      );
    };

    const createPoolParticle = (mode: ParticleMode) => {
      const el = document.createElement("span");
      const particle: Particle = { el, animation: null, mode, bornAt: performance.now() };
      particles.push(particle);
      layer.appendChild(el);
      return particle;
    };

    // Fixed pool: DOM count stays constant. Particles are recycled instead of created/destroyed.
    for (let i = 0; i < 118; i++) ambientPool.push(createPoolParticle("ambient"));
    for (let i = 0; i < 76; i++) ringPool.push(createPoolParticle("ring"));
    for (let i = 0; i < 22; i++) burstPool.push(createPoolParticle("burst"));
    for (let i = 0; i < 12; i++) sparkPool.push(createPoolParticle("spark"));

    ambientPool.forEach((particle) => {
      const w = innerWidth;
      const h = innerHeight;
      const x = rand(w * 0.08, w * 0.92);
      const y = rand(h * 0.08, h * 0.78);
      styleParticle(particle.el, sizeProfile(false));
      particle.el.style.left = `${x}px`;
      particle.el.style.top = `${y}px`;
      particle.mode = "ambient";
      const dx = rand(-18, 18);
      const dy = rand(16, 70);
      const alpha = rand(0.24, 0.68);
      applyAnimation(particle, [
        { transform: `translate3d(${dx * 0.18}px,${dy * 0.18}px,0) scale(.68)`, opacity: alpha * 0.55 },
        { transform: `translate3d(${dx * 0.55}px,${dy * 0.55}px,0) scale(.82)`, opacity: alpha * 0.72, offset: .58 },
        { transform: `translate3d(${dx}px,${dy}px,0) scale(.22)`, opacity: 0, offset: 1 },
      ], rand(0, 11200), "linear");
    });

    ringPool.forEach((particle) => placeOnRing(particle, "ring"));
    burstPool.forEach((particle, index) => placeOnRing(particle, "ring", index % 2 ? "left" : "right"));
    sparkPool.forEach((particle, index) => placeSpark(particle, index % 2 ? "left" : "right"));

    const pulse = () => {
      pulseActive = true;
      pulseRemaining = rand(420, 560);
      pulseIndex = 0;
      // One breath releases a visible wave without changing the total DOM/particle pool.
      for (const particle of burstPool) {
        placeOnRing(particle, "burst", pulseIndex++ % 2 ? "left" : "right");
      }
    };

    let last = performance.now();
    const tick = (now: number) => {
      if (stopped) return;
      const dt = Math.min(64, Math.max(0, now - last));
      last = now;
      pulseClock -= dt;
      sparkClock -= dt;

      if (pulseClock <= 0) {
        pulse();
        pulseClock = rand(2150, 2850);
      }

      if (pulseActive) {
        pulseRemaining -= dt;
        if (pulseRemaining <= 0) {
          pulseActive = false;
          burstPool.forEach((particle, index) => {
            placeOnRing(particle, "ring", index % 2 ? "left" : "right");
          });
        }
      }

      if (sparkClock <= 0) {
        const count = Math.floor(rand(5, 9));
        for (let i = 0; i < count; i++) {
          placeSpark(sparkPool[i % sparkPool.length], sparkSide);
          sparkSide = sparkSide === "right" ? "left" : "right";
        }
        sparkClock = rand(1850, 2450);
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame((now) => {
      last = now;
      tick(now);
    });

    return () => {
      stopped = true;
      cancelAnimationFrame(raf);
      for (const particle of particles) particle.animation?.cancel();
      layer.remove();
    };
  }, []);

  return null;
}
