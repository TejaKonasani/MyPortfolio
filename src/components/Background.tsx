'use client';

import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

// Subtle SVG film grain (feTurbulence), fixed, pointer-events none.
const GRAIN =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='240'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";

/**
 * Warm-cream background layers:
 *  - fixed film-grain overlay (opacity ~0.07)
 *  - one large blurred lime blob that follows the mouse with an
 *    easing delay (~0.9s). Multiply in light mode, screen in dark.
 *  - blob disabled on touch devices and under prefers-reduced-motion.
 */
export default function Background() {
  const blobRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const blob = blobRef.current;
    if (!blob || reduceMotion) return;
    if (window.matchMedia('(hover: none), (pointer: coarse)').matches) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 3;
    let x = targetX;
    let y = targetY;
    let raf = 0;
    let running = true;

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const tick = () => {
      if (!running) return;
      // ~0.9s easing delay toward the cursor
      x += (targetX - x) * 0.045;
      y += (targetY - y) * 0.045;
      blob.style.transform = `translate3d(${x - 170}px, ${y - 170}px, 0)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
    };
  }, [reduceMotion]);

  return (
    <>
      {/* film grain */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[1] opacity-[0.07] mix-blend-multiply dark:mix-blend-screen"
        style={{ backgroundImage: `url("${GRAIN}")`, backgroundSize: '240px 240px' }}
      />
      {/* mouse-following lime blob */}
      <div ref={blobRef} aria-hidden="true" className="blob" />
    </>
  );
}