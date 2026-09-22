"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2, Info, ArrowRight, MessageCircle, Sparkles,
  Shield, Clock, Ruler, ChefHat, BedDouble, Sofa, Flame,
  Lightbulb, Layers, Sliders
} from "lucide-react";

export interface PackageDetails {
  id: "basic" | "standard" | "premium";
  name: string;
  rate: number;
  subtitle: string;
  materials: string[];
  kitchen: string;
  wardrobes: string;
  ceiling: string;
  warranty: string;
}

export const PACKAGES: Record<string, PackageDetails> = {
  basic: {
    id: "basic",
    name: "Basic Essential",
    rate: 900,
    subtitle: "Clean, functional & budget-smart interiors",
    materials: ["MR Moisture-Resistant Commercial Ply", "0.8mm Anti-scratch Matte Laminates", "Standard Soft-Close Hinges"],
    kitchen: "Straight/L-shaped modular kitchen with SS wire baskets",
    wardrobes: "Hinged shutter wardrobes with top lofts",
    ceiling: "Perimeter false ceiling with warm recessed LED spots",
    warranty: "5-Year Material Warranty",
  },
  standard: {
    id: "standard",
    name: "Standard Modern",
    rate: 1450,
    subtitle: "Contemporary aesthetics, durability & comfort",
    materials: ["IS 710 BWP Marine Plywood", "1mm Anti-fingerprint & Acrylic Shutters", "Hafele / Hettich Soft-close Tandem"],
    kitchen: "Full modular kitchen with quartz counter, cutlery organizer & tall pantry",
    wardrobes: "Floor-to-ceiling sliding wardrobes with profile glass accent",
    ceiling: "Designer cove false ceiling with warm indirect LED strip lighting",
    warranty: "10-Year Warranty & 45-Day Handover",
  },
  premium: {
    id: "premium",
    name: "Premium Luxury",
    rate: 2150,
    subtitle: "Bespoke architectural elegance & luxury finishes",
    materials: ["HDHMR + Calibrated BWP Marine Ply", "Natural Wood Veneer with PU Polish & Tinted Fluted Glass", "Blum German Motorized Hardware"],
    kitchen: "Island / Parallel modular kitchen with Blum Aventos lift-ups & breakfast bar",
    wardrobes: "Walk-in wardrobe with sensor LED profile rods & bronze fluted glass",
    ceiling: "Architectural false ceiling with magnetic track lights & acoustic wooden louvers",
    warranty: "10-Year Comprehensive Warranty + Lifetime Service",
  },
};

const HOME_TYPES = [
  { id: "2bhk", label: "2 BHK", sqft: 1050 },
  { id: "3bhk", label: "3 BHK", sqft: 1550 },
  { id: "4bhk", label: "4 BHK", sqft: 2200 },
  { id: "villa", label: "Luxury Villa", sqft: 3400 },
  { id: "commercial", label: "Executive Office", sqft: 1800 },
];

const SCOPES = [
  { id: "kitchen", label: "Modular Kitchen", icon: ChefHat },
  { id: "master", label: "Master Bedroom Suite", icon: BedDouble },
  { id: "living", label: "Living Room & Foyer", icon: Sofa },
  { id: "ceiling", label: "False Ceiling & Lighting", icon: Lightbulb },
  { id: "pooja", label: "Pooja Room Mandir", icon: Flame },
  { id: "kids", label: "Kids / Guest Bedroom", icon: Layers },
];

export default function InteriorPriceCalculator({ standalone = false }: { standalone?: boolean }) {
  // BAR 1: Carpet Area
  const [sqft, setSqft] = useState(1550);
  const [selectedType, setSelectedType] = useState("3bhk");

  // BAR 2: Interior Specification & Cost Rate (₹ per sq.ft)
  const [ratePerSqft, setRatePerSqft] = useState(1450);

  // Room scopes included
  const [activeScopes, setActiveScopes] = useState<string[]>([
    "kitchen",
    "master",
    "living",
    "ceiling",
    "pooja",
    "kids",
  ]);

  // Determine active tier from Bar 2's rate
  const getActiveTier = (rate: number) => {
    if (rate <= 1100) {
      return {
        key: "basic" as const,
        name: "Basic Essential Tier",
        badge: "Budget Friendly",
        color: "var(--silver-light)",
        pkg: PACKAGES.basic,
      };
    } else if (rate <= 1800) {
      return {
        key: "standard" as const,
        name: "Standard Modern Tier",
        badge: "Most Popular",
        color: "var(--gold)",
        pkg: PACKAGES.standard,
      };
    } else {
      return {
        key: "premium" as const,
        name: "Premium Luxury Tier",
        badge: "Ultra Luxury",
        color: "var(--gold-light)",
        pkg: PACKAGES.premium,
      };
    }
  };

  const activeTier = getActiveTier(ratePerSqft);

  // Quick preset handlers
  const handleTypeSelect = (typeId: string, area: number) => {
    setSelectedType(typeId);
    setSqft(area);
  };

  const handlePackagePreset = (rate: number) => {
    setRatePerSqft(rate);
  };

  const toggleScope = (scopeId: string) => {
    if (activeScopes.includes(scopeId)) {
      if (activeScopes.length > 1) {
        setActiveScopes(activeScopes.filter(s => s !== scopeId));
      }
    } else {
      setActiveScopes([...activeScopes, scopeId]);
    }
  };

  // Scope ratio calculation
  const scopeRatio = Math.max(0.45, activeScopes.length / SCOPES.length);
  const totalCost = Math.round(sqft * ratePerSqft * scopeRatio);

  // Breakdown numbers
  const woodworkCost = Math.round(totalCost * 0.48);
  const kitchenCost = Math.round(totalCost * 0.24);
  const ceilingLightingCost = Math.round(totalCost * 0.16);
  const finishesHardwareCost = Math.round(totalCost * 0.12);

  const fmtCurrency = (n: number) => {
    if (n >= 10000000) {
      return `₹${(n / 10000000).toFixed(2)} Cr`;
    }
    if (n >= 100000) {
      return `₹${(n / 100000).toFixed(2)} Lakhs`;
    }
    return `₹${n.toLocaleString("en-IN")}`;
  };

  const whatsappMessage = encodeURIComponent(
    `Hello MVVR CON & INTERIO, I used your 2-Bar Interior Price Calculator:\n` +
    `• Carpet Area: ${sqft} sq.ft (${selectedType.toUpperCase()})\n` +
    `• Interior Cost Rate: ₹${ratePerSqft}/sq.ft (${activeTier.name})\n` +
    `• Estimated Investment: ${fmtCurrency(totalCost)}\n` +
    `• Included Spaces: ${activeScopes.join(", ")}\n` +
    `Please share the detailed 3D design catalog and schedule a free site consultation.`
  );

  return (
    <div className={`calculator-component ${standalone ? "calculator-standalone" : ""}`} id="calculator">
      <div className="calculator-wrapper">
        <div className="calculator-header-block">
          <div className="badge-gold">
            <Sparkles size={13} />
            <span>Dual-Slider Interactive Estimator</span>
          </div>
          <h2 className="calc-main-title">Estimate Your Interior Investment In Real Time</h2>
          <p className="calc-main-desc">
            Slide <strong>Bar 1</strong> to set your floor area, and slide <strong>Bar 2</strong> to customize your interior finish grade &amp; budget per sq.ft.
          </p>
        </div>

        <div className="calculator-grid-layout">
          {/* Controls Column */}
          <div className="calc-controls-card">

            {/* ================= BAR 1: CARPET AREA ================= */}
            <div className="control-group" style={{ paddingBottom: 24, borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
              <div className="slider-label-row" style={{ marginBottom: 8 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{
                    background: "var(--gold)",
                    color: "var(--charcoal)",
                    fontSize: 11,
                    fontWeight: 700,
                    padding: "3px 8px",
                    borderRadius: 4,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase"
                  }}>
                    BAR 1
                  </span>
                  <span className="control-title" style={{ margin: 0 }}>
                    Carpet Area (Square Feet)
                  </span>
                </div>
                <span className="slider-current-val" style={{ fontSize: "1.3rem" }}>
                  {sqft.toLocaleString()} <span style={{ fontSize: "0.85rem", color: "var(--silver)" }}>sq.ft</span>
                </span>
              </div>

              {/* Area Slider */}
              <div className="range-slider-wrapper">
                <input
                  type="range"
                  min={400}
                  max={5000}
                  step={50}
                  value={sqft}
                  onChange={e => setSqft(Number(e.target.value))}
                  className="range-slider"
                  style={{
                    background: `linear-gradient(to right, var(--gold) 0%, var(--gold) ${((sqft - 400) / 4600) * 100}%, rgba(255,255,255,0.12) ${((sqft - 400) / 4600) * 100}%, rgba(255,255,255,0.12) 100%)`,
                  }}
                  aria-label="Bar 1: Carpet area in square feet"
                />
                <div className="range-marks">
                  <span>400<span className="range-sub">sq.ft</span></span>
                  <span>1,500<span className="range-sub">sq.ft</span></span>
                  <span>3,000<span className="range-sub">sq.ft</span></span>
                  <span>5,000<span className="range-sub">sq.ft</span></span>
                </div>
              </div>

              {/* Presets */}
              <div style={{ marginTop: 14 }}>
                <span style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 6, display: "block" }}>
                  Quick Layout Presets:
                </span>
                <div className="property-types-grid">
                  {HOME_TYPES.map(t => (
                    <button
                      key={t.id}
                      type="button"
                      className={`prop-btn ${sqft === t.sqft ? "active" : ""}`}
                      onClick={() => handleTypeSelect(t.id, t.sqft)}
                    >
                      <span className="prop-name">{t.label}</span>
                      <span className="prop-sqft">~{t.sqft} sqft</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* ================= BAR 2: INTERIOR COST RATE ================= */}
            <div className="control-group" style={{ paddingBottom: 24, borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
              <div className="slider-label-row" style={{ marginBottom: 8 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{
                    background: "var(--gold-light)",
                    color: "var(--charcoal)",
                    fontSize: 11,
                    fontWeight: 700,
                    padding: "3px 8px",
                    borderRadius: 4,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase"
                  }}>
                    BAR 2
                  </span>
                  <span className="control-title" style={{ margin: 0 }}>
                    Interior Cost &amp; Quality Rate
                  </span>
                </div>
                <div style={{ textAlign: "right" }}>
                  <span className="slider-current-val" style={{ fontSize: "1.3rem" }}>
                    ₹{ratePerSqft.toLocaleString()}{" "}
                    <span style={{ fontSize: "0.85rem", color: "var(--silver)" }}>/ sq.ft</span>
                  </span>
                </div>
              </div>

              {/* Rate Slider */}
              <div className="range-slider-wrapper">
                <input
                  type="range"
                  min={850}
                  max={3200}
                  step={25}
                  value={ratePerSqft}
                  onChange={e => setRatePerSqft(Number(e.target.value))}
                  className="range-slider"
                  style={{
                    background: `linear-gradient(to right, var(--gold-light) 0%, var(--gold-light) ${((ratePerSqft - 850) / 2350) * 100}%, rgba(255,255,255,0.12) ${((ratePerSqft - 850) / 2350) * 100}%, rgba(255,255,255,0.12) 100%)`,
                  }}
                  aria-label="Bar 2: Interior cost per square foot"
                />
                <div className="range-marks">
                  <span>₹850<span className="range-sub">Essential</span></span>
                  <span>₹1,450<span className="range-sub">Standard</span></span>
                  <span>₹2,150<span className="range-sub">Premium</span></span>
                  <span>₹3,200<span className="range-sub">Luxury</span></span>
                </div>
              </div>

              {/* Tier Quick Buttons */}
              <div style={{ marginTop: 14 }}>
                <span style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 6, display: "block" }}>
                  Select Package Tier Benchmark:
                </span>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
                  <button
                    type="button"
                    onClick={() => handlePackagePreset(900)}
                    style={{
                      padding: "10px 12px",
                      borderRadius: 8,
                      border: activeTier.key === "basic" ? "1px solid var(--gold)" : "1px solid rgba(255,255,255,0.1)",
                      background: activeTier.key === "basic" ? "rgba(201,168,76,0.18)" : "rgba(255,255,255,0.04)",
                      color: activeTier.key === "basic" ? "var(--white)" : "rgba(255,255,255,0.7)",
                      cursor: "pointer",
                      textAlign: "center",
                      transition: "all var(--transition-fast)"
                    }}
                  >
                    <div style={{ fontSize: 12, fontWeight: 700 }}>Basic</div>
                    <div style={{ fontSize: 10, color: "var(--gold-light)" }}>₹900 / sqft</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => handlePackagePreset(1450)}
                    style={{
                      padding: "10px 12px",
                      borderRadius: 8,
                      border: activeTier.key === "standard" ? "1px solid var(--gold)" : "1px solid rgba(255,255,255,0.1)",
                      background: activeTier.key === "standard" ? "rgba(201,168,76,0.18)" : "rgba(255,255,255,0.04)",
                      color: activeTier.key === "standard" ? "var(--white)" : "rgba(255,255,255,0.7)",
                      cursor: "pointer",
                      textAlign: "center",
                      transition: "all var(--transition-fast)"
                    }}
                  >
                    <div style={{ fontSize: 12, fontWeight: 700 }}>Standard ★</div>
                    <div style={{ fontSize: 10, color: "var(--gold-light)" }}>₹1,450 / sqft</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => handlePackagePreset(2150)}
                    style={{
                      padding: "10px 12px",
                      borderRadius: 8,
                      border: activeTier.key === "premium" ? "1px solid var(--gold)" : "1px solid rgba(255,255,255,0.1)",
                      background: activeTier.key === "premium" ? "rgba(201,168,76,0.18)" : "rgba(255,255,255,0.04)",
                      color: activeTier.key === "premium" ? "var(--white)" : "rgba(255,255,255,0.7)",
                      cursor: "pointer",
                      textAlign: "center",
                      transition: "all var(--transition-fast)"
                    }}
                  >
                    <div style={{ fontSize: 12, fontWeight: 700 }}>Premium Luxury</div>
                    <div style={{ fontSize: 10, color: "var(--gold-light)" }}>₹2,150 / sqft</div>
                  </button>
                </div>
              </div>
            </div>

            {/* Included Rooms Scope */}
            <div className="control-group">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                <label className="control-title" style={{ margin: 0 }}>Included Room Spaces ({activeScopes.length}/{SCOPES.length})</label>
                <span style={{ fontSize: 11, color: "rgba(255,255,255,0.5)" }}>Click to toggle rooms</span>
              </div>
              <div className="scopes-grid">
                {SCOPES.map(s => {
                  const isIncluded = activeScopes.includes(s.id);
                  const Icon = s.icon;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      className={`scope-pill-btn ${isIncluded ? "active" : ""}`}
                      onClick={() => toggleScope(s.id)}
                    >
                      <Icon size={14} />
                      <span>{s.label}</span>
                      {isIncluded && <CheckCircle2 size={13} className="scope-check" />}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Results Summary Column */}
          <div className="calc-summary-card">
            <div className="summary-investment-box">
              <span className="summary-tag">Total Estimated Investment</span>
              <div className="summary-total-price">{fmtCurrency(totalCost)}</div>
              <div className="summary-subtext">
                {sqft} sq.ft × ₹{ratePerSqft.toLocaleString()}/sq.ft ({activeTier.name})
              </div>
            </div>

            {/* Specifications for the chosen rate */}
            <div className="summary-spec-list">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h3 className="spec-heading">Included Specifications</h3>
                <span style={{
                  fontSize: 10,
                  fontWeight: 700,
                  background: "rgba(201,168,76,0.2)",
                  color: "var(--gold-light)",
                  padding: "2px 8px",
                  borderRadius: 4,
                  textTransform: "uppercase"
                }}>
                  {activeTier.badge}
                </span>
              </div>

              <ul className="spec-items">
                <li>
                  <CheckCircle2 size={15} color="var(--gold)" />
                  <span><strong>Core Ply:</strong> {activeTier.pkg.materials[0]}</span>
                </li>
                <li>
                  <CheckCircle2 size={15} color="var(--gold)" />
                  <span><strong>Finishes:</strong> {activeTier.pkg.materials[1]}</span>
                </li>
                <li>
                  <CheckCircle2 size={15} color="var(--gold)" />
                  <span><strong>Kitchen:</strong> {activeTier.pkg.kitchen}</span>
                </li>
                <li>
                  <CheckCircle2 size={15} color="var(--gold)" />
                  <span><strong>Wardrobes:</strong> {activeTier.pkg.wardrobes}</span>
                </li>
                <li>
                  <CheckCircle2 size={15} color="var(--gold)" />
                  <span><strong>Ceiling &amp; Lighting:</strong> {activeTier.pkg.ceiling}</span>
                </li>
                <li>
                  <Shield size={15} color="var(--gold)" />
                  <span><strong>Guarantee:</strong> {activeTier.pkg.warranty}</span>
                </li>
                <li>
                  <Clock size={15} color="var(--gold)" />
                  <span><strong>Timeline:</strong> Strict 45-Day Handover Guarantee</span>
                </li>
              </ul>
            </div>

            {/* Estimated Itemized Breakdown */}
            <div className="breakdown-container">
              <span className="breakdown-title">Estimated Cost Breakdown</span>
              <div className="breakdown-row">
                <span>Living &amp; Bedroom Woodwork (48%)</span>
                <strong>{fmtCurrency(woodworkCost)}</strong>
              </div>
              <div className="breakdown-row">
                <span>Modular Kitchen Architecture (24%)</span>
                <strong>{fmtCurrency(kitchenCost)}</strong>
              </div>
              <div className="breakdown-row">
                <span>False Ceiling, Cove &amp; Lighting (16%)</span>
                <strong>{fmtCurrency(ceilingLightingCost)}</strong>
              </div>
              <div className="breakdown-row">
                <span>Hardware, Varnish &amp; Finishes (12%)</span>
                <strong>{fmtCurrency(finishesHardwareCost)}</strong>
              </div>
            </div>

            {/* Actions */}
            <div className="summary-cta-actions">
              <a
                href={`https://wa.me/919391356077?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp-quote"
              >
                <MessageCircle size={18} />
                <span>Get This Detailed Estimate on WhatsApp</span>
              </a>

              <a href="/contact" className="btn-primary" style={{ justifyContent: "center" }}>
                <span>Book Free Site Visit &amp; 3D Plan</span>
                <ArrowRight size={16} />
              </a>
            </div>

            <div className="calc-disclaimer">
              <Info size={13} />
              <span>
                *Estimates are calculated using Bar 1 (area) and Bar 2 (quality rate). Final quote is provided following on-site laser measurement and personalized 3D material selection.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
