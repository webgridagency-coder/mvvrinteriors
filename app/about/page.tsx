"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Sparkles, Award, Users, Shield, Clock, CheckCircle2,
  ArrowRight, Phone, MapPin, Building2, Layers, Flame
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import AnnouncementBar from "@/components/AnnouncementBar";
import WhatsAppButton from "@/components/WhatsAppButton";
import GsapTextReveal from "@/components/GsapTextReveal";
import GsapCounter from "@/components/GsapCounter";
import GsapMagnet from "@/components/GsapMagnet";

export default function AboutPage() {
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
              <span>About Us</span>
            </div>
            <div className="page-hero-badge">
              <Sparkles size={14} />
              <span>Architectural Interior Studio · Est. 2018</span>
            </div>
            <GsapTextReveal
              text="Crafting Exceptional Spaces, Honoring Timeless Living"
              as="h1"
              className="page-hero-title"
              style={{ color: "var(--white)" }}
            />
            <p className="page-hero-desc">
              MVVR CON &amp; INTERIO is an end-to-end luxury interior design and turnkey execution studio based in Visakhapatnam and serving Andhra Pradesh and Telangana.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section style={{ padding: "90px 0", background: "var(--cream)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 60, alignItems: "center" }}>
            {/* Image */}
            <div style={{ position: "relative", height: 480, borderRadius: 20, overflow: "hidden", boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}>
              <Image
                src="/about-team.jpg"
                alt="MVVR Design Studio Team collaborating on blueprints and renders"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div style={{
                position: "absolute",
                bottom: 20,
                left: 20,
                right: 20,
                background: "rgba(20,20,20,0.85)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(201,168,76,0.4)",
                padding: "16px 20px",
                borderRadius: 12,
                color: "var(--white)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: 700, color: "var(--gold-light)" }}>
                    <GsapCounter target={500} suffix="+ Homes" />
                  </div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.7)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Transformed Across AP &amp; Telangana</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: 700, color: "var(--gold-light)" }}>
                    <GsapCounter target={45} suffix=" Days" />
                  </div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.7)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Guaranteed Handover</div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="page-hero-badge" style={{ color: "var(--charcoal)", borderColor: "var(--gold)" }}>
                Our Heritage &amp; Vision
              </span>
              <GsapTextReveal
                text="Where Architectural Rigor Meets Soulful Living"
                as="h2"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 3.5vw, 2.7rem)", fontWeight: 700, color: "var(--charcoal)", marginBottom: 16, lineHeight: 1.2 }}
              />
              <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "var(--charcoal-light)", marginBottom: 16 }}>
                Founded in 2018 in Madhurawada, Visakhapatnam, MVVR CON &amp; INTERIO was born from a fundamental frustration observed in the local interior industry: unfulfilled promises, indefinite construction delays, ambiguous subcontractor bills, and compromise on quality wood.
              </p>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "var(--charcoal-light)", marginBottom: 24 }}>
                We reimagined the entire interior experience by combining computerized factory prefabrication with dedicated principal architect supervision and strict Vastu Shastra adherence. Today, our multidisciplinary team of interior architects, 3D visualization artists, and master carpenters have delivered over 500 bespoke residences, penthouses, and corporate offices.
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 30 }}>
                {[
                  { title: "In-House 3D Renders", desc: "No guesswork. Experience photorealistic 3D models of your exact space before buying a single board." },
                  { title: "German Factory Precision", desc: "Edge-banded on automatic European machinery for smooth, moisture-sealed edges that never peel." },
                  { title: "100% Vastu Compliance", desc: "Harmonizing energy corridors, temple placements, and room ergonomics for peace and prosperity." },
                  { title: "Fixed Price Guarantee", desc: "The cost in your signed contract is the final cost. No mid-project price escalations." }
                ].map((item, i) => (
                  <div key={i} className="interactive-card" style={{ background: "var(--white)", padding: "16px", borderRadius: 10, border: "1px solid rgba(0,0,0,0.06)" }}>
                    <h4 style={{ fontSize: 13, fontWeight: 700, color: "var(--charcoal)", marginBottom: 4, display: "flex", alignItems: "center", gap: 6 }}>
                      <CheckCircle2 size={15} color="var(--gold-dark)" />
                      {item.title}
                    </h4>
                    <p style={{ fontSize: 11.5, color: "var(--charcoal-mid)", lineHeight: 1.45 }}>{item.desc}</p>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", gap: 14 }}>
                <GsapMagnet strength={0.35}>
                  <Link href="/contact" className="btn-primary">
                    <span>Schedule Studio Consultation</span>
                    <ArrowRight size={14} />
                  </Link>
                </GsapMagnet>
                <GsapMagnet strength={0.35}>
                  <Link href="/portfolio" className="btn-outline">
                    <span>View Our Work</span>
                  </Link>
                </GsapMagnet>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Four Uncompromising Pillars */}
      <section style={{ padding: "90px 0", background: "var(--charcoal)", color: "var(--white)" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: 740, margin: "0 auto 60px" }}>
            <span className="page-hero-badge">Why Homeowners Trust MVVR</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 700, color: "var(--white)", marginBottom: 14 }}>
              The 4 Uncompromising Commitments
            </h2>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.95rem", lineHeight: 1.6 }}>
              Every project signed with MVVR CON &amp; INTERIO is safeguarded by strict quality parameters and legal warranties.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 24 }}>
            {[
              { icon: Clock, title: "Strict 45-Day Handover", desc: "Your move-in date is locked in our agreement. Our 75% pre-fabrication model eliminates endless dusty on-site delays." },
              { icon: Shield, title: "10-Year Material Warranty", desc: "We use certified IS 710 Boiling Water Proof (BWP) marine ply and international hardware brands backed by warranty cards." },
              { icon: Flame, title: "100% Vastu Shastra Aligned", desc: "Scientific spatial planning ensuring optimal natural cross-ventilation, light paths, and spiritual harmony throughout your home." },
              { icon: Users, title: "Dedicated Single Point of Contact", desc: "A dedicated project architect manages your site from day one to handover, providing daily photo progress reports." },
            ].map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={i}
                  style={{
                    background: "#222222",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 14,
                    padding: 30,
                    transition: "all var(--transition-fast)"
                  }}
                >
                  <div style={{ width: 46, height: 46, borderRadius: 10, background: "rgba(201,168,76,0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18, color: "var(--gold)" }}>
                    <Icon size={24} />
                  </div>
                  <h3 style={{ fontSize: "1.15rem", fontWeight: 600, color: "var(--white)", marginBottom: 10 }}>
                    {p.title}
                  </h3>
                  <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Studio Locations */}
      <section style={{ padding: "80px 0", background: "var(--white)" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 50px" }}>
            <span className="page-hero-badge" style={{ color: "var(--charcoal)", borderColor: "var(--gold)" }}>
              Experience Centres
            </span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 700, color: "var(--charcoal)" }}>
              Visit Our Experience Studio
            </h2>
            <p style={{ color: "var(--charcoal-light)", fontSize: "0.95rem", lineHeight: 1.6 }}>
              Touch and feel material swatches, test soft-close drawer mechanisms, and examine full-scale modular kitchen mockups in person.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 30, maxWidth: 840, margin: "0 auto" }}>
            <div style={{ background: "var(--cream)", borderRadius: 16, padding: 32, border: "1px solid rgba(0,0,0,0.06)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <MapPin size={20} color="var(--gold-dark)" />
                <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--charcoal)" }}>Visakhapatnam Design HQ</h3>
              </div>
              <p style={{ fontSize: "0.9rem", color: "var(--charcoal-mid)", lineHeight: 1.6, marginBottom: 16 }}>
                #6-87/1/GF101, 1st Floor, Sai Priya Layout,<br />
                Kommadhi Road, Madhurawada,<br />
                Visakhapatnam - 530041, Andhra Pradesh
              </p>
              <div style={{ fontSize: 13, color: "var(--charcoal)", marginBottom: 8 }}>
                <strong>Direct:</strong> 96421 86812 / 97038 25245
              </div>
              <div style={{ fontSize: 13, color: "var(--charcoal)" }}>
                <strong>Hours:</strong> Mon - Sun: 9:30 AM to 8:30 PM
              </div>
            </div>

            <div style={{ background: "var(--cream)", borderRadius: 16, padding: 32, border: "1px solid rgba(0,0,0,0.06)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <Building2 size={20} color="var(--gold-dark)" />
                <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--charcoal)" }}>Hyderabad Regional Service</h3>
              </div>
              <p style={{ fontSize: "0.9rem", color: "var(--charcoal-mid)", lineHeight: 1.6, marginBottom: 16 }}>
                Serving Jubilee Hills, Banjara Hills, Gachibowli, Hitec City, Kondapur &amp; surrounding luxury gated communities in Telangana.
              </p>
              <div style={{ fontSize: 13, color: "var(--charcoal)", marginBottom: 8 }}>
                <strong>Coordination:</strong> 96421 86812
              </div>
              <div style={{ fontSize: 13, color: "var(--charcoal)" }}>
                <strong>Consultations:</strong> By Prior Appointment / Site Visits
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </>
  );
}
