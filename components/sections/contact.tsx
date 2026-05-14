'use client';

import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  MapPin,
  Phone,
  Mail,
  ChevronDown,
  CheckCircle2,
  Loader2,
} from 'lucide-react';
import { SectionLabel } from '../ui/section-label';
import emailjs from '@emailjs/browser';

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        'service_homeaura',
        'template_0lnxvip',
        formRef.current!,
        '1UYmyFpf1R8zl34zO'
      );

      formRef.current?.reset();
      setIsSubmitted(true);
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
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

          <div className="relative min-h-[600px]">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-white rounded-none p-8 lg:p-10 shadow-lg border border-gray-100 h-full"
                >
                  <h3 className="text-xl font-bold uppercase tracking-wider text-navy mb-6">
                    Send an Inquiry
                  </h3>

                  <form ref={formRef} className="space-y-5" onSubmit={sendEmail}>
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
                          className="w-full bg-beige/50 border border-navy/10 rounded-none px-4 py-3 text-sm text-navy focus:outline-none focus:border-gold/50 transition-colors appearance-none pr-10"
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
                        disabled={isSubmitting}
                        className="w-full bg-navy text-white hover:bg-navy/90 py-4 rounded-none font-bold uppercase text-xs tracking-widest transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 size={16} className="animate-spin" />
                            Sending...
                          </>
                        ) : (
                          'Request Consultation'
                        )}
                      </button>
                    </div>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  className="bg-white rounded-[32px] p-8 lg:p-12 shadow-xl border border-gold/10 h-full flex flex-col items-center justify-center text-center space-y-8"
                >
                  <div className="w-20 h-20 rounded-full bg-gold flex items-center justify-center shadow-lg shadow-gold/20">
                    <CheckCircle2 size={40} className="text-white" />
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-4xl font-serif text-navy tracking-tight">
                      Request Sent!
                    </h3>
                    <p className="text-navy/70 text-base leading-relaxed max-w-sm mx-auto">
                      Thank you for reaching out. Our team will contact you shortly using the details you provided.
                    </p>
                  </div>
                  
                  <button 
                    onClick={resetForm}
                    className="bg-navy text-white hover:bg-gold hover:text-navy px-10 py-4 rounded-xl font-bold uppercase text-xs tracking-widest transition-all duration-300 shadow-lg hover:shadow-gold/20"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
