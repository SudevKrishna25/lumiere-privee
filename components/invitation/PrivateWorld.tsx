"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Key, ArrowRight } from "lucide-react";
import { BRAND, PRIVATE_BENEFITS } from "@/lib/constants";
import MagneticButton from "@/components/animations/MagneticButton";

interface PrivateWorldProps {
  onOpenInvitation: () => void;
}

export default function PrivateWorld({ onOpenInvitation }: PrivateWorldProps) {
  return (
    <section
      id="private-access"
      className="relative py-28 sm:py-36 lg:py-44 bg-[#050A30] text-[#E8D9C4] overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] rounded-full bg-[#785D32]/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 rounded-full bg-[#3E160C]/25 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-20">
          <div className="inline-flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6 px-3.5 sm:px-4 py-1.5 bg-[#3E160C]/40 border border-[#785D32]/40 backdrop-blur-sm">
            <Key className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="font-mono text-[9px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[#E8D9C4] whitespace-nowrap">
              07 / PRIVILEGE & DISCRETION
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-6xl lg:text-7xl font-light text-[#E8D9C4] leading-[1.08] mb-4 sm:mb-6">
            AN INVITATION TO <br />
            <span className="italic font-normal text-gold-gradient">
              THE EXTRAORDINARY.
            </span>
          </h2>

          <p className="font-serif italic text-base sm:text-2xl text-[#E8D9C4]/90 mb-4 sm:mb-6 font-light leading-relaxed">
            &ldquo;{BRAND.privateWorldHeadline}&rdquo;
          </p>

          <p className="text-xs sm:text-base text-[#E8D9C4]/75 font-light leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-10">
            {BRAND.privateWorldIntro}
          </p>

          <MagneticButton
            onClick={onOpenInvitation}
            cursorLabel="INVITATION"
            className="w-full sm:w-auto px-6 sm:px-10 py-4 sm:py-5 bg-[#3E160C] hover:bg-[#785D32] text-[#E8D9C4] font-sans text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] font-medium border border-[#785D32] transition-all shadow-[0_10px_40px_rgba(62,22,12,0.4)] inline-flex items-center justify-center space-x-3 group"
          >
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span>Request An Invitation</span>
          </MagneticButton>
        </div>

        {/* 4 Pillars of Exclusive Access */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-10 border-t border-[#785D32]/30">
          {PRIVATE_BENEFITS.map((benefit, idx) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-6 bg-[#070B1A]/80 border border-[#785D32]/30 hover:border-[#D4AF37] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <span className="font-mono text-xs text-[#785D32] block mb-3">
                  // PRIVILEGE 0{idx + 1}
                </span>
                <h3 className="font-serif text-xl text-[#E8D9C4] group-hover:text-[#D4AF37] transition-colors mb-3">
                  {benefit.title}
                </h3>
                <p className="text-xs text-[#E8D9C4]/70 font-light leading-relaxed">
                  {benefit.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#785D32]/20 flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-[#785D32]">
                <span>Archival Access</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#785D32] group-hover:text-[#D4AF37] group-hover:translate-x-1 transition-all" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
