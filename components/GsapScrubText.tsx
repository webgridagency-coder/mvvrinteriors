"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface GsapScrubTextProps {
  text: string;
  highlightWords?: string[];
  className?: string;
  style?: React.CSSProperties;
  start?: string;
  end?: string;
}

export default function GsapScrubText({
  text,
  highlightWords = [],
  className = "",
  style = {},
  start = "top 80%",
  end = "bottom 45%",
}: GsapScrubTextProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const el = containerRef.current;
    const wordSpans = el.querySelectorAll<HTMLElement>(".scrub-word");
    if (!wordSpans.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        wordSpans,
        {
          opacity: 0.18,
          y: 4,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.04,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start,
            end,
            scrub: 0.7,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [text, start, end]);

  const words = text.split(" ");

  const cleanWord = (w: string) =>
    w.toLowerCase().replace(/[^a-z0-9]/gi, "");

  const isHighlighted = (w: string) => {
    const cleaned = cleanWord(w);
    return highlightWords.some((hw) => cleanWord(hw) === cleaned);
  };

  return (
    <div
      ref={containerRef}
      className={`gsap-scrub-text-container ${className}`}
      style={{ ...style }}
    >
      {words.map((word, idx) => {
        const highlighted = isHighlighted(word);
        return (
          <span
            key={idx}
            className={`scrub-word ${highlighted ? "scrub-word-highlight" : ""}`}
            style={{
              display: "inline-block",
              marginRight: "0.26em",
              willChange: "opacity, transform",
              color: highlighted ? "var(--gold)" : "inherit",
              fontWeight: highlighted ? 800 : undefined,
            }}
          >
            {word}
          </span>
        );
      })}
    </div>
  );
}
