import type { HomeContent } from "@/content/types";

export const home: HomeContent = {
  hero: {
    badge: "Web · Mobil · E‑ticaret · Yapay zeka",
    title: {
      lead: "Yazılım, tasarım ve dijital büyüme",
      accent: "tek bir ekipte.",
    },
    description:
      "Web siteleri, mobil uygulamalar, e‑ticaret altyapıları ve iş süreçlerinizi kolaylaştıran yazılımlar geliştiriyoruz. İhtiyacınıza göre aylık abonelik ya da kredi modeliyle çalışıyoruz.",
    primaryCta: "Ücretsiz sorun tespiti al",
    secondaryCta: "Çözümleri ve fiyatları incele",
    assurances: ["Taahhüt yok", "İlk sorun tespiti ücretsiz", "Doğrudan geliştirici iletişimi"],
  },
  performance: {
    eyebrow: "Temsili senaryo / Mobil performans",
    title: "Mobil performans",
    states: [
      {
        id: "before",
        label: "Önce",
        caption: "Hazır tema, optimize edilmemiş mağaza",
        score: 38,
        metrics: [
          { label: "Açılış süresi", value: "4,8 sn", ratio: 0.96 },
          { label: "En büyük içerik (LCP)", value: "5,2 sn", ratio: 0.9 },
          { label: "Engelleme süresi (TBT)", value: "890 ms", ratio: 0.82 },
          { label: "Sayfa ağırlığı", value: "6,4 MB", ratio: 0.88 },
        ],
      },
      {
        id: "after",
        label: "Sonra",
        caption: "Hız ve arayüz iyileştirmesinden sonra",
        score: 98,
        metrics: [
          { label: "Açılış süresi", value: "0,9 sn", ratio: 0.18 },
          { label: "En büyük içerik (LCP)", value: "1,1 sn", ratio: 0.2 },
          { label: "Engelleme süresi (TBT)", value: "40 ms", ratio: 0.06 },
          { label: "Sayfa ağırlığı", value: "1,2 MB", ratio: 0.19 },
        ],
      },
    ],
  },
  platformsLabel: "Uzman olduğumuz teknolojiler",
  comparison: {
    eyebrow: "Eski düzen bozuldu",
    title: { lead: "Büyük ajans kalitesi.", accent: "Hantallığı olmadan." },
    paragraphs: [
      "Platformların çoğu size bir bekleme sırası satar. Ajansların çoğu saat satar. Biz sonuç satıyoruz.",
      "Küçük bir CSS düzeltmesi için haftalarca beklemek ya da saatlik faturaları izlemek zorunda değilsiniz.",
    ],
    link: "Nasıl çalıştığımızı görün",
    oldWay: {
      label: "Eski yöntem",
      items: [
        "Yüksek saatlik geliştirici ücretleri",
        "Küçük düzeltmeler için uzun bekleme süreleri",
        "Hantal temalar, yavaş yanıtlar",
        "Her görüşme için ayrı fatura",
      ],
    },
    newWay: {
      label: "Bizim yöntem",
      items: [
        "İhtiyaç olduğunda görev açabileceğiniz kredi sistemi",
        "Geliştiriciyle doğrudan iletişim",
        "Hız ve performans odaklı geliştirme",
        "Şeffaf sabit fiyat veya kredi paketleri",
      ],
    },
    advantages: [
      {
        title: "Tek noktadan çözüm",
        text: "Yazılım, tasarım, reklam ve operasyonu tek ekipten alırsınız; farklı ajanslar arasında koordinasyonla uğraşmazsınız.",
        icon: "gem",
      },
      {
        title: "İşletmeye özel yaklaşım",
        text: "Her işletmenin farklı olduğunu biliyor, hazır kalıp yerine size uygun çözümü kuruyoruz.",
        icon: "users",
      },
      {
        title: "Veri odaklı yönetim",
        text: "Kararları veriye dayandırıyor, yaptığımız işin etkisini ölçüp raporluyoruz.",
        icon: "chart",
      },
      {
        title: "Sürekli teknik destek",
        text: "Proje bittikten sonra da yanınızdayız; bakım ve acil durumlarda doğrudan bize ulaşırsınız.",
        icon: "headset",
      },
    ],
  },
  services: {
    eyebrow: "Haksız avantaj",
    title: { lead: "Daha hızlı ilerlemek için", accent: "ihtiyacınız olan her şey." },
    description:
      "Yazılımdan reklama, görselden raporlamaya; dijital dönüşümünüz için gereken tüm hizmetler tek bir uzman ekipte.",
    cta: "Tüm hizmetleri gör",
    tile: {
      title: "Aradığınız hizmeti bulamadınız mı?",
      text: "İhtiyacınızı anlatın, size uygun çözümü birlikte şekillendirelim.",
      cta: "İletişime geçin",
    },
  },
  products: {
    eyebrow: "Yazılım ürünlerimiz",
    title: { lead: "Hazır çözümlerle", accent: "daha verimli operasyonlar." },
    description: "Hazır ve ölçeklenebilir yazılım ürünlerimizle işletmenize operasyonel kolaylık sağlıyoruz.",
    cta: "Tüm yazılım ürünleri",
  },
  projects: {
    eyebrow: "Referanslar",
    title: { lead: "Hayata geçirdiğimiz", accent: "projeler." },
    description: "Sağlıktan finansa, e-ticaretten lojistiğe; farklı sektörler için geliştirdiğimiz projelerden bir seçki.",
    cta: "Tüm referansları gör",
  },
  process: {
    eyebrow: "Nasıl çalışıyoruz",
    title: { lead: "Görev açmaktan yayına,", accent: "dört net adım." },
    steps: [
      { title: "Analiz", text: "Sitenizi inceliyor, darboğazları ve en hızlı kazanımları çıkarıyoruz.", icon: "search" },
      {
        title: "Görev",
        text: "İhtiyacı net bir göreve çeviriyor, kredi veya saat karşılığını baştan söylüyoruz.",
        icon: "list",
      },
      {
        title: "Geliştirme",
        text: "Geliştiriciyle doğrudan iletişimdesiniz; ilerlemeyi anlık görürsünüz.",
        icon: "code",
      },
      { title: "Yayın ve ölçüm", text: "Değişikliği yayına alıyor, etkisini rakamlarla raporluyoruz.", icon: "rocket" },
    ],
  },
  pricing: {
    eyebrow: "Tasarımı gereği sade",
    title: { lead: "Size uygun", accent: "modeli seçin." },
    description: "Saatlik fatura sürprizi yok. İhtiyacınıza göre kredi alın ya da aylık partnerimiz olun.",
    cta: "Kredi hesaplayıcıyı ve tüm detayları gör",
  },
  audit: {
    eyebrow: "Bir kazanımla başlayın",
    title: { lead: "Sitenizin hızını", accent: "şimdi ölçelim." },
    description:
      "Adresinizi girin; sitenizi ölçelim. Ekibimiz sonuçları elle de inceleyip sorunların kaynağını 15 dakikalık ücretsiz bir görüşmede sizinle paylaşsın.",
    inputLabel: "E-ticaret veya web sitenizin adresi",
    inputPlaceholder: "https://magazaniz.com",
    submitLabel: "Ücretsiz analiz al",
    loadingLabel: "Analiz ediliyor",
    loadingSteps: ["Sayfa mobil ve masaüstünde açılıyor", "Core Web Vitals ölçülüyor", "Darboğazlar sıralanıyor"],
    note: "Ücretsiz, faydalı ve satış baskısı yok.",
    invalidUrlMessage: "Lütfen geçerli bir site adresi girin.",
    unavailableTitle: "Otomatik ölçüm şu an tamamlanamadı",
    unavailableText: "Adresinizi bize bırakın; sitenizi elle inceleyip analiz raporunu size iletelim.",
    resultTitle: "Ölçüm sonucu",
    resultSource: "Kaynak: Google PageSpeed Insights",
    strategyLabel: "Cihaz",
    strategies: { mobile: "Mobil", desktop: "Masaüstü" },
    strategyUnavailable: "ölçülemedi",
    issuesTitle: "Kritik eşiğin altındaki değerler",
    causesLabel: "Bu sitede tespit edilenler",
    explanations: {
      performance:
        "Performans puanı; açılış, tepki ve görsel kararlılık metriklerinin ağırlıklı ortalamasıdır. Düşük puanın kaynağı çoğunlukla ağır JavaScript, optimize edilmemiş görseller ve yavaş sunucu yanıtıdır.",
      seo: "Arama motorları sayfayı tararken ve anlamlandırırken sorun yaşıyor. Kaynak genellikle eksik başlık ve açıklama etiketleri, taranamayan bağlantılar veya indekslemeyi engelleyen ayarlardır.",
      accessibility:
        "Ekran okuyucu veya klavye kullanan ziyaretçiler sayfanın bazı bölümlerini kullanamıyor. Kaynak genellikle düşük renk kontrastı, etiketsiz bağlantı ve butonlar ile hatalı başlık sırasıdır.",
      "best-practices":
        "Sayfa güncel web standartlarının ve güvenlik pratiklerinin gerisinde kalıyor. Kaynak genellikle konsol hataları, üçüncü taraf çerezleri, güvensiz istekler veya eskimiş kütüphanelerdir.",
      "largest-contentful-paint":
        "Sayfanın en büyük görseli veya metin bloğu geç görünüyor; ziyaretçi sayfayı açılmamış olarak algılıyor. Kaynak genellikle büyük kapak görselleri, oluşturmayı engelleyen CSS ve JavaScript ile yavaş sunucu yanıtıdır.",
      "first-contentful-paint":
        "İlk içerik ekrana geç geliyor; ziyaretçi uzun süre boş sayfa görüyor. Kaynak genellikle yavaş sunucu yanıtı, yönlendirmeler ve oluşturmayı engelleyen CSS ile yazı tipleridir.",
      "total-blocking-time":
        "Sayfa görünse bile dokunma ve tıklamalara geç yanıt veriyor. Kaynak, tarayıcıyı kilitleyen ağır JavaScript'tir; çoğunlukla üçüncü taraf eklentiler, takip kodları ve büyük paketler.",
      "cumulative-layout-shift":
        "Sayfa yüklenirken öğeler yer değiştiriyor ve ziyaretçi yanlış yere tıklayabiliyor. Kaynak genellikle boyutu belirtilmemiş görseller, sonradan eklenen bannerlar ve geç yüklenen yazı tipleridir.",
      "speed-index":
        "Görünür alan yavaş doluyor; içerik parça parça geliyor. Kaynak genellikle oluşturmayı engelleyen dosyalar, ağır JavaScript ve geç yüklenen görsellerdir.",
    },
    opportunitiesTitle: "Öne çıkan iyileştirme fırsatları",
    report: {
      title: "Sonucu e-posta adresime gönder",
      emailLabel: "E-posta adresiniz",
      emailPlaceholder: "ornek@sirket.com",
      submitLabel: "Raporu gönder",
      sendingLabel: "Gönderiliyor…",
      successText: "Rapor e-posta adresinize gönderildi.",
      errorText: "Rapor gönderilemedi. Lütfen tekrar deneyin.",
      marketingLabel:
        "Sitemle ilgili iyileştirme önerileri ve kampanyalardan e-posta ile haberdar olmak istiyorum.",
      privacyNote: "E-posta adresiniz raporu size iletmek için işlenir. ",
      subject: (host) => `${host} için site hızı raporunuz`,
      intro: "Sitenizin mobil ve masaüstü ölçüm sonuçları aşağıda.",
      cta: "15 dakikalık ücretsiz görüşme planlayın",
      footer: "Bu e-postayı, sitemizdeki hız ölçümünün sonucunu e-posta ile istediğiniz için aldınız.",
    },
    resultCta: "Ücretsiz sorun tespiti ve görüşme",
    retryLabel: "Başka bir adres dene",
    categories: {
      performance: "Performans",
      seo: "SEO",
      accessibility: "Erişilebilirlik",
      "best-practices": "En iyi pratikler",
    },
    metrics: {
      "largest-contentful-paint": "En büyük içerik (LCP)",
      "first-contentful-paint": "İlk içerik (FCP)",
      "total-blocking-time": "Engelleme süresi (TBT)",
      "cumulative-layout-shift": "Düzen kayması (CLS)",
      "speed-index": "Hız indeksi",
    },
  },
  faq: {
    eyebrow: "Merak edilenler",
    title: { lead: "Sık sorulan", accent: "sorular." },
  },
  closingCta: {
    title: { lead: "Projenizi", accent: "konuşalım." },
    description: "İhtiyacınızı anlatın; kapsamı, süreyi ve maliyeti net bir teklifle iletelim.",
    primaryCta: "Teklif al",
    secondaryCta: "Ücretsiz analiz iste",
  },
};
