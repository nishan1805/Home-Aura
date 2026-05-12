import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { SmoothScroll } from '@/components/smooth-scroll';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' });

export const metadata: Metadata = {
  title: 'Home Aura Design & Construction | Premium Interiors',
  description: 'Premium interior design and construction solutions crafted with modern aesthetics, functionality, and timeless elegance.',
  icons:{
    icon: '/favicon.png',
   
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body suppressHydrationWarning className="antialiased font-sans">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
