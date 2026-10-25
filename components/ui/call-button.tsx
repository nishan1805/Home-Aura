'use client';

import { motion } from 'motion/react';
import { Phone } from 'lucide-react';

export function CallButton() {
  return (
    <motion.a
      href="tel:+916264555840"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(198, 163, 90, 0.45)' }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className="fixed bottom-[88px] right-6 md:bottom-[108px] md:right-8 z-[9999] flex items-center justify-center bg-gold text-navy rounded-full shadow-2xl w-[52px] h-[52px] md:w-[60px] md:h-[60px] hover:brightness-110 transition-all focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
      aria-label="Call Home Aura"
      title="Call Home Aura"
      id="call-floating-button"
    >
      <Phone size={22} className="md:w-6 md:h-6 stroke-[2.2]" />
    </motion.a>
  );
}
