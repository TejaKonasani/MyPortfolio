'use client';

import Link from 'next/link';
import { navLinks, profile } from '@/lib/data';

/**
 * Premium dark sticky navigation bar:
 * - Brand: "KONASANI TEJA •" with accent lime dot
 * - Sticky with solid-ish dark backdrop rgba(12, 12, 14, 0.88) and 14px blur
 * - 1px bottom border #2a2a31
 * - Clear, high-contrast readable links (#e9e7e2, 14px, 500 weight)
 * - Pill shape on hover (#1b1b20 bg, lime text #c8f542)
 * - "Contact" as an eye-catching lime pill button (#c8f542 bg, #0c0c0e text)
 * - Mobile responsive: prevents overlap, keeps logo & Contact button cleanly accessible
 */
export default function Header() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  // Middle links (excluding Contact which is rendered as the primary CTA)
  const middleLinks = navLinks.filter((link) => link.href !== '#contact');

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-[#0c0c0e]/90 backdrop-blur-[14px] border-b border-[#2a2a31]">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-5 md:px-10 lg:px-12 h-[68px] md:h-[72px]">
        {/* Brand Logo: KONASANI TEJA */}
        <Link
          href="#top"
          className="group flex items-center gap-1.5 font-display font-extrabold text-[15px] sm:text-[17px] md:text-[18px] tracking-[0.06em] uppercase text-[#f3f1ec] transition-colors"
          aria-label="Konasani Teja — home"
        >
          <span>KONASANI TEJA</span>
          <span
            aria-hidden="true"
            className="w-1.5 h-1.5 rounded-full bg-[#c8f542] shadow-[0_0_8px_#c8f542] group-hover:scale-125 transition-transform"
          />
        </Link>

        {/* Navigation */}
        <nav aria-label="Primary" className="flex items-center gap-2 md:gap-3">
          {/* Middle links: hidden on mobile, visible on desktop */}
          <ul className="hidden md:flex items-center gap-1 lg:gap-2">
            {middleLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="inline-block font-mono text-[13.5px] font-medium text-[#e9e7e2] py-2 px-3.5 rounded-full transition-colors duration-150 hover:bg-[#1b1b20] hover:text-[#c8f542]"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`${basePath}${profile.resumePath}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-mono text-[13.5px] font-medium text-[#e9e7e2] py-2 px-3.5 rounded-full transition-colors duration-150 hover:bg-[#1b1b20] hover:text-[#c8f542]"
              >
                Resume ↗
              </a>
            </li>
          </ul>

          {/* Contact CTA: always visible on mobile and desktop */}
          <a
            href="#contact"
            className="inline-flex items-center justify-center font-mono text-[13px] sm:text-[14px] font-semibold bg-[#c8f542] text-[#0c0c0e] py-1.5 sm:py-2 px-3.5 sm:px-5 rounded-full shadow-[0_4px_14px_rgba(200,245,66,0.22)] hover:shadow-[0_0_20px_rgba(200,245,66,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
