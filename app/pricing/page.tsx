"use client";

import Link from "next/link";
import Container from "../components/utilities/container";

import { PRICING } from "../data/pricing";

export default function PricingPage() {
  return (
    <main className="bg-white text-neutral-900">
      {/* HERO */}
      <section className=" py-[var(--space-section)]">
        <Container size="narrow">
          <header className="text-center pb-10 border-b border-[var(--gray-200)] space-y-6 px-6">
            <h1 className="text-display h1 text-[var(--color-secondary)]">
              Clear pricing for thoughtful work
            </h1>
            <p className="text-lead text-neutral-600 mx-auto">
              Projects are priced around clarity, scope, and impact.
            </p>
          </header>
        </Container>
      </section>

      {/* PRICING CARDS */}
      <section className="pb-[var(--space-section-sm)]">
        <Container>
          <div className="grid gap-6 px-6 md:grid-cols-3">
            {PRICING.map((item) => (
              <article
                key={item.label}
                className="
                  rounded-xl
                  px-8
                  flex flex-col
                  justify-between
                  bg-white
                  price-card
                "
              >
                <div className="space-y-4">
                  <span className="text-display h3 uppercase tracking-wide text-neutral-500">
                    {item.label}
                  </span>
                  <p className="text-lead leading-relaxed text-neutral-600">
                    {item.text}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-[var(--gray-200)]">
                  <div className="text-meta ">
                    Starting at <span className="text-lead font-semibold">{item.price}</span>
                  </div>
                  <div className="text-xs text-neutral-500 mt-1">
                    Scoped per project
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-[var(--space-section)] border-t border-[var(--gray-200)]">
        <Container size="narrow">
          <div className="text-center space-y-6 px-6">
            <h2 className="text-display h3">
              Let’s see if this is a good fit
            </h2>
            <p className="text-lead text-neutral-600 max-w-xl mx-auto">
              Share a few details about what you’re building and we’ll see
              if this makes sense.
            </p>
            <Link href="/contact" className="btn-primary">
              Start a conversation
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
