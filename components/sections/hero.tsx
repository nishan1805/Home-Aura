'use client';

import Link from 'next/link';

export function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-video.webm" type="video/webm" />
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/35 z-10"></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/40 z-10"></div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 text-center">
        <h1 className="font-serif font-light leading-[0.95] tracking-tight text-white text-4xl sm:text-5xl md:text-6xl lg:text-[64px]">
          We Create{' '}
          <span className="text-[#D4AF37] italic">Powerful</span>
          <br />
          Spaces.
        </h1>

        <p className="mt-6 max-w-3xl mx-auto text-base md:text-lg leading-relaxed text-white/80 font-light">
          Premium architectural design, luxury interiors, and turnkey
          construction crafted with timeless aesthetics and structural
          excellence.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/916264555840?text=Hi%20Home%20Aura%2C%20I%20would%20like%20to%20book%20a%20consultation%20to%20discuss%20my%20construction%20and%20design%20requirements.%20Please%20share%20more%20details."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-7 py-3.5 bg-[#D4AF37] hover:bg-[#c49b27] text-black font-semibold text-xs uppercase tracking-[0.18em] rounded-xl transition-all duration-300"
          >
            Book Consultation
          </a>

          <Link
            href="#projects"
            className="inline-flex items-center justify-center px-7 py-3.5 border border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 font-semibold text-xs uppercase tracking-[0.18em] rounded-xl transition-all duration-300"
          >
            View Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
