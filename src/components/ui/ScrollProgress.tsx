'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * Thin lime scroll-progress bar at the very top of the page.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[2.5px] bg-[#c8f542] origin-left z-[60] pointer-events-none"
      style={{ scaleX }}
    />
  );
}
