export interface CollectionCategory {
  id: string;
  number: string;
  frenchTitle: string;
  englishTitle: string;
  subtitle: string;
  description: string;
  architecturalNote: string;
  image: string;
  material: string;
  featuredPiece: string;
}

export interface SignaturePiece {
  id: string;
  name: string;
  edition: string;
  subtitle: string;
  description: string;
  poeticNote: string;
  materials: string[];
  dimensions: string;
  lightSource: string;
  colorTemp: string;
  lumens: string;
  image: string;
  secondaryImage: string;
}

export interface AtelierMaterial {
  id: string;
  name: string;
  frenchName: string;
  origin: string;
  description: string;
  acousticNote: string;
  image: string;
  temperatures: string;
}

export const BRAND = {
  name: "LUMIÈRE PRIVÉE",
  subname: "PARIS",
  tagline: "LIGHT, CURATED IN SILENCE.",
  supportingStatement:
    "An extraordinary relationship between light, space, and emotion.",
  heroHeadline: "BEYOND THE\nORDINARY LIGHT.",
  heroSupporting:
    "Where sculptural design meets the poetry of illumination.",
  houseHeadline: "WE CREATE MORE THAN LIGHT.",
  housePhilosophy: [
    "Every space holds a story. Every shadow creates depth. Every carefully considered source of light transforms the way we experience a place.",
    "Lumière Privée exists at the intersection of art, architecture, and illumination.",
    "Our objects are created not merely to illuminate spaces, but to give them identity.",
  ],
  artOfIlluminationHeadline: "LIGHT IS THE INVISIBLE ARCHITECT.",
  atelierHeadline: "CREATED TO BELONG. DESIGNED TO LAST.",
  atelierIntro:
    "Beyond the collection lies a more personal expression. Our atelier collaborates with architects, designers, collectors, and private clients to develop lighting objects that belong to a space and nowhere else.",
  privateWorldHeadline: "AN INVITATION TO THE EXTRAORDINARY.",
  privateWorldIntro:
    "Discover a world of limited-edition creations, private commissions, and exceptional lighting objects. Access is offered to those who appreciate the extraordinary.",
  finalHeadline: "THE NIGHT BELONGS TO LIGHT.",
  finalStatement: "DISCOVER A DIFFERENT WAY TO EXPERIENCE LIGHT.",
  finalCTA: "ENTER LUMIÈRE PRIVÉE",
};

export const NAV_LINKS = [
  { label: "The House", href: "#house" },
  { label: "Collections", href: "#collections-exhibition" },
  { label: "Signature Objects", href: "#objects" },
  { label: "Architecture", href: "#architecture" },
  { label: "The Atelier", href: "#atelier" },
  { label: "Private Access", href: "#private-access" },
];

export const COLLECTION_CATEGORIES: CollectionCategory[] = [
  {
    id: "suspensions",
    number: "01",
    frenchTitle: "LES SUSPENSIONS",
    englishTitle: "Sculptural Pendant Lighting",
    subtitle: "Suspended equilibrium & celestial brass geometries",
    description:
      "Hovering in architectural voids, each pendant balances artisanal hand-cast brass with ethereal optical diffusers. Designed to draw the eye upwards while gracing intimate surfaces with warm, directional clarity.",
    architecturalNote: "Engineered for vaulted ceilings, sculptural dining salons, and grand residential corridors.",
    image: "/images/eclat_noir.jpg",
    material: "Hand-cast unlacquered brass & mouth-blown glass",
    featuredPiece: "Suspension Astral No. 4",
  },
  {
    id: "lustres",
    number: "02",
    frenchTitle: "LES LUSTRES",
    englishTitle: "Monumental Statement Chandeliers",
    subtitle: "Monumental focal points sculpted for grand architecture",
    description:
      "Redefining the classical chandelier into a dramatic architectural presence. Multi-tiered tiers of patinated bronze and fluted crystal that refract light into hypnotic ambient tapestries.",
    architecturalNote: "Conceived for double-height atriums, historic Parisian salons, and contemporary private galleries.",
    image: "/images/hero_chandelier.jpg",
    material: "Patinated bronze & fluted Bohemian crystal",
    featuredPiece: "Lustre Monumental Phénix",
  },
  {
    id: "appliques",
    number: "03",
    frenchTitle: "LES APPLIQUES",
    englishTitle: "Architectural Wall Illumination",
    subtitle: "Grazing shadows & tactile material relief",
    description:
      "Minimalist silhouettes mounted against raw plaster, travertine, or fluted walnut. The applique becomes one with the wall plane, casting soft indirect arcs that celebrate textural authenticity.",
    architecturalNote: "Ideal for gallery corridors, master alcoves, and bespoke panelled libraries.",
    image: "/images/oree.jpg",
    material: "Spanish alabaster & brushed antique brass",
    featuredPiece: "Applique Éclipse Calcaire",
  },
  {
    id: "lampadaires",
    number: "04",
    frenchTitle: "LES LAMPADAIRES",
    englishTitle: "Sculptural Floor Lighting",
    subtitle: "Freestanding monoliths of bronze, travertine & stone",
    description:
      "Assertive vertical sculptures that command stillness in open spaces. Grounded by hand-chiselled stone plinths and slender brushed brass stems that terminate in subtle ambient lanterns.",
    architecturalNote: "Designed for reading sanctuaries, executive salons, and dramatic architectural corners.",
    image: "/images/silence_dor.jpg",
    material: "Chiselled travertine & blackened steel",
    featuredPiece: "Lampadaire Monolithe Noir",
  },
  {
    id: "objets-lumineux",
    number: "05",
    frenchTitle: "LES OBJETS LUMINEUX",
    englishTitle: "Limited-Edition Artistic Objects",
    subtitle: "Luminous sculptures & tactile treasures",
    description:
      "Objects that blur the boundary between fine art sculpture and ambient illumination. Intimate table beacons, glowing alabaster orbs, and cast-bronze light talismans.",
    architecturalNote: "Created for custom credenzas, private collector pedestals, and fireside retreats.",
    image: "/images/atelier_craft.jpg",
    material: "Smoked Murano glass & molten brass core",
    featuredPiece: "Objet d'Art Nébuleuse",
  },
  {
    id: "creations-sur-mesure",
    number: "06",
    frenchTitle: "LES CRÉATIONS SUR MESURE",
    englishTitle: "Bespoke Lighting Commissions",
    subtitle: "One-of-a-kind architectural installations",
    description:
      "Site-specific masterworks engineered in direct dialogue with premier architects. Every joint, finish, and luminance profile is custom-cast to honor the unique soul of the space.",
    architecturalNote: "Tailored exclusively for private estates, sovereign residences, and landmark penthouses.",
    image: "/images/linfini.jpg",
    material: "Custom alloy casting & photometric waveguides",
    featuredPiece: "Installation Ondulation No. 01",
  },
];

export const SIGNATURE_PIECES: SignaturePiece[] = [
  {
    id: "eclat-noir",
    name: "ÉCLAT NOIR",
    edition: "ÉDITION LIMITÉE — 01/25",
    subtitle: "Sculptural pendant fixture in patinated dark bronze & smoked glass",
    description:
      "A sculptural expression of light and shadow, defined by restrained geometry and warm metallic reflections. The dark smoked hand-blown glass globe captures an internal core of incandescent amber, filtering a warm, hypnotic glow across architectural stone.",
    poeticNote:
      "Shadow is not the absence of light, but its most profound companion.",
    materials: [
      "Deep Patinated Bronze",
      "Mouth-blown Smoked Murano Glass",
      "Brushed Antique Brass Accents",
      "Hand-turned Walnut Core",
    ],
    dimensions: "H 112 cm × W 48 cm × D 38 cm",
    lightSource: "Integrated Dim-to-Warm Architectural LED Array",
    colorTemp: "2200K – 2800K Continuous Dimming",
    lumens: "2,400 lm (Calibrated glare-free diffuse)",
    image: "/images/eclat_noir.jpg",
    secondaryImage: "/images/hero_chandelier.jpg",
  },
  {
    id: "oree",
    name: "ORÉE",
    edition: "ÉDITION LIMITÉE — 04/18",
    subtitle: "Suspended circular luminary in hammered champagne brass & alabaster",
    description:
      "A celestial ring of indirect radiance that suspends time. Hammered champagne brass creates thousands of micro-reflections, whilst raw Spanish alabaster diffuses light with organic geological veins.",
    poeticNote:
      "Suspended like a twilight horizon across silent architectural space.",
    materials: [
      "Hammered Champagne Brass",
      "Selected Spanish Alabaster Vein",
      "Raw Travertine Ceiling Canopy",
      "Fine Braided Silk Cord",
    ],
    dimensions: "Ø 140 cm × Depth 8 cm",
    lightSource: "Circumferential Indirect Organic LED Ribbon",
    colorTemp: "2400K Candlelight Halo",
    lumens: "3,800 lm (Indirect architectural perimeter)",
    image: "/images/oree.jpg",
    secondaryImage: "/images/linfini.jpg",
  },
  {
    id: "silence-dor",
    name: "SILENCE D'OR",
    edition: "ÉDITION LIMITÉE — 02/12",
    subtitle: "Monolithic architectural luminaire in smoked walnut & aged gold leaf",
    description:
      "Monolithic architectural presence meeting whisper-soft illumination through fluted crystal. Gilded interior reflectors apply 24k gold leaf leafing techniques preserved from 18th-century French ateliers.",
    poeticNote:
      "Where golden silence speaks directly to the soul of the room.",
    materials: [
      "Aged 24K Hand-applied Gold Leaf",
      "Solid Smoked French Walnut",
      "Fluted Bohemian Optical Crystal",
      "Blackened Steel Substructure",
    ],
    dimensions: "H 185 cm × W 32 cm × D 32 cm",
    lightSource: "Dual-Chamber Balanced Luminescent Pillar",
    colorTemp: "2100K Nocturne Atelier Glow",
    lumens: "1,950 lm (Pure relaxation ambiance)",
    image: "/images/silence_dor.jpg",
    secondaryImage: "/images/house_editorial.jpg",
  },
  {
    id: "linfini",
    name: "L'INFINI",
    edition: "ÉDITION LIMITÉE — 07/15",
    subtitle: "Continuous sculptural brass ribbon chandelier with optical waveguides",
    description:
      "An intertwined continuum of hand-formed brass ribbons capturing and refracting architectural twilight. Without beginning or end, the ribbon guides light fluidly through the room, sculpting negative space into tangible poetry.",
    poeticNote:
      "An endless ribbon of twilight frozen into brass and luminescence.",
    materials: [
      "Mirror-polished Architectural Brass Alloy",
      "Precision Sateen Diffuser Core",
      "Blackened Titanium Rigging Cables",
      "Gold-dusted Resonant Chamber",
    ],
    dimensions: "L 220 cm × W 85 cm × H 65 cm",
    lightSource: "Continuous Solid-State Light Waveguide",
    colorTemp: "2600K Golden Dusk Warmth",
    lumens: "4,200 lm (Fully tunable architectural lumen)",
    image: "/images/linfini.jpg",
    secondaryImage: "/images/oree.jpg",
  },
];

export const ATELIER_MATERIALS: AtelierMaterial[] = [
  {
    id: "brass",
    name: "Antique Patinated Brass",
    frenchName: "Laiton Patiné aux Minéraux",
    origin: "Atelier Paris VIII, France",
    description:
      "Solid architectural brass immersed in organic sulfur and natural mineral baths, then hand-buffed with sateen wax. The surface develops a living patina that deepens with ambient light and touch.",
    acousticNote: "Resonant warmth with specular micro-reflections",
    image: "/images/atelier_craft.jpg",
    temperatures: "Optimized for 2200K – 2600K amber glow",
  },
  {
    id: "alabaster",
    name: "Aragonese Veined Alabaster",
    frenchName: "Albâtre Translucide d'Aragon",
    origin: "Ebro Valley, Spain",
    description:
      "Quarried in subterranean Iberian caverns, each slab is hand-turned to sub-millimeter tolerances. When backlit, natural calcium sulfate mineral veins create ethereal geological cartography.",
    acousticNote: "Diffuses glare into velvety ambient luminescence",
    image: "/images/oree.jpg",
    temperatures: "Optimized for 2400K organic candlelight",
  },
  {
    id: "glass",
    name: "Smoked Murano Crystal",
    frenchName: "Verre Fumé Soufflé à la Bouche",
    origin: "Murano Island, Venice",
    description:
      "Mouth-blown into wooden pear-tree molds by master glassmakers. The smoky mineral gradation captures light internally, ensuring zero glare even at peak architectural luminance.",
    acousticNote: "Fluted optical refraction with subtle chiaroscuro",
    image: "/images/eclat_noir.jpg",
    temperatures: "Optimized for 2100K – 2700K twilight diffusion",
  },
  {
    id: "gold",
    name: "Aged 24K Hand-Applied Gold Leaf",
    frenchName: "Feuille d'Or 24 Carats Patinée",
    origin: "Lyon Gilding Workshops",
    description:
      "Beaten by hand to 0.1 microns, gold leaf is affixed with natural animal hide glue over red bole clay. Reflects warm rays with historic luminescence reminiscent of historic royal salons.",
    acousticNote: "Hyper-warm spectral reflection with zero blue-light",
    image: "/images/silence_dor.jpg",
    temperatures: "Optimized for 2000K – 2400K nocturnal warmth",
  },
  {
    id: "walnut",
    name: "Smoked French Walnut",
    frenchName: "Noyer Français Fumé & Huilé",
    origin: "Périgord Forests, France",
    description:
      "Sustainably harvested century-old walnut, vacuum-fumed with ammonia vapors to darken heartwood to rich charcoal-espresso tones, then sealed with organic cold-pressed walnut oil.",
    acousticNote: "Tactile acoustic absorption for serene spaces",
    image: "/images/house_editorial.jpg",
    temperatures: "Complements dark marble and antique bronze",
  },
];

export const PRIVATE_BENEFITS = [
  {
    number: "01",
    title: "Private Collection Previews",
    desc: "First access to view and reserve upcoming studio creations prior to private release.",
  },
  {
    number: "02",
    title: "Exclusive Design Releases",
    desc: "Invitations to numbered limited editions reserved strictly for registered private patrons and accredited architects.",
  },
  {
    number: "03",
    title: "Private Atelier Consultations",
    desc: "Direct creative access to our design studio and master metalsmiths in Paris VIII.",
  },
  {
    number: "04",
    title: "Archival Collection Dossier",
    desc: "A bespoke digital dossier and archival collection catalogue delivered directly to your sanctum.",
  },
];
