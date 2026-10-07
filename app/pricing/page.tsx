"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Sparkles, CheckCircle2, X, Shield, Clock, ArrowRight,
  HelpCircle, ChevronDown, ChevronUp, FileText, MessageCircle
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import AnnouncementBar from "@/components/AnnouncementBar";
import WhatsAppButton from "@/components/WhatsAppButton";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import InteriorPriceCalculator, { PACKAGES } from "@/components/InteriorPriceCalculator";
import GsapTextReveal from "@/components/GsapTextReveal";
import GsapMagnet from "@/components/GsapMagnet";

const COMPARISON_ROWS = [
  {
    feature: "Plywood Core Specification",
    basic: "MR Grade Moisture-Resistant Commercial Ply",
    standard: "IS 710 BWP (Boiling Water Proof) Marine Grade Ply",
    premium: "High Density HDHMR + Calibrated BWP Marine Ply",
  },
  {
    feature: "Cabinet Shutter Finishes",
    basic: "0.8mm Anti-scratch Matte Laminates",
    standard: "1mm Anti-fingerprint Super Matte & High-Gloss Acrylic",
    premium: "Natural Exotic Wood Veneer with PU Polish & Fluted Glass",
  },
  {
    feature: "Hardware & Hinges",
    basic: "Standard Soft-Close Stainless Steel Hinges",
    standard: "Hafele / Hettich Soft-Close Tandem Drawer Channels",
    premium: "German Blum Motorized Aventos Bi-Fold Lift-Ups",
  },
  {
    feature: "Modular Kitchen Counters",
    basic: "Polished Jet Black Granite Countertop",
    standard: "Quartz Stone / Nano-White Stain-Resistant Counter",
    premium: "Waterfall Quartz / Italian Marble Island Counter",
  },
  {
    feature: "Wardrobe Design & Architecture",
    basic: "Swing Shutter Wardrobes with Top Lofts",
    standard: "Floor-to-Ceiling Sliding with Tinted Profile Glass",
    premium: "Walk-in Closet with Bronze Glass & Sensor LED Rods",
  },
  {
    feature: "False Ceiling & Ambient Lighting",
    basic: "Perimeter Gypsum False Ceiling with LED Spots",
    standard: "Designer Cove False Ceiling with Indirect Warm Strips",
    premium: "Architectural Ceiling with Magnetic Track Lights & Louvers",
  },
  {
    feature: "Living Room TV Feature Wall",
    basic: "Wall-Mounted Panel with Floating Console",
    standard: "Fluted Acoustic Wooden Louvers with Backlit Shelf",
    premium: "Bookmatched Italian Marble Slabs & Floating Credenza",
  },
  {
    feature: "Pooja Room Mandir",
    basic: "Compact Teak-Finish Modular Mandir Unit",
    standard: "Backlit Laser-cut CNC Teak Screen Altar",
    premium: "Makrana White Marble Altar with Sacred Brass Bells",
  },
  {
    feature: "Material & Craftsmanship Warranty",
    basic: "5-Year Material Warranty",
    standard: "10-Year Comprehensive Warranty",
    premium: "10-Year Warranty + Lifetime Dedicated Service Support",
  },
  {
    feature: "Handover Timeline",
    basic: "45-Day Handover Guarantee",
    standard: "45-Day Handover Guarantee",
    premium: "45 to 55-Day Bespoke Handover Guarantee",
  },
];

const FAQS = [
  {
    q: "How does the 45-day handover guarantee work?",
    a: "Once your 3D design layouts and material selections are finalized, our project contract is signed with a strict 45-day execution calendar. Because 75% of your woodwork is pre-fabricated in our automated factory before site delivery, on-site assembly is rapid and clean. If we ever delay beyond 45 days without mutual consent, we pay a late penalty."
  },
  {
    q: "Are your interior packages customizable?",
    a: "Absolutely. Our Basic, Standard, and Premium tiers are curated baselines. You can freely mix and match elements — for instance, choosing a Premium Blum modular kitchen paired with a Standard bedroom package. Our interior architects provide an itemized quote reflecting your exact selections."
  },
  {
    q: "What payment milestones do you follow?",
    a: "We believe in transparent, escrow-style milestones: 10% on 3D design finalization and booking; 40% on factory material procurement and fabrication; 40% upon site delivery and framework installation; and the final 10% only after your personal satisfaction and 54-point quality inspection audit."
  },
  {
    q: "Do you offer Vastu Shastra consultation?",
    a: "Yes, 100% of our interior architecture is Vastu-aligned at no extra charge. We evaluate entry doors, kitchen fire element (Southeast Agneya), master bedroom stability (Southwest Nairuthi), and Pooja altar sanctity (Northeast Ishanya)."
  },
  {
    q: "Do you service outside Visakhapatnam?",
    a: "Yes! We actively execute luxury turnkey projects across Andhra Pradesh and Telangana, including Visakhapatnam, Vizianagaram, Kakinada, Vijayawada, Guntur, and Hyderabad."
  }
];

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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
              <span>Pricing &amp; Calculator</span>
            </div>
            <div className="page-hero-badge">
              <Sparkles size={14} />
              <span>Transparent Interior Economics</span>
            </div>
            <GsapTextReveal
              text="Interior Design Pricing & Packages"
              as="h1"
              className="page-hero-title"
              style={{ color: "var(--white)" }}
            />
            <p className="page-hero-desc">
              No hidden fees, no ambiguous subcontractor quotes. Explore our curated Basic, Standard, and Premium interior packages or calculate a live personalized estimate below.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section style={{ padding: "80px 0", background: "var(--charcoal)" }}>
        <div className="container">
          <InteriorPriceCalculator standalone={true} />
        </div>
      </section>

      {/* Package Comparison Matrix */}
      <section style={{ padding: "90px 0", background: "var(--cream)" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: 740, margin: "0 auto 50px" }}>
            <span className="page-hero-badge" style={{ color: "var(--charcoal)", borderColor: "var(--liv-pink)" }}>
              Side-by-Side Comparison
            </span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 700, color: "var(--charcoal)", marginBottom: 14 }}>
              Detailed Package Specifications
            </h2>
            <p style={{ color: "var(--charcoal-light)", fontSize: "0.95rem", lineHeight: 1.6 }}>
              Compare materials, hardware brands, wardrobe configurations, and warranties across each tier to discover the ideal balance of luxury and budget for your home.
            </p>
          </div>

          <div style={{ overflowX: "auto", boxShadow: "0 10px 30px rgba(0,0,0,0.06)", borderRadius: 16 }}>
            <table style={{ width: "100%", borderCollapse: "collapse", background: "var(--white)", textAlign: "left", minWidth: 780 }}>
              <thead>
                <tr style={{ background: "var(--charcoal)", color: "var(--white)" }}>
                  <th style={{ padding: "20px 24px", fontSize: 14, fontWeight: 700, width: "28%" }}>Design Element</th>
                  <th style={{ padding: "20px 20px", fontSize: 14, fontWeight: 700, width: "24%", borderLeft: "1px solid rgba(255,255,255,0.1)" }}>
                    Basic Essential
                    <div style={{ fontSize: 12, color: "rgba(255,255,255,0.75)", fontWeight: 400, marginTop: 4 }}>₹900 / sq.ft</div>
                  </th>
                  <th style={{ padding: "20px 20px", fontSize: 14, fontWeight: 700, width: "24%", borderLeft: "1px solid rgba(255,255,255,0.1)", background: "#252525" }}>
                    Standard Modern
                    <span style={{ marginLeft: 6, fontSize: 10, background: "var(--liv-pink)", color: "#FFFFFF", padding: "2px 6px", borderRadius: 4, fontWeight: 700 }}>POPULAR</span>
                    <div style={{ fontSize: 12, color: "rgba(255,255,255,0.75)", fontWeight: 400, marginTop: 4 }}>₹1,450 / sq.ft</div>
                  </th>
                  <th style={{ padding: "20px 20px", fontSize: 14, fontWeight: 700, width: "24%", borderLeft: "1px solid rgba(255,255,255,0.1)" }}>
                    Premium Luxury
                    <div style={{ fontSize: 12, color: "rgba(255,255,255,0.75)", fontWeight: 400, marginTop: 4 }}>₹2,150 / sq.ft</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid rgba(0,0,0,0.06)", background: i % 2 === 0 ? "var(--white)" : "var(--cream-dark)" }}>
                    <td style={{ padding: "16px 24px", fontWeight: 600, fontSize: 13, color: "var(--charcoal)" }}>
                      {row.feature}
                    </td>
                    <td style={{ padding: "16px 20px", fontSize: 12.5, color: "var(--charcoal-mid)", borderLeft: "1px solid rgba(0,0,0,0.06)", lineHeight: 1.45 }}>
                      {row.basic}
                    </td>
                    <td style={{ padding: "16px 20px", fontSize: 12.5, color: "var(--charcoal-mid)", borderLeft: "1px solid rgba(0,0,0,0.06)", background: i % 2 === 0 ? "var(--liv-blue-soft)" : "rgba(27, 92, 235, 0.08)", fontWeight: 500, lineHeight: 1.45 }}>
                      {row.standard}
                    </td>
                    <td style={{ padding: "16px 20px", fontSize: 12.5, color: "var(--charcoal-mid)", borderLeft: "1px solid rgba(0,0,0,0.06)", lineHeight: 1.45 }}>
                      {row.premium}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section style={{ padding: "80px 0", background: "var(--white)" }}>
        <div className="container" style={{ maxWidth: 840 }}>
          <div style={{ textAlign: "center", marginBottom: 50 }}>
            <span className="page-hero-badge" style={{ color: "var(--charcoal)", borderColor: "var(--liv-pink)" }}>
              Client Queries
            </span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 700, color: "var(--charcoal)" }}>
              Frequently Asked Questions
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  style={{
                    border: "1px solid rgba(0,0,0,0.08)",
                    borderRadius: 12,
                    overflow: "hidden",
                    background: isOpen ? "var(--cream)" : "var(--white)",
                    transition: "all var(--transition-fast)"
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    style={{
                      width: "100%",
                      padding: "20px 24px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      background: "none",
                      border: "none",
                      textAlign: "left",
                      cursor: "pointer",
                      fontSize: 15,
                      fontWeight: 600,
                      color: "var(--charcoal)"
                    }}
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp size={18} strokeWidth={2} color="var(--liv-pink)" /> : <ChevronDown size={18} strokeWidth={2} color="#64748B" />}
                  </button>
                  {isOpen && (
                    <div style={{ padding: "0 24px 20px", fontSize: 14, lineHeight: 1.65, color: "var(--charcoal-light)" }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div style={{ marginTop: 40, textAlign: "center", padding: "24px", background: "var(--cream)", borderRadius: 12 }}>
            <p style={{ fontSize: 14, color: "var(--charcoal)", marginBottom: 12 }}>
              Have specific architectural floor plans or questions about your site?
            </p>
            <a
              href="https://wa.me/919391356077?text=Hello%20MVVR%2C%20I%20have%20questions%20about%20your%20interior%20packages%20and%20pricing."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ display: "inline-flex", background: "#25D366", borderColor: "#25D366", color: "#FFF" }}
            >
              <WhatsAppIcon size={16} />
              <span>Talk to Principal Architect on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </>
  );
}
