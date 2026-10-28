'use client';

import Reveal from './ui/Reveal';
import SectionHeading from './SectionHeading';
import { profile } from '@/lib/data';

export default function Contact() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <section id="contact" className="relative z-10 py-16 md:py-24 px-6 md:px-10 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        <SectionHeading
          index="04"
          label="CONTACT"
          title={
            <>
              Let&apos;s make <span className="accent-serif text-pop">something</span> great.
            </>
          }
        />

        <Reveal delay={0.1}>
          <p className="font-mono text-[15px] md:text-[16px] text-muted max-w-[560px] leading-[1.65] mb-10">
            Whether it&apos;s a project, an opportunity, or just a conversation about tech —
            I&apos;d love to hear from you.
          </p>
        </Reveal>

        <div className="flex flex-wrap gap-5">
          <Reveal delay={0.12}>
            <a href={`mailto:${profile.email}`} className="btn btn-primary">
              {profile.email}
            </a>
          </Reveal>
          <Reveal delay={0.2}>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              GitHub ↗
            </a>
          </Reveal>
          <Reveal delay={0.28}>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              LinkedIn ↗
            </a>
          </Reveal>
          <Reveal delay={0.36}>
            <a
              href={`${basePath}${profile.resumePath}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Resume ↗
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}