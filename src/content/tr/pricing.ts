import type { FaqItem, PricingContent } from "@/content/types";

export const pricing: PricingContent = {
  tabsLabel: "Fiyatlandırma modeli",
  fallbackPrice: "Teklif alın",
  models: {
    credits: {
      label: "Görev Kredisi",
      description: "Kredi alın, görev açın, iş bitince kredi düşsün. Aylık taahhüt yok.",
      tiers: {
        starter: {
          name: "Başlangıç Kredi Paketi",
          audience: "Hızlı düzeltmeler, hız artışı ve özel arayüz dokunuşları için ideal.",
          price: null,
          priceNote: "10 kredi · 6 ay geçerli",
          features: [
            "Küçük ve orta ölçekli görevler",
            "CSS, arayüz ve tema düzeltmeleri",
            "Hız ve Core Web Vitals iyileştirmeleri",
          ],
          cta: "Paketi sor",
        },
        growth: {
          name: "Büyüme Ortağı",
          audience: "Düzenli geliştirme ihtiyacı olan, büyüyen mağazalar için.",
          price: null,
          priceNote: "30 kredi · 12 ay geçerli",
          badge: "En popüler",
          features: [
            "Öncelikli görev sırası",
            "Doğrudan Slack / WhatsApp kanalı",
            "Aylık hız ve SEO bakımı",
            "Ürün görseli ve arayüz desteği",
          ],
          cta: "Teklif al",
        },
        enterprise: {
          name: "Özel Kurumsal",
          audience: "Sıfırdan web veya mobil uygulama geliştirme projeleri için.",
          price: "Konuşalım",
          priceNote: "Kapsama göre teklif",
          features: [
            "Uçtan uca özel web / mobil proje",
            "Keşif, tasarım ve mimari çalışması",
            "Yayın sonrası bakım anlaşması",
          ],
          cta: "Projeyi konuşalım",
        },
      },
    },
    retainer: {
      label: "Aylık Partner",
      description: "Her ay ayrılmış geliştirme saati ve sürekli bakım. Ekibinizin bir parçası gibi.",
      tiers: {
        starter: {
          name: "Başlangıç Aboneliği",
          audience: "Sitesini güncel ve hızlı tutmak isteyen işletmeler için.",
          price: null,
          priceNote: "Ayda 10 geliştirme saati",
          features: ["Aylık bakım ve güncellemeler", "Hız ve güvenlik takibi", "Aylık durum raporu"],
          cta: "Aboneliği sor",
        },
        growth: {
          name: "Büyüme Ortağı",
          audience: "Sürekli geliştirme yapan, satışını büyüten mağazalar için.",
          price: null,
          priceNote: "Ayda 30 geliştirme saati",
          badge: "En popüler",
          features: [
            "Ayrılmış geliştirme saatleri",
            "Aylık hız ve SEO bakımı",
            "Doğrudan Slack / WhatsApp kanalı",
            "Ürün görseli ve arayüz desteği",
          ],
          cta: "Teklif al",
        },
        enterprise: {
          name: "Özel Kurumsal",
          audience: "Kendi ürününü geliştiren ve özel ekip isteyen şirketler için.",
          price: "Konuşalım",
          priceNote: "Size ayrılmış ekip",
          features: ["Web, mobil ve otomasyon projeleri", "Haftalık planlama ve demo", "Öncelikli acil destek"],
          cta: "Projeyi konuşalım",
        },
      },
    },
  },
  inquiryMessage: (tierName, modelLabel) => `${tierName} (${modelLabel}) hakkında bilgi ve fiyat almak istiyorum.`,
  estimator: {
    eyebrow: "Hesap basit",
    title: { lead: "Kaç krediye", accent: "ihtiyacınız var?" },
    description: "Aylık iş yükünüzü seçin, size uygun paketi anında görün.",
    taskCountLabel: "Aylık görev sayısı",
    sizeLabel: "Ortalama görev büyüklüğü",
    sizes: {
      small: { label: "Küçük", example: "CSS düzeltmesi, metin ve görsel değişikliği" },
      medium: { label: "Orta", example: "Yeni bölüm, hız iyileştirmesi, entegrasyon ayarı" },
      large: { label: "Büyük", example: "Özel modül, ödeme akışı, yeni sayfa şablonu" },
    },
    resultLabel: "Tahmini aylık ihtiyaç",
    unit: "kredi",
    recommendationLabel: "Önerilen paket",
    cta: "Bu ihtiyaç için teklif al",
    disclaimer: "Tahmin bilgilendirme amaçlıdır; net kredi karşılığı görev kapsamı görüldükten sonra belirlenir.",
    inquiryMessage: (taskCount, sizeLabel, credits) =>
      `Ayda yaklaşık ${taskCount} adet ${sizeLabel.toLocaleLowerCase("tr")} ölçekli görevim var (tahmini ${credits} kredi). Uygun paket için teklif almak istiyorum.`,
  },
};

const creditSystem: FaqItem = {
  question: "Görev kredisi sistemi nasıl çalışıyor?",
  answer:
    "Bir kredi paketi alırsınız, ihtiyaç duydukça görev açarsınız. Her görevin kredi karşılığını işe başlamadan önce bildiririz; onayınızla çalışmaya başlar, iş tamamlanınca krediyi düşeriz.",
};

const modelDifference: FaqItem = {
  question: "Kredi paketi ile aylık abonelik arasındaki fark nedir?",
  answer:
    "Kredi paketi ara sıra ortaya çıkan işler için uygundur ve aylık taahhüt gerektirmez. Aylık partner aboneliğinde ise her ay sizin için ayrılmış geliştirme saati, düzenli bakım ve öncelikli iletişim kanalı bulunur.",
};

export const faq: { general: FaqItem[]; pricing: FaqItem[] } = {
  general: [
    creditSystem,
    modelDifference,
    {
      question: "Ücretsiz analiz ve ilk düzeltme gerçekten ücretsiz mi?",
      answer:
        "Evet. Sitenizi analiz edip tespit ettiğimiz ilk küçük arayüz veya hız sorununu ücretsiz düzeltiyoruz. Devam etme zorunluluğunuz yok.",
    },
    {
      question: "Hangi altyapılarla çalışıyorsunuz?",
      answer:
        "E-ticarette ikas, Ticimax ve WooCommerce; web tarafında Next.js ve Headless CMS; mobilde React Native ve Expo; altyapıda Vercel ve Cloudflare ile çalışıyoruz.",
    },
    {
      question: "Nerede hizmet veriyorsunuz?",
      answer:
        "İstanbul merkezliyiz. İstanbul'daki işletmelerle yüz yüze görüşebiliyor, Türkiye genelindeki müşterilerimize uzaktan hizmet veriyoruz.",
    },
    {
      question: "Bir görev ne kadar sürede tamamlanır?",
      answer:
        "Süre görevin kapsamına bağlıdır. Tahmini teslim süresini, kredi karşılığıyla birlikte işe başlamadan önce paylaşırız.",
    },
    {
      question: "Sizinle nasıl iletişim kuracağım?",
      answer:
        "Araya proje yöneticisi kuyruğu girmeden, işinizi yapan geliştiriciyle doğrudan yazışırsınız. Büyüme Ortağı paketlerinde özel Slack veya WhatsApp kanalı açıyoruz.",
    },
  ],
  pricing: [
    creditSystem,
    modelDifference,
    {
      question: "Paketlerin fiyatları neden sitede yazmıyor?",
      answer:
        "Paket fiyatlarını ihtiyacınıza ve kullandığınız altyapıya göre netleştiriyoruz. Formu doldurduğunuzda size güncel fiyat listesini ve uygun paketi iletiyoruz.",
    },
    {
      question: "Kullanmadığım krediler yanar mı?",
      answer: "Kredilerin paketinize göre belirli bir geçerlilik süresi vardır. Süreler paket kartlarında belirtilmiştir.",
    },
    {
      question: "Paketimi sonradan değiştirebilir miyim?",
      answer: "Evet. İhtiyacınız değiştikçe paketinizi yükseltebilir veya modelinizi değiştirebilirsiniz.",
    },
  ],
};
