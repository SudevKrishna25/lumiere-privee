"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { NAV_LINKS, BRAND } from "@/lib/constants";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onRequestAccess: () => void;
}

export default function MobileMenu({
  isOpen,
  onClose,
  onRequestAccess,
}: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[100] bg-[#050A30]/95 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-12 overflow-y-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[#785D32]/30 pb-6">
            <div className="flex flex-col">
              <span className="font-serif tracking-[0.25em] text-lg text-[#E8D9C4] font-semibold">
                {BRAND.name}
              </span>
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#785D32]">
                Paris • Nocturne Atelier
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-3 rounded-full border border-[#785D32]/40 text-[#E8D9C4] hover:bg-[#785D32]/20 hover:border-[#D4AF37] transition-all"
              aria-label="Close navigation menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Links */}
          <div className="my-auto py-10 flex flex-col space-y-6">
            {NAV_LINKS.map((link, idx) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={onClose}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + idx * 0.08, duration: 0.4 }}
                className="group flex items-center justify-between py-2 border-b border-[#E8D9C4]/10 hover:border-[#785D32]/50 transition-colors"
              >
                <div className="flex items-baseline space-x-4">
                  <span className="text-xs font-mono text-[#785D32]">0{idx + 1}</span>
                  <span className="font-serif text-3xl sm:text-4xl text-[#E8D9C4] group-hover:text-[#D4AF37] group-hover:translate-x-2 transition-all">
                    {link.label}
                  </span>
                </div>
                <ArrowRight className="w-5 h-5 text-[#785D32] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </motion.a>
            ))}
          </div>

          {/* Footer of Menu */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="pt-6 border-t border-[#785D32]/25 flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <div className="flex items-center space-x-2 text-xs text-[#E8D9C4]/70">
              <ShieldCheck className="w-4 h-4 text-[#785D32]" />
              <span>Invitation-Only Atelier • Private Archival Access</span>
            </div>

            <button
              onClick={() => {
                onClose();
                onRequestAccess();
              }}
              className="w-full sm:w-auto px-6 py-3 bg-[#3E160C] hover:bg-[#785D32] text-[#E8D9C4] text-xs uppercase tracking-[0.2em] font-medium border border-[#785D32]/50 transition-all flex items-center justify-center space-x-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Request Private Access</span>
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
