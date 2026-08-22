'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'MedSpaces',
    subtitle: 'Healthcare Space Marketplace',
    gradient: 'from-violet-500 to-cyan-400',
    bullets: [
      'Doctors ↔ clinics/hospitals marketplace for discovering and booking consultation spaces.',
      'RBAC workflows for doctors, clinics, and admins across the platform.',
      'Doctor/clinic verification and listing-approval workflows for trusted marketplace listings.',
    ],
    tech: ['Next.js', 'React', 'Tailwind', 'Prisma', 'PostgreSQL', 'Vercel', 'Resend'],
    link: 'https://medspaces-platform.vercel.app/',
  },
  {
    title: 'Mill2Meal',
    subtitle: 'D2C Grocery E-commerce',
    gradient: 'from-blue-500 to-cyan-400',
    bullets: [
      'Full grocery e-commerce experience with product discovery, cart, checkout, OTP authentication, subscriptions, and order tracking.',
      'Secure NestJS REST APIs with JWT authentication, RBAC, and Razorpay payment integration.',
      'Inventory management with pincode-based delivery logic for order fulfillment.',
    ],
    tech: ['NestJS', 'PostgreSQL', 'Prisma', 'Next.js', 'Tailwind'],
    link: 'https://mill2meal.github.io/mill2meal-frontend/',
  },
  {
    title: 'Zero Noise CEO OS',
    subtitle: 'AI Founder Performance Platform',
    gradient: 'from-indigo-500 to-violet-400',
    bullets: [
      'AI-powered founder platform for daily planning, deep-work tracking, capability scoring, coaching, and performance reviews.',
      'Secure NestJS REST APIs with JWT authentication, Prisma, and PostgreSQL.',
      'Next.js dashboard using TanStack Query and React Hook Form with Gemini API-powered insights.',
    ],
    tech: ['NestJS', 'PostgreSQL', 'Prisma', 'Supabase', 'Next.js', 'TypeScript', 'Tailwind'],
    link: 'https://zero-noice-ceo-os.github.io/zero-noise-frontend/',
  },
  {
    title: 'NuScreen',
    subtitle: 'Medical Screening Program Management Platform',
    gradient: 'from-emerald-500 to-cyan-400',
    bullets: [
      'End-to-end healthcare platform for screening camps, beneficiary records, referrals, teleconsultations, and stakeholder operations, with role-based Admin/Operations and User/Requester portals.',
      'Automated camp assignment based on geography, partner availability, capacity, compliance, and performance, with offline-first health data capture, Bluetooth medical-device integration, and AI-powered risk alerts.',
      'Subscription and payment management with Razorpay, quota management, invoices, analytics, and audit tracking.',
    ],
    tech: ['NestJS', 'PostgreSQL', 'Supabase', 'Next.js', 'Tailwind CSS', 'REST APIs', 'RBAC', 'Razorpay', 'AI'],
    link: 'https://clinquant-dusk-fdd924.netlify.app/',
  },
  {
    title: 'MedSpaces Tool',
    subtitle: 'Healthcare Platform & Expert Care Ecosystem',
    gradient: 'from-violet-500 to-cyan-400',
    bullets: [
      'Role-based healthcare platform connecting patients, healthcare professionals, care knowledge, programs, and enterprise stakeholders, with secure OTP/JWT authentication and RBAC.',
      'HCP workspace for verified practitioners to manage profiles, patient records, Q&A, educational content, and care-program participation.',
      'Admin/Super Admin operations covering user management, expert verification, content review, Q&A moderation, programs, pathways, payments, compliance, notifications, audit logging, and secure healthcare data workflows.',
    ],
    tech: ['NestJS', 'PostgreSQL', 'Supabase', 'Next.js', 'Tailwind CSS', 'REST APIs', 'RBAC', 'JWT', 'TOTP', 'OTP'],
    link: 'https://medspaces-frontend-i2vgk0nke-teja-konasani-s-projects.vercel.app/',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  // Dynamic visible count checking to handle responsive widths safely on client side
  useEffect(() => {
    const updateCount = () => {
      if (window.innerWidth < 768) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    };
    updateCount();
    window.addEventListener('resize', updateCount);
    return () => window.removeEventListener('resize', updateCount);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  // Modular/circular indexing to calculate list of currently visible project entries
  const visibleProjects = [];
  for (let i = 0; i < visibleCount; i++) {
    visibleProjects.push(projects[(currentIndex + i) % projects.length]);
  }

  return (
    <section id="projects" className="py-8 md:py-10 bg-transparent">
      <div ref={ref} className="max-w-home-content mx-auto px-6">
        <div className="flex justify-between items-end mb-[28px] gap-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <h2 className="font-heading font-extrabold text-[52px] tracking-tight bg-gradient-to-r from-[#5DCAA5] to-[#7F77DD] bg-clip-text text-transparent">
              Projects
            </h2>
          </motion.div>
        </div>

        {/* Carousel Row (Cards + Right Arrow Next Button) */}
        <div className="relative flex flex-col lg:flex-row items-center gap-6 lg:gap-8 mt-8">
          {/* Carousel Grid with framer-motion animations */}
          <div className={`grid gap-8 flex-1 w-full ${
            visibleCount === 1 ? 'grid-cols-1' : visibleCount === 2 ? 'grid-cols-2' : 'grid-cols-3'
          }`}>
            <AnimatePresence initial={false} mode="popLayout">
              {visibleProjects.map((project) => (
                <motion.div
                  key={`${project.title}-${project.subtitle}`}
                  layout
                  initial={{ opacity: 0, x: 60, scale: 0.96 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -60, scale: 0.96 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  whileHover={{ y: -4 }}
                  className="group bg-[#0a1023]/45 border border-white/[0.12] backdrop-blur-[12px] rounded-[24px] overflow-hidden hover:border-accent-primary/50 hover:shadow-[0_8px_32px_rgba(110,86,248,0.12)] hover:bg-[#0a1023]/60 transition-all duration-300 ease-out shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] flex flex-col h-full"
                >
                  {/* Card top gradient area */}
                  <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />

                  <div className="p-8 flex flex-col flex-1">
                    <h3 className="font-heading font-bold text-[28px] text-text-primary mb-1">
                      {project.title}
                    </h3>
                    <p className="text-accent-light text-sm font-semibold mb-4">{project.subtitle}</p>

                    <ul className="space-y-3 mb-6 flex-1">
                      {project.bullets.map((bullet, bi) => (
                        <li key={bi} className="text-text-body text-[18px] leading-[1.8] font-normal flex gap-2">
                          <span className="text-accent-light mt-1.5 shrink-0">▹</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-accent-primary/5 text-accent-light border border-accent-primary/15 hover:scale-105 transition-all duration-200 backdrop-blur-sm"
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
            </AnimatePresence>
          </div>

          {/* Right Arrow next trigger */}
          <div className="shrink-0 flex items-center justify-center select-none pt-4 lg:pt-0">
            <button
              onClick={handleNext}
              className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-cyan-400/60 bg-[#0a1023]/50 flex items-center justify-center text-[#67E8F9] hover:border-cyan-400 hover:text-white hover:scale-110 hover:shadow-[0_0_25px_rgba(103,232,249,0.55)] active:scale-95 transition-all duration-300 ease-out group/btn"
              aria-label="Next project"
            >
              <ArrowRight size={32} className="group-hover/btn:translate-x-1.5 transition-transform duration-300 text-[#67E8F9]" />
            </button>
          </div>
        </div>

        {/* Indicator dots */}
        <div className="flex flex-col items-center gap-3 mt-12 select-none">
          <div className="flex gap-2.5">
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? 'bg-[#67E8F9] scale-110 shadow-[0_0_10px_rgba(103,232,249,0.5)]'
                    : 'bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}