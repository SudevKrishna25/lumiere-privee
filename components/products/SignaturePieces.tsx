"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, Layers, Sliders, ChevronLeft, ChevronRight } from "lucide-react";
import { SIGNATURE_PIECES, SignaturePiece } from "@/lib/constants";
import PieceDetailModal from "./PieceDetailModal";
import MagneticButton from "@/components/animations/MagneticButton";

interface SignaturePiecesProps {
  onRequestAcquisition: (pieceName: string) => void;
}

export default function SignaturePieces({
  onRequestAcquisition,
}: SignaturePiecesProps) {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [activeModalPiece, setActiveModalPiece] = useState<SignaturePiece | null>(null);

  const currentPiece = SIGNATURE_PIECES[selectedIndex];

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev === 0 ? SIGNATURE_PIECES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev === SIGNATURE_PIECES.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="objects"
      className="relative py-28 sm:py-36 lg:py-44 bg-[#050A30] text-[#E8D9C4] overflow-hidden"
    >
      {/* Background radial gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#785D32]/10 blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#785D32]/35 pb-6 sm:pb-8 mb-10 sm:mb-16 gap-6 sm:gap-8">
          <div>
            <div className="flex flex-wrap items-center gap-y-2 gap-x-3 mb-3 sm:mb-4">
              <span className="font-mono text-xs text-[#D4AF37] tracking-[0.2em] sm:tracking-[0.3em] whitespace-nowrap">
                04 / SIGNATURE OBJECTS
              </span>
              <span className="w-8 sm:w-12 h-[1px] bg-[#785D32]" />
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] sm:tracking-[0.25em] text-[#E8D9C4]/70">
                Prototypes & Editions
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-6xl lg:text-7xl font-light text-[#E8D9C4] leading-[1.08] sm:leading-[1.05]">
              LES CHEFS-D&apos;ŒUVRE <br />
              <span className="italic font-normal text-gold-gradient">
                DU NOCTURNE
              </span>
            </h2>
          </div>

          {/* Piece Navigation Indicator */}
          <div className="flex items-center space-x-4">
            <span className="font-mono text-sm text-[#785D32]">
              0{selectedIndex + 1} / 0{SIGNATURE_PIECES.length}
            </span>
            <div className="flex items-center space-x-2">
              <button
                onClick={handlePrev}
                className="p-2.5 sm:p-3 rounded-full border border-[#785D32]/50 hover:border-[#D4AF37] hover:bg-[#785D32]/20 transition-colors text-[#E8D9C4]"
                aria-label="Previous signature piece"
                data-cursor="PREV"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-2.5 sm:p-3 rounded-full border border-[#785D32]/50 hover:border-[#D4AF37] hover:bg-[#785D32]/20 transition-colors text-[#E8D9C4]"
                aria-label="Next signature piece"
                data-cursor="NEXT"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Tab Selector Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 mb-10 sm:mb-16 border-b border-[#785D32]/30 pb-4">
          {SIGNATURE_PIECES.map((piece, idx) => (
            <button
              key={piece.id}
              onClick={() => setSelectedIndex(idx)}
              className={`text-left p-2.5 sm:p-4 transition-all relative ${
                selectedIndex === idx
                  ? "bg-[#3E160C]/40 border-b-2 border-[#D4AF37]"
                  : "hover:bg-[#E8D9C4]/5 border-b border-transparent"
              }`}
            >
              <span className="block font-mono text-[9px] sm:text-[10px] text-[#785D32] uppercase tracking-wider sm:tracking-widest mb-1 truncate">
                0{idx + 1} // {piece.edition.split("—")[1] || "LIMITED"}
              </span>
              <span
                className={`font-serif text-sm sm:text-xl block transition-colors truncate ${
                  selectedIndex === idx ? "text-[#D4AF37]" : "text-[#E8D9C4]"
                }`}
              >
                {piece.name}
              </span>
            </button>
          ))}
        </div>

        {/* Featured Showcase Stage */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPiece.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
          >
            {/* Left: Large Scale Hero Photography */}
            <div
              className="lg:col-span-7 relative group cursor-pointer"
              onClick={() => setActiveModalPiece(currentPiece)}
              data-cursor="VIEW PIECE"
            >
              <div className="relative aspect-[16/11] sm:aspect-[4/3] lg:aspect-[16/11] overflow-hidden border border-[#785D32]/50 bg-[#070B1A] shadow-[0_25px_60px_rgba(0,0,0,0.7)]">
                <Image
                  src={currentPiece.image}
                  alt={currentPiece.name}
                  fill
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050A30] via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                {/* Floating Edition Tag */}
                <div className="absolute top-3 sm:top-6 left-3 sm:left-6 px-3 sm:px-4 py-1 sm:py-1.5 bg-[#050A30]/85 backdrop-blur-md border border-[#785D32]/60">
                  <span className="font-mono text-[10px] sm:text-xs text-[#D4AF37] tracking-[0.15em] sm:tracking-[0.2em]">
                    {currentPiece.edition}
                  </span>
                </div>

                {/* Hover Cue */}
                <div className="absolute bottom-3 sm:bottom-6 right-3 sm:right-6 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#050A30]/80 backdrop-blur-md border border-[#785D32]/40 text-xs text-[#E8D9C4] flex items-center space-x-2 group-hover:border-[#D4AF37] transition-all">
                  <Sparkles className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#D4AF37]" />
                  <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider sm:tracking-widest">
                    Explore Specs
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Curatorial Details & Interaction */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6 sm:space-y-8">
              <div>
                <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#785D32] block mb-2">
                  LIMITED ARCHITECTURAL SCULPTURE
                </span>

                <h3 className="font-serif text-3xl sm:text-5xl text-[#E8D9C4] font-light mb-2">
                  {currentPiece.name}
                </h3>

                <p className="font-serif italic text-base sm:text-xl text-[#D4AF37] mb-4 sm:mb-6">
                  &ldquo;{currentPiece.subtitle}&rdquo;
                </p>

                <p className="text-xs sm:text-base text-[#E8D9C4]/80 font-light leading-relaxed mb-6 sm:mb-8">
                  {currentPiece.description}
                </p>

                {/* Materials & Scale Chips */}
                <div className="space-y-4 pt-4 sm:pt-6 border-t border-[#785D32]/30 mb-6 sm:mb-8">
                  <div>
                    <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.2em] text-[#785D32] block mb-2">
                      Materials & Architecture
                    </span>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {currentPiece.materials.map((mat) => (
                        <span
                          key={mat}
                          className="px-2.5 sm:px-3 py-1 bg-[#3E160C]/35 border border-[#785D32]/35 text-[11px] sm:text-xs text-[#E8D9C4]"
                        >
                          {mat}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-xs pt-2">
                    <div>
                      <span className="text-[9px] sm:text-[10px] font-mono uppercase text-[#785D32] block">
                        Dimensions
                      </span>
                      <span className="text-[#E8D9C4] font-mono text-[11px] sm:text-xs">{currentPiece.dimensions}</span>
                    </div>
                    <div>
                      <span className="text-[9px] sm:text-[10px] font-mono uppercase text-[#785D32] block">
                        Color Temp
                      </span>
                      <span className="text-[#D4AF37] font-mono text-[11px] sm:text-xs">{currentPiece.colorTemp}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <MagneticButton
                  onClick={() => setActiveModalPiece(currentPiece)}
                  cursorLabel="VIEW"
                  className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-[#E8D9C4] text-[#050A30] hover:bg-[#D4AF37] font-sans text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] font-semibold transition-all flex items-center justify-center space-x-2 shadow-lg"
                >
                  <span>Explore Piece</span>
                  <ArrowRight className="w-4 h-4" />
                </MagneticButton>

                <MagneticButton
                  onClick={() => onRequestAcquisition(currentPiece.name)}
                  cursorLabel="ALLOCATE"
                  className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-[#3E160C]/80 hover:bg-[#3E160C] text-[#E8D9C4] border border-[#785D32] font-sans text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] font-medium transition-all flex items-center justify-center space-x-2"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Request Allocation</span>
                </MagneticButton>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Piece Detail Modal */}
      <PieceDetailModal
        piece={activeModalPiece}
        onClose={() => setActiveModalPiece(null)}
        onRequestAcquisition={(pieceName) => {
          setActiveModalPiece(null);
          onRequestAcquisition(pieceName);
        }}
      />
    </section>
  );
}
