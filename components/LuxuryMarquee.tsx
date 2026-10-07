"use client";

import React, { useState } from "react";
import { Sparkles, Shield, Clock, Compass, Award, Gem, Check, Leaf } from "lucide-react";

const MARQUEE_ITEMS = [
  { icon: Clock, text: "45-Day Handover Guarantee" },
  { icon: Leaf, text: "100% Eco-Safe & Non-Toxic Green Materials" },
  { icon: Shield, text: "10-Year BWP Marine Ply Warranty" },
  { icon: Gem, text: "German Blum Soft-Close Hardware" },
  { icon: Compass, text: "100% Vastu Shastra Aligned" },
  { icon: Sparkles, text: "Italian Quartz & Makrana Marble" },
  { icon: Check, text: "Zero Hidden Markups · Fixed Itemized Pricing" },
  { icon: Award, text: "500+ Luxury Homes Delivered Across AP & TS" },
];

export default function LuxuryMarquee() {
  const [isPaused, setIsPaused] = useState(false);

  const colors = ["#E72E5A", "#059669", "#1B5CEB"];

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
        background: "#FFFFFF",
        borderTop: "1px solid #E2E8F0",
        borderBottom: "1px solid #E2E8F0",
        padding: "16px 0",
        margin: "12px 0 36px",
        position: "relative",
        userSelect: "none",
        zIndex: 10,
        boxShadow: "0 2px 10px rgba(15, 23, 42, 0.03)",
      }}
    >
      {/* Edge fade masks */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "120px",
          height: "100%",
          background: "linear-gradient(90deg, #FFFFFF 0%, transparent 100%)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "120px",
          height: "100%",
          background: "linear-gradient(270deg, #FFFFFF 0%, transparent 100%)",
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
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => {
          const Icon = item.icon;
          const color = colors[idx % colors.length];
          return (
            <div
              key={idx}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "0 28px",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#1E293B",
              }}
            >
              <Icon size={15} color={color} />
              <span>{item.text}</span>
              <span
                style={{
                  display: "inline-block",
                  width: "5px",
                  height: "5px",
                  borderRadius: "50%",
                  background: color,
                  marginLeft: "18px",
                  opacity: 0.6,
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
