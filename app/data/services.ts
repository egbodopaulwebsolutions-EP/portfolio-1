export type services = {
  slug: string;
  kicker: string;
  title: string;
  desc: string;
  media: string;
  homeList: string[];
  reversed: boolean;
 startText: string;
  intro: string
  principles: string[]
  deliverables: string[]
  outcomes: string[]
};

export const SERVICES: services[] = [
  {
    slug: "website-design-build",
    kicker: "Foundational",
    title: "Website Design & Development",
    desc: "For businesses and teams who need a website that feels clear, credible, and easy to trust.",
    media: "/images/web-dev-layouts.png",
    reversed: false,
    startText: "Start Your website project",
    intro:
      "For most people, your website is where they decide whether to trust you or move on.",

    principles: [
      "Structure before styling",
      "Design that supports reading and understanding",
      "Hierarchy that guides attention naturally",
      "Branded layouts that fit your business brand and style",
    ],

    homeList: [
      "Pages that explain themselves without effort",
      "Layouts that feel calm, considered, and intentional",
      "Built to support real decision-making",
    ],

    deliverables: [
      "Custom page layouts",
      "Responsive, accessible design",
      "Clean, maintainable code",
    ],

    outcomes: [
      "Visitors understand what you do faster",
      "Your business feels established and dependable",
    ],
  },

  {
    slug: "shopify-development",
    kicker: "E-Commerce",
    title: "Shopify development",
    desc: "For brands who want branded store that speaks to customers.",
    media: "/images/shopify.webp",
    reversed: false,
    startText: "Build your store",
    intro:
      "Good e-commerce reduces hesitation. It makes buying feel natural, not forced.",

    principles: [
      "Clear product hierarchy",
      "Consistent brand signals",
      "Distraction-free decision paths",
    ],

    homeList: [
      "Product pages that feel trustworthy",
      "Brand presence without visual noise",
      "Flows that respect the buyer’s attention",
    ],

    deliverables: [
      "Custom Shopify themes or extensions",
      "Branded UI refinement",
      "Performance-focused implementation",
    ],

    outcomes: [
      "Customers feel confident completing purchases",
      "Your store feels intentional, not templated",
    ],
  },
{
  slug: "seo",
  kicker: "Visibility",
  title: "SEO",
  desc: "For businesses who want to be found by the right people.",
  media: "/images/search-and-visibility-seo.svg",
  reversed: false,
  startText: "Gain More Search Visibility",

  intro:
    "Search works best when pages are written and structured for real people first.",

  principles: [
    "Search intent before keywords",
    "Clear page structure",
    "Content written to be understood, not stuffed",
  ],

  homeList: [
    "Pages aligned to what customers are actually searching for",
    "Content that reads naturally and ranks over time",
    "Structure that search engines can interpret easily",
  ],

  deliverables: [
    "On-page SEO structure",
    "Metadata and heading hierarchy",
    "Search-friendly content guidance",
  ],

  outcomes: [
    "Your business appears in the right searches",
    "Visitors arrive already oriented and informed",
  ],
}
,

  {
    slug: "website-Redesign-development",
    kicker: "Refinement",
    title: "Website Redesign & development",
    desc: "For existing sites that work, but don’t feel as clear or confident as they should.",
    media: "/images/focus-landing-pages.svg",
    reversed: false,
    startText: "Refine your website",
    intro:
      "Small refinements often make the biggest difference in how a site is perceived.",

    principles: [
      "Reduce friction",
      "Clarify messaging",
      "Strengthen visual consistency",
    ],

    homeList: [
      "Cleaner layouts",
      "Improved readability",
      "More confident presentation",
    ],

    deliverables: [
      "Design and layout refinements",
      "Content structure adjustments",
      "UX and visual consistency improvements",
    ],

    outcomes: [
      "Your site feels more intentional",
      "Visitors trust what they’re seeing",
    ],
  },
  
];
