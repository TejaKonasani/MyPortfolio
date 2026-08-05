'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building2, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    company: 'Nushift',
    role: 'Intern (On-Site)',
    period: 'June 2025 – Present',
    bullets: [
      'Solo-designed and built MedSpaces, a full-stack healthcare marketplace connecting doctors with clinics/hospitals, including RBAC dashboards, verification, and listing approval workflows.',
      'Solo-built Mill2Meal, a production-ready D2C grocery e-commerce platform with checkout, subscriptions, order tracking, and Razorpay integration.',
      'Used AI coding agents to accelerate full-stack delivery.',
    ],
    stack: ['Next.js', 'React', 'Tailwind CSS', 'NestJS', 'FastAPI', 'Prisma', 'PostgreSQL', 'Vercel'],
  },
  {
    company: 'Ascendsoft',
    role: 'Intern (Remote)',
    period: 'Feb 2025 – June 2025',
    bullets: [
      'Worked on Trading AI, contributing to ML model training and backend development.',
      'Trained/fine-tuned an ML model on historical trading data to improve predictions.',
      'Built backend APIs with FastAPI + PostgreSQL (SQLAlchemy).',
      'Used AI coding agents to speed up debugging.',
    ],
    stack: ['FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Python', 'Machine Learning'],
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-28 md:py-[100px] bg-bg-primary">
      <div ref={ref} className="max-w-content mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent-primary font-semibold text-sm uppercase tracking-wider">Experience</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl mt-2 mb-12">
            Where I&apos;ve Worked
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid md:grid-cols-2 gap-6"
        >
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              variants={item}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="bg-surface border border-white/10 rounded-2xl p-8 hover:border-accent-primary/40 hover:shadow-card-hover transition-all duration-250"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-heading font-semibold text-xl text-text-primary">{exp.company}</h3>
                  <p className="text-accent-primary font-medium mt-1">{exp.role}</p>
                </div>
                <div className="flex items-center gap-1.5 text-text-secondary text-sm shrink-0">
                  <Calendar size={14} />
                  {exp.period}
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {exp.bullets.map((bullet, bi) => (
                  <li key={bi} className="text-text-secondary text-sm leading-relaxed flex gap-3">
                    <span className="text-accent-primary mt-1.5 shrink-0">▹</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-accent-primary/12 text-accent-light border border-accent-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}