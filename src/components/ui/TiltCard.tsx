'use client';

import { useRef, type ReactNode } from 'react';
import { useReducedMotion } from 'framer-motion';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  /** max tilt in degrees (spec: 16) */
  max?: number;
}

/**
 * 3D tilt on hover: perspective 1300px, rotateX/rotateY up to 16deg
 * following the cursor, inner content translateZ(26px), slight lift.
 * Disabled on touch devices and under prefers-reduced-motion.
 */
export default function TiltCard({ children, className = '', max = 16 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || reduceMotion) return;
    if (window.matchMedia('(hover: none), (pointer: coarse)').matches) return;

    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;

    el.style.transform = `perspective(1300px) rotateX(${(-py * max).toFixed(2)}deg) rotateY(${(px * max).toFixed(2)}deg) translateY(-4px)`;
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'perspective(1300px) rotateX(0deg) rotateY(0deg) translateY(0px)';
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`tilt-card ${className}`}
    >
      <div className="tilt-inner h-full">{children}</div>
    </div>
  );
}