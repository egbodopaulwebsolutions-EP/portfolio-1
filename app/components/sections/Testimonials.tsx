"use client";

import { useRef } from "react";
import ButtonLink from "../utilities/Button";
import Container from "../utilities/container";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  photo?: string;
};

export default function TestimonialStory() {
  const scope = useRef<HTMLDivElement | null>(null);

  const testimonials: Testimonial[] = [
    {
      quote:
        "Working with Paul changed how we think about product and customers. The new site didn’t just look better — conversions climbed due to enhanced user experience, and our team finally had a web-tool we could mobilise.",
      name: "James",
      role: "CEO, FGFS",
      photo: "/images/testimonials/profile-testimonial1.png",
    },
  ];

  return (
    <section
      ref={scope}
      className="relative w-full overflow-hidden py-[var(--space-section-lg)]"
    >
      <Container size="default">
        <div className="relative z-10 flex flex-col">
          {testimonials.map((t, idx) => (
            <article
              key={idx}
              className="relative flex w-full items-center px-6 md:px-12"
            >
              {/* BACKGROUND LABEL */}
              <div
                aria-hidden
                className="
                absolute
                left-6 md:left-12
                top-12
                text-[22vw] md:text-[12vw]
                font-black
                leading-none
                text-[var(--color-secondary)]/5
                pointer-events-none
                select-none
              "
              >
                Testimonial
              </div>

              {/* CONTENT */}
              <div className="relative z-10 mx-auto flex flex-col gap-8 italic">
                <blockquote className="text-lead-large">
                  “{t.quote}”
                </blockquote>

                <div className="flex items-center gap-4">
                  {t.photo ? (
                    <img
                      src={t.photo}
                      alt={t.name}
                      className="h-10 w-10 rounded-full object-cover shadow-sm"
                      loading="lazy"
                    />
                  ) : (
                    <div className="h-10 w-10 rounded-full bg-neutral-100" />
                  )}

                  <div>
                    <div className="text-sm font-semibold text-neutral-900">
                      {t.name}
                    </div>
                    <div className="text-sm text-neutral-600">
                      {t.role}
                    </div>
                  </div>
                </div>

                <ButtonLink
                  href="/services"
                  className="mt-4 w-fit text-meta text-[var(--color-primary)]"
                >
                  View services →
                </ButtonLink>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
