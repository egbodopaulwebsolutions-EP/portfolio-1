"use client";

import clsx from "clsx";
import { SERVICES } from "../../data/services";
import type { services } from "../../data/services";

import {
  useSectionFade,
  useTextStagger,
  useMediaParallax,
  useHoverScale,
} from "../../gsaphooks/gsapHooks";

import ButtonLink from "../utilities/Button";
import Container from "../utilities/container";

/* -------------------------------------------------
   SERVICES INDEX
-------------------------------------------------- */
export default function ServicesModules() {
  return (
    <section id="services" className="relative">
      {/* Noise overlay */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10 h-full w-full opacity-[0.08]"
      >
        <defs>
          <filter id="noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.6"
              numOctaves="3"
            />
          </filter>
        </defs>

        <rect
          width="100%"
          height="100%"
          filter="url(#noise)"
          fill="rgba(0,0,0,0.4)"
        />
      </svg>
      <Container center>
        <header className="pt-[var(--space-section-sm)]">
          <h1 className="text-display h2 text-[var(--color-primary)]">
            Services
          </h1>
        </header>
      </Container>

      {SERVICES.map((service, i) => (
        <ServiceIndividual
          key={service.slug}
          {...service}
          reversed={i % 2 !== 0}
        />
      ))}
    </section>
  );
}


type ServiceIndividualProps = services & {
  reversed?: boolean;
};

/* -------------------------------------------------
   SINGLE SERVICE
-------------------------------------------------- */
export function ServiceIndividual({
  kicker,
  title,
  desc,
  media,
  homeList,
  startText,
  slug,
  reversed = false,
}: ServiceIndividualProps) {
  useSectionFade();
  useTextStagger();

  const { containerRef, innerRef } = useMediaParallax();
  const hoverRef = useHoverScale(1.03);

  return (
    <section
      className="
        py-[var(--space-section-sm)]
      "
    >
      <Container size="default">
        <div
          className={clsx(
            "flex flex-col gap-6 ",
            "md:grid md:grid-cols-2 md:",
            reversed && "md:"
          )}
        >
          {/* MEDIA */}
          <div
            ref={(el) => {
              containerRef.current = el;
              hoverRef.current = el;
            }}
            className="relative w-full overflow-hidden rounded-xl"
          >
            {media.endsWith(".mp4") ? (
              <video
                src={media}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src={media}
                alt={title}
                className="w-full h-full object-contain"
              />
            )}
          </div>

          {/* TEXT */}
          <div className="gsap-text-block flex flex-col gap-0">
            <h2 className="gsap-text-item h3 text-[var(--color-secondary)] text-display">
              {title}
            </h2>
            <p className="gsap-text-item text-lead text-[var(--gray-700)]">
              {desc}
            </p>
            {/* CTAs */}
            <div className="flex flex-wrap pt-6">
              <ButtonLink
                href={`/service/${slug}`}
                className="text-[var(--color-primary)] text-meta"
              >
                Learn More
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
