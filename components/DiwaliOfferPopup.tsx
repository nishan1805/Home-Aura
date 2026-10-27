
"use client";

import { useEffect, useState } from "react";

export default function DiwaliOfferPopup() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  if (!isOpen) return null;

  const message = encodeURIComponent(
    "Hello Home Aura! I'm interested in your Diwali offer. Please share more details and help me book a consultation. Thank you."
  );

  const whatsappUrl = `https://api.whatsapp.com/send/?phone=916264555840&text=${message}&type=phone_number&app_absent=0`;

  return (
    <div
      className="diwali-overlay"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="diwali-popup"
        role="dialog"
        aria-modal="true"
        aria-label="Home Aura Diwali offer"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Entire poster opens WhatsApp */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="diwali-poster-link"
          aria-label="Book Home Aura's Diwali offer on WhatsApp"
        >
          <img
            className="diwali-poster"
            src="/images/diwali-offer.jpeg"
            alt="Home Aura Diwali offer for home design and construction consultancy"
          />
        </a>

        {/* Close button */}
        <button
          type="button"
          className="diwali-close"
          onClick={() => setIsOpen(false)}
          aria-label="Close Diwali offer"
        >
          ×
        </button>
      </div>

      <style jsx>{`
        .diwali-overlay {
          position: fixed;
          inset: 0;
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
          background: rgba(0, 0, 0, 0.72);
          backdrop-filter: blur(5px);
          animation: overlayFade 200ms ease-out;
        }

        .diwali-popup {
          position: relative;
          width: fit-content;
          max-width: 100%;
          max-height: 90vh;
          line-height: 0;
          animation: popupEnter 250ms ease-out;
        }

        .diwali-poster-link {
          display: block;
          line-height: 0;
          cursor: pointer;
          border-radius: 10px;
        }

        .diwali-poster {
          display: block;
          width: auto;
          height: auto;
          max-width: min(92vw, 760px);
          max-height: 88vh;
          object-fit: contain;
          border-radius: 10px;
        }

        .diwali-close {
          position: absolute;
          top: -14px;
          right: -14px;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          padding: 0;
          border: 1.5px solid white;
          border-radius: 50%;
          background: white;
          color: black;
          font-size: 25px;
          line-height: 1;
          font-weight: 400;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
          z-index: 10;
          transition: background 200ms ease, transform 200ms ease;
        }

        .diwali-close:hover {
          transform: scale(1.05);
        }

        .diwali-close:focus-visible,
        .diwali-poster-link:focus-visible {
          outline: 3px solid #facc15;
          outline-offset: 3px;
        }

        @keyframes overlayFade {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes popupEnter {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @media (max-width: 480px) {
          .diwali-overlay {
            padding: 10px;
          }

          .diwali-poster {
            max-width: 94vw;
            max-height: 85vh;
          }

          .diwali-close {
            top: -10px;
            right: -10px;
            width: 32px;
            height: 32px;
            font-size: 23px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .diwali-overlay,
          .diwali-popup {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
