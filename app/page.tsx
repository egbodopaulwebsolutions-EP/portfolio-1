"use client";

import { useState } from "react";
import Image from "next/image";
import HomeHero from "./components/sections/HomeHero"
import {CASES}  from "./data/cases";
import WorkGridSection from "./components/sections/WorkGrid";
import BrandsSection from "./components/sections/Brands";
import Services from "./components/sections/Services";
import About from "./components/sections/About";
import Process from "./components/sections/process";
import HomeCaseStudies from "./components/sections/CaseStudies";
import TestimonialStory from "./components/sections/Testimonials";


type CaseItem = (typeof CASES)[number];

export default function Home() {

  // Local modal state only — NOT animation-related
  const [ setActiveCase] = useState<CaseItem | null>(null);

  // Items for WorkGrid
  const galleryItems = CASES.flatMap((c) => [{ ...c, src: c.gallery[1] }]);
  
  return (
<div>
    <HomeHero/>
    <WorkGridSection
        galleryItems={galleryItems}
        setActiveCase={setActiveCase}
      />
      <BrandsSection/>
      <TestimonialStory/>
      <Services />
      <Process/>
      <HomeCaseStudies/>

    </div>
  );
}
