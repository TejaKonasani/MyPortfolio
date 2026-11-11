import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { projects, type Project } from '@/lib/data';
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  Github,
  Layers,
  Sparkles,
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Background from '@/components/Background';

interface Props {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return { title: 'Project Not Found' };

  return {
    title: `${project.title} — Konasani Teja`,
    description: project.tagline,
  };
}

export default function ProjectDetailsPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Background />
      <Header />

      <main className="relative z-10 pt-28 pb-20 px-6 md:px-10 lg:px-12 min-h-screen">
        <div className="max-w-[1240px] mx-auto">
          {/* Top Sticky / Breadcrumb Bar */}
          <div className="mb-8">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 font-mono text-[13px] font-semibold text-[#a3a1a8] hover:text-[#c8f542] transition-colors py-1.5 px-3 rounded-lg hover:bg-[#1b1b20]"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Projects</span>
            </Link>
          </div>

          {/* Section 1 — Project Header Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16 pb-12 border-b border-[#2a2a31]">
            {/* Left Header Info */}
            <div className="lg:col-span-7">
              <p className="font-mono text-[12px] md:text-[13px] tracking-[0.14em] text-[#ff6a3d] font-semibold uppercase mb-2">
                {'// PROJECT DETAILS'}
              </p>

              <div className="flex items-center gap-3 mb-3">
                <h1 className="font-display font-extrabold text-[36px] sm:text-[44px] md:text-[52px] leading-tight text-[#f3f1ec]">
                  {project.title}
                </h1>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#a3a1a8] hover:text-[#c8f542] transition-colors"
                    aria-label={`Open ${project.title} live app`}
                  >
                    <ExternalLink className="w-7 h-7" />
                  </a>
                )}
              </div>

              <p className="text-[16px] sm:text-[18px] text-[#a3a1a8] leading-relaxed mb-6 font-normal">
                {project.tagline}
              </p>

              {/* Category Pills */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.categoryTags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[12px] font-semibold px-3 py-1 rounded-full bg-[#1b1b20] border border-[#2a2a31] text-[#c8f542]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Visual Container */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-[#151518] border border-[#2a2a31] shadow-[0_12px_40px_rgba(0,0,0,0.5)]">
                <Image
                  src={project.previewImage}
                  alt={`${project.title} detailed visual`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Section 2 — Overview & Key Features */}
          <section className="mb-16 pb-12 border-b border-[#2a2a31]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Left: Overview Paragraphs */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2.5 mb-5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#c8f542] shadow-[0_0_8px_#c8f542]" />
                  <h2 className="font-display font-bold text-[22px] md:text-[24px] text-[#f3f1ec]">
                    Overview
                  </h2>
                </div>

                <div className="space-y-4 text-[15px] sm:text-[16px] text-[#a3a1a8] leading-[1.75]">
                  {project.overview.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>

              {/* Right: Key Features with checkmarks */}
              <div className="lg:col-span-5 bg-[#151518] border border-[#2a2a31] rounded-2xl p-6 sm:p-7">
                <h3 className="font-display font-bold text-[18px] text-[#f3f1ec] mb-5">
                  Key Features
                </h3>
                <ul className="space-y-3.5">
                  {project.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#c8f542] shrink-0 mt-0.5" />
                      <span className="text-[14px] text-[#f3f1ec]/90 leading-snug">
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3 — Technologies Used */}
          <section className="mb-16 pb-12 border-b border-[#2a2a31]">
            <div className="flex items-center gap-2.5 mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-[#c8f542] shadow-[0_0_8px_#c8f542]" />
              <h2 className="font-display font-bold text-[22px] md:text-[24px] text-[#f3f1ec]">
                Technologies Used
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {project.technologies.map((group) => (
                <div
                  key={group.category}
                  className="rounded-2xl bg-[#151518] border border-[#2a2a31] p-5 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-2 h-2 rounded-full bg-[#ff6a3d]" />
                      <h4 className="font-mono text-[13px] font-semibold text-[#f3f1ec] uppercase tracking-wider">
                        {group.category}
                      </h4>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-[#1b1b20] border border-[#2a2a31] text-[#f3f1ec]/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4 — Project Links */}
          <section className="mb-20">
            <div className="flex items-center gap-2.5 mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-[#c8f542] shadow-[0_0_8px_#c8f542]" />
              <h2 className="font-display font-bold text-[22px] md:text-[24px] text-[#f3f1ec]">
                Project Links
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-[14px] font-bold bg-[#c8f542] text-[#0c0c0e] py-3.5 px-6 rounded-full hover:shadow-[0_0_25px_rgba(200,245,66,0.5)] transition-all"
                >
                  <span>Visit Live Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-[14px] font-semibold bg-[#1b1b20] text-[#f3f1ec] hover:text-[#c8f542] border border-[#2a2a31] hover:border-[#c8f542]/50 py-3.5 px-6 rounded-full transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>View GitHub Repository</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
