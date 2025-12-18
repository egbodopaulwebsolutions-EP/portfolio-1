"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "../../gsaphooks/gsapSetup";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type StoryBlock = {
  id: string;
  title: string;
  items: string[];
};

export default function StoryFlow({ blocks }: { blocks: StoryBlock[] }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    const track = trackRef.current;
    if (!root || !track) return;

    const cards = gsap.utils.toArray<HTMLElement>("[data-story-card]");

    // SAFETY: ensure visible baseline
    gsap.set(cards, { opacity: 1, y: 0, scale: 1 });

    const mm = gsap.matchMedia();

    /* ---------------------------
       SVG LINE
    --------------------------- */
    const drawLine = (containerTween?: gsap.core.Tween) => {
      if (!pathRef.current) return;

      const path = pathRef.current;
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
          start: "top center",
          end: "bottom bottom",
          scrub: true,
          containerAnimation: containerTween,
        },
      });
    };

    /* ---------------------------
       MOBILE (VERTICAL)
    --------------------------- */
    mm.add("(max-width: 1023px)", () => {
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            immediateRender: false,
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
            },
          }
        );
      });

      drawLine();
    });

    /* ---------------------------
       DESKTOP (HORIZONTAL PIN)
    --------------------------- */
    mm.add("(min-width: 1024px)", () => {
      const scrollDistance = () =>
        track.scrollWidth - window.innerWidth;

      const tween = gsap.to(track, {
        x: () => -scrollDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: () => `+=${scrollDistance()}`,
          scrub: true,
          pin: true,
          invalidateOnRefresh: true,
        },
      });

      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 30, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: "power3.out",
            immediateRender: false,
            scrollTrigger: {
              containerAnimation: tween,
              trigger: card,
              start: "left 70%",
            },
          }
        );
      });

      drawLine(tween);
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative isolate py-32 overflow-hidden"
    >
      {/* SVG BACKGROUND */}
      <div>Problem and Goals</div>
      <svg
        className="absolute inset-0 text-[var(--color-accent)] w-full h-full -z-10 pointer-events-none"
        viewBox="0 0 1000 300"
        preserveAspectRatio="none"
      >
        <path
          ref={pathRef}
          d="M50 150 C 300 50, 700 250, 950 150"
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="2"
          strokeDasharray="6 8"
        />
      </svg>

      {/* CONTENT */}
      <div
        ref={trackRef}
        className="relative z-10 flex flex-col lg:flex-row gap-24 px-6 lg:px-32"
      >
        {blocks.map((block, i) => (
          <article
            key={block.id}
            data-story-card
            className="min-w-full lg:min-w-[520px] rounded-3xl bg-white p-12 border border-neutral-200/60"
          >
            <span className="block text-[var(--color-secondary)] mb-4 text-display h3 uppercase tracking-wides">
              Increase AOV by placing all Brands in one store
            </span>



            <ul className="space-y-6">
              {block.items.map((item, idx) => (
                <li key={idx} className="text-lead leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
