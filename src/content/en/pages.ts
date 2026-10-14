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
  developers: {
    meta: {
      title: "Become a Developer",
      description:
        "Join the Astra Developer Network: we assign ikas, Ticimax and custom software work that matches your skills.",
    },
    eyebrow: "Astra Developer Network",
    title: { lead: "You write the code,", accent: "we find the work." },
    description:
      "We assign SMBs’ ikas, Ticimax, Shopify and custom software requests to developers whose skills fit. Apply, pass our review and work as an Astra Verified Developer on per-task, weekly or monthly engagements.",
    primaryCta: "Apply now",
    secondaryCta: "Read the framework agreement",
    stepsTitle: "How it works",
    steps: [
      {
        title: "Apply",
        text: "Share your LinkedIn, GitHub, CV and skills. The form takes about 5 minutes.",
        icon: "send",
      },
      {
        title: "Review",
        text: "We review your profile and projects, and hold a short technical call if needed.",
        icon: "search",
      },
      {
        title: "Verified badge",
        text: "Once approved, you become an Astra Verified Developer and the framework agreement takes effect.",
        icon: "badgeCheck",
      },
      {
        title: "Assignments",
        text: "When a request matches your skills, we offer it to you with scope, timeline and fee; you start once you accept.",
        icon: "briefcase",
      },
    ],
    modelsTitle: "Engagement models",
    models: [
      {
        title: "Per task",
        text: "One-off jobs such as bug fixes, theme work or integrations. Effort and fee are set upfront and paid on delivery.",
        icon: "zap",
      },
      {
        title: "Weekly",
        text: "You take over a client’s requests and open tickets for a given week.",
        icon: "calendar",
      },
      {
        title: "Monthly",
        text: "You give part-time or full-time monthly support to an SMB that needs a developer on an ongoing basis.",
        icon: "clock",
      },
    ],
    benefitsTitle: "What’s in it for you",
    benefits: [
      {
        title: "No client hunting",
        text: "We handle sales, quotes and client communication; you focus on the work.",
        icon: "handshake",
      },
      {
        title: "Clear fees, paid on time",
        text: "The fee is fixed before work starts and paid once delivery is approved.",
        icon: "wallet",
      },
      {
        title: "Flexible work",
        text: "You decide which work to take and can update your availability at any time.",
        icon: "workflow",
      },
      {
        title: "Visible expertise",
        text: "Use the Astra Verified Developer badge on your LinkedIn and GitHub profiles.",
        icon: "badgeCheck",
      },
    ],
    faqTitle: "Good to know",
    faq: [
      {
        question: "Who can apply?",
        answer:
          "Anyone with real project experience on e-commerce platforms such as ikas, Ticimax or Shopify, or in web, mobile, backend, AI and automation work. Freelancers, job seekers and full-time employees looking for extra income are all welcome.",
      },
      {
        question: "Does applying cost anything?",
        answer: "No. Applying, the review and the badge are completely free.",
      },
      {
        question: "Will I sign a new contract for every job?",
        answer:
          "No. Confidentiality and client-system access rules are in the framework agreement you accept when applying. For each job you only accept an assignment notice showing scope, timeline and fee.",
      },
      {
        question: "How soon do you reply?",
        answer: "We usually review applications and reply by email within 5 business days.",
      },
      {
        question: "How do I get paid?",
        answer:
          "Payments are made after delivery is approved, against a legally valid invoice or receipt. If you don’t have a company, we’ll agree on a suitable method together.",
      },
    ],
    form: {
      title: "Application form",
      description: "Fields marked * are required.",
      groups: {
        personal: "Personal details",
        profile: "Profile and skills",
        work: "Work preferences",
        consent: "Consents",
      },
      fields: {
        name: { label: "Full name *", placeholder: "Your full name" },
        email: { label: "Email *", placeholder: "you@mail.com" },
        phone: { label: "Phone *", placeholder: "+90 5xx xxx xx xx" },
        location: { label: "City", placeholder: "Istanbul" },
        title: { label: "Title *", placeholder: "e.g. Senior Frontend Developer" },
        experience: { label: "Experience *", placeholder: "Select" },
        linkedin: { label: "LinkedIn profile *", placeholder: "linkedin.com/in/username" },
        github: { label: "GitHub profile", placeholder: "github.com/username" },
        portfolio: { label: "Portfolio or personal site", placeholder: "example.com" },
        otherSkills: { label: "Other technologies you use", placeholder: "e.g. Vue, Laravel, PostgreSQL, Figma" },
        availability: { label: "Weekly availability *", placeholder: "Select" },
        rate: { label: "Expected rate", placeholder: "e.g. 750 TRY per hour or 40,000 TRY per month" },
        about: { label: "Tell us about yourself and your highlight projects", placeholder: "A short summary is enough" },
      },
      skillsLabel: "Areas of expertise *",
      skills: {
        ikas: "ikas",
        ticimax: "Ticimax",
        shopify: "Shopify",
        woocommerce: "WooCommerce",
        marketplace: "Marketplace integrations",
        frontend: "Frontend (React, Next.js)",
        backend: "Backend (Node.js, APIs)",
        mobile: "Mobile (React Native)",
        ai: "AI and automation",
        uiux: "UI/UX design",
        seo: "SEO and performance",
        devops: "DevOps and cloud",
      },
      experience: {
        "0-1": "Less than 1 year",
        "1-3": "1–3 years",
        "3-5": "3–5 years",
        "5-8": "5–8 years",
        "8+": "More than 8 years",
      },
      workModelsLabel: "Engagement models you’re interested in *",
      workModels: { task: "Per task", weekly: "Weekly", monthly: "Monthly" },
      availability: {
        lt10: "Less than 10 hours",
        "10-20": "10–20 hours",
        "20-40": "20–40 hours",
        "40+": "Full time (40+ hours)",
      },
      cv: { label: "CV *", hint: "PDF, DOC or DOCX · up to 3 MB" },
      privacyConsent: {
        before: "I have read the developer application notice in the ",
        linkLabel: "Privacy Policy",
        after: ".",
      },
      agreementConsent: {
        before: "I have read and accept the ",
        linkLabel: "Astra Developer Network Framework Agreement",
        after: ". It takes effect once my application is approved.",
      },
      submitLabel: "Submit application",
      submittingLabel: "Submitting…",
      successTitle: "Your application is in",
      successText: "We’ll review your profile and get back to you by email. We’ve also sent you a confirmation email.",
      errorText: "Your application couldn’t be sent. Please try again or email us.",
      validation: {
        name: "Please enter your name.",
        email: "Please enter a valid email address.",
        phone: "Please enter your phone number.",
        title: "Please enter your title.",
        experience: "Please select your experience.",
        skills: "Select at least one area of expertise.",
        linkedin: "Please enter a valid LinkedIn profile URL.",
        github: "Please enter a valid GitHub profile URL.",
        portfolio: "Please enter a valid URL.",
        cv: "Please upload your CV.",
        cvType: "Your CV must be a PDF, DOC or DOCX file.",
        cvSize: "Your CV can be up to 3 MB.",
        workModels: "Select at least one engagement model.",
        availability: "Please select your availability.",
        privacy: "Please confirm you’ve read the privacy notice to continue.",
        agreement: "Please accept the framework agreement to continue.",
      },
      email: {
        applicantSubject: "We received your Astra Developer Network application",
        applicantGreeting: (name) => `Hi ${name}, your application is in.`,
        applicantText:
          "We usually review applications and reply by email within 5 business days. You can always find the framework agreement you accepted at the link below.",
        agreementLink: "View the framework agreement",
        teamSubject: (name, title) => `New developer application: ${name} – ${title}`,
        teamCvNote: "The CV is attached to this email.",
      },
    },
  },
  developerAgreement: {
    meta: {
      title: "Astra Developer Network Framework Agreement",
      description:
        "Working, confidentiality and client-system access terms for developers joining the Astra Developer Network.",
    },
    updatedAt: "2026-10-14",
    updatedLabel: "Last updated",
    sections: [
      {
        heading: "1. Parties and purpose",
        paragraphs: [
          "This agreement sets out the working terms between Astra Yazılım (“Astra”) and a developer whose application to the Astra Developer Network has been approved (the “Developer”).",
          "Astra offers software and e-commerce work from its clients to the Developer in line with the Developer’s skills; the Developer carries out accepted work under this agreement.",
        ],
      },
      {
        heading: "2. Effective date",
        paragraphs: [
          "This agreement, accepted when applying, takes effect once Astra approves the application and notifies the Developer. If the application is rejected, neither party has any obligation; information shared during the application is still kept confidential.",
        ],
      },
      {
        heading: "3. Independent work",
        paragraphs: [
          "The Developer is not an employee of Astra and carries out work independently, on their own schedule. This agreement does not create an employment, partnership or exclusivity relationship. The Developer is responsible for the tax and legal obligations related to payments they receive.",
        ],
      },
      {
        heading: "4. Assignments",
        paragraphs: [
          "Each job is offered to the Developer through an assignment notice stating the scope, engagement model (per task, weekly or monthly), estimated effort, deadline and fee.",
          "The Developer is free to decline. An accepted assignment notice forms an annex to this agreement; no separate contract needs to be signed.",
        ],
      },
      {
        heading: "5. Confidentiality",
        paragraphs: [
          "The Developer keeps confidential all client names, requests, source code, designs, sales and customer data and any other information learned during an assignment, uses it only for that assignment and does not share it with third parties. This obligation continues indefinitely after the agreement ends.",
        ],
      },
      {
        heading: "6. Access to client systems",
        paragraphs: [
          "For an assignment, the Developer may be given user accounts on platforms such as ikas, Ticimax or Shopify, or on servers, code repositories and third-party services. These accounts are personal, may not be shared and may only be used for work within the assignment.",
          "The Developer does not copy client data to their own devices or accounts, uses two-step verification wherever possible and helps revoke access once the assignment ends. If the Developer suspects a security breach or unauthorized access, they notify Astra within 24 hours at the latest.",
        ],
      },
      {
        heading: "7. Personal data",
        paragraphs: [
          "Personal data in client systems (such as buyer names, addresses and order details) is protected under Turkish Personal Data Protection Law No. 6698. The Developer accesses such data only as far as the assignment requires, does not process it beyond Astra’s and the client’s instructions and takes the necessary technical and organizational measures.",
        ],
      },
      {
        heading: "8. Working directly with clients",
        paragraphs: [
          "For 12 months after their last assignment ends, the Developer does not offer to work directly with clients met through Astra, nor accept work directly from them outside Astra. If a client contacts the Developer directly, the Developer informs Astra.",
        ],
      },
      {
        heading: "9. Intellectual property",
        paragraphs: [
          "Rights to code, designs and documents produced within an assignment pass to the client or to Astra once the assignment fee is paid. The Developer does not use content that infringes third-party rights and uses open-source components in line with their licenses.",
        ],
      },
      {
        heading: "10. Fees and payment",
        paragraphs: [
          "The fee and payment period are stated in the assignment notice. Payment is made after Astra approves the delivery, against a legally valid invoice or receipt.",
        ],
      },
      {
        heading: "11. Quality and communication",
        paragraphs: [
          "The Developer completes accepted assignments carefully and on time, shares progress regularly through the channel Astra specifies and reports any likely delay as soon as they become aware of it.",
        ],
      },
      {
        heading: "12. Astra Verified Developer badge",
        paragraphs: [
          "Approved Developers receive the Astra Verified Developer badge. The Developer may use the badge on professional profiles such as LinkedIn, GitHub or a personal site to show they work with Astra. Astra may revoke the badge for breaches of this agreement or repeated quality issues.",
        ],
      },
      {
        heading: "13. Termination",
        paragraphs: [
          "Either party may end this agreement at any time with written notice. Ongoing assignments are completed and paid unless the parties agree otherwise. The confidentiality, personal data, direct-work and intellectual property clauses survive termination.",
        ],
      },
      {
        heading: "14. Governing law",
        paragraphs: [
          "This agreement is governed by the laws of the Republic of Türkiye. Istanbul courts and enforcement offices have jurisdiction over disputes.",
        ],
      },
    ],
  },
  privacy: {
    meta: {
      title: "Privacy Policy",
      description: "How your personal data is processed on the Astra Yazılım website.",
    },
    updatedAt: "2026-10-14",
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
        heading: "Developer applications",
        paragraphs: [
          "For Astra Developer Network applications we process your name, contact details, title, skills, LinkedIn and GitHub profiles, CV and work preferences to review your application, offer you suitable work if approved and manage our contractual relationship. The legal basis is the formation and performance of a contract under Article 5(2)(c) of Law No. 6698.",
          "If your application is rejected, we delete your data within one year at the latest; if approved, we keep it for the duration of our working relationship and any legal retention periods. Applications and CVs are delivered through our email infrastructure provider.",
        ],
      },
      {
        heading: "Cookies and analytics",
        paragraphs: [
          "Our site uses Google Analytics cookies (those starting with _ga and _ga_) only if you give consent. These cookies help us improve the site by collecting usage data such as pages visited, visit duration, referring source and device type, and are kept for up to 2 years. This data is processed by Google LLC on servers abroad; the legal basis is your explicit consent under Article 5(1) of Law No. 6698.",
          "If you decline, no analytics cookies are set. You can change your choice or withdraw your consent at any time via the “Cookie preferences” link at the bottom of the page.",
        ],
      },
      {
        heading: "Browser preferences",
        paragraphs: ["Your theme and cookie preferences are stored only in your browser and are not sent to our servers."],
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
