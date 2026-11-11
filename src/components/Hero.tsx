'use client';

import dynamic from 'next/dynamic';
import { profile } from '@/lib/data';
import HeroParticles from './ui/HeroParticles';

// Lazy-load the 3D scene (client-only, no SSR) so text content appears first.
const HeroScene = dynamic(() => import('./HeroScene'), {
  ssr: false,
  loading: () => null,
});

/**
 * Rotating circular "OPEN TO WORK ✦" badge:
 * - Text in #f3f1ec
 * - Star in #c8f542 (accent lime)
 * - Positioned on desktop without overlapping heading
 */
function OpenToWorkBadge() {
  return (
    <div className="absolute top-4 right-4 md:top-8 md:right-10 lg:right-16 w-[95px] h-[95px] md:w-[125px] md:h-[125px] z-20 pointer-events-none select-none opacity-80 md:opacity-100">
      <svg viewBox="0 0 200 200" className="w-full h-full spin-badge" aria-hidden="true">
        <defs>
          <path id="badge-circle" d="M 100,100 m -74,0 a 74,74 0 1,1 148,0 a 74,74 0 1,1 -148,0" />
        </defs>
        <text
          fill="#f3f1ec"
          className="font-mono font-medium"
          style={{ fontSize: '19.5px', letterSpacing: '0.18em' }}
        >
          <textPath href="#badge-circle">OPEN TO WORK ✦ OPEN TO WORK ✦</textPath>
        </text>
      </svg>
      <span
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center text-[22px] md:text-[30px] text-[#c8f542] drop-shadow-[0_0_12px_rgba(200,245,66,0.65)]"
      >
        ✦
      </span>
    </div>
  );
}

export default function Hero() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  const scrollToWork = () => {
    const el = document.getElementById('work');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="top"
      aria-label="Introduction"
      className="relative min-h-[calc(100vh-72px)] flex flex-col justify-center overflow-hidden px-6 md:px-10 lg:px-12 py-10 md:py-14"
    >
      {/* Soft radial background glows: lime top-right ~20%, orange bottom-left ~14% */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 -right-20 w-[550px] h-[550px] rounded-full bg-[#c8f542]/[0.17] blur-[130px] z-0"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 -left-16 w-[480px] h-[480px] rounded-full bg-[#ff6a3d]/[0.13] blur-[120px] z-0"
      />

      {/* Hero star / particle field */}
      <HeroParticles />

      {/* 3D scene: placed gracefully on the right side without covering heading */}
      <div className="absolute right-0 top-0 bottom-0 w-[48%] lg:w-[44%] z-[2] pointer-events-none hidden md:block">
        <HeroScene />
      </div>

      <OpenToWorkBadge />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto">
        {/* Role Pill Label */}
        <div className="inline-flex items-center gap-2.5 bg-[#1b1b20] text-[#f3f1ec] border border-[#2a2a31] rounded-full px-4 py-2 mb-5 md:mb-6 shadow-[0_4px_16px_rgba(0,0,0,0.3)]">
          <span
            aria-hidden="true"
            className="w-2 h-2 rounded-full bg-[#c8f542] shadow-[0_0_8px_#c8f542] inline-block"
          />
          <span className="font-mono text-[12.5px] md:text-[13.5px] font-medium tracking-[0.06em]">
            {profile.role}
          </span>
        </div>

        {/* Hero Headline: sized to fit laptop viewports without scrolling */}
        <h1 className="display-hero text-[#f3f1ec] max-w-[1000px]">
          TEJA
          <br />
          <span className="accent-serif text-[#ff6a3d] lowercase mr-2.5 md:mr-3">builds</span>
          THINGS
          <br />
          THAT THINK.
        </h1>

        {/* Real bio + CTA buttons */}
        <div className="mt-6 md:mt-8 max-w-[620px]">
          <p className="text-[14.5px] sm:text-[15.5px] md:text-[16px] text-[#a3a1a8] leading-[1.65]">
            {profile.heroBio}
          </p>

          <div className="mt-6 md:mt-8 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={scrollToWork}
              className="btn btn-primary"
            >
              <span>Explore My Work</span>
              <span aria-hidden="true" className="text-base font-bold">→</span>
            </button>
            <a
              href={`${basePath}${profile.resumePath}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <span>Resume</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
