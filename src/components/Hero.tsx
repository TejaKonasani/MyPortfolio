export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-start overflow-hidden bg-transparent text-text-primary px-6 md:px-10 lg:px-12 pt-[72px]">
      {/* Dark overlay for Hero background */}
      <div className="absolute inset-0 bg-[#050608]/40 pointer-events-none z-[-20]" />

      {/* Theme-harmonized gradient tint (Violet/Indigo/Cyan) */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#8B5CF6]/5 via-[#6366F1]/5 to-[#38BDF8]/5 pointer-events-none z-[-10]" />

      {/* Static background glows (no animation to preserve performance and remove movement) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-accent-primary/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-accent-secondary/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-home-content w-full mx-auto flex flex-col items-start justify-center">
        {/* Intro tag with horizontal gradient line */}
        <div className="flex items-center gap-4 mb-4">
          <span className="text-[18px] md:text-[20px] font-medium tracking-normal text-[#FFFFFF]">
            Hi I'm
          </span>
          <div className="h-[2px] w-[100px] md:w-[140px] bg-gradient-to-r from-[#8B5CF6] via-[#6366F1] to-[#38BDF8]" />
        </div>

        {/* Large typography-focused name */}
        <h1 
          className="font-heading tracking-[-3px] mb-8 leading-[1.05] text-left text-[58px] sm:text-[78px] md:text-[98px] font-black"
          style={{ 
            background: 'linear-gradient(90deg, #4ADEDE 0%, #8B7FE8 50%, #D4537E 100%)', 
            WebkitBackgroundClip: 'text', 
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            color: 'transparent'
          }}
        >
          Konasani Teja
          <br />
          Maheswara Reddy
        </h1>

        {/* Rounded border pill for professional title */}
        <div className="border border-[#6E56F8]/50 bg-[#6E56F8]/5 px-6 py-2.5 rounded-full inline-block mb-8 text-[16px] md:text-[18px] font-bold text-[#FFFFFF] tracking-tight">
          AI & Data Science Graduate
        </div>

        {/* Left vertical gradient border description box */}
        <div className="relative pl-6 text-left">
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#8B5CF6] via-[#6366F1] to-[#38BDF8]" />
          <p className="text-[#FFFFFF] text-[16px] md:text-[19px] leading-[1.6] font-normal max-w-[580px]">
            Passionate, fast-learning problem solver who leads with
            <br className="hidden sm:inline" />
            initiative, discipline, and consistent execution.
          </p>
        </div>
      </div>
    </section>
  );
}