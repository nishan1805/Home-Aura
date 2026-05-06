'use client';

import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import Image from 'next/image';
import { SectionLabel } from '../ui/section-label';

const testimonials = [
  {
    name: 'Anjali Desai',
    project: '3BHK Custom Interior - Bangalore',
    text: 'Home Aura transformed our bare apartment into a warm, inviting luxury space. Their transparency with pricing and materials was refreshing.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop',
    rating: 5
  },
  {
    name: 'Rahul Khanna',
    project: 'Villa Renovation - Pune',
    text: 'The architectural detail they brought to our ancestral home renovation was spectacular. They managed to keep the classic feel while modernizing it.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop',
    rating: 5
  },
  {
    name: 'Meera & Vikram',
    project: 'Premium Penthouse - Mumbai',
    text: 'Turnkey execution at its finest. We handed them the keys and they delivered a masterpiece exactly on the promised date.',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1000&auto=format&fit=crop',
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white text-navy relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <SectionLabel className="justify-start mb-6">Client Voices</SectionLabel>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-light font-serif text-navy"
            >
              Words of <span className="italic text-gold">Appreciation.</span>
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((test, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-beige/30 border border-navy/5 rounded-none p-8"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(test.rating)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-navy/80 font-light leading-relaxed mb-8 text-sm md:text-base">
                &ldquo;{test.text}&rdquo;
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="relative w-12 h-12 rounded-none overflow-hidden border border-gold/30">
                  <Image src={test.image} alt={test.name} fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy tracking-wide text-sm">{test.name}</h4>
                  <p className="text-navy/40 text-xs font-medium uppercase tracking-wider">{test.project}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
