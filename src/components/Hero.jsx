import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { content } from '../data/content';

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  // Animation variants
  const lineVariants = {
    hidden: { y: shouldReduceMotion ? 0 : 32, opacity: shouldReduceMotion ? 1 : 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.55,
        ease: [0.16, 1, 0.3, 1],
        delay: shouldReduceMotion ? 0 : i * 0.08,
      },
    }),
  };

  return (
    <section className="relative w-full border-b border-border pt-12 md:pt-20 pb-16 md:pb-24">
      <div className="max-w-[1200px] mx-auto px-5 md:px-12">
        {/* Main 7/5 Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-center">
          {/* Left Column (7 cols): Text */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Top Mono Status line */}
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={lineVariants}
              className="flex items-center gap-2.5 mb-8"
            >
              <span
                className="w-2.5 h-2.5 rounded-full inline-block"
                style={{ backgroundColor: 'var(--color-status-dot)' }}
                aria-hidden="true"
              />
              <span className="font-mono text-[13px] uppercase tracking-mono text-secondary">
                {content.owner.statusDotText}
              </span>
            </motion.div>

            {/* Heading: Line 1 Name, Line 2 Tagline with one italic accent word */}
            <div className="overflow-hidden mb-6">
              <motion.h1
                custom={1}
                initial="hidden"
                animate="visible"
                variants={lineVariants}
                className="font-serif text-[48px] md:text-[88px] leading-[0.98] tracking-[-0.02em] font-normal text-ink"
              >
                {content.hero.titleLine1}
              </motion.h1>
            </div>

            <div className="overflow-hidden mb-8">
              <motion.p
                custom={2}
                initial="hidden"
                animate="visible"
                variants={lineVariants}
                className="font-serif text-[32px] md:text-[44px] leading-[1.08] text-ink font-normal"
              >
                {content.hero.tagline.prefix}
                <span className="italic text-accent font-normal">
                  {content.hero.tagline.italicWord}
                </span>
                {content.hero.tagline.suffix}
              </motion.p>
            </div>

            {/* One-line intro (max 48ch) */}
            <motion.p
              custom={3}
              initial="hidden"
              animate="visible"
              variants={lineVariants}
              className="font-sans text-[16px] md:text-[18px] leading-[1.65] text-secondary max-w-[48ch] mb-10"
            >
              {content.owner.oneLineIntro}
            </motion.p>

            {/* Actions: Primary button + text link */}
            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={lineVariants}
              className="flex flex-wrap items-center gap-6"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-3 bg-ink text-bg px-6 py-3.5 font-mono text-[13px] uppercase tracking-mono hover:bg-accent hover:text-bg transition-colors duration-200 cursor-pointer"
              >
                <span>{content.hero.ctaPrimary}</span>
                <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
              </a>

              <a
                href={content.owner.resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[13px] uppercase tracking-mono text-ink underline underline-offset-4 hover:text-accent hover:decoration-accent transition-colors duration-200"
              >
                {content.hero.ctaSecondary}
              </a>
            </motion.div>
          </div>

          {/* Right Column (5 cols): Portrait Frame or Monogram Block */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={lineVariants}
              className="relative w-full max-w-[340px] md:max-w-[380px]"
            >
              {/* Offset 12px Shadow Frame (outline rectangle behind, no blur) */}
              <div
                className="absolute inset-0 translate-x-3 translate-y-3 border border-border pointer-events-none"
                aria-hidden="true"
              />

              {/* Main Frame */}
              <div className="relative z-10 border border-border bg-surface aspect-[4/5] overflow-hidden flex items-center justify-center">
                {content.owner.photoUrl ? (
                  <img
                    src={content.owner.photoUrl}
                    alt={content.owner.fullName}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-8 select-none">
                    <span className="font-serif text-[120px] md:text-[160px] leading-none text-ink/75 font-normal">
                      {content.owner.initial || content.owner.fullName.charAt(0)}
                    </span>
                    <span className="mt-4 font-mono text-[11px] uppercase tracking-mono text-secondary border-t border-border pt-3 w-full text-center">
                      Notebook No. 01 · 2026
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom of Hero Meta Row */}
        <div className="mt-16 md:mt-24 pt-6 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="font-mono text-[13px] uppercase tracking-mono text-secondary">
            {content.owner.courseMeta}
          </div>
          <a
            href="#about"
            className="font-mono text-[13px] uppercase tracking-mono text-secondary hover:text-accent transition-colors duration-200 inline-flex items-center gap-1.5"
          >
            <span>Scroll</span>
            <ArrowDown size={14} strokeWidth={1.5} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

