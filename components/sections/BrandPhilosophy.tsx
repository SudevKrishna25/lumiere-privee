"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, Layers, Shield, Eye } from "lucide-react";
import { BRAND } from "@/lib/constants";

export default function BrandPhilosophy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const parallaxY1 = useTransform(scrollYProgress, [0, 1], [-30, 50]);
  const parallaxY2 = useTransform(scrollYProgress, [0, 1], [50, -40]);
  const headlineX = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section
      id="house"
      ref={containerRef}
      className="relative py-28 sm:py-36 lg:py-44 bg-[#3E160C] text-[#E8D9C4] overflow-hidden"
    >
      {/* Background architectural ambiance */}
      <div className="absolute inset-0 bg-radial-gradient from-[#785D32]/15 via-[#3E160C] to-[#050A30]/60 pointer-events-none" />

      {/* Typographic Watermark */}
      <div className="absolute -top-12 left-0 right-0 overflow-hidden pointer-events-none opacity-[0.05] select-none">
        <motion.span
          style={{ x: headlineX }}
          className="font-serif text-[18vw] font-bold tracking-tight whitespace-nowrap text-[#E8D9C4]"
        >
          LUMIÈRE PRIVÉE • PARIS
        </motion.span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header Tag */}
        <div className="flex flex-wrap items-center gap-y-2 gap-x-3 mb-8 sm:mb-10 border-b border-[#785D32]/40 pb-4">
          <span className="font-mono text-xs text-[#D4AF37] tracking-[0.2em] sm:tracking-[0.3em] whitespace-nowrap">
            02 / THE HOUSE
          </span>
          <span className="w-8 sm:w-12 h-[1px] bg-[#785D32]" />
          <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#E8D9C4]/70">
            Chiaroscuro & Space
          </span>
        </div>

        {/* Oversized Monumental Headline */}
        <div className="max-w-5xl mb-12 sm:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[1.08] sm:leading-[1.04] text-[#E8D9C4]"
          >
            WE CREATE <br />
            <span className="italic font-normal text-gold-gradient">
              MORE THAN LIGHT.
            </span>
          </motion.h2>
        </div>

        {/* Asymmetric Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Dramatic Interior Architectural Chiaroscuro */}
          <motion.div
            style={{ y: parallaxY1 }}
            className="lg:col-span-7 relative group"
          >
            <div className="relative aspect-[4/5] sm:aspect-[16/11] lg:aspect-[4/5] overflow-hidden border border-[#785D32]/50 shadow-[0_20px_50px_rgba(5,10,48,0.7)]">
              <Image
                src="/images/house_editorial.jpg"
                alt="Dramatic chiaroscuro lighting across architectural stone interior"
                fill
                unoptimized
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3E160C]/85 via-transparent to-transparent pointer-events-none" />

              {/* Floating Architectural Annotation */}
              <div className="absolute bottom-6 left-6 right-6 p-4 sm:p-6 bg-[#050A30]/85 backdrop-blur-md border border-[#785D32]/40 flex items-center justify-between">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#D4AF37]">
                    ÉTUDES D'ÉCLAIRAGE • FIG. 01
                  </p>
                  <p className="font-serif text-sm sm:text-base text-[#E8D9C4] mt-0.5">
                    Volumetric shadows over fluted limestone surfaces
                  </p>
                </div>
                <div className="hidden sm:block text-right">
                  <span className="font-mono text-xs text-[#785D32]">2400 K</span>
                </div>
              </div>
            </div>

            {/* Brass accent outline corner */}
            <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-[#D4AF37] pointer-events-none" />
          </motion.div>

          {/* Right Column: Editorial Paragraphs & Second Offset Detail Image */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-10">
            {/* Editorial Copy */}
            <div className="space-y-6">
              {BRAND.housePhilosophy.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  className={`font-sans leading-relaxed ${
                    index === 0
                      ? "text-lg sm:text-xl font-serif italic text-[#E8D9C4] border-l-2 border-[#D4AF37] pl-6 py-1"
                      : "text-sm sm:text-base text-[#E8D9C4]/80 font-light"
                  }`}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Offset Detail Photograph */}
            <motion.div
              style={{ y: parallaxY2 }}
              className="relative aspect-video sm:aspect-[4/3] overflow-hidden border border-[#785D32]/40 shadow-xl self-end w-full sm:w-4/5"
            >
              <Image
                src="/images/house_detail.jpg"
                alt="Tactile patinated bronze metalwork and luminous warm reflections"
                fill
                unoptimized
                sizes="(max-width: 640px) 100vw, 350px"
                className="object-cover object-center hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-[#3E160C]/20 pointer-events-none" />
              <div className="absolute top-3 left-3 px-2 py-1 bg-[#050A30]/85 backdrop-blur-sm border border-[#785D32]/30 text-[9px] font-mono uppercase tracking-widest text-[#E8D9C4]">
                Atelier Salon • Chiaroscuro
              </div>
            </motion.div>

            {/* Three Foundational Pillars */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#785D32]/30">
              <div className="space-y-1">
                <span className="font-serif text-xl sm:text-2xl text-[#D4AF37] block">
                  I.
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#E8D9C4]">
                  Silence
                </span>
                <p className="text-[11px] text-[#E8D9C4]/60">Restraint above noise</p>
              </div>

              <div className="space-y-1">
                <span className="font-serif text-xl sm:text-2xl text-[#D4AF37] block">
                  II.
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#E8D9C4]">
                  Shadow
                </span>
                <p className="text-[11px] text-[#E8D9C4]/60">Sculpting the void</p>
              </div>

              <div className="space-y-1">
                <span className="font-serif text-xl sm:text-2xl text-[#D4AF37] block">
                  III.
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#E8D9C4]">
                  Identity
                </span>
                <p className="text-[11px] text-[#E8D9C4]/60">Soul of the space</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
