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
      <Container center>
        <header className="pt-[var(--space-section-sm)] space-y-6">
          <h1 className="text-display h2 text-[var(--color-secondary)]">
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
        py-[var(--space-section)]
      "
    >
      <Container size="default">
        <div
          className={clsx(
            "flex flex-col gap-16 items-center",
            
            "md:grid md:grid-cols-2 md:items-center",
            reversed && "md:[&>*:first-child]:order-2"
          )}
        >
          {/* MEDIA */}
          <div
            ref={(el) => {
              containerRef.current = el;
              hoverRef.current = el;
            }}
            className="relative w-full overflow-hidden rounded-2xl"
          >
            {media.endsWith(".mp4") ? (
              <video
                ref={innerRef}
                src={media}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                ref={innerRef}
                src={media}
                alt={title}
                className="w-full h-full object-contain"
              />
            )}
          </div>

          {/* TEXT */}
          <div className="gsap-text-block flex flex-col gap-6">
            

            <h2 className="gsap-text-item h3 text-display">
              {title}
            </h2>
            <span className="relative gsap-text-item text-eyebrow underline-cust w-fit">
              {kicker}
            </span>
            <p className="gsap-text-item text-lead text-[var(--gray-700)]">
              {desc}
            </p>

            {/* FEATURE LIST */}
            <div className="gsap-text-item grid gap-3 pt-4">
              {homeList.map((item, i) => (
                <div
                  key={i}
                  className="w-fit rounded-lg bg-slate-50 px-6 py-4 text-sm text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-6 pt-6">
             

              <ButtonLink
                href={`/service/${slug}`}
                className="btn-secondary text-meta"
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
