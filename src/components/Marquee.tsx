import { marqueeWords } from '@/lib/data';

/**
 * Full-width orange band, 3px ink borders top/bottom, rotated -1.6deg,
 * scrolling the real tech stack in uppercase Bricolage 800, 22s loop.
 */
export default function Marquee() {
  // Two identical halves for a seamless -50% translate loop.
  const half = (
    <div className="flex items-center shrink-0">
      {marqueeWords.map((word, i) => (
        <span key={`${word}-${i}`} className="flex items-center shrink-0">
          <span className="font-display font-extrabold uppercase text-[26px] md:text-[34px] tracking-tight text-[#121210] whitespace-nowrap">
            {word}
          </span>
          <span aria-hidden="true" className="mx-6 md:mx-8 text-[22px] md:text-[30px] text-[#121210]">
            ✦
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <div aria-hidden="true" className="relative z-10 -mx-4 my-14 md:my-20 overflow-visible">
      <div className="bg-pop border-y-[3px] border-ink -rotate-[1.6deg] py-3.5 md:py-4 overflow-hidden">
        <div className="marquee-track">
          {half}
          {half}
        </div>
      </div>
    </div>
  );
}