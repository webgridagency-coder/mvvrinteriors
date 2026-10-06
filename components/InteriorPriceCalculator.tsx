"use client";

import { useState } from "react";
import {
  CheckCircle2, Info, ArrowRight, Sparkles,
  Shield, Clock, ChefHat, BedDouble, Sofa, Flame,
  Lightbulb, Layers, CreditCard
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
  { id: "1bhk", label: "1 BHK", sqft: 650, color: "#06B6D4" },
  { id: "2bhk", label: "2 BHK", sqft: 1050, color: "#FF5436" },
  { id: "3bhk", label: "3 BHK", sqft: 1550, color: "#10B981" },
  { id: "4bhk", label: "4 BHK", sqft: 2200, color: "#8B5CF6" },
  { id: "villa", label: "Luxury Villa", sqft: 3400, color: "#F59E0B" },
];

const SCOPES = [
  { id: "kitchen", label: "Modular Kitchen", icon: ChefHat, color: "#10B981" },
  { id: "master", label: "Master Suite & Closets", icon: BedDouble, color: "#3B82F6" },
  { id: "living", label: "Living Room & Foyer Lounge", icon: Sofa, color: "#FF5436" },
  { id: "ceiling", label: "False Ceiling & 3000K Cove", icon: Lightbulb, color: "#8B5CF6" },
  { id: "pooja", label: "Sacred Pooja Mandir", icon: Flame, color: "#F59E0B" },
  { id: "kids", label: "Kids / Guest Bedroom", icon: Layers, color: "#EC4899" },
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
        badge: "Budget-Smart",
        pkg: PACKAGES.basic,
        color: "#06B6D4",
      };
    }
    if (rate <= 1800) {
      return {
        key: "standard" as const,
        name: "Standard Modern Tier",
        badge: "🔥 Most Popular (80% Choose This)",
        pkg: PACKAGES.standard,
        color: "#FF5436",
      };
    }
    return {
      key: "premium" as const,
      name: "Ultra Luxe Architectural Tier",
      badge: "Architectural Statement",
      pkg: PACKAGES.premium,
      color: "#F59E0B",
    };
  };

  const activeTier = getActiveTier(ratePerSqft);

  // Quick preset selector
  const handleTypeSelect = (typeId: string, area: number) => {
    setSelectedType(typeId);
    setSqft(area);
  };

  // Scope toggle
  const toggleScope = (scopeId: string) => {
    if (activeScopes.includes(scopeId)) {
      if (activeScopes.length === 1) return; // Prevent 0 scopes
      setActiveScopes(activeScopes.filter(id => id !== scopeId));
    } else {
      setActiveScopes([...activeScopes, scopeId]);
    }
  };

  // Quick package rate select
  const handlePackagePreset = (rate: number) => {
    setRatePerSqft(rate);
  };

  // Scope weighting calculation
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

  // Breakdown numbers
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
    `Hello MVVR CON & INTERIO, I used your Livspace-Style Interior Price Calculator:\n` +
    `• Carpet Area: ${sqft} sq.ft (${selectedType.toUpperCase()})\n` +
    `• Quality Rate: ₹${ratePerSqft}/sq.ft (${activeTier.name})\n` +
    `• Estimated Investment: ${fmtCurrency(totalCost)}\n` +
    `• EMI approx: ₹${emiPerMonth.toLocaleString("en-IN")}/mo\n` +
    `• Included Spaces: ${activeScopes.join(", ")}\n` +
    `Please share the detailed 3D design catalog and book a free consultation.`
  );

  return (
    <div className={`calculator-component ${standalone ? "calculator-standalone" : ""}`} id="calculator">
      <div className="calculator-wrapper">
        <div className="calculator-header-block">
          <div className="funky-pill-tag" style={{ background: "#FFF4F0", borderColor: "#FECACA", color: "#FF5436" }}>
            <Sparkles size={14} />
            <span>INSTANT INTERIOR COST ESTIMATOR</span>
          </div>
          <h2 className="calc-main-title">
            Calculate Your Interior Investment in <span className="text-gradient-funky">30 Seconds</span>
          </h2>
          <p className="calc-main-desc">
            No endless sales calls. Adjust your floor area and quality grade below to view real-time estimates with monthly EMI breakdowns.
          </p>
        </div>

        <div className="calculator-grid-layout">
          {/* Controls Column */}
          <div className="calc-controls-card">

            {/* ================= BAR 1: CARPET AREA ================= */}
            <div className="control-group" style={{ paddingBottom: 24, borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
              <div className="slider-label-row" style={{ marginBottom: 10 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{
                    background: "linear-gradient(135deg, #FF5436, #FF7A45)",
                    color: "#FFFFFF",
                    fontSize: 11,
                    fontWeight: 800,
                    padding: "4px 10px",
                    borderRadius: 999,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase"
                  }}>
                    STEP 1
                  </span>
                  <span className="control-title" style={{ margin: 0 }}>
                    Carpet Area (Square Feet)
                  </span>
                </div>
                <span className="slider-current-val" style={{ fontSize: "1.4rem", color: "#FFFFFF" }}>
                  {sqft.toLocaleString()} <span style={{ fontSize: "0.85rem", color: "var(--silver-light)" }}>sq.ft</span>
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
                    background: `linear-gradient(to right, #FF5436 0%, #F59E0B ${((sqft - 400) / 4600) * 100}%, rgba(255,255,255,0.12) ${((sqft - 400) / 4600) * 100}%, rgba(255,255,255,0.12) 100%)`,
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
              <div style={{ marginTop: 16 }}>
                <span style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 8, display: "block" }}>
                  Quick Home Type Presets:
                </span>
                <div className="property-types-grid">
                  {HOME_TYPES.map(t => (
                    <button
                      key={t.id}
                      type="button"
                      className={`prop-btn ${sqft === t.sqft ? "active" : ""}`}
                      onClick={() => handleTypeSelect(t.id, t.sqft)}
                      style={{
                        borderColor: sqft === t.sqft ? t.color : "rgba(255,255,255,0.12)",
                      }}
                    >
                      <span className="prop-name" style={{ color: sqft === t.sqft ? t.color : "inherit" }}>
                        {t.label}
                      </span>
                      <span className="prop-sqft">~{t.sqft} sqft</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* ================= BAR 2: INTERIOR COST RATE ================= */}
            <div className="control-group" style={{ paddingBottom: 24, borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
              <div className="slider-label-row" style={{ marginBottom: 10 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{
                    background: "linear-gradient(135deg, #10B981, #059669)",
                    color: "#FFFFFF",
                    fontSize: 11,
                    fontWeight: 800,
                    padding: "4px 10px",
                    borderRadius: 999,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase"
                  }}>
                    STEP 2
                  </span>
                  <span className="control-title" style={{ margin: 0 }}>
                    Interior Quality Grade
                  </span>
                </div>
                <div style={{ textAlign: "right" }}>
                  <span className="slider-current-val" style={{ fontSize: "1.4rem", color: "#FFFFFF" }}>
                    ₹{ratePerSqft.toLocaleString()}{" "}
                    <span style={{ fontSize: "0.85rem", color: "var(--silver-light)" }}>/ sq.ft</span>
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
                    background: `linear-gradient(to right, #10B981 0%, #3B82F6 ${((ratePerSqft - 850) / 2350) * 100}%, rgba(255,255,255,0.12) ${((ratePerSqft - 850) / 2350) * 100}%, rgba(255,255,255,0.12) 100%)`,
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
              <div style={{ marginTop: 16 }}>
                <span style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 8, display: "block" }}>
                  Select Package Tier Benchmark:
                </span>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
                  <button
                    type="button"
                    onClick={() => handlePackagePreset(900)}
                    style={{
                      padding: "10px 12px",
                      borderRadius: 10,
                      border: activeTier.key === "basic" ? "2px solid #06B6D4" : "1px solid rgba(255,255,255,0.1)",
                      background: activeTier.key === "basic" ? "rgba(6,182,212,0.15)" : "rgba(255,255,255,0.04)",
                      color: activeTier.key === "basic" ? "#FFFFFF" : "rgba(255,255,255,0.7)",
                      cursor: "pointer",
                      textAlign: "center",
                      transition: "all 0.2s ease"
                    }}
                  >
                    <div style={{ fontSize: 12, fontWeight: 700 }}>Essential</div>
                    <div style={{ fontSize: 11, color: "#06B6D4", marginTop: 2 }}>₹900 / sqft</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => handlePackagePreset(1450)}
                    style={{
                      padding: "10px 12px",
                      borderRadius: 10,
                      border: activeTier.key === "standard" ? "2px solid #FF5436" : "1px solid rgba(255,255,255,0.1)",
                      background: activeTier.key === "standard" ? "rgba(255,84,54,0.15)" : "rgba(255,255,255,0.04)",
                      color: activeTier.key === "standard" ? "#FFFFFF" : "rgba(255,255,255,0.7)",
                      cursor: "pointer",
                      textAlign: "center",
                      transition: "all 0.2s ease"
                    }}
                  >
                    <div style={{ fontSize: 12, fontWeight: 700 }}>Standard Modern ★</div>
                    <div style={{ fontSize: 11, color: "#FF5436", marginTop: 2 }}>₹1,450 / sqft</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => handlePackagePreset(2150)}
                    style={{
                      padding: "10px 12px",
                      borderRadius: 10,
                      border: activeTier.key === "premium" ? "2px solid #F59E0B" : "1px solid rgba(255,255,255,0.1)",
                      background: activeTier.key === "premium" ? "rgba(245,158,11,0.15)" : "rgba(255,255,255,0.04)",
                      color: activeTier.key === "premium" ? "#FFFFFF" : "rgba(255,255,255,0.7)",
                      cursor: "pointer",
                      textAlign: "center",
                      transition: "all 0.2s ease"
                    }}
                  >
                    <div style={{ fontSize: 12, fontWeight: 700 }}>Ultra Luxe</div>
                    <div style={{ fontSize: 11, color: "#F59E0B", marginTop: 2 }}>₹2,150 / sqft</div>
                  </button>
                </div>
              </div>
            </div>

            {/* Included Rooms Scope */}
            <div className="control-group">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                <label className="control-title" style={{ margin: 0 }}>
                  Included Room Spaces ({activeScopes.length}/{SCOPES.length})
                </label>
                <span style={{ fontSize: 11, color: "rgba(255,255,255,0.6)" }}>Tap to customize rooms</span>
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
                      style={{
                        borderColor: isIncluded ? s.color : "rgba(255,255,255,0.1)",
                        background: isIncluded ? `${s.color}22` : "rgba(255,255,255,0.03)",
                      }}
                    >
                      <Icon size={14} color={isIncluded ? s.color : "rgba(255,255,255,0.5)"} />
                      <span style={{ color: isIncluded ? "#FFFFFF" : "rgba(255,255,255,0.7)" }}>{s.label}</span>
                      {isIncluded && <CheckCircle2 size={13} color={s.color} className="scope-check" />}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Results Summary Column */}
          <div className="calc-summary-card">
            <div className="summary-investment-box" style={{ background: "linear-gradient(135deg, rgba(255,84,54,0.12) 0%, rgba(245,158,11,0.08) 100%)", border: "1px solid rgba(255,84,54,0.25)" }}>
              <span className="summary-tag">Total Estimated Investment</span>
              <div className="summary-total-price" style={{ color: "#FFFFFF" }}>{fmtCurrency(totalCost)}</div>
              <div className="summary-subtext">
                {sqft} sq.ft × ₹{ratePerSqft.toLocaleString()}/sq.ft ({activeTier.name})
              </div>

              {/* Monthly EMI pill */}
              <div style={{
                marginTop: 12,
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                background: "rgba(37,99,235,0.2)",
                border: "1px solid rgba(37,99,235,0.4)",
                color: "#93C5FD",
                fontSize: 12,
                fontWeight: 600,
                padding: "6px 14px",
                borderRadius: 999,
              }}>
                <CreditCard size={14} />
                <span>No-Cost EMI from ₹{emiPerMonth.toLocaleString("en-IN")}/mo</span>
              </div>
            </div>

            {/* Specifications for the chosen rate */}
            <div className="summary-spec-list">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h3 className="spec-heading">Included Specifications</h3>
                <span style={{
                  fontSize: 10,
                  fontWeight: 700,
                  background: "rgba(255,84,54,0.18)",
                  color: "#FF5436",
                  padding: "3px 10px",
                  borderRadius: 999,
                  textTransform: "uppercase"
                }}>
                  {activeTier.badge}
                </span>
              </div>

              <ul className="spec-items">
                <li>
                  <CheckCircle2 size={15} color="#10B981" />
                  <span><strong>Core Ply:</strong> {activeTier.pkg.materials[0]}</span>
                </li>
                <li>
                  <CheckCircle2 size={15} color="#10B981" />
                  <span><strong>Finishes:</strong> {activeTier.pkg.materials[1]}</span>
                </li>
                <li>
                  <CheckCircle2 size={15} color="#10B981" />
                  <span><strong>Kitchen:</strong> {activeTier.pkg.kitchen}</span>
                </li>
                <li>
                  <CheckCircle2 size={15} color="#10B981" />
                  <span><strong>Wardrobes:</strong> {activeTier.pkg.wardrobes}</span>
                </li>
                <li>
                  <CheckCircle2 size={15} color="#10B981" />
                  <span><strong>Ceiling &amp; Lighting:</strong> {activeTier.pkg.ceiling}</span>
                </li>
                <li>
                  <Shield size={15} color="#10B981" />
                  <span><strong>Guarantee:</strong> {activeTier.pkg.warranty}</span>
                </li>
                <li>
                  <Clock size={15} color="#FF5436" />
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
                <span>Get This Quote on WhatsApp</span>
              </a>

              <a href="/contact" className="btn-primary" style={{ justifyContent: "center" }}>
                <span>Book Free Site Visit &amp; 3D Plan</span>
                <ArrowRight size={16} />
              </a>
            </div>

            <div className="calc-disclaimer">
              <Info size={13} />
              <span>
                *Estimates calculated using Bar 1 (area) and Bar 2 (quality grade). Final quote provided following on-site laser measurement and personalized 3D material selection.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
