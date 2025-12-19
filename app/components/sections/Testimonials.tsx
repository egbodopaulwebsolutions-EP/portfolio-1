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
        "We had great products — the challenge was communicating that clearly online. Paul helped us build a website that finally reflects the quality of what we do ",
      name: "James",
      role: "CEO, FGFS",
      photo: "/images/testimonials/profile-testimonial1.png",
    },
  ];

  return (
    <section
      ref={scope}
      className="relative w-full overflow-hidden pt-[var(--space-section-lg)] pb-[var(--space-section)]"
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
                
                <blockquote className="text-lead-large">
                  “{t.quote}”
                </blockquote>

                

                
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
