// app/case-study/[slug]/page.tsx
"use client";

import { useLayoutEffect, useRef } from "react";
import { use } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import CASE_STUDIES from "@/app/data/cs_cases";
import Container from "@/app/components/utilities/container";

gsap.registerPlugin(ScrollTrigger);

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default function CaseStudyPage({ params }: PageProps) {
  const { slug } = use(params);
  const caseStudy = CASE_STUDIES.find((cs) => cs.slug === slug);

  if (!caseStudy) notFound();

  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!rootRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from("[data-fade]", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 80%",
        },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={rootRef} className="bg-white text-neutral-900">
      {/* HERO */}
      <section className="py-[var(--space-section-lg)]">
        <Container size="default">
          {/* META */}
          <div className="mb-12 grid grid-cols-2 gap-6 text-sm md:grid-cols-4">
            <Meta label="Client" value={caseStudy.client} />
            <Meta label="Role" value={caseStudy.role} />
            <Meta label="Timeline" value={caseStudy.timeline} />
            <a
              href={caseStudy.websiteURL}
              className="text-[var(--color-accent)] font-medium"
            >
              View live site →
            </a>
          </div>

          {/* HERO CONTENT */}
          <div className="flex flex-col gap-16 lg:flex-row">
            <div className="w-full lg:w-1/2">
              <span className="text-xs uppercase tracking-widest text-neutral-400">
                Case Study
              </span>

              <h1
                data-fade
                className="mt-6 max-w-xl text-display h2 text-[var(--color-primary)]"
              >
                {caseStudy.title}
              </h1>

              <p data-fade className="mt-6 max-w-xl text-lead">
                {caseStudy.overview}
              </p>
            </div>

            <div
              data-fade
              className="order-first w-full overflow-hidden lg:order-last lg:w-1/2"
            >
              <Image
                src={caseStudy.heroImage}
                alt={caseStudy.title}
                width={1600}
                height={900}
                className="w-full"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* PROBLEMS & GOALS */}
      <section className="border-t border-neutral-200 bg-neutral-50 py-[var(--space-section)]">
        <Container size="default">
          <div className="grid gap-16 md:grid-cols-2">
            <div data-fade>
              <SectionHeading>Problems</SectionHeading>
              <ul className="mt-6 space-y-3 list-disc text-lead marker:text-[var(--color-primary)]">
                {caseStudy.problems.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>

            <div data-fade>
              <SectionHeading>Goals</SectionHeading>
              <ul className="mt-6 space-y-3 list-disc text-lead marker:text-[var(--color-secondary)]">
                {caseStudy.goals.map((g, i) => (
                  <li key={i}>{g}</li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* INSIGHT & STRATEGY */}
      <section className="border-t border-neutral-200 py-[var(--space-section)]">
        <Container>
          <div data-fade className="max-w-3xl">
            <SectionHeading>Insight</SectionHeading>
            <p className="mt-6 text-lead leading-relaxed">
              {caseStudy.insight}
            </p>
          </div>

          <div data-fade className="mt-20 max-w-3xl">
            <SectionHeading>Strategy</SectionHeading>
            <ul className="mt-6 space-y-3 list-disc text-lead marker:text-[var(--color-primary)]">
              {caseStudy.strategy.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>
        </Container>
      </section>



      {/* WHY THIS WAS HARD */}
      {Array.isArray(caseStudy.challenges) && caseStudy.challenges.length > 0 && (
        <section className="border-t border-neutral-200 py-[var(--space-section)]">
          <Container>
            <SectionHeading>Why This Was Hard</SectionHeading>
            <ul className="mt-8 space-y-4 list-disc text-lead marker:text-[var(--color-primary)]">
              {caseStudy.challenges!.map((item, i) => (
                <li key={i} data-fade >
                  {item}
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      {/* EXECUTION */}
      <section className="border-t border-neutral-200 bg-neutral-50 py-[var(--space-section)]">
        <Container>
          <h2
            data-fade
            className="mb-20 text-center text-display h2"
          >
            Execution
          </h2>

          <div className="space-y-32">
            {caseStudy.execution.map((step, i) => (
              <div
                key={i}
                className="grid items-center gap-16 lg:grid-cols-2"
              >
                <div data-fade>
                  <span className="text-xs uppercase tracking-widest text-neutral-400">
                    Step {i + 1}
                  </span>

                  <h3 className="mt-2 text-display h4">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-lead leading-relaxed">
                    {step.description}
                  </p>

                  <p className="mt-4 italic text-[var(--color-primary)]">
                    {step.implication}
                  </p>
                </div>

                {step.mockup && step.mockup.trim() !== "" && (
                  <div data-fade className="overflow-hidden">
                    <Image
                      src={step.mockup}
                      alt={step.title}
                      width={1200}
                      height={800}
                      className="w-full"
                    />

                  </div>
                )}

              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* RESULTS */}
      <section className="border-t border-neutral-200 py-[var(--space-section)]">
        <Container>
          <SectionHeading>Results</SectionHeading>

          <ul className="mt-8 max-w-3xl space-y-4 list-disc text-lead marker:text-[var(--color-primary)]">
            {caseStudy.results.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>

          <blockquote
            data-fade
            className="mt-20 max-w-3xl border-l-4 border-[var(--color-secondary-support)] pl-6 italic text-lead"
          >
            “{caseStudy.quote}”
          </blockquote>
        </Container>
      </section>
    </main>
  );
}

/* ---------------------------------------------
   Small helpers
--------------------------------------------- */

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-wide text-[var(--color-secondary)]">
        {label}
      </div>
      <div className="text-meta">{value}</div>
    </div>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="relative w-fit text-display h2">
      {children}
      <span className="absolute left-0 -bottom-1 h-[3px] w-full rounded-full bg-[var(--color-primary)]" />
    </h2>
  );
}
