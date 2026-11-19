"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Eye, Compass } from "lucide-react";
import { COLLECTION_CATEGORIES, CollectionCategory } from "@/lib/constants";
import CategoryDetailModal from "./CategoryDetailModal";

interface SignatureCollectionsProps {
  onRequestInquiry: (category: string) => void;
}

export default function SignatureCollections({
  onRequestInquiry,
}: SignatureCollectionsProps) {
  const [selectedCategory, setSelectedCategory] = useState<CollectionCategory | null>(null);

  return (
    <section
      id="collections"
      className="relative py-28 sm:py-36 lg:py-44 bg-[#050A30] text-[#E8D9C4] overflow-hidden"
    >
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 rounded-full bg-[#785D32]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] rounded-full bg-[#3E160C]/20 blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#785D32]/35 pb-8 mb-20 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <span className="font-mono text-xs text-[#D4AF37] tracking-[0.3em]">
                03 / THE SIGNATURE COLLECTION
              </span>
              <span className="w-12 h-[1px] bg-[#785D32]" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#E8D9C4]/70">
                Curated Works of Art
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-[#E8D9C4] leading-[1.05]">
              LES FORMES <br />
              <span className="italic font-normal text-gold-gradient">
                DE LA LUMIÈRE
              </span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base text-[#E8D9C4]/75 font-light leading-relaxed">
              We present our lighting collections not as commercial fixtures,
              but as curated architectural sculptures that command silence and
              orchestrate space.
            </p>
          </div>
        </div>

        {/* Asymmetrical Gallery Composition */}
        <div className="space-y-24 sm:space-y-36">
          {/* Row 1: Pair 01 & 02 (Suspensions & Lustres) - Asymmetric Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Category 01: Suspensions (Tall vertical, col-span-5) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9 }}
              onClick={() => setSelectedCategory(COLLECTION_CATEGORIES[0])}
              className="lg:col-span-5 group cursor-pointer"
              data-cursor="VIEW PIECE"
            >
              <div className="relative aspect-[3/4] overflow-hidden border border-[#785D32]/40 bg-[#070B1A]">
                <Image
                  src={COLLECTION_CATEGORIES[0].image}
                  alt={COLLECTION_CATEGORIES[0].frenchTitle}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out brightness-[0.85] group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050A30] via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />

                {/* Corner Number */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-[#050A30]/80 backdrop-blur-md border border-[#785D32]/40 text-xs font-mono text-[#D4AF37]">
                  {COLLECTION_CATEGORIES[0].number}
                </div>
              </div>

              <div className="mt-6 flex items-start justify-between border-b border-[#785D32]/25 pb-4">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#E8D9C4] group-hover:text-[#D4AF37] transition-colors">
                    {COLLECTION_CATEGORIES[0].frenchTitle}
                  </h3>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#785D32] mt-1">
                    {COLLECTION_CATEGORIES[0].englishTitle}
                  </p>
                  <p className="text-xs text-[#E8D9C4]/70 mt-2 max-w-sm line-clamp-2">
                    {COLLECTION_CATEGORIES[0].subtitle}
                  </p>
                </div>
                <div className="p-2 rounded-full border border-[#785D32]/40 group-hover:border-[#D4AF37] group-hover:bg-[#785D32]/20 transition-all">
                  <ArrowUpRight className="w-4 h-4 text-[#E8D9C4] group-hover:text-[#D4AF37] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </motion.div>

            {/* Category 02: Lustres (Monumental Wide, col-span-7) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, delay: 0.15 }}
              onClick={() => setSelectedCategory(COLLECTION_CATEGORIES[1])}
              className="lg:col-span-7 group cursor-pointer"
              data-cursor="DISCOVER"
            >
              <div className="relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden border border-[#785D32]/40 bg-[#070B1A]">
                <Image
                  src={COLLECTION_CATEGORIES[1].image}
                  alt={COLLECTION_CATEGORIES[1].frenchTitle}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out brightness-[0.85] group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050A30] via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />

                {/* Corner Number */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-[#050A30]/80 backdrop-blur-md border border-[#785D32]/40 text-xs font-mono text-[#D4AF37]">
                  {COLLECTION_CATEGORIES[1].number}
                </div>
              </div>

              <div className="mt-6 flex items-start justify-between border-b border-[#785D32]/25 pb-4">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#E8D9C4] group-hover:text-[#D4AF37] transition-colors">
                    {COLLECTION_CATEGORIES[1].frenchTitle}
                  </h3>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#785D32] mt-1">
                    {COLLECTION_CATEGORIES[1].englishTitle}
                  </p>
                  <p className="text-xs text-[#E8D9C4]/70 mt-2 max-w-md line-clamp-2">
                    {COLLECTION_CATEGORIES[1].subtitle}
                  </p>
                </div>
                <div className="p-2 rounded-full border border-[#785D32]/40 group-hover:border-[#D4AF37] group-hover:bg-[#785D32]/20 transition-all">
                  <ArrowUpRight className="w-4 h-4 text-[#E8D9C4] group-hover:text-[#D4AF37] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Row 2: Pair 03 & 04 (Appliques & Lampadaires) - Alternating Rhythms */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Category 03: Appliques (col-span-7) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9 }}
              onClick={() => setSelectedCategory(COLLECTION_CATEGORIES[2])}
              className="lg:col-span-7 group cursor-pointer"
              data-cursor="DISCOVER"
            >
              <div className="relative aspect-[16/10] overflow-hidden border border-[#785D32]/40 bg-[#070B1A]">
                <Image
                  src={COLLECTION_CATEGORIES[2].image}
                  alt={COLLECTION_CATEGORIES[2].frenchTitle}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out brightness-[0.85] group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050A30] via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />

                <div className="absolute top-4 left-4 px-3 py-1 bg-[#050A30]/80 backdrop-blur-md border border-[#785D32]/40 text-xs font-mono text-[#D4AF37]">
                  {COLLECTION_CATEGORIES[2].number}
                </div>
              </div>

              <div className="mt-6 flex items-start justify-between border-b border-[#785D32]/25 pb-4">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#E8D9C4] group-hover:text-[#D4AF37] transition-colors">
                    {COLLECTION_CATEGORIES[2].frenchTitle}
                  </h3>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#785D32] mt-1">
                    {COLLECTION_CATEGORIES[2].englishTitle}
                  </p>
                  <p className="text-xs text-[#E8D9C4]/70 mt-2 max-w-md line-clamp-2">
                    {COLLECTION_CATEGORIES[2].subtitle}
                  </p>
                </div>
                <div className="p-2 rounded-full border border-[#785D32]/40 group-hover:border-[#D4AF37] group-hover:bg-[#785D32]/20 transition-all">
                  <ArrowUpRight className="w-4 h-4 text-[#E8D9C4] group-hover:text-[#D4AF37] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </motion.div>

            {/* Category 04: Lampadaires (col-span-5, tall sculpture) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, delay: 0.15 }}
              onClick={() => setSelectedCategory(COLLECTION_CATEGORIES[3])}
              className="lg:col-span-5 group cursor-pointer"
              data-cursor="VIEW PIECE"
            >
              <div className="relative aspect-[3/4] overflow-hidden border border-[#785D32]/40 bg-[#070B1A]">
                <Image
                  src={COLLECTION_CATEGORIES[3].image}
                  alt={COLLECTION_CATEGORIES[3].frenchTitle}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out brightness-[0.85] group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050A30] via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />

                <div className="absolute top-4 left-4 px-3 py-1 bg-[#050A30]/80 backdrop-blur-md border border-[#785D32]/40 text-xs font-mono text-[#D4AF37]">
                  {COLLECTION_CATEGORIES[3].number}
                </div>
              </div>

              <div className="mt-6 flex items-start justify-between border-b border-[#785D32]/25 pb-4">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#E8D9C4] group-hover:text-[#D4AF37] transition-colors">
                    {COLLECTION_CATEGORIES[3].frenchTitle}
                  </h3>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#785D32] mt-1">
                    {COLLECTION_CATEGORIES[3].englishTitle}
                  </p>
                  <p className="text-xs text-[#E8D9C4]/70 mt-2 max-w-sm line-clamp-2">
                    {COLLECTION_CATEGORIES[3].subtitle}
                  </p>
                </div>
                <div className="p-2 rounded-full border border-[#785D32]/40 group-hover:border-[#D4AF37] group-hover:bg-[#785D32]/20 transition-all">
                  <ArrowUpRight className="w-4 h-4 text-[#E8D9C4] group-hover:text-[#D4AF37] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Row 3: Pair 05 & 06 (Objets Lumineux & Créations Sur Mesure) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Category 05: Objets Lumineux (col-span-5) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9 }}
              onClick={() => setSelectedCategory(COLLECTION_CATEGORIES[4])}
              className="lg:col-span-5 group cursor-pointer"
              data-cursor="EXPLORE"
            >
              <div className="relative aspect-[4/4] overflow-hidden border border-[#785D32]/40 bg-[#070B1A]">
                <Image
                  src={COLLECTION_CATEGORIES[4].image}
                  alt={COLLECTION_CATEGORIES[4].frenchTitle}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out brightness-[0.85] group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050A30] via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />

                <div className="absolute top-4 left-4 px-3 py-1 bg-[#050A30]/80 backdrop-blur-md border border-[#785D32]/40 text-xs font-mono text-[#D4AF37]">
                  {COLLECTION_CATEGORIES[4].number}
                </div>
              </div>

              <div className="mt-6 flex items-start justify-between border-b border-[#785D32]/25 pb-4">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#E8D9C4] group-hover:text-[#D4AF37] transition-colors">
                    {COLLECTION_CATEGORIES[4].frenchTitle}
                  </h3>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#785D32] mt-1">
                    {COLLECTION_CATEGORIES[4].englishTitle}
                  </p>
                  <p className="text-xs text-[#E8D9C4]/70 mt-2 max-w-sm line-clamp-2">
                    {COLLECTION_CATEGORIES[4].subtitle}
                  </p>
                </div>
                <div className="p-2 rounded-full border border-[#785D32]/40 group-hover:border-[#D4AF37] group-hover:bg-[#785D32]/20 transition-all">
                  <ArrowUpRight className="w-4 h-4 text-[#E8D9C4] group-hover:text-[#D4AF37] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </motion.div>

            {/* Category 06: Créations Sur Mesure (col-span-7) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, delay: 0.15 }}
              onClick={() => setSelectedCategory(COLLECTION_CATEGORIES[5])}
              className="lg:col-span-7 group cursor-pointer"
              data-cursor="ATELIER"
            >
              <div className="relative aspect-[16/10] overflow-hidden border border-[#785D32]/40 bg-[#070B1A]">
                <Image
                  src={COLLECTION_CATEGORIES[5].image}
                  alt={COLLECTION_CATEGORIES[5].frenchTitle}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out brightness-[0.85] group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050A30] via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />

                <div className="absolute top-4 left-4 px-3 py-1 bg-[#050A30]/80 backdrop-blur-md border border-[#785D32]/40 text-xs font-mono text-[#D4AF37]">
                  {COLLECTION_CATEGORIES[5].number}
                </div>
              </div>

              <div className="mt-6 flex items-start justify-between border-b border-[#785D32]/25 pb-4">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#E8D9C4] group-hover:text-[#D4AF37] transition-colors">
                    {COLLECTION_CATEGORIES[5].frenchTitle}
                  </h3>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#785D32] mt-1">
                    {COLLECTION_CATEGORIES[5].englishTitle}
                  </p>
                  <p className="text-xs text-[#E8D9C4]/70 mt-2 max-w-md line-clamp-2">
                    {COLLECTION_CATEGORIES[5].subtitle}
                  </p>
                </div>
                <div className="p-2 rounded-full border border-[#785D32]/40 group-hover:border-[#D4AF37] group-hover:bg-[#785D32]/20 transition-all">
                  <ArrowUpRight className="w-4 h-4 text-[#E8D9C4] group-hover:text-[#D4AF37] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
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
