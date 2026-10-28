'use client';

import Reveal from './ui/Reveal';
import TiltCard from './ui/TiltCard';
import SectionHeading from './SectionHeading';
import { projects, type Project } from '@/lib/data';

const accentBg: Record<Project['accent'], string> = {
  lime: 'bg-lime',
  sky: 'bg-sky',
  pop: 'bg-pop',
};

const accentText: Record<Project['accent'], string> = {
  lime: 'text-[#121210]',
  sky: 'text-[#121210]',
  pop: 'text-[#F0EBE0]',
};

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <TiltCard className="brut-card h-full">
        <article className="h-full flex flex-col p-5 md:p-6">
          {/* Top image area — no screenshots exist in the repo, so use
              a lime/sky/orange block with the project initials. */}
          <div
            className={`relative w-full h-[170px] rounded-[16px] border-[3px] border-ink ${accentBg[project.accent]} flex items-center justify-center overflow-hidden`}
            role="img"
            aria-label={`${project.title} project card art`}
          >
            <span
              className={`font-display font-extrabold text-[64px] md:text-[72px] leading-none tracking-tight ${accentText[project.accent]}`}
            >
              {project.initials}
            </span>
            <span className="absolute bottom-3 right-4 font-mono text-[11px] tracking-[0.12em] uppercase opacity-70 text-[#121210]">
              {project.subtitle}
            </span>
          </div>

          <h3 className="font-display font-extrabold text-[1.9rem] leading-tight tracking-[-0.02em] text-ink mt-6">
            {project.title}
          </h3>
          <p className="font-mono text-[15px] text-muted mt-2 leading-[1.6]">{project.description}</p>

          <div className="flex flex-wrap gap-2 mt-5">
            {project.tech.map((tech) => (
              <span key={tech} className="chip">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 mt-7 pt-2">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary !py-3 !px-5 !text-[13px]"
            >
              Live ↗
            </a>
            <a
              href="https://github.com/TejaKonasani"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary !py-3 !px-5 !text-[13px]"
            >
              GitHub ↗
            </a>
          </div>
        </article>
      </TiltCard>
    </Reveal>
  );
}

export default function Work() {
  return (
    <section id="work" className="relative z-10 py-16 md:py-24 px-6 md:px-10 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        <SectionHeading index="01" label="SELECTED WORK" title="Projects" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}