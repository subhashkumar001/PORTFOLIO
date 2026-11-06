import React from 'react';
import { content } from '../data/content';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="relative overflow-hidden border-t border-footer-border pt-20 pb-8"
      style={{
        backgroundColor: 'var(--color-footer-bg)',
        color: 'var(--color-footer-text)',
      }}
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-12 relative z-10">
        {/* 3 Columns Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Left Column: Name & Copyright */}
          <div className="font-serif text-[18px] text-footer-text">
            {content.owner.fullName} © {content.footer.copyrightYear}
          </div>

          {/* Center Column: Mono Colophon */}
          <div className="font-mono text-[13px] uppercase tracking-mono text-[#9A9486] md:text-center">
            {content.footer.tagline}
          </div>

          {/* Right Column: Back to top */}
          <div className="md:text-right">
            <button
              type="button"
              onClick={scrollToTop}
              className="font-mono text-[13px] uppercase tracking-mono text-[#9A9486] hover:text-accent transition-colors duration-200 bg-transparent border-0 cursor-pointer p-0"
            >
              {content.footer.backToTop}
            </button>
          </div>
        </div>
      </div>

      {/* Oversized Wordmark (~18vw) cropped at the bottom */}
      <div
        className="w-full overflow-hidden mt-12 sm:mt-16 -mb-6 sm:-mb-10 select-none pointer-events-none flex justify-center"
        aria-hidden="true"
      >
        <span
          className="font-serif block leading-[0.75] tracking-tight uppercase whitespace-nowrap"
          style={{
            fontSize: '18vw',
            color: 'var(--color-footer-wordmark)',
            transform: 'translateY(15%)',
          }}
        >
          {content.owner.firstName}
        </span>
      </div>
    </footer>
  );
}

