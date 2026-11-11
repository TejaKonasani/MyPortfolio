'use client';

import { useRouter } from 'next/navigation';
import Reveal from './ui/Reveal';
import { projects, type Project } from '@/lib/data';
import Image from 'next/image';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/projects/${project.slug}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      router.push(`/projects/${project.slug}`);
    }
  };

  return (
    <Reveal delay={delay} className="h-full">
      <div
        role="button"
        tabIndex={0}
        onClick={handleCardClick}
        onKeyDown={handleKeyDown}
        className="group relative h-full rounded-2xl bg-[#151518] border border-[#2a2a31] hover:border-[#c8f542]/50 hover:shadow-[0_0_35px_rgba(200,245,66,0.12)] transition-all duration-300 p-4 sm:p-4.5 flex flex-col justify-between cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#c8f542] select-none"
        aria-label={`View details for ${project.title}`}
      >
        {/* Large Preview Image Container */}
        <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-[#0c0c0e] border border-[#2a2a31]/80 mb-4 flex items-center justify-center">
          <Image
            src={project.previewImage}
            alt={`${project.title} preview`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority={delay < 0.2}
          />
          {/* Subtle gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </div>

        {/* Bottom Bar: Title & View Button */}
        <div className="flex items-center justify-between gap-3 pt-1">
          <h3 className="font-display font-bold text-[17px] sm:text-[18px] text-[#f3f1ec] group-hover:text-[#c8f542] transition-colors truncate">
            {project.title}
          </h3>

          {/* Independent View Action */}
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="inline-flex items-center justify-center gap-1.5 font-mono text-[12px] font-semibold text-[#f3f1ec] bg-[#1e1e24] hover:bg-[#c8f542] hover:text-[#0c0c0e] border border-[#2a2a31] hover:border-[#c8f542] px-3.5 py-1.5 rounded-full transition-all duration-200 shrink-0 shadow-sm"
              aria-label={`Visit live website for ${project.title}`}
            >
              <span>View</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          ) : (
            <span
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="inline-flex items-center justify-center gap-1 font-mono text-[11px] font-medium text-[#71717a] bg-[#1a1a1e] border border-[#27272a] px-3 py-1.5 rounded-full cursor-not-allowed shrink-0"
              title="Live deployment in progress"
            >
              Internal
            </span>
          )}
        </div>
      </div>
    </Reveal>
  );
}

export default function Work() {
  const featuredProjects = projects.filter((p) => p.featuredInGrid !== false);

  return (
    <section id="work" className="relative z-10 py-16 md:py-24 px-6 md:px-10 lg:px-12">
      <div className="max-w-[1320px] mx-auto">
        {/* Section Heading with View All link on right */}
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 md:mb-14">
            <div>
              <p className="font-mono text-[12.5px] md:text-[13px] tracking-[0.14em] text-[#ff6a3d] font-semibold uppercase mb-2">
                {'// PROJECTS'}
              </p>
              <h2 className="display-section text-[#f3f1ec]">Projects</h2>
            </div>

            <a
              href="https://github.com/TejaKonasani"
              target="_blank"
              rel="noopener noreferrer"
              className="self-start sm:self-auto inline-flex items-center gap-2 font-mono text-[13px] font-semibold text-[#f3f1ec] hover:text-[#c8f542] bg-[#151518] hover:bg-[#1b1b20] border border-[#2a2a31] hover:border-[#c8f542]/50 px-4 py-2 rounded-full transition-all"
            >
              <span>View All</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </Reveal>

        {/* Responsive Grid matching the reference layout: 3 on top row, 2 on second row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, i) => (
            <div
              key={project.slug}
              className={i >= 3 ? 'md:col-span-1 lg:col-span-1' : ''}
            >
              <ProjectCard project={project} delay={i * 0.08} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
