import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import { content } from '../data/content';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Hide on scroll down, show on scroll up (transform only)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 72 && currentScrollY > lastScrollY && !mobileMenuOpen) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, mobileMenuOpen]);

  // Track active section on scroll
  useEffect(() => {
    const sectionIds = ['about', 'projects', 'skills', 'journey', 'contact'];
    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full h-[72px] transition-transform duration-300 ease-in-out border-b border-border bg-bg/85 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
        style={{
          backgroundColor: 'color-mix(in srgb, var(--color-bg) 85%, transparent)',
        }}
      >
        <div className="max-w-[1200px] h-full mx-auto px-5 md:px-12 flex items-center justify-between">
          {/* Left: Logo */}
          <a
            href="#"
            className="font-serif text-[26px] text-ink hover:text-accent transition-colors duration-200 tracking-tight"
          >
            {content.owner.firstName}
            <span className="text-accent">.</span>
          </a>

          {/* Desktop Nav Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center gap-8"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`font-mono text-[13px] uppercase tracking-mono transition-colors duration-200 relative ${
                    isActive
                      ? 'text-accent underline decoration-accent decoration-2 underline-offset-[6px]'
                      : 'text-ink hover:text-accent'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right: Theme Toggle & Resume Button */}
          <div className="flex items-center gap-4 md:gap-6">
            <ThemeToggle />

            {/* Resume Button */}
            <a
              href={content.owner.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center justify-center font-mono text-[13px] uppercase tracking-mono border border-ink text-ink bg-transparent px-[18px] py-[10px] hover:bg-ink hover:text-bg transition-colors duration-200 cursor-pointer"
            >
              Resume
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
              className="md:hidden text-ink hover:text-accent transition-colors duration-200 p-1 flex items-center justify-center bg-transparent border-0 cursor-pointer"
            >
              <Menu size={24} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Overlay Menu (Below 768px) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-bg flex flex-col justify-between px-6 py-8 md:hidden"
          >
            {/* Top Bar with Logo & Close button */}
            <div className="flex items-center justify-between border-b border-border pb-4">
              <span className="font-serif text-[26px] text-ink">
                {content.owner.firstName}
                <span className="text-accent">.</span>
              </span>
              <div className="flex items-center gap-4">
                <ThemeToggle />
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                  className="text-ink hover:text-accent transition-colors duration-200 p-1 flex items-center justify-center bg-transparent border-0 cursor-pointer"
                >
                  <X size={28} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Staggered Links */}
            <nav className="flex flex-col py-8" aria-label="Mobile Navigation">
              {NAV_ITEMS.map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * idx, duration: 0.25 }}
                  className="border-b border-border"
                >
                  <a
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-4 font-serif text-[44px] leading-tight text-ink hover:text-accent transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </motion.div>
              ))}
            </nav>

            {/* Mobile Footer Actions */}
            <div className="pt-4 border-t border-border flex flex-col gap-4">
              <a
                href={content.owner.resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center font-mono text-[13px] uppercase tracking-mono border border-ink text-ink bg-transparent py-3 hover:bg-ink hover:text-bg transition-colors duration-200"
              >
                Download Resume
              </a>
              <p className="font-mono text-[11px] text-secondary text-center uppercase tracking-mono">
                {content.owner.courseMeta}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

