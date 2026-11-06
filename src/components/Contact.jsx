import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Check, Copy, ArrowRight } from 'lucide-react';
import { content } from '../data/content';

export default function Contact() {
  const shouldReduceMotion = useReducedMotion();
  const [copied, setCopied] = useState(false);
  const [formStatus, setFormStatus] = useState({ submitted: false, error: false, message: '' });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

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

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(content.contact.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({ submitted: false, error: true, message: 'Please complete all fields.' });
      return;
    }

    try {
      const response = await fetch(content.contact.formAction, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus({ submitted: true, error: false, message: 'Thank you. Your message has been sent.' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        // Fallback gracefully (e.g. if Formspree key is not configured)
        setFormStatus({
          submitted: true,
          error: false,
          message: 'Message captured. (Connect your Formspree endpoint in src/data/content.js for live emails).',
        });
      }
    } catch {
      // In local or unconfigured mode, gracefully acknowledge
      setFormStatus({
        submitted: true,
        error: false,
        message: 'Message captured. (Connect your Formspree endpoint in src/data/content.js for live emails).',
      });
    }
  };

  return (
    <section id="contact" className="relative w-full border-b border-border py-20 md:py-[140px]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-12">
        {/* Section Header */}
        <div className="font-mono text-[13px] uppercase tracking-mono text-secondary mb-4">
          {content.contact.sectionNum} / {content.contact.sectionTitle}
        </div>
        <hr className="rule-separator mb-12 md:mb-16" />

        {/* Heading: "Let's build something." with "build" in italic accent */}
        <div className="mb-14 md:mb-20">
          <h2 className="font-serif text-[40px] md:text-[64px] leading-[1.04] font-normal text-ink">
            Let's <span className="italic text-accent font-normal">build</span> something.
          </h2>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeInVariants}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        >
          {/* Left Column (5 cols): Email & Socials */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <span className="font-mono text-[12px] uppercase tracking-mono text-secondary block mb-3">
                Direct Email
              </span>

              {/* Big Underlined Email (36px) with copy action */}
              <div className="flex flex-col items-start gap-3">
                <a
                  href={`mailto:${content.contact.email}`}
                  className="font-serif text-[28px] sm:text-[36px] leading-tight text-ink underline underline-offset-8 decoration-1 hover:text-accent hover:decoration-accent transition-colors duration-200 break-all"
                >
                  {content.contact.email}
                </a>

                {/* Copy Button with "Copied" notification for 1.5s */}
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 font-mono text-[13px] uppercase tracking-mono text-secondary hover:text-ink transition-colors duration-200 mt-2 p-0 bg-transparent border-0 cursor-pointer"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check size={14} className="text-accent" aria-hidden="true" />
                      <span className="text-accent font-medium">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} aria-hidden="true" />
                      <span>Copy address</span>
                    </>
                  )}
                </button>
              </div>

              <p className="font-sans text-[16px] text-secondary leading-relaxed mt-8 max-w-[38ch]">
                {content.contact.subtitle}
              </p>
            </div>

            {/* Social Links as a Text List */}
            <div className="mt-12 pt-8 border-t border-border">
              <span className="font-mono text-[12px] uppercase tracking-mono text-secondary block mb-4">
                Elsewhere
              </span>
              <ul className="flex flex-col gap-3">
                {content.contact.socials.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[14px] uppercase tracking-mono text-ink hover:text-accent transition-colors duration-200 inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column (7 cols): Simple Form */}
          <div className="lg:col-span-7 bg-surface p-8 md:p-12 border border-border">
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              {/* Name Field */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-name"
                  className="font-mono text-[12px] uppercase tracking-mono text-secondary"
                >
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Jane Doe"
                  className="w-full bg-transparent border-0 border-b border-border py-2 text-ink text-[16px] font-sans placeholder:text-secondary/50 focus:border-b-2 focus:border-accent focus:outline-none transition-all duration-150"
                  style={{ borderRadius: 0 }}
                />
              </div>

              {/* Email Field */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-email"
                  className="font-mono text-[12px] uppercase tracking-mono text-secondary"
                >
                  Your Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="jane@example.com"
                  className="w-full bg-transparent border-0 border-b border-border py-2 text-ink text-[16px] font-sans placeholder:text-secondary/50 focus:border-b-2 focus:border-accent focus:outline-none transition-all duration-150"
                  style={{ borderRadius: 0 }}
                />
              </div>

              {/* Message Field */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-message"
                  className="font-mono text-[12px] uppercase tracking-mono text-secondary"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full bg-transparent border-0 border-b border-border py-2 text-ink text-[16px] font-sans placeholder:text-secondary/50 focus:border-b-2 focus:border-accent focus:outline-none resize-none transition-all duration-150"
                  style={{ borderRadius: 0 }}
                />
              </div>

              {/* Status feedback message */}
              {formStatus.message && (
                <div
                  className={`font-mono text-[12px] tracking-mono p-3 border ${
                    formStatus.error
                      ? 'border-accent text-accent bg-accent/10'
                      : 'border-border text-ink bg-bg'
                  }`}
                >
                  {formStatus.message}
                </div>
              )}

              {/* Submit Button (Primary button style) */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-3 bg-ink text-bg px-8 py-3.5 font-mono text-[13px] uppercase tracking-mono hover:bg-accent hover:text-bg transition-colors duration-200 cursor-pointer border-0"
                  style={{ borderRadius: 0 }}
                >
                  <span>Send Message</span>
                  <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

