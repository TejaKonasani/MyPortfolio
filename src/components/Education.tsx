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
    <section className="py-28 md:py-[100px] bg-bg-primary">
      <div ref={ref} className="max-w-content mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent-primary font-semibold text-sm uppercase tracking-wider">Education</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl mt-2 mb-12">
            Academic Background
          </h2>
        </motion.div>

        <div className="max-w-2xl relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-4 bottom-4 w-px bg-gradient-to-b from-accent-primary via-accent-primary/30 to-transparent" />

          <div className="space-y-8">
            {education.map((edu, i) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, x: -24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative flex gap-6"
              >
                {/* Timeline dot */}
                <div className="shrink-0 w-10 h-10 rounded-full bg-surface border-2 border-accent-primary flex items-center justify-center z-10">
                  <GraduationCap size={16} className="text-accent-primary" />
                </div>

                <div className="bg-surface border border-white/10 rounded-2xl p-6 flex-1 hover:border-accent-primary/30 transition-all duration-250">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="font-heading font-semibold text-lg text-text-primary">{edu.institution}</h3>
                    <span className="text-text-secondary text-sm shrink-0">{edu.year}</span>
                  </div>
                  <p className="text-accent-primary font-medium">{edu.degree}</p>
                  <p className="text-text-secondary text-sm mt-1">{edu.result}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}