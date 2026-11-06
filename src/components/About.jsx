import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { content } from '../data/content';

export default function About() {
  const shouldReduceMotion = useReducedMotion();

  const fadeInVariants = {
    hidden: { y: shouldReduceMotion ? 0 : 16, opacity: shouldReduceMotion ? 1 : 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="about" className="relative w-full border-b border-border py-20 md:py-[140px]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-12">
        {/* Section Header */}
        <div className="font-mono text-[13px] uppercase tracking-mono text-secondary mb-4">
          {content.about.sectionNum} / {content.about.sectionTitle}
        </div>
        <hr className="rule-separator mb-12 md:mb-16" />

        {/* Asymmetric 12-col grid: Left 3 cols, Right 8 cols (starting col 5) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeInVariants}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6"
        >
          {/* Left Column (3 cols) */}
          <div className="lg:col-span-3">
            <h2 className="font-serif text-[36px] md:text-[56px] leading-[1.05] font-normal text-ink">
              First principles.
            </h2>
          </div>

          {/* Right Column (8 cols, offset by 1) */}
          <div className="lg:col-span-8 lg:col-start-5">
            {/* 2 Short paragraphs in own voice */}
            <div className="space-y-6 mb-12">
              {content.about.paragraphs.map((p, idx) => (
                <p
                  key={idx}
                  className="font-sans text-[16px] md:text-[18px] leading-[1.65] text-secondary max-w-[62ch]"
                >
                  {p}
                </p>
              ))}
            </div>

            {/* 3-item Quick Facts (2-column key/value layout separated by 1px rules) */}
            <div className="border-t border-border">
              {content.about.quickFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="grid grid-cols-1 sm:grid-cols-12 py-4 border-b border-border items-baseline gap-2 sm:gap-4"
                >
                  <span className="sm:col-span-4 font-mono text-[13px] uppercase tracking-mono text-secondary">
                    {fact.label}
                  </span>
                  <span className="sm:col-span-8 font-sans text-[16px] md:text-[18px] text-ink font-medium">
                    {fact.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

