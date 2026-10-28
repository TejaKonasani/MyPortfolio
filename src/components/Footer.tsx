import { profile } from '@/lib/data';

export default function Footer() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t-[3px] border-ink">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="font-mono text-[13px] text-muted tracking-[0.08em] uppercase">
          © {year} {profile.name} — All rights reserved
        </p>

        <div className="flex items-center gap-6">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[13px] tracking-[0.08em] uppercase hover:text-pop transition-colors"
          >
            GitHub ↗
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[13px] tracking-[0.08em] uppercase hover:text-pop transition-colors"
          >
            LinkedIn ↗
          </a>
          <a
            href={`${basePath}${profile.resumePath}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[13px] tracking-[0.08em] uppercase hover:text-pop transition-colors"
          >
            Resume ↗
          </a>
        </div>
      </div>
    </footer>
  );
}