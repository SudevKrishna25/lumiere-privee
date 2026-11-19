"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [cursorText, setCursorText] = useState<string>("");
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isTouch, setIsTouch] = useState<boolean>(true);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Ultra-smooth spring physics for luxury motion feel
  const springX = useSpring(mouseX, { damping: 28, stiffness: 220, mass: 0.5 });
  const springY = useSpring(mouseY, { damping: 28, stiffness: 220, mass: 0.5 });

  useEffect(() => {
    // Check if touch device or screen < 1024px
    if (
      typeof window === "undefined" ||
      window.matchMedia("(pointer: coarse)").matches ||
      window.innerWidth < 1024
    ) {
      setIsTouch(true);
      return;
    }

    setIsTouch(false);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Check for elements with data-cursor attribute
      const target = e.target as HTMLElement | null;
      if (target) {
        const cursorEl = target.closest("[data-cursor]");
        if (cursorEl) {
          const text = cursorEl.getAttribute("data-cursor") || "";
          setCursorText(text);
          setIsHovered(true);
          return;
        }

        const clickable = target.closest("a, button, input, textarea, [role='button']");
        if (clickable) {
          setCursorText("");
          setIsHovered(true);
          return;
        }
      }

      setCursorText("");
      setIsHovered(false);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (isTouch || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Outer subtle halo ring */}
      <motion.div
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: cursorText ? 1.4 : isHovered ? 1.6 : 1,
          width: cursorText ? 96 : 38,
          height: cursorText ? 96 : 38,
          borderColor: cursorText
            ? "rgba(212, 175, 55, 0.7)"
            : isHovered
            ? "rgba(232, 217, 196, 0.6)"
            : "rgba(120, 93, 50, 0.35)",
          backgroundColor: cursorText
            ? "rgba(5, 10, 48, 0.85)"
            : isHovered
            ? "rgba(120, 93, 50, 0.12)"
            : "rgba(5, 10, 48, 0.2)",
          backdropFilter: cursorText ? "blur(8px)" : "blur(0px)",
        }}
        transition={{ type: "spring", damping: 24, stiffness: 200, mass: 0.6 }}
        className="rounded-full border flex items-center justify-center text-center shadow-[0_0_25px_rgba(120,93,50,0.25)]"
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="text-[9px] font-sans uppercase tracking-[0.2em] font-medium text-[#E8D9C4] px-1 select-none pointer-events-none"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>

      {/* Center pinpoint light */}
      {!cursorText && (
        <motion.div
          style={{
            x: mouseX,
            y: mouseY,
            translateX: "-50%",
            translateY: "-50%",
          }}
          animate={{
            scale: isHovered ? 0 : 1,
            opacity: isHovered ? 0 : 1,
          }}
          transition={{ duration: 0.15 }}
          className="w-1.5 h-1.5 rounded-full bg-[#E8D9C4] shadow-[0_0_8px_#D4AF37]"
        />
      )}
    </div>
  );
}
