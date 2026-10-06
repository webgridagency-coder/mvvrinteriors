"use client";

import { useState } from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, X, Flame } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

export default function AnnouncementBar() {
  const [closed, setClosed] = useState(false);

  if (closed) return null;

  return (
    <div className="announcement-bar-funky">
      <div className="announcement-content">
        <span className="announcement-badge">
          <Flame size={13} className="flame-icon" />
          <span>FESTIVE SPECIAL</span>
        </span>
        <span className="announcement-text">
          <strong>Free Chimney &amp; Hob + 10-Yr BWP Warranty</strong> on all 2BHK &amp; 3BHK Home Interiors! Handover in flat 45 days.
        </span>
        <div className="announcement-actions">
          <Link href="/pricing" className="announcement-cta">
            <span>Calculate Cost</span>
            <ArrowRight size={12} />
          </Link>
          <a
            href="https://wa.me/919391356077?text=Hi%20MVVR%2C%20I%20want%20to%20avail%20the%20Festive%20Interior%20Offer%20with%20free%20chimney%20and%20hob!"
            target="_blank"
            rel="noopener noreferrer"
            className="announcement-wa"
            aria-label="WhatsApp Offer Inquiry"
          >
            <WhatsAppIcon size={12} />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
      <button
        onClick={() => setClosed(true)}
        className="announcement-close"
        aria-label="Dismiss banner"
      >
        <X size={14} />
      </button>
    </div>
  );
}
