"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { BRAND } from "@/lib/constants";

export default function ArtOfIllumination() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.15, 1.25]);
  const textY = useTransform(scrollYProgress, [0, 0.5, 1], [80, 0, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0.3, 1, 1, 0.4]);

  return (
    <section
      id="architecture"
      ref={containerRef}
      className="relative min-h-[110vh] w-full flex items-center justify-center overflow-hidden bg-[#050A30]"
    >
      {/* Background Architectural Editorial Installation */}
      <motion.div style={{ scale }} className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=2200&q=90"
          alt="Atmospheric architectural luxury interior bathed in dramatic twilight light"
          fill
          sizes="100vw"
          className="object-cover object-center brightness-[0.55] contrast-[1.2]"
        />

        {/* Ambient atmospheric transitions */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#E8D9C4] via-transparent to-[#050A30]/80 pointer-events-none" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#050A30]/40 to-[#050A30]/90 pointer-events-none" />
      </motion.div>

      {/* Atmospheric Typography Composition */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 text-center"
      >
        <div className="inline-flex items-center space-x-2 sm:space-x-3 mb-6 px-3.5 sm:px-4 py-1.5 bg-[#050A30]/80 backdrop-blur-md border border-[#785D32]/50">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
          <span className="font-mono text-[9px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[#E8D9C4] whitespace-nowrap">
            INSTALLATION // SECTION 05
          </span>
        </div>

        <h2 className="font-serif text-3xl sm:text-7xl md:text-8xl lg:text-9xl text-[#E8D9C4] font-light tracking-tight leading-[1.05] sm:leading-[0.98] mb-6 sm:mb-8">
          LIGHT IS THE <br />
          <span className="italic font-normal text-gold-gradient">
            INVISIBLE ARCHITECT.
          </span>
        </h2>

        <p className="font-serif italic text-base sm:text-3xl text-[#E8D9C4]/90 max-w-3xl mx-auto mb-8 sm:mb-10 font-light leading-relaxed">
          &ldquo;Before stone is placed, before glass reflects the morning, it is light that defines the volume of human emotion.&rdquo;
        </p>

        {/* Minimal architectural footnote */}
        <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-3 sm:gap-x-6 text-[9px] sm:text-[11px] font-mono uppercase tracking-[0.15em] sm:tracking-[0.25em] text-[#785D32]">
          <span>VOLUMETRIC EQUILIBRIUM</span>
          <span>•</span>
          <span>SHADOW ARCHITECTURE</span>
          <span className="hidden xs:inline">•</span>
          <span>NOCTURNE DIALOGUE</span>
        </div>
      </motion.div>

      {/* Bottom transition gradient to Pale section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#E8D9C4] pointer-events-none" />
    </section>
  );
}
