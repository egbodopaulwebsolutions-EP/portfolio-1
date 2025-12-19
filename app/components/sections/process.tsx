"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "../../gsaphooks/gsapSetup";
import { processSteps } from "@/app/data/process";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "../utilities/container";
import ButtonLink from "../utilities/Button";

gsap.registerPlugin(ScrollTrigger);

export default function AlternatingPinnedStory() {
 
  return (
    <section
      id="process"
      className="bg-white py-[var(--space-section)]"
    >

      <Container size="default">
      {/* Header */}
      <div className=" mb-8">
        <h2 className="text-display h2 text-[var(--color-primary)]">
          How I Work?
        </h2>
        <p className="text-lead text-neutral-600">
          A clear, repeatable process that turns ideas into focused,
          high-performing digital systems.
        </p>
      </div>

      <ButtonLink
                  href="/how-i-work"
                  className="mt-4 w-fit text-meta text-[var(--color-primary)]"
                >
                  Learn more →
                </ButtonLink>
      </Container>
    </section>
  );
}
