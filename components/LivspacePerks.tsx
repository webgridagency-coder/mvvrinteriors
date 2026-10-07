"use client";

import { Clock, ShieldCheck, CreditCard, Award, Compass, Layers, Leaf } from "lucide-react";
import Link from "next/link";

const PERKS = [
  {
    icon: Clock,
    title: "45-Day Handover Guarantee",
    highlight: "Strict Delivery Calendar",
    desc: "Fixed timeline with milestone scheduling. Transparent weekly progress reports and zero contractor excuses.",
    theme: "pink",
  },
  {
    icon: Leaf,
    title: "10-Year Comprehensive Warranty",
    highlight: "IS 710 Green-Certified Marine Ply",
    desc: "Boiling water-proof marine plywood with zero formaldehyde emissions and German Blum fittings for lifetime wellness.",
    theme: "green",
  },
  {
    icon: CreditCard,
    title: "Flexible Financing from ₹12,999/mo",
    highlight: "No-Cost EMI Options",
    desc: "Seamless tie-ups with leading financial partners to make bespoke living effortlessly accessible.",
    theme: "blue",
  },
  {
    icon: Compass,
    title: "100% Vastu & Biophilic Harmony",
    highlight: "Ishanya & Agneya Precision",
    desc: "Every kitchen hearth, prayer sanctum, and bed orientation is mapped to Vedic energy and natural ventilation principles.",
    theme: "green",
  },
  {
    icon: Layers,
    title: "146 Architectural Audits",
    highlight: "Supervised by In-House Architects",
    desc: "Laser precision leveling, edge-banding adhesion tests, and daily on-site architect oversight.",
    theme: "blue",
  },
  {
    icon: Award,
    title: "Zero Hidden Markups",
    highlight: "Transparent Itemized Pricing",
    desc: "Itemized billing down to every hardware hinge and square foot. What you approve is what you pay.",
    theme: "pink",
  },
];

export default function LivspacePerks() {
  return (
    <section className="classy-perks-section" id="perks">
      <div className="container">
        <div className="classy-section-header">
          <div className="structured-step-badge">
            <span className="structured-step-num">01</span>
            <span className="structured-step-text">The Quality Benchmark</span>
          </div>
          <h2 className="classy-section-title">
            Architectural Excellence, <span className="classy-gold-text">Guaranteed Delivery</span>
          </h2>
          <p className="classy-section-desc">
            We unite factory-precision joinery in Visakhapatnam with dedicated architect supervision across Andhra Pradesh and Telangana.
          </p>
        </div>

        <div className="classy-perks-grid">
          {PERKS.map((perk, i) => {
            const Icon = perk.icon;
            const isGreen = perk.theme === "green";
            const isBlue = perk.theme === "blue";
            return (
              <div
                key={i}
                className={`classy-perk-card ${isGreen ? "perk-green" : ""}`}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                  <div className="classy-perk-icon-wrap" style={{ marginBottom: 0 }}>
                    <Icon size={22} />
                  </div>
                  <span style={{
                    fontSize: 10,
                    fontWeight: 800,
                    letterSpacing: "0.1em",
                    color: isGreen ? "var(--liv-green)" : isBlue ? "var(--liv-blue)" : "var(--liv-pink)",
                    background: isGreen ? "var(--liv-green-soft)" : isBlue ? "var(--liv-blue-soft)" : "var(--liv-pink-soft)",
                    padding: "3px 8px",
                    borderRadius: 6,
                  }}>
                    PILLAR 0{i + 1}
                  </span>
                </div>
                <span className="classy-perk-tag">{perk.highlight}</span>
                <h3 className="classy-perk-title">{perk.title}</h3>
                <p className="classy-perk-desc">{perk.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
