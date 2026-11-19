"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, CheckCircle2, Sliders, ShieldAlert, Award } from "lucide-react";
import { SignaturePiece } from "@/lib/constants";

interface PieceDetailModalProps {
  piece: SignaturePiece | null;
  onClose: () => void;
  onRequestAcquisition: (pieceName: string) => void;
}

export default function PieceDetailModal({
  piece,
  onClose,
  onRequestAcquisition,
}: PieceDetailModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [customKelvin, setCustomKelvin] = useState<number>(2400);

  useEffect(() => {
    if (piece) {
      document.body.style.overflow = "hidden";
      setActiveImageIndex(0);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [piece]);

  if (!piece) return null;

  const currentImage = activeImageIndex === 0 ? piece.image : piece.secondaryImage;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[130] flex items-center justify-center p-4 sm:p-6 lg:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#050A30]/95 backdrop-blur-2xl"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-6xl max-h-[92vh] bg-[#050A30] border border-[#785D32]/60 shadow-[0_30px_100px_rgba(0,0,0,0.85)] overflow-y-auto no-scrollbar"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-30 p-2.5 rounded-full bg-[#050A30]/80 text-[#E8D9C4] hover:text-[#D4AF37] border border-[#785D32]/40 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Column: Visual Showcase & Interactive Color Temp Simulation */}
            <div className="lg:col-span-7 relative min-h-[420px] lg:min-h-[640px] flex flex-col justify-between p-6 sm:p-8 bg-[#070B1A]">
              {/* Main Photo with Dynamic Warmth Filter */}
              <div className="relative w-full h-[360px] sm:h-[480px] overflow-hidden border border-[#785D32]/35">
                <Image
                  src={currentImage}
                  alt={piece.name}
                  fill
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-center transition-all duration-700"
                  style={{
                    filter: `sepia(${(3000 - customKelvin) / 2500}) brightness(${
                      0.85 + (customKelvin - 2000) / 4000
                    })`,
                  }}
                />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-[#050A30]/85 backdrop-blur-md border border-[#785D32]/50 text-xs font-mono text-[#D4AF37]">
                  {piece.edition}
                </div>

                {/* View Angle Switcher */}
                <div className="absolute bottom-4 left-4 flex space-x-2">
                  <button
                    onClick={() => setActiveImageIndex(0)}
                    className={`px-3 py-1 text-[10px] font-mono uppercase tracking-wider transition-all ${
                      activeImageIndex === 0
                        ? "bg-[#D4AF37] text-[#050A30] font-semibold"
                        : "bg-[#050A30]/80 text-[#E8D9C4] border border-[#785D32]/40"
                    }`}
                  >
                    Primary View
                  </button>
                  <button
                    onClick={() => setActiveImageIndex(1)}
                    className={`px-3 py-1 text-[10px] font-mono uppercase tracking-wider transition-all ${
                      activeImageIndex === 1
                        ? "bg-[#D4AF37] text-[#050A30] font-semibold"
                        : "bg-[#050A30]/80 text-[#E8D9C4] border border-[#785D32]/40"
                    }`}
                  >
                    Atelier Angle
                  </button>
                </div>
              </div>

              {/* Interactive Tunable Light Simulator */}
              <div className="mt-6 p-4 bg-[#050A30] border border-[#785D32]/30">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="flex items-center space-x-1.5 text-[#E8D9C4]">
                    <Sliders className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span className="uppercase tracking-wider font-mono text-[11px]">
                      Interactive CCT Dimmer
                    </span>
                  </span>
                  <span className="font-mono text-xs text-[#D4AF37] font-semibold">
                    {customKelvin} Kelvin
                  </span>
                </div>
                <input
                  type="range"
                  min="2000"
                  max="3200"
                  step="50"
                  value={customKelvin}
                  onChange={(e) => setCustomKelvin(Number(e.target.value))}
                  className="w-full accent-[#D4AF37] h-1.5 bg-[#785D32]/40 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-[9px] font-mono text-[#785D32] mt-1">
                  <span>2000K Candlelight</span>
                  <span>2400K Sunset</span>
                  <span>3200K Architectural</span>
                </div>
              </div>
            </div>

            {/* Right Column: Piece Specifications & Curatorial Essay */}
            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6 bg-[#050A30]">
              <div>
                <div className="flex items-center space-x-2 text-[10px] uppercase font-mono tracking-[0.25em] text-[#785D32] mb-2">
                  <span>PROTOTYPE STUDIO ARCHIVE</span>
                  <span>•</span>
                  <span>PARIS</span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl text-[#E8D9C4] font-normal mb-2">
                  {piece.name}
                </h3>
                <p className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] mb-4">
                  {piece.subtitle}
                </p>

                <p className="font-serif italic text-base text-[#E8D9C4]/90 mb-4 border-l-2 border-[#785D32] pl-3">
                  &ldquo;{piece.poeticNote}&rdquo;
                </p>

                <p className="text-xs sm:text-sm text-[#E8D9C4]/75 font-light leading-relaxed mb-6">
                  {piece.description}
                </p>

                {/* Specifications Matrix */}
                <div className="space-y-3 pt-4 border-t border-[#785D32]/30 mb-6">
                  <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#785D32]">
                    ARCHITECTURAL SPECIFICATIONS
                  </h4>

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="p-2.5 bg-[#3E160C]/25 border border-[#785D32]/30">
                      <span className="text-[10px] uppercase tracking-wider text-[#785D32] block">
                        Dimensions
                      </span>
                      <span className="text-[#E8D9C4] font-mono text-[11px]">
                        {piece.dimensions}
                      </span>
                    </div>

                    <div className="p-2.5 bg-[#3E160C]/25 border border-[#785D32]/30">
                      <span className="text-[10px] uppercase tracking-wider text-[#785D32] block">
                        Luminous Output
                      </span>
                      <span className="text-[#E8D9C4] font-mono text-[11px]">
                        {piece.lumens}
                      </span>
                    </div>
                  </div>

                  {/* Materials list */}
                  <div className="p-3 bg-[#3E160C]/25 border border-[#785D32]/30">
                    <span className="text-[10px] uppercase tracking-wider text-[#785D32] block mb-1">
                      Noble Materials
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                      {piece.materials.map((mat) => (
                        <li
                          key={mat}
                          className="flex items-center space-x-1.5 text-xs text-[#E8D9C4]"
                        >
                          <span className="w-1 h-1 rounded-full bg-[#D4AF37]" />
                          <span>{mat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Exclusivity Notice */}
                <div className="flex items-center space-x-2 text-[11px] text-[#E8D9C4]/60">
                  <Award className="w-4 h-4 text-[#D4AF37]" />
                  <span>Numbered certificate stamped by the Parisian atelier.</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    onClose();
                    onRequestAcquisition(piece.name);
                  }}
                  className="flex-1 px-6 py-3.5 bg-[#3E160C] hover:bg-[#785D32] text-[#E8D9C4] font-sans text-xs uppercase tracking-[0.2em] font-medium border border-[#785D32]/60 transition-all flex items-center justify-center space-x-2 shadow-lg"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Request Acquisition Allocation</span>
                </button>

                <button
                  onClick={onClose}
                  className="px-5 py-3.5 bg-transparent hover:bg-[#E8D9C4]/5 text-[#E8D9C4]/70 hover:text-[#E8D9C4] font-sans text-xs uppercase tracking-[0.2em] border border-[#E8D9C4]/20 transition-all text-center"
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
