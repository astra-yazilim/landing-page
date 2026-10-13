import type { ProductId } from "@/config/products";
import type { ProjectId } from "@/config/projects";
import type { ProductText, ProjectText } from "@/content/types";

export const products: Record<ProductId, ProductText> = {
  stock: {
    name: "Inventory Tracking App",
    tagline: "Manage your stock with ease.",
    description:
      "Watch warehouse and store stock from one screen. Inbound, outbound and count movements are recorded instantly, and you get alerts for items that fall to a critical level.",
    features: [
      "Multi-warehouse and location tracking",
      "Fast barcode check-in and check-out",
      "Critical stock alerts",
      "E-commerce and marketplace stock sync",
    ],
  },
  supply: {
    name: "Supply Management System",
    tagline: "Digitize your procurement process.",
    description:
      "Run procurement in a single flow, from purchase request to delivery. Supplier quotes, orders and delivery dates all stay on record.",
    features: [
      "Purchase requests and approval flows",
      "Supplier and quote comparison",
      "Order and delivery tracking",
      "Cost and performance reports",
    ],
  },
  deposit: {
    name: "Deposit Tracking App",
    tagline: "Keep your deposit processes under control.",
    description:
      "Record the deposit-bearing items handed to customers and their returns. See who holds how much deposit and the collection status at any time.",
    features: [
      "Deposit balance per customer",
      "Delivery and return movements",
      "Collection and reconciliation screens",
      "Mobile use for field teams",
    ],
  },
  workflow: {
    name: "Custom Workflow Solutions",
    tagline: "Run your business processes efficiently.",
    description:
      "A task and process tracking system shaped around your own workflow. See clearly who is working on what and where each job is waiting.",
    features: [
      "Workflows and statuses tailored to you",
      "Task assignment and notifications",
      "Role-based permissions",
      "Manager overview screens",
    ],
  },
};

export const projects: Record<ProjectId, ProjectText> = {
  ekinKocadag: {
    title: "Ekin Kocadağ",
    category: "E-commerce",
    summary: "An e-commerce store for olive oil and natural products with a product recommendation flow and chat assistant.",
  },
  stargazeApp: {
    title: "Stargaze Mobil",
    category: "Astrology",
    summary: "An astrology mobile app with daily and monthly horoscope readings.",
  },
  salesCollection: {
    title: "Satış ve Tahsilat Platformu",
    category: "Field management",
    summary: "A field management panel tracking receivables, collections and regions for a food distribution company.",
  },
  huntflow: {
    title: "HuntFlow",
    category: "SaaS",
    summary: "The marketing site for a SaaS product that simulates Product Hunt launches.",
  },
  torkImplant: {
    title: "Tork İmplant",
    category: "Healthcare",
    summary: "A corporate site for a dental implant systems manufacturer with product, technology and document sections.",
  },
  avukatevkil: {
    title: "Avukatevkil",
    category: "Legal",
    summary: "A collaboration platform where lawyers post jobs and receive applications.",
  },
  nadirGold: {
    title: "Nadir Gold",
    category: "E-commerce",
    summary: "An online store for gold and silver products.",
  },
  luneraHome: {
    title: "Lunera Home Design",
    category: "E-commerce",
    summary: "A multilingual e-commerce site for tableware and home décor with a cart and wishlist.",
  },
  stargazeWeb: {
    title: "Stargaze",
    category: "Astrology",
    summary: "An astrology site offering birth charts and horoscope readings.",
  },
  ikPortal: {
    title: "İK Süreçleri Portalı",
    category: "Human resources",
    summary: "An HR portal that manages leave and advance requests, approvals and the calendar in one place.",
  },
  emlakKonut: {
    title: "Emlak Konut Gayrimenkul Sertifikası",
    category: "Real estate",
    summary: "A campaign site presenting a real estate certificate project.",
  },
  questionTeams: {
    title: "Question Ekip Yönetimi",
    category: "Team management",
    summary: "A team management panel for teams, a question pool and tests.",
  },
  toog: {
    title: "Toog",
    category: "Media",
    summary: "The interface of a film and series streaming platform.",
  },
  ikilem: {
    title: "ikilem.org",
    category: "Community",
    summary: "A community platform where users share dilemmas and vote on them.",
  },
  alistak: {
    title: "Alistak Alüminyum Sistemleri",
    category: "Manufacturing",
    summary: "A multilingual corporate site for an aluminium joinery systems manufacturer.",
  },
  daphneBeauty: {
    title: "Daphne Beauty",
    category: "Beauty",
    summary: "An English-language showcase and booking site for a semi-permanent make-up studio.",
  },
  adminPanel: {
    title: "Yönetim Paneli",
    category: "Admin dashboard",
    summary: "An admin dashboard interface showing sales, user and project data.",
  },
  klinikdent: {
    title: "Klinikdent",
    category: "Healthcare",
    summary: "A multilingual site presenting treatments for an oral and dental health clinic.",
  },
  bebe: {
    title: "Bebe",
    category: "Publishing",
    summary: "A showcase site with a shopping cart for children’s books.",
  },
  flipMaster: {
    title: "Flip Master",
    category: "Game",
    summary: "A browser-based card game with a scoreboard.",
  },
  /* osmanliYatirim: {
    title: "Osmanlı Yatırım",
    category: "Finance",
    summary: "A customer sign-in interface for an investment firm.",
  }, */
  ephesusTaxi: {
    title: "Ephesus Taxi",
    category: "Transport",
    summary: "A showcase site for a taxi and airport transfer service.",
  },
  emfar: {
    title: "Emfar Yangın Söndürme",
    category: "Safety",
    summary: "A corporate site for a fire suppression and safety systems company.",
  },
  fatihRentACar: {
    title: "Fatih Rent A Car",
    category: "Car rental",
    summary: "A site with a quick booking form for a car rental company.",
  },
  farmenOto: {
    title: "Farmen Oto Elektronik",
    category: "Automotive",
    summary: "A service showcase site for an auto electronics workshop in Ümraniye, Istanbul.",
  },
  sirius: {
    title: "Sirius Veteriner Kliniği",
    category: "Veterinary",
    summary: "A showcase site for a veterinary clinic and pet shop.",
  },
  mertBurakTur: {
    title: "Mert Burak Tur",
    category: "Tourism",
    summary: "A service and tour showcase site for a passenger transport company.",
  },
  variciLojistik: {
    title: "Varıcı Lojistik",
    category: "Logistics",
    summary: "A showcase site for courier and logistics services.",
  },
  zemfa: {
    title: "ZEMFA",
    category: "Construction",
    summary: "A corporate site with reference and project sections for a foundation and construction company.",
  },
};
