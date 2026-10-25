'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check } from 'lucide-react';
import { SectionLabel } from '../ui/section-label';

interface PackageItem {
  name: string;
  price?: string;
  oldPrice?: string;
  discountBadge?: string;
  highlighted?: boolean;
  badge?: string;
  cta?: string;
  features: string[];
  whatsappMessage: string;
}

const categories = [
  { id: 'construction', label: 'Construction Work' },
  { id: 'finish', label: 'Finish Work' },
  { id: 'design', label: 'Design Work' }
];

const packagesData: Record<string, PackageItem[]> = {
  construction: [
    {
      name: 'Basic Structure Package',
      features: [
        'Kay-2 TMT Steel',
        'Bangur / JK Lakshmi Cement',
        'Second Class Red Brick / Fly Ash Brick',
        'Basic Workmanship',
        '🎁 FREE: Floor Plan + Structural Drawing'
      ],
      whatsappMessage: 'Hi Home Aura, I would like to know more about your Construction Work — Basic Structure Package. Please share the detailed quotation and inclusions.'
    },
    {
      name: 'Standard Structure Package',
      highlighted: true,
      features: [
        'Kamdhenu / GK TMT / Goel TMT',
        'Ambuja / ACC / Nuvoco Cement',
        'Good Quality Red Brick',
        'Good Workmanship',
        '🎁 FREE: Complete Home Design (Architectural + Structural + Electrical + Plumbing + 3D Elevation)'
      ],
      whatsappMessage: 'Hi Home Aura, I would like to know more about your Construction Work — Standard Structure Package. Please share the detailed quotation and inclusions.'
    },
    {
      name: 'Premium Structure Package',
      features: [
        'Jindal / Tata TMT Steel',
        'Ultratech Cement',
        'First Class Red Brick',
        'Best Workmanship',
        '🎁 FREE: Complete Home Design + Roof Waterproofing'
      ],
      whatsappMessage: 'Hi Home Aura, I would like to know more about your Construction Work — Premium Structure Package. Please share the detailed quotation and inclusions.'
    }
  ],
  finish: [
    {
      name: 'Basic Finish Package',
      features: [
        'Kay-2 TMT Steel + Bangur / JK Lakshmi Cement',
        'Second Class Red Brick / Fly Ash Brick',
        'Basic Quality Vitrified Tiles',
        'Standard Electrical & Plumbing Fittings',
        'Economy Paint Finish with Basic Sanitary Setup',
        'Basic Workmanship'
      ],
      whatsappMessage: 'Hi Home Aura, I would like to know more about your Finish Work — Basic Finish Package. Please share the detailed quotation and inclusions.'
    },
    {
      name: 'Good Quality Finish Package',
      highlighted: true,
      features: [
        'Kamdhenu / GK TMT / Goel TMT Steel',
        'Ambuja / ACC / Nuvoco Cement',
        'Good Quality Vitrified Flooring',
        'Havells / Anchor Electrical Fittings',
        'Asian Paints Finish with Hindware / Finolex Plumbing Materials',
        'Good Workmanship'
      ],
      whatsappMessage: 'Hi Home Aura, I would like to know more about your Finish Work — Good Quality Finish Package. Please share the detailed quotation and inclusions.'
    },
    {
      name: 'Customized Home Package',
      features: [
        'Customized Material Selection',
        'Premium Finish Options',
        'Personalized Interior & Elevation Concepts',
        'Premium Branded Materials as per Client Choice',
        'Best Workmanship',
        'Fully Customized Planning & Execution According to Lifestyle and Budget'
      ],
      whatsappMessage: 'Hi Home Aura, I am interested in your Customized Home Package. I would like to discuss my requirements and receive a customized quotation.'
    }
  ],
  design: [
    {
      name: 'Complete Home Design Package',
      oldPrice: '₹20/sq. ft.',
      price: '₹16/sq. ft.',
      discountBadge: '20% OFF',
      highlighted: true,
      features: [
        'Floor Plan',
        'Structure Design',
        'MEP Design'
      ],
      whatsappMessage: 'Hi Home Aura, I am interested in the Complete Home Design Package at ₹16/sq. ft. Please share the detailed scope of work and next steps.'
    },
    {
      name: 'Interior Design Package',
      price: '₹25/sq. ft.',
      features: [
        'Interior 3D Designs',
        'Working Drawings'
      ],
      whatsappMessage: 'Hi Home Aura, I am interested in the Interior Design Package at ₹25/sq. ft. Please share the detailed scope of work and next steps.'
    },
    {
      name: 'Design + Complete Structural Consultancy',
      oldPrice: '₹80/sq. ft.',
      price: '₹60/sq. ft.',
      discountBadge: '25% OFF',
      features: [
        'Complete Design Support',
        'Complete Structural Guidance',
        'Site Consultation'
      ],
      whatsappMessage: 'Hi Home Aura, I am interested in the Design + Complete Structural Consultancy package at ₹60/sq. ft. Please share the detailed scope of work and next steps.'
    },
    {
      name: 'Custom Planning Package',
      price: 'Custom Quote',
      cta: 'Request Custom Quote',
      features: [
        'Architectural Planning from <span class="text-gold font-semibold">₹3/sq.ft.</span>',
        'Architecture + Structure from <span class="text-gold font-semibold">₹9/sq.ft.</span>'
      ],
      whatsappMessage: 'Hi Home Aura, I am interested in the Custom Planning Package. I would like to discuss my requirements and receive a customized quotation.'
    }
  ]
};

export function Pricing() {
  const [activeTab, setActiveTab] = useState('construction');

  return (
    <section id="packages" className="py-24 bg-[#060D2C] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionLabel light>Investment Plans</SectionLabel>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-light font-serif text-white mb-6"
          >
            Transparent <span className="italic text-gold">Pricing.</span>
          </motion.h2>
          <p className="text-white/50 text-sm md:text-base font-light max-w-lg mx-auto">
            Select a category to view detailed packages designed to fit your vision and budget.
          </p>
        </div>

        {/* Premium Segmented Toggle */}
        <div className="flex justify-center mb-16 px-4">
          <div className="bg-white/5 backdrop-blur-md p-1.5 rounded-full border border-white/10 flex items-center gap-1 w-fit max-w-full overflow-x-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`relative px-6 md:px-8 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 whitespace-nowrap ${
                  activeTab === cat.id ? 'text-navy' : 'text-white/60 hover:text-white'
                }`}
              >
                <span className="relative z-10">{cat.label}</span>
                {activeTab === cat.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gold rounded-full"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="relative min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className={`grid grid-cols-1 md:grid-cols-2 ${activeTab === 'design' ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-8 items-stretch`}
            >
              {packagesData[activeTab].map((pkg, i: number) => (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`relative p-8 flex flex-col transition-all duration-500 group ${
                    pkg.highlighted 
                    ? 'bg-navy/80 ring-2 ring-gold shadow-2xl shadow-gold/10 lg:scale-[1.02] z-10' 
                    : 'bg-white/[0.03] border border-white/10 hover:bg-white/[0.05] hover:border-white/20'
                  }`}
                >
                  {(pkg.highlighted || pkg.badge) && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gold text-navy text-[9px] font-bold uppercase tracking-[0.2em] py-1.5 px-5 rounded-none shadow-lg">
                      {pkg.badge || 'Most Popular'}
                    </div>
                  )}
                  
                  {pkg.price ? (
                    <div className="mb-6 text-center">
                      <h3 className="text-xl lg:text-2xl font-serif mb-3 text-white group-hover:text-gold transition-colors duration-300 min-h-[56px] flex items-center justify-center">
                        {pkg.name}
                      </h3>
                      <div className="flex flex-col items-center justify-center">
                        <div className="flex items-center gap-2.5 flex-wrap justify-center">
                          <span className="text-2xl lg:text-[26px] font-sans font-bold text-white tracking-tight">
                            {pkg.price}
                          </span>
                          {pkg.oldPrice && (
                            <span className="text-sm font-sans text-white/40 line-through decoration-white/40">
                              {pkg.oldPrice}
                            </span>
                          )}
                          {pkg.discountBadge && (
                            <span className="inline-block bg-gold/15 text-gold text-[10px] font-bold px-2 py-0.5 rounded-sm border border-gold/30 tracking-wider">
                              {pkg.discountBadge}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="mb-5 text-center">
                      <h3 className="text-2xl lg:text-[26px] font-serif text-white group-hover:text-gold transition-colors duration-300 leading-snug">
                        {pkg.name}
                      </h3>
                    </div>
                  )}

                  <div className={`flex-grow ${pkg.price ? 'pt-6 border-t border-white/10' : 'pt-1'}`}>
                    <ul className="space-y-4">
                      {pkg.features.map((feature: string, idx: number) => {
                        const isFree = feature.includes('🎁 FREE:');
                        const isConstruction = activeTab === 'construction';
                        const isLast = idx === pkg.features.length - 1;
                        
                        return (
                          <li key={idx} className={`flex items-start gap-4 ${isFree && isConstruction && isLast ? 'mt-8 pt-4 border-t border-white/5' : ''}`}>
                            <Check className={`mt-1 shrink-0 w-4 h-4 ${isFree && isConstruction && isLast ? 'text-gold' : 'text-gold/60'}`} />
                            <span 
                              className={`text-sm leading-relaxed ${
                                isFree && isConstruction && isLast 
                                    ? 'text-white font-bold' 
                                  : 'text-white font-semibold'
                              }`}
                              dangerouslySetInnerHTML={{ __html: feature.replace('🎁 FREE:', '<span class="inline-block bg-gold/10 text-gold text-[10px] font-bold px-2 py-0.5 mr-2 rounded-sm border border-gold/20">FREE</span>') }}
                            />
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  <div className="mt-8 pt-4">
                    <a 
                      href={`https://wa.me/916264555840?text=${encodeURIComponent(pkg.whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-4 rounded-none font-bold uppercase text-[10px] tracking-[0.3em] transition-all duration-500 inline-flex items-center justify-center text-center ${
                        pkg.highlighted
                        ? 'bg-gold text-navy hover:bg-white hover:text-navy shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]'
                        : 'border border-white/10 text-white hover:border-gold hover:text-gold bg-white/[0.02]'
                      }`}
                    >
                      {pkg.cta || 'Get Detailed Quote'}
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
      
      {/* Decorative architectural background element */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}
