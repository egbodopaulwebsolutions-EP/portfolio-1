// data/pricing.ts

export type PricingItem = {
  id: string;
  title: string;
  description: string;
  range: string;
  note: string;
};

export const PRICING: PricingItem[] = [
  {
    id: "websites",
    title: "Website design & development",
    description:
      "New websites, redesigns, and structural improvements focused on clarity, credibility, and ease of understanding.",
    range: "$2,500 – $6,500+",
    note:
      "Pricing depends on number of pages, content readiness, and level of refinement required.",
  },
  {
    id: "shopify",
    title: "Shopify stores & customization",
    description:
      "Branded Shopify builds and refinements designed to reduce hesitation and support confident purchasing.",
    range: "$3,000 – $7,500+",
    note:
      "Varies based on product count, custom templates, and checkout complexity.",
  },
  {
    id: "seo",
    title: "Search clarity & on-page SEO",
    description:
      "Structural and content-focused SEO work aligned with real search intent, not keyword stuffing.",
    range: "$1,000 – $3,000",
    note:
      "Best suited for focused page sets or clearly defined search goals.",
  },
];
