'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-bg-primary/80 glass border-b border-white/5 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-content mx-auto px-6 flex items-center justify-between">
          <a href="#" className="font-heading font-bold text-2xl gradient-text">
            Teja
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-text-secondary hover:text-accent-primary transition-colors duration-200 text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#"
              className="bg-gradient-to-r from-accent-primary to-violet-500 text-white font-semibold text-sm px-5 py-2.5 rounded-lg shadow-glow hover:shadow-glow-hover hover:scale-105 active:scale-[0.97] transition-all duration-200"
            >
              Resume
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden text-text-primary"
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/60 z-50"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-bg-secondary z-50 border-l border-white/5 p-6"
            >
              <div className="flex justify-between items-center mb-8">
                <span className="font-heading font-bold text-xl gradient-text">Teja</span>
                <button onClick={() => setMobileOpen(false)} className="text-text-primary">
                  <X size={24} />
                </button>
              </div>
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-text-secondary hover:text-accent-primary transition-colors py-2 text-lg font-medium"
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="#"
                  className="bg-gradient-to-r from-accent-primary to-violet-500 text-white font-semibold text-center px-5 py-3 rounded-lg shadow-glow mt-4"
                >
                  Resume
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}