'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Search from './Search';


import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isLanding = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center transition-all duration-300 ${
          scrolled
            ? 'bg-bg-primary/80 backdrop-blur-[20px] border-b border-white/5 shadow-[0_4px_30px_rgba(110,86,248,0.15)]'
            : 'bg-transparent'
        }`}
      >
        <div className="w-full px-6 md:px-10 lg:px-12 flex items-center justify-between">
          {/* Left Side: Desktop Links */}
          <div className={`hidden md:flex items-center ${isLanding ? 'gap-8 lg:gap-10' : 'gap-6 lg:gap-8'}`}>
            <a
              href="#about"
              className={
                isLanding
                  ? 'text-white hover:text-accent-primary transition-all duration-200 text-[18px] font-bold tracking-tight leading-none'
                  : 'text-text-secondary hover:text-accent-primary transition-all duration-200 text-[16px] font-medium'
              }
            >
              About
            </a>
            <a
              href="#experience"
              className={
                isLanding
                  ? 'text-white hover:text-accent-primary transition-all duration-200 text-[18px] font-bold tracking-tight leading-none'
                  : 'text-text-secondary hover:text-accent-primary transition-all duration-200 text-[16px] font-medium'
              }
            >
              Experience
            </a>
            <a
              href="#projects"
              className={
                isLanding
                  ? 'text-white hover:text-accent-primary transition-all duration-200 text-[18px] font-bold tracking-tight leading-none'
                  : 'text-text-secondary hover:text-accent-primary transition-all duration-200 text-[16px] font-medium'
              }
            >
              Projects
            </a>
            <a
              href="#contact"
              className={
                isLanding
                  ? 'text-white hover:text-accent-primary transition-all duration-200 text-[18px] font-bold tracking-tight leading-none'
                  : 'text-text-secondary hover:text-accent-primary transition-all duration-200 text-[16px] font-medium'
              }
            >
              Contact
            </a>
          </div>

          {/* Center: Search Bar */}
          <div className="hidden md:block">
            <Search />
          </div>

          {/* Right Side: Resume Button */}
          <div className="hidden md:block">
            <a
              href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/resume/Teja_Konasani_Resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className={`uiverse-resume-btn py-2.5 px-6 scale-90 ${
                isLanding ? '!h-[48px] !min-w-[130px] !text-[15px]' : ''
              }`}
            >
              <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
              <span className="text">Resume</span>
              <span className="circle"></span>
              <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden text-text-primary ml-auto"
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
              <div className="flex justify-end items-center mb-8">
                <button onClick={() => setMobileOpen(false)} className="text-text-primary">
                  <X size={24} />
                </button>
              </div>
              <div className="flex flex-col gap-4">
                <a
                  href="#about"
                  onClick={() => setMobileOpen(false)}
                  className="text-text-secondary hover:text-accent-primary transition-colors py-2 text-lg font-medium"
                >
                  About
                </a>

                <div className="py-2">
                  <Search />
                </div>

                <a
                  href="#experience"
                  onClick={() => setMobileOpen(false)}
                  className="text-text-secondary hover:text-accent-primary transition-colors py-2 text-lg font-medium"
                >
                  Experience
                </a>

                <a
                  href="#projects"
                  onClick={() => setMobileOpen(false)}
                  className="text-text-secondary hover:text-accent-primary transition-colors py-2 text-lg font-medium"
                >
                  Projects
                </a>

                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="text-text-secondary hover:text-accent-primary transition-colors py-2 text-lg font-medium"
                >
                  Contact
                </a>

                <a
                  href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/resume/Teja_Konasani_Resume.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="uiverse-resume-btn"
                >
                  <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                  </svg>
                  <span className="text">Resume</span>
                  <span className="circle"></span>
                  <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                  </svg>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}