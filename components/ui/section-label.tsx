'use client';

import { motion } from 'motion/react';

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}

export function SectionLabel({ children, className = '', light = false }: SectionLabelProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`flex items-center justify-center gap-6 mb-8 ${className}`}
    >
      <div className={`h-[1px] w-12 ${light ? 'bg-white/20' : 'bg-gold/30'} hidden sm:block`} />
      <span className={`${light ? 'text-white/70' : 'text-gold'} text-[10px] font-bold uppercase tracking-[0.4em]`}>
        {children}
      </span>
      <div className={`h-[1px] w-12 ${light ? 'bg-white/20' : 'bg-gold/30'} hidden sm:block`} />
    </motion.div>
  );
}
