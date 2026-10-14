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
        "Sitenizin mobil ve masaüstü hızını, Core Web Vitals değerlerini ücretsiz ölçün; sorunların kaynağını 15 dakikalık ücretsiz bir görüşmede birlikte konuşalım.",
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
        title: "Ücretsiz sorun tespiti",
        text: "Ekibimiz sitenizi elle de inceler; bulduklarımızı ve önerilerimizi 15 dakikalık telefon veya görüntülü görüşmede anlatırız.",
        icon: "sparkles",
      },
    ],
  },
  about: {
    meta: {
      title: "Hakkımızda",
      description:
        "Astra Yazılım; 2009'dan bu yana süren yazılım deneyimiyle web, mobil, e-ticaret ve otomasyon projeleri geliştiren İstanbul merkezli bir yazılım şirketidir.",
    },
    eyebrow: "Hakkımızda",
    title: { lead: "2009'dan bu yana süren", accent: "yazılım deneyimi." },
    description:
      "Web siteleri, e-ticaret altyapıları, mobil uygulamalar ve iş süreçlerini yöneten yazılımlar geliştiriyoruz. Her işe aynı yaklaşımla başlıyoruz: kapsamı netleştirmek, bedeli baştan paylaşmak ve sonucu ölçmek.",
    storyTitle: "Hikayemiz",
    story: [
      "Ekibimiz 2009'dan bu yana yazılım geliştiriyor. Bu süre boyunca kurumsal web sitelerinden e-ticaret altyapılarına, mobil uygulamalardan şirket içi yönetim panellerine kadar farklı ölçeklerde pek çok projede yer aldık.",
      "Bu projelerde işletmelerin en çok zorlandığı noktayı yakından gördük: küçük bir değişiklik için yüksek saatlik ücretler ya da haftalar süren bekleme süreleri.",
      "Astra Yazılım bu deneyimin üzerine kuruldu. İşi net görevlere bölüyor, her görevin kapsamını ve bedelini baştan paylaşıyoruz; böylece ne ödeyeceğinizi ve ne alacağınızı işe başlamadan bilirsiniz.",
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
  developers: {
    meta: {
      title: "Geliştirici Ol",
      description:
        "Astra Geliştirici Ağı'na katılın: ikas, Ticimax ve özel yazılım projelerinde yetkinliğinize uygun işleri size atayalım.",
    },
    eyebrow: "Astra Geliştirici Ağı",
    title: { lead: "Siz kodu yazın,", accent: "işi biz bulalım." },
    description:
      "KOBİ'lerin ikas, Ticimax, Shopify ve özel yazılım taleplerini yetkinliğinize uygun olarak size atıyoruz. Başvurun, değerlendirmeden geçin ve Astra Verified Developer olarak iş bitirme, haftalık ya da aylık modelle çalışın.",
    primaryCta: "Hemen başvur",
    secondaryCta: "Çerçeve sözleşmeyi oku",
    stepsTitle: "Nasıl işliyor?",
    steps: [
      {
        title: "Başvurun",
        text: "LinkedIn, GitHub, özgeçmiş ve yetkinliklerinizi paylaşın. Form yaklaşık 5 dakika sürer.",
        icon: "send",
      },
      {
        title: "Değerlendirme",
        text: "Profilinizi ve projelerinizi inceliyor, gerekirse kısa bir teknik görüşme yapıyoruz.",
        icon: "search",
      },
      {
        title: "Verified rozeti",
        text: "Onaylandığınızda Astra Verified Developer olursunuz ve çerçeve sözleşme yürürlüğe girer.",
        icon: "badgeCheck",
      },
      {
        title: "İş ataması",
        text: "Yetkinliğinize uyan bir talep geldiğinde görevi kapsamı, süresi ve bedeliyle size öneriyoruz; kabul ederseniz başlıyorsunuz.",
        icon: "briefcase",
      },
    ],
    modelsTitle: "Çalışma modelleri",
    models: [
      {
        title: "İş bitirme",
        text: "Hata düzeltme, tema geliştirme, entegrasyon gibi tek seferlik işler. Efor ve bedel önceden belirlenir, iş teslim edilince ödenir.",
        icon: "zap",
      },
      {
        title: "Haftalık",
        text: "Bir müşterinin belirli bir haftadaki taleplerini ve açık ticket'larını üstlenirsiniz.",
        icon: "calendar",
      },
      {
        title: "Aylık",
        text: "Yazılımcı desteğine sürekli ihtiyacı olan bir KOBİ'ye yarı ya da tam zamanlı aylık destek verirsiniz.",
        icon: "clock",
      },
    ],
    benefitsTitle: "Size ne kazandırır?",
    benefits: [
      {
        title: "Müşteri aramazsınız",
        text: "Satış, teklif ve müşteri iletişimini biz yürütüyoruz; siz işe odaklanıyorsunuz.",
        icon: "handshake",
      },
      {
        title: "Belli bedel, zamanında ödeme",
        text: "Bedel iş başlamadan bellidir; teslim onaylanınca ödenir.",
        icon: "wallet",
      },
      {
        title: "Esnek çalışma",
        text: "Hangi işi alacağınıza siz karar verirsiniz; uygunluğunuzu istediğiniz zaman güncellersiniz.",
        icon: "workflow",
      },
      {
        title: "Görünür yetkinlik",
        text: "Astra Verified Developer rozetini LinkedIn ve GitHub profillerinizde kullanabilirsiniz.",
        icon: "badgeCheck",
      },
    ],
    faqTitle: "Merak edilenler",
    faq: [
      {
        question: "Kimler başvurabilir?",
        answer:
          "ikas, Ticimax, Shopify gibi e-ticaret altyapılarında ya da web, mobil, backend, yapay zeka ve otomasyon alanlarında gerçek proje deneyimi olan herkes. Freelance çalışanlar, iş arayanlar ve ek gelir isteyen tam zamanlı çalışanlar da başvurabilir.",
      },
      {
        question: "Başvuru ücretli mi?",
        answer: "Hayır. Başvuru, değerlendirme ve rozet tamamen ücretsizdir.",
      },
      {
        question: "Her iş için ayrı sözleşme imzalayacak mıyım?",
        answer:
          "Hayır. Gizlilik ve müşteri sistemlerine erişim kuralları, başvuruda onayladığınız çerçeve sözleşmede yer alır. Her görev için yalnızca kapsamı, süreyi ve bedeli gösteren görev bildirimini kabul edersiniz.",
      },
      {
        question: "Ne kadar sürede dönüş yapıyorsunuz?",
        answer: "Başvuruları genellikle 5 iş günü içinde değerlendirip e-posta ile dönüş yapıyoruz.",
      },
      {
        question: "Ödemeyi nasıl alırım?",
        answer:
          "Ödemeler, teslim onaylandıktan sonra mevzuata uygun bir belge karşılığında yapılır. Şirketiniz yoksa uygun yöntemi birlikte belirleriz.",
      },
    ],
    form: {
      title: "Başvuru formu",
      description: "* ile işaretli alanlar zorunludur.",
      groups: {
        personal: "Kişisel bilgiler",
        profile: "Profil ve yetkinlikler",
        work: "Çalışma tercihleri",
        consent: "Onaylar",
      },
      fields: {
        name: { label: "Ad Soyad *", placeholder: "Adınız ve soyadınız" },
        email: { label: "E-posta *", placeholder: "ornek@mail.com" },
        phone: { label: "Telefon *", placeholder: "05xx xxx xx xx" },
        location: { label: "Şehir", placeholder: "İstanbul" },
        title: { label: "Ünvan *", placeholder: "Örn. Senior Frontend Developer" },
        experience: { label: "Deneyim *", placeholder: "Seçiniz" },
        linkedin: { label: "LinkedIn profili *", placeholder: "linkedin.com/in/kullanici-adi" },
        github: { label: "GitHub profili", placeholder: "github.com/kullanici-adi" },
        portfolio: { label: "Portfolyo veya kişisel site", placeholder: "ornek.com" },
        otherSkills: { label: "Kullandığınız diğer teknolojiler", placeholder: "Örn. Vue, Laravel, PostgreSQL, Figma" },
        availability: { label: "Haftalık ayırabileceğiniz süre *", placeholder: "Seçiniz" },
        rate: { label: "Beklenen ücret", placeholder: "Örn. saatlik 750 TL veya aylık 40.000 TL" },
        about: { label: "Kendinizden ve öne çıkan projelerinizden bahsedin", placeholder: "Kısa bir özet yeterli" },
      },
      skillsLabel: "Uzmanlık alanları *",
      skills: {
        ikas: "ikas",
        ticimax: "Ticimax",
        shopify: "Shopify",
        woocommerce: "WooCommerce",
        marketplace: "Pazaryeri entegrasyonları",
        frontend: "Frontend (React, Next.js)",
        backend: "Backend (Node.js, API)",
        mobile: "Mobil (React Native)",
        ai: "Yapay zeka ve otomasyon",
        uiux: "UI/UX tasarım",
        seo: "SEO ve performans",
        devops: "DevOps ve bulut",
      },
      experience: {
        "0-1": "1 yıldan az",
        "1-3": "1–3 yıl",
        "3-5": "3–5 yıl",
        "5-8": "5–8 yıl",
        "8+": "8 yıldan fazla",
      },
      workModelsLabel: "İlgilendiğiniz çalışma modelleri *",
      workModels: { task: "İş bitirme", weekly: "Haftalık", monthly: "Aylık" },
      availability: {
        lt10: "10 saatten az",
        "10-20": "10–20 saat",
        "20-40": "20–40 saat",
        "40+": "Tam zamanlı (40+ saat)",
      },
      cv: { label: "Özgeçmiş (CV) *", hint: "PDF, DOC veya DOCX · en fazla 3 MB" },
      privacyConsent: {
        before: "",
        linkLabel: "Gizlilik Politikası",
        after: "’ndaki geliştirici başvurularına ilişkin aydınlatmayı okudum.",
      },
      agreementConsent: {
        before: "",
        linkLabel: "Astra Geliştirici Ağı Çerçeve Sözleşmesi",
        after: "’ni okudum ve onaylıyorum. Sözleşme, başvurum kabul edildiğinde yürürlüğe girer.",
      },
      submitLabel: "Başvuruyu gönder",
      submittingLabel: "Gönderiliyor…",
      successTitle: "Başvurunuz bize ulaştı",
      successText: "Profilinizi inceleyip e-posta ile dönüş yapacağız. Başvurunuzun alındığını e-posta ile de bildirdik.",
      errorText: "Başvurunuz gönderilemedi. Lütfen tekrar deneyin ya da bize e-posta ile ulaşın.",
      validation: {
        name: "Lütfen adınızı yazın.",
        email: "Lütfen geçerli bir e-posta adresi girin.",
        phone: "Lütfen telefon numaranızı yazın.",
        title: "Lütfen ünvanınızı yazın.",
        experience: "Lütfen deneyiminizi seçin.",
        skills: "En az bir uzmanlık alanı seçin.",
        linkedin: "Lütfen geçerli bir LinkedIn profil adresi girin.",
        github: "Lütfen geçerli bir GitHub profil adresi girin.",
        portfolio: "Lütfen geçerli bir adres girin.",
        cv: "Lütfen özgeçmişinizi yükleyin.",
        cvType: "Özgeçmiş PDF, DOC veya DOCX olmalı.",
        cvSize: "Özgeçmiş en fazla 3 MB olabilir.",
        workModels: "En az bir çalışma modeli seçin.",
        availability: "Lütfen uygunluğunuzu seçin.",
        privacy: "Devam etmek için aydınlatmayı okuduğunuzu onaylayın.",
        agreement: "Devam etmek için çerçeve sözleşmeyi onaylayın.",
      },
      email: {
        applicantSubject: "Astra Geliştirici Ağı başvurunuz alındı",
        applicantGreeting: (name) => `Merhaba ${name}, başvurunuz bize ulaştı.`,
        applicantText:
          "Profilinizi inceleyip genellikle 5 iş günü içinde e-posta ile dönüş yapıyoruz. Onayladığınız çerçeve sözleşmeye aşağıdaki bağlantıdan her zaman ulaşabilirsiniz.",
        agreementLink: "Çerçeve sözleşmeyi görüntüle",
        teamSubject: (name, title) => `Yeni geliştirici başvurusu: ${name} – ${title}`,
        teamCvNote: "Özgeçmiş bu e-postanın ekindedir.",
      },
    },
  },
  developerAgreement: {
    meta: {
      title: "Astra Geliştirici Ağı Çerçeve Sözleşmesi",
      description:
        "Astra Geliştirici Ağı'na katılan geliştiricilerle çalışma, gizlilik ve müşteri sistemlerine erişim esasları.",
    },
    updatedAt: "2026-10-14",
    updatedLabel: "Son güncelleme",
    sections: [
      {
        heading: "1. Taraflar ve konu",
        paragraphs: [
          "Bu sözleşme, Astra Yazılım (“Astra”) ile Astra Geliştirici Ağı'na başvuran ve başvurusu onaylanan geliştirici (“Geliştirici”) arasındaki çalışma esaslarını düzenler.",
          "Astra, müşterilerinden gelen yazılım ve e-ticaret işlerini Geliştirici'nin yetkinliklerine uygun olarak Geliştirici'ye önerir; Geliştirici kabul ettiği işleri bu sözleşmeye göre yürütür.",
        ],
      },
      {
        heading: "2. Yürürlük",
        paragraphs: [
          "Başvuru sırasında onaylanan bu sözleşme, başvurunun Astra tarafından kabul edilip Geliştirici'ye bildirilmesiyle yürürlüğe girer. Başvuru reddedilirse taraflar için bir yükümlülük doğmaz; başvuru sırasında paylaşılan bilgiler yine gizli tutulur.",
        ],
      },
      {
        heading: "3. Bağımsız çalışma",
        paragraphs: [
          "Geliştirici, Astra'nın çalışanı değildir; işleri bağımsız olarak ve kendi çalışma düzeniyle yürütür. Bu sözleşme bir iş sözleşmesi, ortaklık ya da münhasırlık ilişkisi kurmaz. Geliştirici, aldığı ödemelere ilişkin vergi ve mevzuat yükümlülüklerinden kendisi sorumludur.",
        ],
      },
      {
        heading: "4. Görev ataması",
        paragraphs: [
          "Her iş, Astra tarafından Geliştirici'ye bir görev bildirimiyle önerilir. Görev bildiriminde işin kapsamı, çalışma modeli (iş bitirme, haftalık veya aylık), tahmini efor, teslim tarihi ve bedel yer alır.",
          "Geliştirici görevi kabul etmek zorunda değildir. Kabul ettiği görev bildirimi bu sözleşmenin eki sayılır; ayrıca bir sözleşme imzalanması gerekmez.",
        ],
      },
      {
        heading: "5. Gizlilik",
        paragraphs: [
          "Geliştirici; müşteri adları, iş talepleri, kaynak kodları, tasarımlar, satış ve müşteri verileri ile görev sırasında öğrendiği her türlü bilgiyi gizli tutar, yalnızca ilgili görev için kullanır ve üçüncü kişilerle paylaşmaz. Bu yükümlülük sözleşme sona erdikten sonra da süresiz olarak devam eder.",
        ],
      },
      {
        heading: "6. Müşteri sistemlerine erişim",
        paragraphs: [
          "Görev için Geliştirici'ye ikas, Ticimax, Shopify gibi platformlarda ya da sunucu, kod deposu ve üçüncü taraf hizmetlerde kullanıcı hesabı açılabilir. Bu hesaplar kişiye özeldir, başkasıyla paylaşılamaz ve yalnızca görev kapsamındaki işler için kullanılır.",
          "Geliştirici müşteri verilerini kendi cihazına veya hesaplarına kopyalamaz, mümkün olan her yerde iki adımlı doğrulama kullanır ve görev bittiğinde erişimlerin kapatılmasına yardımcı olur. Bir güvenlik ihlalinden veya yetkisiz erişimden şüphelenirse durumu en geç 24 saat içinde Astra'ya bildirir.",
        ],
      },
      {
        heading: "7. Kişisel veriler",
        paragraphs: [
          "Müşteri sistemlerindeki kişisel veriler (örneğin alıcı adları, adresleri ve sipariş bilgileri) 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında korunur. Geliştirici bu verilere yalnızca görevin gerektirdiği ölçüde erişir, Astra'nın ve müşterinin talimatları dışında işlemez ve gerekli teknik ve idari tedbirleri alır.",
        ],
      },
      {
        heading: "8. Müşterilerle doğrudan çalışma",
        paragraphs: [
          "Geliştirici, Astra aracılığıyla tanıştığı müşterilere son görevin bitiminden itibaren 12 ay boyunca Astra dışında doğrudan çalışma teklif etmez ve bu müşterilerden doğrudan iş kabul etmez. Müşteri Geliştirici'ye doğrudan ulaşırsa Geliştirici durumu Astra'ya bildirir.",
        ],
      },
      {
        heading: "9. Fikri mülkiyet",
        paragraphs: [
          "Görev kapsamında üretilen kod, tasarım ve dokümanlar üzerindeki haklar, görev bedelinin ödenmesiyle müşteriye veya Astra'ya geçer. Geliştirici üçüncü kişilerin haklarını ihlal eden içerik kullanmaz; açık kaynak bileşenleri lisans koşullarına uygun kullanır.",
        ],
      },
      {
        heading: "10. Bedel ve ödeme",
        paragraphs: [
          "Görev bedeli ve ödeme dönemi görev bildiriminde belirtilir. Ödeme, teslimin Astra tarafından onaylanmasının ardından mevzuata uygun bir belge karşılığında yapılır.",
        ],
      },
      {
        heading: "11. Kalite ve iletişim",
        paragraphs: [
          "Geliştirici kabul ettiği görevleri belirtilen sürede ve özenle tamamlar, ilerlemeyi Astra'nın belirlediği kanal üzerinden düzenli olarak paylaşır ve gecikme ihtimalini öğrendiği anda bildirir.",
        ],
      },
      {
        heading: "12. Astra Verified Developer rozeti",
        paragraphs: [
          "Onaylanan Geliştirici'ye Astra Verified Developer rozeti verilir. Geliştirici rozeti LinkedIn, GitHub veya kişisel sitesi gibi profesyonel profillerinde Astra ile çalıştığını belirtmek için kullanabilir. Bu sözleşmeye aykırılık veya tekrarlanan kalite sorunları halinde Astra rozeti geri alabilir.",
        ],
      },
      {
        heading: "13. Sona erme",
        paragraphs: [
          "Taraflar sözleşmeyi dilediği zaman yazılı bildirimle sona erdirebilir. Devam eden görevler, taraflar aksini kararlaştırmadıkça tamamlanır ve bedeli ödenir. Gizlilik, kişisel veriler, müşterilerle doğrudan çalışma ve fikri mülkiyet hükümleri sözleşme sona erdikten sonra da geçerlidir.",
        ],
      },
      {
        heading: "14. Uygulanacak hukuk",
        paragraphs: [
          "Bu sözleşme Türkiye Cumhuriyeti hukukuna tabidir. Uyuşmazlıklarda İstanbul mahkemeleri ve icra daireleri yetkilidir.",
        ],
      },
    ],
  },
  privacy: {
    meta: {
      title: "Gizlilik Politikası",
      description: "Astra Yazılım web sitesinde kişisel verilerinizin nasıl işlendiğine dair bilgilendirme.",
    },
    updatedAt: "2026-10-14",
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
        heading: "Geliştirici başvuruları",
        paragraphs: [
          "Astra Geliştirici Ağı başvurularında ad, iletişim bilgileri, ünvan, yetkinlikler, LinkedIn ve GitHub profilleri, özgeçmiş ve çalışma tercihlerinizi; başvurunuzu değerlendirmek, onaylanırsanız size uygun işleri önermek ve sözleşme ilişkisini yürütmek amacıyla işleriz. Hukuki sebep, KVKK m.5/2(c) uyarınca bir sözleşmenin kurulması ve ifasıdır.",
          "Başvurunuz reddedilirse verilerinizi en geç bir yıl içinde sileriz; onaylanırsanız çalışma ilişkisi süresince ve yasal saklama süreleri boyunca saklarız. Başvurular ve özgeçmişler e-posta altyapısı sağlayıcımız aracılığıyla iletilir.",
        ],
      },
      {
        heading: "Çerezler ve analitik",
        paragraphs: [
          "Sitemiz, yalnızca onay vermeniz halinde Google Analytics çerezlerini (_ga ve _ga_ ile başlayanlar) kullanır. Bu çerezler; ziyaret edilen sayfalar, ziyaret süresi, yönlendiren kaynak ve cihaz türü gibi kullanım verilerini toplayarak sitemizi geliştirmemize yardımcı olur ve en fazla 2 yıl saklanır. Bu veriler Google LLC tarafından yurt dışındaki sunucularda işlenir; hukuki sebep, KVKK m.5/1 uyarınca açık rızanızdır.",
          "Onay vermezseniz analitik çerez kullanılmaz. Tercihinizi sayfanın altındaki “Çerez tercihleri” bağlantısından istediğiniz zaman değiştirebilir, verdiğiniz onayı geri alabilirsiniz.",
        ],
      },
      {
        heading: "Tarayıcı tercihleri",
        paragraphs: ["Tema ve çerez tercihleriniz yalnızca tarayıcınızda saklanır ve sunucularımıza iletilmez."],
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
