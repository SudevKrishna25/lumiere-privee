"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Sparkles, Compass, CheckCircle } from "lucide-react";
import { CollectionCategory } from "@/lib/constants";

interface CategoryDetailModalProps {
  category: CollectionCategory | null;
  onClose: () => void;
  onRequestInquiry: (categoryTitle: string) => void;
}

export default function CategoryDetailModal({
  category,
  onClose,
  onRequestInquiry,
}: CategoryDetailModalProps) {
  useEffect(() => {
    if (category) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [category]);

  if (!category) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 lg:p-12">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#050A30]/90 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-5xl max-h-[90vh] bg-[#050A30] border border-[#785D32]/50 shadow-[0_25px_80px_rgba(0,0,0,0.8)] overflow-y-auto no-scrollbar"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-[#050A30]/80 text-[#E8D9C4] hover:text-[#D4AF37] border border-[#785D32]/40 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header & Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[550px]">
            {/* Left: Curated Visual */}
            <div className="lg:col-span-6 relative min-h-[350px] lg:min-h-full">
              <Image
                src={category.image}
                alt={category.frenchTitle}
                fill
                unoptimized
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050A30] via-[#050A30]/30 to-transparent lg:hidden" />
              <div className="absolute top-6 left-6 px-3 py-1 bg-[#050A30]/80 backdrop-blur-md border border-[#785D32]/40">
                <span className="font-mono text-xs text-[#D4AF37] tracking-widest">
                  CATALOGUE {category.number}
                </span>
              </div>
            </div>

            {/* Right: Curatorial Dossier */}
            <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between space-y-8 bg-[#050A30]">
              <div>
                <div className="flex items-center space-x-2 text-[10px] uppercase font-mono tracking-[0.25em] text-[#785D32] mb-3">
                  <span>ATELIER DOSSIER</span>
                  <span>•</span>
                  <span>ARCHIVAL CATEGORY</span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl text-[#E8D9C4] font-light mb-2">
                  {category.frenchTitle}
                </h3>
                <p className="text-sm font-sans uppercase tracking-[0.15em] text-[#D4AF37] mb-6">
                  {category.englishTitle}
                </p>

                <p className="font-serif italic text-base sm:text-lg text-[#E8D9C4]/90 mb-4 border-l-2 border-[#785D32] pl-4">
                  &ldquo;{category.subtitle}&rdquo;
                </p>

                <p className="text-sm text-[#E8D9C4]/75 font-light leading-relaxed mb-6">
                  {category.description}
                </p>

                {/* Architectural Application Note */}
                <div className="p-4 bg-[#3E160C]/30 border border-[#785D32]/30 mb-6">
                  <div className="flex items-center space-x-2 text-xs text-[#D4AF37] font-medium mb-1">
                    <Compass className="w-3.5 h-3.5" />
                    <span>Architectural Application</span>
                  </div>
                  <p className="text-xs text-[#E8D9C4]/80">
                    {category.architecturalNote}
                  </p>
                </div>

                {/* Featured Archetype */}
                <div className="flex items-center justify-between text-xs py-2 border-t border-b border-[#785D32]/25">
                  <span className="text-[#E8D9C4]/60">Representative Archetype:</span>
                  <span className="font-serif text-sm text-[#E8D9C4] font-medium">
                    {category.featuredPiece}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => {
                    onClose();
                    onRequestInquiry(category.frenchTitle);
                  }}
                  className="flex-1 px-6 py-3.5 bg-[#3E160C] hover:bg-[#785D32] text-[#E8D9C4] font-sans text-xs uppercase tracking-[0.2em] font-medium border border-[#785D32]/60 transition-all flex items-center justify-center space-x-2"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Request Atelier Dossier</span>
                </button>

                <button
                  onClick={onClose}
                  className="px-6 py-3.5 bg-transparent hover:bg-[#E8D9C4]/5 text-[#E8D9C4]/70 hover:text-[#E8D9C4] font-sans text-xs uppercase tracking-[0.2em] border border-[#E8D9C4]/20 transition-all text-center"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
