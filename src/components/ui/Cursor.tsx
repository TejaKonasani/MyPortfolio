'use client';

import { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

export default function Cursor() {
  const reduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (reduceMotion) return;
    if (window.matchMedia('(hover: none), (pointer: coarse)').matches) return;

    setMounted(true);

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let dotX = -100;
    let dotY = -100;

    const dotEl = document.getElementById('custom-cursor-dot');
    const ringEl = document.getElementById('custom-cursor-ring');

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!visible) setVisible(true);

      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.closest('a') ||
          target.closest('button') ||
          target.closest('input') ||
          target.closest('[role="button"]') ||
          target.closest('.tilt-card'))
      ) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    const onMouseLeave = () => {
      setVisible(false);
    };

    let rafId: number;
    const render = () => {
      // Direct positioning for instant dot
      dotX = mouseX;
      dotY = mouseY;
      // Smooth lerp for trailing ring
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      if (dotEl) {
        dotEl.style.transform = `translate3d(${dotX}px, ${dotY}px, 0)`;
      }
      if (ringEl) {
        ringEl.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      rafId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, [reduceMotion, visible]);

  if (!mounted || reduceMotion) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 pointer-events-none z-[70] transition-opacity duration-300 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Trailing soft ring */}
      <div
        id="custom-cursor-ring"
        className={`fixed top-0 left-0 -ml-[18px] -mt-[18px] rounded-full border border-[#c8f542]/40 transition-[width,height,margin,background-color] duration-200 ease-out will-change-transform ${
          isPointer
            ? 'w-12 h-12 -ml-6 -mt-6 bg-[#c8f542]/10 border-[#c8f542]/80 scale-110'
            : 'w-9 h-9 bg-transparent'
        }`}
      />
      {/* Precise center lime dot */}
      <div
        id="custom-cursor-dot"
        className="fixed top-0 left-0 w-1.5 h-1.5 -ml-[3px] -mt-[3px] rounded-full bg-[#c8f542] shadow-[0_0_8px_#c8f542] will-change-transform"
      />
    </div>
  );
}
