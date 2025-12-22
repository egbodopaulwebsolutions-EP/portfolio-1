// components/sections/CaseStudyGridClient.tsx
"use client";

import { useGridStagger } from "@/app/gsaphooks/useGridStagger";
import { CaseStudyItems } from "@/app/components/sections/CaseStudies";
import caseStudies from "@/app/data/cs_cases";

export default function CaseStudyGridClient() {
  const gridRef = useGridStagger();

  return <CaseStudyItems featured={caseStudies} gridRef={gridRef} />;
}
