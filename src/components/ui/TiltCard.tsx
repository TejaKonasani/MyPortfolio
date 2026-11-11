'use client';

import { useRef, useState, type ReactNode } from 'react';
import { useReducedMotion } from 'framer-motion';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  /** max tilt in degrees (spec: 16) */
  max?: number;
  /** enable mouse-tracked radial spotlight glow */
  spotlight?: boolean;
}

/**
 * 3D tilt on hover (Adapted for Dark Mode):
 *  - Perspective 1300px, rotateX/rotateY up to 16deg following cursor
 *  - Inner content translateZ(26px), slight lift (-4px)
 *  - Deep dark soft shadow + 1px border (#2a2a31, hover #3d3d47)
 *  - Faint 1px inner edge highlight (rgba(255,255,255,0.06))
 *  - Optional mouse-tracked lime spotlight glow
 *  - Disabled on touch devices and under prefers-reduced-motion
 */
export default function TiltCard({
  children,
  className = '',
  max = 16,
  spotlight = true,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);
  const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || reduceMotion) return;
    if (window.matchMedia('(hover: none), (pointer: coarse)').matches) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = x / rect.width - 0.5;
    const py = y / rect.height - 0.5;

    el.style.transform = `perspective(1300px) rotateX(${(-py * max).toFixed(2)}deg) rotateY(${(px * max).toFixed(2)}deg) translateY(-4px)`;

    if (spotlight) {
      setSpotlightPos({ x, y });
    }
  };

  const handleEnter = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'perspective(1300px) rotateX(0deg) rotateY(0deg) translateY(0px)';
  };

  return (
    <div
      ref={ref}
      onMouseEnter={handleEnter}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`tilt-card rounded-[24px] bg-[#151518] border border-[#2a2a31] hover:border-[#3d3d47] ${className}`}
      style={{
        boxShadow:
          'inset 0 1px 0 0 rgba(255, 255, 255, 0.06), 0 20px 50px rgba(0, 0, 0, 0.5)',
      }}
    >
      {/* Mouse-tracked spotlight glow */}
      {spotlight && !reduceMotion && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(420px circle at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(200, 245, 66, 0.12), transparent 75%)`,
          }}
        />
      )}
      <div className="tilt-inner relative z-20 h-full">{children}</div>
    </div>
  );
}
