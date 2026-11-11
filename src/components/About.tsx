'use client';

import Reveal from './ui/Reveal';
import { profile } from '@/lib/data';
import { Briefcase, Layers } from 'lucide-react';

export default function About() {
  return (
    <section id="about" aria-label="About" className="relative z-10 py-16 md:py-24 px-6 md:px-10 lg:px-12">
      <div className="max-w-[1320px] mx-auto">
        {/* Section Heading */}
        <Reveal>
          <div className="mb-8 md:mb-10">
            <p className="font-mono text-[12.5px] md:text-[13px] tracking-[0.14em] text-[#ff6a3d] font-semibold uppercase mb-2">
              {'// ABOUT ME'}
            </p>
            <h2 className="display-section text-[#f3f1ec]">Founding AI Engineer</h2>
          </div>
        </Reveal>

        {/* Bio paragraph */}
        <div className="max-w-3xl mb-12 md:mb-14">
          <Reveal delay={0.08}>
            <p className="text-[15.5px] sm:text-[16.5px] md:text-[17.5px] text-[#a3a1a8] leading-[1.8] font-normal">
              {profile.aboutBio}
            </p>
          </Reveal>
        </div>

        {/* Experience and Projects statistics — Full-width two-column grid spanning 100% of container */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Year of Experience */}
          <Reveal delay={0.14} className="w-full h-full">
            <div className="relative w-full h-full rounded-2xl bg-[#151518] border border-[#2a2a31] hover:border-[#c8f542]/40 hover:shadow-[0_0_30px_rgba(200,245,66,0.12)] transition-all duration-300 py-10 px-6 sm:py-12 sm:px-8 flex flex-col items-center justify-center text-center group">
              <div className="absolute top-5 right-5 sm:top-6 sm:right-6 w-9 h-9 rounded-xl bg-[#1b1b20] border border-[#2a2a31] flex items-center justify-center text-[#c8f542]">
                <Briefcase className="w-4 h-4" strokeWidth={2} />
              </div>
              <div className="font-display font-extrabold text-[64px] sm:text-[76px] md:text-[84px] leading-none text-[#c8f542] tracking-tight mb-3">
                1
              </div>
              <p className="font-mono text-[12.5px] sm:text-[13.5px] md:text-[14px] font-bold text-[#f3f1ec] uppercase tracking-[0.14em]">
                YEAR OF EXPERIENCE
              </p>
            </div>
          </Reveal>

          {/* Card 2: Projects Built */}
          <Reveal delay={0.2} className="w-full h-full">
            <div className="relative w-full h-full rounded-2xl bg-[#151518] border border-[#2a2a31] hover:border-[#c8f542]/40 hover:shadow-[0_0_30px_rgba(200,245,66,0.12)] transition-all duration-300 py-10 px-6 sm:py-12 sm:px-8 flex flex-col items-center justify-center text-center group">
              <div className="absolute top-5 right-5 sm:top-6 sm:right-6 w-9 h-9 rounded-xl bg-[#1b1b20] border border-[#2a2a31] flex items-center justify-center text-[#c8f542]">
                <Layers className="w-4 h-4" strokeWidth={2} />
              </div>
              <div className="font-display font-extrabold text-[64px] sm:text-[76px] md:text-[84px] leading-none text-[#c8f542] tracking-tight mb-3">
                6+
              </div>
              <p className="font-mono text-[12.5px] sm:text-[13.5px] md:text-[14px] font-bold text-[#f3f1ec] uppercase tracking-[0.14em]">
                PROJECTS BUILT
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
