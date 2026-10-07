"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Phone, ArrowRight, Menu, X, ChevronDown, ChevronRight,
  Home, Building2, KeyRound, Hammer, Ruler,
  Box, Monitor, Video, LayoutGrid, MessageSquare,
  Armchair, ChefHat, DoorClosed, Lightbulb, BedDouble, Flame
} from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

export function MVVRLogo({ size = "md", dark = false }: { size?: "sm" | "md" | "lg"; dark?: boolean }) {
  const scales = { sm: 0.8, md: 1, lg: 1.25 };
  const s = scales[size];
  return (
    <div className="navbar-logo" style={{ transform: `scale(${s})`, transformOrigin: "left center" }}>
      <div className="logo-mark">
        <Image
          src="/mvvr-m-icon.png"
          alt="MVVR Icon"
          width={48}
          height={35}
          priority
          style={{ objectFit: "contain", width: "100%", height: "100%" }}
        />
      </div>
      <div className="logo-text-block">
        <div className="logo-main">
          MVVR <span>CON</span> &amp; INTERIO
        </div>
        <div className="logo-sub">Constructions &amp; Interiors · Est. 2018</div>
      </div>
    </div>
  );
}

const MEGA_MENU_DATA = [
  {
    category: "Construction",
    href: "/services#construction",
    image: "/portfolio-villa.jpg",
    items: [
      { label: "Residential Construction", href: "/services#construction", icon: Home },
      { label: "Commercial Construction", href: "/services#construction", icon: Building2 },
      { label: "Turnkey Projects", href: "/services#construction", icon: KeyRound },
      { label: "Renovation & Remodeling", href: "/services#construction", icon: Hammer },
      { label: "Structural & Architectural Works", href: "/services#construction", icon: Ruler },
    ],
  },
  {
    category: "3D Design",
    href: "/services#3d-design",
    image: "/hero-living.jpg",
    items: [
      { label: "3D Elevations", href: "/services#3d-design", icon: Box },
      { label: "3D Interior Visualization", href: "/services#3d-design", icon: Monitor },
      { label: "Walkthrough Videos", href: "/services#3d-design", icon: Video },
      { label: "Space Planning", href: "/services#3d-design", icon: LayoutGrid },
      { label: "Design Consultation", href: "/services#3d-design", icon: MessageSquare },
    ],
  },
  {
    category: "Interiors",
    href: "/services#interiors",
    image: "/kitchen-island.jpg",
    items: [
      { label: "Residential Interiors", href: "/services#interiors", icon: Armchair },
      { label: "Modular Kitchens", href: "/services#interiors", icon: ChefHat },
      { label: "Wardrobes & Storage", href: "/services#interiors", icon: DoorClosed },
      { label: "False Ceiling & Lighting", href: "/services#interiors", icon: Lightbulb },
      { label: "Custom Furniture", href: "/services#interiors", icon: BedDouble },
      { label: "Pooja Units", href: "/services#interiors", icon: Flame },
    ],
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const closeTimer = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMouseEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMegaOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => {
      setMegaOpen(false);
    }, 180);
  };

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services", hasMega: true },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Pricing & Calculator", href: "/pricing" },
    { label: "Blog", href: "/blog" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-inner">
        <Link href="/" aria-label="MVVR CON & INTERIO Home" onClick={() => setMobileOpen(false)}>
          <MVVRLogo />
        </Link>

        {/* Desktop Nav Links */}
        <div className="nav-links">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.hasMega && pathname.startsWith("/services"));

            if (link.hasMega) {
              return (
                <div
                  key={link.href}
                  className="nav-item-dropdown"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={link.href}
                    className={`nav-link ${isActive ? "active" : ""}`}
                    onClick={() => setMegaOpen(false)}
                  >
                    <span>{link.label}</span>
                    <ChevronDown
                      size={12}
                      strokeWidth={2.2}
                      style={{
                        marginLeft: 4,
                        transition: "transform 0.2s ease",
                        transform: megaOpen ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    />
                  </Link>

                  {/* Mega Menu Dropdown */}
                  <div className={`services-mega-menu ${megaOpen ? "open" : ""}`}>
                    {MEGA_MENU_DATA.map((col) => (
                      <div key={col.category} className="mega-col">
                        <Link
                          href={col.href}
                          className="mega-col-header"
                          onClick={() => setMegaOpen(false)}
                        >
                          <span>{col.category}</span>
                          <ChevronRight size={14} strokeWidth={2.4} />
                        </Link>

                        <div className="mega-col-img-box">
                          <Image
                            src={col.image}
                            alt={col.category}
                            fill
                            sizes="300px"
                            style={{ objectFit: "cover" }}
                          />
                        </div>

                        <ul className="mega-col-items">
                          {col.items.map((sub) => {
                            const Icon = sub.icon;
                            return (
                              <li key={sub.label}>
                                <Link
                                  href={sub.href}
                                  className="mega-sub-link"
                                  onClick={() => setMegaOpen(false)}
                                >
                                  <div className="mega-sub-left">
                                    <Icon size={15} strokeWidth={2} className="mega-sub-icon" />
                                    <span>{sub.label}</span>
                                  </div>
                                  <ChevronRight size={12} strokeWidth={2} className="mega-sub-arrow" />
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${isActive ? "active" : ""}`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop Actions */}
        <div className="nav-actions">
          <a
            href="tel:+919391356077"
            className="nav-phone"
            aria-label="Call MVVR Interiors"
          >
            <Phone size={13} strokeWidth={2} />
            <span>93913 56077</span>
          </a>
          <Link href="/pricing" className="btn-primary" id="nav-cta-btn">
            <span>Free 3D Estimate</span>
            <ArrowRight size={13} strokeWidth={2.2} />
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={20} strokeWidth={2} /> : <Menu size={20} strokeWidth={2} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="mobile-menu open">
          {navLinks.map((link) => {
            if (link.hasMega) {
              return (
                <div key={link.href} style={{ display: "flex", flexDirection: "column" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Link
                      href={link.href}
                      className={`mobile-nav-link ${pathname === link.href ? "active" : ""}`}
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                    <button
                      type="button"
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      style={{
                        background: "none",
                        border: "none",
                        padding: 10,
                        cursor: "pointer",
                        color: "var(--charcoal)",
                      }}
                      aria-label="Toggle services submenu"
                    >
                      <ChevronDown
                        size={16}
                        strokeWidth={2}
                        style={{
                          transform: mobileServicesOpen ? "rotate(180deg)" : "rotate(0deg)",
                          transition: "transform 0.2s ease",
                        }}
                      />
                    </button>
                  </div>
                  {mobileServicesOpen && (
                    <div
                      style={{
                        paddingLeft: 16,
                        display: "flex",
                        flexDirection: "column",
                        gap: 8,
                        marginBottom: 10,
                      }}
                    >
                      {MEGA_MENU_DATA.map((col) => (
                        <div key={col.category}>
                          <Link
                            href={col.href}
                            style={{
                              fontSize: 13,
                              fontWeight: 700,
                              color: "var(--liv-pink)",
                              textDecoration: "none",
                              display: "block",
                              marginBottom: 4,
                            }}
                            onClick={() => setMobileOpen(false)}
                          >
                            {col.category} →
                          </Link>
                          {col.items.map((sub) => (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              style={{
                                fontSize: 12,
                                color: "#64748B",
                                textDecoration: "none",
                                display: "block",
                                padding: "3px 0",
                              }}
                              onClick={() => setMobileOpen(false)}
                            >
                              • {sub.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`mobile-nav-link ${pathname === link.href ? "active" : ""}`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
          <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 10 }}>
            <a
              href="tel:+919391356077"
              className="btn-outline"
              style={{ justifyContent: "center", color: "var(--liv-blue)", borderColor: "var(--liv-blue-border)", background: "var(--liv-blue-soft)" }}
            >
              <Phone size={15} strokeWidth={2} />
              <span>Call: 93913 56077</span>
            </a>
            <a
              href="https://wa.me/919391356077?text=Hello%20MVVR%20CON%20%26%20INTERIO%2C%20I%20would%20like%20to%20inquire%20about%20interior%20design%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ justifyContent: "center", background: "#25D366", borderColor: "#25D366", color: "#FFF" }}
            >
              <WhatsAppIcon size={16} />
              <span>WhatsApp Us Now</span>
            </a>
            <Link
              href="/pricing"
              className="btn-primary"
              style={{ justifyContent: "center", padding: "14px 20px" }}
              onClick={() => setMobileOpen(false)}
            >
              <span>Instant Cost Calculator</span>
              <ArrowRight size={15} strokeWidth={2.2} />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
