export interface ProcessStep {
  id: string;
  title: string;
  paragraphs: string[];
  image?: string;
  align?: "left" | "right";
}

export const processSteps = [
  {
    title: "Clarity and Direction",
    paragraphs: [
      "Every project starts by understanding what the business truly needs, not just what is initially requested. I take time to clarify goals, constraints, audience intent, and how success should be measured.",
      "This step removes assumptions early, aligns priorities, and helps avoid unnecessary revisions later. It is where intention replaces guesswork."
    ],
    outcome:
      "A clear direction, defined goals, and a shared understanding of what success looks like."
  },

  {
    title: "Positioning and Structure",
    paragraphs: [
      "With direction established, I focus on how the website should communicate. This includes deciding what matters most, what comes first, and how people should move through the experience.",
      "The process covers content hierarchy, page structure, user paths, and search intent alignment where it adds value."
    ],
    outcome:
      "A structured plan that turns complexity into a focused and easy to navigate experience."
  },

  {
    title: "Design with Intent",
    paragraphs: [
      "Design is not decoration. Every visual decision is made to support clarity, trust, and usability rather than trends or personal preference.",
      "Typography, spacing, color, and motion are used deliberately to guide attention and reinforce the brand’s position."
    ],
    outcome:
      "A visual system that feels confident, cohesive, and purpose built."
  },

  {
    title: "Build and Integrate",
    paragraphs: [
      "Development prioritizes performance, scalability, and long term maintainability. The site is built cleanly without unnecessary plugins, bloat, or fragile solutions.",
      "Each part is implemented with future growth in mind, including content updates, SEO readiness, and analytics integration."
    ],
    outcome:
      "A fast and stable website that is ready to grow without breaking."
  },

  {
    title: "Refinement and Launch",
    paragraphs: [
      "Before launch, details are refined. This includes content clarity, loading behavior, edge cases, and real world usage scenarios.",
      "The goal is not just to ship, but to deliver something that feels finished, intentional, and reliable."
    ],
    outcome:
      "A polished launch that works as expected and represents the business well."
  }
];
