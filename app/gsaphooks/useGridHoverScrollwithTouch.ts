"use client";

import { useEffect, useRef } from "react";
import gsap from "./gsapSetup";

type Opts = {
  clamp?: number;
  ease?: string;
  duration?: number;
  horizontal?: boolean;
};

export function useGridHoverScrollWithTouch(
  opts: Opts = {}) {
  const ref = useRef<HTMLDivElement | null>(null);

  const quickToRef = useRef<((v: number) => void) | null>(null);
  const startPos = useRef(0);
  const currentShift = useRef(0);
  const isDragging = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const clampPx = opts.clamp ?? 150;
    const ease = opts.ease ?? "power3.out";
    const duration = opts.duration ?? 0.9;
    const horizontal = opts.horizontal ?? true;
    const axis = horizontal ? "x" : "y";

    const maxShift = clampPx * 2;

    const quickTo = gsap.quickTo(el, axis, { duration, ease });
    quickToRef.current = quickTo;

    const handlePointerMove = (e: PointerEvent) => {
      if (isDragging.current) return;
      const bounds = el.getBoundingClientRect();

      const progress = horizontal
        ? (e.clientX - bounds.left) / bounds.width
        : (e.clientY - bounds.top) / bounds.height;

      const centered = progress - 0.5;
      const target = -centered * maxShift;

      quickTo(target);
    };

    const handlePointerLeave = () => {
      if (!isDragging.current) quickTo(0);
    };

    const handleTouchStart = (e: TouchEvent) => {
      isDragging.current = true;

      startPos.current = horizontal
        ? e.touches[0].clientX
        : e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging.current) return;

      const point = horizontal
        ? e.touches[0].clientX
        : e.touches[0].clientY;

      const delta = point - startPos.current;

      const newShift = Math.max(Math.min(delta, clampPx), -clampPx);

      currentShift.current = newShift;
      quickTo(newShift);
    };

    const handleTouchEnd = () => {
      isDragging.current = false;
      quickTo(0);
    };

    el.addEventListener("pointermove", handlePointerMove);
    el.addEventListener("pointerleave", handlePointerLeave);

    el.addEventListener("touchstart", handleTouchStart, { passive: true });
    el.addEventListener("touchmove", handleTouchMove, { passive: true });
    el.addEventListener("touchend", handleTouchEnd);
    el.addEventListener("touchcancel", handleTouchEnd);

    return () => {
      el.removeEventListener("pointermove", handlePointerMove);
      el.removeEventListener("pointerleave", handlePointerLeave);

      el.removeEventListener("touchstart", handleTouchStart);
      el.removeEventListener("touchmove", handleTouchMove);
      el.removeEventListener("touchend", handleTouchEnd);
      el.removeEventListener("touchcancel", handleTouchEnd);

      quickToRef.current = null;
    };
  }, []);

  return ref;
}
