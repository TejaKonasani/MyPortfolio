'use client';

import Reveal from './ui/Reveal';
import SectionHeading from './SectionHeading';
import { profile } from '@/lib/data';

export default function Contact() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <section id="contact" className="relative z-10 py-12 md:py-20 px-6 md:px-10 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        <SectionHeading
          label="// LET'S CONNECT"
          title={
            <>
              Let&apos;s make <span className="accent-serif text-[#ff6a3d]">something</span> great.
            </>
          }
        />

        <div className="max-w-[620px]">
          <Reveal delay={0.08}>
            <p className="text-[15.5px] sm:text-[16.5px] text-[#a3a1a8] leading-[1.7] mb-8">
              Have a project in mind, an opportunity, or just want to say hi? I&apos;m always open
              to meaningful conversations.
            </p>
          </Reveal>

          {/* Action buttons aligned seamlessly */}
          <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
            <Reveal delay={0.12}>
              <a
                href={`mailto:${profile.email}`}
                className="btn btn-primary"
              >
                <span>Get In Touch</span>
                <span aria-hidden="true" className="text-base font-bold">→</span>
              </a>
            </Reveal>
            <Reveal delay={0.18}>
              <a
                href={`mailto:${profile.email}`}
                className="btn btn-secondary !py-2.5 !px-4 !text-[13px]"
              >
                Email
              </a>
            </Reveal>
            <Reveal delay={0.24}>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary !py-2.5 !px-4 !text-[13px]"
              >
                LinkedIn ↗
              </a>
            </Reveal>
            <Reveal delay={0.3}>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary !py-2.5 !px-4 !text-[13px]"
              >
                GitHub ↗
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
