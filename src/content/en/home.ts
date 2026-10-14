import type { HomeContent } from "@/content/types";

export const home: HomeContent = {
  hero: {
    badge: "Stop paying $200+/hr to platforms & legacy agencies",
    title: {
      lead: "E‑commerce engineering, growth & operations in one team.",
      accent: "Without the frightening hourly rates.",
    },
    description:
      "Custom ikas / Ticimax development, 1-second PageSpeed overhauls, mobile apps and AI automations; plus marketplace management, ad campaigns, product visuals and profitability reporting. Agency-grade quality on accessible subscription and credit models.",
    primaryCta: "Get a free site audit & fix",
    secondaryCta: "Explore solutions & pricing",
    assurances: ["No lock-ins", "First minor fix is free", "Direct developer access"],
  },
  performance: {
    eyebrow: "Illustrative scenario / Mobile performance",
    title: "Mobile performance",
    states: [
      {
        id: "before",
        label: "Before",
        caption: "Stock theme, unoptimized store",
        score: 38,
        metrics: [
          { label: "Load time", value: "4.8 s", ratio: 0.96 },
          { label: "Largest content (LCP)", value: "5.2 s", ratio: 0.9 },
          { label: "Blocking time (TBT)", value: "890 ms", ratio: 0.82 },
          { label: "Page weight", value: "6.4 MB", ratio: 0.88 },
        ],
      },
      {
        id: "after",
        label: "After",
        caption: "After the speed and UI overhaul",
        score: 98,
        metrics: [
          { label: "Load time", value: "0.9 s", ratio: 0.18 },
          { label: "Largest content (LCP)", value: "1.1 s", ratio: 0.2 },
          { label: "Blocking time (TBT)", value: "40 ms", ratio: 0.06 },
          { label: "Page weight", value: "1.2 MB", ratio: 0.19 },
        ],
      },
    ],
  },
  platformsLabel: "Technologies we specialize in",
  comparison: {
    eyebrow: "The old playbook is broken",
    title: { lead: "Big agency quality.", accent: "Without the bloat." },
    paragraphs: [
      "Most platforms sell you a queue. Most agencies sell you hours. We sell you results.",
      "You shouldn’t have to wait weeks for a minor CSS fix or watch hourly invoices pile up.",
    ],
    link: "See how we work",
    oldWay: {
      label: "The old way",
      items: [
        "$200/hr platform developer fees",
        "3-week waiting lists for minor CSS fixes",
        "Clunky themes, slow responses",
        "An invoice for every conversation",
      ],
    },
    newWay: {
      label: "Our way",
      items: [
        "Instant task-credit system",
        "24/7 direct developer access",
        "1-second load times",
        "Transparent flat-rate or credit packages",
      ],
    },
    advantages: [
      {
        title: "One-stop solution",
        text: "You get software, design, ads and operations from one team, with no coordination across separate agencies.",
        icon: "gem",
      },
      {
        title: "Tailored to your business",
        text: "Every business is different, so we build the solution that fits you instead of a ready-made mold.",
        icon: "users",
      },
      {
        title: "Data-driven management",
        text: "We base decisions on data and measure and report the impact of our work.",
        icon: "chart",
      },
      {
        title: "Ongoing technical support",
        text: "We stay with you after the project ends; you reach us directly for maintenance and emergencies.",
        icon: "headset",
      },
    ],
  },
  services: {
    eyebrow: "The unfair advantage",
    title: { lead: "Everything you need", accent: "to move faster." },
    description:
      "From software to ads, from visuals to reporting: every service your digital transformation needs, in one expert team.",
    cta: "View all services",
    tile: {
      title: "Can’t find the service you need?",
      text: "Tell us what you need and we’ll shape the right solution together.",
      cta: "Get in touch",
    },
  },
  products: {
    eyebrow: "Our software products",
    title: { lead: "Ready-made solutions,", accent: "more efficient operations." },
    description: "Our ready and scalable software products make day-to-day operations easier for your business.",
    cta: "All software products",
  },
  projects: {
    eyebrow: "References",
    title: { lead: "Projects we’ve", accent: "brought to life." },
    description: "From healthcare to finance, e-commerce to logistics: a selection of the projects we’ve built.",
    cta: "View all references",
  },
  process: {
    eyebrow: "How we work",
    title: { lead: "From task to launch,", accent: "four clear steps." },
    steps: [
      { title: "Audit", text: "We review your site and surface the bottlenecks and quickest wins.", icon: "search" },
      {
        title: "Task",
        text: "We turn the need into a clear task and tell you its credit or hour cost upfront.",
        icon: "list",
      },
      { title: "Build", text: "You talk directly to the developer and see progress as it happens.", icon: "code" },
      { title: "Launch & measure", text: "We ship the change and report its impact in numbers.", icon: "rocket" },
    ],
  },
  pricing: {
    eyebrow: "Simple by design",
    title: { lead: "Pick the model", accent: "that fits you." },
    description: "No hourly invoice surprises. Buy credits as you need them or become a monthly partner.",
    cta: "See the credit estimator and full details",
  },
  audit: {
    eyebrow: "Start with a win",
    title: { lead: "Let’s measure", accent: "your site speed." },
    description:
      "Drop your URL. We analyze your site’s bottlenecks and fix your first minor UI or speed issue completely free to prove our speed.",
    inputLabel: "Your e-commerce or website URL",
    inputPlaceholder: "https://yourstore.com",
    submitLabel: "Get my free analysis",
    loadingLabel: "Analyzing",
    loadingSteps: ["Loading the page on mobile and desktop", "Measuring Core Web Vitals", "Ranking the bottlenecks"],
    note: "Free, useful, and no sales ambush.",
    invalidUrlMessage: "Please enter a valid website address.",
    unavailableTitle: "The automated measurement couldn’t complete right now",
    unavailableText: "Leave us your URL and we’ll review your site by hand and send you the report.",
    resultTitle: "Measurement result",
    resultSource: "Source: Google PageSpeed Insights",
    strategyLabel: "Device",
    strategies: { mobile: "Mobile", desktop: "Desktop" },
    strategyUnavailable: "not measured",
    issuesTitle: "Values below the critical threshold",
    causesLabel: "Found on this site",
    explanations: {
      performance:
        "The performance score is a weighted average of loading, responsiveness and visual stability metrics. A low score usually comes from heavy JavaScript, unoptimized images and slow server responses.",
      seo: "Search engines struggle to crawl and understand the page. The usual sources are missing title and description tags, links that can’t be crawled, or settings that block indexing.",
      accessibility:
        "Visitors using a screen reader or keyboard can’t use parts of the page. The usual sources are low color contrast, unlabeled links and buttons, and a broken heading order.",
      "best-practices":
        "The page falls behind current web standards and security practices. The usual sources are console errors, third-party cookies, insecure requests or outdated libraries.",
      "largest-contentful-paint":
        "The largest image or text block shows up late, so visitors perceive the page as not loaded. The usual sources are large hero images, render-blocking CSS and JavaScript, and slow server responses.",
      "first-contentful-paint":
        "The first content arrives late, so visitors stare at a blank page. The usual sources are slow server responses, redirects, and render-blocking CSS and fonts.",
      "total-blocking-time":
        "Even once the page is visible, it responds late to taps and clicks. The source is heavy JavaScript locking up the browser, mostly third-party plugins, tracking scripts and large bundles.",
      "cumulative-layout-shift":
        "Elements move around while the page loads, so visitors can tap the wrong thing. The usual sources are images without dimensions, late-injected banners and late-loading fonts.",
      "speed-index":
        "The visible area fills in slowly and content arrives piece by piece. The usual sources are render-blocking files, heavy JavaScript and late-loading images.",
    },
    opportunitiesTitle: "Top improvement opportunities",
    report: {
      title: "Email me the result",
      emailLabel: "Your email address",
      emailPlaceholder: "you@company.com",
      submitLabel: "Send the report",
      sendingLabel: "Sending…",
      successText: "The report is on its way to your inbox.",
      errorText: "The report couldn’t be sent. Please try again.",
      marketingLabel: "I’d like to receive improvement tips and offers for my site by email.",
      privacyNote: "Your email address is used to send you the report. ",
      subject: (host) => `Your site speed report for ${host}`,
      intro: "Your site’s mobile and desktop measurement results are below.",
      cta: "Contact us for a free first fix",
      footer: "You received this email because you asked for your speed measurement result on our website.",
    },
    resultCta: "Detailed report & free first fix",
    retryLabel: "Try another URL",
    categories: {
      performance: "Performance",
      seo: "SEO",
      accessibility: "Accessibility",
      "best-practices": "Best practices",
    },
    metrics: {
      "largest-contentful-paint": "Largest Contentful Paint",
      "first-contentful-paint": "First Contentful Paint",
      "total-blocking-time": "Total Blocking Time",
      "cumulative-layout-shift": "Cumulative Layout Shift",
      "speed-index": "Speed Index",
    },
  },
  faq: {
    eyebrow: "Good to know",
    title: { lead: "Frequently asked", accent: "questions." },
  },
  closingCta: {
    title: { lead: "Let’s talk about", accent: "your project." },
    description: "Tell us what you need and we’ll come back with a clear quote covering scope, timeline and cost.",
    primaryCta: "Get a quote",
    secondaryCta: "Request a free audit",
  },
};
