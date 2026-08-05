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
    <section className="py-28 md:py-[100px] bg-bg-secondary">
      <div ref={ref} className="max-w-content mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent-primary font-semibold text-sm uppercase tracking-wider">Certifications & Achievements</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl mt-2 mb-12">
            Credentials & Recognition
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid md:grid-cols-2 gap-6"
        >
          {/* Certifications */}
          <motion.div variants={item} className="bg-surface border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-accent-primary/10">
                <Award size={22} className="text-accent-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-text-primary">Certifications</h3>
            </div>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div key={cert.title} className="flex items-start gap-3">
                  <span className="text-accent-primary mt-1.5 shrink-0">▹</span>
                  <div>
                    <p className="text-text-primary font-medium">{cert.title}</p>
                    <p className="text-text-secondary text-sm">{cert.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div variants={item} className="bg-surface border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-accent-primary/10">
                <Trophy size={22} className="text-accent-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-text-primary">Achievements</h3>
            </div>
            <div className="space-y-4">
              {achievements.map((ach) => (
                <div key={ach.title} className="flex items-start gap-3">
                  <span className="text-accent-primary mt-1.5 shrink-0">▹</span>
                  <div>
                    <p className="text-text-primary font-medium">{ach.title}</p>
                    <p className="text-text-secondary text-sm">{ach.year}</p>
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