'use client';

import Reveal from './ui/Reveal';
import TiltCard from './ui/TiltCard';
import { skillCategories } from '@/lib/data';

export default function Stack() {
  return (
    <section id="stack" className="relative z-10 py-16 md:py-24 px-6 md:px-10 lg:px-12">
      <div className="max-w-[1320px] mx-auto">
        {/* Section Heading */}
        <Reveal>
          <div className="mb-10 md:mb-14">
            <p className="font-mono text-[12.5px] md:text-[13px] tracking-[0.14em] text-[#ff6a3d] font-semibold uppercase mb-2">
              {'// SKILLS'}
            </p>
            <h2 className="display-section text-[#f3f1ec]">Skills</h2>
          </div>
        </Reveal>

        {/* 3 cards per row on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, i) => (
            <Reveal key={category.name} delay={i * 0.06} className="h-full">
              <TiltCard spotlight={false} className="h-full rounded-2xl">
                <div className="h-full p-6 sm:p-7 flex flex-col justify-between bg-[#151518] border border-[#2a2a31] hover:border-[#c8f542]/40 rounded-2xl transition-all duration-300">
                  {/* Category Header with Colored Dot Indicator */}
                  <div className="flex items-center gap-3 mb-6">
                    <span
                      className="w-3 h-3 rounded-full inline-block shrink-0 shadow-[0_0_10px]"
                      style={{
                        backgroundColor: category.color || '#c8f542',
                        boxShadow: `0 0 10px ${category.color || '#c8f542'}`,
                      }}
                      aria-hidden="true"
                    />
                    <h3 className="font-display font-bold text-[18px] sm:text-[19px] tracking-tight text-[#f3f1ec]">
                      {category.name}
                    </h3>
                  </div>

                  {/* Skill Badges */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="font-mono text-[12px] sm:text-[12.5px] font-medium py-1.5 px-3.5 rounded-lg bg-[#1b1b20] border border-[#2a2a31] text-[#f3f1ec]/90 hover:border-[#c8f542]/50 hover:text-[#c8f542] transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
