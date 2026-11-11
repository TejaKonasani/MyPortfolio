'use client';

import { motion, useReducedMotion } from 'framer-motion';

interface SectionHeadingProps {
  label: string; // e.g. "ABOUT ME" or "PROJECTS"
  title: React.ReactNode; // e.g. "Full Stack Developer | AI Engineer"
  index?: string; // optional index
}

/**
 * Section heading with // LABEL mono tag and bold display title.
 */
export default function SectionHeading({ label, title }: SectionHeadingProps) {
  const reduceMotion = useReducedMotion();

  // Ensure label starts with //
  const formattedLabel = label.startsWith('//') ? label : `// ${label}`;

  return (
    <div className="mb-8 md:mb-12">
      <motion.p
        className="font-mono text-[12.5px] md:text-[13px] tracking-[0.14em] text-[#ff6a3d] font-semibold uppercase mb-3"
        initial={reduceMotion ? false : { opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {formattedLabel}
      </motion.p>

      <div className="overflow-hidden">
        <motion.h2
          className="display-section text-[#f3f1ec]"
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 40,
                  clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
            clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0 100%)',
          }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
        >
          {title}
        </motion.h2>
      </div>
    </div>
  );
}
