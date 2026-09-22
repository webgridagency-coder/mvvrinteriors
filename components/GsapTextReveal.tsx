"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface GsapTextRevealProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "span" | "div";
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  duration?: number;
  stagger?: number;
  scrollTrigger?: boolean;
  scrollStart?: string;
}

export default function GsapTextReveal({
  text,
  as = "h2",
  className = "",
  style = {},
  delay = 0,
  duration = 0.9,
  stagger = 0.025,
  scrollTrigger = true,
  scrollStart = "top 88%",
}: GsapTextRevealProps) {
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const el = containerRef.current;
    const wordInners = el.querySelectorAll<HTMLElement>(".gsap-word-inner");
    if (!wordInners.length) return;

    const ctx = gsap.context(() => {
      const animConfig: gsap.TweenVars = {
        y: "0%",
        rotateZ: 0,
        opacity: 1,
        duration,
        stagger,
        delay,
        ease: "power3.out",
      };

      if (scrollTrigger) {
        animConfig.scrollTrigger = {
          trigger: el,
          start: scrollStart,
          toggleActions: "play none none none",
          once: true,
        };
      }

      gsap.fromTo(
        wordInners,
        {
          y: "120%",
          rotateZ: 2,
          opacity: 0,
        },
        animConfig
      );
    }, el);

    return () => ctx.revert();
  }, [text, delay, duration, stagger, scrollTrigger, scrollStart]);

  // Split text into words, preserving spaces
  const words = text.split(" ");

  return React.createElement(
    as,
    {
      ref: containerRef,
      className: `gsap-text-reveal-container ${className}`,
      style,
    },
    words.map((word, idx) => (
      <span
        key={idx}
        className="gsap-word-mask"
        style={{
          display: "inline-block",
          overflow: "hidden",
          verticalAlign: "top",
          marginRight: "0.28em",
          lineHeight: 1.15,
        }}
      >
        <span
          className="gsap-word-inner"
          style={{
            display: "inline-block",
            transformOrigin: "bottom left",
            willChange: "transform, opacity",
          }}
        >
          {word}
        </span>
      </span>
    ))
  );
}
