import { marqueeWords } from '@/lib/data';

/**
 * Full-width orange band (#ff6a3d), rotated -1.6deg,
 * scrolling the tech stack in uppercase Bricolage 800 (22s loop).
 * Features deep dark text #0c0c0e and soft orange glow.
 */
export default function Marquee() {
  // Two identical halves for a seamless -50% translate loop.
  const half = (
    <div className="flex items-center shrink-0">
      {marqueeWords.map((word, i) => (
        <span key={`${word}-${i}`} className="flex items-center shrink-0">
          <span className="font-display font-extrabold uppercase text-[22px] md:text-[28px] tracking-tight text-[#0c0c0e] whitespace-nowrap">
            {word}
          </span>
          <span aria-hidden="true" className="mx-5 md:mx-7 text-[18px] md:text-[24px] text-[#0c0c0e]">
            ✦
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <div aria-hidden="true" className="relative z-10 -mx-4 my-10 md:my-14 overflow-visible">
      <div className="bg-[#ff6a3d] border-y border-[#ff6a3d] -rotate-[1.6deg] py-3 md:py-3.5 overflow-hidden shadow-[0_0_35px_rgba(255,106,61,0.25)]">
        <div className="marquee-track">
          {half}
          {half}
        </div>
      </div>
    </div>
  );
}
