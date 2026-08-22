'use client';

import { motion } from 'framer-motion';

export default function Loading() {
  const text = "LOADING PORTFOLIO...";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const letterVariants = {
    hidden: { y: 0 },
    visible: {
      y: [-12, 0],
      transition: {
        duration: 0.6,
        repeat: Infinity,
        repeatType: 'reverse' as const,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div className="fixed inset-0 bg-bg-primary z-[9999] flex flex-col items-center justify-center select-none overflow-hidden">
      
      {/* Background ambient glows */}
      <div className="absolute w-[300px] h-[300px] bg-accent-primary/10 rounded-full blur-[100px] animate-pulse" />
      
      {/* Bouncing letters container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex items-center gap-1 z-10"
      >
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            className={`font-mono text-base md:text-lg font-bold tracking-widest text-text-primary ${
              char === " " ? "w-3" : "gradient-text"
            }`}
            style={{
              textShadow: '0 0 10px rgba(110, 86, 248, 0.4)',
            }}
          >
            {char}
          </motion.span>
        ))}
      </motion.div>

    </div>
  );
}
