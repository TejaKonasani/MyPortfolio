'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-8 md:py-10 bg-transparent relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-accent-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div ref={ref} className="max-w-home-content mx-auto px-6 relative z-10">
        {/* Heading outside and above the glass card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading font-extrabold text-[52px] tracking-tight mb-8 bg-gradient-to-r from-[#5DCAA5] to-[#7F77DD] bg-clip-text text-transparent">
            Who I Am
          </h2>
        </motion.div>

        {/* Large Premium Glass Card wrapping the paragraph + illustration */}
        <div className="bg-[#0a1023]/45 border border-white/[0.12] backdrop-blur-[12px] rounded-[32px] p-8 md:px-14 md:py-12 shadow-[0_8px_32px_rgba(0,0,0,0.37)]">
          <div className="w-full grid grid-cols-1 md:grid-cols-[62%_38%] items-center gap-4 md:gap-6">
            
            {/* Left Side: Paragraph */}
            <div className="w-full pr-2">
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-text-body text-[18px] leading-[1.8] font-normal text-justify"
              >
                I&apos;m an AI and Data Science undergraduate at KL University with a strong passion for building full-stack products that solve real-world problems. I specialize in modern web technologies like Next.js, React, NestJS, and PostgreSQL, and I love turning ideas into production-ready platforms — from healthcare marketplaces to e-commerce systems. Alongside development, I bring hands-on experience in machine learning, having trained and fine-tuned models for real-world prediction tasks during my internship. I thrive on solo-building complex applications end-to-end, leveraging AI coding agents to move fast without compromising on quality or architecture. Beyond tech, I&apos;ve led student initiatives and community service programs, which shaped my collaboration, leadership, and problem-solving abilities. I&apos;m driven by curiosity and a constant urge to learn, build, and ship things that matter.
              </motion.p>
            </div>

            {/* Right Side: Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="w-full flex items-center justify-end relative"
            >
              <Image
                src="/images/about-illustration.png"
                alt="AI Developer Illustration"
                width={400}
                height={400}
                className="w-[360px] h-[360px] object-contain"
                priority
              />
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}