'use client';

import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { SectionLabel } from '../ui/section-label';

const packages = [
  {
    name: 'Basic Package',
    desc: 'Essential interior design for modern homes.',
    price: 'Starting at ₹500/sq.ft',
    features: ['2D Space Planning', 'Standard Material Selection', 'Basic False Ceiling', 'Standard Lighting', 'Site Supervision (Weekly)'],
    highlighted: false,
  },
  {
    name: 'Premium Package',
    desc: 'Bespoke designs with high-end finishes.',
    price: 'Starting at ₹1200/sq.ft',
    features: ['3D VR Layout & Renders', 'Premium Plywood & Veneer', 'Designer False Ceiling', 'Custom Automation prep', 'Dedicated Project Manager'],
    highlighted: true,
  },
  {
    name: 'Luxury Package',
    desc: 'Ultra-luxurious turnkey solutions.',
    price: 'Custom Quotation',
    features: ['Imported Italian Marble', 'Smart Home Automation Integration', 'Global Furniture Sourcing', 'Gold/Brass Custom Inlays', 'Daily Site Supervision'],
    highlighted: false,
  }
];

export function Pricing() {
  return (
    <section id="packages" className="py-24 bg-navy relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionLabel light>Design Packages</SectionLabel>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-light font-serif text-white mb-6"
          >
            Transparent <span className="italic text-gold">Pricing.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative rounded-none p-8 flex flex-col ${
                pkg.highlighted 
                ? 'bg-[#030B35] text-white shadow-2xl shadow-black/20 border-2 border-gold scale-105 z-10' 
                : 'bg-white/5 text-white border border-white/10'
              }`}
            >
              {pkg.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold text-navy text-[10px] font-bold uppercase tracking-widest py-1.5 px-4 rounded-none">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-serif mb-2 text-white">{pkg.name}</h3>
                <p className={`text-sm ${pkg.highlighted ? 'text-white/60' : 'text-white/50'}`}>{pkg.desc}</p>
                <div className="mt-6 text-xl font-medium font-sans tracking-tight text-white">
                  {pkg.price}
                </div>
              </div>

              <div className="flex-grow">
                <ul className="space-y-4">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className={`mt-0.5 shrink-0 w-5 h-5 ${pkg.highlighted ? 'text-gold' : 'text-white/50'}`} />
                      <span className={`text-sm ${pkg.highlighted ? 'text-white/80' : 'text-white/70'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10">
                <button className={`w-full py-4 rounded-none font-bold uppercase text-xs tracking-widest transition-colors duration-300 ${
                  pkg.highlighted
                  ? 'bg-gold text-navy hover:bg-white'
                  : 'border border-white/20 text-white hover:bg-white hover:text-navy'
                }`}>
                  Get Detailed Quote
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
