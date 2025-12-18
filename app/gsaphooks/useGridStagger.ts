"use client"

import { useLayoutEffect, useRef } from "react"
import gsap from "./gsapSetup"

type UseGridStaggerOptions = {
  stagger?: number
  y?: number
  duration?: number
  start?: string
}

export function useGridStagger({
  stagger = 0.15,
  y = 30,
  duration = 1,
  start = "top 85%",
}: UseGridStaggerOptions = {}) {
  const gridRef = useRef<HTMLDivElement | null>(null)

  useLayoutEffect(() => {
    const grid = gridRef.current
    if (!grid) return

    const items = grid.querySelectorAll<HTMLElement>(
      "[data-gsap-item]"
    )

    if (!items.length) return

    const ctx = gsap.context(() => {
      gsap.from(items, {
        autoAlpha: 0,
        y,
        scale: 0.96,
        filter: "blur(8px)",
        stagger,
        duration,
        ease: "power3.out",
        scrollTrigger: {
          trigger: grid,
          start,
          toggleActions: "play none none reverse",
        },
      })
    }, grid)

    return () => ctx.revert()
  }, [stagger, y, duration, start])

  return gridRef
}
