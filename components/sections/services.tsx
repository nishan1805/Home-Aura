'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { SectionLabel } from '../ui/section-label';

const services = [
  { img: 'https://images.unsplash.com/photo-1504307682559-09db125c2a44?q=80&w=2670&auto=format&fit=crop', title: 'Civil Construction', span: 'col-span-1 md:col-span-2 lg:col-span-2 row-span-2', desc: 'Complete residential civil construction with expert supervision and quality workmanship.' },
  { img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2671&auto=format&fit=crop', title: 'Design: Architecture, Structural & Interior', span: 'col-span-1 md:col-span-2 lg:col-span-2', desc: 'Comprehensive architectural, structural and interior design tailored to your vision.' },
  { img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop', title: 'Turnkey Construction', span: 'col-span-1 md:col-span-2 lg:col-span-2', desc: 'End-to-end design and construction solutions from planning to final handover.' },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-[#060D2C] relative">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" 
           style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/natural-paper.png')` }} />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionLabel light>Our Expertise</SectionLabel>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-light font-serif text-white mb-6"
          >
            Comprehensive <span className="italic">Solutions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg"
          >
            From conceptual interior design to structural execution, we offer specialized services to build your dream home.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`group overflow-hidden relative cursor-pointer min-h-[300px] bg-navy border border-gray-200 transition-all duration-500 ${svc.span}`}
            >
              <div className="absolute inset-0 opacity-100 transition-all duration-700">
                <Image 
                  src={svc.img} 
                  alt={svc.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-1000" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent transition-opacity duration-700"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 p-8 z-10 w-full">
                <h3 className="text-lg font-bold uppercase tracking-wider text-white mb-2">{svc.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed max-w-[90%]">{svc.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
