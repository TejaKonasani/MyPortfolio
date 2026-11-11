import type { Metadata, Viewport } from 'next';
import { Bricolage_Grotesque, Instrument_Serif, DM_Mono } from 'next/font/google';
import ScrollProgress from '@/components/ui/ScrollProgress';
import Cursor from '@/components/ui/Cursor';
import './globals.css';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['500', '800'],
  variable: '--font-bricolage',
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-instrument',
  display: 'swap',
});

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-mono',
  display: 'swap',
});

const siteUrl = 'https://tejakonasani.github.io/MyPortfolio/';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  title: 'Teja Maheswara Reddy — AI & Data Science Graduate',
  description:
    'Portfolio of Teja Maheswara Reddy — AI & Data Science graduate building production-ready full-stack applications, AI-powered software, and scalable backend systems.',
  authors: [{ name: 'Teja Maheswara Reddy' }],
  keywords: [
    'Teja Maheswara Reddy',
    'AI Developer',
    'Data Science',
    'Full-Stack Developer',
    'Portfolio',
    'KL University',
    'MedSpaces',
    'Mill2Meal',
  ],
  openGraph: {
    title: 'Teja Maheswara Reddy — AI & Data Science Graduate',
    description:
      'Portfolio of Teja Maheswara Reddy — AI & Data Science graduate building production-ready full-stack applications, AI-powered software, and scalable backend systems.',
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Teja Maheswara Reddy Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Teja Maheswara Reddy — AI & Data Science Graduate',
    description:
      'Portfolio of Teja Maheswara Reddy — AI & Data Science graduate building production-ready full-stack applications, AI-powered software, and scalable backend systems.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#0c0c0e',
  colorScheme: 'dark',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: 'dark' }}>
      <body
        className={`${bricolage.variable} ${instrumentSerif.variable} ${dmMono.variable} bg-bg text-main min-h-screen antialiased selection:bg-lime selection:text-[#0c0c0e]`}
      >
        <ScrollProgress />
        <Cursor />
        {children}
      </body>
    </html>
  );
}
