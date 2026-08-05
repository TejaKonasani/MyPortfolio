'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { value: '2+', label: 'Internships' },
  { value: '3', label: 'Production Apps Shipped' },
  { value: '9.2', label: 'CGPA' },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-28 md:py-[100px] bg-bg-secondary">
      <div ref={ref} className="max-w-content mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent-primary font-semibold text-sm uppercase tracking-wider">About Me</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl mt-2 mb-8">
            Getting to Know Me
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-3xl"
        >
          <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-8">
            I&apos;m a final-year{' '}
            <span className="text-accent-primary font-semibold">B.Tech student</span>{' '}
            in Artificial Intelligence and Data Science at KL University with a{' '}
            <span className="text-accent-primary font-semibold">9.2 CGPA</span>. I&apos;ve{' '}
            <span className="text-accent-primary font-semibold">solo-built</span> and shipped multiple{' '}
            <span className="text-accent-primary font-semibold">production applications</span> — from a healthcare marketplace to an{' '}
            <span className="text-accent-primary font-semibold">AI-powered founder performance platform</span> — using modern frameworks and AI-assisted development workflows. I like owning the full stack: ML model training, backend APIs, and polished frontend UI.
          </p>

          <div className="flex flex-wrap gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="bg-surface border border-white/10 rounded-xl px-6 py-4 min-w-[160px]"
              >
                <div className="text-2xl font-heading font-bold gradient-text">{stat.value}</div>
                <div className="text-text-secondary text-sm mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}