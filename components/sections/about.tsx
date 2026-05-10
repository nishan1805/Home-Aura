'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { SectionLabel } from '../ui/section-label';

export function About() {
  return (
    <section id="about" className="py-32 bg-[#F8F6F1] relative overflow-hidden">
      {/* Subtle architectural depth */}
      <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-gold/5 to-transparent pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/natural-paper.png')` }} />
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 xl:gap-32 items-center">
          
          {/* Left Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] overflow-hidden border border-navy/5 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop"
                alt="Luxury Residential Construction"
                fill
                className="object-cover hover:scale-105 transition-transform duration-1000 grayscale-[0.1] contrast-[1.05]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent" />
            </div>
            
            {/* Subtle floating detail */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-l border-b border-gold/40 hidden xl:block" />
          </motion.div>

          {/* Right Column: Content */}
          <div className="flex flex-col items-start">
            <SectionLabel className="justify-start mb-10">About Home Aura</SectionLabel>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl lg:text-6xl font-light font-serif text-navy leading-[1.1] mb-10"
            >
              Architectural excellence. Crafted for <span className="text-gold italic font-serif">generations.</span>
            </motion.h2>
            
            <div className="space-y-6 max-w-xl">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-navy/60 text-sm md:text-base leading-relaxed tracking-wide font-light"
              >
                Home Aura specialises in high-quality civil construction work and bespoke architectural interiors. We manage the complete journey of basic to luxury residential projects across Chhattisgarh, ensuring every blueprint is executed with precision and care.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-navy/60 text-sm md:text-base leading-relaxed tracking-wide font-light"
              >
                Our philosophy is simple: we combine thoughtful design with strong construction. From the foundation to the final finish, we create homes that are durable, elegant, and built to reflect your vision.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-12"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-10 py-4 bg-navy text-white text-[10px] font-bold uppercase tracking-[0.4em] overflow-hidden transition-all duration-300 hover:bg-gold hover:text-navy"
              >
                <span className="relative z-10">View Projects</span>
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </motion.button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
