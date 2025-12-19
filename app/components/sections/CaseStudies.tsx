"use client";

import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "../../data/cs_cases";
import caseStudies from "../../data/cs_cases";
import { useGridStagger } from "../../gsaphooks/useGridStagger";
import Container from "../utilities/container";
import { TruncateWords } from "../utilities/TruncateWords";
export default function HomeCaseStudies() {

const gridAnimation = useGridStagger();
  return (
    <>
    <section id="work" className="py-[var(--space-section)] relative">
      {/* Noise overlay */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10 h-full w-full opacity-[0.09]"
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
      <Container center>
        <header className="text-center border-b border-[var(--gray-200)]">
          <h2 className="text-display h2 text-[var(--color-primary)]">
            Recent Case Studies
          </h2>
          <p className="text-lead text-neutral-600">
            Real businesses. Real problems. Real transformations.
          </p>
        </header>
      </Container>
    </section>
    <section className="pb-[var(--space-section)] relative">
       {/* Noise overlay */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10 h-full w-full opacity-[0.09]"
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
      <Container>
      <CaseStudyItems featured={caseStudies} gridRef={gridAnimation}/>
      </Container>
    </section>
    </>
  );
}

type caseprops = {
  featured: CaseStudy[]
  gridRef: React.RefObject<HTMLDivElement | null>


}

export function CaseStudyItems(

  {
    featured,
gridRef
  } : caseprops
){
    
  return(
    <div ref={gridRef} className="grid md:grid-cols-3 gap-10">
          {featured.map((cs) => (
            <Link
              key={cs.slug}
              href={`/case-study/${cs.slug}`}
              className="group rounded-3xl border border-neutral-200 overflow-hidden bg-white transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="aspect-video relative bg-neutral-100">
                <Image
                  src={cs.heroImage}
                  alt={cs.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 space-y-3">
                <h3 className="text-display h4">{cs.title}</h3>
                <p className="text-lead text-sm text-neutral-600">
                  {cs.overview && TruncateWords(cs.overview, 10)}

                </p>
                <span className="text-meta text-[var(--color-primary)]">
                  View Case →
                </span>
              </div>
            </Link>
          ))}
        </div>
  )
}