"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Home, Building2, Sofa, BedDouble, ChefHat,
  MapPin, ArrowRight, Shield, Clock, Star, MessageCircle,
  TrendingUp, Flame
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import WhatsAppButton from "@/components/WhatsAppButton";
import InteriorPriceCalculator from "@/components/InteriorPriceCalculator";
import GsapTextReveal from "@/components/GsapTextReveal";
import GsapScrubText from "@/components/GsapScrubText";
import GsapCounter from "@/components/GsapCounter";
import GsapMagnet from "@/components/GsapMagnet";
import LuxuryMarquee from "@/components/LuxuryMarquee";
import ReviewsMarquee from "@/components/ReviewsMarquee";

// =============================================
// HERO SLIDER IMAGES (Architectural Layout)
// =============================================
const HERO_SLIDES = [
  {
    img: "/hero-architecture.jpg",
    tag: "Madhurawada, Visakhapatnam · Est. 2018",
    lead: "LIVE IN A HOME THAT SPEAKS FOR ITSELF.",
    desc: "Turnkey architectural luxury crafted with German precision & Vastu harmony across AP & Telangana.",
    name: "Architectural Villa",
  },
  {
    img: "/foyer-living.jpg",
    tag: "Beach Enclave, Rushikonda",
    lead: "WHERE INTERIORS MEET MASTERFUL ARCHITECTURE.",
    desc: "Italian marble and acoustic fluted panelling engineered for refined living spaces.",
    name: "Grand Foyer Lounge",
  },
  {
    img: "/kitchen-island.jpg",
    tag: "Luxury Penthouse Suite",
    lead: "FUNCTIONAL PERFECTION IN EVERY DETAIL.",
    desc: "German Blum lift-ups and quartz waterfall islands built for culinary distinction.",
    name: "Quartz Island Kitchen",
  },
  {
    img: "/pooja-mandir.jpg",
    tag: "Sacred Sanctum Design",
    lead: "TRANSCENDENT MAKRANA MARBLE SANCTUMS.",
    desc: "100% Vastu-aligned sacred mandirs with handcrafted teak jali and ambient warmth.",
    name: "Vastu Pooja Mandir",
  },
];

// =============================================
// FEATURED SERVICES
// =============================================
const FEATURED_SERVICES = [
  {
    icon: Home,
    name: "Modern Apartments",
    desc: "Complete end-to-end interiors for 2BHK & 3BHK flats: modular kitchen, wardrobes, false ceiling & living lounge.",
    img: "/foyer-living.jpg",
    href: "/services#residential-apartments",
  },
  {
    icon: Sofa,
    name: "Luxury Villas & Duplexes",
    desc: "Double-height living rooms, grand staircases, custom bar lounges, and architectural ceiling treatments.",
    img: "/portfolio-villa.jpg",
    href: "/services#luxury-villas",
  },
  {
    icon: ChefHat,
    name: "Bespoke Modular Kitchens",
    desc: "Quartz waterfall islands, soft-close Blum lift-ups, tall pantry units & anti-fingerprint acrylic shutters.",
    img: "/kitchen-island.jpg",
    href: "/services#modular-kitchens",
  },
  {
    icon: BedDouble,
    name: "Master Suites & Closets",
    desc: "Acoustic fluted headboard paneling, floor-to-ceiling tinted glass sliding wardrobes with sensor LED rods.",
    img: "/hero-bedroom.jpg",
    href: "/services#master-bedroom-wardrobes",
  },
  {
    icon: Flame,
    name: "Pooja Room Mandirs",
    desc: "Vastu-aligned sanctums with Makrana white marble platforms, brass bells, and backlit CNC carved screens.",
    img: "/pooja-mandir.jpg",
    href: "/services#pooja-room-mandir",
  },
  {
    icon: Building2,
    name: "Corporate Workspaces",
    desc: "Ergonomic MD cabins, conference rooms, linear acoustic ceiling lighting, and corporate branding receptions.",
    img: "/portfolio-office.jpg",
    href: "/services#commercial-offices",
  },
];



export default function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0);

  // Section & Animation Refs
  const heroRef = useRef<HTMLElement>(null);
  const heroBgRef = useRef<HTMLDivElement>(null);
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const heroBadgeRef = useRef<HTMLDivElement>(null);
  const heroLeadRef = useRef<HTMLHeadingElement>(null);
  const heroDescRef = useRef<HTMLParagraphElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const guaranteesRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  // Auto advance hero slider
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  // GSAP Initial Hero Entrance Timeline
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(
        heroBadgeRef.current,
        { y: -25, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.9, delay: 0.15 }
      )
        .fromTo(
          ".hero-giant-word",
          { y: "135%", rotateX: 35, opacity: 0 },
          {
            y: "0%",
            rotateX: 0,
            opacity: 1,
            duration: 1.25,
            stagger: 0.12,
            ease: "power4.out",
          },
          "-=0.5"
        )
        .fromTo(
          [heroLeadRef.current, heroDescRef.current],
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, stagger: 0.1 },
          "-=0.7"
        )
        .fromTo(
          ".hero-cta-pill",
          { scale: 0.85, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.65,
            stagger: 0.1,
            ease: "back.out(1.5)",
          },
          "-=0.5"
        )
        .fromTo(
          [".hero-social-pill", ".hero-right-col"],
          { y: 35, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.85, stagger: 0.15 },
          "-=0.6"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // GSAP Slide Switch Transition
  useEffect(() => {
    if (!heroLeadRef.current || !heroDescRef.current) return;
    gsap.fromTo(
      [heroLeadRef.current, heroDescRef.current],
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.65, stagger: 0.08, ease: "power2.out" }
    );
  }, [activeSlide]);

  // Subtle 3D Mouse Parallax on Desktop (RAF throttled for 120 FPS performance)
  const rafHeroRef = useRef<number | null>(null);
  const handleHeroMouseMove = (e: React.MouseEvent) => {
    if (typeof window !== "undefined" && window.innerWidth < 992) return;
    const { clientX, clientY } = e;
    if (rafHeroRef.current !== null) return;

    rafHeroRef.current = requestAnimationFrame(() => {
      const xRatio = (clientX / window.innerWidth - 0.5) * 2;
      const yRatio = (clientY / window.innerHeight - 0.5) * 2;

      if (heroBgRef.current) {
        gsap.to(heroBgRef.current, {
          x: xRatio * -10,
          y: yRatio * -10,
          duration: 0.8,
          ease: "power2.out",
          overwrite: "auto",
        });
      }
      if (heroTitleRef.current) {
        gsap.to(heroTitleRef.current, {
          x: xRatio * 8,
          y: yRatio * 6,
          duration: 0.8,
          ease: "power2.out",
          overwrite: "auto",
        });
      }
      rafHeroRef.current = null;
    });
  };

  // Staggered ScrollTrigger animations for Services, Projects, Guarantees & Testimonials
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Services stagger
    if (servicesRef.current) {
      gsap.fromTo(
        servicesRef.current.querySelectorAll(".service-card"),
        { y: 55, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 78%",
            once: true,
          },
        }
      );
    }

    // Projects image parallax & stagger
    if (projectsRef.current) {
      const cards = projectsRef.current.querySelectorAll<HTMLElement>(".project-card");
      gsap.fromTo(
        cards,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.16,
          ease: "power3.out",
          scrollTrigger: {
            trigger: projectsRef.current,
            start: "top 75%",
            once: true,
          },
        }
      );

      cards.forEach((card) => {
        const img = card.querySelector<HTMLElement>(".project-card-img");
        if (img) {
          gsap.fromTo(
            img,
            { yPercent: -8 },
            {
              yPercent: 8,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.5,
              },
            }
          );
        }
      });
    }

    // Guarantees stagger
    if (guaranteesRef.current) {
      gsap.fromTo(
        guaranteesRef.current.querySelectorAll(".guarantee-card"),
        { y: 45, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.75,
          stagger: 0.1,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: guaranteesRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );
    }

    // Testimonials marquee reveal
    if (testimonialsRef.current) {
      gsap.fromTo(
        testimonialsRef.current.querySelectorAll(".reviews-marquee-wrapper"),
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: testimonialsRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );
    }
  }, []);

  return (
    <>
      <CustomCursor />
      <Navbar />

      {/* Architectural Inset Hero Frame */}
      <section
        ref={heroRef}
        className="hero-architectural-frame"
        onMouseMove={handleHeroMouseMove}
      >
        {/* High-Res Background Image Slides */}
        <div ref={heroBgRef} className="hero-slides">
          {HERO_SLIDES.map((slide, idx) => (
            <div
              key={idx}
              className={`hero-slide ${idx === activeSlide ? "active" : ""}`}
            >
              <Image
                src={slide.img}
                alt="MVVR Architecture"
                fill
                priority={idx === 0}
                sizes="(max-width: 1200px) 100vw, 1560px"
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>

        {/* Cinematic Multi-Stop Overlay */}
        <div className="hero-architectural-overlay" />

        {/* Top Giant Architectural Display Headline with Masked Word Reveals */}
        <div className="hero-giant-title-container" ref={heroTitleRef}>
          <div className="hero-giant-badge" ref={heroBadgeRef}>
            <span className="hero-badge-dot" />
            <span>MVVR CON &amp; INTERIO · {HERO_SLIDES[activeSlide].tag}</span>
          </div>
          <h1 className="hero-giant-title" style={{ perspective: "1000px" }}>
            <span style={{ overflow: "hidden", display: "block" }}>
              <span
                className="hero-giant-word"
                style={{ display: "inline-block", willChange: "transform, opacity" }}
              >
                ABOVE
              </span>
            </span>
            <span style={{ overflow: "hidden", display: "block" }}>
              <span
                className="hero-giant-word"
                style={{ display: "inline-block", willChange: "transform, opacity" }}
              >
                THE REST
              </span>
            </span>
          </h1>
        </div>

        {/* Bottom Bar: Editorial Left, Social Proof Center, Thumbnails & Stat Card Right */}
        <div className="hero-bottom-bar">
          {/* Left Column: Lead Hook & Action Pills */}
          <div className="hero-editorial-left">
            <div className="hero-editorial-tag">Since 2018 · AP &amp; Telangana</div>
            <h2 className="hero-editorial-lead" ref={heroLeadRef}>
              {HERO_SLIDES[activeSlide].lead}
            </h2>
            <p className="hero-editorial-desc" ref={heroDescRef}>
              {HERO_SLIDES[activeSlide].desc}
            </p>
            <div className="hero-editorial-actions">
              <GsapMagnet strength={0.35}>
                <Link href="/contact" className="hero-btn-pill-white hero-cta-pill" id="hero-cta-quote">
                  <span>Book Free 3D Consultation</span>
                  <ArrowRight size={15} />
                </Link>
              </GsapMagnet>
              <GsapMagnet strength={0.35}>
                <a href="#calculator" className="hero-btn-pill-glass hero-cta-pill" id="hero-cta-calc">
                  <span>2-Bar Cost Calculator</span>
                </a>
              </GsapMagnet>
            </div>
          </div>

          {/* Center Column: Social Proof Avatar Pill */}
          <div className="hero-social-pill">
            <div className="hero-avatars">
              <div className="hero-avatar">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=faces"
                  alt="Client"
                />
              </div>
              <div className="hero-avatar">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=faces"
                  alt="Client"
                />
              </div>
              <div className="hero-avatar">
                <img
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&h=80&fit=crop&crop=faces"
                  alt="Client"
                />
              </div>
            </div>
            <div className="hero-social-text">
              <strong>
                <GsapCounter target={500} suffix="+" duration={1.8} />
              </strong>
              <span>Happy Residents</span>
            </div>
          </div>

          {/* Right Column: Stacked Interactive Thumbnails & 45-Day Floating Stat Card */}
          <div className="hero-right-col">
            <div className="hero-thumbnails-row">
              {HERO_SLIDES.map((slide, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSlide(idx)}
                  className={`hero-thumb-card ${activeSlide === idx ? "active" : ""}`}
                  aria-label={`Switch to ${slide.name}`}
                  title={slide.name}
                  data-cursor="view"
                >
                  <img src={slide.img} alt={slide.name} />
                </button>
              ))}
            </div>

            <div className="hero-stat-floating-card">
              <div className="hero-stat-big">
                <GsapCounter target={45} suffix=" Days" duration={1.6} />
              </div>
              <div className="hero-stat-copy">
                Strict Handover Guarantee &amp; 10-Yr BWP Warranty for those who demand more.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infinite Luxury Architectural Marquee */}
      <LuxuryMarquee />

      {/* Editorial Manifesto Section with GSAP Kinetic Scrub Reveal */}
      <section className="editorial-manifesto-section">
        <div className="container">
          <div className="editorial-manifesto-grid">
            {/* Left Column: About Us & Key Animated Metrics */}
            <div className="editorial-manifesto-left">
              <span className="editorial-badge">About MVVR</span>
              <div className="editorial-stats-stack">
                <div className="editorial-stat-block">
                  <span className="stat-number-manifesto">
                    <GsapCounter target={6} suffix="+" />
                  </span>
                  <span className="stat-label-manifesto">Years Of Excellence</span>
                </div>
                <div className="editorial-stat-block">
                  <span className="stat-number-manifesto">
                    <GsapCounter target={100} suffix="%" />
                  </span>
                  <span className="stat-label-manifesto">Vastu &amp; Custom Design</span>
                </div>
              </div>
            </div>

            {/* Right Column: High-Impact Editorial Statement with GSAP Kinetic Scrub Illumination */}
            <div className="editorial-manifesto-right">
              <GsapScrubText
                text="EVERY HOME WE CREATE IS A DIALOGUE BETWEEN BOLD ARCHITECTURE, PRECISION AND THE PERSON WHO DARES TO OWN IT. DARE MORE."
                highlightWords={["BOLD", "ARCHITECTURE,", "PRECISION", "DARE", "MORE."]}
                className="editorial-manifesto-headline"
              />
              <p className="editorial-manifesto-body">
                Each home we craft across Visakhapatnam, Vijayawada, and Hyderabad is more than an interior — it&apos;s an architectural statement. At MVVR CON &amp; INTERIO, we unite structural elegance, Blum German hardware, BWP marine-grade woodwork, and uncompromising attention to detail to build spaces that feel truly yours.
              </p>
              <div className="editorial-manifesto-actions">
                <GsapMagnet strength={0.3}>
                  <Link href="/portfolio" className="btn-pill-dark">
                    <span>Explore Residences</span>
                    <ArrowRight size={14} />
                  </Link>
                </GsapMagnet>
                <GsapMagnet strength={0.3}>
                  <a href="#calculator" className="btn-pill-outline">
                    <span>Calculate Interior Cost</span>
                    <ArrowRight size={14} />
                  </a>
                </GsapMagnet>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Overview */}
      <section
        ref={servicesRef}
        style={{ padding: "100px 0", background: "var(--cream)" }}
        id="services"
      >
        <div className="container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: 50,
              flexWrap: "wrap",
              gap: 20,
            }}
          >
            <div>
              <span
                className="page-hero-badge"
                style={{ color: "var(--charcoal)", borderColor: "var(--gold)" }}
              >
                Our Core Expertise
              </span>
              <GsapTextReveal
                text="Turnkey Interior Architecture"
                as="h2"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                  fontWeight: 700,
                  color: "var(--charcoal)",
                  lineHeight: 1.2,
                }}
              />
              <p
                style={{
                  color: "var(--charcoal-light)",
                  fontSize: "1rem",
                  marginTop: 8,
                  maxWidth: 600,
                }}
              >
                From precision space planning to custom carpentry and atmospheric cove lighting, we bring unmatched sophistication to every room.
              </p>
            </div>
            <GsapMagnet strength={0.3}>
              <Link
                href="/services"
                className="btn-outline"
                style={{ borderColor: "var(--charcoal)", color: "var(--charcoal)" }}
              >
                <span>View All Services</span>
                <ArrowRight size={14} />
              </Link>
            </GsapMagnet>
          </div>

          <div className="services-overview-grid">
            {FEATURED_SERVICES.map((srv, i) => {
              const Icon = srv.icon;
              return (
                <div
                  key={i}
                  className="service-card interactive-card"
                  data-cursor="view"
                  style={{
                    background: "var(--white)",
                    borderRadius: 16,
                    overflow: "hidden",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
                    border: "1px solid rgba(0,0,0,0.06)",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div className="gsap-parallax-img-wrap" style={{ position: "relative", height: 230, width: "100%" }}>
                    <Image
                      src={srv.img}
                      alt={srv.name}
                      fill
                      className="gsap-parallax-img"
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: 14,
                        left: 14,
                        width: 40,
                        height: 40,
                        borderRadius: 10,
                        background: "rgba(20,20,20,0.85)",
                        backdropFilter: "blur(6px)",
                        color: "var(--gold)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "1px solid rgba(201,168,76,0.3)",
                      }}
                    >
                      <Icon size={20} />
                    </div>
                  </div>

                  <div className="service-card-body">
                    <h3 className="service-name">
                      {srv.name}
                    </h3>
                    <p className="service-desc">
                      {srv.desc}
                    </p>
                    <Link
                      href={srv.href}
                      className="service-link"
                    >
                      <span>Explore Specifications</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects Highlight with Parallax Images */}
      <section
        ref={projectsRef}
        style={{ padding: "90px 0", background: "var(--charcoal)", color: "var(--white)" }}
      >
        <div className="container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: 50,
              flexWrap: "wrap",
              gap: 20,
            }}
          >
            <div>
              <span className="page-hero-badge">Realized Masterpieces</span>
              <GsapTextReveal
                text="Recent Delivered Projects"
                as="h2"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                  fontWeight: 700,
                  color: "var(--white)",
                  lineHeight: 1.2,
                }}
              />
              <p
                style={{
                  color: "rgba(255,255,255,0.6)",
                  fontSize: "0.95rem",
                  marginTop: 8,
                  maxWidth: 600,
                }}
              >
                A glimpse into our bespoke residences delivered across Visakhapatnam and Hyderabad.
              </p>
            </div>
            <GsapMagnet strength={0.3}>
              <Link href="/portfolio" className="btn-primary">
                <span>View Full Gallery (50+ Projects)</span>
                <ArrowRight size={14} />
              </Link>
            </GsapMagnet>
          </div>

          <div className="projects-overview-grid">
            {[
              {
                title: "Grand Villa Interior Architecture",
                loc: "Rushikonda, Vizag",
                area: "3,800 sqft",
                img: "/portfolio-villa.jpg",
                tag: "Villa & Duplex",
              },
              {
                title: "Onyx & Champagne Quartz Island Kitchen",
                loc: "Seethammadhara, Vizag",
                area: "320 sqft",
                img: "/kitchen-island.jpg",
                tag: "Modular Kitchen",
              },
              {
                title: "Sacred Ishanya Pooja Mandir",
                loc: "MVP Colony, Vizag",
                area: "180 sqft",
                img: "/pooja-mandir.jpg",
                tag: "Pooja Room",
              },
            ].map((proj, i) => (
              <div
                key={i}
                className="project-card interactive-card"
                data-cursor="explore"
                style={{
                  background: "#222222",
                  borderRadius: 16,
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div
                  className="gsap-parallax-img-wrap"
                  style={{ position: "relative", height: 260, width: "100%", overflow: "hidden" }}
                >
                  <Image
                    src={proj.img}
                    alt={proj.title}
                    fill
                    className="project-card-img gsap-parallax-img"
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: 12,
                      left: 12,
                      background: "rgba(0,0,0,0.75)",
                      backdropFilter: "blur(4px)",
                      color: "var(--white)",
                      fontSize: 11,
                      padding: "4px 10px",
                      borderRadius: 6,
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                      zIndex: 3,
                    }}
                  >
                    <MapPin size={12} color="var(--gold)" />
                    <span>{proj.loc}</span>
                  </div>
                </div>
                <div style={{ padding: 22 }}>
                  <span
                    style={{
                      fontSize: 11,
                      color: "var(--gold-light)",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    {proj.tag} · {proj.area}
                  </span>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.25rem",
                      fontWeight: 700,
                      color: "var(--white)",
                      marginTop: 6,
                      marginBottom: 14,
                    }}
                  >
                    {proj.title}
                  </h3>
                  <Link
                    href="/portfolio"
                    style={{
                      fontSize: 12,
                      color: "rgba(255,255,255,0.7)",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                    }}
                  >
                    <span>Explore project specifications</span>
                    <ArrowRight size={12} color="var(--gold)" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Interior Price Calculator */}
      <section style={{ padding: "100px 0", background: "#151515" }} id="calculator">
        <div className="container">
          <InteriorPriceCalculator />
        </div>
      </section>

      {/* The 4 Guarantees */}
      <section
        ref={guaranteesRef}
        style={{ padding: "90px 0", background: "var(--cream)" }}
      >
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: 700, margin: "0 auto 50px" }}>
            <span
              className="page-hero-badge"
              style={{ color: "var(--charcoal)", borderColor: "var(--gold)" }}
            >
              The MVVR Promise
            </span>
            <GsapTextReveal
              text="Why Homeowners Choose MVVR CON & INTERIO"
              as="h2"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 3.5vw, 2.7rem)",
                fontWeight: 700,
                color: "var(--charcoal)",
                marginBottom: 14,
              }}
            />
            <p style={{ color: "var(--charcoal-light)", fontSize: "0.95rem", lineHeight: 1.6 }}>
              We eliminate traditional interior headaches with guaranteed timelines, certified BWP marine ply, and end-to-end architect supervision.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 24,
            }}
          >
            {[
              {
                icon: Clock,
                title: "45-Day Handover Guarantee",
                desc: "No endless months of dust and contractor excuses. We adhere strictly to a 45-day turnkey delivery calendar.",
              },
              {
                icon: Shield,
                title: "10-Year Material Warranty",
                desc: "Every sheet of plywood is certified IS 710 Boiling Water Proof, paired with genuine international hardware.",
              },
              {
                icon: Flame,
                title: "100% Vastu Shastra Aligned",
                desc: "Every zone, kitchen burner, master bed orientation, and prayer space is aligned for energy and family prosperity.",
              },
              {
                icon: TrendingUp,
                title: "Transparent Fixed Pricing",
                desc: "Detailed itemized bills with no unexpected surprises or subcontractor markups.",
              },
            ].map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={i}
                  className="guarantee-card interactive-card"
                  style={{
                    background: "var(--white)",
                    borderRadius: 16,
                    padding: 30,
                    border: "1px solid rgba(0,0,0,0.06)",
                    boxShadow: "0 6px 20px rgba(0,0,0,0.04)",
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      background: "rgba(201,168,76,0.15)",
                      color: "var(--gold-dark)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 16,
                    }}
                  >
                    <Icon size={24} />
                  </div>
                  <h3
                    style={{
                      fontSize: "1.15rem",
                      fontWeight: 700,
                      color: "var(--charcoal)",
                      marginBottom: 8,
                    }}
                  >
                    {p.title}
                  </h3>
                  <p style={{ fontSize: "0.875rem", color: "var(--charcoal-light)", lineHeight: 1.55 }}>
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials - Infinite Horizontal Scrolling Marquee */}
      <section
        ref={testimonialsRef}
        style={{ padding: "90px 0 100px", background: "var(--white)", overflow: "hidden" }}
      >
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 36px" }}>
            <span
              className="page-hero-badge"
              style={{ color: "var(--charcoal)", borderColor: "var(--gold)" }}
            >
              Client Stories &amp; Accolades
            </span>
            <GsapTextReveal
              text="What Homeowners Say About Us"
              as="h2"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 3.5vw, 2.6rem)",
                fontWeight: 700,
                color: "var(--charcoal)",
              }}
            />
            <p style={{ color: "var(--charcoal-light)", fontSize: "0.95rem", marginTop: 10 }}>
              Authentic experiences from delivered residences across Visakhapatnam &amp; Hyderabad.
            </p>
          </div>
        </div>

        {/* Continuous Horizontal Scrolling Marquee Ribbon */}
        <ReviewsMarquee />
      </section>

      {/* Direct Contact / Consultation Banner */}
      <section
        style={{
          padding: "100px 0",
          background: "linear-gradient(145deg, #1C1C1C 0%, #0F0F0F 100%)",
          color: "var(--white)",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Ambient golden glow orb */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            height: "400px",
            background: "radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />

        <div className="container" style={{ maxWidth: 820, position: "relative", zIndex: 2 }}>
          <span className="page-hero-badge">Start Your Interior Journey</span>
          <GsapTextReveal
            text="Let's Design Your Home Together"
            as="h2"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.2rem, 4vw, 3.4rem)",
              fontWeight: 700,
              color: "var(--white)",
              marginBottom: 16,
              lineHeight: 1.2,
            }}
          />
          <p
            style={{
              fontSize: "1.05rem",
              color: "rgba(255,255,255,0.72)",
              marginBottom: 38,
              lineHeight: 1.6,
            }}
          >
            Visit our Madhurawada studio or schedule an on-site visit across Visakhapatnam and Hyderabad. We provide a customized 3D design concept and a transparent quote.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 18,
              flexWrap: "wrap",
            }}
          >
            <GsapMagnet strength={0.4}>
              <Link
                href="/contact"
                className="btn-primary"
                style={{ padding: "16px 32px", fontSize: 15 }}
              >
                <span>Book Free Site Visit &amp; 3D Plan</span>
                <ArrowRight size={16} />
              </Link>
            </GsapMagnet>
            <GsapMagnet strength={0.4}>
              <a
                href="https://wa.me/919391356077?text=Hello%20MVVR%20CON%20%26%20INTERIO%2C%20I%20would%20like%20to%20schedule%20a%20free%20interior%20design%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp-quote"
                style={{ padding: "16px 28px", fontSize: 15 }}
              >
                <MessageCircle size={18} />
                <span>WhatsApp Us (93913 56077)</span>
              </a>
            </GsapMagnet>
          </div>
        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </>
  );
}
