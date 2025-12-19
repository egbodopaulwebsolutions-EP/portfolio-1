
import { ServiceIndividual } from "../components/sections/Services"
import { SERVICES } from "../data/services"
import Container from "../components/utilities/container"
import ButtonLink from "../components/utilities/Button"

export default function ServicesPage() {

  //services page
  return (
    <main className="">

      <section className="py-[var(--space-section)]">
        {/* --------------------------------------------------
           HERO
        -------------------------------------------------- */}
        <Container size="narrow" center>
        <header className="flex flex-col relative items-center underline-cust">
          <h1 className="h1 text-display text-[var(--color-primary)]">
            Services
          </h1>
        </header>
        </Container>


        {/*services stack */}
        <section id="services" className="relative">
          {SERVICES.map((service, i) => (
            <ServiceIndividual
              key={service.slug}
              {...service}
              reversed={i % 2 !== 0}
            />
          ))}
        </section>

        {/* --------------------------------------------------
           HOW IT FITS TOGETHER
        -------------------------------------------------- */}

        {/* --------------------------------------------------
           CASE STUDY BRIDGE
        -------------------------------------------------- 

        <section className="pt-[var(--space-xl)] space-y-12">
          <h2 className="h3 text-display">
            Applied in real projects
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <CaseBridge
              service="Web Systems"
              title="Unifying Five Shopify Brands"
              href="/case-studies/fresh-and-good-food"
            />

            <CaseBridge
              service="SEO & Demand Capture"
              title="Real Estate Lead System for OFWs"
              href="/case-studies/smdc-ofw"
            />

            <CaseBridge
              service="Paid Traffic Systems"
              title="High-Intent Google Ads for Property Buyers"
              href="/case-studies/paid-traffic"
            />
          </div>
        </section>

        */}

        {/* --------------------------------------------------
           FINAL CTA
        -------------------------------------------------- */}
        <section className="pt-[var(--space-section-sm)]">
          <Container size="narrow" center className="">
          <h2 className="h3 text-display text-[var(--color-primary)]">
            Not sure where to start?
          </h2>

          <p className="text-lead text-[var(--gray-700)]">
            Start with clarity. We’ll figure out the rest.
          </p>

          <ButtonLink
                  href="/contact"
                  className="mt-4 w-fit text-meta text-[var(--color-primary)]"
                >
                  Start a conversation →
                </ButtonLink>
          </Container>
        </section>

      </section>
    </main>
  )
}


export function CaseBridge({
  service,
  title,
  href,
}: {
  service: string
  title: string
  href: string
}) {
  return (
    <a
      href={href}
      className="
        block p-6 rounded-lg
        bg-[var(--gray-50)]
        hover:bg-[var(--gray-100)]
        transition
      "
    >
      <span className="text-sm opacity-60">{service}</span>
      <h3 className="mt-2 font-medium">{title}</h3>
      <span className="mt-4 inline-block text-sm opacity-60">
        View case →
      </span>
    </a>
  )
}
