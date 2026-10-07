"use client";

import { Clock, Shield, CreditCard, Sparkles, CheckCircle, Award, Compass, Layers } from "lucide-react";
import Link from "next/link";

const PERKS = [
  {
    icon: Clock,
    title: "45-Day Handover Guarantee",
    highlight: "Strict Delivery Calendar",
    desc: "Fixed timeline with milestone scheduling. Transparent weekly progress and zero contractor excuses.",
  },
  {
    icon: Shield,
    title: "10-Year Comprehensive Warranty",
    highlight: "IS 710 BWP Marine Grade",
    desc: "Boiling water-proof marine plywood paired with Blum German fittings for lifetime endurance.",
  },
  {
    icon: CreditCard,
    title: "Flexible Financing from ₹12,999/mo",
    highlight: "No-Cost EMI Options",
    desc: "Seamless tie-ups with leading financial partners to make bespoke living effortlessly accessible.",
  },
  {
    icon: Compass,
    title: "100% Vastu Shastra Harmonized",
    highlight: "Ishanya & Agneya Precision",
    desc: "Every kitchen hearth, prayer sanctum, and bed orientation is mapped to Vedic energy principles.",
  },
  {
    icon: Layers,
    title: "146 Architectural Audits",
    highlight: "Supervised by In-House Architects",
    desc: "Laser precision leveling, edge-banding adhesion tests, and daily on-site architect oversight.",
  },
  {
    icon: Award,
    title: "Zero Hidden Markups",
    highlight: "Transparent Itemized Pricing",
    desc: "Itemized billing down to every hardware hinge and square foot. What you approve is what you pay.",
  },
];

export default function LivspacePerks() {
  return (
    <section className="classy-perks-section" id="perks">
      <div className="container">
        <div className="classy-section-header">
          <span className="classy-section-badge">The MVVR Benchmark</span>
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
            return (
              <div key={i} className="classy-perk-card">
                <div className="classy-perk-icon-wrap">
                  <Icon size={22} />
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
