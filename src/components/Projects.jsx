import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import { content } from '../data/content';

export default function Projects() {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

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

  const handleMouseMove = (e) => {
    setCursorPos({
      x: e.clientX,
      y: e.clientY,
    });
  };

  return (
    <section id="projects" className="relative w-full border-b border-border py-20 md:py-[140px]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-12">
        {/* Section Header */}
        <div className="font-mono text-[13px] uppercase tracking-mono text-secondary mb-4">
          {content.projects.sectionNum} / {content.projects.sectionTitle}
        </div>
        <hr className="rule-separator mb-8 md:mb-12" />

        {/* Section Title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeInVariants}
          className="mb-12 md:mb-16"
        >
          <h2 className="font-serif text-[36px] md:text-[56px] leading-[1.05] font-normal text-ink">
            {content.projects.heading}
          </h2>
        </motion.div>

        {/* Numbered List of Wide Rows */}
        <div className="border-t border-border">
          {content.projects.items.map((project, idx) => {
            const isHovered = hoveredIndex === idx;
            const primaryLink = project.live || project.github;

            return (
              <div
                key={project.number}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                onMouseMove={handleMouseMove}
                className={`group relative border-b border-border transition-colors duration-200 ${
                  isHovered ? 'bg-surface' : 'bg-transparent'
                }`}
              >
                <div className="py-8 md:py-10 px-0 md:px-4">
                  {/* Desktop Layout */}
                  <div className="hidden lg:grid grid-cols-12 gap-6 items-baseline">
                    {/* Left: Number "01" */}
                    <div className="col-span-1">
                      <span className="font-mono text-[13px] text-secondary tracking-mono">
                        {project.number}
                      </span>
                    </div>

                    {/* Title & Description & What I learned */}
                    <div className="col-span-6 pr-4">
                      <a
                        href={primaryLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block"
                      >
                        <h3 className="font-serif text-[40px] leading-[1.1] font-normal text-ink group-hover:text-accent transition-colors duration-200">
                          {project.title}
                        </h3>
                      </a>
                      <p className="font-sans text-[16px] text-secondary leading-relaxed mt-2 max-w-[50ch]">
                        {project.description}
                      </p>
                      <p className="font-sans italic text-[14px] text-secondary/90 mt-3 border-l-2 border-border pl-3">
                        What I learned: {project.learned}
                      </p>
                    </div>

                    {/* Tech Tags */}
                    <div className="col-span-4 flex flex-wrap gap-2 items-center">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[12px] uppercase tracking-mono text-secondary bg-bg/60 border border-border px-2.5 py-1"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Right: Links & Arrow */}
                    <div className="col-span-1 flex items-center justify-end gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`GitHub repository for ${project.title}`}
                          className="text-secondary hover:text-accent transition-colors duration-200"
                        >
                          <Github size={18} strokeWidth={1.5} />
                        </a>
                      )}
                      <a
                        href={primaryLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title}`}
                        className="text-ink group-hover:text-accent transition-colors duration-200"
                      >
                        <ArrowUpRight
                          size={24}
                          strokeWidth={1.5}
                          className="transition-transform duration-200 group-hover:rotate-45"
                        />
                      </a>
                    </div>
                  </div>

                  {/* Mobile & Tablet Stacked Layout */}
                  <div className="lg:hidden flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[13px] text-secondary tracking-mono">
                        {project.number}
                      </span>
                      <div className="flex items-center gap-3">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`GitHub repository for ${project.title}`}
                            className="text-secondary hover:text-accent p-1"
                          >
                            <Github size={18} strokeWidth={1.5} />
                          </a>
                        )}
                        <a
                          href={primaryLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${project.title}`}
                          className="text-ink hover:text-accent p-1"
                        >
                          <ArrowUpRight size={22} strokeWidth={1.5} />
                        </a>
                      </div>
                    </div>

                    <a
                      href={primaryLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h3 className="font-serif text-[28px] md:text-[34px] leading-tight font-normal text-ink hover:text-accent transition-colors duration-200">
                        {project.title}
                      </h3>
                    </a>

                    <p className="font-sans text-[15px] text-secondary leading-relaxed">
                      {project.description}
                    </p>

                    <p className="font-sans italic text-[14px] text-secondary/90 border-l-2 border-border pl-3">
                      What I learned: {project.learned}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[11px] uppercase tracking-mono text-secondary bg-surface border border-border px-2 py-0.5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Floating Hover Preview Image (Desktop only, 240x160, bordered) */}
      {!shouldReduceMotion && hoveredIndex !== null && content.projects.items[hoveredIndex]?.previewImg && (
        <div
          className="hidden lg:block fixed pointer-events-none z-50 transition-opacity duration-200 border border-border bg-surface shadow-none"
          style={{
            width: '240px',
            height: '160px',
            left: `${cursorPos.x + 24}px`,
            top: `${cursorPos.y - 80}px`,
            opacity: 1,
            borderRadius: 0,
          }}
        >
          <img
            src={content.projects.items[hoveredIndex].previewImg}
            alt="Project Schematic Preview"
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </section>
  );
}

