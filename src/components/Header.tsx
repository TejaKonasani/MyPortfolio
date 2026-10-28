'use client';

import Link from 'next/link';
import { navLinks, profile } from '@/lib/data';

/**
 * Fixed header. "TMR®" logo left, nav right.
 * mix-blend-mode: difference keeps it readable on every background.
 */
export default function Header() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between px-6 md:px-10 lg:px-12 h-[72px] mix-blend-difference text-[#F0EBE0]">
        <Link
          href="#top"
          className="font-display font-extrabold text-[22px] tracking-tight leading-none"
          aria-label="Teja Maheswara Reddy — home"
        >
          TMR<sup className="text-[11px] align-super">®</sup>
        </Link>

        <nav aria-label="Primary">
          <ul className="flex items-center gap-5 md:gap-9">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-mono text-[13px] md:text-[15px] font-medium tracking-[0.08em] uppercase hover:opacity-70 transition-opacity"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="hidden sm:block">
              <a
                href={`${basePath}${profile.resumePath}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[13px] md:text-[15px] font-medium tracking-[0.08em] uppercase border-2 border-current rounded-full px-4 py-1.5 hover:bg-[#F0EBE0] hover:text-[#121210] transition-colors"
              >
                Resume ↗
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}