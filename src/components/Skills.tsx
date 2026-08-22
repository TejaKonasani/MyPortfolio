'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Palette, Server, Database, Cpu, Wrench, Brain, Network } from 'lucide-react';

const skillCategories = [
  {
    name: 'Languages',
    icon: Code2,
    skills: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'C'],
  },
  {
    name: 'Frontend',
    icon: Palette,
    skills: ['React.js', 'Next.js', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    name: 'Backend',
    icon: Server,
    skills: ['Next.js', 'Node.js', 'NestJS', 'REST APIs'],
  },
  {
    name: 'Database',
    icon: Database,
    skills: ['PostgreSQL'],
  },
  {
    name: 'AI & Integrations',
    icon: Cpu,
    skills: ['Gemini API', 'Claude Code', 'AI Prompt Engineering', 'Ollama'],
  },
  {
    name: 'Tools',
    icon: Wrench,
    skills: ['Git', 'GitHub', 'Docker', 'Render', 'Vercel'],
  },
  {
    name: 'ML/AI',
    icon: Brain,
    skills: ['Supervised/Unsupervised Learning', 'Scikit-learn', 'Pandas', 'NumPy'],
  },
  {
    name: 'Deep Learning',
    icon: Network,
    skills: ['Neural Networks', 'TensorFlow'],
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-8 md:py-10 bg-transparent">
      <div ref={ref} className="max-w-home-content mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading font-extrabold text-[52px] tracking-tight mb-[28px] bg-gradient-to-r from-[#5DCAA5] to-[#7F77DD] bg-clip-text text-transparent">
            Technology Stack
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8"
        >
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.name}
                variants={item}
                className="bg-[#0a1023]/45 border border-white/[0.12] backdrop-blur-[12px] rounded-[24px] p-8 hover:-translate-y-1 hover:scale-[1.03] hover:border-accent-primary/50 hover:shadow-[0_8px_32px_rgba(110,86,248,0.12)] hover:bg-[#0a1023]/60 transition-all duration-300 ease-out shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-xl bg-accent-light/10 shadow-[0_0_15px_rgba(103,232,249,0.15)]">
                    <Icon size={22} className="text-accent-light" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-text-primary">{category.name}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3.5 py-2 rounded-full text-xs font-mono font-medium bg-accent-primary/5 text-accent-light border border-accent-primary/15 hover:scale-105 transition-all duration-200 cursor-default backdrop-blur-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}