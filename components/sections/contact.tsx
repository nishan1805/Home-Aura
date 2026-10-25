'use client';

import { useRef, useState } from 'react';
import { motion } from 'motion/react';
import {
  MapPin,
  Phone,
  Mail,
  ChevronDown,
  MessageSquare,
} from 'lucide-react';
import { SectionLabel } from '../ui/section-label';

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isOpeningWhatsApp, setIsOpeningWhatsApp] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const fullName = (formData.get('full_name') as string)?.trim() || '';
    const phone = (formData.get('phone') as string)?.trim() || '';
    const email = (formData.get('email') as string)?.trim() || '';
    const projectType = (formData.get('project_type') as string)?.trim() || '';
    const message = (formData.get('message') as string)?.trim() || '';

    if (!fullName || !phone || !email || !message) {
      return;
    }

    setIsOpeningWhatsApp(true);

    const whatsappMessage = `Hi Home Aura, I would like to request a consultation. Here are my details:

Full Name: ${fullName}
Phone: ${phone}
Email: ${email}
Project Type: ${projectType}
Project Details: ${message}

Please review my requirements and get back to me. Thank you!`;

    const whatsappUrl = `https://wa.me/916264555840?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    // Reset indicator after brief delay
    setTimeout(() => {
      setIsOpeningWhatsApp(false);
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 bg-[#F8F6F1] text-navy relative">
      <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-[0.05] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="flex flex-col justify-center">
            <SectionLabel className="justify-start mb-6">Get In Touch</SectionLabel>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-light font-serif mb-6 leading-tight text-navy"
            >
              Ready to start your <span className="italic text-gold">project?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-navy/60 text-lg leading-relaxed mb-10 max-w-lg"
            >
              Book a free consultation with our expert architects and structural engineers.
            </motion.p>

            <div className="space-y-6">
              {[
                { icon: MapPin, text: 'Near DPS School, Raj Vatika, Semariya-2, Chhattisgarh 493111' },
                { icon: Phone, text: '+91 62645 55840 / +91 97431 00176' },
                { icon: Mail, text: 'homeauradesign82@gmail.com' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-none bg-white border border-navy/10 flex items-center justify-center shrink-0 shadow-sm">
                    <item.icon size={18} className="text-gold" />
                  </div>
                  <span className="text-navy/80 text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-none p-8 lg:p-10 shadow-lg border border-gray-100 h-full flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold uppercase tracking-wider text-navy mb-6">
                  Send an Inquiry
                </h3>

                <form ref={formRef} className="space-y-5" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-navy/60">
                        Full Name
                      </label>
                      <input
                        name="full_name"
                        type="text"
                        required
                        className="w-full bg-beige/50 border border-navy/10 rounded-none px-4 py-3 text-sm text-navy focus:outline-none focus:border-gold/50 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-navy/60">
                        Phone
                      </label>
                      <input
                        name="phone"
                        type="tel"
                        required
                        className="w-full bg-beige/50 border border-navy/10 rounded-none px-4 py-3 text-sm text-navy focus:outline-none focus:border-gold/50 transition-colors"
                        placeholder="+91"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-navy/60">
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      className="w-full bg-beige/50 border border-navy/10 rounded-none px-4 py-3 text-sm text-navy focus:outline-none focus:border-gold/50 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-navy/60">
                      Project Type
                    </label>
                    <div className="relative">
                      <select
                        name="project_type"
                        defaultValue="Civil Construction"
                        className="w-full bg-beige/50 border border-navy/10 rounded-none px-4 py-3 text-sm text-navy focus:outline-none focus:border-gold/50 transition-colors appearance-none pr-10 cursor-pointer"
                      >
                        <option>Civil Construction</option>
                        <option>Design (Architectural, Interior and Structural)</option>
                        <option>Renovation</option>
                        <option>Other</option>
                      </select>
                      <ChevronDown
                        size={16}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-navy/40 pointer-events-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-navy/60">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      className="w-full bg-beige/50 border border-navy/10 rounded-none px-4 py-3 text-sm text-navy focus:outline-none focus:border-gold/50 transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isOpeningWhatsApp}
                      className="w-full bg-navy text-white hover:bg-gold hover:text-navy py-4 rounded-none font-bold uppercase text-xs tracking-widest transition-all duration-300 flex items-center justify-center gap-2 shadow-md cursor-pointer disabled:opacity-80"
                    >
                      {isOpeningWhatsApp ? (
                        <>
                          <MessageSquare size={16} className="animate-pulse text-gold" />
                          <span>Opening WhatsApp...</span>
                        </>
                      ) : (
                        <>
                          <MessageSquare size={16} />
                          <span>Request Consultation</span>
                        </>
                      )}
                    </button>
                    <p className="text-center text-[11px] text-navy/50 mt-2 font-medium">
                      Submitting will open WhatsApp with your details prefilled to start a conversation directly.
                    </p>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
