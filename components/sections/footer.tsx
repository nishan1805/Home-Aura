'use client';

import { Instagram, Facebook } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-navy pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <Link href="#about" className="flex items-center space-x-3 mb-8 group">
            <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center transition-transform duration-500 group-hover:rotate-[360deg]">
              <span className="text-navy font-bold text-sm tracking-tighter">HA</span>
            </div>
            <span className="text-xl font-light tracking-[0.2em] uppercase text-white">Home Aura</span>
          </Link>

          {/* Short Brand Description */}
          <p className="text-white/40 text-sm md:text-base font-light tracking-wide max-w-2xl mb-10">
            A Peaceful Home Creates A Powerful Aura. Building quality civil construction and bespoke interiors across Chhattisgarh.
          </p>

          {/* Social Icons - Instagram & Facebook only */}
          <div className="flex gap-6 mb-12">
            {[
              { Icon: Instagram, href: "https://www.instagram.com/home_aura_design_and_const/" },
              { Icon: Facebook, href: "https://www.facebook.com/profile.php?id=61569740781116" }
            ].map((social, i) => (
              <a 
                key={i} 
                href={social.href} 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:border-gold hover:text-gold hover:bg-gold/5 transition-all duration-500"
              >
                <social.Icon size={18} strokeWidth={1.5} />
              </a>
            ))}
          </div>

          {/* Bottom Copyright */}
          <div className="w-full pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/20 text-[10px] uppercase font-bold tracking-[0.3em]">
              © {new Date().getFullYear()} Home Aura Design & Construction. All rights reserved.
            </p>
            <div className="flex gap-8">
              <Link href="#" className="text-white/10 hover:text-white/30 text-[10px] uppercase font-bold tracking-[0.2em] transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-white/10 hover:text-white/30 text-[10px] uppercase font-bold tracking-[0.2em] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

      </div>

      {/* Subtle depth elements */}
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gold/5 rounded-full blur-[120px] pointer-events-none opacity-50" />
    </footer>
  );
}
