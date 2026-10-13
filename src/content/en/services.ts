import type { ServiceId } from "@/config/services";
import type { ServiceText } from "@/content/types";

export const services: Record<ServiceId, ServiceText> = {
  ecommerce: {
    slug: "e-commerce-infrastructure-and-custom-development",
    title: "E-Commerce Infrastructure & Custom Development",
    shortTitle: "E-Commerce Development",
    summary:
      "Deep custom code for ikas, Ticimax and WooCommerce. Custom UI/UX, checkout optimization, CAPI/GTM setups and instant speed boosts.",
    description:
      "We start where the stock theme ends. Without touching your store’s core, we write custom code wherever the platform allows and measure and improve every step from cart to checkout.",
    tags: ["ikas", "Ticimax", "WooCommerce", "CAPI", "GTM", "Checkout"],
    features: [
      {
        title: "Deep platform-specific development",
        text: "We build the components your theme doesn’t offer from scratch, across the theme, script and API layers of ikas, Ticimax and WooCommerce.",
      },
      {
        title: "Checkout optimization",
        text: "We reduce friction in the cart and checkout flow based on data and build interfaces that win back abandoned carts.",
      },
      {
        title: "Measurement infrastructure",
        text: "We configure Meta CAPI, GA4 and GTM to run server-side and consistently.",
      },
      {
        title: "Instant speed boost",
        text: "We strip out image, script and third-party weight and move your store toward a 1-second load target.",
      },
    ],
    deliverables: [
      "Custom product, category and campaign components",
      "Cart and checkout flow improvements",
      "CAPI, GA4 and GTM setup and validation",
      "Speed and Core Web Vitals report",
    ],
    faqs: [
      {
        question: "Can you work without replacing my current theme?",
        answer:
          "Yes. In most projects we add custom components on top of your existing theme and rewrite only the sections that need it.",
      },
      {
        question: "Which e-commerce platforms do you work with?",
        answer:
          "We mainly work on ikas, Ticimax and WooCommerce. If you use a different platform, we’ll assess the scope together.",
      },
    ],
  },
  web: {
    slug: "web-design-and-high-speed-apps",
    title: "Web Design & High-Speed Apps",
    shortTitle: "Web Design",
    summary: "Next.js, modern CSS and Headless CMS. Zero lag, 100/100 Lighthouse scores.",
    description:
      "We build corporate sites, product landing pages and web apps that treat performance as part of the design.",
    tags: ["Next.js", "Headless CMS", "Lighthouse"],
    features: [
      {
        title: "Design made for you",
        text: "Not a template: original interfaces drawn for your brand that behave consistently on every screen size.",
      },
      {
        title: "Performance-first architecture",
        text: "Pages that open instantly thanks to server rendering, smart caching and optimized images.",
      },
      {
        title: "Easy content management",
        text: "With a Headless CMS your team publishes content without needing a developer.",
      },
    ],
    deliverables: [
      "Original UI design and design system",
      "Production-ready Next.js setup",
      "Headless CMS integration",
      "Lighthouse and accessibility report",
    ],
    faqs: [
      {
        question: "Can you migrate my existing site?",
        answer:
          "Yes. We move it to the new stack along with redirects, preserving your content and search visibility.",
      },
    ],
  },
  mobile: {
    slug: "cross-platform-mobile-apps",
    title: "Cross-Platform Mobile Apps",
    shortTitle: "Mobile Apps",
    summary: "React Native / Expo iOS and Android apps synced seamlessly with your store.",
    description:
      "We build apps that ship to both platforms from a single codebase and work in real time with your store’s product, stock and order data.",
    tags: ["React Native", "Expo", "iOS", "Android"],
    features: [
      {
        title: "One codebase, two platforms",
        text: "A single app with a native feel, without the cost of separate iOS and Android teams.",
      },
      {
        title: "Store sync",
        text: "Product, stock, cart and order data stay in sync with your e-commerce platform.",
      },
      {
        title: "Notification and loyalty flows",
        text: "Push notifications, campaign setups and flows that increase repeat purchases.",
      },
    ],
    deliverables: [
      "iOS and Android app",
      "App Store and Google Play release process",
      "Push notification infrastructure",
      "Update and maintenance plan",
    ],
    faqs: [
      {
        question: "Do you handle the app store release process?",
        answer: "Yes. We manage the App Store and Google Play release from account setup through review.",
      },
    ],
  },
  automation: {
    slug: "custom-software-and-ai-automations",
    title: "Custom Software & AI Automations",
    shortTitle: "Software & Automation",
    summary: "Internal dashboards, CRM/ERP integrations and automated workflows that eliminate manual work.",
    description:
      "We find the tasks your team repeats every day and hand them over to software. Your systems talk to each other while you focus on growth.",
    tags: ["Automation", "CRM/ERP", "AI", "Dashboards"],
    features: [
      {
        title: "Internal dashboards",
        text: "Custom admin panels that bring order, stock, finance and operations data onto one screen.",
      },
      {
        title: "Integrations",
        text: "Two-way data flow between your CRM, ERP, accounting, shipping and marketplace systems.",
      },
      {
        title: "AI-assisted workflows",
        text: "Automations that classify customer messages, generate content and prepare reports.",
      },
    ],
    deliverables: [
      "Needs analysis and process map",
      "Custom dashboard or integration service",
      "Automation scenarios and monitoring screen",
      "Documentation and team training",
    ],
    faqs: [
      {
        question: "Which processes are suitable for automation?",
        answer:
          "Any task with clear rules that repeats regularly: order transfer, stock sync, invoicing, reporting and routing customer messages, for example.",
      },
    ],
  },
  seo: {
    slug: "growth-and-technical-seo",
    title: "Growth & Technical SEO",
    shortTitle: "Technical SEO",
    summary: "Schema markup, conversion rate optimization (CRO) and search dominance.",
    description:
      "Growing traffic isn’t enough; visitors need to buy. We treat technical SEO and conversion optimization as one job.",
    tags: ["Schema", "CRO", "Core Web Vitals"],
    features: [
      {
        title: "Technical SEO audit",
        text: "We find and fix crawling, indexing, site architecture and Core Web Vitals issues.",
      },
      {
        title: "Structured data",
        text: "Rich results in search with product, review, FAQ and organization schemas.",
      },
      {
        title: "Conversion optimization",
        text: "We raise conversion rate measurably with A/B tests and behavior analysis.",
      },
    ],
    deliverables: [
      "Technical SEO audit report",
      "Schema markup setup",
      "CRO test plan and implementation",
      "Monthly performance report",
    ],
    faqs: [
      {
        question: "When does SEO work start showing results?",
        answer:
          "The effect of technical fixes usually becomes measurable within a few weeks; lasting ranking gains depend on the state of the site and the competition.",
      },
    ],
  },
  hosting: {
    slug: "cloud-hosting-and-24-7-care",
    title: "Cloud Hosting & 24/7 Care",
    shortTitle: "Hosting & Care",
    summary: "Vercel / Cloudflare setups, zero-downtime maintenance and instant emergency support.",
    description:
      "We stay with you after launch. We set up and monitor the infrastructure and step in when something goes wrong, before you notice.",
    tags: ["Vercel", "Cloudflare", "Monitoring"],
    features: [
      {
        title: "Modern cloud infrastructure",
        text: "Global delivery, caching and security layers on Vercel and Cloudflare.",
      },
      {
        title: "Zero-downtime maintenance",
        text: "Updates and releases happen without your visitors noticing anything.",
      },
      {
        title: "Emergency support",
        text: "For critical issues you reach the developer directly; no support queue in between.",
      },
    ],
    deliverables: [
      "Hosting and CDN setup",
      "Uptime and error monitoring",
      "Regular updates and backups",
      "Emergency support channel",
    ],
    faqs: [
      {
        question: "Do you migrate from my current hosting?",
        answer: "Yes. We migrate without downtime, preserving your domain and email settings.",
      },
    ],
  },
  marketplace: {
    slug: "e-commerce-and-marketplace-management",
    title: "E-Commerce & Marketplace Management",
    shortTitle: "Marketplace Management",
    summary: "Store setup, product management, sales operations and channel performance tracking.",
    description:
      "We manage your own store and your marketplace sales from one place. We take on daily operations from product entry to campaign tracking and report channel performance regularly.",
    tags: ["Marketplaces", "Catalog", "Operations"],
    features: [
      {
        title: "Store setup and product management",
        text: "We handle store launch, category structure, product content and price and stock updates.",
      },
      {
        title: "Sales operations",
        text: "We bring order to campaign participation, order processes and customer question follow-up.",
      },
      {
        title: "Channel performance tracking",
        text: "We track revenue, profitability and visibility for each sales channel side by side.",
      },
    ],
    deliverables: [
      "Store and marketplace account setup",
      "Product content and catalog management",
      "Campaign and price tracking",
      "Monthly channel performance report",
    ],
    faqs: [
      {
        question: "Which marketplaces do you manage?",
        answer:
          "We manage the marketplaces widely used in Türkiye as well as your own e-commerce store. We set the channel list together based on your needs.",
      },
    ],
  },
  ads: {
    slug: "digital-ads-and-campaign-management",
    title: "Digital Ads & Campaign Management",
    shortTitle: "Digital Ads",
    summary: "Google Ads, Meta ads, campaign setups, budget management and conversion optimization.",
    description:
      "We turn your ad budget into measurable sales. We set campaigns up on the right measurement foundation and optimize them continuously based on data.",
    tags: ["Google Ads", "Meta Ads", "Conversion"],
    features: [
      {
        title: "Campaign structure",
        text: "We plan audience, bidding strategy and ad structure around your product and your goal.",
      },
      {
        title: "Budget management",
        text: "We allocate budget by channel and campaign according to return and cut wasteful spend.",
      },
      {
        title: "Conversion optimization",
        text: "We set up conversion tracking correctly and improve the path from ad to sale step by step.",
      },
    ],
    deliverables: [
      "Google Ads and Meta ad account configuration",
      "Campaign and targeting plan",
      "Conversion tracking setup",
      "Regular performance report",
    ],
    faqs: [
      {
        question: "Is the ad budget included in the service fee?",
        answer:
          "No. The ad budget is paid directly to the ad platform; our fee covers setting up and managing the campaigns.",
      },
    ],
  },
  creative: {
    slug: "product-visuals-and-creative-content",
    title: "Product Visuals & Creative Content",
    shortTitle: "Visuals & Creative",
    summary: "Product photography, image refresh, banner design and digital creative content.",
    description:
      "We show your product on screen the way it deserves. We produce consistent, sales-focused visuals for your store, marketplace and ad channels.",
    tags: ["Product Images", "Banners", "Creative"],
    features: [
      {
        title: "Product visuals",
        text: "We shoot product photos or clean up and refresh the images you already have.",
      },
      {
        title: "Banner and campaign design",
        text: "We prepare eye-catching visuals for your home page, categories and campaign periods.",
      },
      {
        title: "Ad creatives",
        text: "We produce creative sets sized for social media and ad platforms.",
      },
    ],
    deliverables: [
      "Edited product images",
      "Banner and campaign visual set",
      "Ad creatives",
      "Brand-aligned visual templates",
    ],
    faqs: [
      {
        question: "Can you improve my existing product photos?",
        answer:
          "Yes. With background cleanup, color correction and resizing we bring your existing images up to store standards.",
      },
    ],
  },
  analytics: {
    slug: "data-analytics-and-reporting",
    title: "Data Analytics & Reporting",
    shortTitle: "Data & Reporting",
    summary: "We turn sales, cost, ad and profitability data into meaningful reports.",
    description:
      "We bring together data scattered across different systems. You base decisions on current, readable reports instead of guesswork.",
    tags: ["Reporting", "Dashboards", "Profitability"],
    features: [
      {
        title: "Data consolidation",
        text: "We gather store, marketplace, ad and accounting data into a single source.",
      },
      {
        title: "Management dashboards",
        text: "We build auto-updating dashboards that show sales, cost and profitability on one screen.",
      },
      {
        title: "Regular reporting",
        text: "Weekly and monthly reports show what is working and where you are losing money.",
      },
    ],
    deliverables: [
      "Integration of data sources",
      "Sales and profitability dashboard",
      "Ad and channel performance report",
      "Monthly review summary",
    ],
    faqs: [
      {
        question: "What data can you report on?",
        answer:
          "We can report on sales, orders, stock, ad spend, cost and profitability. The scope depends on the data your systems make available.",
      },
    ],
  },
};
