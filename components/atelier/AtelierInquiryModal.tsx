"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, CheckCircle, ArrowRight, ShieldCheck } from "lucide-react";

interface AtelierInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledScope?: string;
}

export default function AtelierInquiryModal({
  isOpen,
  onClose,
  prefilledScope = "",
}: AtelierInquiryModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    firmOrRole: "",
    spaceType: "Private Estate / Residence",
    materialFocus: "Unlacquered Patinated Bronze",
    scope: prefilledScope || "Monumental Chandelier / Focal Installation",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (prefilledScope) {
      setFormData((prev) => ({ ...prev, scope: prefilledScope }));
    }
  }, [prefilledScope]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setIsSubmitted(false);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setIsSubmitted(true);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[140] flex items-center justify-center p-4 sm:p-6 lg:p-12">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#050A30]/90 backdrop-blur-xl"
        />

        {/* Modal Body */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-2xl bg-[#E8D9C4] text-[#3E160C] border border-[#785D32]/50 shadow-[0_30px_100px_rgba(0,0,0,0.85)] p-6 sm:p-10 max-h-[90vh] overflow-y-auto no-scrollbar"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full border border-[#785D32]/30 hover:border-[#3E160C] text-[#3E160C] transition-colors"
            aria-label="Close atelier modal"
          >
            <X className="w-5 h-5" />
          </button>

          {!isSubmitted ? (
            <div>
              <div className="mb-6 border-b border-[#785D32]/30 pb-4">
                <span className="font-mono text-xs text-[#785D32] uppercase tracking-[0.3em] block mb-1">
                  ATELIER DE PARIS • BESPOKE COMMISSIONS
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#3E160C] font-light">
                  Enter The Atelier
                </h3>
                <p className="font-serif italic text-sm text-[#785D32] mt-1">
                  Commissioning a one-of-a-kind sculptural lighting masterwork.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#3E160C] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Jean-Luc Moreau"
                      className="w-full bg-[#E8D9C4] border border-[#785D32]/50 px-3.5 py-2.5 text-base sm:text-sm text-[#3E160C] placeholder-[#785D32]/50 focus:border-[#3E160C] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#3E160C] mb-1">
                      Private Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. studio@architecture.com"
                      className="w-full bg-[#E8D9C4] border border-[#785D32]/50 px-3.5 py-2.5 text-base sm:text-sm text-[#3E160C] placeholder-[#785D32]/50 focus:border-[#3E160C] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#3E160C] mb-1">
                      Architecture Firm / Role
                    </label>
                    <input
                      type="text"
                      value={formData.firmOrRole}
                      onChange={(e) => setFormData({ ...formData, firmOrRole: e.target.value })}
                      placeholder="Architect / Private Collector"
                      className="w-full bg-[#E8D9C4] border border-[#785D32]/50 px-3.5 py-2.5 text-base sm:text-sm text-[#3E160C] placeholder-[#785D32]/50 focus:border-[#3E160C] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#3E160C] mb-1">
                      Space Typology
                    </label>
                    <select
                      value={formData.spaceType}
                      onChange={(e) => setFormData({ ...formData, spaceType: e.target.value })}
                      className="w-full bg-[#E8D9C4] border border-[#785D32]/50 px-3.5 py-2.5 text-base sm:text-sm text-[#3E160C] focus:border-[#3E160C] focus:outline-none transition-colors"
                    >
                      <option>Private Estate / Residence</option>
                      <option>Double-Height Salon / Gallery</option>
                      <option>Penthouse / Landmark Architecture</option>
                      <option>Historic French Salon / Château</option>
                      <option>High-End Hospitality Sanctuary</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#3E160C] mb-1">
                    Primary Material Affinity
                  </label>
                  <select
                    value={formData.materialFocus}
                    onChange={(e) => setFormData({ ...formData, materialFocus: e.target.value })}
                    className="w-full bg-[#E8D9C4] border border-[#785D32]/50 px-3.5 py-2.5 text-base sm:text-sm text-[#3E160C] focus:border-[#3E160C] focus:outline-none transition-colors"
                  >
                    <option>Unlacquered Patinated Bronze & Brass</option>
                    <option>Spanish Alabaster & Raw Travertine</option>
                    <option>Smoked Murano Glass & Bohemian Crystal</option>
                    <option>Aged 24K Hand-Applied Gold Leaf</option>
                    <option>Smoked French Walnut & Blackened Titanium</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#3E160C] mb-1">
                    Project Vision & Architectural Dimensions
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe ceiling heights, architectural style, lighting requirements, and desired ambience..."
                    className="w-full bg-[#E8D9C4] border border-[#785D32]/50 p-3 text-sm text-[#3E160C] placeholder-[#785D32]/50 focus:border-[#3E160C] focus:outline-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#3E160C] hover:bg-[#785D32] text-[#E8D9C4] font-sans text-xs uppercase tracking-[0.25em] font-medium transition-colors flex items-center justify-center space-x-2"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#E8D9C4]" />
                  <span>Transmit Commission Inquiry</span>
                </button>
              </form>
            </div>
          ) : (
            <div className="py-8 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#3E160C] text-[#E8D9C4] mx-auto flex items-center justify-center">
                <CheckCircle className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-3xl text-[#3E160C]">
                Commission Inquiry Transmitted
              </h3>
              <p className="text-sm text-[#785D32] max-w-md mx-auto leading-relaxed">
                Thank you, {formData.name}. Our Master Atelier Director in Paris has received your consultation dossier for {formData.spaceType}.
              </p>
              <div className="p-4 bg-[#3E160C]/10 border border-[#785D32]/30 max-w-sm mx-auto text-left text-xs font-mono text-[#3E160C] space-y-1">
                <div>ATELIER REFERENCE: LP-COMM-2026</div>
                <div>MATERIAL PALETTE: {formData.materialFocus}</div>
                <div>DISPATCH: Direct contact within 24 hours</div>
              </div>
              <button
                onClick={onClose}
                className="mt-6 px-8 py-3 bg-[#3E160C] text-[#E8D9C4] text-xs uppercase tracking-widest hover:bg-[#785D32] transition-colors"
              >
                Return to Atelier
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
