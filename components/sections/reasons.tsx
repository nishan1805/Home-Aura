'use client';

import { motion } from 'motion/react';
import { Home, Layers, Clock, CheckCircle2, Users2, IndianRupee } from 'lucide-react';
import { SectionLabel } from '../ui/section-label';

const trustPoints = [
  { 
    icon: Home, 
    title: '50+ Projects Completed', 
    desc: 'Transforming residential and commercial spaces across the city.' 
  },
  { 
    icon: Layers, 
    title: 'Premium Material Quality', 
    desc: 'Sourced from trusted luxury brands for lasting beauty and durability.' 
  },
  { 
    icon: Clock, 
    title: 'On-Time Delivery', 
    desc: 'Strict planning and real-time tracking to ensure timelines are met.' 
  },
  { 
    icon: CheckCircle2, 
    title: 'End-to-End Execution', 
    desc: 'From design and materials to execution and final handover — we handle it all.' 
  },
  { 
    icon: Users2, 
    title: 'Expert Team', 
    desc: 'Civil engineers, architects and designers.' 
  },
  { 
    icon: IndianRupee, 
    title: 'Transparent Pricing', 
    desc: 'Clear estimates, no hidden costs, complete transparency at every step.' 
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-32 bg-[#060D2C] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" 
           style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/natural-paper.png')` }} />
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Heading Section */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <SectionLabel light>Why Clients Trust Us</SectionLabel>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-6xl font-light font-serif text-white leading-[1.1] mb-8"
          >
            Designed around trust.<br />Built for <span className="text-gold italic font-serif">excellence.</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-sm md:text-base tracking-wide leading-relaxed max-w-2xl mx-auto"
          >
            From concept to completion, we bring experience, precision, and a commitment to delivering spaces you&apos;ll love.
          </motion.p>
        </div>

        {/* trust grid - exactly as the image */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-white/5">
          {trustPoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.1 }}
              className="px-8 py-16 lg:py-24 border-r border-b border-white/5 flex flex-col items-center text-center group hover:bg-white/[0.02] transition-colors duration-700"
            >
              {/* icon in solid gold circle */}
              <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center text-navy mb-10 shadow-lg shadow-gold/20 group-hover:scale-110 transition-transform duration-700">
                <point.icon size={28} strokeWidth={1.5} />
              </div>

              <div className="space-y-4 max-w-xs">
                <h3 className="text-white font-serif text-xl tracking-wide">
                  {point.title}
                </h3>
                
                {/* Horizontal Gold Separator */}
                <div className="w-8 h-[1px] bg-gold/50 mx-auto transition-all duration-700 group-hover:w-12" />
                
                <p className="text-white/40 text-sm leading-relaxed font-sans font-light">
                  {point.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

  );
}
