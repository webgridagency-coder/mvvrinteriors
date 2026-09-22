"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight, MessageCircle } from "lucide-react";
import { MVVRLogo } from "./Navbar";

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}

function YoutubeIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
      <polygon points="10 15 15 12 10 9 10 15" fill="currentColor"/>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <MVVRLogo />
            <p>
              Premier interior design and execution studio based in Madhurawada, Visakhapatnam. Transforming residential and commercial spaces across Andhra Pradesh and Telangana with 100% Vastu-compliant, bespoke architectural interior craftsmanship since 2018.
            </p>
            <div className="footer-social" aria-label="Social media links">
              <a
                href="https://www.instagram.com/mvvr_con_interio"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Instagram"
              >
                <InstagramIcon size={16} />
              </a>
              <a href="#" className="social-link" aria-label="Facebook">
                <FacebookIcon size={16} />
              </a>
              <a href="#" className="social-link" aria-label="YouTube">
                <YoutubeIcon size={16} />
              </a>
              <a
                href="https://wa.me/919642186812"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="WhatsApp"
              >
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="footer-col-title">Navigation</div>
            <ul className="footer-links">
              <li><Link href="/"><ArrowRight size={10} />Home Overview</Link></li>
              <li><Link href="/services"><ArrowRight size={10} />Interior Services</Link></li>
              <li><Link href="/portfolio"><ArrowRight size={10} />Realized Projects</Link></li>
              <li><Link href="/pricing"><ArrowRight size={10} />Pricing &amp; Calculator</Link></li>
              <li><Link href="/about"><ArrowRight size={10} />About Studio &amp; Team</Link></li>
              <li><Link href="/contact"><ArrowRight size={10} />Consultation &amp; Studio</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <div className="footer-col-title">Interior Services</div>
            <ul className="footer-links">
              <li><Link href="/services"><ArrowRight size={10} />Modern 2BHK / 3BHK Interiors</Link></li>
              <li><Link href="/services"><ArrowRight size={10} />Ultra Luxury Villa Interiors</Link></li>
              <li><Link href="/services"><ArrowRight size={10} />Bespoke Modular Kitchens</Link></li>
              <li><Link href="/services"><ArrowRight size={10} />Master Suites &amp; Walk-in Closets</Link></li>
              <li><Link href="/services"><ArrowRight size={10} />Traditional &amp; Modern Pooja Mandir</Link></li>
              <li><Link href="/services"><ArrowRight size={10} />False Ceiling &amp; Profile Lighting</Link></li>
              <li><Link href="/services"><ArrowRight size={10} />Corporate &amp; Commercial Spaces</Link></li>
            </ul>
          </div>

          {/* Contact details */}
          <div>
            <div className="footer-col-title">Visakhapatnam Studio</div>
            <div className="footer-contact-item">
              <MapPin size={16} />
              <span>
                #6-87/1/GF101, 1st Floor, Sai Priya Layout,<br />
                Kommadhi Road, Madhurawada,<br />
                Visakhapatnam - 530041, AP
              </span>
            </div>
            <div className="footer-contact-item">
              <Phone size={14} />
              <div>
                <a href="tel:+919642186812">96421 86812</a> /{" "}
                <a href="tel:+919703825245">97038 25245</a>
              </div>
            </div>
            <div className="footer-contact-item">
              <Mail size={14} />
              <a href="mailto:mvvrconinterio@gmail.com">mvvrconinterio@gmail.com</a>
            </div>
            <div style={{ marginTop: 16 }}>
              <Link href="/contact" className="btn-primary" style={{ padding: "10px 18px", fontSize: "12px", width: "100%", justifyContent: "center" }}>
                <span>Book Studio Visit</span>
                <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copy">
            &copy; {new Date().getFullYear()} MVVR CON &amp; INTERIO. All rights reserved. Visakhapatnam &amp; Hyderabad.
          </div>
          <div className="footer-cert">
            <span>ISO 9001:2015 Process Compliant</span>
            <span>·</span>
            <span>45-Day Handover Guarantee</span>
            <span>·</span>
            <span>10-Year Warranty</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
