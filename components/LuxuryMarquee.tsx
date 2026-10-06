"use client";

import React, { useState } from "react";
import { Sparkles, Shield, Clock, Compass, Award, Gem, Check, Flame } from "lucide-react";

const MARQUEE_ITEMS = [
  { icon: Clock, text: "45-Day Handover Guarantee", color: "#FF5436" },
  { icon: Shield, text: "10-Year BWP Marine Warranty", color: "#10B981" },
  { icon: Gem, text: "German Blum Soft-Close Hardware", color: "#3B82F6" },
  { icon: Compass, text: "100% Vastu Shastra Aligned", color: "#F59E0B" },
  { icon: Flame, text: "Free Modular Chimney & Hob", color: "#EC4899" },
  { icon: Sparkles, text: "Makrana Marble & Italian Quartz", color: "#8B5CF6" },
  { icon: Check, text: "Zero Hidden Subcontractor Fees", color: "#06B6D4" },
  { icon: Award, text: "500+ Homes Across AP & TS", color: "#D4AF37" },
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
        background: "linear-gradient(90deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)",
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        padding: "16px 0",
        margin: "12px 0 36px",
        position: "relative",
        userSelect: "none",
        zIndex: 10,
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
          background: "linear-gradient(90deg, #0F172A 0%, transparent 100%)",
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
          background: "linear-gradient(270deg, #0F172A 0%, transparent 100%)",
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
          return (
            <div
              key={idx}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "0 24px",
                fontSize: "12.5px",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "#FFFFFF",
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "26px",
                  height: "26px",
                  borderRadius: "50%",
                  background: `${item.color}25`,
                  color: item.color,
                  border: `1px solid ${item.color}60`,
                }}
              >
                <Icon size={14} />
              </span>
              <span>{item.text}</span>
              <span
                style={{
                  display: "inline-block",
                  width: "5px",
                  height: "5px",
                  borderRadius: "50%",
                  background: item.color,
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
