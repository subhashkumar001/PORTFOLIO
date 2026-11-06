import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { content } from '../data/content';

export default function Journey() {
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
    <section id="journey" className="relative w-full border-b border-border py-20 md:py-[140px]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-12">
        {/* Section Header */}
        <div className="font-mono text-[13px] uppercase tracking-mono text-secondary mb-4">
          {content.journey.sectionNum} / {content.journey.sectionTitle}
        </div>
        <hr className="rule-separator mb-12 md:mb-16" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeInVariants}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6"
        >
          {/* Left Column (3 cols): Heading */}
          <div className="lg:col-span-3">
            <h2 className="font-serif text-[36px] md:text-[56px] leading-[1.05] font-normal text-ink">
              {content.journey.heading}
            </h2>
          </div>

          {/* Right Column (8 cols): Vertical Timeline */}
          <div className="lg:col-span-8 lg:col-start-5">
            <div className="relative pl-8 md:pl-10">
              {/* Continuous 1px Vertical Line */}
              <div
                className="absolute left-[4px] top-2 bottom-2 w-[1px] bg-border"
                aria-hidden="true"
              />

              {/* Timeline Items */}
              <div className="space-y-12">
                {content.journey.items.map((item, index) => {
                  const isCurrent = index === content.journey.items.length - 1;

                  return (
                    <div key={index} className="relative">
                      {/* 10px Square Marker (Not a circle, accent for current) */}
                      <div
                        className={`absolute -left-[32px] md:-left-[40px] top-1.5 w-[9px] h-[9px] border ${
                          isCurrent
                            ? 'bg-accent border-accent'
                            : 'bg-bg border-secondary'
                        }`}
                        style={{ borderRadius: 0 }}
                        aria-hidden="true"
                      />

                      {/* Year / Month Mono */}
                      <div className="font-mono text-[13px] uppercase tracking-mono text-secondary mb-1">
                        {item.date}
                        {isCurrent && (
                          <span className="ml-2 text-accent font-medium">
                            · [CURRENT]
                          </span>
                        )}
                      </div>

                      {/* Title in Instrument Serif 24px */}
                      <h3 className="font-serif text-[24px] leading-snug font-normal text-ink mb-2">
                        {item.title}
                      </h3>

                      {/* Description in Body */}
                      <p className="font-sans text-[16px] leading-[1.65] text-secondary max-w-[56ch]">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

