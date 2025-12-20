"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Container from "../utilities/container";

export default function HomeHero() {
  return (
    <main className="relative pt-[3rem] pb-[var(--space-section)]  overflow-hidden">
      
      {/* Noise overlay */}
      <svg
        aria-hidden
        className="pointer-events-none bg-amber-100 absolute inset-0 z-10 h-full w-full opacity-[0.09]"
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
          fill="yellow"
        />
      </svg>

      <section className="relative z-20">
        <Container center size="default">
          {/* Badge */}
          <div className="inline-flex items-center gap-1 rounded-sm uppercase">
            <span className="h-2 w-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
            <span className="text-xs text-gray-600">Research</span>

            <span className="h-2 w-2 rounded-full bg-[var(--color-secondary)] animate-pulse" />
            <span className="text-xs text-gray-600">Clarity</span>

            <span className="h-2 w-2 rounded-full bg-[var(--color-primary)] animate-pulse" />
            <span className="text-xs text-gray-600">Design</span>
          </div>



          {/* Headline */}
          <h1 className="text-display h1 tracking-tight">
            Websites that {" "}
            <span className="relative inline-block px-3">
              <span className="absolute inset-0 -skew-y-2 rounded-xl bg-[var(--color-primary)]/10" />
              <span className="relative text-[var(--color-primary)]">
                communicate clearly
              </span>
            </span>
            <br className="hidden sm:block" />
            and 
            <span className="relative inline-block px-3">
              <span className="absolute inset-0 -skew-y-2 rounded-xl bg-[var(--color-secondary)]/10" />
              <span className="relative text-[var(--color-secondary)]">
                earn trust
              </span>
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-lead mt-1 text-gray-700">
           Through structure, hierarchy, and restraint, I help businesses present what they do without friction.
          </p>

          {/* CTAs */}
          <div className="pt-6 flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/contact"
              className="btn-primary text-meta inline-flex items-center gap-2"
            >
              Start a conversation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/case-studies"
              className="btn-secondary text-meta inline-flex items-center"
            >
              View selected work
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
