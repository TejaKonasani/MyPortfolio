'use client';

import Reveal from './ui/Reveal';
import { profile, stats } from '@/lib/data';

/**
 * Unnumbered intro strip (after the marquee) carrying the real About
 * bio, tagline, and landing stats from the existing site.
 */
export default function About() {
  return (
    <section aria-label="About" className="relative z-10 py-10 md:py-16 px-6 md:px-10 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        <Reveal>
          <p className="section-label font-medium mb-5">✦ ABOUT</p>
        </Reveal>
        <Reveal delay={0.06}>
          <p className="font-display font-extrabold text-[24px] md:text-[30px] tracking-tight text-ink mb-6">
            {profile.tagline}
          </p>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="font-mono text-[16px] md:text-[18px] text-muted leading-[1.65] max-w-[860px]">
            {profile.aboutBio}
          </p>
        </Reveal>

        <div className="flex flex-wrap gap-x-12 gap-y-6 mt-10">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={0.16 + i * 0.08}>
              <div className="flex items-baseline gap-3">
                <span className="font-display font-extrabold text-[44px] md:text-[56px] leading-none text-pop">
                  {stat.value}
                </span>
                <span className="font-mono text-[13px] uppercase tracking-[0.12em] text-muted">
                  {stat.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}