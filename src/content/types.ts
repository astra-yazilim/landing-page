import type { IconName } from "@/components/ui/Icon/Icon";
import type { PricingModelId, PricingTierId, TaskSizeId } from "@/config/pricing";
import type { PageRouteId, RouteId } from "@/config/routes";
import type { ProductId } from "@/config/products";
import type { ProjectId, ProjectPlatform } from "@/config/projects";
import type { ServiceId } from "@/config/services";
import type { AuditCategoryId, AuditMetricId, AuditStrategy } from "@/lib/audit";
import type {
  DeveloperAvailabilityId,
  DeveloperExperienceId,
  DeveloperSkillId,
  DeveloperWorkModelId,
} from "@/config/developers";
import type { DeveloperValidationKey } from "@/lib/developers";

export type TemplateFeature = "shop" | "blog" | "portfolio" | "onePage";

export type Title = { lead: string; accent?: string };

export type FaqItem = { question: string; answer: string };

export type IconStep = { title: string; text: string; icon: IconName };

export type LegalSection = { heading: string; paragraphs: string[] };

export type PageMeta = { title: string; description: string };

export type ServiceText = {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  description: string;
  tags: string[];
  features: { title: string; text: string }[];
  deliverables: string[];
  faqs: FaqItem[];
};

export type PerformanceState = {
  id: "before" | "after";
  label: string;
  caption: string;
  score: number;
  metrics: { label: string; value: string; ratio: number }[];
};

export type PricingTierText = {
  name: string;
  audience: string;
  price: string | null;
  priceNote: string;
  badge?: string;
  features: string[];
  cta: string;
};

export type ProductText = {
  name: string;
  tagline: string;
  description: string;
  features: string[];
};

export type ProjectText = {
  title: string;
  category: string;
  summary: string;
};

export type ChatLink = { label: string; route: RouteId; service?: ServiceId };

export type ChatIntent = { id: string; keywords: string[]; answer: string; link?: ChatLink };

export type SiteContent = {
  title: string;
  tagline: string;
  description: string;
  keywords: string[];
  city: string;
  region: string;
  workingHours: string;
  seo: {
    serviceTitle: (shortTitle: string) => string;
    locationNote: string;
    areaServed: string[];
  };
  llms: {
    facts: string[];
    guidanceTitle: string;
    guidance: string[];
    pagesTitle: string;
    servicesTitle: string;
    productsTitle: string;
    otherLanguageTitle: string;
    optionalTitle: string;
    fullTitle: string;
    featuresLabel: string;
    faqTitle: string;
    pricingTitle: string;
    contactLabel: string;
  };
  availability: { open: string; closed: string };
};

export type LayoutContent = {
  nav: Record<RouteId, string>;
  header: {
    cta: string;
    developerCta: string;
    openMenu: string;
    closeMenu: string;
    navLabel: string;
    mobileNavLabel: string;
  };
  footer: { pagesTitle: string; servicesTitle: string; legalLabel: string; rights: string; cta: string };
  common: {
    breadcrumbLabel: string;
    closeLabel: string;
    skipToContent: string;
    learnMore: string;
  };
  theme: { switchToLight: string; switchToDark: string };
  cookies: {
    label: string;
    message: string;
    policyLink: string;
    accept: string;
    reject: string;
    settings: string;
  };
  language: { label: string };
};

export type FormsContent = {
  modalTitle: string;
  modalDescription: string;
  fields: Record<"name" | "email" | "phone" | "website" | "service" | "message", { label: string; placeholder: string }>;
  trapLabel: string;
  auditOption: string;
  otherOption: string;
  consent: { before: string; linkLabel: string };
  submitLabel: string;
  submittingLabel: string;
  successTitle: string;
  successText: string;
  errorText: string;
  validation: Record<"name" | "email" | "message" | "consent", string>;
};

export type HomeContent = {
  hero: {
    badge: string;
    title: Title;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    assurances: string[];
  };
  performance: { eyebrow: string; title: string; states: PerformanceState[] };
  platformsLabel: string;
  platforms: string[];
  comparison: {
    eyebrow: string;
    title: Title;
    paragraphs: string[];
    link: string;
    oldWay: { label: string; items: string[] };
    newWay: { label: string; items: string[] };
    advantages: IconStep[];
  };
  services: {
    eyebrow: string;
    title: Title;
    description: string;
    cta: string;
    tile: { title: string; text: string; cta: string };
  };
  products: { eyebrow: string; title: Title; description: string; cta: string };
  projects: { eyebrow: string; title: Title; description: string; cta: string };
  process: { eyebrow: string; title: Title; steps: IconStep[] };
  pricing: { eyebrow: string; title: Title; description: string; cta: string };
  audit: {
    eyebrow: string;
    title: Title;
    description: string;
    inputLabel: string;
    inputPlaceholder: string;
    submitLabel: string;
    loadingLabel: string;
    loadingSteps: string[];
    note: string;
    invalidUrlMessage: string;
    unavailableTitle: string;
    unavailableText: string;
    resultTitle: string;
    resultSource: string;
    strategyLabel: string;
    strategies: Record<AuditStrategy, string>;
    strategyUnavailable: string;
    issuesTitle: string;
    causesLabel: string;
    explanations: Record<AuditCategoryId | AuditMetricId, string>;
    opportunitiesTitle: string;
    report: {
      title: string;
      emailLabel: string;
      emailPlaceholder: string;
      submitLabel: string;
      sendingLabel: string;
      successText: string;
      errorText: string;
      marketingLabel: string;
      privacyNote: string;
      subject: (host: string) => string;
      intro: string;
      cta: string;
      footer: string;
    };
    resultCta: string;
    retryLabel: string;
    categories: Record<"performance" | "seo" | "accessibility" | "best-practices", string>;
    metrics: Record<
      | "largest-contentful-paint"
      | "first-contentful-paint"
      | "total-blocking-time"
      | "cumulative-layout-shift"
      | "speed-index",
      string
    >;
  };
  faq: { eyebrow: string; title: Title };
  closingCta: { title: Title; description: string; primaryCta: string; secondaryCta: string };
};

export type PricingContent = {
  tabsLabel: string;
  fallbackPrice: string;
  models: Record<PricingModelId, { label: string; description: string; tiers: Record<PricingTierId, PricingTierText> }>;
  inquiryMessage: (tierName: string, modelLabel: string) => string;
  estimator: {
    eyebrow: string;
    title: Title;
    description: string;
    taskCountLabel: string;
    sizeLabel: string;
    sizes: Record<TaskSizeId, { label: string; example: string }>;
    resultLabel: string;
    unit: string;
    recommendationLabel: string;
    cta: string;
    disclaimer: string;
    inquiryMessage: (taskCount: number, sizeLabel: string, credits: number) => string;
  };
};

export type ChatbotContent = {
  title: string;
  subtitle: string;
  launcherLabel: string;
  closeLabel: string;
  inputPlaceholder: string;
  sendLabel: string;
  greeting: string;
  fallback: string;
  fallbackLink: ChatLink;
  disclaimer: string;
  suggestions: string[];
  intents: ChatIntent[];
};

type FieldText = { label: string; placeholder: string };

type ConsentText = { before: string; linkLabel: string; after: string };

export type DeveloperFormContent = {
  title: string;
  description: string;
  groups: Record<"personal" | "profile" | "work" | "consent", string>;
  fields: Record<
    | "name"
    | "email"
    | "phone"
    | "location"
    | "title"
    | "experience"
    | "linkedin"
    | "github"
    | "portfolio"
    | "otherSkills"
    | "availability"
    | "rate"
    | "about",
    FieldText
  >;
  skillsLabel: string;
  skills: Record<DeveloperSkillId, string>;
  experience: Record<DeveloperExperienceId, string>;
  workModelsLabel: string;
  workModels: Record<DeveloperWorkModelId, string>;
  availability: Record<DeveloperAvailabilityId, string>;
  cv: { label: string; hint: string };
  privacyConsent: ConsentText;
  agreementConsent: ConsentText;
  submitLabel: string;
  submittingLabel: string;
  successTitle: string;
  successText: string;
  errorText: string;
  validation: Record<DeveloperValidationKey, string>;
  email: {
    applicantSubject: string;
    applicantGreeting: (name: string) => string;
    applicantText: string;
    agreementLink: string;
    teamSubject: (name: string, title: string) => string;
    teamCvNote: string;
  };
};

export type PagesContent = {
  services: { meta: PageMeta; eyebrow: string; title: Title; description: string };
  serviceDetail: {
    featuresTitle: string;
    deliverablesTitle: string;
    faqTitle: string;
    otherServicesTitle: string;
    primaryCta: string;
    secondaryCta: string;
  };
  products: {
    meta: PageMeta;
    eyebrow: string;
    title: Title;
    description: string;
    cta: string;
    inquiryMessage: (productName: string) => string;
    liveTitle: Title;
    liveDescription: string;
    catalogTitle: Title;
    catalogDescription: string;
  };
  projects: {
    meta: PageMeta;
    eyebrow: string;
    title: Title;
    description: string;
    visitLabel: string;
    previewLabel: string;
    filterLabel: string;
    allLabel: string;
    platforms: Record<ProjectPlatform, string>;
  };
  templates: {
    meta: PageMeta;
    eyebrow: string;
    title: Title;
    description: string;
    searchLabel: string;
    searchPlaceholder: string;
    categoryLabel: string;
    allLabel: string;
    featureLabel: string;
    features: Record<TemplateFeature, string>;
    categories: Record<string, string>;
    previewLabel: string;
    quoteLabel: string;
    inquiryMessage: (templateTitle: string) => string;
    resultCount: (shown: number, total: number) => string;
    emptyText: string;
    moreLabel: string;
    sourceNote: (sourceName: string) => string;
  };
  pricing: { meta: PageMeta; eyebrow: string; title: Title; description: string; faqTitle: string };
  developers: {
    meta: PageMeta;
    eyebrow: string;
    title: Title;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    stepsTitle: string;
    steps: IconStep[];
    modelsTitle: string;
    models: IconStep[];
    benefitsTitle: string;
    benefits: IconStep[];
    faqTitle: string;
    faq: FaqItem[];
    form: DeveloperFormContent;
  };
  developerAgreement: { meta: PageMeta; updatedAt: string; updatedLabel: string; sections: LegalSection[] };
  audit: { meta: PageMeta; stepsTitle: string; steps: IconStep[] };
  about: {
    meta: PageMeta;
    eyebrow: string;
    title: Title;
    description: string;
    storyTitle: string;
    story: string[];
    principlesTitle: string;
    principles: IconStep[];
  };
  contact: {
    meta: PageMeta;
    eyebrow: string;
    title: Title;
    description: string;
    channelsTitle: string;
    channelLabels: Record<"email" | "phone" | "whatsapp" | "location" | "hours", string>;
    nextTitle: string;
    nextSteps: string[];
  };
  privacy: { meta: PageMeta; updatedAt: string; updatedLabel: string; sections: LegalSection[] };
  terms: { meta: PageMeta; updatedAt: string; updatedLabel: string; sections: LegalSection[] };
  notFound: { code: string; title: string; description: string; cta: string };
};

export type Content = {
  site: SiteContent;
  layout: LayoutContent;
  forms: FormsContent;
  home: HomeContent;
  services: Record<ServiceId, ServiceText>;
  products: Record<ProductId, ProductText>;
  projects: Record<ProjectId, ProjectText>;
  pricing: PricingContent;
  faq: { general: FaqItem[]; pricing: FaqItem[] };
  chatbot: ChatbotContent;
  pages: PagesContent;
};

export type PageRouteLabels = Record<PageRouteId, string>;
