"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "../gsaphooks/gsapSetup";
import { processSteps } from "@/app/data/process";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "../components/utilities/container";
import ButtonLink from "../components/utilities/Button";

gsap.registerPlugin(ScrollTrigger);

export default function AlternatingPinnedStory() {
    const scope = useRef<HTMLDivElement | null>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const blocks = gsap.utils.toArray<HTMLElement>(".story-block");

            blocks.forEach((block) => {
                gsap.fromTo(
                    block.querySelector(".story-title"),
                    { y: 40, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        scrollTrigger: {
                            trigger: block,
                            start: "top 75%",
                            end: "top 35%",
                            scrub: 1,
                        },
                    }
                );

                gsap.fromTo(
                    block.querySelector(".story-text"),
                    { y: 60, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        scrollTrigger: {
                            trigger: block,
                            start: "top 80%",
                            end: "top 45%",
                            scrub: 1,
                        },
                    }
                );
            });

            ScrollTrigger.refresh();
        }, scope);

        return () => ctx.revert();
    }, []);

    return (
        <main
            id="process"
            ref={scope}
            className="bg-white "
        >



            {/*  ---------------------------------------------- */}
            <section className="py-[var(--space-section)] ">
                <Container center>
                    <header className="flex flex-col items-center underline-cust w-fit relative">
                        <h1 className="h1 text-display text-[var(--color-primary)]">
                            How I Work
                        </h1>
                    </header>
                </Container>
            </section>

            {/* Steps */}
            <section>
                <Container size="narrow">
                    {processSteps.map((step, i) => (
                        <div
                            key={i}
                            className="story-block min-h-screen py-16 flex flex-col md:flex-row gap-20 relative"
                        >
                            {/* Index */}
                            <span className="absolute top-10 left-6 text-[18vw] md:text-[10vw] font-black text-[var(--color-primary)]/10 select-none">
                                {String(i + 1).padStart(2, "0")}
                            </span>

                            {/* Title */}
                            <div className="md:w-1/3 relative z-10">
                                <h3 className="story-title sticky top-32 text-display text-[var(--color-secondary)] h2">
                                    {step.title}
                                </h3>
                            </div>

                            {/* Content */}
                            <div className="story-text md:w-2/3 space-y-6 text-lead text-neutral-700 max-w-2xl">
                                {step.paragraphs.map((p, idx) => (
                                    <p key={idx}>{p}</p>
                                ))}

                                <p className="italic text-[var(--color-primary)]">
                                    <strong>Outcome:</strong> {step.outcome}
                                </p>
                            </div>
                            
                        </div>
                    ))}
                    <section className="flex justify-center">
                    <ButtonLink
                                href="/case-studies"
                                className="inline-block mx-auto btn-secondary mt-10 mb-10 text-meta text-[var(--color-primary)] font-medium"
                            >
                                View case studies 
                    </ButtonLink>
                    </section>
                </Container>
            </section>
        </main>
    );
}
