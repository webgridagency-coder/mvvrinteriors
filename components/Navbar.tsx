"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, ArrowRight, Menu, X, Sparkles, Flame } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import AnnouncementBar from "./AnnouncementBar";

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

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Explore Rooms", href: "/#explore-rooms", badge: "NEW" },
    { label: "Color Vibe", href: "/#moodboard", badge: "VIBE" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Cost Calculator", href: "/pricing", badge: "HOT" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <AnnouncementBar />
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar-inner">
          <Link href="/" aria-label="MVVR CON & INTERIO Home" onClick={() => setMobileOpen(false)}>
            <MVVRLogo />
          </Link>

          {/* Desktop Nav Links */}
          <div className="nav-links">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link ${isActive ? "active" : ""}`}
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span
                      className={`nav-badge-pill badge-${link.badge.toLowerCase()}`}
                    >
                      {link.badge}
                    </span>
                  )}
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
              <span className="phone-pulse-dot" />
              <Phone size={13} />
              <span>93913 56077</span>
            </a>
            <Link href="/pricing" className="btn-primary-funky" id="nav-cta-btn">
              <span>Free 3D Estimate</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Drawer */}
        {mobileOpen && (
          <div className="mobile-menu open">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`mobile-nav-link ${pathname === link.href ? "active" : ""}`}
                onClick={() => setMobileOpen(false)}
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className={`nav-badge-pill badge-${link.badge.toLowerCase()}`}>
                    {link.badge}
                  </span>
                )}
              </Link>
            ))}
            <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 10 }}>
              <a
                href="tel:+919391356077"
                className="btn-outline"
                style={{ justifyContent: "center", color: "#FFFFFF", borderColor: "rgba(255,255,255,0.2)" }}
              >
                <Phone size={16} />
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
                className="btn-primary-funky"
                style={{ justifyContent: "center", padding: "14px 20px" }}
                onClick={() => setMobileOpen(false)}
              >
                <span>Instant Cost Calculator</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
