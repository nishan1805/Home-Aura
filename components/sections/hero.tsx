'use client';

import { motion } from 'motion/react';
import { MagneticButton } from '../magnetic-button';

function CinematicVideo() {
  return (
    <div className="w-full h-full relative rounded-none overflow-hidden border border-white/10 shadow-2xl bg-[#060D2C]">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover transition-opacity duration-1000"
        >
          {/* Using a reliable high-quality architectural construction & luxury lifestyle video source */}
          <source src="https://assets.mixkit.co/videos/preview/mixkit-modern-house-architecture-1402-large.mp4" type="video/mp4" />
        </video>
      </div>
      
      {/* Cinematic overlay grades - lightened to ensure video is visible */}
      <div className="absolute inset-0 bg-[#060D2C]/20 mix-blend-multiply pointer-events-none z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#060D2C]/60 via-transparent to-transparent pointer-events-none z-10"></div>
      
      {/* Architectural Blueprint Grain Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-20 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

      {/* Decorative architectural frame */}
      <div className="absolute inset-0 border border-gold/20 m-6 pointer-events-none rounded-none z-30 hidden lg:block"></div>
      
      {/* Live Phase Indicator */}
      <div className="absolute bottom-10 left-10 z-40">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-gold animate-pulse"></div>
            <span className="text-gold text-[10px] font-bold uppercase tracking-[0.4em]">Live Evolution</span>
          </div>
          <h3 className="text-white/90 text-sm font-serif italic tracking-wide">Conceptualization to Completion</h3>
        </div>
      </div>

      {/* Modern status corner */}
      <div className="absolute top-10 right-10 z-40 flex flex-col items-end">
        <span className="text-white/30 text-[9px] font-mono tracking-widest uppercase mb-1">Status: Rendering</span>
        <div className="w-8 h-[1px] bg-gold/50"></div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative lg:min-h-[85vh] min-h-[700px] flex flex-col justify-center overflow-hidden bg-navy pt-24 pb-20">
      <div className="absolute inset-0 opacity-5 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy-dark.png')]"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="w-full lg:w-1/2 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] mb-8 font-serif text-white">
              Building <span className="italic text-gold">Elegant</span> Spaces That Stand The Test Of Time.
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg text-white/60 max-w-xl mb-10 leading-relaxed font-light"
          >
            Premium turnkey construction and architectural solutions crafted with structural excellence, modern aesthetics, and timeless Indian craftsmanship.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <MagneticButton>
              <a href="#contact" className="inline-flex items-center justify-center px-10 py-5 bg-gold text-navy font-bold uppercase text-xs tracking-widest rounded-none hover:bg-white transition-colors duration-300">
                Book Consultation
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </a>
            </MagneticButton>
            <MagneticButton>
              <a href="#projects" className="inline-flex justify-center px-10 py-5 border border-white/20 hover:border-white text-white transition-all font-bold uppercase text-xs tracking-widest rounded-none">
                View Projects
              </a>
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-[45%] h-[300px] sm:h-[400px] lg:h-[550px] mt-12 lg:mt-0 relative"
        >
          <CinematicVideo />
        </motion.div>
      </div>
    </section>
  );
}
