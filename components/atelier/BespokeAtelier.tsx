"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, Hammer, Layers, Sliders, ShieldCheck } from "lucide-react";
import { BRAND, ATELIER_MATERIALS, AtelierMaterial } from "@/lib/constants";
import AtelierInquiryModal from "./AtelierInquiryModal";
import MagneticButton from "@/components/animations/MagneticButton";

export default function BespokeAtelier() {
  const [selectedMaterial, setSelectedMaterial] = useState<AtelierMaterial>(ATELIER_MATERIALS[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      id="atelier"
      className="relative py-28 sm:py-36 lg:py-44 bg-[#E8D9C4] text-[#3E160C] overflow-hidden"
    >
      {/* Subtle architectural grain */}
      <div className="absolute inset-0 bg-grain opacity-50 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#785D32]/40 pb-6 sm:pb-8 mb-12 sm:mb-20 gap-6 sm:gap-8">
          <div>
            <div className="flex flex-wrap items-center gap-y-2 gap-x-3 mb-3 sm:mb-4">
              <span className="font-mono text-xs text-[#785D32] tracking-[0.2em] sm:tracking-[0.3em] whitespace-nowrap">
                06 / THE BESPOKE ATELIER
              </span>
              <span className="w-8 sm:w-12 h-[1px] bg-[#785D32]" />
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] sm:tracking-[0.25em] text-[#3E160C]/70">
                Material Laboratory & Commissions
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-6xl lg:text-7xl font-light text-[#3E160C] leading-[1.08] sm:leading-[1.05]">
              CREATED TO BELONG. <br />
              <span className="italic font-normal text-[#785D32]">
                DESIGNED TO LAST.
              </span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="font-serif italic text-base sm:text-xl text-[#3E160C] mb-2 sm:mb-3">
              &ldquo;{BRAND.atelierIntro}&rdquo;
            </p>
          </div>
        </div>

        {/* Interactive Material Laboratory Stage */}
        <div className="mb-12 sm:mb-20">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4 sm:mb-6">
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#785D32]">
              SELECT NOBLE MATERIAL TO INSPECT
            </span>
            <span className="text-[10px] sm:text-xs font-mono text-[#3E160C]">
              PARIS ARCHIVE // 05 MATIÈRES
            </span>
          </div>

          {/* Material Selector Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3 mb-6 sm:mb-10">
            {ATELIER_MATERIALS.map((mat) => (
              <button
                key={mat.id}
                onClick={() => setSelectedMaterial(mat)}
                className={`p-2.5 sm:p-4 text-left border transition-all last:col-span-2 sm:last:col-span-1 ${
                  selectedMaterial.id === mat.id
                    ? "bg-[#3E160C] text-[#E8D9C4] border-[#3E160C] shadow-lg"
                    : "bg-[#E8D9C4] text-[#3E160C] border-[#785D32]/40 hover:border-[#3E160C]"
                }`}
              >
                <span className="font-mono text-[9px] uppercase tracking-wider block opacity-70 mb-1">
                  {mat.origin.split(",")[0]}
                </span>
                <span className="font-serif text-sm sm:text-base block font-medium truncate">
                  {mat.name.split(" ")[0]} {mat.name.split(" ")[1] || ""}
                </span>
              </button>
            ))}
          </div>

          {/* Active Material Showcase Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedMaterial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-14 items-center p-4 sm:p-10 bg-[#3E160C]/5 border border-[#785D32]/35"
            >
              {/* Material Image */}
              <div className="lg:col-span-6 relative aspect-[16/10] sm:aspect-[4/3] overflow-hidden border border-[#785D32]/40 shadow-xl">
                <Image
                  src={selectedMaterial.image}
                  alt={selectedMaterial.name}
                  fill
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3E160C]/60 via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 px-2.5 sm:px-3 py-1 bg-[#E8D9C4]/95 text-[#3E160C] text-[9px] sm:text-[10px] font-mono uppercase tracking-widest border border-[#785D32]/40">
                  {selectedMaterial.origin}
                </div>
              </div>

              {/* Material Dossier */}
              <div className="lg:col-span-6 space-y-4 sm:space-y-5">
                <div>
                  <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#785D32] block mb-1">
                    {selectedMaterial.frenchName}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-4xl text-[#3E160C]">
                    {selectedMaterial.name}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[#3E160C]/85 font-light leading-relaxed">
                  {selectedMaterial.description}
                </p>

                <div className="p-3 sm:p-4 bg-[#E8D9C4] border border-[#785D32]/30 space-y-1.5 sm:space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="font-mono text-[#785D32] uppercase text-[10px] sm:text-xs">Acoustic & Optics:</span>
                    <span className="font-medium text-[#3E160C] text-[11px] sm:text-xs">{selectedMaterial.acousticNote}</span>
                  </div>
                  <div className="flex justify-between border-t border-[#785D32]/20 pt-1.5 sm:pt-2">
                    <span className="font-mono text-[#785D32] uppercase text-[10px] sm:text-xs">Color Temperature:</span>
                    <span className="font-serif font-medium text-[#785D32] text-[11px] sm:text-xs">{selectedMaterial.temperatures}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <MagneticButton
                    onClick={() => setIsModalOpen(true)}
                    cursorLabel="COMMISSION"
                    className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-[#3E160C] hover:bg-[#785D32] text-[#E8D9C4] font-sans text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] font-medium transition-all shadow-md flex items-center justify-center space-x-3"
                  >
                    <span>Enter The Atelier</span>
                    <ArrowRight className="w-4 h-4" />
                  </MagneticButton>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Atelier Commission Inquiry Modal */}
      <AtelierInquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        prefilledScope={`Material: ${selectedMaterial.name}`}
      />
    </section>
  );
}
