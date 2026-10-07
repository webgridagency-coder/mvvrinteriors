"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Sparkles, Phone, Mail, MapPin, MessageCircle, Clock,
  ArrowRight, CheckCircle2, Shield, Calendar, Send
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import AnnouncementBar from "@/components/AnnouncementBar";
import WhatsAppButton from "@/components/WhatsAppButton";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import GsapTextReveal from "@/components/GsapTextReveal";
import GsapMagnet from "@/components/GsapMagnet";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "Visakhapatnam",
    propertyType: "3 BHK",
    carpetArea: "",
    packagePreference: "Standard Modern",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappInquiryMessage = encodeURIComponent(
    `Hello MVVR CON & INTERIO, my name is ${formData.name || "Client"}. ` +
    `I am inquiring about interior design for my ${formData.propertyType} (${formData.carpetArea || "standard"} sqft) in ${formData.city}. ` +
    `Package preference: ${formData.packagePreference}. Looking forward to scheduling a free 3D design consultation.`
  );

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
              <span>Contact</span>
            </div>
            <div className="page-hero-badge">
              <Sparkles size={14} strokeWidth={2} />
              <span>Free Consultation &amp; Site Review</span>
            </div>
            <GsapTextReveal
              text="Let's Design Your Dream Living Space"
              as="h1"
              className="page-hero-title"
              style={{ color: "var(--white)" }}
            />
            <p className="page-hero-desc">
              Schedule a personalized site visit or visit our Madhurawada studio to review material finishes, 3D architectural renders, and get a fixed-price quotation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact & Booking Grid */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Left Info Column */}
            <div className="contact-info-col">
              <span className="page-hero-badge" style={{ color: "var(--charcoal)", borderColor: "var(--liv-pink)" }}>
                Get In Touch
              </span>
              <h2 className="contact-title">
                We Are At Your Service Across AP &amp; Telangana
              </h2>
              <p className="contact-desc">
                Whether you have an unfurnished apartment, an ongoing villa construction, or want to renovate an existing space — our principal interior architects are here to guide you.
              </p>

              <div className="contact-card-list">
                {/* Phone */}
                <div className="contact-info-card">
                  <div className="contact-icon-box">
                    <Phone size={20} strokeWidth={1.8} />
                  </div>
                  <div>
                    <div className="contact-card-label">Direct Calling Number</div>
                    <div className="contact-card-value">
                      <a href="tel:+919391356077" style={{ color: "inherit", textDecoration: "none" }}>+91 93913 56077</a>
                    </div>
                    <div className="contact-card-sub">Available 9:00 AM – 9:00 PM, 7 days a week</div>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="contact-info-card">
                  <div className="contact-icon-box whatsapp">
                    <WhatsAppIcon size={20} />
                  </div>
                  <div>
                    <div className="contact-card-label">WhatsApp Consultation</div>
                    <div className="contact-card-value">
                      <a
                        href="https://wa.me/919391356077?text=Hello%20MVVR%20CON%20%26%20INTERIO%2C%20I%20would%20like%20to%20inquire%20about%20interior%20services."
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#128C7E", textDecoration: "none" }}
                      >
                        Chat Directly (+91 93913 56077)
                      </a>
                    </div>
                    <div className="contact-card-sub">Send floor plans &amp; receive instant 3D ideas</div>
                  </div>
                </div>

                {/* Studio Location */}
                <div className="contact-info-card">
                  <div className="contact-icon-box">
                    <MapPin size={20} strokeWidth={1.8} />
                  </div>
                  <div>
                    <div className="contact-card-label">Visakhapatnam Design Studio</div>
                    <div className="contact-card-value" style={{ fontSize: "0.95rem", fontWeight: 600 }}>
                      #6-87/1/GF101, 1st Floor, Sai Priya Layout,<br />
                      Kommadhi Road, Madhurawada,<br />
                      Visakhapatnam - 530041, Andhra Pradesh
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="contact-info-card">
                  <div className="contact-icon-box">
                    <Mail size={20} strokeWidth={1.8} />
                  </div>
                  <div>
                    <div className="contact-card-label">Official Email</div>
                    <div className="contact-card-value" style={{ fontSize: "1rem", fontWeight: 600 }}>
                      <a href="mailto:mvvrconinterio@gmail.com" style={{ color: "inherit", textDecoration: "none" }}>
                        mvvrconinterio@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Guarantees Box */}
              <div className="contact-guarantees-card">
                <h4 style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--liv-pink-light)" }}>
                  Our Standard Commitments
                </h4>
                <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: "rgba(255,255,255,0.9)" }}>
                  <CheckCircle2 size={16} strokeWidth={2} color="var(--liv-pink-light)" />
                  <span>45-Day Handover Guarantee or Delay Compensation</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: "rgba(255,255,255,0.9)" }}>
                  <CheckCircle2 size={16} strokeWidth={2} color="var(--liv-pink-light)" />
                  <span>10-Year Comprehensive Hardware &amp; Plywood Warranty</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: "rgba(255,255,255,0.9)" }}>
                  <CheckCircle2 size={16} strokeWidth={2} color="var(--liv-pink-light)" />
                  <span>100% Vastu-Compliant 3D Floor Plan Layouts</span>
                </div>
              </div>
            </div>

            {/* Right Form Card */}
            <div className="contact-form-card">
              {submitted ? (
                <div style={{ textAlign: "center", padding: "40px 20px" }}>
                  <div style={{ width: 64, height: 64, borderRadius: "50%", background: "var(--liv-pink-soft)", color: "var(--liv-pink)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                    <CheckCircle2 size={36} strokeWidth={2} />
                  </div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem", fontWeight: 700, color: "var(--charcoal)", marginBottom: 12 }}>
                    Consultation Request Received!
                  </h3>
                  <p style={{ fontSize: "0.95rem", color: "var(--charcoal-light)", lineHeight: 1.6, marginBottom: 24 }}>
                    Thank you, <strong>{formData.name}</strong>. Our senior interior architect will contact you at <strong>{formData.phone}</strong> within 3 business hours to discuss your {formData.propertyType} project.
                  </p>

                  <a
                    href={`https://wa.me/919391356077?text=${whatsappInquiryMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp-quote"
                    style={{ margin: "0 auto", maxWidth: 360 }}
                  >
                    <WhatsAppIcon size={18} />
                    <span>Send Details to Architect on WhatsApp Now</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    style={{ marginTop: 20, background: "none", border: "none", color: "var(--silver)", cursor: "pointer", fontSize: 13, textDecoration: "underline" }}
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  <div>
                    <h3 className="contact-form-title">
                      Schedule A Complimentary Design Meeting
                    </h3>
                    <p className="contact-form-subtitle">
                      Fill in your space details. We will prepare an initial layout idea before we connect.
                    </p>
                  </div>

                  <div className="contact-form-row">
                    <div className="contact-field-group">
                      <label className="contact-field-label">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Kumar"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        className="contact-field-input"
                      />
                    </div>
                    <div className="contact-field-group">
                      <label className="contact-field-label">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 98765 43210"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        className="contact-field-input"
                      />
                    </div>
                  </div>

                  <div className="contact-form-row">
                    <div className="contact-field-group">
                      <label className="contact-field-label">
                        City / Location *
                      </label>
                      <select
                        value={formData.city}
                        onChange={e => setFormData({ ...formData, city: e.target.value })}
                        className="contact-field-select"
                      >
                        <option value="Visakhapatnam">Visakhapatnam (Vizag)</option>
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="Vijayawada">Vijayawada</option>
                        <option value="Guntur">Guntur</option>
                        <option value="Vizianagaram">Vizianagaram</option>
                        <option value="Kakinada">Kakinada</option>
                        <option value="Other AP/Telangana">Other AP / Telangana</option>
                      </select>
                    </div>

                    <div className="contact-field-group">
                      <label className="contact-field-label">
                        Property Type *
                      </label>
                      <select
                        value={formData.propertyType}
                        onChange={e => setFormData({ ...formData, propertyType: e.target.value })}
                        className="contact-field-select"
                      >
                        <option value="2 BHK Apartment">2 BHK Apartment</option>
                        <option value="3 BHK Apartment">3 BHK Apartment</option>
                        <option value="4 BHK Luxury Flat">4 BHK Luxury Flat</option>
                        <option value="Independent Villa / Duplex">Independent Villa / Duplex</option>
                        <option value="Commercial Office Space">Commercial Office Space</option>
                        <option value="Modular Kitchen Only">Modular Kitchen Only</option>
                      </select>
                    </div>
                  </div>

                  <div className="contact-form-row">
                    <div className="contact-field-group">
                      <label className="contact-field-label">
                        Estimated Carpet Area (sq.ft)
                      </label>
                      <input
                        type="number"
                        placeholder="e.g. 1500"
                        value={formData.carpetArea}
                        onChange={e => setFormData({ ...formData, carpetArea: e.target.value })}
                        className="contact-field-input"
                      />
                    </div>

                    <div className="contact-field-group">
                      <label className="contact-field-label">
                        Target Package Tier
                      </label>
                      <select
                        value={formData.packagePreference}
                        onChange={e => setFormData({ ...formData, packagePreference: e.target.value })}
                        className="contact-field-select"
                      >
                        <option value="Basic Essential (₹900/sqft)">Basic Essential (₹900/sqft)</option>
                        <option value="Standard Modern (₹1,450/sqft)">Standard Modern (₹1,450/sqft)</option>
                        <option value="Premium Luxury (₹2,150/sqft)">Premium Luxury (₹2,150/sqft)</option>
                        <option value="Need Guidance">Need Guidance During Visit</option>
                      </select>
                    </div>
                  </div>

                  <div className="contact-field-group">
                    <label className="contact-field-label">
                      Specific Requirements / Questions
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Possession date, Pooja room orientation, modular kitchen layout, or special requirements..."
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      className="contact-field-textarea"
                    />
                  </div>

                  <GsapMagnet strength={0.25} style={{ width: "100%" }}>
                    <button
                      type="submit"
                      className="btn-primary"
                      style={{ padding: "14px 24px", fontSize: 14, width: "100%", justifyContent: "center" }}
                    >
                      <span>Request Free 3D Design Consultation</span>
                      <Send size={15} strokeWidth={2} />
                    </button>
                  </GsapMagnet>

                  <div style={{ textAlign: "center", fontSize: 11, color: "var(--silver)" }}>
                    We respect your privacy. No spam. A senior architect will reach out directly.
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </>
  );
}
