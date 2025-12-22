"use client";

import clsx from "clsx";
import { SERVICES } from "../../data/services";
import type { services } from "../../data/services";
import Link from "next/link";

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
        <header className="py-[var(--space-section-sm)]">
          <h2 className="text-display h2 text-[var(--color-primary)]">
            Services
          </h2>
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

export function ServiceIndividual({
  title,
  desc,
  media,
  slug,
  reversed = false,
}: ServiceIndividualProps) {
  useSectionFade();
  useTextStagger();

  const { containerRef, innerRef } = useMediaParallax();
  const hoverRef = useHoverScale(1.03);

  return (
    <section className="py-[var(--space-section-sm)]">
      <Container size="narrow">
        <Link href={`/service/${slug}`} className="block">
          <article
            className={clsx(
              "grid gap-6 md:grid-cols-2 ",
              reversed && "md:[&>*:first-child]:order-2"
            )}
          >
            {/* MEDIA */}
            <div
              ref={(el) => {
                containerRef.current = el;
                hoverRef.current = el;
              }}
              className="relative h-full mb-10 rounded-xl"
            >
              <div ref={innerRef}>
                {media.endsWith(".mp4") ? (
                  <video
                    src={media}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full rounded-xl object-cover"
                  />
                ) : (
                  <img
                    src={media}
                    alt={title}
                    className="h-full w-full rounded-xl object-cover"
                  />
                )}
              </div>
            </div>

            {/* TEXT */}
            <div className="gsap-text-block flex flex-col gap-2">
              <h3 className="gsap-text-item h3 text-display text-[var(--color-secondary)]">
                {title}
              </h3>

              <p className="gsap-text-item text-lead text-[var(--gray-700)]">
                {desc}
              </p>

              <span className="pt-6 text-meta text-[var(--color-accent)]">
                Learn more
              </span>
            </div>
          </article>
        </Link>
      </Container>
    </section>
  );
}

