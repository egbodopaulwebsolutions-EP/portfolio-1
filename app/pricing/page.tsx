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
          <header className="px-6 space-y-6 border-b border-[var(--gray-200)] pb-10">
            <h1 className="text-display h1 text-[var(--color-primary)]">
              Pricing
            </h1>
            <p className="text-lead">
              Pricing is based on the type of work involved and the scope required
              to do it well. These ranges reflect how projects typically land
              before details are finalized.
            </p>
          </header>
        </Container>
      </section>

      {/* PRICING LIST */}
      <section className="py-[var(--space-section-sm)]">
        <Container size="default">
          <div className="px-6 space-y-6">
            {PRICING.map((item) => (
              <article
                key={item.id}
                className="
                  grid gap-6
                  rounded-xs border-l-2 border-[var(--color-primary)]
                  p-6
                  md:grid-cols-[2fr_1fr]
                  md:items-center
                "
              >
                {/* LEFT */}
                <div className="space-y-3">
                  <h2 className="text-display h4 text-[var(--color-secondary)]">
                    {item.title}
                  </h2>
                  <p className="text-neutral-600 text-2xl leading-relaxed text-contact">
                    {item.description}
                  </p>
                </div>

                {/* RIGHT */}
                <div className="md:text-right space-y-2">
                  <div className="text-meta text-neutral-500">
                    Typical investment
                  </div>
                  <div className="text-display font-black h4">
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
      <section className="py-[var(--space-section-sm)] border-t border-[var(--gray-200)]">
        <Container size="narrow" center>
          <div className="px-6 space-y-4 ">
            <h3 className="text-display h3 text-[var(--color-primary)]">
              A note on scope
            </h3>
            <p className="text-lead text-neutral-600 leading-relaxed">
              Timelines, content readiness, collaboration style, and technical
              requirements all influence final pricing. Scope and cost are always
              confirmed before any work begins.
            </p>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-[var(--space-section)]">
        <Container size="narrow">
          <div className="px-6 text-center space-y-6">
            <h2 className="text-display h3 text-[var(--color-primary)]">
              Let’s talk through your project
            </h2>
            <p className="text-lead text-neutral-600 max-w-xl mx-auto">
              Share a few details about your business and goal and I’ll help
              clarify scope, timeline, and next steps.
            </p>
            <Link href="/contact" className="btn-primary mt-10">
              Start a conversation
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
