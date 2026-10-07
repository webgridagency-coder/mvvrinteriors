"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2, Info, ArrowRight, ArrowLeft,
  Shield, Clock, ChefHat, BedDouble, Sofa, Flame,
  Lightbulb, Layers, CreditCard, Sparkles, Leaf,
  ChevronDown, Check, Home, Building2, SlidersHorizontal,
  Phone, MessageCircle, RefreshCw
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

// ---------------- KITCHEN WIZARD TYPES & DATA ----------------
type KitchenLayoutId = "l-shaped" | "straight" | "u-shaped" | "parallel";
type KitchenPackageId = "essentials" | "premium" | "luxe";

interface KitchenLayoutOption {
  id: KitchenLayoutId;
  name: string;
  defaultA: number;
  defaultB: number;
  defaultC?: number;
}

const KITCHEN_LAYOUTS: KitchenLayoutOption[] = [
  { id: "l-shaped", name: "L-shaped", defaultA: 10, defaultB: 8 },
  { id: "straight", name: "Straight", defaultA: 10, defaultB: 0 },
  { id: "u-shaped", name: "U-shaped", defaultA: 10, defaultB: 8, defaultC: 8 },
  { id: "parallel", name: "Parallel", defaultA: 10, defaultB: 10 },
];

const KITCHEN_PACKAGES = [
  {
    id: "essentials" as KitchenPackageId,
    name: "Essentials (₹)",
    ratePerRft: 1400,
    subtitle: "A range of basic units and accessories that are necessary for a comfortable modular kitchen.",
    img: "/hero-kitchen.jpg",
    features: [
      "Commercial Grade MR Plywood",
      "0.8mm Anti-scratch Matte Laminates",
      "Stainless Steel Wire Pullout Baskets",
      "5-Year Material Warranty",
    ],
  },
  {
    id: "premium" as KitchenPackageId,
    name: "Premium (₹₹)",
    ratePerRft: 1950,
    subtitle: "An exquisite offering with sleek fixtures, hardware, cabinets and fittings for an elegant kitchen design.",
    img: "/kitchen-island.jpg",
    popular: true,
    features: [
      "100% BWP 710 Marine Plywood",
      "German Hafele / Hettich Soft-close Tandem",
      "1mm Acrylic & Anti-fingerprint Shutters",
      "Quartz Stone Countertop Integration",
      "10-Year Warranty & 45-Day Handover",
    ],
  },
  {
    id: "luxe" as KitchenPackageId,
    name: "Luxe (₹₹₹)",
    ratePerRft: 2750,
    subtitle: "Top-of-the-line luxury kitchen with motorized lift-ups, island counter & fluted glass profiles.",
    img: "/foyer-living.jpg",
    features: [
      "Calibrated BWP Marine Ply + HDHMR",
      "German Blum Aventos Motorized Lift-ups",
      "Tinted Fluted Bronze Glass Wall Cabinets",
      "Waterfall Quartz Island & Breakfast Counter",
      "10-Year Comprehensive Warranty",
    ],
  },
];

// Kitchen Architectural Vector SVGs
function LayoutSvg({ id }: { id: KitchenLayoutId }) {
  if (id === "l-shaped") {
    return (
      <svg viewBox="0 0 160 120" width="100%" height="90" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="160" height="120" rx="6" fill="#FBF7F4" />
        {/* L-Counter */}
        <path d="M24 20 H136 V54 H58 V100 H24 V20 Z" fill="#E8D5CA" stroke="#B8A498" strokeWidth="1.2" />
        {/* Sink */}
        <rect x="74" y="26" width="28" height="20" rx="3" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
        <circle cx="88" cy="36" r="2.5" fill="#64748B" />
        {/* 4-Burner Hob */}
        <rect x="110" y="26" width="20" height="20" rx="2" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
        <circle cx="115" cy="31" r="2" fill="#E72E5A" />
        <circle cx="125" cy="31" r="2" fill="#E72E5A" />
        <circle cx="115" cy="41" r="2" fill="#E72E5A" />
        <circle cx="125" cy="41" r="2" fill="#E72E5A" />
        {/* Prep prep marks */}
        <line x1="30" y1="65" x2="50" y2="65" stroke="#B8A498" strokeWidth="1" strokeDasharray="2 2" />
        <circle cx="41" cy="85" r="5" fill="#D4C2B6" />
      </svg>
    );
  }

  if (id === "straight") {
    return (
      <svg viewBox="0 0 160 120" width="100%" height="90" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="160" height="120" rx="6" fill="#FBF7F4" />
        {/* Straight Counter */}
        <rect x="18" y="44" width="124" height="34" rx="3" fill="#E8D5CA" stroke="#B8A498" strokeWidth="1.2" />
        {/* Left tall unit / fridge */}
        <rect x="22" y="46" width="18" height="30" rx="2" fill="#D4C2B6" stroke="#94A3B8" strokeWidth="0.8" />
        <circle cx="31" cy="61" r="4" fill="#B8A498" />
        {/* Sink in middle */}
        <rect x="62" y="49" width="30" height="24" rx="3" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
        <circle cx="77" cy="61" r="2.5" fill="#64748B" />
        {/* 4-Burner Hob on right */}
        <rect x="106" y="49" width="26" height="24" rx="2" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
        <circle cx="113" cy="55" r="2" fill="#E72E5A" />
        <circle cx="125" cy="55" r="2" fill="#E72E5A" />
        <circle cx="113" cy="67" r="2" fill="#E72E5A" />
        <circle cx="125" cy="67" r="2" fill="#E72E5A" />
      </svg>
    );
  }

  if (id === "u-shaped") {
    return (
      <svg viewBox="0 0 160 120" width="100%" height="90" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="160" height="120" rx="6" fill="#FBF7F4" />
        {/* U-Counter */}
        <path d="M22 20 H138 V100 H106 V54 H54 V100 H22 V20 Z" fill="#E8D5CA" stroke="#B8A498" strokeWidth="1.2" />
        {/* Top Sink */}
        <rect x="68" y="24" width="24" height="22" rx="3" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
        <circle cx="80" cy="35" r="2.5" fill="#64748B" />
        {/* Right Burner */}
        <rect x="111" y="60" width="22" height="24" rx="2" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
        <circle cx="117" cy="66" r="2" fill="#E72E5A" />
        <circle cx="127" cy="66" r="2" fill="#E72E5A" />
        <circle cx="117" cy="78" r="2" fill="#E72E5A" />
        <circle cx="127" cy="78" r="2" fill="#E72E5A" />
        {/* Left carousel */}
        <circle cx="38" cy="70" r="5" fill="#D4C2B6" />
      </svg>
    );
  }

  // parallel
  return (
    <svg viewBox="0 0 160 120" width="100%" height="90" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="160" height="120" rx="6" fill="#FBF7F4" />
      {/* Top Counter */}
      <rect x="20" y="22" width="120" height="28" rx="3" fill="#E8D5CA" stroke="#B8A498" strokeWidth="1.2" />
      <circle cx="34" cy="36" r="4.5" fill="#B8A498" />
      <rect x="62" y="25" width="26" height="22" rx="3" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
      <circle cx="75" cy="36" r="2.5" fill="#64748B" />

      {/* Bottom Counter */}
      <rect x="20" y="70" width="120" height="28" rx="3" fill="#E8D5CA" stroke="#B8A498" strokeWidth="1.2" />
      <rect x="68" y="73" width="24" height="22" rx="2" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
      <circle cx="74" cy="79" r="2" fill="#E72E5A" />
      <circle cx="86" cy="79" r="2" fill="#E72E5A" />
      <circle cx="74" cy="89" r="2" fill="#E72E5A" />
      <circle cx="86" cy="89" r="2" fill="#E72E5A" />
    </svg>
  );
}

export default function InteriorPriceCalculator({ standalone = false }: { standalone?: boolean }) {
  // Mode: "overview" (Image 1 cards), "kitchen" (Images 2-5 wizard), "fullhome", "wardrobe"
  const [calcMode, setCalcMode] = useState<"overview" | "kitchen" | "fullhome" | "wardrobe">("kitchen");

  // Kitchen wizard steps: 1: Layout, 2: Measurements, 3: Package, 4: Get Quote, 5: Result
  const [kitchenStep, setKitchenStep] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [selectedLayout, setSelectedLayout] = useState<KitchenLayoutId>("l-shaped");
  const [measurementA, setMeasurementA] = useState<number>(10);
  const [measurementB, setMeasurementB] = useState<number>(8);
  const [measurementC, setMeasurementC] = useState<number>(8);
  const [selectedKitchenPkg, setSelectedKitchenPkg] = useState<KitchenPackageId>("premium");

  // Form details
  const [leadName, setLeadName] = useState("");
  const [leadEmail, setLeadEmail] = useState("");
  const [leadPhone, setLeadPhone] = useState("");
  const [leadCity, setLeadCity] = useState("Visakhapatnam");
  const [sendWhatsApp, setSendWhatsApp] = useState(true);

  // Full Home State
  const [sqft, setSqft] = useState(1550);
  const [selectedType, setSelectedType] = useState("3bhk");
  const [ratePerSqft, setRatePerSqft] = useState(1450);
  const [activeScopes, setActiveScopes] = useState<string[]>([
    "kitchen", "master", "living", "ceiling", "pooja", "kids"
  ]);

  // Wardrobe state
  const [wardrobeDoors, setWardrobeDoors] = useState<number>(3);
  const [wardrobeFinish, setWardrobeFinish] = useState<"matte" | "acrylic" | "glass">("acrylic");

  // Kitchen Calculation
  const totalRft = selectedLayout === "straight"
    ? measurementA
    : selectedLayout === "u-shaped"
      ? measurementA + measurementB + (measurementC || 8)
      : measurementA + measurementB;

  const currentPkg = KITCHEN_PACKAGES.find(p => p.id === selectedKitchenPkg) || KITCHEN_PACKAGES[1];
  const kitchenEstimatedMin = Math.round(totalRft * currentPkg.ratePerRft * 0.95);
  const kitchenEstimatedMax = Math.round(totalRft * currentPkg.ratePerRft * 1.15);

  const formatPrice = (val: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  const whatsappKitchenMessage = encodeURIComponent(
    `Hello MVVR CON & INTERIO, I completed the kitchen estimate on your website!\n` +
    `• Layout: ${selectedLayout.toUpperCase()}\n` +
    `• Measurements: ${measurementA}ft × ${selectedLayout === "straight" ? "" : measurementB + "ft"} (${totalRft} Rft)\n` +
    `• Package: ${currentPkg.name}\n` +
    `• Estimated Cost: ${formatPrice(kitchenEstimatedMin)} - ${formatPrice(kitchenEstimatedMax)}\n` +
    `• City: ${leadCity}\n` +
    `Name: ${leadName || "Client"} (${leadPhone || "Phone"})\n` +
    `Please share the detailed 3D design concept and itemized quotation.`
  );

  return (
    <section className="calculator-section" style={{ padding: standalone ? "40px 0 80px" : "80px 0", background: "var(--cream)" }}>
      <div className="container" style={{ maxWidth: 1080 }}>

        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: "var(--liv-pink-soft)",
              color: "var(--liv-pink)",
              padding: "5px 14px",
              borderRadius: 999,
              fontSize: 12,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              marginBottom: 10,
            }}
          >
            <Sparkles size={12} strokeWidth={2} />
            Instant Fixed-Budget Estimator
          </div>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(24px, 3.5vw, 36px)",
              color: "#0F172A",
              fontWeight: 700,
              margin: "0 0 8px",
            }}
          >
            Get a Free Estimate from Interior Designers in Visakhapatnam &amp; Hyderabad
          </h2>
          <p style={{ color: "#64748B", fontSize: 15, margin: 0 }}>
            Calculate the approximate cost of doing up your interiors with guaranteed 45-day handover
          </p>
        </div>

        {/* Top Level Category Selector (Image 1 Style) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
            marginBottom: 36,
          }}
        >
          {/* Full Home */}
          <div
            onClick={() => setCalcMode("fullhome")}
            style={{
              background: "#FFFFFF",
              borderRadius: 20,
              padding: "24px 22px",
              border: calcMode === "fullhome" ? "2px solid var(--liv-pink)" : "1px solid #E2E8F0",
              boxShadow: calcMode === "fullhome" ? "0 12px 30px rgba(231, 46, 90, 0.12)" : "0 4px 16px rgba(0,0,0,0.03)",
              cursor: "pointer",
              transition: "all 0.2s ease",
              position: "relative",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 18 }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: "var(--liv-pink-soft)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--liv-pink)" }}>
                <Home size={22} strokeWidth={1.8} />
              </div>
              <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#F1F5F9", display: "flex", alignItems: "center", justifyContent: "center", color: "#64748B" }}>
                <SlidersHorizontal size={14} strokeWidth={2} />
              </div>
            </div>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: "#0F172A", margin: "0 0 6px" }}>
              Full Home
            </h3>
            <p style={{ fontSize: 13, color: "#64748B", margin: "0 0 20px", lineHeight: 1.5 }}>
              Get an approximate costing for your full 1BHK, 2BHK, 3BHK, 4BHK or Villa home interiors.
            </p>
            <button
              type="button"
              className="btn-primary"
              style={{
                marginTop: "auto",
                width: "100%",
                justifyContent: "center",
                background: calcMode === "fullhome" ? "linear-gradient(135deg, #FF4D79 0%, #E72E5A 100%)" : "#F8FAFC",
                color: calcMode === "fullhome" ? "#FFFFFF" : "#0F172A",
                border: calcMode === "fullhome" ? "none" : "1px solid #E2E8F0",
                boxShadow: calcMode === "fullhome" ? "0 4px 14px rgba(231, 46, 90, 0.3)" : "none",
                padding: "10px 16px",
                fontSize: 12.5,
              }}
            >
              <span>{calcMode === "fullhome" ? "Calculating Full Home" : "Calculate Full Home"}</span>
              <ArrowRight size={13} strokeWidth={2.2} />
            </button>
          </div>

          {/* Kitchen (Wizard) */}
          <div
            onClick={() => {
              setCalcMode("kitchen");
              if (kitchenStep === 5) setKitchenStep(1);
            }}
            style={{
              background: "#FFFFFF",
              borderRadius: 20,
              padding: "24px 22px",
              border: calcMode === "kitchen" ? "2px solid var(--liv-pink)" : "1px solid #E2E8F0",
              boxShadow: calcMode === "kitchen" ? "0 12px 30px rgba(231, 46, 90, 0.12)" : "0 4px 16px rgba(0,0,0,0.03)",
              cursor: "pointer",
              transition: "all 0.2s ease",
              position: "relative",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ position: "absolute", top: -10, right: 20, background: "var(--liv-pink)", color: "#FFFFFF", fontSize: 10.5, fontWeight: 700, padding: "2px 10px", borderRadius: 999, textTransform: "uppercase", letterSpacing: "0.06em" }}>
              Interactive 4-Step Wizard
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 18 }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: "var(--liv-pink-soft)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--liv-pink)" }}>
                <ChefHat size={22} strokeWidth={1.8} />
              </div>
              <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#F1F5F9", display: "flex", alignItems: "center", justifyContent: "center", color: "#64748B" }}>
                <SlidersHorizontal size={14} strokeWidth={2} />
              </div>
            </div>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: "#0F172A", margin: "0 0 6px" }}>
              Kitchen
            </h3>
            <p style={{ fontSize: 13, color: "#64748B", margin: "0 0 20px", lineHeight: 1.5 }}>
              Select L-shaped, Straight, U-shaped, or Parallel layout with accurate feet measurements.
            </p>
            <button
              type="button"
              className="btn-primary"
              style={{
                marginTop: "auto",
                width: "100%",
                justifyContent: "center",
                background: calcMode === "kitchen" ? "linear-gradient(135deg, #FF4D79 0%, #E72E5A 100%)" : "#F8FAFC",
                color: calcMode === "kitchen" ? "#FFFFFF" : "#0F172A",
                border: calcMode === "kitchen" ? "none" : "1px solid #E2E8F0",
                boxShadow: calcMode === "kitchen" ? "0 4px 14px rgba(231, 46, 90, 0.3)" : "none",
                padding: "10px 16px",
                fontSize: 12.5,
              }}
            >
              <span>{calcMode === "kitchen" ? "Calculating Kitchen" : "Calculate Kitchen"}</span>
              <ArrowRight size={13} strokeWidth={2.2} />
            </button>
          </div>

          {/* Wardrobe */}
          <div
            onClick={() => setCalcMode("wardrobe")}
            style={{
              background: "#FFFFFF",
              borderRadius: 20,
              padding: "24px 22px",
              border: calcMode === "wardrobe" ? "2px solid var(--liv-pink)" : "1px solid #E2E8F0",
              boxShadow: calcMode === "wardrobe" ? "0 12px 30px rgba(231, 46, 90, 0.12)" : "0 4px 16px rgba(0,0,0,0.03)",
              cursor: "pointer",
              transition: "all 0.2s ease",
              position: "relative",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 18 }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: "var(--liv-pink-soft)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--liv-pink)" }}>
                <BedDouble size={22} strokeWidth={1.8} />
              </div>
              <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#F1F5F9", display: "flex", alignItems: "center", justifyContent: "center", color: "#64748B" }}>
                <SlidersHorizontal size={14} strokeWidth={2} />
              </div>
            </div>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: "#0F172A", margin: "0 0 6px" }}>
              Wardrobe
            </h3>
            <p style={{ fontSize: 13, color: "#64748B", margin: "0 0 20px", lineHeight: 1.5 }}>
              Get an approximate costing for 2-door, 3-door, 4-door, or walk-in closets with lofts.
            </p>
            <button
              type="button"
              className="btn-primary"
              style={{
                marginTop: "auto",
                width: "100%",
                justifyContent: "center",
                background: calcMode === "wardrobe" ? "linear-gradient(135deg, #FF4D79 0%, #E72E5A 100%)" : "#F8FAFC",
                color: calcMode === "wardrobe" ? "#FFFFFF" : "#0F172A",
                border: calcMode === "wardrobe" ? "none" : "1px solid #E2E8F0",
                boxShadow: calcMode === "wardrobe" ? "0 4px 14px rgba(231, 46, 90, 0.3)" : "none",
                padding: "10px 16px",
                fontSize: 12.5,
              }}
            >
              <span>{calcMode === "wardrobe" ? "Calculating Wardrobe" : "Calculate Wardrobe"}</span>
              <ArrowRight size={13} strokeWidth={2.2} />
            </button>
          </div>
        </div>

        {/* ============================================================== */}
        {/* ================ MODE 1: KITCHEN 4-STEP WIZARD =============== */}
        {/* ============================================================== */}
        {calcMode === "kitchen" && (
          <div
            style={{
              background: "#FFFFFF",
              borderRadius: 24,
              boxShadow: "0 20px 50px rgba(15, 23, 42, 0.08)",
              border: "1px solid #E2E8F0",
              overflow: "hidden",
            }}
          >
            {/* Top Stepper Header (Livspace Style) */}
            <div
              style={{
                padding: "24px 32px 18px",
                borderBottom: "1px solid #F1F5F9",
                background: "#FAFAFA",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: 16,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: "var(--liv-pink)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  Modular Kitchen Estimator
                </span>
              </div>

              {/* Step indicator pills */}
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                {[
                  { step: 1, label: "KITCHEN LAYOUT" },
                  { step: 2, label: "MEASUREMENTS" },
                  { step: 3, label: "PACKAGE" },
                  { step: 4, label: "GET QUOTE" },
                ].map((s, idx) => {
                  const isDone = kitchenStep > s.step;
                  const isCurrent = kitchenStep === s.step;
                  return (
                    <div key={s.step} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <div
                        style={{
                          width: 22,
                          height: 22,
                          borderRadius: "50%",
                          background: isCurrent ? "var(--liv-pink)" : isDone ? "#0F172A" : "#E2E8F0",
                          color: "#FFFFFF",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 11,
                          fontWeight: 700,
                        }}
                      >
                        {isDone ? <Check size={12} strokeWidth={2.4} /> : s.step}
                      </div>
                      <span
                        style={{
                          fontSize: 11,
                          fontWeight: isCurrent ? 700 : 600,
                          color: isCurrent ? "#0F172A" : isDone ? "#475569" : "#94A3B8",
                          letterSpacing: "0.04em",
                        }}
                        className="hide-mobile"
                      >
                        {s.label}
                      </span>
                      {idx < 3 && (
                        <div style={{ width: 20, height: 1.5, background: isDone ? "#0F172A" : "#E2E8F0" }} className="hide-mobile" />
                      )}
                    </div>
                  );
                })}
              </div>

              <div style={{ fontSize: 13, fontWeight: 700, color: "#64748B" }}>
                {kitchenStep <= 4 ? `${kitchenStep}/4` : "Complete"}
              </div>
            </div>

            {/* Step Body */}
            <div style={{ padding: "clamp(24px, 4vw, 40px)" }}>

              {/* ---------------- STEP 1: SELECT LAYOUT ---------------- */}
              {kitchenStep === 1 && (
                <div>
                  <div style={{ textAlign: "center", marginBottom: 32 }}>
                    <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(22px, 3vw, 28px)", fontWeight: 700, color: "#0F172A", margin: "0 0 8px" }}>
                      Select the layout of your kitchen
                    </h3>
                    <p style={{ fontSize: 14, color: "#64748B", margin: 0 }}>
                      Choose the configuration that matches your home floor plan. <span style={{ color: "var(--liv-pink)", fontWeight: 600 }}>Need assistance? Call 93913 56077</span>
                    </p>
                  </div>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                      gap: 20,
                      maxWidth: 880,
                      margin: "0 auto",
                    }}
                  >
                    {KITCHEN_LAYOUTS.map((layout) => {
                      const isSelected = selectedLayout === layout.id;
                      return (
                        <div
                          key={layout.id}
                          onClick={() => {
                            setSelectedLayout(layout.id);
                            setMeasurementA(layout.defaultA);
                            setMeasurementB(layout.defaultB);
                            if (layout.defaultC) setMeasurementC(layout.defaultC);
                          }}
                          style={{
                            background: "#FFFFFF",
                            borderRadius: 16,
                            overflow: "hidden",
                            border: isSelected ? "2px solid var(--liv-pink)" : "1px solid #E2E8F0",
                            boxShadow: isSelected ? "0 8px 24px rgba(231, 46, 90, 0.15)" : "0 2px 8px rgba(0,0,0,0.03)",
                            cursor: "pointer",
                            transition: "all 0.2s ease",
                            position: "relative",
                          }}
                        >
                          <div style={{ position: "absolute", top: 12, right: 12, zIndex: 2 }}>
                            <div
                              style={{
                                width: 20,
                                height: 20,
                                borderRadius: "50%",
                                border: isSelected ? "6px solid var(--liv-pink)" : "2px solid #CBD5E1",
                                background: "#FFFFFF",
                                transition: "all 0.2s ease",
                              }}
                            />
                          </div>

                          <div style={{ padding: "16px 12px 10px" }}>
                            <LayoutSvg id={layout.id} />
                          </div>

                          <div
                            style={{
                              padding: "12px",
                              textAlign: "center",
                              borderTop: "1px solid #F1F5F9",
                              background: isSelected ? "var(--liv-pink-soft)" : "#FFFFFF",
                              fontWeight: 700,
                              fontSize: 14,
                              color: isSelected ? "var(--liv-pink)" : "#0F172A",
                              transition: "all 0.2s ease",
                            }}
                          >
                            {layout.name}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* ---------------- STEP 2: MEASUREMENTS ---------------- */}
              {kitchenStep === 2 && (
                <div style={{ maxWidth: 760, margin: "0 auto" }}>
                  <div style={{ textAlign: "center", marginBottom: 28 }}>
                    <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(22px, 3vw, 28px)", fontWeight: 700, color: "#0F172A", margin: "0 0 8px" }}>
                      Now review the measurements for accuracy
                    </h3>
                    <p style={{ fontSize: 14, color: "#64748B", margin: 0 }}>
                      Selected Layout: <strong style={{ color: "var(--liv-pink)" }}>{KITCHEN_LAYOUTS.find(l => l.id === selectedLayout)?.name}</strong>
                    </p>
                  </div>

                  {/* Diagram Area with Highlight Label */}
                  <div
                    style={{
                      background: "#FBF7F4",
                      borderRadius: 18,
                      border: "1px solid #EAE0D7",
                      padding: "24px 20px",
                      marginBottom: 20,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      minHeight: 180,
                      position: "relative",
                    }}
                  >
                    <div style={{ width: 140, marginBottom: 14 }}>
                      <LayoutSvg id={selectedLayout} />
                    </div>

                    <div
                      style={{
                        background: "rgba(231, 46, 90, 0.12)",
                        border: "1.5px solid var(--liv-pink)",
                        borderRadius: 8,
                        padding: "8px 24px",
                        color: "var(--liv-pink)",
                        fontWeight: 700,
                        fontSize: 15,
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                      }}
                    >
                      <span>Side A: {measurementA} ft</span>
                      {selectedLayout !== "straight" && <span>• Side B: {measurementB} ft</span>}
                      {selectedLayout === "u-shaped" && <span>• Side C: {measurementC} ft</span>}
                    </div>
                  </div>

                  {/* Amber Notice Banner */}
                  <div
                    style={{
                      background: "#FEF9C3",
                      border: "1px solid #FDE047",
                      borderRadius: 10,
                      padding: "10px 16px",
                      fontSize: 13,
                      fontWeight: 600,
                      color: "#854D0E",
                      textAlign: "center",
                      marginBottom: 28,
                    }}
                  >
                    Standard size has been set for your convenience. You can adjust the dimensions below.
                  </div>

                  {/* Dimension Inputs */}
                  <div style={{ display: "grid", gridTemplateColumns: selectedLayout === "straight" ? "1fr" : "repeat(auto-fit, minmax(200px, 1fr))", gap: 20, marginBottom: 20 }}>
                    <div>
                      <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#334155", marginBottom: 8 }}>
                        Side A (Main Run)
                      </label>
                      <select
                        value={measurementA}
                        onChange={(e) => setMeasurementA(Number(e.target.value))}
                        style={{
                          width: "100%",
                          padding: "12px 14px",
                          borderRadius: 10,
                          border: "1px solid #CBD5E1",
                          fontSize: 14,
                          fontWeight: 600,
                          color: "#0F172A",
                          background: "#FFFFFF",
                          cursor: "pointer",
                        }}
                      >
                        {[6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 20].map((ft) => (
                          <option key={ft} value={ft}>{ft} ft</option>
                        ))}
                      </select>
                    </div>

                    {selectedLayout !== "straight" && (
                      <div>
                        <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#334155", marginBottom: 8 }}>
                          Side B {selectedLayout === "parallel" ? "(Second Parallel Run)" : "(Return Wall)"}
                        </label>
                        <select
                          value={measurementB}
                          onChange={(e) => setMeasurementB(Number(e.target.value))}
                          style={{
                            width: "100%",
                            padding: "12px 14px",
                            borderRadius: 10,
                            border: "1px solid #CBD5E1",
                            fontSize: 14,
                            fontWeight: 600,
                            color: "#0F172A",
                            background: "#FFFFFF",
                            cursor: "pointer",
                          }}
                        >
                          {[4, 5, 6, 7, 8, 9, 10, 11, 12, 14].map((ft) => (
                            <option key={ft} value={ft}>{ft} ft</option>
                          ))}
                        </select>
                      </div>
                    )}

                    {selectedLayout === "u-shaped" && (
                      <div>
                        <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#334155", marginBottom: 8 }}>
                          Side C (Third Wall)
                        </label>
                        <select
                          value={measurementC}
                          onChange={(e) => setMeasurementC(Number(e.target.value))}
                          style={{
                            width: "100%",
                            padding: "12px 14px",
                            borderRadius: 10,
                            border: "1px solid #CBD5E1",
                            fontSize: 14,
                            fontWeight: 600,
                            color: "#0F172A",
                            background: "#FFFFFF",
                            cursor: "pointer",
                          }}
                        >
                          {[4, 5, 6, 7, 8, 9, 10, 12].map((ft) => (
                            <option key={ft} value={ft}>{ft} ft</option>
                          ))}
                        </select>
                      </div>
                    )}
                  </div>

                  <div style={{ textAlign: "center", fontSize: 13, color: "#64748B" }}>
                    Total Kitchen Running Length: <strong style={{ color: "#0F172A" }}>{totalRft} Running Feet (Rft)</strong>
                  </div>
                </div>
              )}

              {/* ---------------- STEP 3: PICK PACKAGE ---------------- */}
              {kitchenStep === 3 && (
                <div style={{ maxWidth: 880, margin: "0 auto" }}>
                  <div style={{ textAlign: "center", marginBottom: 28 }}>
                    <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(22px, 3vw, 28px)", fontWeight: 700, color: "#0F172A", margin: "0 0 8px" }}>
                      Pick your package
                    </h3>
                    <p style={{ fontSize: 14, color: "#64748B", margin: 0 }}>
                      Selected size: <strong>{totalRft} Running Feet</strong>. Choose your material tier.
                    </p>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
                    {KITCHEN_PACKAGES.map((pkg) => {
                      const isSelected = selectedKitchenPkg === pkg.id;
                      return (
                        <div
                          key={pkg.id}
                          onClick={() => setSelectedKitchenPkg(pkg.id)}
                          style={{
                            background: "#FFFFFF",
                            borderRadius: 18,
                            overflow: "hidden",
                            border: isSelected ? "2px solid var(--liv-pink)" : "1px solid #E2E8F0",
                            boxShadow: isSelected ? "0 10px 30px rgba(231, 46, 90, 0.16)" : "0 2px 8px rgba(0,0,0,0.03)",
                            cursor: "pointer",
                            transition: "all 0.2s ease",
                            display: "flex",
                            flexDirection: "column",
                            position: "relative",
                          }}
                        >
                          {pkg.popular && (
                            <div style={{ position: "absolute", top: 12, right: 12, zIndex: 2, background: "var(--liv-pink)", color: "#FFFFFF", fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 999, textTransform: "uppercase" }}>
                              Most Popular
                            </div>
                          )}

                          <div style={{ padding: "20px 20px 14px", borderBottom: "1px solid #F1F5F9" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                              <div
                                style={{
                                  width: 18,
                                  height: 18,
                                  borderRadius: "50%",
                                  border: isSelected ? "5px solid var(--liv-pink)" : "2px solid #CBD5E1",
                                  background: "#FFFFFF",
                                }}
                              />
                              <div style={{ fontSize: 16, fontWeight: 700, color: "#0F172A" }}>
                                {pkg.name}
                              </div>
                            </div>
                            <p style={{ fontSize: 12.5, color: "#64748B", margin: 0, lineHeight: 1.45 }}>
                              {pkg.subtitle}
                            </p>
                          </div>

                          {/* Image Thumbnail */}
                          <div style={{ position: "relative", width: "100%", height: 130, background: "#F1F5F9" }}>
                            <Image
                              src={pkg.img}
                              alt={pkg.name}
                              fill
                              sizes="300px"
                              style={{ objectFit: "cover" }}
                            />
                          </div>

                          {/* Features */}
                          <div style={{ padding: 18, marginTop: "auto" }}>
                            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 7 }}>
                              {pkg.features.map((f, i) => (
                                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 12, color: "#334155" }}>
                                  <Check size={14} strokeWidth={2.4} color="var(--liv-green)" style={{ flexShrink: 0, marginTop: 2 }} />
                                  <span>{f}</span>
                                </li>
                              ))}
                            </ul>
                            <div style={{ marginTop: 14, paddingTop: 12, borderTop: "1px solid #F1F5F9", fontSize: 12.5, fontWeight: 700, color: isSelected ? "var(--liv-pink)" : "#0F172A" }}>
                              Rate: ₹{pkg.ratePerRft.toLocaleString()} / Rft
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* ---------------- STEP 4: GET QUOTE FORM ---------------- */}
              {kitchenStep === 4 && (
                <div style={{ maxWidth: 540, margin: "0 auto" }}>
                  <div style={{ textAlign: "center", marginBottom: 28 }}>
                    <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(22px, 3vw, 28px)", fontWeight: 700, color: "#0F172A", margin: "0 0 8px" }}>
                      Your kitchen estimate is almost ready!
                    </h3>
                    <p style={{ fontSize: 14, color: "#64748B", margin: 0 }}>
                      Enter your details to view the itemized breakdown and quotation.
                    </p>
                  </div>

                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setKitchenStep(5);
                    }}
                    style={{ display: "flex", flexDirection: "column", gap: 16 }}
                  >
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Name *"
                        value={leadName}
                        onChange={(e) => setLeadName(e.target.value)}
                        style={{
                          width: "100%",
                          padding: "13px 16px",
                          borderRadius: 10,
                          border: "1px solid #CBD5E1",
                          fontSize: 14,
                          boxSizing: "border-box",
                        }}
                      />
                    </div>

                    <div>
                      <input
                        type="email"
                        required
                        placeholder="Email ID *"
                        value={leadEmail}
                        onChange={(e) => setLeadEmail(e.target.value)}
                        style={{
                          width: "100%",
                          padding: "13px 16px",
                          borderRadius: 10,
                          border: "1px solid #CBD5E1",
                          fontSize: 14,
                          boxSizing: "border-box",
                        }}
                      />
                    </div>

                    <div>
                      <div style={{ display: "flex", border: "1px solid #CBD5E1", borderRadius: 10, overflow: "hidden" }}>
                        <div style={{ padding: "0 14px", background: "#F8FAFC", borderRight: "1px solid #CBD5E1", display: "flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 600, color: "#334155" }}>
                          <span>🇮🇳 +91</span>
                        </div>
                        <input
                          type="tel"
                          required
                          placeholder="Phone number *"
                          value={leadPhone}
                          onChange={(e) => setLeadPhone(e.target.value)}
                          style={{
                            flex: 1,
                            padding: "13px 16px",
                            border: "none",
                            fontSize: 14,
                            outline: "none",
                            boxSizing: "border-box",
                          }}
                        />
                      </div>
                    </div>

                    <label style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer", fontSize: 13, color: "#334155" }}>
                      <input
                        type="checkbox"
                        checked={sendWhatsApp}
                        onChange={(e) => setSendWhatsApp(e.target.checked)}
                        style={{ accentColor: "var(--liv-pink)", width: 16, height: 16 }}
                      />
                      <span>Send me updates on WhatsApp</span>
                    </label>

                    <div>
                      <select
                        value={leadCity}
                        onChange={(e) => setLeadCity(e.target.value)}
                        style={{
                          width: "100%",
                          padding: "13px 16px",
                          borderRadius: 10,
                          border: "1px solid #CBD5E1",
                          fontSize: 14,
                          color: "#0F172A",
                          background: "#FFFFFF",
                          boxSizing: "border-box",
                        }}
                      >
                        <option value="Visakhapatnam">Visakhapatnam (Vizag)</option>
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="Vijayawada">Vijayawada</option>
                        <option value="Guntur">Guntur</option>
                        <option value="Vizianagaram">Vizianagaram</option>
                        <option value="Kakinada">Kakinada</option>
                      </select>
                    </div>

                    <div style={{ fontSize: 11, color: "#94A3B8", lineHeight: 1.5, textAlign: "center" }}>
                      By submitting this form, you agree to the privacy policy &amp; terms. No spam. Direct response from senior kitchen architect.
                    </div>

                    <button
                      type="submit"
                      className="btn-primary"
                      style={{
                        padding: "14px 24px",
                        fontSize: 14,
                        fontWeight: 700,
                        justifyContent: "center",
                        marginTop: 8,
                      }}
                    >
                      <span>View Instant Kitchen Estimate</span>
                      <ArrowRight size={15} strokeWidth={2.2} />
                    </button>
                  </form>
                </div>
              )}

              {/* ---------------- STEP 5: DETAILED QUOTATION RESULT ---------------- */}
              {kitchenStep === 5 && (
                <div style={{ maxWidth: 840, margin: "0 auto" }}>
                  <div
                    style={{
                      background: "linear-gradient(135deg, var(--liv-pink-soft) 0%, #FFFFFF 60%, var(--liv-blue-soft) 100%)",
                      borderRadius: 20,
                      padding: "clamp(24px, 4vw, 36px)",
                      border: "1px solid rgba(231, 46, 90, 0.25)",
                      marginBottom: 24,
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 14, marginBottom: 20 }}>
                      <div>
                        <div style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--liv-pink)", marginBottom: 4 }}>
                          Official Modular Kitchen Quotation
                        </div>
                        <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(22px, 3.5vw, 32px)", fontWeight: 700, color: "#0F172A", margin: 0 }}>
                          Estimated Cost: {formatPrice(kitchenEstimatedMin)} – {formatPrice(kitchenEstimatedMax)}
                        </h3>
                      </div>
                      <div style={{ background: "#FFFFFF", padding: "6px 14px", borderRadius: 999, border: "1px solid #E2E8F0", fontSize: 12, fontWeight: 700, color: "#334155" }}>
                        Location: {leadCity}
                      </div>
                    </div>

                    {/* Summary Badges */}
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 12, marginBottom: 24 }}>
                      <div style={{ background: "#FFFFFF", borderRadius: 12, padding: "12px 14px", border: "1px solid #F1F5F9" }}>
                        <div style={{ fontSize: 11, color: "#64748B", fontWeight: 600 }}>Selected Layout</div>
                        <div style={{ fontSize: 14, fontWeight: 700, color: "#0F172A", textTransform: "capitalize" }}>{selectedLayout} ({totalRft} Rft)</div>
                      </div>
                      <div style={{ background: "#FFFFFF", borderRadius: 12, padding: "12px 14px", border: "1px solid #F1F5F9" }}>
                        <div style={{ fontSize: 11, color: "#64748B", fontWeight: 600 }}>Material Package</div>
                        <div style={{ fontSize: 14, fontWeight: 700, color: "var(--liv-pink)" }}>{currentPkg.name}</div>
                      </div>
                      <div style={{ background: "#FFFFFF", borderRadius: 12, padding: "12px 14px", border: "1px solid #F1F5F9" }}>
                        <div style={{ fontSize: 11, color: "#64748B", fontWeight: 600 }}>Handover Timeline</div>
                        <div style={{ fontSize: 14, fontWeight: 700, color: "var(--liv-green)" }}>Guaranteed 45 Days</div>
                      </div>
                      <div style={{ background: "#FFFFFF", borderRadius: 12, padding: "12px 14px", border: "1px solid #F1F5F9" }}>
                        <div style={{ fontSize: 11, color: "#64748B", fontWeight: 600 }}>Warranty Protection</div>
                        <div style={{ fontSize: 14, fontWeight: 700, color: "#0F172A" }}>10-Year Hardware</div>
                      </div>
                    </div>

                    {/* Itemized Specification Table */}
                    <div style={{ background: "#FFFFFF", borderRadius: 14, padding: "18px 20px", border: "1px solid #E2E8F0", marginBottom: 24 }}>
                      <div style={{ fontSize: 13, fontWeight: 700, color: "#0F172A", marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.04em" }}>
                        Itemized Kitchen Breakdown
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "#334155" }}>
                          <span>Base Cabinets with German Blum Tandem Drawers:</span>
                          <strong>{formatPrice(Math.round(kitchenEstimatedMin * 0.45))}</strong>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "#334155" }}>
                          <span>Wall Cabinets &amp; Hydraulic Lift-up Shutters:</span>
                          <strong>{formatPrice(Math.round(kitchenEstimatedMin * 0.28))}</strong>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "#334155" }}>
                          <span>Anti-fingerprint Shutters &amp; Profile Edge Bander:</span>
                          <strong>{formatPrice(Math.round(kitchenEstimatedMin * 0.15))}</strong>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "#334155" }}>
                          <span>Deep Kitchen Sink Cutout &amp; Installation:</span>
                          <strong>Included (Free)</strong>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center" }}>
                      <a
                        href={`https://wa.me/919391356077?text=${whatsappKitchenMessage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 8,
                          padding: "14px 26px",
                          borderRadius: 999,
                          background: "#25D366",
                          color: "#FFFFFF",
                          fontWeight: 700,
                          fontSize: 14,
                          textDecoration: "none",
                        }}
                      >
                        <WhatsAppIcon size={18} />
                        <span>Share on WhatsApp &amp; Get 3D Layout</span>
                      </a>

                      <button
                        type="button"
                        onClick={() => setKitchenStep(1)}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 8,
                          padding: "14px 22px",
                          borderRadius: 999,
                          background: "#FFFFFF",
                          border: "1px solid #CBD5E1",
                          color: "#0F172A",
                          fontWeight: 600,
                          fontSize: 13.5,
                          cursor: "pointer",
                        }}
                      >
                        <RefreshCw size={14} />
                        <span>Recalculate with New Size</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Wizard Bottom Navigation Bar */}
              {kitchenStep < 5 && (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: 36,
                    paddingTop: 20,
                    borderTop: "1px solid #F1F5F9",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => {
                      if (kitchenStep > 1) {
                        setKitchenStep((kitchenStep - 1) as 1 | 2 | 3 | 4);
                      }
                    }}
                    disabled={kitchenStep === 1}
                    style={{
                      background: "none",
                      border: "none",
                      color: kitchenStep === 1 ? "#CBD5E1" : "#64748B",
                      cursor: kitchenStep === 1 ? "not-allowed" : "pointer",
                      fontSize: 13,
                      fontWeight: 700,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    <ArrowLeft size={14} />
                    <span>Back</span>
                  </button>

                  {kitchenStep < 4 && (
                    <button
                      type="button"
                      onClick={() => setKitchenStep((kitchenStep + 1) as 1 | 2 | 3 | 4)}
                      className="btn-primary"
                      style={{
                        padding: "12px 28px",
                        fontSize: 13,
                        fontWeight: 700,
                        letterSpacing: "0.05em",
                        textTransform: "uppercase",
                      }}
                    >
                      <span>Next</span>
                      <ArrowRight size={14} strokeWidth={2.4} />
                    </button>
                  )}
                </div>
              )}

            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* ================ MODE 2: FULL HOME CALCULATOR =============== */}
        {/* ============================================================== */}
        {calcMode === "fullhome" && (
          <div
            style={{
              background: "#FFFFFF",
              borderRadius: 24,
              boxShadow: "0 20px 50px rgba(15, 23, 42, 0.08)",
              border: "1px solid #E2E8F0",
              padding: "clamp(24px, 4vw, 40px)",
            }}
          >
            <div style={{ textAlign: "center", marginBottom: 28 }}>
              <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(22px, 3vw, 28px)", fontWeight: 700, color: "#0F172A", margin: "0 0 6px" }}>
                Full Home Interior Estimator
              </h3>
              <p style={{ fontSize: 14, color: "#64748B", margin: 0 }}>
                Select property size and choose room scopes to calculate end-to-end turnkey costs.
              </p>
            </div>

            {/* Property Type Pills */}
            <div style={{ display: "flex", justifyContent: "center", gap: 10, flexWrap: "wrap", marginBottom: 30 }}>
              {[
                { id: "1bhk", label: "1 BHK", area: 650 },
                { id: "2bhk", label: "2 BHK", area: 1050 },
                { id: "3bhk", label: "3 BHK", area: 1550 },
                { id: "4bhk", label: "4 BHK", area: 2200 },
                { id: "villa", label: "Luxury Villa", area: 3400 },
              ].map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => {
                    setSelectedType(t.id);
                    setSqft(t.area);
                  }}
                  style={{
                    padding: "10px 22px",
                    borderRadius: 999,
                    fontSize: 13,
                    fontWeight: 700,
                    cursor: "pointer",
                    border: selectedType === t.id ? "1px solid var(--liv-pink)" : "1px solid #E2E8F0",
                    background: selectedType === t.id ? "var(--liv-pink)" : "#FFFFFF",
                    color: selectedType === t.id ? "#FFFFFF" : "#334155",
                    transition: "all 0.2s ease",
                  }}
                >
                  {t.label} ({t.area} sqft)
                </button>
              ))}
            </div>

            {/* Slider */}
            <div style={{ maxWidth: 600, margin: "0 auto 36px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, fontWeight: 700, color: "#334155", marginBottom: 8 }}>
                <span>Carpet Area: {sqft} sq.ft</span>
                <span style={{ color: "var(--liv-pink)" }}>₹{ratePerSqft} / sq.ft</span>
              </div>
              <input
                type="range"
                min={400}
                max={5000}
                step={50}
                value={sqft}
                onChange={(e) => setSqft(Number(e.target.value))}
                style={{ width: "100%", accentColor: "var(--liv-pink)" }}
              />
            </div>

            {/* Rate Tiers */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16, marginBottom: 32 }}>
              {Object.values(PACKAGES).map((pkg) => {
                const isSelected = ratePerSqft === pkg.rate;
                return (
                  <div
                    key={pkg.id}
                    onClick={() => setRatePerSqft(pkg.rate)}
                    style={{
                      padding: "18px 20px",
                      borderRadius: 14,
                      border: isSelected ? "2px solid var(--liv-pink)" : "1px solid #E2E8F0",
                      background: isSelected ? "var(--liv-pink-soft)" : "#FFFFFF",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                    }}
                  >
                    <div style={{ fontSize: 15, fontWeight: 700, color: isSelected ? "var(--liv-pink)" : "#0F172A", marginBottom: 4 }}>
                      {pkg.name}
                    </div>
                    <div style={{ fontSize: 18, fontWeight: 700, color: "#0F172A", marginBottom: 4 }}>
                      ₹{pkg.rate} <span style={{ fontSize: 11, fontWeight: 500, color: "#64748B" }}>/ sqft</span>
                    </div>
                    <div style={{ fontSize: 12, color: "#64748B" }}>
                      {pkg.subtitle}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Total Summary Box */}
            <div
              style={{
                background: "#0F172A",
                color: "#FFFFFF",
                borderRadius: 18,
                padding: "24px 28px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: 20,
              }}
            >
              <div>
                <div style={{ fontSize: 12, color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 }}>
                  Estimated Turnkey Investment
                </div>
                <div style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 700, color: "#FFFFFF" }}>
                  {formatPrice(sqft * ratePerSqft)}
                </div>
                <div style={{ fontSize: 12, color: "var(--liv-green-light)", marginTop: 4 }}>
                  Includes 45-day guaranteed handover &amp; 10-year warranty
                </div>
              </div>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a
                  href={`https://wa.me/919391356077?text=${encodeURIComponent(`Hello MVVR, I calculated full home interiors for ${sqft} sqft (${selectedType}) at ₹${ratePerSqft}/sqft = ${formatPrice(sqft * ratePerSqft)}. Please connect with 3D concepts.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ padding: "12px 24px", fontSize: 13 }}
                >
                  <WhatsAppIcon size={16} />
                  <span>Get WhatsApp Quotation</span>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* ================ MODE 3: WARDROBE CALCULATOR ================ */}
        {/* ============================================================== */}
        {calcMode === "wardrobe" && (
          <div
            style={{
              background: "#FFFFFF",
              borderRadius: 24,
              boxShadow: "0 20px 50px rgba(15, 23, 42, 0.08)",
              border: "1px solid #E2E8F0",
              padding: "clamp(24px, 4vw, 40px)",
              maxWidth: 780,
              margin: "0 auto",
            }}
          >
            <div style={{ textAlign: "center", marginBottom: 28 }}>
              <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(22px, 3vw, 28px)", fontWeight: 700, color: "#0F172A", margin: "0 0 6px" }}>
                Designer Wardrobe &amp; Closet Estimator
              </h3>
              <p style={{ fontSize: 14, color: "#64748B", margin: 0 }}>
                Calculate costs for floor-to-ceiling modular wardrobes with top lofts and sensor lighting.
              </p>
            </div>

            <div style={{ marginBottom: 24 }}>
              <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#334155", marginBottom: 10 }}>
                Select Shutter Configuration:
              </label>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                {[
                  { doors: 2, label: "2-Door (4 ft width)" },
                  { doors: 3, label: "3-Door (6 ft width)" },
                  { doors: 4, label: "4-Door (8 ft width)" },
                  { doors: 6, label: "Walk-in Closet (12 ft)" },
                ].map((w) => (
                  <button
                    key={w.doors}
                    type="button"
                    onClick={() => setWardrobeDoors(w.doors)}
                    style={{
                      padding: "10px 18px",
                      borderRadius: 10,
                      fontSize: 13,
                      fontWeight: 700,
                      border: wardrobeDoors === w.doors ? "2px solid var(--liv-pink)" : "1px solid #E2E8F0",
                      background: wardrobeDoors === w.doors ? "var(--liv-pink-soft)" : "#FFFFFF",
                      color: wardrobeDoors === w.doors ? "var(--liv-pink)" : "#334155",
                      cursor: "pointer",
                    }}
                  >
                    {w.label}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: 32 }}>
              <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#334155", marginBottom: 10 }}>
                Select Surface Finish:
              </label>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12 }}>
                {[
                  { id: "matte" as const, name: "0.8mm Matte Laminate", ratePerFt: 1800 },
                  { id: "acrylic" as const, name: "1mm High Gloss Acrylic", ratePerFt: 2400 },
                  { id: "glass" as const, name: "Tinted Fluted Bronze Glass", ratePerFt: 3200 },
                ].map((f) => (
                  <div
                    key={f.id}
                    onClick={() => setWardrobeFinish(f.id)}
                    style={{
                      padding: "14px 16px",
                      borderRadius: 12,
                      border: wardrobeFinish === f.id ? "2px solid var(--liv-pink)" : "1px solid #E2E8F0",
                      background: wardrobeFinish === f.id ? "var(--liv-pink-soft)" : "#FFFFFF",
                      cursor: "pointer",
                    }}
                  >
                    <div style={{ fontSize: 13.5, fontWeight: 700, color: wardrobeFinish === f.id ? "var(--liv-pink)" : "#0F172A", marginBottom: 4 }}>
                      {f.name}
                    </div>
                    <div style={{ fontSize: 12, color: "#64748B" }}>
                      ₹{f.ratePerFt} / sq.ft
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Wardrobe Price Card */}
            {(() => {
              const widthFt = wardrobeDoors === 2 ? 4 : wardrobeDoors === 3 ? 6 : wardrobeDoors === 4 ? 8 : 12;
              const heightFt = 9; // standard 9ft with loft
              const rate = wardrobeFinish === "matte" ? 1800 : wardrobeFinish === "acrylic" ? 2400 : 3200;
              const cost = widthFt * heightFt * rate;

              return (
                <div
                  style={{
                    background: "#0F172A",
                    color: "#FFFFFF",
                    borderRadius: 18,
                    padding: "24px 28px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: 16,
                  }}
                >
                  <div>
                    <div style={{ fontSize: 12, color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 }}>
                      Estimated Wardrobe Investment
                    </div>
                    <div style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(24px, 3.5vw, 34px)", fontWeight: 700, color: "#FFFFFF" }}>
                      {formatPrice(cost)}
                    </div>
                    <div style={{ fontSize: 12, color: "var(--liv-green-light)", marginTop: 4 }}>
                      Includes full height lofts, soft-close hinges &amp; sensor LED rod
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/919391356077?text=${encodeURIComponent(`Hello MVVR, I estimated wardrobe cost: ${wardrobeDoors}-door (${widthFt}x9ft) in ${wardrobeFinish} finish = ${formatPrice(cost)}. Please share catalogs.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ padding: "12px 24px", fontSize: 13 }}
                  >
                    <WhatsAppIcon size={16} />
                    <span>WhatsApp Quote</span>
                  </a>
                </div>
              );
            })()}
          </div>
        )}

      </div>
    </section>
  );
}
