import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { content } from '../data/content';

export default function Skills() {
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
    <section id="skills" className="relative w-full border-b border-border py-20 md:py-[140px]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-12">
        {/* Section Header */}
        <div className="font-mono text-[13px] uppercase tracking-mono text-secondary mb-4">
          {content.skills.sectionNum} / {content.skills.sectionTitle}
        </div>
        <hr className="rule-separator mb-12 md:mb-16" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeInVariants}
        >
          {/* Main 3 Column Text Groups: Languages, Web, Tools */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-16 md:mb-24">
            {content.skills.categories.map((group) => (
              <div key={group.title} className="flex flex-col">
                {/* Mono Heading */}
                <h3 className="font-mono text-[13px] uppercase tracking-mono text-secondary pb-3 mb-2 border-b border-border">
                  {group.title}
                </h3>

                {/* Items on own line with 1px bottom rule */}
                <ul className="flex flex-col">
                  {group.items.map((skill) => (
                    <li
                      key={skill}
                      className="py-3.5 border-b border-border font-sans text-[18px] text-ink transition-transform transition-colors duration-200 hover:translate-x-[6px] hover:text-accent cursor-default flex items-center justify-between"
                    >
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Separate "Currently Learning" Row */}
          <div className="pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
              <span className="font-mono text-[13px] uppercase tracking-mono text-secondary shrink-0">
                Currently learning:
              </span>
              <div className="flex flex-wrap gap-2.5">
                {content.skills.currentlyLearning.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-[12px] uppercase tracking-mono text-ink border border-border bg-surface px-3 py-1.5 inline-block select-none"
                    style={{ borderRadius: 0 }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

