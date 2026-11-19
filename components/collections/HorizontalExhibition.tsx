"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Compass, Sparkles, ChevronRight, Eye } from "lucide-react";
import { COLLECTION_CATEGORIES, CollectionCategory } from "@/lib/constants";
import CategoryDetailModal from "./CategoryDetailModal";

interface HorizontalExhibitionProps {
  onRequestInquiry: (category: string) => void;
}

export default function HorizontalExhibition({
  onRequestInquiry,
}: HorizontalExhibitionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState<CollectionCategory | null>(null);
  const [activeRoomIndex, setActiveRoomIndex] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const track = trackRef.current;
    const container = containerRef.current;
    if (!track || !container) return;

    // Measure total scroll distance
    const totalPanels = COLLECTION_CATEGORIES.length;

    const ctx = gsap.context(() => {
      gsap.to(track, {
        xPercent: -100 * (totalPanels - 1) / totalPanels,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${track.scrollWidth - window.innerWidth}`,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const index = Math.round(self.progress * (totalPanels - 1));
            setActiveRoomIndex(index);
          },
        },
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="collections-exhibition"
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-[#050A30] text-[#E8D9C4]"
    >
      {/* Background ambient light */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full bg-[#785D32]/10 blur-[150px] pointer-events-none" />

      {/* Floating HUD Top Bar */}
      <div className="absolute top-4 sm:top-8 left-4 sm:left-8 right-4 sm:right-8 z-30 flex items-center justify-between text-xs font-mono text-[#E8D9C4]/70 border-b border-[#785D32]/30 pb-2 sm:pb-3">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#D4AF37] animate-pulse" />
          <span className="uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[10px] sm:text-xs text-[#D4AF37] whitespace-nowrap">
            THE GALLERY
          </span>
          <span className="text-[#785D32]">•</span>
          <span className="text-[10px] sm:text-xs text-[#E8D9C4]/60 whitespace-nowrap">
            ROOM 0{activeRoomIndex + 1} / 0{COLLECTION_CATEGORIES.length}
          </span>
        </div>

        <div className="flex items-center space-x-1.5 sm:space-x-2 text-[9px] sm:text-[10px] uppercase tracking-wider sm:tracking-widest text-[#785D32]">
          <span className="hidden xs:inline">SCROLL TO WALK</span>
          <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#D4AF37] animate-bounce" />
        </div>
      </div>

      {/* Horizontal Track of Exhibition Rooms */}
      <div
        ref={trackRef}
        className="flex h-full w-[600vw] items-center will-change-transform"
      >
        {COLLECTION_CATEGORIES.map((category, idx) => (
          <div
            key={category.id}
            className="relative h-screen w-screen flex-shrink-0 flex items-center px-4 sm:px-12 lg:px-20 pt-16 sm:pt-20 pb-12 sm:pb-16 overflow-y-auto sm:overflow-visible"
            data-cursor="VIEW OBJECT"
          >
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 lg:gap-14 items-center">
              {/* Left Column: Asymmetrical Curated Image Stage */}
              <div
                onClick={() => setSelectedCategory(category)}
                className="lg:col-span-7 relative group cursor-pointer"
              >
                <div className="relative aspect-[16/9] sm:aspect-[16/10] max-h-44 sm:max-h-72 lg:max-h-none overflow-hidden border border-[#785D32]/50 bg-[#070B1A] shadow-[0_25px_60px_rgba(0,0,0,0.85)]">
                  <Image
                    src={category.image}
                    alt={category.frenchTitle}
                    fill
                    unoptimized
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out brightness-[0.88] group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050A30] via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity" />

                  {/* Top Corner Room & Category Number */}
                  <div className="absolute top-2.5 sm:top-4 left-2.5 sm:left-4 px-2.5 sm:px-3.5 py-1 sm:py-1.5 bg-[#050A30]/85 backdrop-blur-md border border-[#785D32]/60 flex items-center space-x-1.5 sm:space-x-2">
                    <span className="font-mono text-[10px] sm:text-xs text-[#D4AF37]">
                      COLLECTION {category.number}
                    </span>
                    <span className="text-[#785D32]">•</span>
                    <span className="text-[9px] sm:text-[10px] font-mono uppercase text-[#E8D9C4]">
                      ARCHIVAL
                    </span>
                  </div>

                  {/* Hover prompt */}
                  <div className="absolute bottom-2.5 sm:bottom-4 right-2.5 sm:right-4 px-2.5 sm:px-3.5 py-1 sm:py-1.5 bg-[#050A30]/85 backdrop-blur-md border border-[#785D32]/40 text-xs text-[#E8D9C4] flex items-center space-x-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#D4AF37]" />
                    <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider">
                      Open Dossier
                    </span>
                  </div>
                </div>

                {/* Fine brass corner flourish */}
                <div className="absolute -top-2 -left-2 sm:-top-2.5 sm:-left-2.5 w-4 sm:w-6 h-4 sm:h-6 border-t border-l border-[#D4AF37] pointer-events-none" />
              </div>

              {/* Right Column: Architectural Typography & Details */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-3 sm:space-y-6">
                <div>
                  <div className="flex items-center space-x-2 sm:space-x-3 mb-1 sm:mb-2">
                    <span className="font-mono text-[10px] sm:text-xs text-[#785D32]">
                      // 0{idx + 1}
                    </span>
                    <span className="w-6 sm:w-8 h-[1px] bg-[#785D32]" />
                    <span className="text-[9px] sm:text-[10px] font-mono uppercase text-[#D4AF37]">
                      LIMITED PRODUCTION
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-5xl lg:text-6xl text-[#E8D9C4] font-light leading-[1.05] mb-1 sm:mb-2">
                    {category.frenchTitle}
                  </h3>

                  <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#D4AF37] mb-2 sm:mb-4">
                    {category.englishTitle}
                  </p>

                  <p className="hidden sm:block font-serif italic text-base sm:text-lg text-[#E8D9C4]/90 mb-3 border-l-2 border-[#785D32] pl-3">
                    &ldquo;{category.subtitle}&rdquo;
                  </p>

                  <p className="text-xs sm:text-sm text-[#E8D9C4]/75 font-light leading-relaxed mb-3 sm:mb-6 line-clamp-2 sm:line-clamp-none">
                    {category.description}
                  </p>

                  {/* Material & Architectural Specs */}
                  <div className="p-2.5 sm:p-3.5 bg-[#3E160C]/35 border border-[#785D32]/35 space-y-1 sm:space-y-1.5 mb-3 sm:mb-6 text-[11px] sm:text-xs">
                    <div className="flex justify-between">
                      <span className="text-[#785D32] font-mono text-[9px] sm:text-[10px] uppercase">
                        Primary Material:
                      </span>
                      <span className="text-[#E8D9C4] font-medium">{category.material}</span>
                    </div>
                    <div className="flex justify-between border-t border-[#785D32]/25 pt-1 sm:pt-1.5">
                      <span className="text-[#785D32] font-mono text-[9px] sm:text-[10px] uppercase">
                        Archetype:
                      </span>
                      <span className="text-[#D4AF37] font-serif">{category.featuredPiece}</span>
                    </div>
                  </div>
                </div>

                {/* Interactive Action */}
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <button
                    onClick={() => setSelectedCategory(category)}
                    className="flex-1 sm:flex-initial px-4 sm:px-6 py-2.5 sm:py-3.5 bg-[#3E160C] hover:bg-[#785D32] text-[#E8D9C4] font-sans text-[11px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] font-medium border border-[#785D32]/60 transition-all flex items-center justify-center space-x-2"
                  >
                    <Sparkles className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#D4AF37]" />
                    <span>Examine Dossier</span>
                  </button>

                  <button
                    onClick={() => onRequestInquiry(category.frenchTitle)}
                    className="p-2.5 sm:p-3.5 border border-[#785D32]/40 hover:border-[#D4AF37] text-[#E8D9C4] hover:text-[#D4AF37] transition-colors"
                    aria-label="Request commission inquiry"
                  >
                    <ArrowUpRight className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Room Tracker Dots */}
      <div className="absolute bottom-3 sm:bottom-6 left-4 sm:left-8 right-4 sm:right-8 z-30 flex items-center justify-between text-xs font-mono text-[#E8D9C4]/60">
        <div className="flex space-x-3">
          {COLLECTION_CATEGORIES.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                // Scroll into room
                if (containerRef.current) {
                  const step = (containerRef.current.offsetHeight * 2) / COLLECTION_CATEGORIES.length;
                  window.scrollTo({
                    top: containerRef.current.offsetTop + step * i,
                    behavior: "smooth",
                  });
                }
              }}
              className={`h-1.5 transition-all duration-300 rounded-full ${
                activeRoomIndex === i
                  ? "w-8 bg-[#D4AF37]"
                  : "w-2 bg-[#785D32]/50 hover:bg-[#E8D9C4]/40"
              }`}
              aria-label={`Jump to room ${i + 1}`}
            />
          ))}
        </div>

        <span className="font-mono text-[10px] text-[#785D32] uppercase">
          0{activeRoomIndex + 1} OF 0{COLLECTION_CATEGORIES.length} EXHIBITED
        </span>
      </div>

      {/* Category Detail Modal */}
      <CategoryDetailModal
        category={selectedCategory}
        onClose={() => setSelectedCategory(null)}
        onRequestInquiry={(title) => {
          setSelectedCategory(null);
          onRequestInquiry(title);
        }}
      />
    </section>
  );
}
