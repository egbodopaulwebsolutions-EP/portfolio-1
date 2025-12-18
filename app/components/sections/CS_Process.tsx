"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "../../gsaphooks/gsapSetup";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export type ProcessStep = {
  title: string;
  description: string;
};

export default function ProcessTimeline({
  steps,
}: {
  steps: ProcessStep[];
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    const path = pathRef.current;
    if (!root || !path) return;

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(
        "[data-step-item]"
      );

      /* --------------------------------
         SVG LINE DRAW
      -------------------------------- */
      const length = path.getTotalLength();

      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });

      gsap.to(path, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: root,
          start: "top 70%",
          end: "bottom 90%",
          scrub: true,
        },
      });

      /* --------------------------------
         STEP REVEALS (INDIVIDUAL)
      -------------------------------- */
      items.forEach((item) => {
        const dot = item.querySelector<HTMLElement>(
          "[data-step-dot]"
        );

        gsap.from(item, {
          opacity: 0,
          y: 40,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 75%",
          },
        });

        if (dot) {
          gsap.fromTo(
            dot,
            { scale: 0.5, backgroundColor: "#fff" },
            {
              scale: 1,
              backgroundColor: "#111",
              scrollTrigger: {
                trigger: item,
                start: "top 75%",
              },
            }
          );
        }
      });
    }, root);

    return () => ctx.revert();
  }, [steps]);

  return (
    <section className="relative bg-white py-32">
      <h2 className="text-3xl font-semibold text-neutral-900 mb-20 text-center">
        Strategy & Implementation
      </h2>

      <div
        ref={rootRef}
        className="relative max-w-3xl mx-auto px-6"
      >
        {/* SVG LINE (REAL DRAWING) */}
        <svg
          className="absolute left-[18px] top-0 h-full w-[40px]"
          viewBox="0 0 40 1000"
          preserveAspectRatio="none"
        >
          <path
            ref={pathRef}
            d="M20 0 L20 1000"
            stroke="#d4d4d4"
            strokeWidth="3"
            fill="none"
          />
        </svg>

        <div className="space-y-24 relative">
          {steps.map((step, i) => (
            <article
              key={i}
              data-step-item
              className="relative pl-20"
            >
              {/* DOT */}
              <span
                data-step-dot
                className="
                  absolute left-[10px] top-1
                  h-4 w-4 rounded-full
                  border-2 border-neutral-400
                  bg-white
                  transition-colors
                "
              />

              <h3 className="text-2xl font-semibold text-neutral-900">
                {step.title}
              </h3>

              <p className="mt-3 text-neutral-700 leading-relaxed">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
