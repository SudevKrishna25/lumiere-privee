"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function LightTorchFollower() {
  const [isTouch, setIsTouch] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

  // Smooth, atmospheric spring movement
  const springX = useSpring(mouseX, { damping: 35, stiffness: 180, mass: 0.8 });
  const springY = useSpring(mouseY, { damping: 35, stiffness: 180, mass: 0.8 });

  useEffect(() => {
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
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

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
    <div className="pointer-events-none fixed inset-0 z-20 overflow-hidden">
      {/* Primary Warm Nocturne Ambient Beam */}
      <motion.div
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="w-[620px] h-[620px] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.07)_0%,rgba(120,93,50,0.03)_40%,transparent_70%)] mix-blend-screen pointer-events-none"
      />

      {/* Intimate Center Filament Glow */}
      <motion.div
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="w-[280px] h-[280px] rounded-full bg-[radial-gradient(circle,rgba(232,217,196,0.05)_0%,rgba(212,175,55,0.02)_50%,transparent_70%)] mix-blend-soft-light pointer-events-none"
      />
    </div>
  );
}
