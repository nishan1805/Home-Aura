'use client';

import { motion } from 'motion/react';
import { Users, Map, PenTool, HardHat, Key } from 'lucide-react';

import { SectionLabel } from '../ui/section-label';

const steps = [
  { num: '01', icon: Users, title: 'Consultation', desc: 'Understanding your vision, lifestyle requirements, and design preferences in detail.' },
  { num: '02', icon: Map, title: 'Planning', desc: 'Space optimization, 2D layouts, and strategic architectural blueprints.' },
  { num: '03', icon: PenTool, title: 'Design', desc: '3D renderings, material selection, and rigorous budget alignment.' },
  { num: '04', icon: HardHat, title: 'Construction', desc: 'Structured on-site execution by highly skilled master craftsmen.' },
  { num: '05', icon: Key, title: 'Handover', desc: 'Final quality assurance, deep cleaning, and transferring the keys.' },
];

export function Process() {
  return (
    <section className="py-32 bg-[#060D2C] relative text-white overflow-hidden">
      {/* Architectural grid background */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-overlay border-t border-white/5" 
        style={{ 
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), 
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `, 
          backgroundSize: '60px 60px' 
        }} 
      />

      {/* Subtle glowing radial gradients */}
      <div className="absolute top-1/4 left-0 w-full h-[500px] bg-gold/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 z-0" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-20 relative z-10">
          <SectionLabel light>The Blueprint</SectionLabel>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-light font-serif text-white tracking-wider"
          >
            Execution <span className="italic text-gold">process.</span>
          </motion.h2>
        </div>

        <div className="relative mt-24">
          {/* Main Horizontal Timeline Connector (Desktop) */}
          <div className="hidden lg:block absolute top-[50%] left-[8%] right-[8%] h-[1px] bg-white/10 -translate-y-[50%] z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 relative z-10">
            {steps.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="relative flex flex-col lg:h-[560px]"
                >
                  {/* Process Card */}
                  <div className={`
                    w-full bg-[#060D2C]/60 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] 
                    border border-white/5 hover:border-gold/30 hover:-translate-y-2 transition-all duration-500 
                    rounded-none p-10 flex flex-col relative z-20 group lg:absolute 
                    ${isEven ? 'lg:top-0' : 'lg:bottom-0'} lg:h-[260px] my-4 lg:my-0
                  `}>
                    {/* Background glow effect on hover */}
                    <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    {/* Outlined text number */}
                    <div className="absolute top-6 right-6 text-6xl font-serif text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.08)] group-hover:[-webkit-text-stroke:1px_rgba(212,175,55,0.4)] transition-all duration-700 select-none">
                      {step.num}
                    </div>
                    
                    <step.icon className="text-gold mb-10 stroke-[1px] w-10 h-10 opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <h3 className="text-white font-serif tracking-widest uppercase text-lg font-bold mb-4">{step.title}</h3>
                    <p className="text-white/70 text-sm leading-relaxed font-sans">{step.desc}</p>
                  </div>

                  {/* Architecture Connecting Lines (only on large screens) */}
                  <div className="hidden lg:block relative w-full h-full pointer-events-none z-10">
                    {/* Vertical line connecting card to the main horizontal axis */}
                    <div 
                      className={`
                        absolute left-1/2 w-[1px] bg-white/10 transition-all duration-700 
                        group-hover:bg-gold/40 -translate-x-1/2
                        ${isEven ? 'top-[260px]' : 'bottom-[260px]'}
                      `}
                      style={{ height: '20px' }}
                    />
                    
                    {/* Center diamond joining point */}
                    <div 
                      className="
                        absolute left-1/2 top-1/2 w-[6px] h-[6px] rotate-45 border border-gold/40 
                        bg-[#060D2C] -translate-x-1/2 -translate-y-1/2 
                        group-hover:bg-gold group-hover:border-gold transition-all duration-500 
                        shadow-[0_0_10px_rgba(212,175,55,0)] group-hover:shadow-[0_0_12px_rgba(212,175,55,0.6)]
                      " 
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

