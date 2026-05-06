'use client';

import { Instagram, Facebook, Linkedin, Twitter, MapPin, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-navy pt-20 pb-10 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Large Typography Statement */}
        <div className="mb-20 text-center md:text-left">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white/20 font-bold uppercase tracking-tighter leading-none">
            A Peaceful Home <br/>
            <span className="text-white/25">Creates A Powerful Aura.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <Link href="#home" className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center">
                <span className="text-navy font-bold text-xs">HA</span>
              </div>
              <span className="text-lg font-bold tracking-tight uppercase text-white">Home Aura</span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Elevating Indian living through bespoke luxury interiors and meticulous turnkey construction.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 rounded-none border border-white/10 flex items-center justify-center text-white/50 hover:bg-gold hover:border-gold hover:text-navy transition-all duration-300">
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['About Us', 'Projects', 'Design Packages', 'Testimonials', 'Contact'].map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-white/50 hover:text-gold text-sm transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {['Luxury Interiors', 'Turnkey Construction', 'Modular Kitchens', 'Space Planning', 'Renovation'].map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-white/50 hover:text-gold text-sm transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Office</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-gold shrink-0 mt-0.5" size={16} strokeWidth={1.5} />
                <address className="not-italic text-white/50 text-sm leading-relaxed">
                  Near DPS School, Raj Vatika<br/>
                  Semariya-2<br/>
                  Chhattisgarh 493111<br/>
                  India
                </address>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="text-gold shrink-0" size={16} strokeWidth={1.5} />
                <p className="text-white/50 text-sm">
                  homeauradesign82@gmail.com
                </p>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-gold shrink-0 mt-0.5" size={16} strokeWidth={1.5} />
                <div className="text-white/50 text-sm space-y-1.5">
                  <p>+91 62645 55840</p>
                  <p>+91 97431 00176</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Home Aura Design & Construction. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/40 hover:text-white text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/40 hover:text-white text-xs transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
