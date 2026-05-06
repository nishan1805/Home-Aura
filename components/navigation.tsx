'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { MagneticButton } from './magnetic-button';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Packages', href: '#packages' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 bg-navy py-6 border-b border-white/10 shadow-lg shadow-black/10`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-7xl mx-auto px-10 flex items-center justify-between">
        {/* Logo */}
        <Link href="#home" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center">
            <span className="text-navy font-bold text-xs">HA</span>
          </div>
          <span className="text-lg font-bold tracking-tight uppercase text-white">Home Aura</span>
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
        <div className="hidden md:flex">
          <MagneticButton>
            <Link href="#contact" className="inline-block px-6 py-3 bg-gold text-navy text-xs font-bold uppercase tracking-widest rounded-none hover:bg-white transition-colors">
              Free Consultation
            </Link>
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
          <Link href="#contact" className="mt-6 px-6 py-4 text-center rounded-none bg-gold text-navy font-bold uppercase text-xs tracking-widest" onClick={() => setMobileMenuOpen(false)}>
            Free Consultation
          </Link>
        </motion.div>
      )}
    </motion.header>
  );
}
