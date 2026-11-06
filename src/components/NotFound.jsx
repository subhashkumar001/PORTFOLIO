import React from 'react';
import { ArrowLeft } from 'lucide-react';

export default function NotFound({ onGoHome }) {
  return (
    <div className="min-h-screen bg-bg text-ink flex flex-col justify-between p-6 md:p-16">
      {/* Top Meta */}
      <div className="flex justify-between items-center border-b border-border pb-4">
        <span className="font-mono text-[13px] uppercase tracking-mono text-secondary">
          ERROR / 404
        </span>
        <span className="font-mono text-[13px] uppercase tracking-mono text-secondary">
          PAGE NOT FOUND
        </span>
      </div>

      {/* Main Content */}
      <div className="max-w-[700px] my-auto py-12">
        <span className="font-mono text-[14px] uppercase tracking-mono text-accent mb-4 block">
          Missing Entry · Code 404
        </span>
        <h1 className="font-serif text-[48px] md:text-[80px] leading-[1.0] text-ink font-normal mb-6">
          This page does not exist in the ledger.
        </h1>
        <p className="font-sans text-[18px] text-secondary leading-relaxed mb-10 max-w-[50ch]">
          The URL you requested may have moved, been rewritten, or never committed. Return to the notebook index to continue reading.
        </p>

        <button
          type="button"
          onClick={onGoHome}
          className="inline-flex items-center gap-3 bg-ink text-bg px-6 py-3.5 font-mono text-[13px] uppercase tracking-mono hover:bg-accent hover:text-bg transition-colors duration-200 border-0 cursor-pointer"
          style={{ borderRadius: 0 }}
        >
          <ArrowLeft size={16} strokeWidth={2} aria-hidden="true" />
          <span>Return to Index</span>
        </button>
      </div>

      {/* Bottom rule */}
      <div className="border-t border-border pt-4 text-center sm:text-left">
        <span className="font-mono text-[12px] uppercase tracking-mono text-secondary">
          Engineers Notebook · Index Route
        </span>
      </div>
    </div>
  );
}

