"use client";

import { createContext, useContext, useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "../../gsaphooks/gsapSetup";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LenisContext = createContext<Lenis | null>(null);

export function useLenis() {
  return useContext(LenisContext);
}

let rafId: number | null = null; // 👈 shared

export default function LenisProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // ✅ Create ONCE
    if (!lenisRef.current) {
      lenisRef.current = new Lenis({
        duration: 1.2,
        lerp: 0.1,
        wheelMultiplier: 1,
        touchMultiplier: 1,
        easing: (t) => 1 - Math.pow(1 - t, 3),
      });
    }

    const lenis = lenisRef.current;

    if (!lenis) return;

    const raf = (time: number) => {
      lenis.raf(time);
      ScrollTrigger.update();
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      // ❌ DO NOT destroy Lenis
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    };
  }, []);

  return (
    <LenisContext.Provider value={lenisRef.current}>
      {children}
    </LenisContext.Provider>
  );
}
