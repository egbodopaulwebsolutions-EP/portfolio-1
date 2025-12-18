"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useBrandHorizontalScroll(
  sectionRef: React.RefObject<HTMLElement | null>,
  trackRef: React.RefObject<HTMLDivElement | null>,
  progressRef?: React.RefObject<HTMLDivElement | null>
) {
  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) return;

    const ctx = gsap.context(() => {
      // 🔑 total horizontal distance
      const scrollDistance =
        track.scrollWidth - window.innerWidth;

      // 🔑 MAIN horizontal animation
      const tween = gsap.to(track, {
        x: -scrollDistance,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${scrollDistance}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,

          onUpdate(self) {
            if (progressRef?.current) {
              gsap.set(progressRef.current, {
                scaleX: self.progress,
              });
            }
          },
        },
      });

      // 🔑 subtle scale-in per logo
      gsap.utils.toArray<HTMLElement>(track.children).forEach((el) => {
        gsap.fromTo(
          el,
          { scale: 0.9, opacity: 0.6 },
          {
            scale: 1,
            opacity: 1,
            scrollTrigger: {
              trigger: el,
              containerAnimation: tween,
              start: "left center",
              end: "right center",
              scrub: true,
            },
          }
        );
      });

      // 🔑 ensure proper sizing on resize
      ScrollTrigger.refresh();
    }, section);

    return () => ctx.revert();
  }, []);
}
