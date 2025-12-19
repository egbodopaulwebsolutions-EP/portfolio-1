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
      "Design and development of new websites or considered redesigns, focused on clarity, structure, and credible presentation of your product or service.",
    range: "₱80,000 – ₱170,000+",
    note:
      "Typical for 5–10 page websites. Final scope depends on content readiness, number of templates, and level of refinement.",
  },
  {
    id: "shopify",
    title: "E-commerce (Shopify) design & development",
    description:
      "Branded Shopify stores designed to reduce friction, support confident purchasing, and present products clearly without visual noise.",
    range: "₱110,000 – ₱2500,000+",
    note:
      "Varies based on product count, custom templates, integrations, and checkout complexity.",
  },
  {
    id: "seo",
    title: "Search clarity & on-page SEO",
    description:
      "Search-focused structural and content work that helps pages be understood by both users and search engines.",
    range: "₱30,000 – 70,000",
    note:
      "Best suited for defined page sets or focused visibility goals. Offered as a one-time or phased engagement.",
  },
];
