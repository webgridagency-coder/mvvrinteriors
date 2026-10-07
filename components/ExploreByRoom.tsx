"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Shield, Leaf } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

export interface RoomItem {
  id: string;
  category: "all" | "kitchen" | "living" | "bedroom" | "pooja";
  title: string;
  tagline: string;
  startingPrice: string;
  features: string[];
  image: string;
  warranty: string;
}

const ROOM_ITEMS: RoomItem[] = [
  {
    id: "kitchen-mint",
    category: "kitchen",
    title: "Quartz Island & Sage Modular Kitchen",
    tagline: "German Blum Aventos lift-ups, quartz waterfall breakfast counter & anti-fingerprint acrylic.",
    startingPrice: "₹1.75 Lakh",
    features: ["IS 710 BWP Marine Ply Carcass", "Soft-Close Blum Aventos Lift-Ups", "Anti-Scratch Acrylic Shutters"],
    image: "/kitchen-island.jpg",
    warranty: "10-Yr BWP Warranty",
  },
  {
    id: "living-funky",
    category: "living",
    title: "Terracotta & Velvet Living Lounge",
    tagline: "Mustard velvet upholstery, warm terracotta feature wall, acoustic louvers & floating media unit.",
    startingPrice: "₹1.45 Lakh",
    features: ["Acoustic Fluted Wall Paneling", "Concealed 3000K Warm LED Cove", "Italian Marble TV Media Nook"],
    image: "/hero-funky-living.jpg",
    warranty: "10-Yr Warranty",
  },
  {
    id: "bedroom-indigo",
    category: "bedroom",
    title: "Royal Indigo & Tinted Glass Suite",
    tagline: "Floor-to-ceiling tinted glass sliding wardrobe, sensor LED profile rods & acoustic headboard.",
    startingPrice: "₹1.35 Lakh",
    features: ["Profile Tinted Glass Wardrobe", "Integrated Sensor LED Hanger Rods", "Acoustic Padded Headboard Wall"],
    image: "/hero-bedroom.jpg",
    warranty: "10-Yr Warranty",
  },
  {
    id: "pooja-gold",
    category: "pooja",
    title: "Sacred Makrana Marble Pooja Mandir",
    tagline: "100% Vastu-aligned North-East sanctum with backlit CNC jali and carved teakwood pillars.",
    startingPrice: "₹65,000",
    features: ["100% Vastu Shastra Aligned", "Makrana White Marble Altar", "Backlit Om & Gayatri CNC Jali"],
    image: "/pooja-mandir.jpg",
    warranty: "Lifetime Quality",
  },
  {
    id: "villa-living",
    category: "living",
    title: "Double-Height Grand Foyer & Villa Lounge",
    tagline: "Architectural staircase illumination, panoramic glass, and custom bar lounge.",
    startingPrice: "₹2.20 Lakh",
    features: ["Double-Height Chandelier Ceiling", "Concealed Bar Cabinetry", "Natural Veneer with PU Polish"],
    image: "/foyer-living.jpg",
    warranty: "10-Yr Warranty",
  },
  {
    id: "wardrobe-suite",
    category: "bedroom",
    title: "Walk-In Dressing Suite & Island Vanity",
    tagline: "Jewelry pullouts, bronze mirror shutters, and perimeter illuminated dressing table.",
    startingPrice: "₹1.15 Lakh",
    features: ["Velvet Lined Jewelry Drawers", "Soft-Close Telescopic Sliders", "Full-Length Backlit Vanity Mirror"],
    image: "/portfolio-wardrobe.jpg",
    warranty: "10-Yr Warranty",
  },
];

const CATEGORIES = [
  { id: "all", label: "All Spaces" },
  { id: "kitchen", label: "Modular Kitchens" },
  { id: "living", label: "Living & TV Lounges" },
  { id: "bedroom", label: "Bedrooms & Closets" },
  { id: "pooja", label: "Vastu Pooja Mandirs" },
];

export default function ExploreByRoom() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filtered = activeTab === "all"
    ? ROOM_ITEMS
    : ROOM_ITEMS.filter((item) => item.category === activeTab);

  return (
    <section className="classy-rooms-section" id="explore-rooms">
      <div className="container">
        {/* Editorial Section Header */}
        <div className="classy-section-header">
          <div className="structured-step-badge">
            <span className="structured-step-num blue">02</span>
            <span className="structured-step-text">Curated Spatial Concepts</span>
          </div>
          <h2 className="classy-section-title">
            Tailor-Made Interior Architecture for <span className="classy-gold-text">Every Room</span>
          </h2>
          <p className="classy-section-desc">
            Explore bespoke spaces designed with German precision hardware, certified marine-grade woodwork, and harmonious color aesthetics.
          </p>

          {/* Minimalist Filter Tabs */}
          <div className="classy-tabs-row">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`classy-tab-pill ${activeTab === cat.id ? "active" : ""}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Room Gallery Grid */}
        <div className="classy-rooms-grid">
          {filtered.map((room) => (
            <div key={room.id} className="classy-room-card">
              <div className="classy-room-img-frame">
                <Image
                  src={room.image}
                  alt={room.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="classy-room-img"
                  style={{ objectFit: "cover" }}
                />
                <div
                  className="badge-green"
                  style={{
                    position: "absolute",
                    top: 12,
                    left: 12,
                    zIndex: 3,
                    fontSize: 10,
                    padding: "3px 9px",
                  }}
                >
                  <Leaf size={10} />
                  <span>Eco BWP Ply</span>
                </div>
                <div className="classy-room-price-tag">
                  <span>Starts {room.startingPrice}</span>
                </div>
                <div className="classy-room-warranty-tag">
                  <Shield size={12} color="var(--liv-blue)" />
                  <span>{room.warranty}</span>
                </div>
              </div>

              <div className="classy-room-content">
                <h3 className="classy-room-title">{room.title}</h3>
                <p className="classy-room-desc">{room.tagline}</p>

                <div className="classy-room-specs">
                  {room.features.map((feat, idx) => (
                    <div key={idx} className="classy-spec-item">
                      <Check size={13} color={idx === 0 ? "var(--liv-green)" : "var(--liv-pink)"} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="classy-room-actions">
                  <a
                    href={`https://wa.me/919391356077?text=Hello%20MVVR%2C%20I%20am%20interested%20in%20${encodeURIComponent(room.title)}%20(${room.startingPrice}).%20Please%20share%20the%20detailed%20specifications.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="classy-btn-whatsapp"
                  >
                    <WhatsAppIcon size={14} />
                    <span>WhatsApp Quote</span>
                  </a>
                  <Link href="/pricing" className="classy-btn-details">
                    <span>Calculate Cost</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
