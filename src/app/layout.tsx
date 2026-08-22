import type { Metadata } from 'next';
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '800'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Teja Maheswara Reddy — AI & Full-Stack Developer',
  description: 'Portfolio of Teja Maheswara Reddy — AI & Full-Stack Developer specializing in production-grade applications, ML models, and modern web development.',
  authors: [{ name: 'Teja Maheswara Reddy' }],
  keywords: ['Teja Maheswara Reddy', 'AI Developer', 'Full-Stack Developer', 'Portfolio', 'Software Engineer', 'KL University', 'MedSpaces', 'Mill2Meal'],
  openGraph: {
    title: 'Teja Maheswara Reddy — AI & Full-Stack Developer',
    description: 'Portfolio of Teja Maheswara Reddy — AI & Full-Stack Developer specializing in production-grade applications, ML models, and modern web development.',
    type: 'website',
    locale: 'en_US',
    url: 'https://tejamahswara.dev',
    siteName: 'Teja Maheswara Reddy Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Teja Maheswara Reddy — AI & Full-Stack Developer',
    description: 'Portfolio of Teja Maheswara Reddy — AI & Full-Stack Developer specializing in production-grade applications, ML models, and modern web development.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} bg-[#050608] min-h-screen text-text-primary`}>
        {children}
      </body>
    </html>
  );
}