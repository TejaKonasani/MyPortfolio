'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    institution: 'KL University, Vijayawada',
    degree: 'B.Tech AI & Data Science',
    result: 'CGPA 9.2/10',
    year: 'Apr 2026',
  },
  {
    institution: 'Vignan Co-operative Junior College',
    degree: 'Intermediate MPC',
    result: '92.9%',
    year: 'Jun 2022',
  },
  {
    institution: "St. Joseph's High School",
    degree: 'SSC',
    result: '95%',
    year: 'Feb 2020',
  },
];

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="py-8 md:py-10 bg-transparent relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-accent-primary/5 rounded-full blur-[90px] pointer-events-none" />

      <div ref={ref} className="max-w-home-content mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading font-extrabold text-[52px] tracking-tight mb-[28px] bg-gradient-to-r from-[#5DCAA5] to-[#7F77DD] bg-clip-text text-transparent">
            Education
          </h2>
        </motion.div>

        <div className="max-w-3xl relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-accent-light via-accent-light/40 to-transparent" />

          <div className="space-y-10">
            {education.map((edu, i) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, x: -24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative flex gap-8"
              >
                {/* Timeline dot */}
                <div className="shrink-0 w-10 h-10 rounded-full bg-[#0a1023] border-2 border-accent-light flex items-center justify-center z-10 shadow-[0_0_15px_rgba(103,232,249,0.4)] animate-pulse">
                  <GraduationCap size={16} className="text-accent-light" />
                </div>

                <div className="bg-[#0a1023]/45 border border-white/[0.12] backdrop-blur-[12px] rounded-[24px] p-8 flex-1 hover:-translate-y-1 hover:border-accent-primary/50 hover:shadow-[0_8px_32px_rgba(110,86,248,0.12)] hover:bg-[#0a1023]/60 transition-all duration-300 ease-out shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                    <h3 className="font-heading font-bold text-[28px] text-text-primary leading-tight">{edu.institution}</h3>
                    <span className="text-text-muted text-sm font-mono tracking-wide shrink-0">{edu.year}</span>
                  </div>
                  <p className="text-accent-light font-semibold">{edu.degree}</p>
                  <p className="text-text-body text-[18px] leading-[1.8] font-normal mt-2">{edu.result}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}