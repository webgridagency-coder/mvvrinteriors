"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Home, Building2, KeyRound, Hammer, Ruler,
  Box, Monitor, Video, LayoutGrid, MessageSquare,
  Armchair, ChefHat, DoorClosed, Lightbulb, BedDouble, Flame,
  Sparkles, Shield, Clock, ArrowRight, CheckCircle2, ChevronRight,
  Phone
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import AnnouncementBar from "@/components/AnnouncementBar";
import WhatsAppButton from "@/components/WhatsAppButton";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import GsapTextReveal from "@/components/GsapTextReveal";

const SERVICE_VERTICALS = [
  {
    id: "construction",
    category: "Construction",
    tagline: "Turnkey Civil Architecture & Engineering",
    title: "Civil Construction & Structural Engineering",
    img: "/portfolio-villa.jpg",
    badge: "Engineering Excellence",
    badgeColor: "var(--liv-pink)",
    badgeBg: "var(--liv-pink-soft)",
    desc: "From ground-up RCC civil structures to complete turnkey residential and commercial projects, MVVR CON & INTERIO builds enduring architectural foundations. We oversee soil testing, structural calculations, government liaison, and precision masonry with guaranteed fixed-budget execution.",
    subServices: [
      {
        icon: Home,
        name: "Residential Construction",
        detail: "Custom independent villas, duplex residences, and gated community multi-family homes built with grade-A cement and steel."
      },
      {
        icon: Building2,
        name: "Commercial Construction",
        detail: "Modern commercial retail spaces, clinic complexes, and corporate office buildings engineered for durability."
      },
      {
        icon: KeyRound,
        name: "Turnkey Projects",
        detail: "Single-point end-to-end execution from bare land excavation to final keys-in-hand occupancy certification."
      },
      {
        icon: Hammer,
        name: "Renovation & Remodeling",
        detail: "Structural wall alterations, balcony enclosed expansions, retrofitting, and comprehensive modern facade renewals."
      },
      {
        icon: Ruler,
        name: "Structural & Architectural Works",
        detail: "Blueprints, cantilevered porch canopies, boundary perimeter walls, and heavy-duty compound architectural styling."
      }
    ],
    deliverables: [
      "Rigorous 3-Tier Quality Audit at every concrete pouring stage",
      "Standard Fe-550D TMT reinforcement steel and 53-grade certified cement",
      "Waterproofing & anti-termite subterranean treatment with 10-year warranty",
      "Government municipal approvals and Vastu layout verification"
    ]
  },
  {
    id: "3d-design",
    category: "3D Design",
    tagline: "Photorealistic CGI & Architectural Planning",
    title: "3D Architectural Design & Visualizations",
    img: "/hero-living.jpg",
    badge: "Virtual Reality Preview",
    badgeColor: "var(--liv-blue)",
    badgeBg: "var(--liv-blue-soft)",
    desc: "Experience your home in full photorealistic 4K before laying a single brick or cutting a single ply board. Our 3D visualizers model your exact room dimensions, sunlight vectors, ambient lighting drops, and material finishes with millimeter realism.",
    subServices: [
      {
        icon: Box,
        name: "3D Elevations",
        detail: "Contemporary, neo-classical, and modern minimalist exterior elevations with day and night lighting simulations."
      },
      {
        icon: Monitor,
        name: "3D Interior Visualization",
        detail: "Comprehensive 4K renders for living rooms, kitchens, bedrooms, and mandirs showing exact textures and lighting."
      },
      {
        icon: Video,
        name: "Walkthrough Videos",
        detail: "Cinematic 60FPS walkthrough videos allowing you to experience the natural spatial flow of your dream residence."
      },
      {
        icon: LayoutGrid,
        name: "Space Planning",
        detail: "Ergonomic furniture layouts, clear movement circulation pathways, and Vastu Ishanya/Agneya alignments."
      },
      {
        icon: MessageSquare,
        name: "Design Consultation",
        detail: "Interactive material curation sessions with our principal architects to finalize laminates, quartz, and veneers."
      }
    ],
    deliverables: [
      "Itemized 3D architectural blueprint with exact measurements and elevations",
      "Color and material moodboard matching physical samples at our studio",
      "Electrical conduit wiring and false ceiling lighting plan diagrams",
      "Unlimited revisions until your family is 100% satisfied with the concept"
    ]
  },
  {
    id: "interiors",
    category: "Interiors",
    tagline: "Bespoke Carpentry & 45-Day Handover",
    title: "Luxury Bespoke Interiors & Furnishing",
    img: "/kitchen-island.jpg",
    badge: "Turnkey Interiors",
    badgeColor: "var(--liv-green-dark)",
    badgeBg: "var(--liv-green-soft)",
    desc: "The hallmark of MVVR CON & INTERIO is our uncompromising turnkey interior execution. Utilizing 100% Boiling Water Proof (BWP 710) marine ply, factory precision CNC machining, and German soft-close fittings, we deliver your dream home in exactly 45 days.",
    subServices: [
      {
        icon: Armchair,
        name: "Residential Interiors",
        detail: "Complete living room foyer consoles, acoustic fluted panels, TV feature backdrops, and luxury dining spaces."
      },
      {
        icon: ChefHat,
        name: "Modular Kitchens",
        detail: "German Blum/Hafele tandem drawers, anti-fingerprint acrylic shutters, and quartz stone waterfall counters."
      },
      {
        icon: DoorClosed,
        name: "Wardrobes & Storage",
        detail: "Floor-to-ceiling sliding and hinged wardrobes with tinted bronze glass, sensor LED rods, and jewelry organizers."
      },
      {
        icon: Lightbulb,
        name: "False Ceiling & Lighting",
        detail: "Designer gypsum ceilings, concealed warm cove lighting, magnetic tracks, and focused COB spotlights."
      },
      {
        icon: BedDouble,
        name: "Custom Furniture",
        detail: "Plush upholstered headboards, bespoke dining tables, study desks, and tailored accent seating."
      },
      {
        icon: Flame,
        name: "Pooja Units",
        detail: "Sacred Makrana marble platforms, backlit CNC brass and teak jali panels designed to strict Vastu principles."
      }
    ],
    deliverables: [
      "100% BWP 710 Marine Plywood verified by moisture resistance testing",
      "German Blum & Hafele hardware with 10-year replacement warranty",
      "Guaranteed 45-day on-time handover or daily delay compensation",
      "Deep cleaning & 54-point quality inspection prior to final keys handover"
    ]
  }
];

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredVerticals = activeTab === "all"
    ? SERVICE_VERTICALS
    : SERVICE_VERTICALS.filter(v => v.id === activeTab);

  return (
    <>
      <CustomCursor />
      <AnnouncementBar />
      <Navbar />

      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-inner">
            <div className="breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <span>Services</span>
            </div>
            <div className="page-hero-badge">
              <Sparkles size={14} strokeWidth={2} />
              <span>Turnkey Construction &amp; Interiors</span>
            </div>
            <GsapTextReveal
              text="Our Core Architectural &amp; Interior Services"
              as="h1"
              className="page-hero-title"
              style={{ color: "var(--white)" }}
            />
            <p className="page-hero-desc">
              Structured across three pillars of excellence: <strong>Civil Construction</strong>, <strong>3D Architectural Design</strong>, and <strong>Luxury Interiors</strong>. Every project is executed with precision German engineering and guaranteed 45-day timelines.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Navigation Filter Bar */}
      <section style={{ background: "#FFFFFF", borderBottom: "1px solid #E2E8F0", padding: "18px 0", position: "sticky", top: 80, zIndex: 90 }}>
        <div className="container">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, flexWrap: "wrap" }}>
            <button
              type="button"
              onClick={() => setActiveTab("all")}
              style={{
                padding: "8px 20px",
                borderRadius: 999,
                fontSize: 13,
                fontWeight: 700,
                border: activeTab === "all" ? "1px solid var(--liv-pink)" : "1px solid #E2E8F0",
                background: activeTab === "all" ? "var(--liv-pink)" : "#FFFFFF",
                color: activeTab === "all" ? "#FFFFFF" : "#334155",
                cursor: "pointer",
                transition: "all 0.2s ease"
              }}
            >
              All Services (3 Verticals)
            </button>
            {SERVICE_VERTICALS.map(v => (
              <a
                key={v.id}
                href={`#${v.id}`}
                onClick={() => setActiveTab(v.id)}
                style={{
                  padding: "8px 20px",
                  borderRadius: 999,
                  fontSize: 13,
                  fontWeight: 700,
                  textDecoration: "none",
                  border: activeTab === v.id ? `1px solid ${v.badgeColor}` : "1px solid #E2E8F0",
                  background: activeTab === v.id ? v.badgeBg : "#FFFFFF",
                  color: activeTab === v.id ? v.badgeColor : "#334155",
                  transition: "all 0.2s ease",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6
                }}
              >
                <span>{v.category}</span>
                <ChevronRight size={13} strokeWidth={2.2} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Services Verticals Section */}
      <section style={{ padding: "70px 0 100px", background: "var(--cream)" }}>
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: 80 }}>
            {filteredVerticals.map((vertical, idx) => {
              const isEven = idx % 2 === 1;

              return (
                <div
                  key={vertical.id}
                  id={vertical.id}
                  style={{
                    background: "var(--white)",
                    borderRadius: 24,
                    padding: "clamp(24px, 4vw, 44px)",
                    boxShadow: "0 14px 40px rgba(15, 23, 42, 0.05)",
                    border: "1px solid rgba(226, 232, 240, 0.8)",
                    scrollMarginTop: 120
                  }}
                >
                  {/* Vertical Header */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 14, marginBottom: 30, paddingBottom: 20, borderBottom: "1px solid #F1F5F9" }}>
                    <div>
                      <div
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 6,
                          padding: "5px 14px",
                          borderRadius: 999,
                          fontSize: 11.5,
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.06em",
                          color: vertical.badgeColor,
                          background: vertical.badgeBg,
                          marginBottom: 10
                        }}
                      >
                        <Sparkles size={12} strokeWidth={2} />
                        {vertical.badge}
                      </div>
                      <h2
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                          fontWeight: 700,
                          color: "var(--charcoal)",
                          margin: 0
                        }}
                      >
                        {vertical.title}
                      </h2>
                    </div>

                    <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                      <Link
                        href="/pricing"
                        className="btn-primary"
                        style={{ padding: "10px 20px", fontSize: 13 }}
                      >
                        <span>Calculate Cost</span>
                        <ArrowRight size={13} strokeWidth={2.2} />
                      </Link>
                      <a
                        href={`https://wa.me/919391356077?text=Hello%20MVVR%2C%20I%20would%20like%20to%20enquire%20about%20your%20${encodeURIComponent(vertical.title)}%20services.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline"
                        style={{ padding: "10px 18px", fontSize: 13, borderColor: "#25D366", color: "#128C7E" }}
                      >
                        <WhatsAppIcon size={14} style={{ marginRight: 6 }} />
                        <span>WhatsApp Quote</span>
                      </a>
                    </div>
                  </div>

                  {/* Vertical Main Grid: Image + Description & Subservices */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: isEven ? "1fr 1.25fr" : "1.25fr 1fr",
                      gap: 40,
                      alignItems: "start"
                    }}
                  >
                    {/* Visual Card */}
                    <div style={{ order: isEven ? 2 : 1, position: "relative" }}>
                      <div
                        style={{
                          position: "relative",
                          height: "clamp(260px, 35vw, 380px)",
                          borderRadius: 18,
                          overflow: "hidden",
                          boxShadow: "0 12px 30px rgba(0, 0, 0, 0.08)"
                        }}
                      >
                        <Image
                          src={vertical.img}
                          alt={vertical.title}
                          fill
                          sizes="(max-width: 900px) 100vw, 550px"
                          style={{ objectFit: "cover" }}
                        />
                        <div
                          style={{
                            position: "absolute",
                            bottom: 14,
                            left: 14,
                            right: 14,
                            background: "rgba(15, 23, 42, 0.85)",
                            backdropFilter: "blur(8px)",
                            borderRadius: 12,
                            padding: "10px 14px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            color: "#FFFFFF"
                          }}
                        >
                          <div style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 12, fontWeight: 600 }}>
                            <Shield size={14} strokeWidth={2} color="var(--liv-pink)" />
                            <span>100% Quality Guaranteed</span>
                          </div>
                          <div style={{ fontSize: 11, color: "#94A3B8" }}>MVVR Verified</div>
                        </div>
                      </div>

                      {/* Deliverables Box */}
                      <div
                        style={{
                          marginTop: 20,
                          background: "#F8FAFC",
                          border: "1px solid #E2E8F0",
                          borderRadius: 16,
                          padding: "20px 22px"
                        }}
                      >
                        <div style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "#64748B", marginBottom: 12 }}>
                          Key Service Commitments:
                        </div>
                        <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 9 }}>
                          {vertical.deliverables.map((d, i) => (
                            <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 9, fontSize: 13, color: "#334155", lineHeight: 1.45 }}>
                              <CheckCircle2 size={15} strokeWidth={2.2} color="var(--liv-pink)" style={{ flexShrink: 0, marginTop: 2 }} />
                              <span>{d}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Sub-Services List */}
                    <div style={{ order: isEven ? 1 : 2 }}>
                      <p style={{ fontSize: 15, lineHeight: 1.7, color: "#475569", marginBottom: 24 }}>
                        {vertical.desc}
                      </p>

                      <div style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: "#0F172A", marginBottom: 14 }}>
                        Included Specialized Disciplines:
                      </div>

                      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                        {vertical.subServices.map((sub) => {
                          const SubIcon = sub.icon;
                          return (
                            <div
                              key={sub.name}
                              style={{
                                display: "flex",
                                alignItems: "flex-start",
                                gap: 14,
                                padding: "14px 16px",
                                borderRadius: 14,
                                background: "#FFFFFF",
                                border: "1px solid #F1F5F9",
                                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.02)",
                                transition: "all 0.2s ease"
                              }}
                            >
                              <div
                                style={{
                                  width: 38,
                                  height: 38,
                                  borderRadius: 10,
                                  background: vertical.badgeBg,
                                  color: vertical.badgeColor,
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  flexShrink: 0,
                                  marginTop: 2
                                }}
                              >
                                <SubIcon size={18} strokeWidth={2} />
                              </div>
                              <div style={{ flex: 1 }}>
                                <div style={{ fontSize: 14.5, fontWeight: 700, color: "#0F172A", marginBottom: 3 }}>
                                  {sub.name}
                                </div>
                                <div style={{ fontSize: 13, color: "#64748B", lineHeight: 1.5 }}>
                                  {sub.detail}
                                </div>
                              </div>
                              <ChevronRight size={15} strokeWidth={2} color="#CBD5E1" style={{ flexShrink: 0, marginTop: 12 }} />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Execution Methodology */}
      <section style={{ padding: "85px 0", background: "#0F172A", color: "var(--white)" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: 700, margin: "0 auto 50px" }}>
            <span className="page-hero-badge" style={{ color: "var(--liv-pink)", borderColor: "rgba(231,46,90,0.3)" }}>
              Quality Assurance
            </span>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "var(--white)", marginBottom: 12 }}>
              How We Deliver Fixed Budgets &amp; Punctuality
            </h2>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.95rem", lineHeight: 1.6 }}>
              A structured 5-stage turnkey workflow guaranteeing on-time handover, certified BWP marine plywood, and direct architect supervision.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
            {[
              { step: "01", title: "Site Measurement & Vastu Audit", desc: "Precision 3D laser survey of floor plan and daylight orientation." },
              { step: "02", title: "Photorealistic 3D Concept", desc: "Interactive 4K walkthroughs showing exact false ceiling drops and materials." },
              { step: "03", title: "Factory CNC Fabrication", desc: "Automated precision edge-banding and German Blum hardware fitting." },
              { step: "04", title: "On-Site Assembly & Lighting", desc: "Supervised on-site erection, electrical conduits, and ambient profile LEDs." },
              { step: "05", title: "45-Day Handover & 10-Yr Warranty", desc: "Comprehensive 54-point quality inspection and formal warranty issuance." },
            ].map((st, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 16,
                  padding: 24,
                  transition: "all 0.2s ease"
                }}
              >
                <div style={{ fontFamily: "var(--font-heading)", fontSize: "2rem", fontWeight: 700, color: "var(--liv-pink)", marginBottom: 10 }}>
                  {st.step}
                </div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--white)", marginBottom: 8 }}>
                  {st.title}
                </h3>
                <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.5, margin: 0 }}>
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{ padding: "80px 0", background: "linear-gradient(135deg, var(--liv-pink-soft) 0%, #FFFFFF 50%, var(--liv-blue-soft) 100%)", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "var(--charcoal)", marginBottom: 14 }}>
            Ready to Build or Design Your Space?
          </h2>
          <p style={{ fontSize: "1.05rem", color: "#475569", marginBottom: 30, lineHeight: 1.6 }}>
            Book a complimentary design consultation with our principal interior architects. We will prepare an initial layout concept and an itemized cost estimate.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-primary" style={{ padding: "14px 28px", fontSize: 14 }}>
              <span>Book Free Site Visit &amp; 3D Plan</span>
              <ArrowRight size={15} strokeWidth={2.2} />
            </Link>
            <a href="tel:+919391356077" className="btn-outline" style={{ padding: "14px 28px", fontSize: 14, borderColor: "#0F172A", color: "#0F172A" }}>
              <Phone size={15} strokeWidth={2} />
              <span>Call 93913 56077</span>
            </a>
          </div>
        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </>
  );
}
