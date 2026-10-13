import type { PagesContent } from "@/content/types";

export const pages: PagesContent = {
  services: {
    meta: {
      title: "Services",
      description:
        "E-commerce development, marketplace management, web design, mobile apps, automation, digital ads, SEO, product visuals, reporting and hosting from Istanbul-based Astra Yazılım.",
    },
    eyebrow: "Services",
    title: { lead: "Software solutions", accent: "that grow your business." },
    description:
      "From your storefront to the operations behind it, you get every layer from the same team at the same quality bar.",
  },
  serviceDetail: {
    featuresTitle: "What we do",
    deliverablesTitle: "What you get",
    faqTitle: "Frequently asked",
    otherServicesTitle: "Other services",
    primaryCta: "Get a quote for this service",
    secondaryCta: "View pricing",
  },
  products: {
    meta: {
      title: "Software Products",
      description:
        "Inventory tracking, supply management, deposit tracking and custom workflow solutions. Ready-made software products that make operations easier.",
    },
    eyebrow: "Our software products",
    title: { lead: "Ready-made solutions,", accent: "more efficient operations." },
    description:
      "Field-tested software products that can be adapted to your business. Start using them without waiting for a build from scratch.",
    cta: "Request a demo",
    inquiryMessage: (productName) => `I’d like a demo and more information about ${productName}.`,
    liveTitle: { lead: "Products we built", accent: "ourselves." },
    liveDescription: "Screens from products we designed and developed from scratch and adapt for businesses.",
    catalogTitle: { lead: "Ready-made solutions", accent: "adapted to your business." },
    catalogDescription: "Solutions we shape around your needs and put into use quickly.",
  },
  projects: {
    meta: {
      title: "References",
      description:
        "Astra Yazılım references: the websites, e-commerce stores, web and mobile apps we’ve built for our clients.",
    },
    eyebrow: "References",
    title: { lead: "Projects we’ve", accent: "brought to life." },
    description: "From healthcare to finance, e-commerce to logistics: the projects we’ve built for our clients.",
    visitLabel: "Visit project",
    previewLabel: "screenshot",
    filterLabel: "Filter by project type",
    allLabel: "All",
    platforms: {
      website: "Website",
      webApp: "Web app",
      desktop: "Desktop app",
      mobile: "Mobile app",
    },
  },
  templates: {
    meta: {
      title: "Ready-Made Designs",
      description:
        "A catalog of ready-made designs for your website. Pick the one you like and we’ll set it up on WordPress and adapt it to your brand.",
    },
    eyebrow: "Ready-made designs",
    title: { lead: "Pick the design,", accent: "we’ll build the rest." },
    description:
      "Choose a design that fits your industry; we set it up on WordPress and adapt colors, content and visuals to your brand.",
    searchLabel: "Search designs",
    searchPlaceholder: "Type an industry or design name…",
    categoryLabel: "Filter by category",
    allLabel: "All",
    featureLabel: "Filter by feature",
    features: { shop: "E-commerce", blog: "Blog", portfolio: "Portfolio", onePage: "One page" },
    categories: {},
    previewLabel: "Live preview",
    quoteLabel: "Get a quote with this design",
    inquiryMessage: (templateTitle) => `I’d like a quote for a website based on the "${templateTitle}" design.`,
    resultCount: (shown, total) => `Showing ${shown} of ${total} designs`,
    emptyText: "No designs match your search. Try a different word or category.",
    moreLabel: "Show more",
    sourceNote: (sourceName) => `Designs come from the ${sourceName} template library; setup and customization are done by Astra Yazılım.`,
  },
  pricing: {
    meta: {
      title: "Pricing",
      description:
        "Task-credit packs and a monthly partner retainer. Transparent software and e-commerce development pricing with no hourly invoice surprises.",
    },
    eyebrow: "Pricing",
    title: { lead: "Transparent packages,", accent: "no surprise invoices." },
    description:
      "Use on-demand task credits or become a monthly partner. Start with whichever model fits you.",
    faqTitle: "Pricing questions, answered",
  },
  audit: {
    meta: {
      title: "Free Site Audit",
      description:
        "Measure your site’s mobile speed and Core Web Vitals for free. We’ll fix your first minor speed or UI issue at no cost.",
    },
    stepsTitle: "How does the audit work?",
    steps: [
      { title: "Enter your URL", text: "We measure your site automatically under mobile conditions.", icon: "link" },
      {
        title: "See the results",
        text: "Performance score, Core Web Vitals and top improvement opportunities appear right away.",
        icon: "gauge",
      },
      {
        title: "First fix is on us",
        text: "Our team also reviews your site by hand and fixes the first minor issue for free.",
        icon: "sparkles",
      },
    ],
  },
  about: {
    meta: {
      title: "About",
      description:
        "Astra Yazılım is an Istanbul-based boutique engineering studio offering e-commerce and software engineering on accessible credit and subscription models.",
    },
    eyebrow: "About",
    title: { lead: "A boutique engineering studio.", accent: "An accessible model." },
    description:
      "We believe good engineering shouldn’t be something only big-budget companies can reach. That’s why we work on transparent credit and subscription models instead of hourly invoices.",
    storyTitle: "Why we built this model",
    story: [
      "Most e-commerce businesses face the same problem: paying a platform developer a high hourly rate for a small change, or waiting weeks in an agency’s queue.",
      "We break the work into small, clear tasks and state the cost of each one upfront. You know what you’ll pay and what you’ll get before we start.",
    ],
    principlesTitle: "How we work",
    principles: [
      { title: "Transparency", text: "The cost and timeline of every task are clear before work begins.", icon: "eye" },
      { title: "Speed", text: "Speed is a feature, both in your site’s load time and in our response time.", icon: "zap" },
      {
        title: "Direct communication",
        text: "You talk to the developer doing your work; no layers in between.",
        icon: "message",
      },
      { title: "Measurable results", text: "We show the impact of everything we do in numbers.", icon: "chart" },
    ],
  },
  contact: {
    meta: {
      title: "Contact & Quote",
      description:
        "Contact Istanbul-based Astra Yazılım. Get a clear quote for your software or e-commerce project covering scope, timeline and cost.",
    },
    eyebrow: "Contact",
    title: { lead: "Tell us about your project,", accent: "get a clear quote." },
    description: "Fill in the form and we’ll review your needs and share scope, timeline and cost.",
    channelsTitle: "Reach us directly",
    channelLabels: {
      email: "Email",
      phone: "Phone",
      whatsapp: "WhatsApp",
      location: "Location",
      hours: "Working hours",
    },
    nextTitle: "What happens next?",
    nextSteps: [
      "We review your request.",
      "We schedule a short call if needed.",
      "We send a quote covering scope, timeline and cost.",
    ],
  },
  privacy: {
    meta: {
      title: "Privacy Policy",
      description: "How your personal data is processed on the Astra Yazılım website.",
    },
    updatedAt: "2026-10-12",
    updatedLabel: "Last updated",
    sections: [
      {
        heading: "Data we collect",
        paragraphs: [
          "We process the name, email, phone, website address and message content you send us through the contact and audit forms.",
        ],
      },
      {
        heading: "How we use it",
        paragraphs: [
          "We use this data only to respond to your request, prepare a quote and carry out the audit you asked for.",
        ],
      },
      {
        heading: "Site audit",
        paragraphs: [
          "The website address you enter in the free audit tool is sent to Google PageSpeed Insights so the measurement can be performed.",
        ],
      },
      {
        heading: "Browser preferences",
        paragraphs: ["Your theme preference is stored only in your browser and is not sent to our servers."],
      },
      {
        heading: "Your rights",
        paragraphs: [
          "You can contact us to exercise your rights under Turkish Personal Data Protection Law No. 6698 (KVKK).",
        ],
      },
    ],
  },
  terms: {
    meta: {
      title: "Terms of Use",
      description: "The terms governing use of the Astra Yazılım website.",
    },
    updatedAt: "2026-10-12",
    updatedLabel: "Last updated",
    sections: [
      {
        heading: "Use of the site",
        paragraphs: ["The content on this site is for general information and does not constitute a binding offer."],
      },
      {
        heading: "Scope of services",
        paragraphs: [
          "The scope, duration and price of services are set by a separate written quote and agreement between the parties.",
        ],
      },
      {
        heading: "Audit tool and assistant",
        paragraphs: [
          "The free audit tool and site assistant are for information only; the results and answers they provide are not commitments.",
        ],
      },
      {
        heading: "Intellectual property",
        paragraphs: ["All rights to the design, text and visuals on the site are reserved."],
      },
    ],
  },
  notFound: {
    code: "404",
    title: "We couldn’t find that page.",
    description: "It may have moved, or it may never have existed.",
    cta: "Back to home",
  },
};
