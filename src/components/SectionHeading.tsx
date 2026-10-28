import Reveal from './ui/Reveal';

interface SectionHeadingProps {
  index: string; // e.g. "01"
  label: string; // e.g. "SELECTED WORK"
  title: React.ReactNode;
}

/** ( 01 ) SELECTED WORK label + giant section heading, revealed on scroll. */
export default function SectionHeading({ index, label, title }: SectionHeadingProps) {
  return (
    <div className="mb-10 md:mb-16">
      <Reveal>
        <p className="section-label font-medium mb-4">
          ( {index} ) {label}
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="display-section text-ink">{title}</h2>
      </Reveal>
    </div>
  );
}