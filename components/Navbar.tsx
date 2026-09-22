"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, ArrowRight, Menu, X, MessageCircle } from "lucide-react";

export function MVVRLogo({ size = "md", dark = false }: { size?: "sm" | "md" | "lg"; dark?: boolean }) {
  const scales = { sm: 0.75, md: 1, lg: 1.3 };
  const s = scales[size];
  return (
    <div className="navbar-logo" style={{ transform: `scale(${s})`, transformOrigin: "left center" }}>
      <div className="logo-mark">
        <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="44" height="44" rx="4" fill={dark ? "#141414" : "transparent"} />
          <path
            d="M6 34V10L14 22L22 10L30 22L38 10V34"
            stroke="url(#goldGrad)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M6 34L14 34M30 34L38 34"
            stroke="url(#goldGrad)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="goldGrad" x1="6" y1="10" x2="38" y2="34" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#E8C97A" />
              <stop offset="50%" stopColor="#C9A84C" />
              <stop offset="100%" stopColor="#A07830" />
            </linearGradient>
          </defs>
        </svg>
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
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Pricing & Calculator", href: "/pricing" },
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
          {navLinks.map(link => {
            const isActive = pathname === link.href;
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
            href="tel:+919642186812"
            className="nav-phone"
            aria-label="Call MVVR Interiors"
          >
            <Phone size={14} />
            <span>96421 86812</span>
          </a>
          <Link href="/contact" className="btn-primary" id="nav-cta-btn">
            <span>Free 3D Consultation</span>
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
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="mobile-menu open">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`mobile-nav-link ${pathname === link.href ? "active" : ""}`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 12 }}>
            <a
              href="tel:+919642186812"
              className="btn-outline"
              style={{ justifyContent: "center" }}
            >
              <Phone size={16} />
              <span>Call: 96421 86812</span>
            </a>
            <a
              href="https://wa.me/919642186812?text=Hello%20MVVR%20CON%20%26%20INTERIO%2C%20I%20would%20like%20to%20inquire%20about%20interior%20design%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ justifyContent: "center", background: "#25D366", borderColor: "#25D366", color: "#FFF" }}
            >
              <MessageCircle size={16} />
              <span>WhatsApp Us Now</span>
            </a>
            <Link
              href="/contact"
              className="btn-primary"
              style={{ justifyContent: "center" }}
              onClick={() => setMobileOpen(false)}
            >
              <span>Book Site Visit &amp; 3D Plan</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
