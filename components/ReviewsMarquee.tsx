"use client";

import React, { useState } from "react";
import { Star, CheckCircle2, MapPin, Quote } from "lucide-react";

export interface ReviewItem {
  name: string;
  initials: string;
  location: string;
  project: string;
  review: string;
  rating: number;
  badge: string;
  completion: string;
}

const REVIEWS_DATA: ReviewItem[] = [
  {
    name: "Dr. K. S. Rao & Swathi",
    initials: "KR",
    location: "Sujatha Nagar, Visakhapatnam",
    project: "3 BHK Luxury Apartment Interior",
    review:
      "MVVR delivered exactly what they showed in the 3D walkthrough. The modular kitchen and living room fluted paneling are magnificent. Delivered on day 43 with zero delay!",
    rating: 5,
    badge: "Verified Homeowner",
    completion: "Handed over in 43 Days",
  },
  {
    name: "V. R. Murthy",
    initials: "VM",
    location: "Rushikonda, Visakhapatnam",
    project: "4,200 sq.ft Duplex Villa Interior",
    review:
      "The double-height living room and master bedroom walk-in closet look straight out of an architectural magazine. Their German Blum hardware and 10-year warranty gave us complete peace of mind.",
    rating: 5,
    badge: "Verified Homeowner",
    completion: "Turnkey Architecture",
  },
  {
    name: "Ananya & Rajesh Reddy",
    initials: "AR",
    location: "Jubilee Hills, Hyderabad",
    project: "Penthouse Modular Kitchen & Mandir",
    review:
      "The Vastu-compliant Pooja Mandir with backlit Makrana marble and the island kitchen are the pride of our home. Truly exceptional craftsmanship by the MVVR team.",
    rating: 5,
    badge: "Verified Homeowner",
    completion: "100% Vastu Aligned",
  },
  {
    name: "Capt. S. B. Varma",
    initials: "SV",
    location: "Yendada, Visakhapatnam",
    project: "Sea-Facing 4 BHK High-Rise",
    review:
      "Balcony deck finished in weather-resistant teak finish and acoustic wall paneling in our home theater. The finishing is flawless. Transparent billing without surprises.",
    rating: 5,
    badge: "Verified Homeowner",
    completion: "Full Home Turnkey",
  },
  {
    name: "Deepa & Sumanth Chowdary",
    initials: "DC",
    location: "Madhapur, Hyderabad",
    project: "Eclectic Contemporary Flat",
    review:
      "From the micro-cement texture accents to concealed LED coves, MVVR transformed our bare shell into a serene sanctuary. Their site engineers were attentive daily.",
    rating: 5,
    badge: "Verified Homeowner",
    completion: "Handed over on Schedule",
  },
  {
    name: "Harish & Radhika Nambiar",
    initials: "HN",
    location: "Seethammadhara, Visakhapatnam",
    project: "Bespoke Teak & Modern Fusion Residence",
    review:
      "Authentic seasoned teak joinery combined with contemporary European kitchen cabinetry. The quality of boiling-water-proof ply and lamination is top tier.",
    rating: 5,
    badge: "Verified Homeowner",
    completion: "10-Year BWP Warranty",
  },
  {
    name: "Dr. Madhavi Latha",
    initials: "ML",
    location: "MVP Colony, Visakhapatnam",
    project: "Contemporary Duplex Renovation",
    review:
      "They redesigned our entire floor layout, added an open-concept kitchen bar, and soundproofed the clinic office space at home. Professional and highly dependable.",
    rating: 5,
    badge: "Verified Homeowner",
    completion: "Architect-Supervised",
  },
];

export default function ReviewsMarquee() {
  const [isPaused, setIsPaused] = useState(false);

  const marqueeItems = [...REVIEWS_DATA, ...REVIEWS_DATA];

  return (
    <div
      className="reviews-marquee-wrapper"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div className="reviews-marquee-fade left" aria-hidden="true" />
      <div className="reviews-marquee-fade right" aria-hidden="true" />

      <div
        className={`reviews-marquee-track ${isPaused ? "marquee-paused" : ""}`}
      >
        {marqueeItems.map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className="review-marquee-card"
          >
            <div className="review-card-header">
              <div className="review-card-avatar">{item.initials}</div>
              <div className="review-card-user-info">
                <div className="review-card-name-row">
                  <h4 className="review-card-name">{item.name}</h4>
                  <span className="review-card-verified-pill">
                    <CheckCircle2 size={11} strokeWidth={2.4} className="verified-icon" />
                    <span>Verified</span>
                  </span>
                </div>
                <div className="review-card-location">
                  <MapPin size={11} strokeWidth={2} />
                  <span>{item.location}</span>
                </div>
              </div>
            </div>

            <div className="review-card-meta-row">
              <div className="review-card-stars">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={13} fill="#F59E0B" color="#F59E0B" strokeWidth={0.5} />
                ))}
              </div>
              <span className="review-card-completion-tag">
                {item.completion}
              </span>
            </div>

            <div className="review-card-project">{item.project}</div>

            <div className="review-card-body">
              <Quote size={18} strokeWidth={1.8} className="review-quote-icon" />
              <p className="review-quote-text">&ldquo;{item.review}&rdquo;</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
