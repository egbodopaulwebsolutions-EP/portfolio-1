// app/services/[slug]/page.tsx
import ButtonLink from "@/app/components/utilities/Button";
import Container from "@/app/components/utilities/container";
import Underline from "@/app/components/utilities/Underline";
import { SERVICES } from "@/app/data/services"
import { notFound } from "next/navigation"
import { use } from "react";

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
      <section className="min-h-[70vh] py-[var(--space-section-lg)] flex flex-col items-center justify-center border-b border-[var(--gray-200)]">
        <Container>
          <div className="container flex flex-row justify-center items-center gap-16 items-center">
            <div className="space-y-6">
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
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <ButtonLink href="/contact" className="block btn-primary mt-20 tex-meta">
            {service.startText}
          </ButtonLink>
        </Container>
      </section>

      {/* PRINCIPLES */}
      <section className="py-[var(--space-section)] border-b border-[var(--gray-200)]">
        <Container>
          <div className="container grid md:grid-cols-[0.4fr_0.6fr] gap-16">
            <h2 className="h3 text-display"><Underline className="underline-cust w-fit">
              Principles
            </Underline></h2>

            <ul className="space-y-4 text-lead list-disc marker:text-[var(--color-primary)]">
              {service.principles.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* DELIVERABLES */}
      <section className="py-[var(--space-section)] border-b border-[var(--gray-200)]">
        <Container>
          <div className="container grid md:grid-cols-[0.4fr_0.6fr] gap-16">
            <h2 className="h3 text-display"><Underline className="underline-cust w-fit">
              Deliverables
            </Underline></h2>

            <ul className="space-y-4 text-lead list-disc marker:text-[var(--color-primary)]">
              {service.deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* OUTCOMES */}
      <section className="py-[var(--space-section)]">
        <Container>
          <div className="container grid md:grid-cols-[0.4fr_0.6fr] gap-16">

            <h2 className="h3 text-display"><Underline className="relative w-fit underline-cust">Outcomes</Underline></h2>

            <ul className="space-y-4 text-lead list-disc marker:text-[var(--color-primary)]">
              {service.outcomes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
      {/* OTHER SERVICES */}
      <section className="py-[var(--space-section)] border-t border-[var(--gray-200)]">
        <Container>
          <div className="container space-y-12">
            <header className="max-w-xl space-y-4">
              <h2 className="h3 text-display text-[var(--color-primary)]">
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

                  <h3 className="h4 text-display text-[var(--color-secondary)]">
                    {item.title}
                  </h3>

                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {item.desc}
                  </p>

                  <ButtonLink
                    href={`/service/${item.slug}`}
                    className="inline-block text-sm btn-secondary font-medium"
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
