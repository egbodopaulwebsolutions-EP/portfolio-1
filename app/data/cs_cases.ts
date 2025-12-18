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
  timeline: "14 weeks",
  websiteURL: "https://freshandgoodfood.com",

  overview:
    "Fresh and Good Food Solutions operated five independent Shopify stores, each representing a distinct food brand under the same company. While this structure allowed the brands to grow individually, it created friction for customers who wanted to shop across brands and operational strain for the business. Customers were forced to place multiple orders and complete multiple checkouts, while the internal team dealt with duplicated maintenance, inconsistent performance, and growing technical debt. The challenge was to unify everything under one system without compromising the trust and familiarity each brand had already built.",

  heroImage: "/FGFS/FGFS-hero.png",

  problems: [
    "Customers had to complete multiple checkouts when purchasing from more than one brand, leading to frustration and abandoned carts.",
    "Maintaining five separate Shopify stores significantly increased operational complexity, development effort, and ongoing costs.",
    "Any attempt to merge the stores risked diluting or blurring well-established brand identities.",
    "The existing storefronts suffered from slow load times, poor performance scores, and an overall degraded user experience."
  ],

  goals: [
    "Consolidate all five brands into a single Shopify store with a shared technical foundation.",
    "Preserve the unique identity, visual language, and product experience of each individual brand.",
    "Allow customers to shop across multiple brands and complete their purchase in one seamless checkout.",
    "Dramatically improve site performance, speed, and overall usability."
  ],

  insight:
    "This project was not primarily a visual design challenge — it was a perception challenge. Even though the technology would be unified behind the scenes, customers needed to feel as if they were still shopping from distinct, independent brands. If users noticed the consolidation, the experience would feel forced and unfamiliar. The success of the project depended on making the complexity invisible.",

  strategy: [
    "Use a single Shopify store as the technical backbone while decoupling brand perception from the underlying architecture.",
    "Drive brand-specific UI, layouts, and styling through product metadata and structured taxonomy.",
    "Write custom Liquid logic to bypass Shopify’s default limitations without relying on heavy third-party apps.",
    "Rebuild the storefront with a performance-first mindset using a lightweight theme and modern loading strategies."
  ],

  challenges: [
    "Merging five established brands into one system without flattening or erasing their individual identities.",
    "Working within Shopify’s rigid theming and checkout constraints while still delivering a highly customized experience.",
    "Increasing functional complexity without sacrificing — and ideally improving — site performance."
  ],

  execution: [
    {
      title: "Brand-Distinct Experiences Within One Store",
      description:
        "Each brand was given its own dedicated pages, visual language, logos, and product presentation rules. Colors, typography, layout nuances, and content tone were carefully controlled so customers could instantly recognize which brand they were engaging with.",
      implication:
        "Customers retained brand familiarity and trust, while benefiting from the convenience of a single, unified shopping experience.",
      mockup: "/FGFS/unique-brand.png"
    },
    {
      title: "Custom Liquid Architecture",
      description:
        "Advanced custom Liquid logic was developed to override Shopify’s default behaviors and dynamically apply brand-specific styling, layouts, and business rules — all without introducing performance-heavy third-party apps.",
      implication:
        "This approach enabled deep customization and long-term flexibility while maintaining excellent performance and maintainability.",
      mockup: "/FGFS/liquid-logic.png"
    },
    {
      title: "Brand-Separated Cart Experience",
      description:
        "Cart items were intelligently grouped by brand, with each group maintaining its own delivery logic, availability rules, and date selection requirements.",
      implication:
        "Checkout clarity improved significantly, reducing customer confusion, abandoned carts, and support inquiries.",
      mockup: "/FGFS/cart-group.png"
    },
    {
      title: "Performance Overhaul",
      description:
        "The entire storefront was rebuilt using a lightweight Shopify theme, optimized assets, and best-practice loading strategies. Unnecessary scripts and legacy dependencies were removed or replaced with custom solutions.",
      implication:
        "Page load times improved dramatically, bounce rates dropped, and returning customers immediately noticed the speed and responsiveness improvements.",
      mockup: ""
    }
  ],

  results: [
    "Customers can now shop across all brands and complete their purchase through a single, seamless checkout.",
    "Each brand’s identity, tone, and visual presence was fully preserved within the unified platform.",
    "Site performance improved significantly, leading to faster load times and better engagement metrics.",
    "Customer feedback confirmed the experience felt familiar — just faster, simpler, and easier to use."
  ],

  quote:
    "We were worried merging everything would dilute our brands — but customers didn’t even notice. It still feels like our individual brands, just faster and easier to use."
}
,

{
  slug: "smdc-ofw-foreign-buyers",

  title: "Building a High-Converting Lead Generation Platform for OFWs and Foreign Property Buyers",
  client: "SMDC Real Estate Sales Manager",
  role: "Web Strategist, SEO Specialist, UI/UX Designer & Developer",
  timeline: "4 weeks",
  websiteURL: "https://smdcheightscondominiums.com",

  overview:
    "The client was a real estate sales manager under SMDC who needed a dedicated lead generation website to support Google Ads campaigns. With Meta ads becoming increasingly crowded and expensive, the goal was to create a conversion-focused website that could capture high-intent traffic through search. The platform needed to clearly communicate SMDC’s advantages for overseas buyers — particularly OFWs and foreign nationals — while supporting long-term SEO growth through structured content, optimized listings, and location-based pages.",

  heroImage: "/SMDCKB/SMDCKB-hero.png",

  problems: [
    "Paid ads were driving traffic, but there was no dedicated conversion-optimized website to properly capture and qualify leads.",
    "Most real estate sites were designed for local buyers and failed to address the concerns of OFWs and foreign nationals buying from abroad.",
    "SMDC’s key advantage — a fast, structured, and foreigner-friendly buying process — was not being clearly communicated.",
    "Listings lacked SEO structure, metadata, and supporting content, limiting organic visibility and long-term traffic growth."
  ],

  goals: [
    "Build a lead generation website optimized specifically for Google Ads and high-intent search traffic.",
    "Target OFWs and foreign nationals as primary buyer segments through focused content and messaging.",
    "Implement strong on-page SEO, keyword clustering, and internal linking to support organic growth.",
    "Clearly communicate SMDC’s buying process, AirBnB-friendly policies, and ease of ownership from abroad."
  ],

  insight:
    "This project was not just about selling condos — it was about removing uncertainty. Overseas buyers don’t lack interest; they lack clarity. The site needed to proactively answer questions, address trust barriers, and guide users step-by-step through what it actually means to own a condo in the Philippines while living abroad.",

  strategy: [
    "Design the website as a conversion-first funnel rather than a brochure-style real estate site.",
    "Create SEO-optimized condo listing pages with structured metadata, internal links, and location relevance.",
    "Develop dedicated content clusters for OFWs and foreign buyers to target high-intent search queries.",
    "Use maps and amenity-based context to visually communicate lifestyle value and location advantages."
  ],

  challenges: [
    "Balancing SEO depth with clarity, ensuring content remained helpful rather than overwhelming.",
    "Building trust with overseas buyers who could not physically visit properties.",
    "Structuring listings and location pages in a way that satisfied both search engines and real users."
  ],

  execution: [
    {
      title: "Conversion-Focused Lead Generation Architecture",
      description:
        "The site was structured around lead capture and buyer intent. Clear CTAs, strategically placed inquiry forms, and logical page flows ensured visitors coming from Google Ads immediately understood the value proposition and next steps.",
      implication:
        "Traffic from paid ads converted more efficiently, improving lead quality and reducing wasted ad spend.",
      mockup: "/SMDCKB/lead-generation-architecture.svg"
    },
    {
      title: "SEO-Optimized Condo Listings and Location Pages",
      description:
        "Each condo listing was built with structured metadata, optimized headings, internal links, and supporting copy. Location pages for areas like Pasay and Manila were created to capture geo-specific search intent and provide contextual relevance.",
      implication:
        "The site gained stronger organic visibility while reinforcing authority around SMDC properties and key locations.",
      mockup: "/SMDCKB/condo-listing-and-location.png"
    },
    {
      title: "OFW & Foreign Buyer Content Strategy",
      description:
        "Dedicated pages were created specifically for OFWs and foreign nationals, addressing ownership eligibility, buying processes, payment structures, and common concerns. FAQs and long-form content were designed to answer questions before users even asked them.",
      implication:
        "Overseas buyers felt welcomed, informed, and confident — increasing trust and inquiry rates.",
      mockup: "/SMDCKB/ofws-foreigners.png"
    },
    {
      title: "Amenity-Based Maps & Location Context",
      description:
        "Interactive maps highlighted nearby malls, hospitals, transport hubs, and lifestyle amenities around each property. This allowed users to immediately understand the value of each location without needing local knowledge.",
      implication:
        "Buyers abroad could quickly visualize the lifestyle benefits of each listing, reducing uncertainty and increasing engagement.",
      mockup: "/SMDCKB/location-maps.png"
    }
  ],

  results: [
    "A purpose-built lead generation website optimized for Google Ads and high-intent traffic.",
    "Clear, consistent messaging that addressed the needs of OFWs and foreign nationals across the entire site.",
    "Improved SEO structure through keyword clustering, internal linking, and optimized listings.",
    "A platform that welcomed not just local buyers, but overseas investors looking for clarity and confidence."
  ],

  quote:
    "We needed a site that could speak directly to buyers abroad — not just show properties. The result feels clear, professional, and trustworthy, especially for OFWs and foreign clients who can’t be here in person."
}

];

export default CASE_STUDIES;
