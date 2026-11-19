"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Compass, Sparkles, ArrowDown, Shield } from "lucide-react";
import { BRAND } from "@/lib/constants";
import MagneticButton from "@/components/animations/MagneticButton";

interface CinematicHeroProps {
  onRequestAccess: () => void;
  onExploreCollections: () => void;
  ambientMode?: "nocturne" | "golden" | "clarity";
}

export default function CinematicHero({
  onRequestAccess,
  onExploreCollections,
  ambientMode = "nocturne",
}: CinematicHeroProps) {
  const [veilDismissed, setVeilDismissed] = useState(false);
  const { scrollY } = useScroll();

  // Cinematic Parallax & Camera-like movement on scroll
  const imageY = useTransform(scrollY, [0, 900], [0, 160]);
  const imageScale = useTransform(scrollY, [0, 900], [1, 1.1]);
  const contentY = useTransform(scrollY, [0, 800], [0, -80]);
  const contentOpacity = useTransform(scrollY, [0, 500], [1, 0.25]);

  useEffect(() => {
    // Elegant opening veil: ignites warm light and lifts within 1.2 seconds
    const timer = setTimeout(() => {
      setVeilDismissed(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#050A30]">
      {/* 1. Cinematic Opening Veil (Initial Ignition of Warm Tungsten Core) */}
      <motion.div
        animate={{ opacity: veilDismissed ? 0 : 1, pointerEvents: veilDismissed ? "none" : "auto" }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 z-[80] bg-[#3E160C] flex flex-col items-center justify-center text-center p-6"
      >
        <motion.div
          initial={{ scale: 0.4, opacity: 0 }}
          animate={{ scale: [0.4, 1.2, 1], opacity: [0, 1, 1] }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative mb-6"
        >
          {/* Pulsing filament core */}
          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#D4AF37] via-[#B59055] to-transparent blur-md animate-pulse" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E8D9C4] shadow-[0_0_15px_#D4AF37]" />
          </div>
        </motion.div>

        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-serif tracking-[0.35em] text-sm text-[#E8D9C4] uppercase"
        >
          LUMIÈRE PRIVÉE
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#785D32] mt-2"
        >
          PARIS • NOCTURNE ATELIER
        </motion.span>
      </motion.div>

      {/* 2. Hero Architectural Photograph with Camera-like Movement */}
      <motion.div
        style={{ y: imageY, scale: imageScale }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/hero_chandelier.jpg"
          alt="Lumière Privée — Monumental Chandelier in Parisian Atelier"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-center brightness-[0.82] contrast-[1.12]"
        />

        {/* Ambient atmospheric lighting overlay based on ambientMode */}
        <div
          className={`absolute inset-0 transition-all duration-1000 ${
            ambientMode === "nocturne"
              ? "bg-gradient-to-t from-[#050A30] via-[#050A30]/35 to-[#3E160C]/30"
              : ambientMode === "golden"
              ? "bg-gradient-to-t from-[#050A30] via-[#785D32]/25 to-[#3E160C]/25"
              : "bg-gradient-to-t from-[#050A30] via-[#050A30]/25 to-transparent"
          }`}
        />

        {/* Deep Chiaroscuro Vignette */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#050A30]/40 to-[#050A30]/90 pointer-events-none" />

        {/* Atmospheric Floating Light Orb */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-b from-[#D4AF37]/15 to-transparent blur-[140px] pointer-events-none" />
      </motion.div>

      {/* 3. Hero Content Composition */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-28 sm:pt-32 pb-10 sm:pb-14 flex flex-col justify-between min-h-screen"
      >
        {/* Top Editorial Eyebrow */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#785D32]/35 pb-3 sm:pb-4 text-[#E8D9C4]/80 gap-2">
          <div className="flex items-center space-x-2.5">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] font-mono">
              FLAGSHIP ATELIER • PARIS VIII
            </span>
          </div>

          <div className="flex items-center space-x-3 text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.25em] font-mono text-[#785D32]">
            <span>48.8708° N, 2.3168° E</span>
            <span>•</span>
            <span>INVITATION ARCHIVE</span>
          </div>
        </div>

        {/* Monumental Editorial Headline & Brand Statement */}
        <div className="my-auto py-8 sm:py-10 max-w-4xl">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#3E160C]/80 border border-[#785D32]/50 mb-5 sm:mb-6 backdrop-blur-md">
            <Sparkles className="w-3 h-3 text-[#D4AF37]" />
            <span className="text-[9px] sm:text-[10px] tracking-[0.25em] sm:tracking-[0.3em] uppercase text-[#E8D9C4] font-medium font-mono">
              THE LUMINOUS AFTERDARK
            </span>
          </div>

          {/* Monumental Brand Display */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-8xl lg:text-9xl text-[#E8D9C4] font-light tracking-[0.03em] leading-[0.96] mb-5 sm:mb-6">
            BEYOND THE <br />
            <span className="italic font-normal text-gold-gradient">
              ORDINARY LIGHT.
            </span>
          </h1>

          {/* Supporting Statement */}
          <p className="font-serif italic text-xl sm:text-2xl sm:text-3xl text-[#E8D9C4]/90 tracking-wide mb-3 sm:mb-4 font-light max-w-2xl">
            &ldquo;{BRAND.heroSupporting}&rdquo;
          </p>

          <p className="font-sans text-xs sm:text-sm text-[#E8D9C4]/70 max-w-xl font-light leading-relaxed mb-8 sm:mb-10 tracking-wide">
            {BRAND.supportingStatement}
          </p>

          {/* Dual Magnetic CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-6">
            <MagneticButton
              onClick={onExploreCollections}
              cursorLabel="DISCOVER"
              className="w-full sm:w-auto px-8 sm:px-9 py-3.5 sm:py-4 bg-[#E8D9C4] text-[#050A30] hover:bg-[#D4AF37] hover:text-[#050A30] font-sans text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] font-semibold transition-all shadow-[0_0_35px_rgba(232,217,196,0.25)] flex items-center justify-center space-x-3 group"
            >
              <span>Discover The Collection</span>
              <Compass className="w-4 h-4 text-[#050A30] group-hover:rotate-45 transition-transform duration-300" />
            </MagneticButton>

            <MagneticButton
              onClick={onRequestAccess}
              cursorLabel="ENTER"
              className="w-full sm:w-auto px-8 sm:px-9 py-3.5 sm:py-4 bg-[#3E160C]/90 hover:bg-[#3E160C] text-[#E8D9C4] border border-[#785D32] hover:border-[#D4AF37] font-sans text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] font-medium transition-all flex items-center justify-center space-x-3 backdrop-blur-md"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Enter The Private World</span>
            </MagneticButton>
          </div>
        </div>

        {/* Bottom Hero Ribbon */}
        <div className="pt-4 sm:pt-6 border-t border-[#785D32]/30 flex flex-col sm:flex-row items-center justify-between text-xs text-[#E8D9C4]/70 gap-3">
          <div className="flex items-center space-x-3 sm:space-x-6">
            <span className="font-mono text-[9px] sm:text-[10px] tracking-widest text-[#785D32]">
              LUMIÈRE PRIVÉE • MMXXVI
            </span>
            <span>•</span>
            <span className="text-[10px] sm:text-[11px] tracking-wider uppercase font-light truncate max-w-[200px] sm:max-w-none">
              SCULPTURAL ILLUMINATION & ARCHITECTURE
            </span>
          </div>

          <a
            href="#story-pinned"
            className="flex items-center space-x-2 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#E8D9C4]/80 hover:text-[#D4AF37] transition-colors group cursor-pointer"
          >
            <span>Scroll To Enter Exhibition</span>
            <ArrowDown className="w-3.5 h-3.5 text-[#D4AF37] group-hover:translate-y-1 transition-transform" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
