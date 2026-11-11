'use client';

import Reveal from './ui/Reveal';
import {
  experiencesList,
  educationJourney,
  certificationsList,
  achievementsList,
  EducationStop,
} from '@/lib/data';
import { BookOpen, FileText, GraduationCap, ChevronRight } from 'lucide-react';

function BrandIcon({ type }: { type: string }) {
  switch (type) {
    case 'aws':
      return (
        <div className="w-10 h-10 rounded-xl bg-[#232f3e] border border-[#ff9900]/30 flex items-center justify-center text-[#ff9900] shrink-0 font-mono text-[11px] font-bold">
          AWS
        </div>
      );
    case 'salesforce':
      return (
        <div className="w-10 h-10 rounded-xl bg-[#00a1e0]/15 border border-[#00a1e0]/30 flex items-center justify-center text-[#00a1e0] shrink-0 font-mono text-[11px] font-bold">
          SF
        </div>
      );
    case 'ibm':
      return (
        <div className="w-10 h-10 rounded-xl bg-[#0f62fe]/15 border border-[#0f62fe]/30 flex items-center justify-center text-[#0f62fe] shrink-0 font-mono text-[11px] font-bold">
          IBM
        </div>
      );
    case 'aicte':
      return (
        <div className="w-10 h-10 rounded-xl bg-[#ff9900]/15 border border-[#ff9900]/30 flex items-center justify-center text-[#ff9900] shrink-0 font-mono text-[10px] font-bold">
          AWS
        </div>
      );
    case 'eduskills':
      return (
        <div className="w-10 h-10 rounded-xl bg-[#c8f542]/15 border border-[#c8f542]/30 flex items-center justify-center text-[#c8f542] shrink-0 text-lg">
          🎓
        </div>
      );
    case 'hackathon':
      return (
        <div className="w-10 h-10 rounded-xl bg-[#ff6a3d]/15 border border-[#ff6a3d]/30 flex items-center justify-center text-[#ff6a3d] shrink-0 text-lg">
          🏆
        </div>
      );
    default:
      return (
        <div className="w-10 h-10 rounded-xl bg-[#1b1b20] border border-[#2a2a31] flex items-center justify-center text-[#c8f542] shrink-0 text-base">
          ✦
        </div>
      );
  }
}

function JourneyIcon({ type }: { type: 'book' | 'document' | 'graduation' }) {
  if (type === 'book') {
    return <BookOpen className="w-3.5 h-3.5 text-[#ff6b3d]" strokeWidth={2.2} />;
  }
  if (type === 'document') {
    return <FileText className="w-3.5 h-3.5 text-[#6f9bff]" strokeWidth={2.2} />;
  }
  return <GraduationCap className="w-3.5 h-3.5 text-[#c8f542]" strokeWidth={2.2} />;
}

function getAccentStyles(accent: 'orange' | 'blue' | 'lime') {
  if (accent === 'orange') {
    return {
      text: 'text-[#ff6b3d]',
      badge: 'bg-[#ff6b3d]/15 border-[#ff6b3d]/30 text-[#ff6b3d]',
      hoverBorder: 'hover:border-[#ff6b3d]/50 hover:shadow-[0_0_25px_rgba(255,107,61,0.18)]',
      dotGlow: 'bg-[#ff6b3d] shadow-[0_0_12px_#ff6b3d]',
    };
  }
  if (accent === 'blue') {
    return {
      text: 'text-[#6f9bff]',
      badge: 'bg-[#6f9bff]/15 border-[#6f9bff]/30 text-[#6f9bff]',
      hoverBorder: 'hover:border-[#6f9bff]/50 hover:shadow-[0_0_25px_rgba(111,155,255,0.18)]',
      dotGlow: 'bg-[#6f9bff] shadow-[0_0_12px_#6f9bff]',
    };
  }
  return {
    text: 'text-[#c8f542]',
    badge: 'bg-[#c8f542]/15 border-[#c8f542]/30 text-[#c8f542]',
    hoverBorder: 'hover:border-[#c8f542]/50 hover:shadow-[0_0_25px_rgba(200,245,66,0.18)]',
    dotGlow: 'bg-[#c8f542] shadow-[0_0_12px_#c8f542]',
  };
}

function MilestoneCard({
  stop,
  className = '',
}: {
  stop: EducationStop;
  className?: string;
}) {
  const styles = getAccentStyles(stop.accent);

  return (
    <div
      className={`rounded-2xl bg-[#141417]/95 border border-[#2a2a31] p-4 sm:p-5 backdrop-blur-sm transition-all duration-300 flex flex-col justify-between ${styles.hoverBorder} ${className}`}
    >
      <div>
        {/* Header row: Icon + Years */}
        <div className="flex items-center justify-between gap-2 mb-2">
          <div className={`w-7 h-7 rounded-lg flex items-center justify-center border ${styles.badge}`}>
            <JourneyIcon type={stop.icon} />
          </div>
          <span className={`font-mono text-[11px] font-semibold tracking-wider ${styles.text}`}>
            {stop.years}
          </span>
        </div>

        {/* Stage Title */}
        <h3 className="font-display font-bold text-[15px] sm:text-[16px] text-[#f3f1ec] leading-snug">
          {stop.stage}
        </h3>

        {/* Board / Degree chip */}
        <div className="mt-1.5">
          <span className="inline-block text-[10.5px] font-mono font-medium px-2 py-0.5 rounded-full bg-[#1b1b20] border border-[#2a2a31] text-[#f3f1ec]/80">
            {stop.boardOrDegree}
          </span>
        </div>

        {/* Institution */}
        <p className="text-[12px] text-[#a3a1a8] font-medium mt-1.5 leading-relaxed">
          {stop.institution}
        </p>
      </div>

      {/* Description */}
      {stop.description && (
        <p className="text-[11.5px] text-[#a3a1a8]/85 mt-2.5 pt-2 border-t border-[#2a2a31]/60 leading-relaxed">
          {stop.description}
        </p>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// AI Engineering Visual Illustration (Isometric Chip & Floating Tech Panels)
// ---------------------------------------------------------------------------
function AiEngineeringVisual() {
  return (
    <div className="relative w-full max-w-[500px] aspect-[5/4] mx-auto flex items-center justify-center select-none">
      {/* Background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(200,245,66,0.08),transparent_70%)]"
        aria-hidden="true"
      />

      {/* SVG Isometric Base & Floating Panels */}
      <svg
        className="w-full h-full overflow-visible"
        viewBox="0 0 520 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="cardGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1a1a20" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#121215" stopOpacity="0.85" />
          </linearGradient>
          <filter id="isoGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Twinkling ambient particle dots */}
        <circle cx="85" cy="95" r="1.5" fill="#c8f542" opacity="0.6" />
        <circle cx="430" cy="70" r="1.5" fill="#ff6b3d" opacity="0.7" />
        <circle cx="470" cy="270" r="1.8" fill="#6f9bff" opacity="0.6" />
        <circle cx="70" cy="310" r="1.2" fill="#c8f542" opacity="0.5" />
        <circle cx="260" cy="40" r="1.5" fill="#f3f1ec" opacity="0.7" />

        {/* Isometric Grid Floor Lines */}
        <g stroke="#2a2a31" strokeWidth="1" strokeOpacity="0.45">
          <line x1="80" y1="210" x2="260" y2="300" />
          <line x1="140" y1="180" x2="320" y2="270" />
          <line x1="200" y1="150" x2="380" y2="240" />
          <line x1="260" y1="120" x2="440" y2="210" />

          <line x1="440" y1="210" x2="260" y2="300" />
          <line x1="380" y1="180" x2="200" y2="270" />
          <line x1="320" y1="150" x2="140" y2="240" />
          <line x1="260" y1="120" x2="80" y2="210" />
        </g>

        {/* Glowing circuit connection paths */}
        <path
          d="M 120 230 L 200 270 L 260 240 L 320 270 L 400 230"
          stroke="#c8f542"
          strokeWidth="1.2"
          strokeDasharray="4 4"
          strokeOpacity="0.4"
          fill="none"
        />

        {/* Central Isometric Pedestal Base */}
        <polygon
          points="260,250 330,215 260,180 190,215"
          fill="#141418"
          stroke="#2a2a31"
          strokeWidth="1.5"
        />
        <polygon
          points="190,215 260,250 260,270 190,235"
          fill="#0f0f12"
          stroke="#2a2a31"
          strokeWidth="1.2"
        />
        <polygon
          points="260,250 330,215 330,235 260,270"
          fill="#121216"
          stroke="#2a2a31"
          strokeWidth="1.2"
        />

        {/* Floating Top AI Core Chip */}
        <g transform="translate(0, -25)">
          <polygon
            points="260,230 325,197 260,165 195,197"
            fill="#c8f542"
            fillOpacity="0.15"
            filter="url(#isoGlow)"
          />
          <polygon
            points="260,225 320,195 260,165 200,195"
            fill="#18181d"
            stroke="#c8f542"
            strokeWidth="2"
            style={{ filter: 'drop-shadow(0 0 10px rgba(200,245,66,0.35))' }}
          />
          <polygon
            points="260,215 305,192 260,170 215,192"
            fill="none"
            stroke="#c8f542"
            strokeWidth="1"
            strokeOpacity="0.6"
            strokeDasharray="3 3"
          />
          <text
            x="260"
            y="198"
            textAnchor="middle"
            fill="#c8f542"
            fontFamily="monospace"
            fontWeight="bold"
            fontSize="18"
            letterSpacing="2"
            style={{ filter: 'drop-shadow(0 0 6px #c8f542)' }}
          >
            AI
          </text>
        </g>

        {/* Floating Isometric Hologram Card 1: Top-Left (Brain Icon) */}
        <g transform="translate(130, 95) scale(0.95)">
          <polygon
            points="50,45 85,27 85,67 50,85"
            fill="url(#cardGrad)"
            stroke="#c8f542"
            strokeWidth="1.2"
            strokeOpacity="0.6"
          />
          <path
            d="M 64 52 C 60 50, 58 54, 60 57 C 58 60, 62 64, 66 63 C 68 64, 72 62, 70 58 C 72 55, 70 50, 66 51"
            stroke="#c8f542"
            strokeWidth="1.2"
            fill="none"
          />
        </g>

        {/* Floating Isometric Hologram Card 2: Top-Right (Code </>) */}
        <g transform="translate(310, 100) scale(0.95)">
          <polygon
            points="50,27 85,45 85,85 50,67"
            fill="url(#cardGrad)"
            stroke="#c8f542"
            strokeWidth="1.2"
            strokeOpacity="0.6"
          />
          <path
            d="M 61 54 L 57 58 L 61 62 M 73 54 L 77 58 L 73 62 M 69 52 L 65 64"
            stroke="#c8f542"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* Floating Isometric Hologram Card 3: Bottom-Right (Layers Stack) */}
        <g transform="translate(320, 205) scale(0.95)">
          <polygon
            points="50,27 85,45 85,85 50,67"
            fill="url(#cardGrad)"
            stroke="#c8f542"
            strokeWidth="1.2"
            strokeOpacity="0.5"
          />
          <path d="M 67 48 L 78 54 L 67 60 L 56 54 Z" fill="none" stroke="#c8f542" strokeWidth="1" />
          <path d="M 56 58 L 67 64 L 78 58" fill="none" stroke="#c8f542" strokeWidth="1" />
          <path d="M 56 62 L 67 68 L 78 62" fill="none" stroke="#c8f542" strokeWidth="1" />
        </g>
      </svg>

      {/* Floating Interactive Badges matching reference screenshot */}
      <div className="absolute top-6 left-2 sm:left-4 px-3 py-1.5 rounded-full bg-[#151518]/90 border border-[#2a2a31] hover:border-[#c8f542]/60 hover:shadow-[0_0_15px_rgba(200,245,66,0.2)] transition-all flex items-center gap-2 text-[11px] sm:text-[12px] font-mono text-[#f3f1ec] backdrop-blur-sm z-10">
        <span className="w-2 h-2 rounded-full bg-[#c8f542] shadow-[0_0_8px_#c8f542]" />
        <span>LLM Agents</span>
      </div>

      <div className="absolute top-6 right-2 sm:right-4 px-3 py-1.5 rounded-full bg-[#151518]/90 border border-[#2a2a31] hover:border-[#ff6b3d]/60 hover:shadow-[0_0_15px_rgba(255,107,61,0.2)] transition-all flex items-center gap-2 text-[11px] sm:text-[12px] font-mono text-[#f3f1ec] backdrop-blur-sm z-10">
        <span className="w-2 h-2 rounded-full bg-[#ff6b3d] shadow-[0_0_8px_#ff6b3d]" />
        <span>RAG Pipelines</span>
      </div>

      <div className="absolute bottom-6 left-4 sm:left-8 px-3 py-1.5 rounded-full bg-[#151518]/90 border border-[#2a2a31] hover:border-[#c8f542]/60 hover:shadow-[0_0_15px_rgba(200,245,66,0.2)] transition-all flex items-center gap-2 text-[11px] sm:text-[12px] font-mono text-[#f3f1ec] backdrop-blur-sm z-10">
        <span className="w-2 h-2 rounded-full bg-[#c8f542] shadow-[0_0_8px_#c8f542]" />
        <span>Scalable Systems</span>
      </div>

      <div className="absolute bottom-12 right-2 sm:right-4 px-3 py-1.5 rounded-full bg-[#151518]/90 border border-[#2a2a31] hover:border-[#ff9900]/60 hover:shadow-[0_0_15px_rgba(255,153,0,0.2)] transition-all flex items-center gap-2 text-[11px] sm:text-[12px] font-mono text-[#f3f1ec] backdrop-blur-sm z-10">
        <span className="w-2 h-2 rounded-full bg-[#ff9900] shadow-[0_0_8px_#ff9900]" />
        <span>Real-world Products</span>
      </div>
    </div>
  );
}

export default function Path() {
  const [stop1, stop2, stop3] = educationJourney;

  return (
    <div id="experience" className="relative z-10 py-16 md:py-24 px-6 md:px-10 lg:px-12">
      <div className="max-w-[1320px] mx-auto space-y-20 md:space-y-28">

        {/* ================================================================= */}
        {/* SECTION 1: PROFESSIONAL SUMMARY (Full Width Top Section)          */}
        {/* ================================================================= */}
        <section className="w-full">
          {/* Section Heading */}
          <Reveal>
            <div className="mb-10 md:mb-14">
              <p className="font-mono text-[12.5px] md:text-[13px] tracking-[0.14em] text-[#ff6a3d] font-semibold uppercase mb-2">
                {'// PROFESSIONAL SUMMARY'}
              </p>
              <h2 className="display-section text-[#f3f1ec]">
                My Professional <span className="text-[#c8f542]">Journey</span>
              </h2>
              <p className="text-[14.5px] sm:text-[16px] text-[#a3a1a8] max-w-3xl mt-3 leading-relaxed">
                From building and exploring AI-powered systems to working on real-world products, my professional journey has been focused on creating impactful, scalable and intelligent solutions.
              </p>
            </div>
          </Reveal>

          {/* Desktop Composition: Timeline on Left, AI Illustration on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left: Experience Timeline (7 cols) */}
            <div className="lg:col-span-7">
              <div className="relative pl-7 sm:pl-9 border-l-2 border-[#2a2a31] space-y-10 my-4">
                {experiencesList.map((exp, i) => (
                  <Reveal key={exp.role} delay={i * 0.1}>
                    <div className="relative group">
                      {/* Numbered circular marker: 01 and 02 with lime green highlight */}
                      <span className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-7 h-7 rounded-full bg-[#151518] border-2 border-[#c8f542] flex items-center justify-center font-mono text-[11px] font-bold text-[#c8f542] shadow-[0_0_15px_rgba(200,245,66,0.35)] ring-4 ring-[#0c0c0e]">
                        {exp.number.padStart(2, '0')}
                      </span>

                      <div>
                        {/* Header: Date + Employment Type Pill */}
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="font-mono text-[12.5px] font-semibold text-[#c8f542] tracking-wider">
                            {exp.period}
                          </span>
                          <span className="chip !text-[11px] !py-0.5 !px-3 !bg-[#1b1b20] !border-[#2a2a31] text-[#f3f1ec]/80 font-mono">
                            {exp.employmentType}
                          </span>
                        </div>

                        {/* Role Title & Company */}
                        <h3 className="font-display font-bold text-[19px] sm:text-[21px] text-[#f3f1ec] mt-1.5">
                          {exp.role}
                        </h3>
                        <p className="text-[14px] text-[#a3a1a8] font-medium mt-0.5">
                          {exp.company}
                        </p>

                        {/* Responsibilities Bullets with subtle lime markers */}
                        <ul className="mt-3.5 space-y-2 text-[13.5px] text-[#a3a1a8] leading-relaxed">
                          {exp.bullets.map((b, idx) => (
                            <li key={idx} className="flex items-start gap-2.5">
                              <span className="text-[#c8f542] text-sm mt-0.5 font-bold">•</span>
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Right: Dedicated AI Engineering Visual Illustration (5 cols) */}
            <div className="lg:col-span-5 w-full flex items-center justify-center">
              <Reveal delay={0.2} className="w-full">
                <AiEngineeringVisual />
              </Reveal>
            </div>
          </div>
        </section>

        {/* Subtle Section Divider */}
        <div className="w-full border-t border-[#2a2a31]/60" />

        {/* ================================================================= */}
        {/* SECTION 2: EDUCATION JOURNEY (Full Width Curved Roadmap)          */}
        {/* ================================================================= */}
        <section id="education" className="w-full relative">
          {/* Section Heading */}
          <Reveal>
            <div className="mb-12 md:mb-16">
              <p className="font-mono text-[12.5px] md:text-[13px] tracking-[0.14em] text-[#ff6a3d] font-semibold uppercase mb-2">
                {'// EDUCATION'}
              </p>
              <h2 className="display-section text-[#f3f1ec]">
                Education <span className="text-[#c8f542]">Journey</span>
              </h2>
              <p className="text-[14.5px] sm:text-[16px] text-[#a3a1a8] max-w-3xl mt-2 leading-relaxed">
                A continuous learning path, from my first classroom to the AI systems I build today.
              </p>
            </div>
          </Reveal>

          {/* Desktop Layout: Full-Width Winding Road SVG + Alternating Floating Cards (>= 1024px) */}
          <div className="hidden lg:block relative w-full min-h-[520px] py-4 select-none">
            {/* Center-bottom radial glow */}
            <div
              className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_35%_at_50%_75%,rgba(200,245,66,0.06),transparent_70%)]"
              aria-hidden="true"
            />

            {/* Full-Width SVG Road & Connectors */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
              viewBox="0 0 1280 480"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="fullRoadGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ff6b3d" />
                  <stop offset="48%" stopColor="#6f9bff" />
                  <stop offset="100%" stopColor="#c8f542" />
                </linearGradient>

                <filter id="roadGlowFilterFull" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Star sprinkles in background */}
              <circle cx="80" cy="60" r="1.5" fill="#f3f1ec" opacity="0.6" />
              <circle cx="280" cy="140" r="1.2" fill="#c8f542" opacity="0.7" />
              <circle cx="520" cy="50" r="1.8" fill="#6f9bff" opacity="0.6" />
              <circle cx="780" cy="90" r="1.5" fill="#ff6a3d" opacity="0.6" />
              <circle cx="1080" cy="70" r="1.2" fill="#f3f1ec" opacity="0.5" />
              <circle cx="240" cy="420" r="1.5" fill="#6f9bff" opacity="0.5" />
              <circle cx="700" cy="440" r="1.3" fill="#f3f1ec" opacity="0.6" />
              <circle cx="980" cy="400" r="1.5" fill="#c8f542" opacity="0.7" />

              {/* Paper plane dashed flight arc from Stop 1 to Stop 3 */}
              <path
                d="M 360 110 Q 640 10, 920 90"
                stroke="#6f9bff"
                strokeWidth="1.4"
                strokeDasharray="5 7"
                strokeOpacity="0.55"
                fill="none"
              />
              <g transform="translate(640, 18) rotate(4)">
                <path
                  d="m22 2-7 20-4-9-9-4Z"
                  fill="#6f9bff"
                  fillOpacity="0.3"
                  stroke="#6f9bff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  transform="scale(0.8) translate(-10, -10)"
                />
              </g>

              {/* Glowing Road Under-track */}
              <path
                d="M 0 360 C 120 360, 160 290, 240 290 C 360 290, 500 245, 640 245 C 780 245, 920 260, 1040 260 C 1140 260, 1200 230, 1280 220"
                stroke="url(#fullRoadGrad)"
                strokeWidth="14"
                strokeOpacity="0.22"
                strokeLinecap="round"
                fill="none"
                filter="url(#roadGlowFilterFull)"
              />

              {/* Main Road Track */}
              <path
                d="M 0 360 C 120 360, 160 290, 240 290 C 360 290, 500 245, 640 245 C 780 245, 920 260, 1040 260 C 1140 260, 1200 230, 1280 220"
                stroke="url(#fullRoadGrad)"
                strokeWidth="4"
                strokeLinecap="round"
                fill="none"
              />

              {/* Flowing Dashed Center Line */}
              <path
                d="M 0 360 C 120 360, 160 290, 240 290 C 360 290, 500 245, 640 245 C 780 245, 920 260, 1040 260 C 1140 260, 1200 230, 1280 220"
                stroke="#ffffff"
                strokeWidth="1.8"
                strokeDasharray="6 8"
                strokeOpacity="0.8"
                fill="none"
                className="road-dash-flow"
              />

              {/* Vertical Indicator Lines connecting nodes to cards */}
              {/* Stop 1 Connector (Node UP to Card 1) */}
              <line x1="240" y1="200" x2="240" y2="290" stroke="#ff6b3d" strokeWidth="1.5" strokeDasharray="3 3" strokeOpacity="0.75" />
              {/* Stop 2 Connector (Node DOWN to Card 2) */}
              <line x1="640" y1="245" x2="640" y2="330" stroke="#6f9bff" strokeWidth="1.5" strokeDasharray="3 3" strokeOpacity="0.75" />
              {/* Stop 3 Connector (Node UP to Card 3) */}
              <line x1="1040" y1="190" x2="1040" y2="260" stroke="#c8f542" strokeWidth="1.5" strokeDasharray="3 3" strokeOpacity="0.75" />

              {/* Milestone Node 1: Orange at (240, 290) */}
              <circle cx="240" cy="290" r="8" stroke="#ff6b3d" strokeWidth="2" fill="none" className="node-pulse-1" />
              <circle cx="240" cy="290" r="11" fill="#ff6b3d" fillOpacity="0.22" />
              <circle cx="240" cy="290" r="5" fill="#ff6b3d" stroke="#0c0c0e" strokeWidth="2" />

              {/* Milestone Node 2: Blue at (640, 245) */}
              <circle cx="640" cy="245" r="8" stroke="#6f9bff" strokeWidth="2" fill="none" className="node-pulse-2" />
              <circle cx="640" cy="245" r="11" fill="#6f9bff" fillOpacity="0.22" />
              <circle cx="640" cy="245" r="5" fill="#6f9bff" stroke="#0c0c0e" strokeWidth="2" />

              {/* Milestone Node 3: Lime at (1040, 260) */}
              <circle cx="1040" cy="260" r="8" stroke="#c8f542" strokeWidth="2" fill="none" className="node-pulse-3" />
              <circle cx="1040" cy="260" r="11" fill="#c8f542" fillOpacity="0.22" />
              <circle cx="1040" cy="260" r="5" fill="#c8f542" stroke="#0c0c0e" strokeWidth="2" />
            </svg>

            {/* Card 1: Schooling (ABOVE Node 1 on Left) */}
            <div className="absolute left-[4%] top-[15px] w-[clamp(260px,23vw,310px)] z-10">
              <MilestoneCard stop={stop1} className="min-h-[145px]" />
            </div>

            {/* Card 2: Intermediate (BELOW Node 2 in Center) */}
            <div className="absolute left-1/2 -translate-x-1/2 top-[320px] w-[clamp(260px,23vw,310px)] z-10">
              <MilestoneCard stop={stop2} className="min-h-[145px]" />
            </div>

            {/* Card 3: B.Tech (ABOVE Node 3 on Right) */}
            <div className="absolute right-[4%] top-[15px] w-[clamp(280px,24vw,330px)] z-10">
              <MilestoneCard stop={stop3} className="min-h-[145px]" />
            </div>
          </div>

          {/* Tablet & Mobile Roadmap Layout (< 1024px) */}
          <div className="block lg:hidden relative pl-7 sm:pl-9 max-w-xl mx-auto my-6">
            <div
              className="absolute left-3.5 sm:left-4 top-4 bottom-4 w-1 rounded-full bg-gradient-to-b from-[#ff6b3d] via-[#6f9bff] to-[#c8f542]"
              aria-hidden="true"
            />

            <div className="space-y-6">
              {educationJourney.map((stop, index) => {
                const styles = getAccentStyles(stop.accent);
                return (
                  <Reveal key={stop.id} delay={index * 0.1}>
                    <div className="relative group">
                      <span
                        className={`absolute -left-[20px] sm:-left-[22px] top-6 w-3.5 h-3.5 rounded-full ${styles.dotGlow} ring-4 ring-[#0c0c0e]`}
                        aria-hidden="true"
                      />
                      <MilestoneCard stop={stop} />
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Subtle Section Divider */}
        <div className="w-full border-t border-[#2a2a31]/60" />

        {/* ================================================================= */}
        {/* SECTION 3: CERTIFICATIONS & ACHIEVEMENTS                          */}
        {/* ================================================================= */}
        <section className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            
            {/* Left: Certifications */}
            <div className="lg:col-span-7">
              <Reveal>
                <div className="mb-6">
                  <p className="font-mono text-[12px] md:text-[12.5px] tracking-[0.14em] text-[#ff6a3d] font-semibold uppercase mb-1.5">
                    {'// CERTIFICATIONS'}
                  </p>
                  <h3 className="font-display font-bold text-[22px] sm:text-[26px] text-[#f3f1ec]">
                    Certifications
                  </h3>
                </div>
              </Reveal>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {certificationsList.map((cert, index) => (
                  <Reveal key={cert.title} delay={index * 0.04}>
                    <div className="p-4 rounded-xl bg-[#151518] border border-[#2a2a31] hover:border-[#c8f542]/40 hover:bg-[#18181c] transition-all duration-300 flex items-center justify-between gap-3 h-full group">
                      <div className="flex items-center gap-3 min-w-0">
                        <BrandIcon type={cert.iconType} />
                        <div className="min-w-0">
                          <h4 className="font-display font-bold text-[14px] text-[#f3f1ec] truncate group-hover:text-[#c8f542] transition-colors">
                            {cert.title}
                          </h4>
                          <p className="font-mono text-[11px] text-[#a3a1a8] truncate">
                            {cert.issuer}
                          </p>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-[#a3a1a8] group-hover:text-[#c8f542] group-hover:translate-x-0.5 transition-all shrink-0" />
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Right: Honors & Achievements */}
            <div className="lg:col-span-5">
              <Reveal>
                <div className="mb-6">
                  <p className="font-mono text-[12px] md:text-[12.5px] tracking-[0.14em] text-[#ff6a3d] font-semibold uppercase mb-1.5">
                    {'// ACHIEVEMENTS'}
                  </p>
                  <h3 className="font-display font-bold text-[22px] sm:text-[26px] text-[#f3f1ec]">
                    Honors &amp; Achievements
                  </h3>
                </div>
              </Reveal>

              <div className="space-y-3.5">
                {achievementsList.map((ach, index) => (
                  <Reveal key={`${ach.title}-${index}`} delay={index * 0.06}>
                    <div className="p-4 rounded-xl bg-[#151518] border border-[#2a2a31] hover:border-[#c8f542]/40 hover:bg-[#18181c] transition-all duration-300 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3.5 min-w-0">
                        <div className="w-9 h-9 rounded-lg bg-[#c8f542]/15 border border-[#c8f542]/30 flex items-center justify-center text-lg shrink-0">
                          {ach.iconType === 'trophy' ? '🏆' : '⭐'}
                        </div>
                        <div className="min-w-0">
                          <h4 className="font-display font-bold text-[14.5px] text-[#f3f1ec] truncate">
                            {ach.title}
                          </h4>
                          <p className="font-mono text-[11.5px] text-[#a3a1a8] truncate">
                            {ach.subtitle}
                          </p>
                        </div>
                      </div>

                      <span className="font-mono text-[12px] font-semibold px-2.5 py-0.5 rounded-md bg-[#1b1b20] border border-[#2a2a31] text-[#c8f542] shrink-0">
                        {ach.year}
                      </span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}
