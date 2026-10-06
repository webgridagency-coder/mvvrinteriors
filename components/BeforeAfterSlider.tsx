"use client";

import { useState } from "react";
import Image from "next/image";
import { Sparkles, ArrowLeftRight, Clock, Shield, CheckCircle } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

export default function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [viewMode, setViewMode] = useState<"slider" | "before" | "after">("slider");

  return (
    <section className="before-after-section" id="transformation">
      <div className="container">
        <div className="before-after-header">
          <div className="funky-pill-tag" style={{ background: "#FEF3C7", borderColor: "#FDE68A", color: "#B45309" }}>
            <Sparkles size={14} />
            <span>THE 45-DAY TRANSFORMATION</span>
          </div>
          <h2 className="before-after-title">
            From Bare Concrete to <span className="text-gradient-funky">Vibrant Masterpiece</span>
          </h2>
          <p className="before-after-desc">
            Drag the slider or click the buttons below to see how our turnkey architecture team transforms an empty shell into a breathtaking, colorful home in just 45 days.
          </p>

          {/* View mode toggle */}
          <div className="transformation-toggle-row">
            <button
              onClick={() => setViewMode("slider")}
              className={`transform-btn ${viewMode === "slider" ? "active" : ""}`}
            >
              <ArrowLeftRight size={14} />
              <span>Interactive Split Slider</span>
            </button>
            <button
              onClick={() => setViewMode("before")}
              className={`transform-btn ${viewMode === "before" ? "active" : ""}`}
            >
              <span>Before (Raw Shell)</span>
            </button>
            <button
              onClick={() => setViewMode("after")}
              className={`transform-btn ${viewMode === "after" ? "active" : ""}`}
            >
              <span>After (Delivered Dream Home)</span>
            </button>
          </div>
        </div>

        {/* Visual Comparison Frame */}
        <div className="transformation-frame">
          {viewMode === "slider" ? (
            <div
              className="slider-viewport"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const pos = ((e.clientX - rect.left) / rect.width) * 100;
                setSliderPos(Math.min(Math.max(pos, 5), 95));
              }}
              onTouchMove={(e) => {
                if (e.touches[0]) {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const pos = ((e.touches[0].clientX - rect.left) / rect.width) * 100;
                  setSliderPos(Math.min(Math.max(pos, 5), 95));
                }
              }}
            >
              {/* AFTER (Full Width Underneath) */}
              <div className="slider-after-layer">
                <Image
                  src="/hero-funky-living.jpg"
                  alt="Delivered Vibrant Living Room by MVVR"
                  fill
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  style={{ objectFit: "cover" }}
                />
                <div className="transform-label label-after">
                  <CheckCircle size={13} color="#10B981" />
                  <span>AFTER · Handed Over On Day 43</span>
                </div>
              </div>

              {/* BEFORE (Clipped on Left) */}
              <div
                className="slider-before-layer"
                style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
              >
                <Image
                  src="/hero-architecture.jpg"
                  alt="Raw Builder Flat Before Renovation"
                  fill
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  style={{ objectFit: "cover", filter: "grayscale(70%) contrast(90%) brightness(0.85)" }}
                />
                <div className="transform-label label-before">
                  <Clock size={13} color="#EF4444" />
                  <span>BEFORE · Day 0 Raw Shell</span>
                </div>
              </div>

              {/* Slider Handle Line */}
              <div
                className="slider-divider-line"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="slider-handle-pill">
                  <ArrowLeftRight size={14} color="#111111" />
                </div>
              </div>
            </div>
          ) : viewMode === "before" ? (
            <div className="slider-viewport static-view">
              <Image
                src="/hero-architecture.jpg"
                alt="Raw Builder Flat Before Renovation"
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                style={{ objectFit: "cover", filter: "grayscale(70%) contrast(90%) brightness(0.85)" }}
              />
              <div className="transform-label label-before">
                <Clock size={13} color="#EF4444" />
                <span>BEFORE · Bare Concrete Shell (Day 0)</span>
              </div>
            </div>
          ) : (
            <div className="slider-viewport static-view">
              <Image
                src="/hero-funky-living.jpg"
                alt="Delivered Vibrant Living Room by MVVR"
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                style={{ objectFit: "cover" }}
              />
              <div className="transform-label label-after">
                <CheckCircle size={13} color="#10B981" />
                <span>AFTER · Fully Decorated MVVR Masterpiece (Day 43)</span>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Metric Badges */}
        <div className="transformation-metrics-row">
          <div className="trans-metric-card">
            <span className="trans-metric-big">45 Days</span>
            <span className="trans-metric-sub">Strict Turnkey Handover Guarantee</span>
          </div>
          <div className="trans-metric-card">
            <span className="trans-metric-big">146 Checks</span>
            <span className="trans-metric-sub">Rigorous Architectural Audits</span>
          </div>
          <div className="trans-metric-card">
            <span className="trans-metric-big">10 Years</span>
            <span className="trans-metric-sub">IS 710 BWP Plywood Warranty</span>
          </div>
          <div className="trans-metric-card">
            <span className="trans-metric-big">Zero</span>
            <span className="trans-metric-sub">Surprise Charges Or Subcontractor Markup</span>
          </div>
        </div>
      </div>
    </section>
  );
}
