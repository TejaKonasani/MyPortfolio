'use client';

import Reveal from './ui/Reveal';
import TiltCard from './ui/TiltCard';
import SectionHeading from './SectionHeading';
import { skillCategories } from '@/lib/data';

const accents = ['bg-lime', 'bg-sky', 'bg-pop', 'bg-card'];

export default function Stack() {
  return (
    <section id="stack" className="relative z-10 py-16 md:py-24 px-6 md:px-10 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        <SectionHeading index="02" label="THE STACK" title="Skills" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {skillCategories.map((category, i) => (
            <Reveal key={category.name} delay={i * 0.06} className="h-full">
              <TiltCard className="brut-card h-full">
                <div className="h-full p-6">
                  <div
                    className={`w-10 h-10 rounded-full border-[3px] border-ink ${accents[i % accents.length]} mb-5`}
                    aria-hidden="true"
                  />
                  <h3 className="font-display font-extrabold text-[20px] tracking-tight text-ink mb-4">
                    {category.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span key={skill} className="chip">
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