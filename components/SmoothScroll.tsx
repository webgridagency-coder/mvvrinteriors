"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    // On touch / mobile devices, use native 120Hz momentum scrolling for 100% lag-free touch
    const isTouch =
      window.matchMedia("(pointer: coarse)").matches ||
      "ontouchstart" in window ||
      (typeof navigator !== "undefined" && navigator.maxTouchPoints > 0);

    if (isTouch) {
      return;
    }

    const lenis = new Lenis({
      lerp: 0.14, // Ultra-responsive, snappy, zero sluggishness
      wheelMultiplier: 1.05,
      smoothWheel: true,
      syncTouch: false,
    });

    lenis.on("scroll", () => {
      ScrollTrigger.update();
    });

    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(500, 33);

    return () => {
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
