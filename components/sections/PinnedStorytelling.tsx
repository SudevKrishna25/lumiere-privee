"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles } from "lucide-react";

export default function PinnedStorytelling() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scene1Ref = useRef<HTMLDivElement>(null);
  const scene2Ref = useRef<HTMLDivElement>(null);
  const scene3Ref = useRef<HTMLDivElement>(null);

  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);
  const text3Ref = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const sceneLabelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=2600",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          onUpdate: (self) => {
            const p = self.progress;
            if (progressBarRef.current) {
              progressBarRef.current.style.width = `${p * 100}%`;
            }
            if (sceneLabelRef.current) {
              if (p < 0.35) {
                sceneLabelRef.current.textContent = "01 // THE ARRIVAL";
              } else if (p < 0.7) {
                sceneLabelRef.current.textContent = "02 // THE REVELATION";
              } else {
                sceneLabelRef.current.textContent = "03 // THE TRANSFORMATION";
              }
            }
          },
        },
      });

      // Scene 1: Initial state
      gsap.set(scene1Ref.current, { opacity: 1, scale: 1 });
      gsap.set(text1Ref.current, { opacity: 1, y: 0 });

      // Scene 2: Clip-path reveal of artisanal craftsmanship
      gsap.set(scene2Ref.current, {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        opacity: 1,
      });
      gsap.set(text2Ref.current, { opacity: 0, y: 50 });

      // Scene 3: Final architectural radiance
      gsap.set(scene3Ref.current, {
        clipPath: "circle(0% at 50% 50%)",
        opacity: 1,
      });
      gsap.set(text3Ref.current, { opacity: 0, y: 50 });

      // Timeline Sequence
      tl
        // Fade out text 1, reveal Scene 2 via diagonal/bottom-up clip-path
        .to(text1Ref.current, { opacity: 0, y: -40, duration: 0.8 }, 0.5)
        .to(
          scene2Ref.current,
          {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: 1.5,
            ease: "power2.inOut",
          },
          0.8
        )
        .to(text2Ref.current, { opacity: 1, y: 0, duration: 0.8 }, 1.4)

        // Fade out text 2, reveal Scene 3 via expanding circular iris
        .to(text2Ref.current, { opacity: 0, y: -40, duration: 0.8 }, 2.5)
        .to(
          scene3Ref.current,
          {
            clipPath: "circle(150% at 50% 50%)",
            duration: 1.8,
            ease: "power2.inOut",
          },
          2.8
        )
        .to(text3Ref.current, { opacity: 1, y: 0, duration: 0.8 }, 3.6);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      id="story-pinned"
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-[#050A30] text-[#E8D9C4]"
    >
      {/* SCENE 01 — The Arrival (Shadows & Solitary Light) */}
      <div
        ref={scene1Ref}
        className="absolute inset-0 z-10 flex items-center justify-center"
      >
        <Image
          src="/images/house_editorial.jpg"
          alt="Architectural space in midnight shadow"
          fill
          unoptimized
          sizes="100vw"
          className="object-cover object-center brightness-[0.55] contrast-[1.2]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050A30] via-transparent to-[#050A30]/80 pointer-events-none" />

        <div
          ref={text1Ref}
          className="relative z-20 max-w-5xl mx-auto px-5 sm:px-12 text-center"
        >
          <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-[#D4AF37] block mb-3 sm:mb-4">
            CINEMATIC PROLOGUE // ACT I
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-7xl lg:text-9xl text-[#E8D9C4] font-light leading-[1.02] sm:leading-[0.96] mb-4 sm:mb-6">
            LIGHT BECOMES <br />
            <span className="italic font-normal text-gold-gradient">
              ARCHITECTURE.
            </span>
          </h2>
          <p className="font-serif italic text-base sm:text-xl sm:text-2xl text-[#E8D9C4]/80 max-w-2xl mx-auto font-light">
            &ldquo;In the stillness of midnight, space awaits its definition.&rdquo;
          </p>
        </div>
      </div>

      {/* SCENE 02 — The Revelation (Molten Brass & Craftsmanship) */}
      <div
        ref={scene2Ref}
        className="absolute inset-0 z-20 flex items-center justify-center"
      >
        <Image
          src="/images/atelier_craft.jpg"
          alt="Artisanal patinated brass and warm molten illumination"
          fill
          unoptimized
          sizes="100vw"
          className="object-cover object-center brightness-[0.65] contrast-[1.25]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#3E160C]/90 via-[#050A30]/40 to-[#050A30]/90 pointer-events-none" />

        <div
          ref={text2Ref}
          className="relative z-20 max-w-5xl mx-auto px-5 sm:px-12 text-center"
        >
          <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-[#D4AF37] block mb-3 sm:mb-4">
            CINEMATIC PROLOGUE // ACT II
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-7xl lg:text-9xl text-[#E8D9C4] font-light leading-[1.02] sm:leading-[0.96] mb-4 sm:mb-6">
            EVERY SHADOW <br />
            <span className="italic font-normal text-gold-gradient">
              HAS A STORY.
            </span>
          </h2>
          <p className="font-serif italic text-base sm:text-xl sm:text-2xl text-[#E8D9C4]/80 max-w-2xl mx-auto font-light">
            &ldquo;Where darkness recedes, form, brass, and crystal find their true voice.&rdquo;
          </p>
        </div>
      </div>

      {/* SCENE 03 — The Transformation (Full Architectural Radiance) */}
      <div
        ref={scene3Ref}
        className="absolute inset-0 z-30 flex items-center justify-center"
      >
        <Image
          src="/images/hero_chandelier.jpg"
          alt="Majestic double-height salon flooded in warm luxury light"
          fill
          unoptimized
          sizes="100vw"
          className="object-cover object-center brightness-[0.7] contrast-[1.15]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#3E160C] via-[#050A30]/40 to-[#050A30]/80 pointer-events-none" />

        <div
          ref={text3Ref}
          className="relative z-20 max-w-5xl mx-auto px-5 sm:px-12 text-center"
        >
          <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-[#D4AF37] block mb-3 sm:mb-4">
            CINEMATIC PROLOGUE // ACT III
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-7xl lg:text-9xl text-[#E8D9C4] font-light leading-[1.02] sm:leading-[0.96] mb-4 sm:mb-6">
            THE ART OF <br />
            <span className="italic font-normal text-gold-gradient">
              BEING DIFFERENT.
            </span>
          </h2>
          <p className="font-serif italic text-base sm:text-xl sm:text-2xl text-[#E8D9C4]/90 max-w-2xl mx-auto font-light">
            &ldquo;We do not simply design light. We shape the atmosphere.&rdquo;
          </p>
        </div>
      </div>

      {/* Bottom Timeline HUD Controller */}
      <div className="absolute bottom-6 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8 z-40 flex items-center justify-between text-[10px] sm:text-xs font-mono text-[#E8D9C4]/70 gap-2">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0" />
          <span ref={sceneLabelRef} className="uppercase tracking-widest text-[#D4AF37] whitespace-nowrap">
            01 // THE ARRIVAL
          </span>
        </div>

        {/* Dynamic Progress Bar */}
        <div className="w-24 sm:w-64 md:w-80 h-[2px] bg-[#785D32]/40 rounded-full overflow-hidden">
          <div
            ref={progressBarRef}
            className="h-full bg-gradient-to-r from-[#785D32] to-[#D4AF37] w-0 transition-all duration-75"
          />
        </div>

        <div className="hidden md:block uppercase tracking-wider text-[10px] text-[#785D32]">
          SCROLL TO UNVEIL SCENES
        </div>
      </div>
    </div>
  );
}
