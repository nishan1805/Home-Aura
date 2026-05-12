'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram } from 'lucide-react';
import Link from 'next/link';
import { MagneticButton } from './magnetic-button';
import Image from 'next/image';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Packages', href: '#packages' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

const tickerMessages = ["Free Consultation", "+91 62645 55840"];

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [tickerIndex, setTickerIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % tickerMessages.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 bg-navy py-4 border-b border-white/10 shadow-lg shadow-black/10`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-7xl mx-auto px-10 flex items-center justify-between">
        {/* Logo */}
        < Link href="#home" className="flex items-center space-x-2">

          <div>
          <Image src="/images/logoha.png"  alt="Home Aura Logo" width={150} height={80} className="object-contain"/>
          </div>
          {/* <span className="text-lg font-bold tracking-tight uppercase text-white">Home Aura</span> */}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-xs font-medium uppercase tracking-[0.2em] text-white/70">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-white transition-colors">
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="https://www.instagram.com/home_aura_design_and_const/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-gold transition-colors">
            <Instagram size={20} />
          </Link>
          <MagneticButton>
            <a 
              href="tel:+916264555840"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="inline-flex items-center justify-center px-8 bg-gold text-navy text-xs font-bold uppercase tracking-widest rounded-none hover:brightness-110 transition-all duration-300 relative overflow-hidden min-w-[220px] h-[46px] text-center"
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={tickerIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center justify-center whitespace-nowrap"
                >
                  {tickerMessages[tickerIndex]}
                </motion.span>
              </AnimatePresence>
            </a>
          </MagneticButton>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-navy border-t border-white/10 flex flex-col p-6 shadow-2xl md:hidden"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="py-3 text-white/80 hover:text-white border-b border-white/5 last:border-0"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="mt-6 flex items-center gap-4">
            <Link href="https://www.instagram.com/home_aura_design_and_const/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 text-white/80 rounded-none border border-white/10" onClick={() => setMobileMenuOpen(false)}>
              <Instagram size={20} />
            </Link>
            <a 
              href="tel:+916264555840" 
              className="flex-grow px-6 bg-gold text-navy font-bold uppercase text-xs tracking-widest rounded-none text-center relative overflow-hidden h-[52px] flex items-center justify-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={tickerIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 flex items-center justify-center whitespace-nowrap"
                >
                  {tickerMessages[tickerIndex]}
                </motion.span>
              </AnimatePresence>
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
