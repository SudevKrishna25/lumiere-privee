import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lumière Privée — The Art of Private Illumination | Official Flagship",
  description:
    "An exclusive, invitation-only designer lighting house. Sculptural illumination, limited-edition collections, and bespoke architectural light experiences.",
  keywords: [
    "Lumière Privée",
    "luxury lighting",
    "architectural illumination",
    "sculptural chandeliers",
    "bespoke lighting atelier",
    "limited edition lighting",
  ],
  openGraph: {
    title: "Lumière Privée — The Art of Private Illumination",
    description: "Light, Curated in Silence. Limited-edition sculptural illumination for spaces beyond the ordinary.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${manrope.variable} h-full antialiased selection:bg-[#785D32] selection:text-[#E8D9C4]`}
    >
      <body className="min-h-full flex flex-col bg-[#050A30] text-[#E8D9C4] font-sans overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
