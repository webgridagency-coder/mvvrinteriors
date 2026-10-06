"use client";

import { Clock, Shield, CreditCard, Sparkles, CheckCircle, Award, Compass, Layers } from "lucide-react";
import Link from "next/link";

const PERKS = [
  {
    icon: Clock,
    title: "Flat 45-Day Move-In",
    highlight: "Strict Delivery Guarantee",
    desc: "We adhere to a fixed 45-day turnkey calendar with daily WhatsApp photo tracking. Zero contractor excuses.",
    accent: "#FF5436",
    bg: "#FFF4F0",
    border: "#FECACA",
  },
  {
    icon: Shield,
    title: "10-Year BWP Warranty",
    highlight: "Certified IS 710 Plywood",
    desc: "100% Boiling Water Proof marine ply paired with authentic Blum & Hafele hardware. Termite & borer proof.",
    accent: "#059669",
    bg: "#ECFDF5",
    border: "#A7F3D0",
  },
  {
    icon: CreditCard,
    title: "No-Cost EMI from ₹12,999",
    highlight: "Zero Interest Schemes",
    desc: "Partnered with leading national banks to offer seamless EMI options so your dream home doesn't strain your savings.",
    accent: "#2563EB",
    bg: "#EFF6FF",
    border: "#BFDBFE",
  },
  {
    icon: Compass,
    title: "100% Vastu Shastra Aligned",
    highlight: "Ishanya & Agneya Perfection",
    desc: "Kitchen burner, master bed alignment, pooja mandir and mirror placements mapped by Vedic design principles.",
    accent: "#D97706",
    bg: "#FEF3C7",
    border: "#FDE68A",
  },
  {
    icon: Layers,
    title: "146 Quality Audits",
    highlight: "Supervised by In-House Architects",
    desc: "From laser level checks to laminate edge-banding adhesion, every millimeter passes rigorous quality gates.",
    accent: "#7C3AED",
    bg: "#F5F3FF",
    border: "#DDD6FE",
  },
  {
    icon: Award,
    title: "Zero Hidden Markups",
    highlight: "Transparent Itemized Pricing",
    desc: "What you see is what you pay. Transparent square-foot & unit breakdowns with 0 surprise change orders.",
    accent: "#DB2777",
    bg: "#FDF2F8",
    border: "#FBCFE8",
  },
];

export default function LivspacePerks() {
  return (
    <section className="livspace-perks-section" id="perks">
      <div className="container">
        <div className="perks-header">
          <div className="funky-pill-tag" style={{ background: "#F0FDF4", borderColor: "#BBF7D0", color: "#15803D" }}>
            <Sparkles size={14} />
            <span>WHY CHOOSE MVVR · THE UNBEATABLE ADVANTAGE</span>
          </div>
          <h2 className="perks-title">
            Everything Livspace Promises, <span className="text-gradient-funky">Engineered Even Better</span>
          </h2>
          <p className="perks-desc">
            Direct factory manufacturing in Visakhapatnam + seasoned in-house architects who personally supervise your site every single day.
          </p>
        </div>

        <div className="perks-grid">
          {PERKS.map((perk, i) => {
            const Icon = perk.icon;
            return (
              <div
                key={i}
                className="perk-card-funky"
                style={{
                  background: perk.bg,
                  borderColor: perk.border,
                }}
              >
                <div
                  className="perk-icon-bubble"
                  style={{ background: perk.accent, color: "#FFFFFF" }}
                >
                  <Icon size={24} />
                </div>
                <span className="perk-highlight-tag" style={{ color: perk.accent }}>
                  {perk.highlight}
                </span>
                <h3 className="perk-card-title">{perk.title}</h3>
                <p className="perk-card-desc">{perk.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
