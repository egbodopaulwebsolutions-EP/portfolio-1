"use client";

import Link from "next/link";
import Container from "../components/utilities/container";
import { PRICING } from "../data/pricing";

export default function PricingPage() {
  return (
    <main className="bg-white text-neutral-900">
      {/* INTRO */}
      <section className="py-[var(--space-section)]">
        <Container size="narrow" center>
          <header className="mb-8 text-center">
            <h1 className="text-display h1 text-[var(--color-primary)]">
              Pricing
            </h1>
          </header>

          <p className="text-lead text-neutral-600 leading-relaxed">
            Projects are priced based on scope, complexity, and the level of care
            required to communicate your product or service clearly. The ranges
            below reflect where most engagements land before details are
            finalized.
          </p>
        </Container>
      </section>

      {/* PRICING LIST */}
      <section className="py-[var(--space-section-sm)]">
        <Container size="default">
          <div className="space-y-8">
            {PRICING.map((item) => (
              <article
                key={item.id}
                className="
                  grid gap-6
                  border-l-2 border-[var(--color-primary)]
                  p-8
                  md:grid-cols-[2fr_1fr]
                  md:items-center
                "
              >
                {/* LEFT */}
                <div className="space-y-4">
                  <h2 className="text-display h4 text-[var(--color-secondary)]">
                    {item.title}
                  </h2>

                  <p className="text-lead text-neutral-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* RIGHT */}
                <div className="space-y-2 md:text-right">
                  <div className="text-meta text-neutral-500">
                    Typical investment
                  </div>

                  <div className="text-display text-[var(--color-primary)] h4 font-semibold">
                    {item.range}
                  </div>

                  <p className="text-xs text-neutral-500 leading-relaxed">
                    {item.note}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* SCOPE NOTE */}
      <section className="border-t border-neutral-200 py-[var(--space-section-sm)]">
        <Container size="narrow" center>
          <div className="space-y-4 text-center">
            <h3 className="text-display h3 text-[var(--color-primary)]">
              A note on scope
            </h3>

            <p className="text-lead text-neutral-600 leading-relaxed">
              Final pricing is influenced by content readiness, number of
              templates, collaboration style, and technical requirements. Scope
              and cost are always aligned and confirmed before any work begins.
            </p>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-[var(--space-section)]">
        <Container size="narrow">
          <div className="space-y-6 text-center">
            <h2 className="text-display h3 text-[var(--color-primary)]">
              Let’s talk through your project
            </h2>

            <p className="mx-auto max-w-xl text-lead text-neutral-600">
              Share a bit about your product or service, and I’ll help clarify
              scope, timeline, and whether we’re a good fit.
            </p>

            <Link href="/contact" className="btn-primary mt-6">
              Start a conversation
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
