"use client";

import Image from "next/image";
import HomeHero from "./components/sections/HomeHero";
import { CASES } from "./data/cases";
import WorkGridSection from "./components/sections/WorkGrid";
import BrandsSection from "./components/sections/Brands";
import Services from "./components/sections/Services";
import About from "./components/sections/About";
import Process from "./components/sections/process";
import HomeCaseStudies from "./components/sections/CaseStudies";
import TestimonialStory from "./components/sections/Testimonials";

/* ----------------------------------------
   Gallery Size Guard (bulletproof)
----------------------------------------- */
type GallerySize = "small" | "medium" | "tall";

function normalizeSize(
  size?: string
): GallerySize | undefined {
  if (size === "small" || size === "medium" || size === "tall") {
    return size;
  }
  return undefined;
}

export default function Home() {
  const galleryItems = CASES.map((c) => ({
    slug: c.slug,
    hero: c.hero || c.gallery[0], // ensure hero exists
    size: normalizeSize(c.size),
  }));

  return (
    <main>
      <HomeHero />

      <WorkGridSection galleryItems={galleryItems} />

      <BrandsSection />
      <TestimonialStory />
      <HomeCaseStudies />
      <Services />
      <Process />
    </main>
  );
}
