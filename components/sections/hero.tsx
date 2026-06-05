'use client';

import { motion } from 'framer-motion';
import { MagneticButton } from '../magnetic-button';
import { useEffect, useRef } from 'react';

function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;

      const playPromise = videoRef.current.play();

      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log('Autoplay blocked:', error);
        });
      }
    }
  }, []);

  return (
    <>
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-video.webm" type="video/webm" />
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55 z-10"></div>

      {/* Luxury Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70 z-10"></div>

      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] z-10"></div>
    </>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <BackgroundVideo />

      {/* Content */}
      <div className="relative z-20 w-full max-w-6xl mx-auto px-6 lg:px-10 text-center flex flex-col items-center">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="font-serif font-light leading-[0.95] tracking-tight text-white text-5xl sm:text-6xl md:text-7xl lg:text-[110px]"
        >
          We Create
          <span className="italic text-gold"> Powerful </span>
          Spaces.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-8 max-w-3xl text-lg md:text-xl leading-relaxed text-white/80 font-light"
        >
          Premium architectural design, luxury interiors,
          and turnkey construction crafted with timeless
          aesthetics and structural excellence.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.4,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="flex flex-col sm:flex-row gap-5 mt-12"
        >

          {/* Primary CTA */}
          <MagneticButton>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-10 py-5 bg-gold text-navy font-bold text-sm uppercase tracking-[0.2em] rounded-full hover:bg-white transition-all duration-300 shadow-2xl shadow-gold/20"
            >
              Book Consultation
            </a>
          </MagneticButton>

          {/* Secondary CTA */}
          <MagneticButton>
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-10 py-5 border border-white/20 bg-white/5 backdrop-blur-md text-white font-bold text-sm uppercase tracking-[0.2em] rounded-full hover:bg-white hover:text-navy transition-all duration-300"
            >
              View Projects
            </a>
          </MagneticButton>

        </motion.div>

      </div>
    </section>
  );
}
