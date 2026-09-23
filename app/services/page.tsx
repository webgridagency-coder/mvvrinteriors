"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Home, Sofa, BedDouble, ChefHat, Sparkles, Shield, Clock,
  ArrowRight, CheckCircle2, Ruler, Palette, Flame, Building2,
  Phone, MessageCircle
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import AnnouncementBar from "@/components/AnnouncementBar";
import WhatsAppButton from "@/components/WhatsAppButton";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import GsapTextReveal from "@/components/GsapTextReveal";
import GsapMagnet from "@/components/GsapMagnet";

const SERVICES_DATA = [
  {
    id: "residential-apartments",
    icon: Home,
    title: "Modern Apartment Interiors (2BHK, 3BHK, 4BHK)",
    tagline: "Intelligent space planning meeting contemporary luxury",
    img: "/foyer-living.jpg",
    desc: "We specialize in turnkey end-to-end interiors for gated community apartments across Visakhapatnam and Hyderabad. From expansive living room foyer designs to smart concealed storage, our designs maximize every square foot while establishing an atmosphere of quiet luxury.",
    deliverables: [
      "Designer False Ceiling with warm recessed COB spotlights & indirect cove lighting",
      "Living Room TV feature wall with Italian marble backdrop & acoustic fluted louvers",
      "Entrance Foyer with brass inlay console & backlit vanity mirror",
      "Vastu-aligned space arrangement for living, dining, and bedrooms",
      "Seamless wire management & smart automation conduit pre-wiring",
    ],
    idealFor: "Homeowners in gated communities seeking complete turnkey execution without contractor hassles."
  },
  {
    id: "luxury-villas",
    icon: Sofa,
    title: "Ultra Luxury Villa & Duplex Architecture",
    tagline: "Grandeur, architectural majesty & bespoke craftsmanship",
    img: "/portfolio-villa.jpg",
    desc: "Duplexes and standalone villas require architectural scale and bespoke treatments. Our team creates double-height living room accents, sculptural chandeliers, luxury private lounges, and custom bar units designed to make a statement.",
    deliverables: [
      "Double-height feature wall panelling with natural wood veneer & brass trims",
      "Bespoke designer bar units with tempered glass display & wine cooling integration",
      "Custom staircase lighting, glass railings & entryway statement pieces",
      "Home theater acoustic fabric panelling and multi-zone ambient lighting",
      "Outdoor terrace lounge & private balcony sit-out styling",
    ],
    idealFor: "Luxury villa owners in Rushikonda, Madhurawada, Jubilee Hills, and surrounding premium enclaves."
  },
  {
    id: "modular-kitchens",
    icon: ChefHat,
    title: "Bespoke Modular Kitchens & Island Counters",
    tagline: "Ergonomically engineered for Indian cooking & international aesthetics",
    img: "/kitchen-island.jpg",
    desc: "The kitchen is the culinary heart of your home. We craft modular kitchens engineered with 100% Boiling Water Proof (BWP 710) marine ply, seamless acrylic and anti-fingerprint super matte shutters, quartz stone waterfall counters, and world-class German hardware.",
    deliverables: [
      "German soft-close Blum / Hafele tandem drawer systems tested for 200,000 cycles",
      "Anti-stain, scratch-resistant quartz & nano-white waterfall island countertops",
      "Motorized bi-fold lift-up wall cabinets with integrated under-cabinet profile LEDs",
      "Tall pantry pull-out units, wicker vegetable baskets & corner carousel carousels",
      "Chimney duct concealment & heavy-duty heat-resistant splashback panels",
    ],
    idealFor: "Families seeking a durable, oil/turmeric-resistant, show-stopping modern kitchen."
  },
  {
    id: "master-bedroom-wardrobes",
    icon: BedDouble,
    title: "Master Bedroom Suites & Designer Walk-In Closets",
    tagline: "Private sanctuaries designed for tranquility and effortless organization",
    img: "/hero-bedroom.jpg",
    desc: "Experience hotel-suite comfort in your own master bedroom. We integrate custom headboards with plush upholstery or fluted wood panelling, concealed nightstand lighting, and floor-to-ceiling sliding wardrobes with tinted bronze profile glass.",
    deliverables: [
      "Floor-to-ceiling sliding or hinged wardrobes with built-in lofts & sensor LED rods",
      "Tinted fluted glass shutters with sleek champagne gold aluminum frame profiles",
      "Integrated dressing tables with full-length LED touch mirrors & jewelry organizers",
      "Acoustic bed back panelling with soft velvet or suede fabric upholstery",
      "Dedicated reading spot lights & concealed master AC ducting false ceiling",
    ],
    idealFor: "Homeowners who desire a luxurious, clutter-free personal sanctuary."
  },
  {
    id: "pooja-room-mandir",
    icon: Flame,
    title: "Sacred Vastu-Compliant Pooja Mandir Architecture",
    tagline: "Where ancient sacred geometry meets contemporary Indian aesthetics",
    img: "/pooja-mandir.jpg",
    desc: "Every South Indian home cherishes a serene, divine Pooja room. Designed with strict adherence to Vastu Shastra (Northeast Ishanya orientation), our mandir designs incorporate Makrana white marble altar pedestals, intricately backlit CNC wooden jalis, and hanging brass bells.",
    deliverables: [
      "100% Vastu-compliant direction, deity height, and sacred proportion alignments",
      "Backlit CNC laser-cut teak wood and acrylic jali panels with warm divine glow",
      "Makrana white marble & granite stepped altar platforms with storage drawers",
      "Concealed smoke-exhaust ventilation and brass bell hanging provisions",
      "Custom floating brass oil-lamp and incense storage drawers with soft-close slides",
    ],
    idealFor: "Devout families looking for an authentic, breathtaking home temple."
  },
  {
    id: "commercial-offices",
    icon: Building2,
    title: "Corporate Workspaces & Executive Offices",
    tagline: "Inspiring office interiors that elevate productivity and brand prestige",
    img: "/portfolio-office.jpg",
    desc: "From IT company floor plans to executive doctor clinics and lawyer chambers, we design commercial spaces that blend acoustic efficiency, modern minimalism, and ergonomic comfort for employees and visiting clients.",
    deliverables: [
      "Acoustic ceiling baffles, modular linear LED suspended fixtures & noise isolation",
      "Executive MD cabins with leatherette wall paneling and monolithic conference tables",
      "Reception greeting desk with 3D backlit corporate branding & guest waiting lounge",
      "Ergonomic modular workstation cubicles with integrated power & data raceways",
      "Server room safety conduits, fire-resistant panelling & durable vinyl flooring",
    ],
    idealFor: "Businesses and institutions looking to build an impressive corporate identity."
  },
];

export default function ServicesPage() {
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
              <span>Services</span>
            </div>
            <div className="page-hero-badge">
              <Sparkles size={14} />
              <span>Turnkey Interior Architecture</span>
            </div>
            <GsapTextReveal
              text="Comprehensive Interior Design & Execution Services"
              as="h1"
              className="page-hero-title"
              style={{ color: "var(--white)" }}
            />
            <p className="page-hero-desc">
              From initial Vastu-aligned 3D architectural floor plans to final precision carpentry and styling — MVVR CON &amp; INTERIO transforms bare shells into breathtaking homes with a guaranteed 45-day handover.
            </p>
          </div>
        </div>
      </section>

      {/* Services List Section */}
      <section style={{ padding: "80px 0", background: "var(--cream)" }}>
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: 70 }}>
            {SERVICES_DATA.map((srv, idx) => {
              const isEven = idx % 2 === 1;
              const Icon = srv.icon;
              return (
                <div
                  key={srv.id}
                  id={srv.id}
                  style={{
                    display: "grid",
                    gridTemplateColumns: isEven ? "1.1fr 1fr" : "1fr 1.1fr",
                    gap: 50,
                    alignItems: "center",
                    background: "var(--white)",
                    borderRadius: 20,
                    padding: 40,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                    border: "1px solid rgba(0,0,0,0.06)",
                  }}
                >
                  {/* Image Column */}
                  <div style={{ order: isEven ? 2 : 1, position: "relative", height: 420, borderRadius: 14, overflow: "hidden" }}>
                    <Image
                      src={srv.img}
                      alt={srv.title}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div style={{
                      position: "absolute",
                      bottom: 16,
                      left: 16,
                      background: "rgba(20,20,20,0.85)",
                      backdropFilter: "blur(8px)",
                      border: "1px solid rgba(201,168,76,0.4)",
                      padding: "8px 16px",
                      borderRadius: 999,
                      color: "var(--gold-light)",
                      fontSize: 12,
                      fontWeight: 600,
                      display: "flex",
                      alignItems: "center",
                      gap: 6
                    }}>
                      <Ruler size={13} />
                      <span>100% Customized Execution</span>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div style={{ order: isEven ? 1 : 2 }}>
                    <div style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      color: "var(--gold-dark)",
                      fontSize: 12,
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      marginBottom: 10
                    }}>
                      <Icon size={16} />
                      <span>{srv.tagline}</span>
                    </div>
                    <h2 style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)",
                      fontWeight: 700,
                      color: "var(--charcoal)",
                      marginBottom: 14,
                      lineHeight: 1.2
                    }}>
                      {srv.title}
                    </h2>
                    <p style={{ fontSize: "0.95rem", lineHeight: 1.65, color: "var(--charcoal-light)", marginBottom: 20 }}>
                      {srv.desc}
                    </p>

                    <div style={{ marginBottom: 24 }}>
                      <h4 style={{ fontSize: 13, fontWeight: 700, color: "var(--charcoal)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 12 }}>
                        Key Design Deliverables:
                      </h4>
                      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                        {srv.deliverables.map((item, i) => (
                          <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: "0.875rem", color: "var(--charcoal-mid)", lineHeight: 1.45 }}>
                            <CheckCircle2 size={16} color="var(--gold-dark)" style={{ flexShrink: 0, marginTop: 2 }} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                      <Link href="/pricing" className="btn-primary" style={{ padding: "10px 20px", fontSize: 13 }}>
                        <span>Calculate Cost</span>
                        <ArrowRight size={13} />
                      </Link>
                      <a
                        href={`https://wa.me/919391356077?text=Hello%20MVVR%2C%20I%20am%20interested%20in%20your%20${encodeURIComponent(srv.title)}%20services.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline"
                        style={{ padding: "10px 20px", fontSize: 13, borderColor: "#25D366", color: "#128C7E" }}
                      >
                        <WhatsAppIcon size={14} style={{ marginRight: 6 }} />
                        <span>Enquire on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* The 5-Step Turnkey Process */}
      <section style={{ padding: "90px 0", background: "#181818", color: "var(--white)" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: 700, margin: "0 auto 60px" }}>
            <span className="page-hero-badge">Our Execution Methodology</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 700, color: "var(--white)", marginBottom: 14 }}>
              How We Bring Your Vision To Life
            </h2>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.95rem", lineHeight: 1.6 }}>
              A structured, transparent 5-stage turnkey workflow that ensures punctuality, premium grade materials, and guaranteed fixed budgets.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 24 }}>
            {[
              { step: "01", title: "Site Measurement & Vastu Mapping", desc: "Precise 3D laser measurement of your floor plan and consultation regarding sunlight, wind flow, and sacred Vastu alignments." },
              { step: "02", title: "Photorealistic 3D Visualizations", desc: "Interactive 3D walkthroughs showing your exact color palettes, false ceiling drops, lighting schemes, and furniture scales." },
              { step: "03", title: "Material Selection & Factory Prefab", desc: "Curating authentic BWP marine plywood, quartz counters, acrylics, and German hardware crafted on CNC machines for millimeter precision." },
              { step: "04", title: "On-Site Installation & Lighting", desc: "Supervised on-site assembly, electrical channel cutting, false ceiling gypsum framing, and ambient profile lighting integration." },
              { step: "05", title: "45-Day Handover & 10-Yr Warranty", desc: "Comprehensive deep cleaning, 54-point quality inspection audit, and formal handover with our 10-year warranty certificate." },
            ].map((st, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 14,
                  padding: 28,
                  position: "relative",
                  transition: "all var(--transition-fast)"
                }}
              >
                <div style={{ fontFamily: "var(--font-display)", fontSize: "2.4rem", fontWeight: 700, color: "var(--gold)", opacity: 0.85, marginBottom: 14 }}>
                  {st.step}
                </div>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 600, color: "var(--white)", marginBottom: 10, lineHeight: 1.3 }}>
                  {st.title}
                </h3>
                <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.55 }}>
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: "80px 0", background: "linear-gradient(135deg, var(--gold-pale) 0%, #FFFFFF 100%)", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "var(--charcoal)", marginBottom: 16 }}>
            Ready to Transform Your Living Space?
          </h2>
          <p style={{ fontSize: "1.05rem", color: "var(--charcoal-light)", marginBottom: 30, lineHeight: 1.6 }}>
            Book a complimentary design consultation with our principal interior architects. We will provide a customized 3D concept layout and an itemized cost estimate.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-primary" style={{ padding: "14px 28px", fontSize: 14 }}>
              <span>Book Free Site Visit &amp; 3D Plan</span>
              <ArrowRight size={16} />
            </Link>
            <a href="tel:+919391356077" className="btn-outline" style={{ padding: "14px 28px", fontSize: 14, borderColor: "var(--charcoal)", color: "var(--charcoal)" }}>
              <Phone size={15} />
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
