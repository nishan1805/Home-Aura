'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface GoogleReview {
  id: string;
  authorName: string;
  authorPhotoUrl?: string;
  authorUri?: string;
  rating: number;
  relativeTime: string;
  publishTime?: string;
  text: string;
  googleMapsUri?: string;
}

interface PlacesApiResponse {
  success: boolean;
  configured: boolean;
  source?: string;
  displayName?: string;
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  reviews?: GoogleReview[];
  message?: string;
}

function GoogleGIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
        fill="#EA4335"
      />
    </svg>
  );
}

function ReviewAvatar({ name, photoUrl }: { name: string; photoUrl?: string }) {
  const [imgError, setImgError] = useState(false);

  const getInitials = (text: string) => {
    const parts = text.trim().split(/\s+/);
    if (parts.length >= 2) {
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }
    return (parts[0]?.substring(0, 2) || 'HA').toUpperCase();
  };

  if (photoUrl && !imgError) {
    return (
      <div className="relative w-11 h-11 rounded-full overflow-hidden border border-[#C6A35A]/30 shrink-0 bg-[#08163A]/5">
        <Image
          src={photoUrl}
          alt={name}
          fill
          sizes="44px"
          className="object-cover"
          referrerPolicy="no-referrer"
          onError={() => setImgError(true)}
        />
      </div>
    );
  }

  return (
    <div className="w-11 h-11 rounded-full bg-[#08163A] text-[#C6A35A] font-semibold text-xs flex items-center justify-center border border-[#C6A35A]/40 shrink-0">
      {getInitials(name)}
    </div>
  );
}

export function Testimonials() {
  const [data, setData] = useState<PlacesApiResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // Touch swipe tracking
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Responsive itemsPerPage calculator
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  // Fetch real Google Reviews from secure server API
  useEffect(() => {
    let isMounted = true;
    async function fetchReviews() {
      try {
        const res = await fetch('/api/google-reviews');
        if (!res.ok) throw new Error('Failed to load reviews');
        const json: PlacesApiResponse = await res.json();
        if (isMounted) {
          setData(json);
          setIsLoading(false);
        }
      } catch (err) {
        console.error('Error fetching Google Reviews:', err);
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }
    fetchReviews();
    return () => {
      isMounted = false;
    };
  }, []);

  const reviews = data?.reviews || [];
  const maxIndex = Math.max(0, reviews.length - itemsPerPage);

  // Ensure currentIndex does not exceed maxIndex on resize
  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  // Touch handlers for mobile/tablet swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 45;
    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }
  };

  const totalPages = Math.max(1, reviews.length - itemsPerPage + 1);

  return (
    <section id="testimonials" className="py-20 bg-[#F8F6F1] text-[#08163A] relative overflow-hidden">
      {/* Background paper texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
        style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/natural-paper.png')` }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Navigation Arrows positioned directly above cards */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div className="max-w-xl">
            {/* Google Reviews Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#C6A35A]/30 shadow-xs mb-3"
            >
              <GoogleGIcon className="w-3.5 h-3.5" />
              <span className="text-[11px] font-semibold tracking-wider uppercase text-[#08163A]">
                Google Reviews
              </span>
              <span className="w-1 h-1 rounded-full bg-[#C6A35A]" />
              <span className="text-[11px] text-[#08163A]/70 font-medium">Verified Feedback</span>
            </motion.div>

            {/* Reduced, Compact Serif Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-2xl sm:text-3xl font-serif text-[#08163A] tracking-tight"
            >
              Client <span className="italic text-[#C6A35A]">Reviews</span>
            </motion.h2>

            {/* Supporting Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-2 text-[#08163A]/70 text-sm sm:text-base leading-relaxed"
            >
              Real experiences from clients who trust Home Aura with their construction and design projects.
            </motion.p>
          </div>

          {/* Navigation Controls: Arrows aligned to the right, directly above cards */}
          {!isLoading && reviews.length > itemsPerPage && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2.5 self-end sm:self-end shrink-0"
            >
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                aria-label="Previous reviews"
                className="w-10 h-10 rounded-full border border-[#08163A]/15 bg-white flex items-center justify-center text-[#08163A] hover:bg-[#08163A] hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-all duration-200 shadow-xs cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C6A35A]/50"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex >= maxIndex}
                aria-label="Next reviews"
                className="w-10 h-10 rounded-full border border-[#08163A]/15 bg-white flex items-center justify-center text-[#08163A] hover:bg-[#08163A] hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-all duration-200 shadow-xs cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C6A35A]/50"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </motion.div>
          )}
        </div>

        {/* Carousel Content */}
        {isLoading ? (
          /* Loading Skeletons */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((n) => (
              <div key={n} className="bg-white rounded-2xl p-7 border border-gray-100 animate-pulse">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-gray-200" />
                    <div className="space-y-1.5">
                      <div className="w-24 h-4 bg-gray-200 rounded" />
                      <div className="w-16 h-3 bg-gray-100 rounded" />
                    </div>
                  </div>
                  <div className="w-6 h-6 bg-gray-200 rounded-full" />
                </div>
                <div className="w-20 h-3.5 bg-gray-200 rounded mb-4" />
                <div className="space-y-2">
                  <div className="w-full h-3 bg-gray-100 rounded" />
                  <div className="w-5/6 h-3 bg-gray-100 rounded" />
                  <div className="w-4/6 h-3 bg-gray-100 rounded" />
                </div>
              </div>
            ))}
          </div>
        ) : reviews.length === 0 ? (
          /* Fallback state if no reviews returned */
          <div className="bg-white rounded-2xl p-8 border border-[#C6A35A]/20 text-center max-w-md mx-auto shadow-sm">
            <GoogleGIcon className="w-8 h-8 mx-auto mb-3" />
            <h3 className="text-lg font-serif font-medium text-[#08163A] mb-1.5">Client Reviews</h3>
            <p className="text-[#08163A]/70 text-sm">
              Real experiences from clients who trust Home Aura with their construction and design projects.
            </p>
          </div>
        ) : (
          /* Real Google Reviews Carousel */
          <div
            className="relative"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Viewport container with overflow hidden */}
            <div className="overflow-hidden py-1">
              <motion.div
                className="flex transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
                }}
              >
                {reviews.map((rev) => (
                  <div
                    key={rev.id}
                    className="shrink-0 px-3"
                    style={{ width: `${100 / itemsPerPage}%` }}
                  >
                    {/* Minimalist card: ends directly after client review text */}
                    <div className="bg-white border border-[#C6A35A]/20 hover:border-[#C6A35A]/40 transition-all duration-300 rounded-2xl p-6 sm:p-7 h-full flex flex-col shadow-[0_4px_24px_rgba(8,22,58,0.04)] hover:shadow-[0_8px_30px_rgba(8,22,58,0.08)]">
                      {/* Top bar with User + Google Icon */}
                      <div className="flex items-start justify-between gap-3 mb-4">
                        <div className="flex items-center gap-3 min-w-0">
                          <ReviewAvatar name={rev.authorName} photoUrl={rev.authorPhotoUrl} />
                          <div className="min-w-0">
                            <h4 className="font-semibold text-[#08163A] text-sm sm:text-base truncate" title={rev.authorName}>
                              {rev.authorName}
                            </h4>
                            <p className="text-xs text-[#08163A]/50 font-medium">
                              {rev.relativeTime}
                            </p>
                          </div>
                        </div>
                        
                        {/* Google G icon badge */}
                        <div className="p-1.5 rounded-full bg-[#F8F6F1] border border-[#08163A]/5 shrink-0" title="Verified on Google">
                          <GoogleGIcon className="w-3.5 h-3.5" />
                        </div>
                      </div>

                      {/* 5-Star Rating */}
                      <div className="flex items-center gap-1 mb-3.5">
                        {[...Array(5)].map((_, idx) => (
                          <Star
                            key={idx}
                            className="w-4 h-4 fill-[#C6A35A] text-[#C6A35A]"
                          />
                        ))}
                        <span className="text-xs font-semibold text-[#08163A]/70 ml-1.5">
                          5.0
                        </span>
                      </div>

                      {/* Review text - card ends immediately here */}
                      <p className="text-[#08163A]/80 text-sm leading-relaxed font-light">
                        &ldquo;{rev.text}&rdquo;
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Centered Pagination Indicators below the cards (no divider line) */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-8">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    aria-label={`Go to review slide ${i + 1}`}
                    className={`h-2 transition-all duration-300 rounded-full cursor-pointer focus:outline-none ${
                      currentIndex === i
                        ? 'w-7 bg-[#08163A]'
                        : 'w-2 bg-[#08163A]/25 hover:bg-[#08163A]/45'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
}
