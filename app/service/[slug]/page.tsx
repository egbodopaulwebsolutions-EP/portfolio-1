// app/services/[slug]/page.tsx
import ButtonLink from "@/app/components/utilities/Button";
import Container from "@/app/components/utilities/container";
import Underline from "@/app/components/utilities/Underline";
import { SERVICES } from "@/app/data/services"
import { notFound } from "next/navigation"
import { use } from "react";
import Image from "next/image";
type PageProps = {
  params: Promise<{ slug: string }>;
};


export default function ServicePage({ params }: PageProps) {
  const { slug } = use(params);

  const service = SERVICES.find((cs) => cs.slug === slug);

  if (!service) {
    notFound();
  }

  const otherServices = SERVICES
    .filter((s) => s.slug !== slug)
    .slice(0, 3);


  return (
    <main>
      {/* HERO */}
      <section className="min-h-[70vh] py-[var(--space-section-lg)] flex flex-col justify-center border-b border-[var(--gray-200)]">
        <Container>
          <div className=" flex gap-10 flex-row">
            <div className="">
              <Underline className="underline-cust w-fit">
                {service.kicker}
              </Underline>

              <h1 className="h1 text-display text-[var(--color-secondary)]">
                {service.title}
              </h1>

              <p className="text-lead text-[var(--gray-700)]">
                {service.intro}
              </p>
            </div>

            <div className="min-h-[40vh] rounded-lg ">
              <img
                src={service.media}
                alt={service.title}
                className="w-full rounded-2xl h-full object-cover"
              />
            </div>
          </div>
          <ButtonLink href="/contact" className="block btn-primary mt-4 tex-meta">
            {service.startText}
          </ButtonLink>
        </Container>
      </section>

      {/* PRINCIPLES */}
      <section className="py-[var(--space-section-sm)] border-b border-[var(--gray-200)]">
        <Container size="narrow">
          <div className="container grid md:grid-cols-[0.4fr_0.6fr] gap-6">
            <h2 className="h3 text-display"><Underline className="underline-cust w-fit">
              Principles
            </Underline></h2>

            <ul className="space-y-2 text-lead list-disc marker:text-[var(--color-primary)]">
              {service.principles.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* DELIVERABLES */}
      <section className="py-[var(--space-section-sm)] border-b border-[var(--gray-200)]">
        <Container size="narrow">
          <div className="container grid md:grid-cols-[0.4fr_0.6fr] gap-6">
            <h2 className="h3 text-display"><Underline className="underline-cust w-fit">
              Deliverables
            </Underline></h2>

            <ul className="space-y-2 text-lead list-disc marker:text-[var(--color-primary)]">
              {service.deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* OUTCOMES */}
      <section className="py-[var(--space-section-sm)]">
        <Container size="narrow">
          <div className="container grid md:grid-cols-[0.4fr_0.6fr] gap-6">

            <h2 className="h3 text-display"><Underline className="relative w-fit underline-cust">Outcomes</Underline></h2>

            <ul className="space-y-2 text-lead list-disc marker:text-[var(--color-primary)]">
              {service.outcomes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
      {/* OTHER SERVICES */}
      <section className="py-[var(--space-section)] relative border-t border-[var(--gray-200)]">
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
        <Container size="default">
          <div className="container space-y-12">
            <header className=" space-y-4">
              <h2 className="h2 text-display text-[var(--color-primary)]">
                <Underline className="">
                  Other services
                </Underline>
              </h2>
              <p className="text-lead text-[var(--gray-700)]">
                If your project needs a different kind of support, these may also be
                relevant.
              </p>
            </header>

            <div className="grid gap-8 md:grid-cols-3">
              {otherServices.map((item) => (
                <article
                  key={item.slug}
                  className="space-y-4"
                >

                  <h3 className="h3 text-display text-[var(--color-secondary)]">
                    {item.title}
                  </h3>
                  <div><img alt={item.title} src={item.media} /></div>
                  <p className="text-lead text-neutral-600 leading-relaxed">
                    {item.desc}
                  </p>

                  <ButtonLink
                    href={`/service/${item.slug}`}
                    className="inline-block text-meta text-[var(--color-primary)] font-medium"
                  >
                    Learn More
                  </ButtonLink>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

    </main>
  )
}
