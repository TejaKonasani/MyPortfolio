import Header from '@/components/Header';
import Background from '@/components/Background';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import About from '@/components/About';
import Work from '@/components/Work';
import Stack from '@/components/Stack';
import Path from '@/components/Path';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Background />
      <Header />
      <main id="main">
        <Hero />
        <Marquee />
        <About />
        <Work />
        <Stack />
        <Path />
      </main>
      <Footer />
    </>
  );
}
