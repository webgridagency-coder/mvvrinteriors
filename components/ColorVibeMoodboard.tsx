"use client";

import { useState } from "react";
import Image from "next/image";
import { Sparkles, Palette, ArrowRight, CheckCircle2, SlidersHorizontal } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

interface VibeTheme {
  id: string;
  name: string;
  badge: string;
  description: string;
  image: string;
  roomTag: string;
  palette: { name: string; hex: string; role: string }[];
  elements: string[];
}

const VIBES: VibeTheme[] = [
  {
    id: "funky-pop",
    name: "Funky Memphis & Pop Eclectic",
    badge: "🔥 Client Favorite · High Energy",
    description: "Bold color-blocked walls, playful mustard velvet seating, geometric statement rugs, and modern art niches designed for vibrant modern living.",
    image: "/hero-funky-living.jpg",
    roomTag: "Vibrant Living & Entertainment Lounge",
    palette: [
      { name: "Terracotta Coral", hex: "#FF5436", role: "Accent Feature Wall" },
      { name: "Canary Mustard", hex: "#EAB308", role: "Velvet Lounge Sofa" },
      { name: "Emerald Plant", hex: "#10B981", role: "Indoor Botanical Nook" },
      { name: "Electric Cobalt", hex: "#2563EB", role: "Geometric Rug Accent" },
      { name: "Fluted Oak", hex: "#D4A373", role: "Acoustic Wood Louver" },
    ],
    elements: [
      "Color-blocked feature walls with 3000K warm downlights",
      "Custom velvet upholstery in punchy mustard & emerald",
      "Archway doorways with concealed LED strip trims",
      "Geometric rugs with multi-color Livspace flair",
    ],
  },
  {
    id: "sage-kitchen",
    name: "Fresh Sage & Mint Modular Luxe",
    badge: "🌿 Most Requested Modular Style",
    description: "Serene pastel mint cabinetry paired with warm brass hardware, quartz waterfall breakfast islands, and anti-scratch acrylic finishes.",
    image: "/kitchen-island.jpg",
    roomTag: "Modular Kitchen & Breakfast Bar",
    palette: [
      { name: "Sage Mint", hex: "#10B981", role: "Acrylic Base Shutters" },
      { name: "Onyx Quartz", hex: "#1E293B", role: "Waterfall Countertop" },
      { name: "Champagne Brass", hex: "#D4AF37", role: "Knurled Pull Handles" },
      { name: "Warm Ivory", hex: "#FFFBEB", role: "Backlit Overhead Cabinets" },
      { name: "Smoked Glass", hex: "#64748B", role: "Blum Fluted Lift-Up" },
    ],
    elements: [
      "IS 710 Boiling Water Proof marine ply carcass",
      "German Blum soft-close Aventos lift-up cabinets",
      "Integrated pull-out pantry with wire baskets & spice racks",
      "Quartz countertop with stain & heat resistant guarantee",
    ],
  },
  {
    id: "royal-bedroom",
    name: "Royal Indigo & Blush Master Suite",
    badge: "👑 5-Star Boutique Hotel Comfort",
    description: "Deep cobalt feature wall, plush blush pink textiles, floor-to-ceiling tinted profile glass sliding wardrobes, and acoustic fluted headboards.",
    image: "/hero-bedroom.jpg",
    roomTag: "Master Bedroom & Walk-in Dressing",
    palette: [
      { name: "Royal Cobalt", hex: "#1D4ED8", role: "Fluted Headboard Nook" },
      { name: "Blush Mauve", hex: "#F472B6", role: "Plush Bed Linen & Cushions" },
      { name: "Bronze Tint Glass", hex: "#78350F", role: "Sliding Wardrobe Shutters" },
      { name: "Brushed Gold", hex: "#CA8A04", role: "Sensor LED Profile Rods" },
      { name: "Warm Alabaster", hex: "#F8FAFC", role: "Acoustic Drop Ceiling" },
    ],
    elements: [
      "Floor-to-ceiling sliding wardrobe with sensor LED lighting",
      "Padded acoustic headboard wall spanning queen/king dimensions",
      "Floating bedside consoles with concealed wireless charging",
      "Indirect perimeter cove lighting with mood dimming",
    ],
  },
  {
    id: "vastu-mandir",
    name: "Sacred Saffron & Makrana Sanctum",
    badge: "🪔 100% Vastu Shastra Aligned",
    description: "Makrana white marble platform, hand-carved teakwood pillars, warm marigold illumination, and backlit Om & Gayatri mantra CNC screens.",
    image: "/pooja-mandir.jpg",
    roomTag: "Ishanya (North-East) Vastu Pooja Room",
    palette: [
      { name: "Makrana Marble", hex: "#FFFFFF", role: "Sacred Sanctum Base" },
      { name: "Radiant Marigold", hex: "#D97706", role: "Backlit Glow & Bells" },
      { name: "Burnt Teak", hex: "#78350F", role: "Handcrafted Jali Screen" },
      { name: "Temple Brass", hex: "#CA8A04", role: "Hanging Bells & Diyas" },
      { name: "Sandal Cream", hex: "#FEF3C7", role: "Stone Texture Wall" },
    ],
    elements: [
      "Strict North-East orientation aligned for peace and prosperity",
      "Backlit CNC laser cut panels with custom spiritual motifs",
      "Solid seasoned teakwood drawer units for pooja samagri",
      "Integrated brass bell hanging hooks with brass-chain suspension",
    ],
  },
];

export default function ColorVibeMoodboard() {
  const [selectedVibe, setSelectedVibe] = useState<string>("funky-pop");
  const current = VIBES.find((v) => v.id === selectedVibe) || VIBES[0];

  return (
    <section className="color-vibe-section" id="moodboard">
      <div className="container">
        <div className="color-vibe-header">
          <div className="funky-pill-tag" style={{ background: "#EFF6FF", borderColor: "#BFDBFE", color: "#1D4ED8" }}>
            <Palette size={14} />
            <span>INTERACTIVE PALETTE EXPLORER</span>
          </div>
          <h2 className="color-vibe-title">
            Pick Your Vibe &amp; <span className="text-gradient-funky">Color Mood</span>
          </h2>
          <p className="color-vibe-desc">
            Move beyond boring beige. Tap through 4 curated signature aesthetics created by MVVR architects to discover the perfect color story for your lifestyle.
          </p>

          {/* Vibe Selection Tabs */}
          <div className="vibe-tabs-row">
            {VIBES.map((v) => (
              <button
                key={v.id}
                onClick={() => setSelectedVibe(v.id)}
                className={`vibe-tab-chip ${selectedVibe === v.id ? "active" : ""}`}
              >
                <span>{v.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Vibe Showcase Container */}
        <div className="vibe-showcase-card">
          <div className="vibe-showcase-grid">
            {/* Left: Room Visual */}
            <div className="vibe-image-col">
              <div className="vibe-image-wrap">
                <Image
                  src={current.image}
                  alt={current.name}
                  fill
                  sizes="(max-width: 992px) 100vw, 50vw"
                  className="vibe-showcase-img"
                  style={{ objectFit: "cover" }}
                />
                <div className="vibe-image-tag">
                  <span>{current.roomTag}</span>
                </div>
              </div>
            </div>

            {/* Right: Palette & Details */}
            <div className="vibe-details-col">
              <span className="vibe-badge-pill">{current.badge}</span>
              <h3 className="vibe-selected-name">{current.name}</h3>
              <p className="vibe-selected-desc">{current.description}</p>

              {/* Color Swatches Grid */}
              <div className="vibe-palette-block">
                <div className="vibe-palette-label">
                  <SlidersHorizontal size={13} />
                  <span>Curated Color Story ({current.palette.length} Shades):</span>
                </div>
                <div className="vibe-swatches-grid">
                  {current.palette.map((swatch, idx) => (
                    <div key={idx} className="vibe-swatch-item">
                      <div
                        className="vibe-swatch-circle"
                        style={{ background: swatch.hex }}
                        title={`${swatch.name} (${swatch.hex})`}
                      />
                      <div className="vibe-swatch-info">
                        <span className="swatch-name">{swatch.name}</span>
                        <span className="swatch-role">{swatch.role}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Architectural Elements */}
              <div className="vibe-elements-list">
                {current.elements.map((elem, idx) => (
                  <div key={idx} className="vibe-element-item">
                    <CheckCircle2 size={15} color="#10B981" />
                    <span>{elem}</span>
                  </div>
                ))}
              </div>

              {/* CTA Action */}
              <div className="vibe-actions">
                <a
                  href={`https://wa.me/919391356077?text=Hello%20MVVR%2C%20I%20love%20the%20${encodeURIComponent(current.name)}%20color%20palette.%20Can%20we%20design%20my%20home%20with%20this%20vibe%3F`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-vibe-quote"
                >
                  <WhatsAppIcon size={16} />
                  <span>Design My Home In This Palette</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
