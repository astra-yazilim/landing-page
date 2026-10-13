import type { FaqItem, PricingContent } from "@/content/types";

export const pricing: PricingContent = {
  tabsLabel: "Pricing model",
  fallbackPrice: "Get a quote",
  models: {
    credits: {
      label: "Task Credits",
      description: "Buy credits, open tasks, and credits are deducted when the work is done. No monthly commitment.",
      tiers: {
        starter: {
          name: "Starter Credit Pack",
          audience: "Ideal for quick fixes, speed boosts and custom UI tweaks.",
          price: null,
          priceNote: "10 credits · valid for 6 months",
          features: ["Small and medium tasks", "CSS, UI and theme fixes", "Speed and Core Web Vitals improvements"],
          cta: "Ask about this pack",
        },
        growth: {
          name: "Growth Partner",
          audience: "For growing stores with ongoing development needs.",
          price: null,
          priceNote: "30 credits · valid for 12 months",
          badge: "Most popular",
          features: [
            "Priority task queue",
            "Direct Slack / WhatsApp channel",
            "Monthly speed & SEO care",
            "Product photo and UI support",
          ],
          cta: "Get a quote",
        },
        enterprise: {
          name: "Custom Enterprise",
          audience: "For full custom web or mobile app builds from scratch.",
          price: "Let’s talk",
          priceNote: "Quoted by scope",
          features: [
            "End-to-end custom web / mobile build",
            "Discovery, design and architecture",
            "Post-launch maintenance agreement",
          ],
          cta: "Discuss the project",
        },
      },
    },
    retainer: {
      label: "Monthly Partner",
      description: "Dedicated development hours and ongoing care every month. Like part of your own team.",
      tiers: {
        starter: {
          name: "Starter Retainer",
          audience: "For businesses that want to keep their site current and fast.",
          price: null,
          priceNote: "10 development hours per month",
          features: ["Monthly maintenance and updates", "Speed and security monitoring", "Monthly status report"],
          cta: "Ask about this plan",
        },
        growth: {
          name: "Growth Partner",
          audience: "For stores that develop continuously and are scaling sales.",
          price: null,
          priceNote: "30 development hours per month",
          badge: "Most popular",
          features: [
            "Dedicated development hours",
            "Monthly speed & SEO care",
            "Direct Slack / WhatsApp channel",
            "Product photo and UI support",
          ],
          cta: "Get a quote",
        },
        enterprise: {
          name: "Custom Enterprise",
          audience: "For companies building their own product that want a dedicated team.",
          price: "Let’s talk",
          priceNote: "A team dedicated to you",
          features: ["Web, mobile and automation projects", "Weekly planning and demos", "Priority emergency support"],
          cta: "Discuss the project",
        },
      },
    },
  },
  inquiryMessage: (tierName, modelLabel) => `I’d like details and pricing for ${tierName} (${modelLabel}).`,
  estimator: {
    eyebrow: "The math is simple",
    title: { lead: "How many credits", accent: "do you need?" },
    description: "Pick your monthly workload and see the package that fits right away.",
    taskCountLabel: "Tasks per month",
    sizeLabel: "Average task size",
    sizes: {
      small: { label: "Small", example: "CSS fix, copy or image change" },
      medium: { label: "Medium", example: "New section, speed improvement, integration setup" },
      large: { label: "Large", example: "Custom module, checkout flow, new page template" },
    },
    resultLabel: "Estimated monthly need",
    unit: "credits",
    recommendationLabel: "Recommended package",
    cta: "Get a quote for this workload",
    disclaimer: "This estimate is for guidance only; the exact credit cost is set once we see the task scope.",
    inquiryMessage: (taskCount, sizeLabel, credits) =>
      `I have roughly ${taskCount} ${sizeLabel.toLowerCase()} tasks per month (about ${credits} credits). I’d like a quote for a suitable package.`,
  },
};

const creditSystem: FaqItem = {
  question: "How does the task-credit system work?",
  answer:
    "You buy a credit pack and open tasks as you need them. We tell you the credit cost of each task before starting; we begin once you approve and deduct the credits when the work is complete.",
};

const modelDifference: FaqItem = {
  question: "What’s the difference between a credit pack and a monthly retainer?",
  answer:
    "A credit pack suits occasional work and needs no monthly commitment. A monthly partner retainer gives you development hours reserved for you every month, regular care and a priority communication channel.",
};

export const faq: { general: FaqItem[]; pricing: FaqItem[] } = {
  general: [
    creditSystem,
    modelDifference,
    {
      question: "Are the free audit and first fix really free?",
      answer:
        "Yes. We analyze your site and fix the first minor UI or speed issue we find for free. You’re under no obligation to continue.",
    },
    {
      question: "Which platforms and technologies do you work with?",
      answer:
        "ikas, Ticimax and WooCommerce for e-commerce; Next.js and Headless CMS for web; React Native and Expo for mobile; Vercel and Cloudflare for infrastructure.",
    },
    {
      question: "Where are you based?",
      answer:
        "We are based in Istanbul. We can meet businesses in Istanbul in person and serve clients across Türkiye remotely.",
    },
    {
      question: "How long does a task take?",
      answer:
        "It depends on the scope of the task. We share the estimated delivery time together with the credit cost before starting.",
    },
    {
      question: "How will I communicate with you?",
      answer:
        "You message the developer doing your work directly, with no project-manager queue in between. Growth Partner packages include a dedicated Slack or WhatsApp channel.",
    },
  ],
  pricing: [
    creditSystem,
    modelDifference,
    {
      question: "Why aren’t package prices listed on the site?",
      answer:
        "We finalize package prices based on your needs and the platform you use. Fill in the form and we’ll send you the current price list and the package that fits.",
    },
    {
      question: "Do unused credits expire?",
      answer: "Credits have a validity period that depends on your package. The periods are shown on the package cards.",
    },
    {
      question: "Can I change my package later?",
      answer: "Yes. You can upgrade your package or switch models as your needs change.",
    },
  ],
};
