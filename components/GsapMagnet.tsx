"use client";

import React, { useRef } from "react";
import gsap from "gsap";

interface GsapMagnetProps {
  children: React.ReactNode;
  strength?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function GsapMagnet({
  children,
  strength = 0.35,
  className = "",
  style = {},
}: GsapMagnetProps) {
  const magnetRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = magnetRef.current;
    if (!el || window.innerWidth < 992) return;

    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;

    gsap.to(el, {
      x: deltaX,
      y: deltaY,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    const el = magnetRef.current;
    if (!el || window.innerWidth < 992) return;

    gsap.to(el, {
      x: 0,
      y: 0,
      duration: 0.75,
      ease: "elastic.out(1.1, 0.35)",
    });
  };

  return (
    <div
      ref={magnetRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`gsap-magnet-wrap ${className}`}
      style={{
        display: "inline-block",
        willChange: "transform",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
