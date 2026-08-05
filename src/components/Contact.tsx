'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="py-28 md:py-[100px] bg-bg-secondary">
      <div ref={ref} className="max-w-content mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-accent-primary font-semibold text-sm uppercase tracking-wider">Contact</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl mt-2 mb-4">
            Let&apos;s Build Something Together
          </h2>
          <p className="text-text-secondary mb-10">
            Whether it&apos;s a project, an opportunity, or just a conversation about tech — I&apos;d love to hear from you.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <a
              href="mailto:teja@example.com"
              className="flex items-center gap-2 text-text-secondary hover:text-accent-primary transition-colors duration-200"
            >
              <Mail size={18} />
              <span>teja@example.com</span>
            </a>
            <a
              href="tel:+910000000000"
              className="flex items-center gap-2 text-text-secondary hover:text-accent-primary transition-colors duration-200"
            >
              <Phone size={18} />
              <span>+91 00000 00000</span>
            </a>
          </div>

          <div className="flex justify-center gap-4 mb-10">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-surface border border-white/10 text-text-secondary hover:text-accent-primary hover:border-accent-primary/40 transition-all duration-200"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="https://github.com/TejaKonasani"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-surface border border-white/10 text-text-secondary hover:text-accent-primary hover:border-accent-primary/40 transition-all duration-200"
            >
              <Github size={22} />
            </a>
          </div>

          <a
            href="mailto:teja@example.com"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-accent-primary to-violet-500 text-white font-semibold px-7 py-3.5 rounded-lg shadow-glow hover:shadow-glow-hover hover:scale-105 active:scale-[0.97] transition-all duration-200"
          >
            <Send size={18} />
            Email Me
          </a>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-20 pt-8 border-t border-white/5 text-center"
        >
          <p className="text-text-secondary text-sm">
            © 2026 Konasani Teja Maheswara Reddy — Built with{' '}
            <span className="text-accent-primary">Next.js</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}