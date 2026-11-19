"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, CheckCircle2, ShieldCheck, Lock, Copy, Check } from "lucide-react";
import { BRAND } from "@/lib/constants";

interface InvitationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialInterest?: string;
}

export default function InvitationModal({
  isOpen,
  onClose,
  initialInterest = "",
}: InvitationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    firmOrTitle: "",
    interest: initialInterest || "Private Collector Allocation",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setSubmitted(false);
      setCopiedCode(false);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (initialInterest) {
      setFormData((prev) => ({ ...prev, interest: initialInterest }));
    }
  }, [initialInterest]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  const handleCopyCode = () => {
    navigator.clipboard?.writeText("LP-PRIVEE-8824-PARIS");
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 sm:p-6 lg:p-12">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#050A30]/95 backdrop-blur-2xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-2xl bg-[#050A30] border border-[#785D32]/60 shadow-[0_30px_100px_rgba(0,0,0,0.9)] p-6 sm:p-10 max-h-[92vh] overflow-y-auto no-scrollbar"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full border border-[#785D32]/40 text-[#E8D9C4] hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors"
            aria-label="Close invitation modal"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div>
              {/* Header */}
              <div className="mb-6 border-b border-[#785D32]/30 pb-5">
                <div className="flex items-center space-x-2 text-[10px] font-mono uppercase tracking-[0.25em] text-[#785D32] mb-1">
                  <Lock className="w-3 h-3 text-[#D4AF37]" />
                  <span>CONFIDENTIAL PATRON ACCESS</span>
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#E8D9C4] font-light">
                  Request Private Invitation
                </h3>
                <p className="font-serif italic text-sm text-[#E8D9C4]/70 mt-1">
                  Access is curated for discerning collectors, architects, and private patrons.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#785D32] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Eleanor Vance"
                      className="w-full bg-[#3E160C]/20 border border-[#785D32]/40 px-3.5 py-2.5 text-base sm:text-sm text-[#E8D9C4] placeholder-[#785D32]/60 focus:border-[#D4AF37] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#785D32] mb-1">
                      Private Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. evance@sanctuary.com"
                      className="w-full bg-[#3E160C]/20 border border-[#785D32]/40 px-3.5 py-2.5 text-base sm:text-sm text-[#E8D9C4] placeholder-[#785D32]/60 focus:border-[#D4AF37] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#785D32] mb-1">
                      Architectural Firm or Title
                    </label>
                    <input
                      type="text"
                      value={formData.firmOrTitle}
                      onChange={(e) => setFormData({ ...formData, firmOrTitle: e.target.value })}
                      placeholder="e.g. Principal Architect / Private Patron"
                      className="w-full bg-[#3E160C]/20 border border-[#785D32]/40 px-3.5 py-2.5 text-base sm:text-sm text-[#E8D9C4] placeholder-[#785D32]/60 focus:border-[#D4AF37] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#785D32] mb-1">
                      Primary Interest
                    </label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full bg-[#050A30] border border-[#785D32]/40 px-3.5 py-2.5 text-base sm:text-sm text-[#E8D9C4] focus:border-[#D4AF37] focus:outline-none transition-colors"
                    >
                      <option>Private Collector Allocation</option>
                      <option>Signature Piece Acquisition</option>
                      <option>Bespoke Architectural Commission</option>
                      <option>Private Exhibition Preview</option>
                      <option>Archival Catalogue Access</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#785D32] mb-1">
                    Confidential Note or Specific Piece of Interest
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Mention specific lighting pieces (e.g. Éclat Noir, Orée, Silence d'Or) or architectural volumes..."
                    className="w-full bg-[#3E160C]/20 border border-[#785D32]/40 p-3 text-base sm:text-sm text-[#E8D9C4] placeholder-[#785D32]/60 focus:border-[#D4AF37] focus:outline-none transition-colors"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#3E160C] hover:bg-[#785D32] text-[#E8D9C4] font-sans text-xs uppercase tracking-[0.25em] font-medium border border-[#785D32]/60 transition-colors flex items-center justify-center space-x-2 shadow-lg"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Request Invitation Credentials</span>
                  </button>
                </div>
              </form>

              <div className="mt-4 flex items-center justify-center space-x-2 text-[10px] text-[#E8D9C4]/50">
                <ShieldCheck className="w-3.5 h-3.5 text-[#785D32]" />
                <span>Strict discretion guaranteed. No promotional newsletters.</span>
              </div>
            </div>
          ) : (
            <div className="py-8 text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#3E160C] border border-[#D4AF37] text-[#D4AF37] mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] block mb-1">
                  INVITATION DOSSIER RECORDED
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#E8D9C4]">
                  Welcome to The Private World
                </h3>
                <p className="font-serif italic text-base text-[#E8D9C4]/80 max-w-md mx-auto mt-2 leading-relaxed">
                  Thank you, {formData.name}. Your request for private access has been recorded.
                </p>
              </div>

              {/* Simulated Archival Pass */}
              <div className="p-6 bg-[#070B1A] border border-[#785D32]/60 max-w-md mx-auto text-left space-y-3">
                <div className="flex items-center justify-between border-b border-[#785D32]/30 pb-2">
                  <span className="font-serif text-sm tracking-widest text-[#E8D9C4]">
                    LUMIÈRE PRIVÉE
                  </span>
                  <span className="text-[9px] font-mono uppercase text-[#D4AF37]">
                    VIP CREDENTIAL
                  </span>
                </div>

                <div className="text-xs space-y-1 font-mono text-[#E8D9C4]/80">
                  <div className="flex justify-between">
                    <span className="text-[#785D32]">PATRON:</span>
                    <span>{formData.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#785D32]">FOCUS:</span>
                    <span>{formData.interest}</span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-[#785D32]/25">
                    <span className="text-[#785D32]">ACCESS CODE:</span>
                    <span className="text-[#D4AF37] font-bold">LP-PRIVEE-8824-PARIS</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyCode}
                  className="w-full mt-2 py-2 bg-[#3E160C]/60 hover:bg-[#3E160C] text-[10px] font-mono uppercase tracking-wider text-[#E8D9C4] border border-[#785D32]/40 flex items-center justify-center space-x-1.5 transition-colors"
                >
                  {copiedCode ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>Copied Access Token</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Archival Token</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-[#785D32] max-w-sm mx-auto">
                Our private concierge will review your credentials and prepare your bespoke digital catalogue.
              </p>

              <button
                onClick={onClose}
                className="px-8 py-3 bg-[#E8D9C4] text-[#050A30] text-xs font-semibold uppercase tracking-widest hover:bg-[#D4AF37] transition-colors"
              >
                Close Sanctuary
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
