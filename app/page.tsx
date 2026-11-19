"use client";

import React, { useState } from "react";
import SmoothScrollProvider from "@/components/animations/SmoothScrollProvider";
import CustomCursor from "@/components/animations/CustomCursor";
import LightTorchFollower from "@/components/animations/LightTorchFollower";
import Navbar from "@/components/navigation/Navbar";
import MobileMenu from "@/components/navigation/MobileMenu";
import CinematicHero from "@/components/hero/CinematicHero";
import PinnedStorytelling from "@/components/sections/PinnedStorytelling";
import BrandPhilosophy from "@/components/sections/BrandPhilosophy";
import HorizontalExhibition from "@/components/collections/HorizontalExhibition";
import SignaturePieces from "@/components/products/SignaturePieces";
import ArtOfIllumination from "@/components/sections/ArtOfIllumination";
import BespokeAtelier from "@/components/atelier/BespokeAtelier";
import PrivateWorld from "@/components/invitation/PrivateWorld";
import FinalCinematic from "@/components/sections/FinalCinematic";
import LuxuryFooter from "@/components/footer/LuxuryFooter";
import InvitationModal from "@/components/invitation/InvitationModal";
import AtelierInquiryModal from "@/components/atelier/AtelierInquiryModal";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isInvitationModalOpen, setIsInvitationModalOpen] = useState(false);
  const [isAtelierModalOpen, setIsAtelierModalOpen] = useState(false);
  const [invitationInitialInterest, setInvitationInitialInterest] = useState<string>("");
  const [atelierPrefilledScope, setAtelierPrefilledScope] = useState<string>("");
  const [ambientMode, setAmbientMode] = useState<"nocturne" | "golden" | "clarity">("nocturne");

  const handleOpenInvitation = (interest?: string) => {
    if (interest) setInvitationInitialInterest(interest);
    setIsInvitationModalOpen(true);
  };

  const handleOpenAtelier = (scope?: string) => {
    if (scope) setAtelierPrefilledScope(scope);
    setIsAtelierModalOpen(true);
  };

  const handleExploreCollections = () => {
    const el = document.getElementById("collections-exhibition");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleExploreTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <SmoothScrollProvider>
      {/* 1. Desktop Luxury Custom Magnetic Cursor */}
      <CustomCursor />

      {/* 2. Interactive Soft Warm Light Torch Follower */}
      <LightTorchFollower />

      {/* 3. Luxury Floating & Frosted Navigation Bar */}
      <Navbar
        onRequestAccess={() => handleOpenInvitation("Private Collector Allocation")}
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
        ambientMode={ambientMode}
        onToggleAmbient={(mode) => setAmbientMode(mode)}
      />

      {/* 4. Full-Screen Luxury Mobile Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onRequestAccess={() => handleOpenInvitation("Private Mobile Access")}
      />

      <main className="min-h-screen flex flex-col bg-[#050A30]">
        {/* 01. THE ARRIVAL — Cinematic Hero Opening Sequence */}
        <CinematicHero
          onRequestAccess={() => handleOpenInvitation("Cinematic Hero Access")}
          onExploreCollections={handleExploreCollections}
          ambientMode={ambientMode}
        />

        {/* 02. PINNED CINEMATIC STORYTELLING — Pinned 3-Scene Film Sequence */}
        <PinnedStorytelling />

        {/* 03. THE HOUSE — Editorial Chiaroscuro & Asymmetric Composition */}
        <BrandPhilosophy />

        {/* 04. THE GALLERY — Horizontal Product Exhibition (Scroll-Linked) */}
        <HorizontalExhibition
          onRequestInquiry={(categoryTitle) =>
            handleOpenAtelier(`Inquiry: ${categoryTitle}`)
          }
        />

        {/* 05. THE OBJECTS — Signature Sculptural Pieces Showcase */}
        <SignaturePieces
          onRequestAcquisition={(pieceName) =>
            handleOpenInvitation(`Signature Piece Acquisition: ${pieceName}`)
          }
        />

        {/* 06. THE ARCHITECTURE OF LIGHT — Full-Screen Visual Installation */}
        <ArtOfIllumination />

        {/* 07. THE ATELIER — Interactive Material Laboratory */}
        <BespokeAtelier />

        {/* 08. THE PRIVATE ROOM — Exclusive Access & Discretion */}
        <PrivateWorld
          onOpenInvitation={() => handleOpenInvitation("Private World Invitation")}
        />

        {/* 09. THE FAREWELL — Final Cinematic Impression */}
        <FinalCinematic
          onExploreTop={handleExploreTop}
          onRequestAccess={() => handleOpenInvitation("Final Cinematic Inscription")}
        />
      </main>

      {/* 10. LUXURY EDITORIAL FOOTER */}
      <LuxuryFooter
        onRequestAccess={() => handleOpenInvitation("Footer Sanctuary Inscription")}
      />

      {/* Global Interactive Modals */}
      <InvitationModal
        isOpen={isInvitationModalOpen}
        onClose={() => setIsInvitationModalOpen(false)}
        initialInterest={invitationInitialInterest}
      />

      <AtelierInquiryModal
        isOpen={isAtelierModalOpen}
        onClose={() => setIsAtelierModalOpen(false)}
        prefilledScope={atelierPrefilledScope}
      />
    </SmoothScrollProvider>
  );
}
