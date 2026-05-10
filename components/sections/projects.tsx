'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionLabel } from '../ui/section-label';

const projects = [
  {
    id: 1,
    name: 'The Sapphire Residence',
    location: 'Raipur, CG',
    style: 'Modern Minimalist',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2670&auto=format&fit=crop',
    ],
    theme: 'light'
  },
  {
    id: 2,
    name: 'Aura Villa',
    location: 'Raipur, CG',
    style: 'Contemporary Luxury',
    images: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2574&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop',
    ],
    theme: 'dark'
  },
  {
    id: 3,
    name: 'Oasis Penthouse',
    location: 'Raipur, CG',
    style: 'Tropical Modern',
    images: [
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600585154526-990dced4ea0d?q=80&w=2670&auto=format&fit=crop'
    ],
    theme: 'dark'
  },
  {
    id: 4,
    name: 'Heritage Estate',
    location: 'Raipur, CG',
    style: 'Classic Indian',
    images: [
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600210491369-e753d80a41f3?q=80&w=2574&auto=format&fit=crop'
    ],
    theme: 'light'
  }
];

function ProjectCard({ project, index }: { project: any, index: number }) {
  const [imgIndex, setImgIndex] = useState(0);

  const nextImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImgIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImgIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7, delay: (index % 2) * 0.2 }}
      className={`group cursor-pointer relative rounded-none overflow-hidden ${project.theme === 'dark' ? 'bg-[#0A1235] text-white' : 'bg-white text-navy'} border ${project.theme === 'dark' ? 'border-white/5' : 'border-navy/5'} shadow-2xl`}
    >
      {/* Image Carousel */}
      <div className="relative h-[400px] lg:h-[500px] w-full overflow-hidden grayscale-[0.2] contrast-[1.1]">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={imgIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Image
              src={project.images[imgIndex]}
              alt={`${project.name} - image ${imgIndex + 1}`}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Navigation Arrows */}
        <div className="absolute inset-x-0 inset-y-1/2 flex justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
          <button 
            onClick={prevImg}
            className="w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-gold hover:text-navy hover:border-gold transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={nextImg}
            className="w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-gold hover:text-navy hover:border-gold transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
      
      <div className="p-8 lg:p-10 flex flex-col items-start relative z-10">
        <div className="flex w-full justify-between items-start mb-4">
          <h3 className="text-2xl font-serif">{project.name}</h3>
          <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-none border ${project.theme === 'dark' ? 'border-white/20 text-white/70' : 'border-navy/20 text-navy/70'}`}>
            {project.style}
          </span>
        </div>
        <p className={`text-sm tracking-widest uppercase font-sans ${project.theme === 'dark' ? 'text-gold' : 'text-navy/50'}`}>
          {project.location}
        </p>
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#F8F6F1] relative">
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none z-0" 
           style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/natural-paper.png')` }} />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <SectionLabel className="justify-start mb-6">Our Portfolio</SectionLabel>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-light font-serif text-navy"
            >
              Signatures of <span className="italic text-gold">Luxury.</span>
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-1 font-serif md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
