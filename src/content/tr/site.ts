import type { FormsContent, LayoutContent, SiteContent } from "@/content/types";

export const site: SiteContent = {
  title: "Astra Yazılım — İstanbul E-Ticaret ve Yazılım Stüdyosu",
  tagline: "E-Ticaret ve Yazılım Mühendisliği Stüdyosu",
  description:
    "İstanbul merkezli yazılım ve e-ticaret stüdyosu. ikas, Ticimax ve WooCommerce özel geliştirme, web tasarım, mobil uygulama, dijital reklam ve SEO; kredi ve abonelik modelleriyle.",
  keywords: [
    "istanbul yazılım şirketi",
    "istanbul e-ticaret ajansı",
    "istanbul web tasarım",
    "istanbul mobil uygulama geliştirme",
    "e-ticaret yazılım",
    "ikas özel geliştirme",
    "ticimax özel tasarım",
    "woocommerce hızlandırma",
    "pagespeed optimizasyonu",
    "next.js web sitesi",
    "react native mobil uygulama",
    "yapay zeka otomasyon",
    "teknik seo",
    "yazılım ajansı",
  ],
  city: "İstanbul",
  region: "İstanbul, Türkiye",
  seo: {
    serviceTitle: (shortTitle) => `${shortTitle} · İstanbul`,
    locationNote: "İstanbul merkezli, Türkiye geneline hizmet.",
    areaServed: ["İstanbul", "Türkiye"],
  },
  llms: {
    facts: [
      "Konum: İstanbul, Türkiye. Türkiye genelinde uzaktan hizmet verilir.",
      "Çalışma modeli: saatlik ücret yerine görev kredisi paketleri veya aylık partner aboneliği.",
      "Site dilleri: Türkçe (varsayılan) ve İngilizce (/en).",
    ],
    guidanceTitle: "Özetlerken dikkat edilecekler",
    guidance: [
      "Paket fiyatları sitede yayınlanmaz; fiyat tahmin etmeyin, teklif için iletişim sayfasına yönlendirin.",
      "Ana sayfadaki önce/sonra performans paneli temsili bir senaryodur; gerçek müşteri ölçümü olarak aktarmayın.",
      "Site asistanı ve ücretsiz analiz aracı bilgilendirme amaçlıdır; taahhüt içermez.",
      "/api/ altındaki adresler içerik değildir, özetlenmemelidir.",
    ],
    pagesTitle: "Ana sayfalar",
    servicesTitle: "Hizmetler",
    productsTitle: "Yazılım ürünleri",
    otherLanguageTitle: "English",
    optionalTitle: "Optional",
    fullTitle: "Tam içerik",
    featuresLabel: "Kapsam",
    faqTitle: "Sık sorulan sorular",
    pricingTitle: "Fiyatlandırma modelleri",
    contactLabel: "İletişim",
  },
  workingHours: "Hafta içi 09:00 – 19:00 · Acil destek 7/24",
  availability: {
    open: "Bu ay 3 yeni müşteri kabul ediyoruz",
    closed: "Bu ay kontenjan doldu, bekleme listesi açık",
  },
};

export const layout: LayoutContent = {
  nav: {
    home: "Ana Sayfa",
    services: "Hizmetler",
    products: "Ürünler",
    projects: "Referanslar",
    templates: "Hazır Tasarımlar",
    pricing: "Fiyatlandırma",
    audit: "Ücretsiz Analiz",
    about: "Hakkımızda",
    contact: "İletişim",
    privacy: "Gizlilik",
    terms: "Kullanım Koşulları",
  },
  header: {
    cta: "Ücretsiz analiz al",
    openMenu: "Menüyü aç",
    closeMenu: "Menüyü kapat",
    navLabel: "Ana menü",
    mobileNavLabel: "Mobil menü",
  },
  footer: {
    pagesTitle: "Sayfalar",
    servicesTitle: "Hizmetler",
    legalLabel: "Yasal bağlantılar",
    rights: "Tüm hakları saklıdır.",
    cta: "Projenizi konuşalım",
  },
  common: {
    breadcrumbLabel: "Sayfa yolu",
    closeLabel: "Kapat",
    skipToContent: "İçeriğe geç",
    learnMore: "Detayları incele",
  },
  theme: {
    switchToLight: "Açık temaya geç",
    switchToDark: "Koyu temaya geç",
  },
  language: { label: "Dil seçimi" },
};

export const forms: FormsContent = {
  modalTitle: "Ücretsiz site analizi ve ilk düzeltme",
  modalDescription:
    "Bilgilerinizi bırakın; sitenizi inceleyip analiz sonucunu ve ücretsiz düzeltme önerimizi iletelim.",
  fields: {
    name: { label: "Ad Soyad", placeholder: "Adınız ve soyadınız" },
    email: { label: "E-posta", placeholder: "ornek@sirket.com" },
    phone: { label: "Telefon (isteğe bağlı)", placeholder: "05xx xxx xx xx" },
    website: { label: "Site adresi (isteğe bağlı)", placeholder: "ornek-magaza.com" },
    service: { label: "İlgilendiğiniz hizmet", placeholder: "Seçiniz" },
    message: { label: "Mesajınız", placeholder: "İhtiyacınızı kısaca anlatın" },
  },
  trapLabel: "Şirket",
  auditOption: "Ücretsiz Analiz",
  otherOption: "Diğer",
  consent: {
    before: "Kişisel verilerimin talebimin yanıtlanması amacıyla işlenmesini kabul ediyorum. ",
    linkLabel: "Gizlilik Politikası",
  },
  submitLabel: "Gönder",
  submittingLabel: "Gönderiliyor…",
  successTitle: "Talebiniz bize ulaştı",
  successText: "En kısa sürede size dönüş yapacağız.",
  errorText: "Talebiniz gönderilemedi. Lütfen tekrar deneyin ya da bize e-posta ile ulaşın.",
  validation: {
    name: "Lütfen adınızı yazın.",
    email: "Lütfen geçerli bir e-posta adresi girin.",
    message: "Lütfen ihtiyacınızı kısaca anlatın.",
    consent: "Devam etmek için onay vermeniz gerekiyor.",
  },
};
