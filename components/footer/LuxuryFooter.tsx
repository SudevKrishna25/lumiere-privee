"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUp, Sparkles, ShieldCheck, Mail, MapPin } from "lucide-react";
import { BRAND, NAV_LINKS } from "@/lib/constants";

interface LuxuryFooterProps {
  onRequestAccess: () => void;
  onOpenPrivacy?: () => void;
  onOpenTerms?: () => void;
}

export default function LuxuryFooter({
  onRequestAccess,
  onOpenPrivacy,
  onOpenTerms,
}: LuxuryFooterProps) {
  const [showLegalModal, setShowLegalModal] = useState<string | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="footer"
      className="relative pt-20 sm:pt-24 pb-20 sm:pb-12 bg-[#050A30] text-[#E8D9C4] border-t border-[#785D32]/35 overflow-hidden"
    >
      {/* Subtle animated light orb in footer corner */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-1/4 w-[450px] h-[450px] rounded-full bg-gradient-to-t from-[#D4AF37]/20 to-[#3E160C]/20 blur-[130px] pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Editorial Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-12 pb-12 sm:pb-16 border-b border-[#785D32]/25">
          {/* Brand Intro Column */}
          <div className="lg:col-span-5 space-y-4">
            <span className="font-serif text-2xl sm:text-3xl tracking-[0.2em] sm:tracking-[0.25em] text-[#E8D9C4] block font-light">
              {BRAND.name}
            </span>
            <p className="font-serif italic text-base text-[#D4AF37]">
              &ldquo;{BRAND.tagline}&rdquo;
            </p>
            <p className="text-xs text-[#E8D9C4]/70 font-light leading-relaxed max-w-sm">
              An invitation-only lighting atelier conceived at the intersection of
              sculpture, architecture, and silence. Handcrafted in limited
              editions and site-specific commissions in Paris.
            </p>

            <div className="pt-2 flex items-center space-x-2 text-xs font-mono text-[#785D32]">
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0" />
              <span className="text-[11px] sm:text-xs">8 Rue du Faubourg Saint-Honoré, Paris VIII</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#785D32]">
              THE ARCHIVE
            </h4>
            <ul className="space-y-2 text-xs">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#E8D9C4]/80 hover:text-[#D4AF37] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Private Concierge & Consultations */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#785D32]">
              PRIVATE SANCTUARY ACCESS
            </h4>
            <p className="text-xs text-[#E8D9C4]/70 font-light leading-relaxed">
              Appointments for private showroom viewings, photometric trials, and architectural commissions are by invitation or prior referral only.
            </p>

            <button
              onClick={onRequestAccess}
              className="w-full sm:w-auto px-6 py-3 bg-[#3E160C] hover:bg-[#785D32] text-[#E8D9C4] font-sans text-[11px] uppercase tracking-[0.18em] sm:tracking-[0.2em] font-medium border border-[#785D32]/50 transition-colors flex items-center justify-center space-x-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Request Private Access</span>
            </button>
          </div>
        </div>

        {/* Social & Return to Top */}
        <div className="py-6 sm:py-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#E8D9C4]/60 gap-4 border-b border-[#785D32]/20">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#785D32]">
              CHANNELS:
            </span>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D4AF37] transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D4AF37] transition-colors"
            >
              Pinterest
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D4AF37] transition-colors"
            >
              LinkedIn
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-xs uppercase tracking-widest text-[#E8D9C4] hover:text-[#D4AF37] transition-colors group"
          >
            <span>Return To Apex</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Monumental Wordmark Across Bottom */}
        <div className="pt-8 sm:pt-12 pb-4 sm:pb-6 text-center select-none overflow-hidden">
          <motion.div
            initial={{ opacity: 0.8 }}
            whileHover={{ opacity: 1 }}
            className="font-serif text-[13vw] sm:text-[12vw] font-light tracking-[0.05em] sm:tracking-[0.1em] text-[#E8D9C4]/10 hover:text-[#E8D9C4]/20 transition-all duration-700 leading-none whitespace-nowrap"
          >
            LUMIÈRE PRIVÉE
          </motion.div>
        </div>

        {/* Bottom Legal & Archival Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[10px] sm:text-[11px] font-mono text-[#785D32] gap-3 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} LUMIÈRE PRIVÉE. ALL RIGHTS RESERVED.
          </div>

          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 sm:gap-6">
            <button
              onClick={() => setShowLegalModal("privacy")}
              className="hover:text-[#E8D9C4] transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setShowLegalModal("terms")}
              className="hover:text-[#E8D9C4] transition-colors"
            >
              Archival Terms
            </button>
            <span className="hidden sm:inline">Paris VIII • Milano • New York</span>
          </div>
        </div>
      </div>

      {/* Simple Legal Modal for complete frontend compliance */}
      {showLegalModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-[#050A30]/90 backdrop-blur-md">
          <div className="bg-[#070B1A] border border-[#785D32] p-8 max-w-lg w-full text-left space-y-4 shadow-2xl">
            <h3 className="font-serif text-2xl text-[#E8D9C4]">
              {showLegalModal === "privacy" ? "Discretion & Privacy Notice" : "Archival Terms of Access"}
            </h3>
            <p className="text-xs text-[#E8D9C4]/80 leading-relaxed font-light">
              {showLegalModal === "privacy"
                ? "Lumière Privée operates strictly by private invitation. Any personal credentials submitted are treated with utmost confidentiality under European GDPR standards and will never be transferred to third-party marketing entities."
                : "All designs, sculptural prototypes, and photometric compositions are protected under international intellectual property and archival copyright. Reproduction of any fixture without express atelier authorisation is strictly prohibited."}
            </p>
            <button
              onClick={() => setShowLegalModal(null)}
              className="px-6 py-2 bg-[#3E160C] text-[#E8D9C4] text-xs uppercase tracking-widest hover:bg-[#785D32] transition-colors"
            >
              Acknowledge & Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}
