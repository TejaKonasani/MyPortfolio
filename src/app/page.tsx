'use client';

import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="relative w-full min-h-screen bg-transparent text-text-primary flex flex-col justify-between select-none px-6 md:px-10 lg:px-12 pb-8 pt-6">
      
      {/* Layer 2: Subtle technology video loop (Scoped locally to Landing Page) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="fixed inset-0 w-full h-full object-cover pointer-events-none z-[-30] opacity-[0.45]"
      >
        <source src="/images/tech-background.mp4" type="video/mp4" />
      </video>

      {/* Layer 3: Dark overlay to control overall contrast */}
      <div className="fixed inset-0 bg-[#050608]/30 pointer-events-none z-[-20]" />

      {/* Layer 4: Theme-harmonized gradient tint (Violet/Indigo/Cyan) */}
      <div className="fixed inset-0 bg-gradient-to-tr from-[#8B5CF6]/5 via-[#6366F1]/5 to-[#38BDF8]/5 pointer-events-none z-[-10]" />

      {/* Background Noise Grid Texture */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-[-5]">
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:4rem_4rem]" />
        <div className="absolute inset-0 opacity-[0.01] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
      </div>

      {/* Main Split Grid (Centers text and image) */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 w-full max-w-content mx-auto items-center gap-12 z-10 overflow-hidden mt-6">

        {/* Left Content Area (58% on Desktop) */}
        <div className="lg:col-span-7 flex flex-col justify-center h-full">
          <span className="text-[20px] font-medium tracking-normal text-[#FFFFFF] mb-2 block">
            Hi, I'm
          </span>

          <h1 className="font-heading leading-none">
            <span 
              className="text-[72px] md:text-[84px] font-black tracking-[-3px] block leading-none"
              style={{ 
                background: 'linear-gradient(to right, #8B5CF6, #6366F1, #38BDF8)', 
                WebkitBackgroundClip: 'text', 
                WebkitTextFillColor: 'transparent'
              }}
            >
              TEJA
            </span>
            <span 
              className="text-[72px] md:text-[84px] font-black tracking-[-3px] block leading-none mt-1"
              style={{ 
                background: 'linear-gradient(to right, #8B5CF6, #6366F1, #38BDF8)', 
                WebkitBackgroundClip: 'text', 
                WebkitTextFillColor: 'transparent'
              }}
            >
              Maheswara Reddy
            </span>
          </h1>

          <div className="space-y-1 mt-2">
            <p className="text-[22px] font-bold text-[#FFFFFF] leading-tight">
              AI & Data Science Graduate
            </p>
            <p 
              className="font-semibold text-base tracking-[0.8px] block"
              style={{ 
                background: 'linear-gradient(to right, #8B5CF6, #6366F1, #38BDF8)', 
                WebkitBackgroundClip: 'text', 
                WebkitTextFillColor: 'transparent'
              }}
            >
              Full Stack Developer | AI Engineer
            </p>
          </div>

          <p className="text-[#FFFFFF] text-[20px] leading-[1.8] font-normal max-w-[560px] mt-4">
            Building production-ready full-stack applications, AI-powered software, and scalable backend systems.
          </p>

          <div className="flex flex-row gap-5 items-center mt-8 mb-4">
            <Link
              href="/home"
              className="uiverse-profile-btn"
            >
              <span>Show Profile</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66 43">
                <polygon points="39.58,4.46 44.11,0 66,21.5 44.11,43 39.58,38.54 56.94,21.5"></polygon>
                <polygon points="19.79,4.46 24.32,0 46.21,21.5 24.32,43 19.79,38.54 37.15,21.5"></polygon>
                <polygon points="0,4.46 4.53,0 26.42,21.5 4.53,43 0,38.54 17.36,21.5"></polygon>
              </svg>
            </Link>
            <a
              href="/resume/Teja_Konasani_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="uiverse-resume-btn"
            >
              <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
              <span className="text">Resume</span>
              <span className="circle"></span>
              <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </a>
          </div>
        </div>


      </div>

      {/* Bottom Floating Stats Glass Card */}
      <div className="max-w-content mx-auto w-full z-10 shrink-0 h-[90px] mt-10">
        <div className="w-full h-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-[24px] rounded-[24px] flex justify-around items-center px-8 shadow-lg">
          
          <div className="flex flex-col items-center justify-center">
            <span className="text-[36px] lg:text-[44px] font-black font-mono gradient-text leading-none mb-0.5">2+</span>
            <span className="text-[#FFFFFF] text-[12px] lg:text-[14px] font-medium uppercase tracking-[1.5px]">Internships</span>
          </div>

          <div className="h-8 w-px bg-white/10 hidden md:block" />

          <div className="flex flex-col items-center justify-center">
            <span className="text-[36px] lg:text-[44px] font-black font-mono gradient-text leading-none mb-0.5">4+</span>
            <span className="text-[#FFFFFF] text-[12px] lg:text-[14px] font-medium uppercase tracking-[1.5px]">Production Apps</span>
          </div>

          <div className="h-8 w-px bg-white/10 hidden md:block" />

          <div className="flex flex-col items-center justify-center">
            <span className="text-[36px] lg:text-[44px] font-black font-mono gradient-text leading-none mb-0.5">1+</span>
            <span className="text-[#FFFFFF] text-[12px] lg:text-[14px] font-medium uppercase tracking-[1.5px]">Years Experience</span>
          </div>

          <div className="h-8 w-px bg-white/10 hidden md:block" />

          <div className="flex flex-col items-center justify-center">
            <svg className="w-[28px] h-[28px] lg:w-[34px] lg:h-[34px] mb-1" viewBox="0 0 24 24" fill="none" stroke="url(#rocket-grad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <defs>
                <linearGradient id="rocket-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6E56F8" />
                  <stop offset="100%" stopColor="#22D3EE" />
                </linearGradient>
              </defs>
              <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
              <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
              <path d="M9 15H4.5"/>
              <path d="M15 9V4.5"/>
            </svg>
            <span className="text-[#FFFFFF] text-[12px] lg:text-[14px] font-medium uppercase tracking-[1.5px] mt-0.5">Always Learning</span>
          </div>

        </div>
      </div>

    </div>
  );
}