"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2, SlidersHorizontal, Sparkles } from "lucide-react";
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
    id: "blush-nordic",
    name: "Blush Rose & Nordic Sky",
    badge: "Livspace Signature",
    description: "Iconic Livspace blush crimson paired with airy Scandinavian sky blue, natural light oak louvers, and warm ambient backlighting for joyful living.",
    image: "/hero-funky-living.jpg",
    roomTag: "Living & Entertainment Lounge",
    palette: [
      { name: "Livspace Pink", hex: "#E72E5A", role: "Primary Accent Wall" },
      { name: "Nordic Sky Blue", hex: "#1B5CEB", role: "Lounge Armchair & Pillows" },
      { name: "Pure Cotton White", hex: "#FFFFFF", role: "Base Canvas & Ceiling" },
      { name: "Natural Ash Oak", hex: "#D4B996", role: "Acoustic Wall Fluting" },
      { name: "Soft Blush Rose", hex: "#FFF0F3", role: "Pendant Light Accents" },
    ],
    elements: [
      "Color-blocked feature surfaces with signature Livspace crimson accents",
      "Custom velvet lounge upholstery in Nordic electric blue",
      "Concealed 3000K soft warm LED cove lighting profiles",
      "Bespoke geometric area rugs with balanced pink-and-blue harmony",
    ],
  },
  {
    id: "sage-biophilic",
    name: "Sage & Biophilic Eucalyptus",
    badge: "Eco-Luxe Biophilic",
    description: "Botanical sage green cabinetry paired with deep emerald velvet, natural light oak fluting, indoor planter alcoves, and brushed brass details for calming nature-infused rejuvenation.",
    image: "/kitchen-island.jpg",
    roomTag: "Botanical Kitchen & Living Nook",
    palette: [
      { name: "Botanical Sage", hex: "#059669", role: "Primary Shutter Finishes" },
      { name: "Forest Emerald", hex: "#065F46", role: "Velvet Lounge Textiles" },
      { name: "Crisp Pure White", hex: "#FFFFFF", role: "Quartz Island Countertop" },
      { name: "Soft Sage Mint", hex: "#ECFDF5", role: "Perimeter LED Cove" },
      { name: "Brushed Brass", hex: "#D4AF37", role: "Hardware Profiles & Knobs" },
    ],
    elements: [
      "Zero-formaldehyde eco-certified BWP marine ply with low-VOC waterborne PU finishes",
      "Integrated planter alcoves with drainage channels for air-purifying indoor greenery",
      "Anti-fingerprint matte sage acrylic shutters with Blum soft-close Aventos lift-ups",
      "Acoustic fluted eucalyptus timber panels behind living & dining feature zones",
    ],
  },
  {
    id: "ocean-coastal",
    name: "Ocean Cobalt & Coastal White",
    badge: "Modern Minimalist",
    description: "Deep oceanic cobalt cabinetry paired with pure white quartz waterfall counters, knurled chrome handles, and anti-scratch acrylic finishes.",
    image: "/kitchen-island.jpg",
    roomTag: "Modular Kitchen Architecture",
    palette: [
      { name: "Ocean Cobalt", hex: "#1B5CEB", role: "Base Cabinet Shutters" },
      { name: "Crisp Pure White", hex: "#FFFFFF", role: "Waterfall Countertop" },
      { name: "Rose Quartz Tint", hex: "#FF4D79", role: "Backsplash LED Profile" },
      { name: "Ice Blue Tint", hex: "#EEF4FF", role: "Overhead Cabinets" },
      { name: "Smoked Fluted Glass", hex: "#64748B", role: "Blum Lift-Up Doors" },
    ],
    elements: [
      "IS 710 Boiling Water Proof marine ply framework with anti-termite sealant",
      "German Blum soft-close Aventos lift-up mechanisms",
      "Concealed pantry larder with chrome wire basket organizers",
      "Stain-proof, heat-resistant pure white quartz island countertop",
    ],
  },
  {
    id: "coral-slate",
    name: "Coral Charm & Slate Modern",
    badge: "Contemporary Suite",
    description: "Vibrant coral pink feature accents blended with slate navy wall paneling, tinted glass sliding wardrobes, and sensor profile illumination.",
    image: "/hero-bedroom.jpg",
    roomTag: "Master Bedroom & Closets",
    palette: [
      { name: "Coral Crimson", hex: "#E72E5A", role: "Velvet Bed Textiles" },
      { name: "Slate Navy", hex: "#0F172A", role: "Headboard Accent Wall" },
      { name: "Electric Blue Rod", hex: "#3B82F6", role: "Sensor LED Wardrobe" },
      { name: "Carrara Marble", hex: "#F8FAFC", role: "Floating Nightstand" },
      { name: "Soft Pink Glow", hex: "#FFF0F3", role: "Perimeter False Ceiling" },
    ],
    elements: [
      "Floor-to-ceiling profile sliding wardrobe with sensor lighting",
      "Padded acoustic headboard wall spanning queen/king dimensions",
      "Floating bedside consoles with integrated wireless phone charger",
      "Indirect perimeter cove lighting with mood dimming controls",
    ],
  },
  {
    id: "vastu-mandir",
    name: "Sacred Makrana & Saffron Sanctum",
    badge: "100% Vastu Aligned",
    description: "Makrana white marble platform, hand-carved teakwood pillars, warm illumination, and backlit Om & Gayatri mantra CNC screens in North-East Ishanya zone.",
    image: "/pooja-mandir.jpg",
    roomTag: "Ishanya (North-East) Vastu Sanctum",
    palette: [
      { name: "Makrana White", hex: "#F8FAFC", role: "Marble Platform & Idol" },
      { name: "Rose Gold Brass", hex: "#E72E5A", role: "Backlit Bell Accents" },
      { name: "Royal Sapphire", hex: "#1B5CEB", role: "Velvet Puja Asana" },
      { name: "Seasoned Teakwood", hex: "#8B5A2B", role: "Carved Mandir Pillars" },
      { name: "Golden Aura 3000K", hex: "#F59E0B", role: "Concealed Sanctum LED" },
    ],
    elements: [
      "100% Vastu Shastra aligned with exact Ishanya (North-East) placement",
      "Pristine Makrana white marble altar platform with brass inlays",
      "Precision laser CNC cut backlit Gayatri Mantra decorative screen",
      "Integrated pull-out Prasad preparation trays and brass diya holders",
    ],
  },
];

export default function ColorVibeMoodboard() {
  const [selectedVibe, setSelectedVibe] = useState<string>("blush-nordic");
  const current = VIBES.find((v) => v.id === selectedVibe) || VIBES[0];

  return (
    <section className="classy-vibe-section" id="moodboard">
      <div className="container">
        <div className="classy-section-header">
          <div className="structured-step-badge">
            <span className="structured-step-num green">03</span>
            <span className="structured-step-text">Material &amp; Color Direction</span>
          </div>
          <h2 className="classy-section-title">
            Architectural Palettes &amp; <span className="classy-gold-text">Material Moods</span>
          </h2>
          <p className="classy-section-desc">
            Move beyond generic monotone palettes. Explore curated architectural directions crafted to bring warmth, texture, and character into your home.
          </p>

          <div className="classy-tabs-row">
            {VIBES.map((v) => (
              <button
                key={v.id}
                onClick={() => setSelectedVibe(v.id)}
                className={`classy-tab-pill ${selectedVibe === v.id ? "active" : ""}`}
              >
                {v.name}
              </button>
            ))}
          </div>
        </div>

        <div className="classy-vibe-frame">
          <div className="classy-vibe-grid">
            {/* Visual Column */}
            <div className="classy-vibe-media">
              <div className="classy-vibe-img-wrap">
                <Image
                  src={current.image}
                  alt={current.name}
                  fill
                  sizes="(max-width: 992px) 100vw, 50vw"
                  className="classy-vibe-img"
                  style={{ objectFit: "cover" }}
                />
                <div className="classy-vibe-room-tag">
                  <span>{current.roomTag}</span>
                </div>
              </div>
            </div>

            {/* Spec Column */}
            <div className="classy-vibe-info">
              <span className="classy-vibe-badge">{current.badge}</span>
              <h3 className="classy-vibe-heading">{current.name}</h3>
              <p className="classy-vibe-copy">{current.description}</p>

              {/* Swatches */}
              <div className="classy-swatches-box">
                <div className="classy-swatches-title">
                  <SlidersHorizontal size={14} strokeWidth={2} color="var(--liv-pink)" />
                  <span>Curated Color Palette:</span>
                </div>
                <div className="classy-swatches-list">
                  {current.palette.map((swatch, idx) => (
                    <div key={idx} className="classy-swatch-item">
                      <div
                        className="classy-swatch-circle"
                        style={{ background: swatch.hex }}
                        title={`${swatch.name} (${swatch.hex})`}
                      />
                      <div className="classy-swatch-labels">
                        <span className="swatch-name">{swatch.name}</span>
                        <span className="swatch-role">{swatch.role}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Architectural features */}
              <div className="classy-features-list">
                {current.elements.map((elem, idx) => (
                  <div key={idx} className="classy-feature-row">
                    <CheckCircle2 size={15} strokeWidth={2} color="var(--liv-blue)" />
                    <span>{elem}</span>
                  </div>
                ))}
              </div>

              <div className="classy-vibe-cta">
                <a
                  href={`https://wa.me/919391356077?text=Hello%20MVVR%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(current.name)}%20palette%20for%20my%20home.%20Can%20we%20schedule%20a%20consultation%3F`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ padding: "14px 28px" }}
                >
                  <WhatsAppIcon size={16} />
                  <span>Consult in This Aesthetic</span>
                  <ArrowRight size={14} strokeWidth={2.2} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
