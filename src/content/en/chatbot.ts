import type { ChatbotContent } from "@/content/types";

export const chatbot: ChatbotContent = {
  title: "Astra Assistant",
  subtitle: "Quick answers to general questions",
  launcherLabel: "Open assistant",
  closeLabel: "Close assistant",
  inputPlaceholder: "Type your question…",
  sendLabel: "Send",
  greeting:
    "Hi! I can share short answers about our services, the credit system and the free audit. What would you like to know?",
  fallback:
    "I don’t have a ready answer for that. Our team can give you a clear one; just write to us through the contact form.",
  fallbackLink: { label: "Contact us", route: "contact" },
  disclaimer: "The assistant gives general information. Contact our team for quotes and details.",
  suggestions: [
    "What services do you offer?",
    "How does the credit system work?",
    "What is the free audit?",
    "How do I get a quote?",
  ],
  intents: [
    {
      id: "services",
      keywords: ["service", "what do you do", "offer", "solution", "software"],
      answer:
        "We work across e-commerce development and marketplace management, web design, mobile apps, custom software and automation, digital ads, technical SEO, product visuals, data reporting and hosting.",
      link: { label: "Explore services", route: "services" },
    },
    {
      id: "products",
      keywords: ["product", "inventory", "stock", "supply", "deposit", "workflow", "ready-made", "demo"],
      answer:
        "We have four ready-made software products: inventory tracking, supply management, deposit tracking and custom workflow solutions. All can be adapted to your business.",
      link: { label: "Explore software products", route: "products" },
    },
    {
      id: "projects",
      keywords: ["project", "portfolio", "reference", "case", "previous work", "examples"],
      answer: "You can find examples of the software, e-commerce and web projects we’ve built on the references page.",
      link: { label: "View references", route: "projects" },
    },
    {
      id: "ads",
      keywords: ["ads", "advertising", "google ads", "meta", "campaign", "instagram", "facebook"],
      answer: "We handle campaign structure, budget management and conversion optimization on Google Ads and Meta.",
      link: { label: "Digital ads service", route: "services", service: "ads" },
    },
    {
      id: "creative",
      keywords: ["visual", "photo", "banner", "creative", "image"],
      answer: "We produce product visuals, banner designs and ad creatives.",
      link: { label: "Visuals & creative service", route: "services", service: "creative" },
    },
    {
      id: "analytics",
      keywords: ["report", "data", "analytics", "profitability", "dashboard"],
      answer: "We bring your sales, cost, ad and profitability data into one dashboard and report on it regularly.",
      link: { label: "Data & reporting service", route: "services", service: "analytics" },
    },
    {
      id: "marketplace",
      keywords: ["marketplace", "trendyol", "hepsiburada", "amazon", "catalog", "store management"],
      answer:
        "We take on product management, sales operations and channel performance tracking for your own store and marketplaces.",
      link: { label: "Marketplace management", route: "services", service: "marketplace" },
    },
    {
      id: "credits",
      keywords: ["credit", "task", "pack", "package"],
      answer:
        "You buy a credit pack and open tasks as you need them. We tell you each task’s credit cost before starting, and credits are deducted when the work is done. There’s no monthly commitment.",
      link: { label: "See packages", route: "pricing" },
    },
    {
      id: "pricing",
      keywords: ["price", "pricing", "cost", "how much", "fee", "budget", "retainer", "monthly", "subscription"],
      answer:
        "We have two models: on-demand task credits and a monthly partner retainer. We send current prices in a clear quote based on your needs.",
      link: { label: "Go to pricing", route: "pricing" },
    },
    {
      id: "audit",
      keywords: ["audit", "free", "speed", "pagespeed", "slow", "performance", "lighthouse", "analysis"],
      answer:
        "Enter your site URL and we’ll measure mobile speed and UI bottlenecks. Our team also reviews the results by hand and walks you through the root causes in a free 15-minute call.",
      link: { label: "Get a free audit", route: "audit" },
    },
    {
      id: "platforms",
      keywords: ["ikas", "ticimax", "woocommerce", "shopify", "platform", "e-commerce", "ecommerce", "store", "shop"],
      answer:
        "For e-commerce we mainly do custom development on ikas, Ticimax and WooCommerce. If you’re on a different platform, we’ll assess the scope together.",
      link: { label: "E-commerce service", route: "services", service: "ecommerce" },
    },
    {
      id: "mobile",
      keywords: ["mobile", "app", "ios", "android", "react native", "expo"],
      answer:
        "We build iOS and Android apps from a single codebase with React Native and Expo. The app stays in sync with your store’s product and order data.",
      link: { label: "Mobile app service", route: "services", service: "mobile" },
    },
    {
      id: "automation",
      keywords: ["automation", "automate", "artificial intelligence", "ai", "crm", "erp", "integration", "dashboard", "excel", "rpa", "macro", "robot", "data entry"],
      answer:
        "We build internal dashboards, CRM/ERP integrations, Excel and RPA automations, and AI-assisted workflows that cut down repetitive work.",
      link: { label: "Automation service", route: "services", service: "automation" },
    },
    {
      id: "seo",
      keywords: ["seo", "google", "ranking", "schema", "conversion", "cro"],
      answer:
        "We do technical SEO audits, schema markup and conversion rate optimization, aiming for sales as well as traffic.",
      link: { label: "Technical SEO service", route: "services", service: "seo" },
    },
    {
      id: "hosting",
      keywords: ["hosting", "server", "maintenance", "support", "vercel", "cloudflare", "emergency"],
      answer: "We provide Vercel and Cloudflare setup, regular maintenance and emergency support for critical issues.",
      link: { label: "Hosting & care", route: "services", service: "hosting" },
    },
    {
      id: "duration",
      keywords: ["how long", "when", "days", "delivery", "timeline", "deadline"],
      answer:
        "It depends on the scope of the task. We share the estimated delivery time together with the credit cost before starting.",
    },
    {
      id: "contact",
      keywords: ["quote", "contact", "reach", "phone", "email", "mail", "whatsapp", "call", "meeting"],
      answer:
        "Just fill in the contact form. We review your needs and come back with a clear quote covering scope, timeline and cost.",
      link: { label: "Get a quote", route: "contact" },
    },
    {
      id: "greeting",
      keywords: ["hello", "hi", "hey", "good morning"],
      answer: "Hi! Feel free to ask about services, pricing or the free audit.",
    },
    {
      id: "thanks",
      keywords: ["thanks", "thank you", "cheers"],
      answer: "You’re welcome! I’m here if you have another question.",
    },
  ],
};
