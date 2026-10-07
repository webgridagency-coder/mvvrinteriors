"use client";

import { useState } from "react";
import {
  CheckCircle2, Info, ArrowRight,
  Shield, Clock, ChefHat, BedDouble, Sofa, Flame,
  Lightbulb, Layers, CreditCard, Sparkles, Leaf
} from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

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
    name: "Ultra Luxe Architectural",
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
  { id: "1bhk", label: "1 BHK", sqft: 650 },
  { id: "2bhk", label: "2 BHK", sqft: 1050 },
  { id: "3bhk", label: "3 BHK", sqft: 1550 },
  { id: "4bhk", label: "4 BHK", sqft: 2200 },
  { id: "villa", label: "Luxury Villa", sqft: 3400 },
];

const SCOPES = [
  { id: "kitchen", label: "Modular Kitchen", icon: ChefHat },
  { id: "master", label: "Master Suite & Closets", icon: BedDouble },
  { id: "living", label: "Living Room & Foyer Lounge", icon: Sofa },
  { id: "ceiling", label: "False Ceiling & 3000K Cove", icon: Lightbulb },
  { id: "pooja", label: "Sacred Pooja Mandir", icon: Flame },
  { id: "kids", label: "Kids / Guest Bedroom", icon: Layers },
];

export default function InteriorPriceCalculator({ standalone = false }: { standalone?: boolean }) {
  const [sqft, setSqft] = useState(1550);
  const [selectedType, setSelectedType] = useState("3bhk");
  const [ratePerSqft, setRatePerSqft] = useState(1450);

  const [activeScopes, setActiveScopes] = useState<string[]>([
    "kitchen",
    "master",
    "living",
    "ceiling",
    "pooja",
    "kids",
  ]);

  const getActiveTier = (rate: number) => {
    if (rate <= 1100) {
      return {
        key: "basic" as const,
        name: "Basic Essential Tier",
        badge: "Essential",
        pkg: PACKAGES.basic,
      };
    }
    if (rate <= 1800) {
      return {
        key: "standard" as const,
        name: "Standard Modern Tier",
        badge: "Standard Modern ★",
        pkg: PACKAGES.standard,
      };
    }
    return {
      key: "premium" as const,
      name: "Ultra Luxe Architectural Tier",
      badge: "Ultra Luxe",
      pkg: PACKAGES.premium,
    };
  };

  const activeTier = getActiveTier(ratePerSqft);

  const handleTypeSelect = (typeId: string, area: number) => {
    setSelectedType(typeId);
    setSqft(area);
  };

  const toggleScope = (scopeId: string) => {
    if (activeScopes.includes(scopeId)) {
      if (activeScopes.length === 1) return;
      setActiveScopes(activeScopes.filter(id => id !== scopeId));
    } else {
      setActiveScopes([...activeScopes, scopeId]);
    }
  };

  const handlePackagePreset = (rate: number) => {
    setRatePerSqft(rate);
  };

  const scopeWeights: Record<string, number> = {
    kitchen: 0.28,
    master: 0.25,
    living: 0.22,
    ceiling: 0.12,
    pooja: 0.07,
    kids: 0.06,
  };

  const activeRatio = activeScopes.reduce((acc, curr) => acc + (scopeWeights[curr] || 0.15), 0);
  const totalCost = Math.round(sqft * ratePerSqft * activeRatio);

  const woodworkCost = Math.round(totalCost * 0.48);
  const kitchenCost = Math.round(totalCost * 0.24);
  const ceilingLightingCost = Math.round(totalCost * 0.16);
  const finishesHardwareCost = Math.round(totalCost * 0.12);
  const emiPerMonth = Math.round(totalCost / 48);

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
    `Hello MVVR CON & INTERIO, I estimated my home interior cost:\n` +
    `• Carpet Area: ${sqft} sq.ft (${selectedType.toUpperCase()})\n` +
    `• Tier: ₹${ratePerSqft}/sq.ft (${activeTier.name})\n` +
    `• Estimated Investment: ${fmtCurrency(totalCost)}\n` +
    `• EMI approx: ₹${emiPerMonth.toLocaleString("en-IN")}/mo\n` +
    `• Included Spaces: ${activeScopes.join(", ")}\n` +
    `Please share the detailed 3D design catalog and schedule an architect consultation.`
  );

  return (
    <div className={`calculator-component ${standalone ? "calculator-standalone" : ""}`} id="calculator">
      <div className="calculator-wrapper">
        <div className="calculator-header-block">
          <div className="structured-step-badge">
            <span className="structured-step-num green">07</span>
            <span className="structured-step-text">Transparent Investment Estimator</span>
          </div>
          <h2 className="calc-main-title">Estimate Your Interior Investment In Real Time</h2>
          <p className="calc-main-desc">
            Adjust your floor area and interior finish tier below to calculate instant transparent investment estimates with EMI planning.
          </p>
        </div>

        <div className="calculator-grid-layout">
          {/* Controls Column */}
          <div className="calc-controls-card">

            {/* BAR 1: CARPET AREA */}
            <div className="control-group" style={{ paddingBottom: 24, borderBottom: "1px solid #E2E8F0" }}>
              <div className="slider-label-row" style={{ marginBottom: 10 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{
                    background: "var(--liv-pink)",
                    color: "#FFFFFF",
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
                <span className="slider-current-val" style={{ fontSize: "1.35rem" }}>
                  {sqft.toLocaleString()} <span style={{ fontSize: "0.85rem", color: "#64748B" }}>sq.ft</span>
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
                    background: `linear-gradient(to right, var(--liv-pink) 0%, var(--liv-pink) ${((sqft - 400) / 4600) * 100}%, #E2E8F0 ${((sqft - 400) / 4600) * 100}%, #E2E8F0 100%)`,
                  }}
                  aria-label="Carpet area in square feet"
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
                <span style={{ fontSize: 11, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 6, display: "block", fontWeight: 600 }}>
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

            {/* BAR 2: QUALITY RATE */}
            <div className="control-group" style={{ paddingBottom: 24, borderBottom: "1px solid #E2E8F0" }}>
              <div className="slider-label-row" style={{ marginBottom: 10 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{
                    background: "var(--liv-blue)",
                    color: "#FFFFFF",
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
                    Interior Quality Grade
                  </span>
                </div>
                <div style={{ textAlign: "right" }}>
                  <span className="slider-current-val" style={{ fontSize: "1.35rem" }}>
                    ₹{ratePerSqft.toLocaleString()}{" "}
                    <span style={{ fontSize: "0.85rem", color: "#64748B" }}>/ sq.ft</span>
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
                    background: `linear-gradient(to right, var(--liv-blue) 0%, var(--liv-blue) ${((ratePerSqft - 850) / 2350) * 100}%, #E2E8F0 ${((ratePerSqft - 850) / 2350) * 100}%, #E2E8F0 100%)`,
                  }}
                  aria-label="Interior cost per square foot"
                />
                <div className="range-marks">
                  <span>₹850<span className="range-sub">Essential</span></span>
                  <span>₹1,450<span className="range-sub">Modern ★</span></span>
                  <span>₹2,150<span className="range-sub">Premium</span></span>
                  <span>₹3,200<span className="range-sub">Ultra Luxe</span></span>
                </div>
              </div>

              {/* Tier Quick Buttons */}
              <div style={{ marginTop: 14 }}>
                <span style={{ fontSize: 11, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 6, display: "block", fontWeight: 600 }}>
                  Select Package Tier Benchmark:
                </span>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
                  <button
                    type="button"
                    onClick={() => handlePackagePreset(900)}
                    style={{
                      padding: "10px 12px",
                      borderRadius: 8,
                      border: activeTier.key === "basic" ? "1.5px solid var(--liv-pink)" : "1px solid #E2E8F0",
                      background: activeTier.key === "basic" ? "var(--liv-pink-soft)" : "#FFFFFF",
                      color: activeTier.key === "basic" ? "var(--liv-pink)" : "#334155",
                      cursor: "pointer",
                      textAlign: "center",
                      transition: "all var(--transition-fast)"
                    }}
                  >
                    <div style={{ fontSize: 12, fontWeight: 700 }}>Essential</div>
                    <div style={{ fontSize: 10, color: "var(--liv-pink)", marginTop: 2, fontWeight: 600 }}>₹900 / sqft</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => handlePackagePreset(1450)}
                    style={{
                      padding: "10px 12px",
                      borderRadius: 8,
                      border: activeTier.key === "standard" ? "1.5px solid var(--liv-blue)" : "1px solid #E2E8F0",
                      background: activeTier.key === "standard" ? "var(--liv-blue-soft)" : "#FFFFFF",
                      color: activeTier.key === "standard" ? "var(--liv-blue)" : "#334155",
                      cursor: "pointer",
                      textAlign: "center",
                      transition: "all var(--transition-fast)"
                    }}
                  >
                    <div style={{ fontSize: 12, fontWeight: 700 }}>Standard Modern ★</div>
                    <div style={{ fontSize: 10, color: "var(--liv-blue)", marginTop: 2, fontWeight: 600 }}>₹1,450 / sqft</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => handlePackagePreset(2150)}
                    style={{
                      padding: "10px 12px",
                      borderRadius: 8,
                      border: activeTier.key === "premium" ? "1.5px solid var(--liv-pink)" : "1px solid #E2E8F0",
                      background: activeTier.key === "premium" ? "var(--liv-pink-soft)" : "#FFFFFF",
                      color: activeTier.key === "premium" ? "var(--liv-pink)" : "#334155",
                      cursor: "pointer",
                      textAlign: "center",
                      transition: "all var(--transition-fast)"
                    }}
                  >
                    <div style={{ fontSize: 12, fontWeight: 700 }}>Ultra Luxe</div>
                    <div style={{ fontSize: 10, color: "var(--liv-pink)", marginTop: 2, fontWeight: 600 }}>₹2,150 / sqft</div>
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

              {/* Monthly EMI pill */}
              <div style={{
                marginTop: 12,
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                background: "rgba(27, 92, 235, 0.08)",
                border: "1px solid rgba(27, 92, 235, 0.25)",
                color: "var(--liv-blue)",
                fontSize: 12,
                fontWeight: 600,
                padding: "6px 14px",
                borderRadius: 999,
              }}>
                <CreditCard size={14} />
                <span>No-Cost EMI from ₹{emiPerMonth.toLocaleString("en-IN")}/mo</span>
              </div>

              {/* Eco Green Certified Pill */}
              <div style={{
                marginTop: 8,
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                background: "var(--liv-green-soft)",
                border: "1px solid var(--liv-green-border)",
                color: "var(--liv-green-dark)",
                fontSize: 11,
                fontWeight: 700,
                padding: "5px 12px",
                borderRadius: 999,
              }}>
                <Leaf size={12} color="var(--liv-green)" />
                <span>🌿 100% Eco-Safe Green Certified BWP Materials Included</span>
              </div>
            </div>

            {/* Specifications for the chosen rate */}
            <div className="summary-spec-list">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h3 className="spec-heading">Included Specifications</h3>
                <span style={{
                  fontSize: 10,
                  fontWeight: 700,
                  background: "rgba(231, 46, 90, 0.12)",
                  color: "var(--liv-pink)",
                  padding: "2px 8px",
                  borderRadius: 4,
                  textTransform: "uppercase"
                }}>
                  {activeTier.badge}
                </span>
              </div>

              <ul className="spec-items">
                <li>
                  <CheckCircle2 size={15} color="var(--liv-pink)" />
                  <span><strong>Core Ply:</strong> {activeTier.pkg.materials[0]}</span>
                </li>
                <li>
                  <CheckCircle2 size={15} color="var(--liv-pink)" />
                  <span><strong>Finishes:</strong> {activeTier.pkg.materials[1]}</span>
                </li>
                <li>
                  <CheckCircle2 size={15} color="var(--liv-pink)" />
                  <span><strong>Kitchen:</strong> {activeTier.pkg.kitchen}</span>
                </li>
                <li>
                  <CheckCircle2 size={15} color="var(--liv-pink)" />
                  <span><strong>Wardrobes:</strong> {activeTier.pkg.wardrobes}</span>
                </li>
                <li>
                  <CheckCircle2 size={15} color="var(--liv-pink)" />
                  <span><strong>Ceiling &amp; Lighting:</strong> {activeTier.pkg.ceiling}</span>
                </li>
                <li>
                  <Shield size={15} color="var(--liv-blue)" />
                  <span><strong>Guarantee:</strong> {activeTier.pkg.warranty}</span>
                </li>
                <li>
                  <Clock size={15} color="var(--liv-blue)" />
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
                <WhatsAppIcon size={18} />
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
