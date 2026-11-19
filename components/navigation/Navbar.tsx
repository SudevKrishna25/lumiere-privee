"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Sparkles, Moon, Sun, Flame } from "lucide-react";
import { NAV_LINKS, BRAND } from "@/lib/constants";
import MagneticButton from "@/components/animations/MagneticButton";

interface NavbarProps {
  onRequestAccess: () => void;
  onOpenMobileMenu: () => void;
  ambientMode?: "nocturne" | "golden" | "clarity";
  onToggleAmbient?: (mode: "nocturne" | "golden" | "clarity") => void;
}

export default function Navbar({
  onRequestAccess,
  onOpenMobileMenu,
  ambientMode = "nocturne",
  onToggleAmbient,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMoodMenu, setShowMoodMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "py-3 bg-[#050A30]/85 backdrop-blur-xl border-b border-[#785D32]/25 shadow-[0_10px_35px_rgba(5,10,48,0.7)]"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Left: Brand Wordmark */}
        <Link
          href="#"
          className="group flex flex-col focus:outline-none"
          data-cursor="LUMIÈRE"
        >
          <span className="font-serif text-base sm:text-xl lg:text-2xl tracking-[0.2em] sm:tracking-[0.28em] text-[#E8D9C4] group-hover:text-[#D4AF37] transition-colors font-medium whitespace-nowrap">
            {BRAND.name}
          </span>
          <span className="text-[8px] sm:text-[9px] tracking-[0.25em] sm:tracking-[0.4em] uppercase text-[#785D32] group-hover:text-[#E8D9C4]/80 transition-colors whitespace-nowrap">
            {BRAND.subname} • HAUTE ILLUMINATION
          </span>
        </Link>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              data-cursor="DISCOVER"
              className="relative py-1 text-xs uppercase tracking-[0.2em] text-[#E8D9C4]/80 hover:text-[#E8D9C4] transition-colors group"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#D4AF37] transition-all duration-300 ease-out group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right: Atmosphere Dimmer + Invitation CTA */}
        <div className="flex items-center space-x-3 sm:space-x-5">
          {/* Atelier Light Ambience Selector */}
          <div className="relative">
            <button
              onClick={() => setShowMoodMenu(!showMoodMenu)}
              className="flex items-center space-x-1.5 px-2.5 py-1.5 rounded-full border border-[#785D32]/40 bg-[#050A30]/40 text-[#E8D9C4] hover:border-[#D4AF37] transition-all text-[11px] tracking-wider uppercase"
              title="Atelier Light Atmosphere"
              data-cursor="LIGHT"
            >
              {ambientMode === "nocturne" && <Moon className="w-3.5 h-3.5 text-[#D4AF37]" />}
              {ambientMode === "golden" && <Flame className="w-3.5 h-3.5 text-[#B59055]" />}
              {ambientMode === "clarity" && <Sun className="w-3.5 h-3.5 text-[#E8D9C4]" />}
              <span className="hidden sm:inline font-mono text-[10px]">
                {ambientMode === "nocturne"
                  ? "2200K"
                  : ambientMode === "golden"
                  ? "2700K"
                  : "3500K"}
              </span>
            </button>

            {/* Dropdown for mood */}
            <AnimatePresence>
              {showMoodMenu && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-48 bg-[#050A30]/95 backdrop-blur-xl border border-[#785D32]/50 p-2 shadow-2xl z-50 text-left"
                >
                  <p className="px-2 py-1 text-[9px] uppercase tracking-widest text-[#785D32] border-b border-[#785D32]/25 mb-1">
                    Atelier Light Mood
                  </p>
                  <button
                    onClick={() => {
                      onToggleAmbient?.("nocturne");
                      setShowMoodMenu(false);
                    }}
                    className={`w-full flex items-center justify-between px-2.5 py-2 text-xs transition-colors ${
                      ambientMode === "nocturne"
                        ? "text-[#D4AF37] bg-[#785D32]/20"
                        : "text-[#E8D9C4] hover:bg-[#785D32]/10"
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <Moon className="w-3.5 h-3.5" />
                      <span>Nocturne Atelier</span>
                    </div>
                    <span className="font-mono text-[10px] text-[#785D32]">2200K</span>
                  </button>

                  <button
                    onClick={() => {
                      onToggleAmbient?.("golden");
                      setShowMoodMenu(false);
                    }}
                    className={`w-full flex items-center justify-between px-2.5 py-2 text-xs transition-colors ${
                      ambientMode === "golden"
                        ? "text-[#D4AF37] bg-[#785D32]/20"
                        : "text-[#E8D9C4] hover:bg-[#785D32]/10"
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <Flame className="w-3.5 h-3.5" />
                      <span>Atelier Sunset</span>
                    </div>
                    <span className="font-mono text-[10px] text-[#785D32]">2700K</span>
                  </button>

                  <button
                    onClick={() => {
                      onToggleAmbient?.("clarity");
                      setShowMoodMenu(false);
                    }}
                    className={`w-full flex items-center justify-between px-2.5 py-2 text-xs transition-colors ${
                      ambientMode === "clarity"
                        ? "text-[#D4AF37] bg-[#785D32]/20"
                        : "text-[#E8D9C4] hover:bg-[#785D32]/10"
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <Sun className="w-3.5 h-3.5" />
                      <span>Architectural</span>
                    </div>
                    <span className="font-mono text-[10px] text-[#785D32]">3500K</span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Invitation CTA */}
          <MagneticButton
            onClick={onRequestAccess}
            cursorLabel="ACCESS"
            className="hidden sm:inline-flex px-4 sm:px-5 py-2 text-[11px] tracking-[0.2em] uppercase font-medium border border-[#785D32] bg-[#3E160C]/60 hover:bg-[#785D32] hover:border-[#D4AF37] text-[#E8D9C4] transition-all duration-300"
          >
            <span className="flex items-center space-x-1.5">
              <Sparkles className="w-3 h-3 text-[#D4AF37]" />
              <span>Private Access</span>
            </span>
          </MagneticButton>

          {/* Mobile Menu Trigger */}
          <button
            onClick={onOpenMobileMenu}
            className="lg:hidden p-2 rounded border border-[#785D32]/40 text-[#E8D9C4] hover:border-[#D4AF37] transition-colors"
            aria-label="Open mobile navigation menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
