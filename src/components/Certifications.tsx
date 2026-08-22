'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Trophy, FlaskConical } from 'lucide-react';

const certifications = [
  { title: 'Salesforce Certified AI Associate', year: '2024' },
  { title: 'Python IBM Certified', year: '2023' },
];

const achievements = [
  { title: 'Best NSS Volunteer, KL University', year: '2024–2025' },
  {
    title: 'Implementation of Machine Learning Techniques for Cloud Job Cost Prediction',
    year: 'Aug 2025–Present',
    type: 'Research (in progress)',
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="certifications" className="py-8 md:py-10 bg-transparent relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div ref={ref} className="max-w-home-content mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading font-extrabold text-[52px] tracking-tight mb-8 bg-gradient-to-r from-[#5DCAA5] to-[#7F77DD] bg-clip-text text-transparent">
            Credentials & Recognition
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Certifications */}
          <motion.div
            variants={item}
            whileHover={{ y: -4 }}
            className="bg-[#0a1023]/45 border border-white/[0.12] backdrop-blur-[12px] rounded-[24px] p-9 hover:border-accent-primary/50 hover:shadow-[0_8px_32px_rgba(110,86,248,0.12)] hover:bg-[#0a1023]/60 transition-all duration-300 ease-out shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-accent-light/10">
                <Award size={24} className="text-accent-light" />
              </div>
              <h3 className="font-heading font-bold text-[28px] text-text-primary">Certifications</h3>
            </div>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div key={cert.title} className="flex items-start gap-3">
                  <span className="text-accent-light mt-1.5 shrink-0">▹</span>
                  <div>
                    <p className="text-text-primary font-semibold">{cert.title}</p>
                    <p className="text-text-muted text-sm font-mono tracking-wide">{cert.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            variants={item}
            whileHover={{ y: -4 }}
            className="bg-[#0a1023]/45 border border-white/[0.12] backdrop-blur-[12px] rounded-[24px] p-9 hover:border-accent-secondary/50 hover:shadow-[0_8px_32px_rgba(34,211,238,0.12)] hover:bg-[#0a1023]/60 transition-all duration-300 ease-out shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-accent-light/10">
                <Trophy size={24} className="text-accent-light" />
              </div>
              <h3 className="font-heading font-bold text-[28px] text-text-primary">Achievements</h3>
            </div>
            <div className="space-y-4">
              {achievements.map((ach) => (
                <div key={ach.title} className="flex items-start gap-3">
                  <span className="text-accent-light mt-1.5 shrink-0">▹</span>
                  <div>
                    <p className="text-text-primary font-semibold">{ach.title}</p>
                    <p className="text-text-muted text-sm font-mono tracking-wide">{ach.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}