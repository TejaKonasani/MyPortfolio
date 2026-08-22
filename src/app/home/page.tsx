import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import LazySection from '@/components/LazySection';

const About = dynamic(() => import('@/components/About'));
const Experience = dynamic(() => import('@/components/Experience'));
const Projects = dynamic(() => import('@/components/Projects'));
const Skills = dynamic(() => import('@/components/Skills'));
const Certifications = dynamic(() => import('@/components/Certifications'));
const Education = dynamic(() => import('@/components/Education'));
const Contact = dynamic(() => import('@/components/Contact'));

export default function Home() {
  return (
    <main className="bg-transparent w-full overflow-x-hidden relative min-h-screen">
      {/* Layer 2: Futuristic static background image for Profile Page */}
      <div 
        className="fixed inset-0 w-full h-full pointer-events-none z-[-30]"
        style={{
          backgroundImage: "url('/images/home-bg-static.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          opacity: 0.75
        }}
      />

      {/* Layer 3: Dark overlay to control overall contrast */}
      <div className="fixed inset-0 bg-[#050608]/45 pointer-events-none z-[-20]" />

      {/* Layer 4: Theme-harmonized gradient tint (Violet/Indigo/Cyan) */}
      <div className="fixed inset-0 bg-gradient-to-tr from-[#8B5CF6]/5 via-[#6366F1]/5 to-[#38BDF8]/5 pointer-events-none z-[-10]" />

      {/* Layer 5: Profile Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <LazySection minHeight="300px">
          <About />
        </LazySection>
        <LazySection minHeight="400px">
          <Experience />
        </LazySection>
        <LazySection minHeight="500px">
          <Projects />
        </LazySection>
        <LazySection minHeight="400px">
          <Skills />
        </LazySection>
        <LazySection minHeight="300px">
          <Certifications />
        </LazySection>
        <LazySection minHeight="400px">
          <Education />
        </LazySection>
        <LazySection minHeight="300px">
          <Contact />
        </LazySection>
      </div>
    </main>
  );
}
