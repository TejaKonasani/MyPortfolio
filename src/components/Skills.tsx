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
    <section id="skills" className="py-28 md:py-[100px] bg-bg-primary">
      <div ref={ref} className="max-w-content mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent-primary font-semibold text-sm uppercase tracking-wider">Skills</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl mt-2 mb-4">
            My Tech Stack
          </h2>
          <p className="text-text-secondary max-w-2xl">
            The tools and technologies I use to build <span className="text-accent-primary font-semibold">production-ready</span> applications.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
        >
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.name}
                variants={item}
                className="bg-surface border border-white/10 rounded-2xl p-6 hover:border-accent-primary/30 transition-all duration-250"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-accent-primary/10">
                    <Icon size={20} className="text-accent-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-text-primary">{category.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-full text-xs font-medium bg-accent-primary/10 text-accent-light border border-accent-primary/15 hover:scale-105 transition-transform duration-200 cursor-default"
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