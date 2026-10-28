'use client';

import Reveal from './ui/Reveal';
import SectionHeading from './SectionHeading';
import { experiences, education, certifications, achievements } from '@/lib/data';

interface PathRow {
  label: string;
  title: string;
  period: string;
  description: string;
  stack?: string[];
}

const rows: PathRow[] = [
  ...experiences.map((exp) => ({
    label: exp.label,
    title: `${exp.company} — ${exp.role}`,
    period: exp.period,
    description: exp.bullets.join(' '),
    stack: exp.stack,
  })),
  ...education.map((edu) => ({
    label: 'STUDY',
    title: `${edu.institution} — ${edu.degree}`,
    period: edu.year,
    description: `Result: ${edu.result}.`,
  })),
];

export default function Path() {
  return (
    <section id="path" className="relative z-10 py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-12">
        <SectionHeading index="03" label="THE PATH" title="Experience & Education" />
      </div>

      {/* Full-width rows separated by 3px ink lines */}
      <div className="border-y-[3px] border-ink">
        {rows.map((row, i) => (
          <Reveal key={`${row.title}-${row.period}`} delay={i * 0.05}>
            <div
              className={`grid grid-cols-1 md:grid-cols-[260px_1fr] gap-4 md:gap-10 px-6 md:px-10 lg:px-12 py-10 md:py-12 ${
                i > 0 ? 'border-t-[3px] border-ink' : ''
              }`}
            >
              <div className="flex md:flex-col md:items-start gap-3 md:gap-4">
                <span className="chip !text-[12px] shrink-0">{row.label}</span>
                <span className="font-mono text-[13px] text-muted tracking-[0.06em]">
                  {row.period}
                </span>
              </div>

              <div>
                <h3 className="font-display font-extrabold text-[24px] md:text-[32px] leading-tight tracking-[-0.02em] text-ink">
                  {row.title}
                </h3>
                <p className="font-mono text-[15px] text-muted mt-3 leading-[1.65] max-w-[820px]">
                  {row.description}
                </p>
                {row.stack && (
                  <div className="flex flex-wrap gap-2 mt-5">
                    {row.stack.map((tech) => (
                      <span key={tech} className="chip">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Credentials & Recognition — carried over from the existing site */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-12 mt-16 md:mt-20">
        <Reveal>
          <p className="section-label font-medium mb-6">✦ CREDENTIALS & RECOGNITION</p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Reveal delay={0.05}>
            <div className="brut-card p-7 md:p-8">
              <h3 className="font-display font-extrabold text-[24px] tracking-tight text-ink mb-5">
                Certifications
              </h3>
              <ul className="space-y-4">
                {certifications.map((cert) => (
                  <li key={cert.title} className="flex items-start gap-3">
                    <span aria-hidden="true" className="text-pop font-mono mt-0.5">
                      ▹
                    </span>
                    <div>
                      <p className="font-mono text-[15px] font-medium text-ink">{cert.title}</p>
                      <p className="font-mono text-[13px] text-muted tracking-[0.06em]">
                        {cert.year}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="brut-card p-7 md:p-8">
              <h3 className="font-display font-extrabold text-[24px] tracking-tight text-ink mb-5">
                Achievements
              </h3>
              <ul className="space-y-4">
                {achievements.map((ach) => (
                  <li key={ach.title} className="flex items-start gap-3">
                    <span aria-hidden="true" className="text-pop font-mono mt-0.5">
                      ▹
                    </span>
                    <div>
                      <p className="font-mono text-[15px] font-medium text-ink">{ach.title}</p>
                      <p className="font-mono text-[13px] text-muted tracking-[0.06em]">
                        {ach.year}
                        {ach.type ? ` — ${ach.type}` : ''}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}