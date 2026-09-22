"use client";

import React, { useState } from "react";
import { Sparkles, Shield, Clock, Compass, Award, Gem, Check } from "lucide-react";

const MARQUEE_ITEMS = [
  { icon: Shield, text: "IS 710 BWP Marine Grade Ply" },
  { icon: Gem, text: "German Blum Soft-Close Hardware" },
  { icon: Compass, text: "100% Vastu Shastra Aligned" },
  { icon: Clock, text: "45-Day Strict Handover Guarantee" },
  { icon: Award, text: "10-Year Unconditional Warranty" },
  { icon: Sparkles, text: "Makrana Marble & Italian Quartz" },
  { icon: Check, text: "No Hidden Subcontractor Charges" },
  { icon: Gem, text: "500+ Masterpieces Across AP & TS" },
];

export default function LuxuryMarquee() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div
      className="luxury-marquee-container"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
      style={{
        width: "100%",
        overflow: "hidden",
        background: "linear-gradient(90deg, #111111 0%, #1a1a1a 50%, #111111 100%)",
        borderTop: "1px solid rgba(201, 168, 76, 0.25)",
        borderBottom: "1px solid rgba(201, 168, 76, 0.25)",
        padding: "16px 0",
        margin: "10px 0 32px",
        position: "relative",
        userSelect: "none",
        zIndex: 10,
      }}
    >
      {/* Subtle edge fade masks */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100px",
          height: "100%",
          background: "linear-gradient(90deg, #111111 0%, transparent 100%)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "100px",
          height: "100%",
          background: "linear-gradient(270deg, #111111 0%, transparent 100%)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      <div
        className={`luxury-marquee-track ${isPaused ? "luxury-marquee-paused" : ""}`}
        style={{
          display: "flex",
          whiteSpace: "nowrap",
          width: "max-content",
          willChange: "transform",
        }}
      >
        {/* Double array for seamless infinite GPU-accelerated loop */}
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "0 28px",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(255, 255, 255, 0.85)",
              }}
            >
              <Icon size={14} color="var(--gold)" />
              <span>{item.text}</span>
              <span
                style={{
                  display: "inline-block",
                  width: "4px",
                  height: "4px",
                  borderRadius: "50%",
                  background: "var(--gold)",
                  marginLeft: "18px",
                  opacity: 0.5,
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
