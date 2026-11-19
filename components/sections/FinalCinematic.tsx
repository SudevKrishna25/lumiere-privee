"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, Compass } from "lucide-react";
import { BRAND } from "@/lib/constants";
import MagneticButton from "@/components/animations/MagneticButton";

interface FinalCinematicProps {
  onExploreTop: () => void;
  onRequestAccess: () => void;
}

export default function FinalCinematic({
  onExploreTop,
  onRequestAccess,
}: FinalCinematicProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const y = useTransform(scrollYProgress, [0, 1], [-20, 30]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[95vh] sm:min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#050A30]"
    >
      {/* Background Architectural Photograph */}
      <motion.div style={{ scale, y }} className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=2200&q=90"
          alt="Majestic designer lighting installation in luxury architectural salon"
          fill
          sizes="100vw"
          className="object-cover object-center brightness-[0.55] contrast-[1.2]"
        />

        {/* Ambient atmospheric gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050A30] via-[#050A30]/50 to-[#050A30]/80 pointer-events-none" />
        <div className="absolute inset-0 bg-radial-gradient from-[#785D32]/15 via-[#050A30]/60 to-[#050A30] pointer-events-none" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#3E160C]/70 border border-[#785D32]/50 mb-6 backdrop-blur-md">
            <Sparkles className="w-3 h-3 text-[#D4AF37]" />
            <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.3em] uppercase text-[#E8D9C4] whitespace-nowrap">
              08 / THE FINAL ENCOUNTER
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-7xl md:text-8xl lg:text-9xl text-[#E8D9C4] font-light tracking-tight leading-[1.04] sm:leading-[0.96] mb-4 sm:mb-6">
            THE NIGHT <br />
            <span className="italic font-normal text-gold-gradient">
              BELONGS TO LIGHT.
            </span>
          </h2>

          <p className="font-serif italic text-base sm:text-3xl text-[#E8D9C4]/90 max-w-2xl mx-auto mb-8 sm:mb-10 font-light leading-relaxed">
            &ldquo;{BRAND.finalStatement}&rdquo;
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
            <MagneticButton
              onClick={onExploreTop}
              cursorLabel="DISCOVER"
              className="w-full sm:w-auto px-6 sm:px-9 py-3.5 sm:py-4 bg-[#E8D9C4] text-[#050A30] hover:bg-[#D4AF37] font-sans text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] font-semibold transition-all shadow-[0_0_40px_rgba(232,217,196,0.3)] flex items-center justify-center space-x-3"
            >
              <span>{BRAND.finalCTA}</span>
              <Compass className="w-4 h-4" />
            </MagneticButton>

            <MagneticButton
              onClick={onRequestAccess}
              cursorLabel="INVITATION"
              className="w-full sm:w-auto px-6 sm:px-9 py-3.5 sm:py-4 bg-[#3E160C]/90 hover:bg-[#3E160C] text-[#E8D9C4] border border-[#785D32] hover:border-[#D4AF37] font-sans text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] font-medium transition-all flex items-center justify-center space-x-3 backdrop-blur-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Request Private Access</span>
            </MagneticButton>
          </div>
        </motion.div>
      </div>

      {/* Graceful bottom edge to footer */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#050A30] pointer-events-none" />
    </section>
  );
}
