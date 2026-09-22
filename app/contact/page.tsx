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
              <Sparkles size={14} />
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
      <section style={{ padding: "80px 0", background: "var(--cream)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: 50, alignItems: "start" }}>
            {/* Left Info Column */}
            <div>
              <span className="page-hero-badge" style={{ color: "var(--charcoal)", borderColor: "var(--gold)" }}>
                Get In Touch
              </span>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, color: "var(--charcoal)", marginBottom: 14 }}>
                We Are At Your Service Across AP &amp; Telangana
              </h2>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.65, color: "var(--charcoal-light)", marginBottom: 28 }}>
                Whether you have an unfurnished apartment, an ongoing villa construction, or want to renovate an existing space — our principal interior architects are here to guide you.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 36 }}>
                {/* Phone */}
                <div style={{ display: "flex", gap: 16, background: "var(--white)", padding: "20px", borderRadius: 14, border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 4px 14px rgba(0,0,0,0.04)" }}>
                  <div style={{ width: 44, height: 44, borderRadius: 10, background: "rgba(201,168,76,0.12)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--gold-dark)", flexShrink: 0 }}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--silver)" }}>Direct Calling Numbers</div>
                    <div style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--charcoal)", marginTop: 4 }}>
                      <a href="tel:+919642186812" style={{ color: "inherit", textDecoration: "none" }}>96421 86812</a>
                      <span style={{ color: "var(--silver)", margin: "0 8px" }}>/</span>
                      <a href="tel:+919703825245" style={{ color: "inherit", textDecoration: "none" }}>97038 25245</a>
                    </div>
                    <div style={{ fontSize: 12, color: "var(--charcoal-mid)", marginTop: 2 }}>Available 9:00 AM – 9:00 PM, 7 days a week</div>
                  </div>
                </div>

                {/* WhatsApp */}
                <div style={{ display: "flex", gap: 16, background: "var(--white)", padding: "20px", borderRadius: 14, border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 4px 14px rgba(0,0,0,0.04)" }}>
                  <div style={{ width: 44, height: 44, borderRadius: 10, background: "#E8F8EE", display: "flex", alignItems: "center", justifyContent: "center", color: "#25D366", flexShrink: 0 }}>
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--silver)" }}>WhatsApp Consultation</div>
                    <div style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--charcoal)", marginTop: 4 }}>
                      <a
                        href="https://wa.me/919642186812?text=Hello%20MVVR%20CON%20%26%20INTERIO%2C%20I%20would%20like%20to%20inquire%20about%20interior%20services."
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#128C7E", textDecoration: "none" }}
                      >
                        Chat Directly (+91 96421 86812)
                      </a>
                    </div>
                    <div style={{ fontSize: 12, color: "var(--charcoal-mid)", marginTop: 2 }}>Send floor plans &amp; receive instant 3D ideas</div>
                  </div>
                </div>

                {/* Studio Location */}
                <div style={{ display: "flex", gap: 16, background: "var(--white)", padding: "20px", borderRadius: 14, border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 4px 14px rgba(0,0,0,0.04)" }}>
                  <div style={{ width: 44, height: 44, borderRadius: 10, background: "rgba(201,168,76,0.12)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--gold-dark)", flexShrink: 0 }}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--silver)" }}>Visakhapatnam Design Studio</div>
                    <div style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--charcoal)", marginTop: 4, lineHeight: 1.5 }}>
                      #6-87/1/GF101, 1st Floor, Sai Priya Layout,<br />
                      Kommadhi Road, Madhurawada,<br />
                      Visakhapatnam - 530041, Andhra Pradesh
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div style={{ display: "flex", gap: 16, background: "var(--white)", padding: "20px", borderRadius: 14, border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 4px 14px rgba(0,0,0,0.04)" }}>
                  <div style={{ width: 44, height: 44, borderRadius: 10, background: "rgba(201,168,76,0.12)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--gold-dark)", flexShrink: 0 }}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--silver)" }}>Official Email</div>
                    <div style={{ fontSize: "1rem", fontWeight: 600, color: "var(--charcoal)", marginTop: 4 }}>
                      <a href="mailto:mvvrconinterio@gmail.com" style={{ color: "inherit", textDecoration: "none" }}>
                        mvvrconinterio@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Guarantees Box */}
              <div style={{ background: "var(--charcoal)", color: "var(--white)", padding: "24px", borderRadius: 14, display: "flex", flexDirection: "column", gap: 12 }}>
                <h4 style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--gold-light)" }}>
                  Our Standard Commitments
                </h4>
                <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: "rgba(255,255,255,0.8)" }}>
                  <CheckCircle2 size={16} color="var(--gold)" />
                  <span>45-Day Handover Guarantee or Delay Compensation</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: "rgba(255,255,255,0.8)" }}>
                  <CheckCircle2 size={16} color="var(--gold)" />
                  <span>10-Year Comprehensive Hardware &amp; Plywood Warranty</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: "rgba(255,255,255,0.8)" }}>
                  <CheckCircle2 size={16} color="var(--gold)" />
                  <span>100% Vastu-Compliant 3D Floor Plan Layouts</span>
                </div>
              </div>
            </div>

            {/* Right Form Card */}
            <div style={{ background: "var(--white)", borderRadius: 20, padding: "40px", boxShadow: "0 12px 40px rgba(0,0,0,0.08)", border: "1px solid rgba(0,0,0,0.06)" }}>
              {submitted ? (
                <div style={{ textAlign: "center", padding: "40px 20px" }}>
                  <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(201,168,76,0.15)", color: "var(--gold-dark)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem", fontWeight: 700, color: "var(--charcoal)", marginBottom: 12 }}>
                    Consultation Request Received!
                  </h3>
                  <p style={{ fontSize: "0.95rem", color: "var(--charcoal-light)", lineHeight: 1.6, marginBottom: 24 }}>
                    Thank you, <strong>{formData.name}</strong>. Our senior interior architect will contact you at <strong>{formData.phone}</strong> within 3 business hours to discuss your {formData.propertyType} project.
                  </p>

                  <a
                    href={`https://wa.me/919642186812?text=${whatsappInquiryMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp-quote"
                    style={{ margin: "0 auto", maxWidth: 360 }}
                  >
                    <MessageCircle size={18} />
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
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", fontWeight: 700, color: "var(--charcoal)", marginBottom: 6 }}>
                      Schedule A Complimentary Design Meeting
                    </h3>
                    <p style={{ fontSize: "0.875rem", color: "var(--charcoal-mid)" }}>
                      Fill in your space details. We will prepare an initial layout idea before we connect.
                    </p>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    <div>
                      <label style={{ fontSize: 12, fontWeight: 600, color: "var(--charcoal)", display: "block", marginBottom: 6 }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Kumar"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        style={{ width: "100%", padding: "12px 14px", borderRadius: 8, border: "1px solid rgba(0,0,0,0.15)", fontSize: 14, outline: "none" }}
                      />
                    </div>
                    <div>
                      <label style={{ fontSize: 12, fontWeight: 600, color: "var(--charcoal)", display: "block", marginBottom: 6 }}>
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 98765 43210"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        style={{ width: "100%", padding: "12px 14px", borderRadius: 8, border: "1px solid rgba(0,0,0,0.15)", fontSize: 14, outline: "none" }}
                      />
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    <div>
                      <label style={{ fontSize: 12, fontWeight: 600, color: "var(--charcoal)", display: "block", marginBottom: 6 }}>
                        City / Location *
                      </label>
                      <select
                        value={formData.city}
                        onChange={e => setFormData({ ...formData, city: e.target.value })}
                        style={{ width: "100%", padding: "12px 14px", borderRadius: 8, border: "1px solid rgba(0,0,0,0.15)", fontSize: 14, outline: "none", background: "var(--white)" }}
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

                    <div>
                      <label style={{ fontSize: 12, fontWeight: 600, color: "var(--charcoal)", display: "block", marginBottom: 6 }}>
                        Property Type *
                      </label>
                      <select
                        value={formData.propertyType}
                        onChange={e => setFormData({ ...formData, propertyType: e.target.value })}
                        style={{ width: "100%", padding: "12px 14px", borderRadius: 8, border: "1px solid rgba(0,0,0,0.15)", fontSize: 14, outline: "none", background: "var(--white)" }}
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

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    <div>
                      <label style={{ fontSize: 12, fontWeight: 600, color: "var(--charcoal)", display: "block", marginBottom: 6 }}>
                        Estimated Carpet Area (sq.ft)
                      </label>
                      <input
                        type="number"
                        placeholder="e.g. 1500"
                        value={formData.carpetArea}
                        onChange={e => setFormData({ ...formData, carpetArea: e.target.value })}
                        style={{ width: "100%", padding: "12px 14px", borderRadius: 8, border: "1px solid rgba(0,0,0,0.15)", fontSize: 14, outline: "none" }}
                      />
                    </div>

                    <div>
                      <label style={{ fontSize: 12, fontWeight: 600, color: "var(--charcoal)", display: "block", marginBottom: 6 }}>
                        Target Package Tier
                      </label>
                      <select
                        value={formData.packagePreference}
                        onChange={e => setFormData({ ...formData, packagePreference: e.target.value })}
                        style={{ width: "100%", padding: "12px 14px", borderRadius: 8, border: "1px solid rgba(0,0,0,0.15)", fontSize: 14, outline: "none", background: "var(--white)" }}
                      >
                        <option value="Basic Essential (₹900/sqft)">Basic Essential (₹900/sqft)</option>
                        <option value="Standard Modern (₹1,450/sqft)">Standard Modern (₹1,450/sqft)</option>
                        <option value="Premium Luxury (₹2,150/sqft)">Premium Luxury (₹2,150/sqft)</option>
                        <option value="Need Guidance">Need Guidance During Visit</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ fontSize: 12, fontWeight: 600, color: "var(--charcoal)", display: "block", marginBottom: 6 }}>
                      Specific Requirements / Questions
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Possession date, Pooja room orientation, modular kitchen layout, or special requirements..."
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      style={{ width: "100%", padding: "12px 14px", borderRadius: 8, border: "1px solid rgba(0,0,0,0.15)", fontSize: 14, outline: "none", resize: "vertical" }}
                    />
                  </div>

                  <GsapMagnet strength={0.25} style={{ width: "100%" }}>
                    <button
                      type="submit"
                      className="btn-primary"
                      style={{ padding: "14px 24px", fontSize: 14, width: "100%", justifyContent: "center" }}
                    >
                      <span>Request Free 3D Design Consultation</span>
                      <Send size={15} />
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
