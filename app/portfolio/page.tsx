"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles, MapPin, Ruler, Clock, ArrowRight, Eye,
  CheckCircle2, Star, Filter, MessageCircle
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import AnnouncementBar from "@/components/AnnouncementBar";
import WhatsAppButton from "@/components/WhatsAppButton";
import GsapTextReveal from "@/components/GsapTextReveal";
import GsapMagnet from "@/components/GsapMagnet";

const PROJECTS = [
  {
    id: 1,
    title: "The Grand Horizon Villa",
    category: "villa",
    categoryLabel: "Villa & Duplex",
    location: "Rushikonda, Visakhapatnam",
    area: "3,800 sq.ft",
    timeline: "44 Days",
    img: "/portfolio-villa.jpg",
    package: "Premium Luxury",
    highlights: ["Double-Height Living Wall", "Natural Wood Veneers", "Integrated Bar Counter", "Vastu-Compliant Layout"],
    story: "A majestic coastal villa featuring double-height ceiling treatments, bespoke brass-accented wood paneling, and a dramatic chandelier centerpiece.",
    quote: "MVVR transformed our bare villa into a breathtaking home. The craftsmanship in the woodwork and lighting is world class."
  },
  {
    id: 2,
    title: "The Onyx & Champagne Modular Kitchen",
    category: "kitchen",
    categoryLabel: "Modular Kitchen",
    location: "Seethammadhara, Visakhapatnam",
    area: "320 sq.ft",
    timeline: "21 Days",
    img: "/kitchen-island.jpg",
    package: "Premium Luxury",
    highlights: ["Quartz Waterfall Island", "Blum Motorized Lift-Ups", "Wine Rack & Glass Display", "Concealed Chimney"],
    story: "Engineered with anti-fingerprint charcoal matte cabinetry, champagne gold accents, and a bookmatched quartz waterfall island with integrated breakfast seating.",
    quote: "Cooking here feels like a luxury culinary studio. The soft-close German hardware and pull-out organizers are flawless."
  },
  {
    id: 3,
    title: "Opulent Foyer & Contemporary Living",
    category: "living",
    categoryLabel: "Living & Foyer",
    location: "Madhurawada, Visakhapatnam",
    area: "1,250 sq.ft",
    timeline: "38 Days",
    img: "/foyer-living.jpg",
    package: "Standard Modern",
    highlights: ["Acoustic Fluted Louvers", "Circular Backlit Mirror", "Beige Italian Marble Flooring", "Curved Architectural Archway"],
    story: "An inviting entrance foyer flanked by rich fluted walnut paneling, warm ambient cove lighting, and an expansive living lounge opening to panoramic city views.",
    quote: "Every guest who enters our home is captivated by the foyer arch and lighting. MVVR delivered exactly on their 3D render promise."
  },
  {
    id: 4,
    title: "Sacred Ishanya Pooja Mandir",
    category: "pooja",
    categoryLabel: "Pooja Room",
    location: "MVP Colony, Visakhapatnam",
    area: "180 sq.ft",
    timeline: "14 Days",
    img: "/pooja-mandir.jpg",
    package: "Custom Craftsmanship",
    highlights: ["Backlit CNC Laser-Cut Jali", "Makrana White Marble Altar", "Traditional Brass Bells", "Teakwood Finish Storage"],
    story: "A sacred sanctuary created with pure Makrana marble steps, intricate backlit carved wooden screens, and hanging bronze bells designed for morning tranquility.",
    quote: "Our Pooja room has become the spiritual anchor of our family home. The craftsmanship and Vastu attention are divine."
  },
  {
    id: 5,
    title: "Serene Master Bedroom Suite",
    category: "bedroom",
    categoryLabel: "Master Suite",
    location: "Yendada, Visakhapatnam",
    area: "420 sq.ft",
    timeline: "25 Days",
    img: "/hero-bedroom.jpg",
    package: "Standard Modern",
    highlights: ["Velvet Bed Back Paneling", "Warm Floating Nightstands", "Minimalist Cove False Ceiling", "Concealed AC Ducting"],
    story: "Designed as a boutique luxury retreat with muted champagne tones, concealed indirect ambient illumination, and bespoke bed frame carpentry.",
    quote: "The acoustic warmth and lighting make sleeping and relaxing here an absolute delight. Incredible attention to detail."
  },
  {
    id: 6,
    title: "Bespoke Glass Walk-in Wardrobe",
    category: "bedroom",
    categoryLabel: "Master Suite",
    location: "Gajuwaka, Visakhapatnam",
    area: "240 sq.ft",
    timeline: "18 Days",
    img: "/portfolio-wardrobe.jpg",
    package: "Premium Luxury",
    highlights: ["Tinted Bronze Profile Glass", "Sensor LED Closet Rods", "Vanity Jewelry Organizers", "Floor-to-Ceiling Height"],
    story: "Floor-to-ceiling customized wardrobes featuring slim aluminum profiles, bronze-tinted tempered glass shutters, and automatic warm LED illumination upon opening.",
    quote: "It feels like walking into an upscale designer boutique every morning. The storage layout is so smart and organized."
  },
  {
    id: 7,
    title: "Executive Corporate Headquarters",
    category: "commercial",
    categoryLabel: "Commercial",
    location: "Dwaraka Nagar, Visakhapatnam",
    area: "2,600 sq.ft",
    timeline: "40 Days",
    img: "/portfolio-office.jpg",
    package: "Commercial Fitout",
    highlights: ["Acoustic Ceiling Panels", "MD Cabin Woodwork", "Reception Statement Desk", "Linear Suspended Lights"],
    story: "A high-performance modern office interior featuring acoustic treatment, linear suspended architectural lighting, and executive client meeting spaces.",
    quote: "Delivered on schedule within 40 days without halting our operations. Our clients are always impressed when they visit."
  },
  {
    id: 8,
    title: "Spa-Inspired Marble Master Bath",
    category: "living",
    categoryLabel: "Luxury Bath",
    location: "Madhurawada, Visakhapatnam",
    area: "160 sq.ft",
    timeline: "15 Days",
    img: "/portfolio-bathroom.jpg",
    package: "Premium Luxury",
    highlights: ["Freestanding Soak Tub", "Brushed Gold Fixtures", "Veined Marble Tiles", "Floating Vanity"],
    story: "A serene spa environment with floor-to-ceiling bookmatched marble tiling, brushed gold Grohe fittings, frameless glass wet partitions, and a floating dual vanity.",
    quote: "A resort-grade master bath right in our home. Pure relaxation."
  }
];

const CATEGORIES = [
  { id: "all", label: "All Projects" },
  { id: "villa", label: "Villas & Duplexes" },
  { id: "kitchen", label: "Modular Kitchens" },
  { id: "living", label: "Living & Foyers" },
  { id: "bedroom", label: "Master Suites & Closets" },
  { id: "pooja", label: "Pooja Mandir" },
  { id: "commercial", label: "Commercial" },
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = activeFilter === "all"
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeFilter);

  return (
    <>
      <CustomCursor />
      <Navbar />

      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-inner">
            <div className="breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <span>Portfolio</span>
            </div>
            <div className="page-hero-badge">
              <Sparkles size={14} />
              <span>Executed Masterpieces</span>
            </div>
            <GsapTextReveal
              text="Our Realized Interior Projects"
              as="h1"
              className="page-hero-title"
              style={{ color: "var(--white)" }}
            />
            <p className="page-hero-desc">
              Explore our curated portfolio of completed residences, modular kitchens, luxury villas, and executive offices delivered across Visakhapatnam, Vijayawada, and Hyderabad.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section style={{ padding: "40px 0 20px", background: "var(--cream)", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
        <div className="container">
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveFilter(cat.id)}
                style={{
                  padding: "10px 20px",
                  borderRadius: 999,
                  border: activeFilter === cat.id ? "1px solid var(--gold)" : "1px solid rgba(0,0,0,0.1)",
                  background: activeFilter === cat.id ? "var(--charcoal)" : "var(--white)",
                  color: activeFilter === cat.id ? "var(--gold-light)" : "var(--charcoal)",
                  fontWeight: 600,
                  fontSize: 13,
                  cursor: "pointer",
                  transition: "all var(--transition-fast)",
                  boxShadow: activeFilter === cat.id ? "0 4px 14px rgba(0,0,0,0.2)" : "none"
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section style={{ padding: "60px 0 100px", background: "var(--cream)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))", gap: 32 }}>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="interactive-card"
                data-cursor="view"
                style={{
                  background: "var(--white)",
                  borderRadius: 16,
                  overflow: "hidden",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
                  border: "1px solid rgba(0,0,0,0.06)",
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                {/* Image Wrap */}
                <div className="gsap-parallax-img-wrap" style={{ position: "relative", height: 260, width: "100%", overflow: "hidden" }}>
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="gsap-parallax-img"
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div style={{
                    position: "absolute",
                    top: 14,
                    right: 14,
                    background: "rgba(20,20,20,0.85)",
                    backdropFilter: "blur(6px)",
                    border: "1px solid rgba(201,168,76,0.4)",
                    color: "var(--gold-light)",
                    fontSize: 11,
                    fontWeight: 700,
                    padding: "4px 12px",
                    borderRadius: 999,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase"
                  }}>
                    {project.package}
                  </div>
                  <div style={{
                    position: "absolute",
                    bottom: 12,
                    left: 12,
                    background: "rgba(0,0,0,0.7)",
                    backdropFilter: "blur(4px)",
                    color: "var(--white)",
                    fontSize: 11,
                    padding: "4px 10px",
                    borderRadius: 6,
                    display: "flex",
                    alignItems: "center",
                    gap: 5
                  }}>
                    <MapPin size={12} color="var(--gold-light)" />
                    <span>{project.location}</span>
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: 24, display: "flex", flexDirection: "column", flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                    <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--gold-dark)" }}>
                      {project.categoryLabel}
                    </span>
                    <div style={{ display: "flex", gap: 12, fontSize: 12, color: "var(--silver)" }}>
                      <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                        <Ruler size={12} />
                        {project.area}
                      </span>
                      <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                        <Clock size={12} />
                        {project.timeline}
                      </span>
                    </div>
                  </div>

                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.35rem", fontWeight: 700, color: "var(--charcoal)", marginBottom: 10, lineHeight: 1.25 }}>
                    {project.title}
                  </h3>

                  <p style={{ fontSize: "0.875rem", color: "var(--charcoal-light)", lineHeight: 1.55, marginBottom: 16 }}>
                    {project.story}
                  </p>

                  {/* Highlights */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 18 }}>
                    {project.highlights.map((h, i) => (
                      <span
                        key={i}
                        style={{
                          fontSize: 11,
                          padding: "3px 8px",
                          borderRadius: 4,
                          background: "rgba(201,168,76,0.1)",
                          color: "var(--charcoal)",
                          fontWeight: 500
                        }}
                      >
                        ✓ {h}
                      </span>
                    ))}
                  </div>

                  {/* Client Quote */}
                  <div style={{
                    marginTop: "auto",
                    padding: "12px 14px",
                    borderRadius: 8,
                    background: "var(--cream-dark)",
                    borderLeft: "3px solid var(--gold)",
                    fontSize: 12,
                    fontStyle: "italic",
                    color: "var(--charcoal)",
                    lineHeight: 1.45
                  }}>
                    &ldquo;{project.quote}&rdquo;
                  </div>

                  <div style={{ marginTop: 18, paddingTop: 16, borderTop: "1px solid rgba(0,0,0,0.06)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Link
                      href="/pricing"
                      style={{
                        fontSize: 12,
                        fontWeight: 700,
                        color: "var(--charcoal)",
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        gap: 6
                      }}
                    >
                      <span>Estimate Similar Space</span>
                      <ArrowRight size={13} color="var(--gold-dark)" />
                    </Link>
                    <a
                      href={`https://wa.me/919642186812?text=Hello%20MVVR%2C%20I%20saw%20${encodeURIComponent(project.title)}%20on%20your%20portfolio.%20Can%20we%20discuss%20a%20similar%20design%20for%20my%20home%3F`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: 12,
                        fontWeight: 600,
                        color: "#25D366",
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        gap: 5
                      }}
                    >
                      <MessageCircle size={14} />
                      <span>Inquire</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Site Visit Banner */}
      <section style={{ padding: "70px 0", background: "var(--charcoal)", color: "var(--white)", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <span className="page-hero-badge">Your Dream Home Awaits</span>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "var(--white)", marginBottom: 14 }}>
            Want a Custom 3D Concept For Your Floor Plan?
          </h2>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.7)", marginBottom: 28, lineHeight: 1.6 }}>
            Share your blueprint or floor plan with our design team. We provide a customized preliminary 3D concept layout and transparent budget estimation completely free of charge.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-primary">
              <span>Book Site Visit &amp; 3D Plan</span>
              <ArrowRight size={14} />
            </Link>
            <Link href="/pricing" className="btn-outline">
              <span>Try Price Calculator</span>
            </Link>
          </div>
        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </>
  );
}
