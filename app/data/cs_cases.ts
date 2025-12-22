// app/data/cs_cases.ts

export type CaseStudy = {
  slug: string;

  title: string;
  client: string;
  role: string;
  timeline: string;
  overview: string;
  heroImage: string;
  websiteURL: string,

  problems: string[];
  goals: string[];

  insight: string;
  strategy: string[];

  challenges?: string[];

  execution: {
    title: string;
    description: string;
    implication: string;
    mockup: string;
  }[];

  results: string[];
  quote: string;
};

const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "fresh-and-good-food",

    title: "Unifying Five Shopify Brands Without Losing Brand Identity",
    client: "Fresh and Good Food Solutions",
    role: "Solo Web & UI/UX Designer and Shopify Developer",
    timeline: "10 weeks",
    websiteURL: "https://freshandgoodfood.com",

    overview:
      "Fresh and Good Food Solutions operated five independent Shopify stores under one company. While this supported individual brand growth, it created friction for customers and operational strain for the business. Customers were forced into multiple checkouts, while the team managed duplicated maintenance, performance issues, and growing technical debt. The challenge was to unify everything without disrupting brand trust or familiarity.",

    heroImage: "/FGFS/FGFS-hero.png",

    problems: [
      "Customers were required to complete multiple checkouts when buying from more than one brand.",
      "Maintaining five separate Shopify stores increased operational complexity and costs.",
      "Merging stores risked diluting well-established brand identities.",
      "Existing storefronts suffered from slow performance and degraded user experience."
    ],

    goals: [
      "Consolidate all brands into a single Shopify store with a shared technical foundation.",
      "Preserve each brand’s unique identity and product experience.",
      "Enable cross-brand shopping with a single, seamless checkout.",
      "Significantly improve performance, speed, and usability."
    ],

    insight:
      "This was not primarily a visual challenge, but a perception challenge. Even with a unified backend, customers needed to feel they were shopping from distinct brands. If the consolidation was noticeable, the experience would feel forced. Success depended on making the complexity invisible.",

    strategy: [
      "Use a single Shopify store as the technical backbone while separating brand perception from architecture.",
      "Drive brand-specific UI and layouts through structured product metadata and taxonomy.",
      "Implement custom Liquid logic to bypass Shopify limitations without heavy third-party apps.",
      "Rebuild the storefront with a performance-first, lightweight approach."
    ],

    challenges: [
      "Unifying five established brands without flattening their identities.",
      "Working within Shopify’s constraints while delivering deep customization.",
      "Increasing functional complexity without sacrificing performance."
    ],

    execution: [
      {
        title: "Brand-Distinct Experiences Within One Store",
        description:
          "Each brand received dedicated pages, visual language, and product presentation rules. Colors, typography, layouts, and content tone were tightly controlled to ensure immediate brand recognition.",
        implication:
          "Customers retained brand familiarity while benefiting from a unified shopping experience.",
        mockup: "/FGFS/unique-brand.png"
      },
      {
        title: "Custom Liquid Architecture",
        description:
          "Custom Liquid logic dynamically applied brand-specific styling, layouts, and business rules without relying on performance-heavy third-party apps.",
        implication:
          "Enabled deep customization, long-term flexibility, and strong performance.",
        mockup: "/FGFS/Liquid-logic.png"
      },
      {
        title: "Brand-Separated Cart Experience",
        description:
          "Cart items were grouped by brand, each maintaining its own delivery logic, availability rules, and date requirements.",
        implication:
          "Checkout clarity improved, reducing confusion and abandoned carts.",
        mockup: "/FGFS/cart-group.png"
      },
      {
        title: "Performance Overhaul",
        description:
          "The storefront was rebuilt using a lightweight theme, optimized assets, and modern loading strategies, removing unnecessary scripts and legacy dependencies.",
        implication:
          "Load times improved significantly, reducing bounce rates and improving engagement.",
        mockup: ""
      }
    ],

    results: [
      "Customers can shop across all brands and complete purchases in a single checkout.",
      "Each brand’s identity and tone were fully preserved.",
      "Site performance improved with faster load times and better engagement.",
      "Customer feedback confirmed the experience felt familiar — just faster and simpler."
    ],

    quote:
      "We were worried merging everything would dilute our brands — but customers didn’t even notice. It still feels like our individual brands, just faster and easier to use."
  },

  {
    slug: "smdc-ofw-foreign-buyers",

    title: "Building a High-Converting Lead Generation Platform for OFWs and Foreign Property Buyers",
    client: "SMDC Real Estate Sales Manager",
    role: "Web Strategist, SEO Specialist, UI/UX Designer & Developer",
    timeline: "4 weeks",
    websiteURL: "https://smdcheightscondominiums.com",

    overview:
      "The client needed a dedicated website to support Google Ads and capture high-intent traffic, particularly from OFWs and foreign buyers. The platform needed to clearly communicate SMDC’s advantages for overseas buyers while supporting long-term SEO through structured listings and location-based content.",

    heroImage: "/SMDCKB/SMDCKB-hero.png",

    problems: [
      "Paid traffic lacked a conversion-optimized platform to capture and qualify leads.",
      "Most real estate sites were designed for local buyers, not overseas audiences.",
      "SMDC’s foreigner-friendly buying process was not clearly communicated.",
      "Listings lacked SEO structure, limiting organic visibility."
    ],

    goals: [
      "Build a conversion-focused website optimized for Google Ads traffic.",
      "Target OFWs and foreign buyers with focused messaging.",
      "Implement strong on-page SEO and internal linking.",
      "Clearly explain the buying process and ease of ownership from abroad."
    ],

    insight:
      "This project focused on removing uncertainty. Overseas buyers don’t lack interest — they lack clarity. The site needed to answer questions, address trust barriers, and guide users through the ownership process from abroad.",

    strategy: [
      "Design the site as a conversion-first funnel rather than a brochure.",
      "Create SEO-optimized listing and location pages.",
      "Develop content clusters targeting OFWs and foreign buyers.",
      "Use maps and amenity context to communicate lifestyle value."
    ],

    challenges: [
      "Balancing SEO depth with clarity.",
      "Building trust with buyers who could not visit in person.",
      "Structuring content for both search engines and real users."
    ],

    execution: [
      {
        title: "Conversion-Focused Lead Generation Architecture",
        description:
          "Clear CTAs, inquiry forms, and logical page flows guided users from intent to action, especially for traffic coming from Google Ads.",
        implication:
          "Higher conversion rates and improved lead quality from paid traffic.",
        mockup: "/SMDCKB/lead-generation-architecture.svg"
      },
      {
        title: "SEO-Optimized Condo Listings and Location Pages",
        description:
          "Listings were built with structured metadata, optimized headings, internal links, and supporting copy. Location pages captured geo-specific search intent.",
        implication:
          "Improved organic visibility and authority around SMDC properties.",
        mockup: "/SMDCKB/condo-listing-and-location.png"
      },
      {
        title: "OFW & Foreign Buyer Content Strategy",
        description:
          "Dedicated pages addressed eligibility, buying process, payments, and common concerns, supported by FAQs and long-form content.",
        implication:
          "Overseas buyers felt informed and confident, increasing inquiry rates.",
        mockup: "/SMDCKB/ofws-foreigners.png"
      },
      {
        title: "Amenity-Based Maps & Location Context",
        description:
          "Interactive maps highlighted nearby amenities, helping buyers understand location value without local knowledge.",
        implication:
          "Reduced uncertainty and increased engagement from overseas users.",
        mockup: "/SMDCKB/location-maps.png"
      }
    ],

    results: [
      "A lead generation website optimized for Google Ads and high-intent traffic.",
      "Clear messaging tailored to OFWs and foreign buyers.",
      "Improved SEO structure through optimized listings and internal linking.",
      "A platform designed to build clarity and confidence for overseas buyers."
    ],

    quote:
      "We needed a site that could speak directly to buyers abroad — not just show properties. The result feels clear, professional, and trustworthy."
  }
];

export default CASE_STUDIES;
