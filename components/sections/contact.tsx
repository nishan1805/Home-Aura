'use client';

import { motion } from 'motion/react';
import { MapPin, Phone, Mail, MessageSquare } from 'lucide-react';
import { SectionLabel } from '../ui/section-label';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#F8F6F1] text-navy relative">
      <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-[0.05] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div className="flex flex-col justify-center">
            <SectionLabel className="justify-start mb-6">Get In Touch</SectionLabel>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-light font-serif mb-6 leading-tight text-navy"
            >
              Ready to start your <span className="italic text-gold">project?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-navy/60 text-lg leading-relaxed mb-10 max-w-lg"
            >
              Book a free consultation with our expert architects and structural engineers.
            </motion.p>
            
            <div className="space-y-6">
              {[
                { icon: MapPin, text: 'Near DPS School, Raj Vatika, Semariya-2, Chhattisgarh 493111' },
                { icon: Phone, text: '+91 62645 55840 / +91 97431 00176' },
                { icon: Mail, text: 'homeauradesign82@gmail.com' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-none bg-white border border-navy/10 flex items-center justify-center shrink-0 shadow-sm">
                    <item.icon size={18} className="text-gold" />
                  </div>
                  <span className="text-navy/80 text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-none p-8 lg:p-10 shadow-lg border border-gray-100 relative"
            >
              <h3 className="text-xl font-bold uppercase tracking-wider text-navy mb-6">Send an Inquiry</h3>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-navy/60">Full Name</label>
                    <input type="text" className="w-full bg-beige/50 border border-navy/10 rounded-none px-4 py-3 text-sm text-navy focus:outline-none focus:border-gold/50 transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-navy/60">Phone</label>
                    <input type="tel" className="w-full bg-beige/50 border border-navy/10 rounded-none px-4 py-3 text-sm text-navy focus:outline-none focus:border-gold/50 transition-colors" placeholder="+91" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-navy/60">Project Type</label>
                  <select className="w-full bg-beige/50 border border-navy/10 rounded-none px-4 py-3 text-sm text-navy focus:outline-none focus:border-gold/50 transition-colors appearance-none" defaultValue="Civil Construction">
                    <option>Civil Construction</option>
                    <option>Design (Architectural, Interior and Structural)</option>
                    <option>Renovation</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-navy/60">Message</label>
                  <textarea rows={4} className="w-full bg-beige/50 border border-navy/10 rounded-none px-4 py-3 text-sm text-navy focus:outline-none focus:border-gold/50 transition-colors resize-none" placeholder="Tell us about your project..."></textarea>
                </div>
                <div className="pt-2">
                  <button type="submit" className="w-full bg-navy text-white hover:bg-navy/90 py-4 rounded-none font-bold uppercase text-xs tracking-widest transition-colors">
                    Request Consultation
                  </button>
                </div>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
