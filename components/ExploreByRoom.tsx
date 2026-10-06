"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChefHat, Sofa, BedDouble, Flame, Sparkles,
  ArrowRight, Shield, Check, Heart, ExternalLink
} from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

export interface RoomItem {
  id: string;
  category: "all" | "kitchen" | "living" | "bedroom" | "pooja" | "kids" | "dining";
  title: string;
  tagline: string;
  startingPrice: string;
  colorTheme: {
    accent: string;
    bgPill: string;
    border: string;
    badgeText: string;
  };
  features: string[];
  image: string;
  warranty: string;
}

const ROOM_ITEMS: RoomItem[] = [
  {
    id: "kitchen-mint",
    category: "kitchen",
    title: "Vibrant Sage & Island Modular Kitchen",
    tagline: "German Blum lift-ups, quartz waterfall breakfast counter & anti-fingerprint acrylic.",
    startingPrice: "₹1.75 Lakh",
    colorTheme: {
      accent: "#059669",
      bgPill: "#ECFDF5",
      border: "#A7F3D0",
      badgeText: "#065F46",
    },
    features: ["Boiling Water Proof BWP Marine Ply", "Soft-Close Blum Aventos Lift-Ups", "Anti-Scratch Acrylic & Quartz"],
    image: "/kitchen-island.jpg",
    warranty: "10-Yr Warranty",
  },
  {
    id: "living-funky",
    category: "living",
    title: "Funky Terracotta & Ochre Living Lounge",
    tagline: "Mustard velvet couch, coral feature wall, acoustic louvers & floating media unit.",
    startingPrice: "₹1.45 Lakh",
    colorTheme: {
      accent: "#FF5436",
      bgPill: "#FFF4F0",
      border: "#FECACA",
      badgeText: "#991B1B",
    },
    features: ["Acoustic Fluted Wall Paneling", "Concealed 3000K Warm LED Cove", "Italian Marble Feature Nook"],
    image: "/hero-funky-living.jpg",
    warranty: "10-Yr Warranty",
  },
  {
    id: "bedroom-indigo",
    category: "bedroom",
    title: "Royal Indigo & Blush Master Suite",
    tagline: "Floor-to-ceiling tinted glass sliding wardrobe, sensor lighting & acoustic headboard.",
    startingPrice: "₹1.35 Lakh",
    colorTheme: {
      accent: "#2563EB",
      bgPill: "#EFF6FF",
      border: "#BFDBFE",
      badgeText: "#1E40AF",
    },
    features: ["Profile Tinted Glass Sliding Wardrobe", "Integrated Sensor LED Hanger Rods", "Acoustic Fabric Padded Headboard"],
    image: "/hero-bedroom.jpg",
    warranty: "10-Yr Warranty",
  },
  {
    id: "pooja-gold",
    category: "pooja",
    title: "Sacred Makrana Marble Pooja Mandir",
    tagline: "100% Vastu-aligned North-East sanctum with backlit CNC jali and carved teakwood pillars.",
    startingPrice: "₹65,000",
    colorTheme: {
      accent: "#D97706",
      bgPill: "#FEF3C7",
      border: "#FDE68A",
      badgeText: "#92400E",
    },
    features: ["100% Vastu Shastra Aligned", "Makrana White Marble Altar", "Backlit Om / Gayatri CNC Jali"],
    image: "/pooja-mandir.jpg",
    warranty: "Lifetime Wood Quality",
  },
  {
    id: "villa-living",
    category: "living",
    title: "Double-Height Grand Foyer & Villa Lounge",
    tagline: "Architectural staircase illumination, panoramic glass, and custom bar lounge.",
    startingPrice: "₹2.20 Lakh",
    colorTheme: {
      accent: "#7C3AED",
      bgPill: "#F5F3FF",
      border: "#DDD6FE",
      badgeText: "#5B21B6",
    },
    features: ["Double-Height Chandelier Ceiling", "Custom Hidden Bar Cabinet", "High-End Veneer & PU Polish"],
    image: "/foyer-living.jpg",
    warranty: "10-Yr Warranty",
  },
  {
    id: "wardrobe-suite",
    category: "bedroom",
    title: "Walk-In Dressing Suite & Island Vanity",
    tagline: "Jewelry pullouts, bronze mirror shutters, and perimeter illuminated dressing table.",
    startingPrice: "₹1.15 Lakh",
    colorTheme: {
      accent: "#DB2777",
      bgPill: "#FDF2F8",
      border: "#FBCFE8",
      badgeText: "#9D174D",
    },
    features: ["Velvet Lined Accessory Drawers", "Soft-Close Telescopic Sliders", "Full-Length Backlit Vanity Mirror"],
    image: "/portfolio-wardrobe.jpg",
    warranty: "10-Yr Warranty",
  },
];

const CATEGORIES = [
  { id: "all", label: "All Spaces" },
  { id: "kitchen", label: "🍳 Modular Kitchens" },
  { id: "living", label: "🛋️ Living & TV Units" },
  { id: "bedroom", label: "🛏️ Bedrooms & Closets" },
  { id: "pooja", label: "🪔 Vastu Pooja Mandir" },
];

export default function ExploreByRoom() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filtered = activeTab === "all"
    ? ROOM_ITEMS
    : ROOM_ITEMS.filter((item) => item.category === activeTab);

  return (
    <section className="explore-by-room-section" id="explore-rooms">
      <div className="container">
        {/* Section Header with Livspace-style funky punch */}
        <div className="explore-header-center">
          <div className="funky-pill-tag">
            <Sparkles size={14} />
            <span>EXPLORE BY ROOM · LIVSPACE STYLE</span>
          </div>
          <h2 className="explore-main-title">
            Colorful, Tailor-Made Interiors For <span className="text-gradient-funky">Every Corner</span> Of Your Home
          </h2>
          <p className="explore-sub-title">
            No cookie-cutter packages. Pick individual rooms or combine them with factory-direct pricing, 45-day guaranteed handover, and 10-year BWP warranty.
          </p>

          {/* Filter Tabs */}
          <div className="explore-tabs-scroll">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`explore-tab-btn ${activeTab === cat.id ? "active" : ""}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Room Grid */}
        <div className="explore-rooms-grid">
          {filtered.map((room) => {
            const theme = room.colorTheme;
            return (
              <div
                key={room.id}
                className="explore-room-card"
                style={{ borderColor: theme.border }}
              >
                {/* Image Container */}
                <div className="explore-card-img-wrap">
                  <Image
                    src={room.image}
                    alt={room.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="explore-card-img"
                    style={{ objectFit: "cover" }}
                  />

                  {/* Top Left Price Chip */}
                  <div
                    className="explore-price-chip"
                    style={{
                      background: theme.accent,
                      color: "#FFFFFF",
                    }}
                  >
                    <span>Starts {room.startingPrice}</span>
                  </div>

                  {/* Top Right Warranty Pill */}
                  <div className="explore-warranty-pill">
                    <Shield size={12} color={theme.accent} />
                    <span>{room.warranty}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="explore-card-body">
                  <h3 className="explore-card-title">{room.title}</h3>
                  <p className="explore-card-tagline">{room.tagline}</p>

                  {/* Features list */}
                  <div className="explore-card-features">
                    {room.features.map((feat, idx) => (
                      <div key={idx} className="explore-feature-item">
                        <Check size={13} color={theme.accent} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="explore-card-actions">
                    <a
                      href={`https://wa.me/919391356077?text=Hello%20MVVR%2C%20I%20am%20interested%20in%20${encodeURIComponent(room.title)}%20(${room.startingPrice}).%20Please%20share%203D%20catalog.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-room-whatsapp"
                      style={{
                        background: theme.bgPill,
                        color: theme.badgeText,
                        borderColor: theme.border,
                      }}
                    >
                      <WhatsAppIcon size={14} />
                      <span>Get Room Quote</span>
                    </a>
                    <Link
                      href="/pricing"
                      className="btn-room-details"
                      style={{ color: theme.accent }}
                    >
                      <span>Custom Cost</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
