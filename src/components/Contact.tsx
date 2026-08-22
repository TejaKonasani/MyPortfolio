'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="py-8 md:py-10 bg-transparent relative overflow-hidden">
      {/* Background grid noise */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:4rem_4rem] pointer-events-none" />

      <div ref={ref} className="max-w-home-content mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center w-full mx-auto bg-[#0a1023]/45 border border-white/[0.12] backdrop-blur-[12px] rounded-[32px] p-12 md:p-16 shadow-[0_8px_32px_rgba(0,0,0,0.37)] hover:border-accent-primary/40 hover:shadow-[0_8px_40px_rgba(110,86,248,0.15)] transition-all duration-300 ease-out relative z-10"
        >
          <h2 className="font-heading font-extrabold text-[52px] tracking-tight mb-[28px] bg-gradient-to-r from-[#5DCAA5] to-[#7F77DD] bg-clip-text text-transparent">
            Let&apos;s Build Something Amazing Together
          </h2>
          <p className="text-text-body text-[18px] mb-8">
            Whether it&apos;s a project, an opportunity, or just a conversation about tech — I&apos;d love to hear from you.
          </p>

          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <a
              href="mailto:2200080216.aids@gmail.com"
              className="flex items-center gap-2 text-text-body hover:text-accent-primary transition-colors duration-250"
            >
              <Mail size={18} />
              <span className="font-mono">2200080216.aids@gmail.com</span>
            </a>
            <a
              href="tel:+919059503227"
              className="flex items-center gap-2 text-text-body hover:text-accent-primary transition-colors duration-250"
            >
              <Phone size={18} />
              <span className="font-mono">+91 9059503227</span>
            </a>
          </div>

          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[56px] h-[56px] rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-[24px] flex items-center justify-center text-text-secondary hover:text-white hover:border-accent-primary/40 hover:rotate-[8deg] hover:scale-110 hover:shadow-[0_0_25px_rgba(110,86,248,0.4)] transition-all duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/TejaKonasani"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[56px] h-[56px] rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-[24px] flex items-center justify-center text-text-secondary hover:text-white hover:border-accent-secondary/40 hover:rotate-[8deg] hover:scale-110 hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] transition-all duration-300"
            >
              <Github size={24} />
            </a>
          </div>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=2200080216.aids@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-accent-primary to-violet-500 text-white font-semibold h-[56px] px-8 rounded-[16px] shadow-glow hover:shadow-glow-hover hover:-translate-y-1 transition-all duration-300"
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
          className="mt-16 pt-8 border-t border-white/5 text-center"
        >
          <p className="text-text-muted text-sm font-mono">
            © 2026 KONASANI TEJA MAHESWARA REDDY — ALL RIGHTS RESERVED
          </p>
        </motion.div>
      </div>
    </section>
  );
}