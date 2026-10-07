"use client";

import { Leaf } from "lucide-react";

export default function AnnouncementBar() {
  return (
    <div
      style={{
        background: "linear-gradient(90deg, #ECFDF5 0%, #F8FAFC 50%, #FFF0F3 100%)",
        borderBottom: "1px solid #E2E8F0",
        padding: "7px 16px",
        fontSize: "11.5px",
        color: "#334155",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        position: "relative",
        zIndex: 50,
      }}
    >
      <div style={{ display: "inline-flex", alignItems: "center", gap: 5, color: "var(--liv-green-dark)", fontWeight: 700 }}>
        <Leaf size={12} color="var(--liv-green)" />
        <span>🌿 100% Eco-Certified Green BWP Materials</span>
      </div>
      <span style={{ color: "#CBD5E1" }}>·</span>
      <span style={{ fontWeight: 600, color: "#64748B" }}>Strict 45-Day Handover Guarantee across AP &amp; Telangana</span>
    </div>
  );
}
