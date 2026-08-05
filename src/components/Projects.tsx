'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'MedSpaces',
    subtitle: 'Healthcare Space Marketplace',
    gradient: 'from-violet-600/20 to-cyan-500/10',
    bullets: [
      'Doctors ↔ clinics/hospitals marketplace for booking consultation spaces.',
      'RBAC flows for doctors, clinics, admins; verification + listing approval.',
    ],
    tech: ['Next.js', 'React', 'Tailwind', 'Prisma', 'PostgreSQL', 'Vercel', 'Resend'],
    link: '#',
  },
  {
    title: 'Mill2Meal',
    subtitle: 'D2C Grocery E-commerce',
    gradient: 'from-emerald-600/20 to-cyan-500/10',
    bullets: [
      'Full grocery e-commerce: discovery, cart, checkout, OTP auth, subscriptions, tracking.',
      'Secure NestJS REST APIs, JWT auth, RBAC, Razorpay payments.',
      'Inventory management + pincode-based delivery logic.',
    ],
    tech: ['NestJS', 'PostgreSQL', 'Prisma', 'Next.js', 'Tailwind'],
    link: '#',
  },
  {
    title: 'Zero Noise CEO OS',
    subtitle: 'AI Founder Performance Platform',
    gradient: 'from-amber-600/20 to-violet-500/10',
    bullets: [
      'Daily planning, deep work tracking, capability scoring, AI coaching, performance reviews.',
      'NestJS REST APIs, JWT auth, Prisma, PostgreSQL.',
      'Next.js dashboard with TanStack Query, React Hook Form, Gemini API insights.',
    ],
    tech: ['NestJS', 'PostgreSQL', 'Prisma', 'Supabase', 'Next.js', 'TypeScript', 'Tailwind'],
    link: '#',
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-28 md:py-[100px] bg-bg-secondary">
      <div ref={ref} className="max-w-content mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent-primary font-semibold text-sm uppercase tracking-wider">Projects</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl mt-2 mb-4">
            What I&apos;ve Built
          </h2>
          <p className="text-text-secondary max-w-2xl">
            Production-grade applications I&apos;ve <span className="text-accent-primary font-semibold">solo-built</span> from concept to deployment.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={item}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="group bg-surface border border-white/10 rounded-2xl overflow-hidden hover:border-accent-primary/40 hover:shadow-card-hover transition-all duration-250 flex flex-col"
            >
              {/* Card top gradient area */}
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />

              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-heading font-semibold text-xl text-text-primary mb-1">
                  {project.title}
                </h3>
                <p className="text-accent-primary text-sm font-medium mb-4">{project.subtitle}</p>

                <ul className="space-y-2 mb-6 flex-1">
                  {project.bullets.map((bullet, bi) => (
                    <li key={bi} className="text-text-secondary text-sm leading-relaxed flex gap-2">
                      <span className="text-accent-primary mt-1.5 shrink-0">▹</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-full text-xs font-medium bg-accent-primary/10 text-accent-light"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-text-primary hover:text-accent-primary transition-colors duration-200 group/link"
                >
                  Live Site
                  <ArrowUpRight size={16} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}