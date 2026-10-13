import type { PagesContent } from "@/content/types";

export const pages: PagesContent = {
  services: {
    meta: {
      title: "Hizmetler",
      description:
        "E-ticaret geliştirme, pazaryeri yönetimi, web tasarım, mobil uygulama, otomasyon, dijital reklam, SEO, ürün görselleri, raporlama ve hosting. İstanbul merkezli Astra Yazılım hizmetleri.",
    },
    eyebrow: "Hizmetler",
    title: { lead: "İşinizi büyüten", accent: "yazılım çözümleri." },
    description:
      "Mağazanızın ön yüzünden arka plandaki operasyona kadar her katmanda, aynı ekipten ve aynı kalite çıtasıyla hizmet alırsınız.",
  },
  serviceDetail: {
    featuresTitle: "Neler yapıyoruz",
    deliverablesTitle: "Teslim edilenler",
    faqTitle: "Sık sorulanlar",
    otherServicesTitle: "Diğer hizmetler",
    primaryCta: "Bu hizmet için teklif al",
    secondaryCta: "Fiyatlandırmayı incele",
  },
  products: {
    meta: {
      title: "Yazılım Ürünleri",
      description:
        "Stok takip, tedarik yönetimi, depozito takip ve özel iş takip çözümleri. İşletmenize operasyonel kolaylık sağlayan hazır yazılım ürünlerimiz.",
    },
    eyebrow: "Yazılım ürünlerimiz",
    title: { lead: "Hazır çözümlerle", accent: "daha verimli operasyonlar." },
    description:
      "Sahada denenmiş, işletmenize göre uyarlanabilen yazılım ürünleri. Sıfırdan geliştirme beklemeden kullanmaya başlayın.",
    cta: "Demo isteyin",
    inquiryMessage: (productName) => `${productName} için demo ve bilgi almak istiyorum.`,
    liveTitle: { lead: "Kendi geliştirdiğimiz", accent: "ürünler." },
    liveDescription: "Sıfırdan tasarlayıp geliştirdiğimiz, işletmelere uyarlayarak sunduğumuz ürünlerden ekranlar.",
    catalogTitle: { lead: "İşletmenize uyarlanan", accent: "hazır çözümler." },
    catalogDescription: "İhtiyacınıza göre şekillendirip kısa sürede devreye aldığımız çözümler.",
  },
  projects: {
    meta: {
      title: "Referanslar",
      description:
        "Astra Yazılım referansları: müşterilerimiz için geliştirdiğimiz web siteleri, e-ticaret mağazaları, web ve mobil uygulamalar.",
    },
    eyebrow: "Referanslar",
    title: { lead: "Hayata geçirdiğimiz", accent: "projeler." },
    description: "Sağlıktan finansa, e-ticaretten lojistiğe; müşterilerimiz için geliştirdiğimiz projeler.",
    visitLabel: "Projeyi ziyaret et",
    previewLabel: "ekran görüntüsü",
    filterLabel: "Proje türüne göre filtrele",
    allLabel: "Tümü",
    platforms: {
      website: "Web sitesi",
      webApp: "Web uygulaması",
      desktop: "Masaüstü uygulaması",
      mobile: "Mobil uygulama",
    },
  },
  templates: {
    meta: {
      title: "Hazır Tasarımlar",
      description:
        "Web siteniz için hazır tasarım kataloğu. Beğendiğiniz tasarımı seçin; WordPress üzerinde kurup markanıza göre uyarlayalım.",
    },
    eyebrow: "Hazır tasarımlar",
    title: { lead: "Tasarımı seçin,", accent: "gerisini biz kuralım." },
    description:
      "Sektörünüze uygun tasarımı seçin; WordPress üzerinde kurup renk, içerik ve görselleri markanıza göre uyarlayalım.",
    searchLabel: "Tasarım ara",
    searchPlaceholder: "Sektör veya tasarım adı yazın…",
    categoryLabel: "Kategoriye göre filtrele",
    allLabel: "Tümü",
    featureLabel: "Özelliğe göre filtrele",
    features: { shop: "E-ticaret", blog: "Blog", portfolio: "Portfolyo", onePage: "Tek sayfa" },
    categories: {
      "animals-nature": "Hayvanlar ve Doğa",
      "art-culture": "Sanat ve Kültür",
      "cars-bikes": "Otomotiv",
      "corporations-organizations": "Kurumsal",
      "design-photography": "Tasarım ve Fotoğraf",
      "education-science": "Eğitim ve Bilim",
      entertainment: "Eğlence",
      fashion: "Moda",
      finance: "Finans",
      "food-restaurants": "Yeme İçme",
      "health-beauty": "Sağlık ve Güzellik",
      "housing-architecture": "Emlak ve Mimari",
      "magazines-writing": "Dergi ve Yazarlık",
      "occasions-gifts": "Özel Günler ve Hediye",
      others: "Diğer",
      "people-and-services": "Hizmet",
      "product-production": "Ürün ve Üretim",
      "sports-travel": "Spor ve Seyahat",
      "technology-computing": "Teknoloji",
    },
    previewLabel: "Canlı önizleme",
    quoteLabel: "Bu tasarımla teklif al",
    inquiryMessage: (templateTitle) => `"${templateTitle}" tasarımıyla bir web sitesi için teklif almak istiyorum.`,
    resultCount: (shown, total) => `${total} tasarımdan ${shown} tanesi gösteriliyor`,
    emptyText: "Aramanıza uygun tasarım bulunamadı. Farklı bir kelime ya da kategori deneyin.",
    moreLabel: "Daha fazla göster",
    sourceNote: (sourceName) => `Tasarımlar ${sourceName} şablon kütüphanesindendir; kurulum ve uyarlama Astra Yazılım tarafından yapılır.`,
  },
  pricing: {
    meta: {
      title: "Fiyatlandırma",
      description:
        "Görev kredisi paketleri ve aylık partner aboneliği. Saatlik fatura sürprizi olmadan, şeffaf yazılım ve e-ticaret geliştirme fiyatlandırması.",
    },
    eyebrow: "Fiyatlandırma",
    title: { lead: "Şeffaf paketler,", accent: "sürprizsiz faturalar." },
    description:
      "İhtiyaç anında görev kredisi kullanın ya da aylık partnerimiz olun. Hangi model size uygunsa onunla başlayın.",
    faqTitle: "Fiyatlandırma hakkında sık sorulanlar",
  },
  audit: {
    meta: {
      title: "Ücretsiz Site Analizi",
      description:
        "Sitenizin mobil hızını ve Core Web Vitals değerlerini ücretsiz ölçün. İlk küçük hız veya arayüz sorununuzu ücretsiz düzeltelim.",
    },
    stepsTitle: "Analiz nasıl ilerliyor?",
    steps: [
      { title: "Adresinizi girin", text: "Sitenizi mobil cihaz koşullarında otomatik olarak ölçüyoruz.", icon: "link" },
      {
        title: "Sonuçları görün",
        text: "Performans skoru, Core Web Vitals ve öne çıkan iyileştirme fırsatları anında ekranınızda.",
        icon: "gauge",
      },
      {
        title: "İlk düzeltme bizden",
        text: "Ekibimiz sitenizi elle de inceler ve ilk küçük sorunu ücretsiz düzeltir.",
        icon: "sparkles",
      },
    ],
  },
  about: {
    meta: {
      title: "Hakkımızda",
      description:
        "Astra Yazılım; e-ticaret ve yazılım mühendisliğini erişilebilir kredi ve abonelik modelleriyle sunan, İstanbul merkezli butik bir mühendislik stüdyosudur.",
    },
    eyebrow: "Hakkımızda",
    title: { lead: "Butik bir mühendislik stüdyosu.", accent: "Ulaşılabilir bir model." },
    description:
      "İyi mühendisliğin yalnızca büyük bütçeli şirketlerin erişebildiği bir şey olmaması gerektiğine inanıyoruz. Bu yüzden saatlik fatura yerine şeffaf kredi ve abonelik modeliyle çalışıyoruz.",
    storyTitle: "Neden bu modeli kurduk?",
    story: [
      "E-ticaret işletmelerinin çoğu aynı sorunu yaşıyor: küçük bir değişiklik için platform geliştiricisine yüksek saatlik ücret ödemek ya da ajansın sırasında haftalarca beklemek.",
      "Biz işi küçük, net görevlere bölüyor ve her görevin karşılığını baştan söylüyoruz. Böylece ne kadar ödeyeceğinizi ve ne alacağınızı işe başlamadan bilirsiniz.",
    ],
    principlesTitle: "Çalışma ilkelerimiz",
    principles: [
      { title: "Şeffaflık", text: "Her görevin maliyeti ve süresi işe başlamadan önce bellidir.", icon: "eye" },
      { title: "Hız", text: "Hem sitenizin açılışında hem bizim yanıt süremizde hız bir özelliktir.", icon: "zap" },
      {
        title: "Doğrudan iletişim",
        text: "İşinizi yapan geliştiriciyle konuşursunuz; araya katman girmez.",
        icon: "message",
      },
      { title: "Ölçülebilir sonuç", text: "Yaptığımız her işin etkisini rakamlarla gösteririz.", icon: "chart" },
    ],
  },
  contact: {
    meta: {
      title: "İletişim ve Teklif",
      description:
        "İstanbul merkezli Astra Yazılım ile iletişime geçin. Yazılım veya e-ticaret projeniz için kapsam, süre ve maliyeti içeren net bir teklif alın.",
    },
    eyebrow: "İletişim",
    title: { lead: "Projenizi anlatın,", accent: "net bir teklifle dönelim." },
    description: "Formu doldurun; ihtiyacınızı inceleyip kapsam, süre ve maliyeti paylaşalım.",
    channelsTitle: "Doğrudan ulaşın",
    channelLabels: {
      email: "E-posta",
      phone: "Telefon",
      whatsapp: "WhatsApp",
      location: "Konum",
      hours: "Çalışma saatleri",
    },
    nextTitle: "Sonra ne olacak?",
    nextSteps: [
      "Talebinizi inceliyoruz.",
      "Gerekirse kısa bir görüşme planlıyoruz.",
      "Kapsam, süre ve maliyeti içeren teklifi iletiyoruz.",
    ],
  },
  privacy: {
    meta: {
      title: "Gizlilik Politikası",
      description: "Astra Yazılım web sitesinde kişisel verilerinizin nasıl işlendiğine dair bilgilendirme.",
    },
    updatedAt: "2026-10-12",
    updatedLabel: "Son güncelleme",
    sections: [
      {
        heading: "Topladığımız veriler",
        paragraphs: [
          "İletişim ve analiz formları aracılığıyla bize ilettiğiniz ad, e-posta, telefon, site adresi ve mesaj içeriğini işleriz.",
        ],
      },
      {
        heading: "Verileri kullanma amacımız",
        paragraphs: [
          "Bu verileri yalnızca talebinizi yanıtlamak, teklif hazırlamak ve talep ettiğiniz analizi gerçekleştirmek için kullanırız.",
        ],
      },
      {
        heading: "Site analizi",
        paragraphs: [
          "Ücretsiz analiz aracına girdiğiniz site adresi, ölçüm yapılabilmesi için Google PageSpeed Insights hizmetine iletilir.",
        ],
      },
      {
        heading: "Tarayıcı tercihleri",
        paragraphs: ["Tema tercihiniz yalnızca tarayıcınızda saklanır ve sunucularımıza iletilmez."],
      },
      {
        heading: "Haklarınız",
        paragraphs: [
          "6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamındaki haklarınızı kullanmak için bizimle iletişime geçebilirsiniz.",
        ],
      },
    ],
  },
  terms: {
    meta: {
      title: "Kullanım Koşulları",
      description: "Astra Yazılım web sitesinin kullanımına ilişkin koşullar.",
    },
    updatedAt: "2026-10-12",
    updatedLabel: "Son güncelleme",
    sections: [
      {
        heading: "Sitenin kullanımı",
        paragraphs: ["Bu sitedeki içerikler genel bilgilendirme amaçlıdır ve bağlayıcı bir teklif niteliği taşımaz."],
      },
      {
        heading: "Hizmet kapsamı",
        paragraphs: [
          "Hizmetlerin kapsamı, süresi ve bedeli taraflar arasında ayrıca yapılacak yazılı teklif ve sözleşme ile belirlenir.",
        ],
      },
      {
        heading: "Analiz aracı ve asistan",
        paragraphs: [
          "Ücretsiz analiz aracı ve site asistanı bilgilendirme amaçlıdır; sunulan sonuçlar ve yanıtlar taahhüt niteliği taşımaz.",
        ],
      },
      {
        heading: "Fikri mülkiyet",
        paragraphs: ["Sitedeki tasarım, metin ve görsellerin tüm hakları saklıdır."],
      },
    ],
  },
  notFound: {
    code: "404",
    title: "Aradığınız sayfa bulunamadı.",
    description: "Sayfa taşınmış ya da hiç var olmamış olabilir.",
    cta: "Ana sayfaya dön",
  },
};
