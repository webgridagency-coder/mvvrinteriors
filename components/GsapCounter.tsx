"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface GsapCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function GsapCounter({
  target,
  suffix = "",
  prefix = "",
  duration = 2.2,
  className = "",
  style = {},
}: GsapCounterProps) {
  const spanRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!spanRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const el = spanRef.current;
    const obj = { val: 0 };

    const ctx = gsap.context(() => {
      gsap.to(obj, {
        val: target,
        duration,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          once: true,
        },
        onUpdate: () => {
          if (el) {
            el.innerText = `${prefix}${Math.floor(obj.val).toLocaleString()}${suffix}`;
          }
        },
      });
    }, el);

    return () => ctx.revert();
  }, [target, suffix, prefix, duration]);

  return (
    <span
      ref={spanRef}
      className={`gsap-counter ${className}`}
      style={{ display: "inline-block", fontVariantNumeric: "tabular-nums", ...style }}
    >
      {prefix}0{suffix}
    </span>
  );
}
