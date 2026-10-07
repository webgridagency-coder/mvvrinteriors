"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeftRight, CheckCircle2, Clock } from "lucide-react";

export default function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [viewMode, setViewMode] = useState<"slider" | "before" | "after">("slider");

  return (
    <section className="classy-transform-section" id="transformation">
      <div className="container">
        <div className="classy-section-header">
          <span className="classy-section-badge">The Turnkey Transformation</span>
          <h2 className="classy-section-title">
            From Bare Concrete to <span className="classy-gold-text">Refined Living</span>
          </h2>
          <p className="classy-section-desc">
            Interact with the slider below to witness how our architects transform an empty builder shell into a bespoke, atmospheric residence in 45 days.
          </p>

          <div className="classy-tabs-row">
            <button
              onClick={() => setViewMode("slider")}
              className={`classy-tab-pill ${viewMode === "slider" ? "active" : ""}`}
            >
              <ArrowLeftRight size={13} />
              <span>Interactive Split</span>
            </button>
            <button
              onClick={() => setViewMode("before")}
              className={`classy-tab-pill ${viewMode === "before" ? "active" : ""}`}
            >
              <span>Before (Day 0 Shell)</span>
            </button>
            <button
              onClick={() => setViewMode("after")}
              className={`classy-tab-pill ${viewMode === "after" ? "active" : ""}`}
            >
              <span>After (Day 43 Handover)</span>
            </button>
          </div>
        </div>

        {/* Viewport Frame */}
        <div className="classy-transform-frame">
          {viewMode === "slider" ? (
            <div
              className="classy-slider-canvas"
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
              {/* After Image Layer */}
              <div className="classy-slider-layer">
                <Image
                  src="/hero-funky-living.jpg"
                  alt="Delivered Residence by MVVR"
                  fill
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  style={{ objectFit: "cover" }}
                />
                <div className="classy-canvas-tag tag-after">
                  <CheckCircle2 size={12} color="var(--liv-pink)" />
                  <span>AFTER · Handed Over on Day 43</span>
                </div>
              </div>

              {/* Before Image Layer */}
              <div
                className="classy-slider-layer"
                style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
              >
                <Image
                  src="/hero-architecture.jpg"
                  alt="Raw Builder Flat Before Execution"
                  fill
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  style={{ objectFit: "cover", filter: "grayscale(70%) contrast(90%) brightness(0.85)" }}
                />
                <div className="classy-canvas-tag tag-before">
                  <Clock size={12} color="#64748B" />
                  <span>BEFORE · Day 0 Raw Shell</span>
                </div>
              </div>

              {/* Divider Line */}
              <div
                className="classy-slider-divider"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="classy-slider-knob">
                  <ArrowLeftRight size={13} color="var(--liv-blue)" />
                </div>
              </div>
            </div>
          ) : viewMode === "before" ? (
            <div className="classy-slider-canvas static-canvas">
              <Image
                src="/hero-architecture.jpg"
                alt="Raw Builder Flat Before Execution"
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                style={{ objectFit: "cover", filter: "grayscale(70%) contrast(90%) brightness(0.85)" }}
              />
              <div className="classy-canvas-tag tag-before">
                <Clock size={12} color="#64748B" />
                <span>BEFORE · Bare Concrete Shell (Day 0)</span>
              </div>
            </div>
          ) : (
            <div className="classy-slider-canvas static-canvas">
              <Image
                src="/hero-funky-living.jpg"
                alt="Delivered Residence by MVVR"
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                style={{ objectFit: "cover" }}
              />
              <div className="classy-canvas-tag tag-after">
                <CheckCircle2 size={12} color="var(--liv-pink)" />
                <span>AFTER · Fully Decorated MVVR Residence (Day 43)</span>
              </div>
            </div>
          )}
        </div>

        {/* Metrics Row */}
        <div className="classy-metrics-grid">
          <div className="classy-metric-item">
            <span className="classy-metric-num">45 Days</span>
            <span className="classy-metric-lbl">Strict Turnkey Calendar</span>
          </div>
          <div className="classy-metric-item">
            <span className="classy-metric-num">146 Audits</span>
            <span className="classy-metric-lbl">Architect Quality Checks</span>
          </div>
          <div className="classy-metric-item">
            <span className="classy-metric-num">10 Years</span>
            <span className="classy-metric-lbl">IS 710 BWP Warranty</span>
          </div>
          <div className="classy-metric-item">
            <span className="classy-metric-num">100%</span>
            <span className="classy-metric-lbl">Vastu Harmonized Design</span>
          </div>
        </div>
      </div>
    </section>
  );
}
