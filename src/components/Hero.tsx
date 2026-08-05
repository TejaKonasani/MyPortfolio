'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Download, ExternalLink } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-40 -left-40 w-96 h-96 bg-accent-primary/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/3 right-0 w-80 h-80 bg-accent-secondary/15 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            x: [0, 60, -40, 0],
            y: [0, -40, 40, 0],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-20 left-1/3 w-72 h-72 bg-violet-600/10 rounded-full blur-[100px]"
        />
      </div>

      <div className="relative z-10 max-w-content mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-accent-primary/30 bg-accent-primary/10 text-accent-light text-sm font-medium mb-6">
            AI & Full-Stack Developer
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-heading font-extrabold text-5xl md:text-7xl leading-tight tracking-tight mb-6"
        >
          Hi, I&apos;s Teja{' '}
          <span className="gradient-text">Maheswara Reddy</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I design and ship{' '}
          <span className="text-accent-primary font-semibold">production-grade</span>{' '}
          full-stack and AI-powered applications —{' '}
          <span className="text-accent-primary font-semibold">solo, end to end</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#projects"
            className="group bg-gradient-to-r from-accent-primary to-violet-500 text-white font-semibold px-7 py-3.5 rounded-lg shadow-glow hover:shadow-glow-hover hover:scale-105 active:scale-[0.97] transition-all duration-200 flex items-center gap-2"
          >
            View Projects
            <ExternalLink size={18} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="#"
            className="group border border-white/20 text-white font-semibold px-7 py-3.5 rounded-lg hover:border-accent-primary hover:bg-accent-primary/5 active:scale-[0.97] transition-all duration-200 flex items-center gap-2"
          >
            Download Resume
            <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown size={24} className="text-text-secondary mx-auto" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}