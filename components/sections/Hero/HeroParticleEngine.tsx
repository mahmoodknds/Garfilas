"use client";

import { useEffect } from "react";

type LiveParticle = {
  el: HTMLSpanElement;
  animation: Animation;
};

const rand = (min: number, max: number) => Math.random() * (max - min) + min;

export default function HeroParticleEngine() {
  useEffect(() => {
    const hero = document.querySelector<HTMLElement>(".hero");
    const ring = document.querySelector<HTMLElement>(".hero-orbit-one");
    const mascot = document.querySelector<HTMLElement>(".hero-mascot");

    if (!hero || !ring || !mascot) return;

    const cleanupStyle = document.createElement("style");
    cleanupStyle.textContent = `
      .hero-heat,
      .hero-ring-heat,
      .hero-dust-far,
      .hero-dust-mid,
      .hero-dust-near,
      .hero-dust-front,
      .hero-sparks { display: none !important; }
    `;
    document.head.appendChild(cleanupStyle);

    const layer = document.createElement("div");
    layer.className = "hero-live-embers";
    Object.assign(layer.style, {
      position: "absolute",
      inset: "0",
      overflow: "visible",
      pointerEvents: "none",
      zIndex: "4",
    });
    hero.appendChild(layer);

    ring.style.zIndex = "6";
    ring.style.pointerEvents = "none";
    mascot.style.zIndex = "5";
    mascot.style.pointerEvents = "none";

    const particles: LiveParticle[] = [];
    const BREATH_MS = 5800;
    const RELEASE_AT_MS = 2700;
    let stopped = false;
    let breathTimer = 0;
    let releaseTimer = 0;
    let ringBreath: Animation | null = null;
    let mascotBreath: Animation | null = null;

    const removeParticle = (particle: LiveParticle) => {
      particle.animation.cancel();
      particle.el.remove();
      const index = particles.indexOf(particle);
      if (index >= 0) particles.splice(index, 1);
    };

    const createParticle = (
      x: number,
      y: number,
      angle: number,
      spark = false,
    ) => {
      if (stopped) return;

      const size = spark ? rand(2.1, 3.6) : rand(2.2, 5.2);
      const distance = spark ? rand(48, 88) : rand(58, 118);
      const tangent = rand(-10, 10);
      const drift = rand(-3, 3);
      const dx = Math.cos(angle) * distance + Math.cos(angle + Math.PI / 2) * tangent;
      const dy = Math.sin(angle) * distance + Math.sin(angle + Math.PI / 2) * tangent + drift;
      const duration = spark ? rand(1800, 2500) : rand(2300, 3200);
      const peak = spark ? rand(0.78, 0.95) : rand(0.34, 0.66);

      const el = document.createElement("span");
      el.className = spark ? "hero-live-ember hero-live-spark" : "hero-live-ember";
      Object.assign(el.style, {
        position: "absolute",
        left: `${x}px`,
        top: `${y}px`,
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "50%",
        opacity: "0",
        background: spark
          ? "radial-gradient(circle,rgba(255,250,218,1) 0%,rgba(255,190,70,.92) 42%,rgba(255,86,8,0) 100%)"
          : "radial-gradient(circle,rgba(255,231,174,.95) 0%,rgba(255,139,24,.68) 42%,rgba(255,61,4,0) 100%)",
        boxShadow: spark
          ? `0 0 ${Math.max(7, size * 3.8)}px rgba(255,185,55,.65)`
          : `0 0 ${Math.max(5, size * 2.5)}px rgba(255,116,15,.34)`,
        contain: "layout style paint",
      });

      const animation = el.animate(
        [
          {
            transform: "translate3d(0,0,0) scale(.35)",
            opacity: 0,
          },
          {
            transform: "translate3d(0,0,0) scale(.8)",
            opacity: peak * 0.35,
            offset: 0.08,
          },
          {
            transform: `translate3d(${dx * 0.24}px,${dy * 0.24}px,0) scale(1)`,
            opacity: peak,
            offset: 0.28,
          },
          {
            transform: `translate3d(${dx * 0.58}px,${dy * 0.58}px,0) scale(${spark ? 0.72 : 0.78})`,
            opacity: peak * 0.72,
            offset: 0.58,
          },
          {
            transform: `translate3d(${dx}px,${dy}px,0) scale(.18)`,
            opacity: 0,
            offset: 1,
          },
        ],
        {
          duration,
          easing: "cubic-bezier(.22,.62,.32,1)",
          fill: "both",
        },
      );

      layer.appendChild(el);
      const particle = { el, animation };
      particles.push(particle);

      animation.onfinish = () => {
        if (stopped) return;
        removeParticle(particle);
      };
    };

    const ringPoint = (angle: number) => {
      const rr = ring.getBoundingClientRect();
      const hr = hero.getBoundingClientRect();
      const radius = Math.min(rr.width, rr.height) * 0.51;

      return {
        x: rr.left + rr.width / 2 + Math.cos(angle) * radius - hr.left,
        y: rr.top + rr.height / 2 + Math.sin(angle) * radius - hr.top,
      };
    };

    const releaseFromRing = () => {
      if (stopped) return;

      const sideCount = 9;

      for (let i = 0; i < sideCount; i += 1) {
        const spread = (i / (sideCount - 1) - 0.5) * 0.72;
        const leftAngle = Math.PI + spread;
        const rightAngle = spread;

        const left = ringPoint(leftAngle);
        const right = ringPoint(rightAngle);

        createParticle(left.x, left.y, leftAngle + rand(-0.08, 0.08));
        createParticle(right.x, right.y, rightAngle + rand(-0.08, 0.08));
      }

      for (let i = 0; i < 4; i += 1) {
        const angle = i % 2 === 0
          ? rand(-0.32, 0.32)
          : Math.PI + rand(-0.32, 0.32);
        const point = ringPoint(angle);
        createParticle(point.x, point.y, angle + rand(-0.05, 0.05), true);
      }
    };

    const breathe = () => {
      if (stopped) return;

      ringBreath?.cancel();
      mascotBreath?.cancel();

      const keyframes = [
        { scale: "1" },
        { scale: "1.018", offset: 0.22 },
        { scale: "1.028", offset: 0.5 },
        { scale: "1.012", offset: 0.78 },
        { scale: "1", offset: 1 },
      ];

      ringBreath = ring.animate(keyframes, {
        duration: BREATH_MS,
        easing: "ease-in-out",
        fill: "both",
      });

      mascotBreath = mascot.animate(keyframes, {
        duration: BREATH_MS,
        easing: "ease-in-out",
        fill: "both",
      });

      window.clearTimeout(releaseTimer);
      releaseTimer = window.setTimeout(releaseFromRing, RELEASE_AT_MS);
      window.clearTimeout(breathTimer);
      breathTimer = window.setTimeout(breathe, BREATH_MS);
    };

    breathe();

    return () => {
      stopped = true;
      window.clearTimeout(breathTimer);
      window.clearTimeout(releaseTimer);
      ringBreath?.cancel();
      mascotBreath?.cancel();
      for (const particle of particles) particle.animation.cancel();
      layer.remove();
      cleanupStyle.remove();
    };
  }, []);

  return null;
}
