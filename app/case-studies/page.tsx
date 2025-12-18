"use client"

import CaseStudies, { CaseStudyItems } from "../components/sections/CaseStudies"
import Container from "../components/utilities/container";
import type { CaseStudy } from "../data/cs_cases";
import caseStudies from "../data/cs_cases";
import { useGridStagger } from "../gsaphooks/useGridStagger";




export default function caseStudy() {
    const gridAnimation = useGridStagger();
    return (
        <main className="">
            {/* --------------------------------------------------
           HERO
        -------------------------------------------------- */}
            <section className="py-[var(--space-section)] ">
                <Container>
                    <header className="flex flex-col pb-10 items-center space-y-6 border-b border-[var(--gray-200)]">
                        <h1 className="h1 text-display text-[var(--color-secondary)]">
                            Recent Case Studies
                        </h1>
                        <p className="text-lead text-neutral-600">
                            Real businesses. Real problems. Real transformations.
                        </p>
                    </header>
                </Container>
            </section>
            <section className="pb-[var(--space-section)]">
            <Container>
                <CaseStudyItems featured={caseStudies} gridRef={gridAnimation} />
            </Container>
            </section>
        </main>
    )
}