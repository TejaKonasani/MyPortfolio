'use client';

import { profile } from '@/lib/data';
import { Sparkles, ArrowUpRight, Mail, Linkedin, Github } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="relative z-10 border-t border-[#2a2a31] bg-[#0c0c0e] py-16 md:py-24 px-6 md:px-10 lg:px-12 overflow-hidden">
      <div className="max-w-[1320px] mx-auto flex flex-col items-center text-center">
        {/* Sparkle Icon */}
        <div className="w-10 h-10 rounded-xl bg-[#c8f542]/10 border border-[#c8f542]/30 flex items-center justify-center text-[#c8f542] mb-5 shadow-[0_0_20px_rgba(200,245,66,0.15)]">
          <span className="text-xl">✦</span>
        </div>

        {/* Section Label */}
        <p className="font-mono text-[12.5px] md:text-[13px] tracking-[0.16em] text-[#ff6a3d] font-semibold uppercase mb-3">
          {"// LET'S CONNECT"}
        </p>

        {/* Large Bold Full Name */}
        <h2 className="font-display font-extrabold text-[28px] sm:text-[38px] md:text-[48px] lg:text-[56px] text-[#f3f1ec] uppercase tracking-tight leading-tight max-w-5xl mb-4">
          KONASANI <span className="text-[#c8f542]">TEJA</span> MAHESWARA REDDY
        </h2>

        {/* Professional Tagline */}
        <p className="font-sans text-[15px] sm:text-[17px] md:text-[18px] text-[#a3a1a8] max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          {profile.footerTagline}
        </p>

        {/* Action Buttons Row */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-16">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 font-mono text-[13px] sm:text-[14px] font-bold bg-[#c8f542] text-[#0c0c0e] py-3.5 px-6 sm:px-7 rounded-full hover:shadow-[0_0_25px_rgba(200,245,66,0.5)] transition-all duration-200"
          >
            <span>Get In Touch</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 font-mono text-[13px] sm:text-[14px] font-semibold bg-[#151518] hover:bg-[#1b1b20] text-[#f3f1ec] hover:text-[#c8f542] border border-[#2a2a31] hover:border-[#c8f542]/50 py-3.5 px-5 sm:px-6 rounded-full transition-all"
            aria-label="Send Email"
          >
            <Mail className="w-4 h-4 text-[#a3a1a8]" />
            <span>Email</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#a3a1a8]" />
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-[13px] sm:text-[14px] font-semibold bg-[#151518] hover:bg-[#1b1b20] text-[#f3f1ec] hover:text-[#c8f542] border border-[#2a2a31] hover:border-[#c8f542]/50 py-3.5 px-5 sm:px-6 rounded-full transition-all"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4 text-[#a3a1a8]" />
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#a3a1a8]" />
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-[13px] sm:text-[14px] font-semibold bg-[#151518] hover:bg-[#1b1b20] text-[#f3f1ec] hover:text-[#c8f542] border border-[#2a2a31] hover:border-[#c8f542]/50 py-3.5 px-5 sm:px-6 rounded-full transition-all"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4 text-[#a3a1a8]" />
            <span>GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#a3a1a8]" />
          </a>
        </div>

        {/* Bottom Sub-bar */}
        <div className="w-full pt-8 border-t border-[#2a2a31]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="font-mono text-[12px] text-[#71717a]">
            © {currentYear} Konasani Teja Maheswara Reddy • Built with precision &amp; AI
          </p>

          <a
            href="#main"
            className="font-mono text-[12px] text-[#a3a1a8] hover:text-[#c8f542] transition-colors"
          >
            Back to Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
