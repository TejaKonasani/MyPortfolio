'use client';

import dynamic from 'next/dynamic';
import { profile } from '@/lib/data';

// Lazy-load the 3D scene (client-only, no SSR) so text content appears first.
const HeroScene = dynamic(() => import('./HeroScene'), {
  ssr: false,
  loading: () => null,
});

/** Slowly rotating circular "OPEN TO WORK ✦" badge (SVG textPath, 14s). */
function OpenToWorkBadge() {
  return (
    <div className="absolute top-24 right-6 md:top-28 md:right-12 lg:right-16 w-[110px] h-[110px] md:w-[150px] md:h-[150px] z-20 pointer-events-none select-none">
      <svg viewBox="0 0 200 200" className="w-full h-full spin-badge" aria-hidden="true">
        <defs>
          <path id="badge-circle" d="M 100,100 m -74,0 a 74,74 0 1,1 148,0 a 74,74 0 1,1 -148,0" />
        </defs>
        <text
          fill="currentColor"
          className="font-mono"
          style={{ fontSize: '19.5px', letterSpacing: '0.18em' }}
        >
          <textPath href="#badge-circle">OPEN TO WORK ✦ OPEN TO WORK ✦</textPath>
        </text>
      </svg>
      <span
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center text-[26px] md:text-[34px]"
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
      className="relative min-h-screen flex flex-col justify-end overflow-hidden px-6 md:px-10 lg:px-12 pb-16 md:pb-20 pt-24"
    >
      {/* 3D scene: right side on desktop, centered above text on mobile */}
      <div className="absolute inset-x-0 top-[88px] bottom-[38%] md:inset-x-auto md:right-0 md:top-0 md:bottom-0 md:w-[52%] lg:w-[46%] z-[2]">
        <HeroScene />
      </div>

      <OpenToWorkBadge />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto">
        {/* Pill label */}
        <div className="inline-flex items-center gap-2.5 bg-ink text-bg border-2 border-ink rounded-full px-5 py-2.5 mb-8">
          <span aria-hidden="true" className="w-2.5 h-2.5 rounded-full bg-lime inline-block" />
          <span className="font-mono text-[13px] md:text-[14px] font-medium tracking-[0.06em]">
            {profile.role}
          </span>
        </div>

        {/* Giant headline */}
        <h1 className="display-hero text-ink">
          {profile.firstName}
          <br />
          <span className="accent-serif text-pop">builds</span> things
          <br />
          that think.
        </h1>

        {/* Real bio + buttons */}
        <div className="mt-10 md:mt-12 flex flex-col md:flex-row md:items-end gap-8 md:gap-12">
          <p className="font-mono text-[15px] md:text-[16px] text-muted max-w-[520px] leading-[1.65]">
            {profile.heroBio}
          </p>

          <div className="flex flex-wrap items-center gap-5 shrink-0">
            <button type="button" onClick={scrollToWork} className="btn btn-primary">
              See my work ↓
            </button>
            <a
              href={`${basePath}${profile.resumePath}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Resume ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}