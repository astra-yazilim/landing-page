import type { ServiceId } from "@/config/services";
import type { ServiceText } from "@/content/types";

export const services: Record<ServiceId, ServiceText> = {
  ecommerce: {
    slug: "e-ticaret-altyapi-ve-ozel-gelistirme",
    title: "E-Ticaret Altyapısı ve Özel Geliştirme",
    shortTitle: "E-Ticaret Geliştirme",
    summary:
      "ikas, Ticimax ve WooCommerce için derin özel kod. Özel arayüz, ödeme adımı optimizasyonu, CAPI/GTM kurulumları ve anında hız artışı.",
    description:
      "Hazır temanın bittiği yerde biz başlıyoruz. Mağazanızın altyapısına dokunmadan, platformun izin verdiği her noktada özel kod yazıyor; sepetten ödemeye kadar her adımı ölçüp iyileştiriyoruz.",
    tags: ["ikas", "Ticimax", "WooCommerce", "CAPI", "GTM", "Checkout"],
    features: [
      {
        title: "Platforma özel derin geliştirme",
        text: "ikas, Ticimax ve WooCommerce'in tema, script ve API katmanlarında temanın sunmadığı bileşenleri sıfırdan yazıyoruz.",
      },
      {
        title: "Ödeme adımı optimizasyonu",
        text: "Sepet ve ödeme akışındaki sürtünmeyi veriye dayanarak azaltıyor, terk edilen sepetleri geri kazandıracak arayüzler kuruyoruz.",
      },
      {
        title: "Ölçüm altyapısı",
        text: "Meta CAPI, GA4 ve GTM kurulumlarını sunucu taraflı ve tutarlı çalışacak şekilde yapılandırıyoruz.",
      },
      {
        title: "Anında hız artışı",
        text: "Görsel, script ve üçüncü parti yükünü ayıklayıp mağazanızı 1 saniyelik açılış hedefine taşıyoruz.",
      },
    ],
    deliverables: [
      "Özel ürün, kategori ve kampanya bileşenleri",
      "Sepet ve ödeme akışı iyileştirmeleri",
      "CAPI, GA4 ve GTM kurulumu ve doğrulaması",
      "Hız ve Core Web Vitals raporu",
    ],
    faqs: [
      {
        question: "Mevcut temamı değiştirmeden çalışabilir misiniz?",
        answer:
          "Evet. Çoğu işte mevcut temanızın üzerine özel bileşenler ekliyor, yalnızca ihtiyaç duyulan bölümleri yeniden yazıyoruz.",
      },
      {
        question: "Hangi e-ticaret altyapılarıyla çalışıyorsunuz?",
        answer:
          "Ağırlıklı olarak ikas, Ticimax ve WooCommerce üzerinde çalışıyoruz. Farklı bir altyapı kullanıyorsanız kapsamı birlikte değerlendiririz.",
      },
    ],
  },
  web: {
    slug: "web-tasarim-ve-hizli-uygulamalar",
    title: "Web Tasarım ve Yüksek Hızlı Uygulamalar",
    shortTitle: "Web Tasarım",
    summary: "Next.js, modern CSS ve Headless CMS. Sıfır gecikme, 100/100 Lighthouse skorları.",
    description:
      "Kurumsal siteler, ürün tanıtım sayfaları ve web uygulamalarını performansı tasarımın bir parçası sayarak inşa ediyoruz.",
    tags: ["Next.js", "Headless CMS", "Lighthouse"],
    features: [
      {
        title: "Size özel tasarım",
        text: "Şablon değil; markanıza göre çizilmiş, her ekran boyutunda tutarlı çalışan özgün arayüzler.",
      },
      {
        title: "Performans öncelikli mimari",
        text: "Sunucu taraflı render, akıllı önbellekleme ve optimize görsellerle anında açılan sayfalar.",
      },
      {
        title: "Kolay içerik yönetimi",
        text: "Headless CMS ile ekibiniz geliştiriciye ihtiyaç duymadan içerik yayınlar.",
      },
    ],
    deliverables: [
      "Özgün arayüz tasarımı ve tasarım sistemi",
      "Next.js tabanlı üretim kurulumu",
      "Headless CMS entegrasyonu",
      "Lighthouse ve erişilebilirlik raporu",
    ],
    faqs: [
      {
        question: "Mevcut sitemi taşıyabilir misiniz?",
        answer:
          "Evet. İçeriklerinizi ve arama motoru görünürlüğünüzü koruyarak, yönlendirmeleriyle birlikte yeni altyapıya taşıyoruz.",
      },
    ],
  },
  mobile: {
    slug: "mobil-uygulama-gelistirme",
    title: "Çapraz Platform Mobil Uygulamalar",
    shortTitle: "Mobil Uygulama",
    summary: "React Native ve Expo ile mağazanızla kusursuz senkron çalışan iOS ve Android uygulamaları.",
    description:
      "Tek kod tabanından iki platforma yayınlanan, mağazanızın ürün, stok ve sipariş verisiyle gerçek zamanlı çalışan uygulamalar geliştiriyoruz.",
    tags: ["React Native", "Expo", "iOS", "Android"],
    features: [
      {
        title: "Tek kod tabanı, iki platform",
        text: "iOS ve Android için ayrı ekip maliyeti olmadan, yerel hissiyatlı tek bir uygulama.",
      },
      {
        title: "Mağaza senkronizasyonu",
        text: "Ürün, stok, sepet ve sipariş verileri e-ticaret altyapınızla anlık eşitlenir.",
      },
      {
        title: "Bildirim ve sadakat akışları",
        text: "Anlık bildirimler, kampanya kurguları ve tekrar satın almayı artıran akışlar.",
      },
    ],
    deliverables: [
      "iOS ve Android uygulaması",
      "App Store ve Google Play yayın süreci",
      "Anlık bildirim altyapısı",
      "Güncelleme ve bakım planı",
    ],
    faqs: [
      {
        question: "Uygulama mağazası yayın sürecini siz mi yürütüyorsunuz?",
        answer: "Evet. Hesap kurulumundan inceleme sürecine kadar App Store ve Google Play yayınını biz yönetiyoruz.",
      },
    ],
  },
  automation: {
    slug: "ozel-yazilim-ve-yapay-zeka-otomasyonlari",
    title: "Özel Yazılım ve Yapay Zeka Otomasyonları",
    shortTitle: "Yazılım ve Otomasyon",
    summary: "İç paneller, CRM/ERP entegrasyonları ve manuel işi ortadan kaldıran otomatik iş akışları.",
    description:
      "Ekibinizin her gün tekrar ettiği işleri tespit edip yazılıma devrediyoruz. Sistemleriniz birbiriyle konuşur, siz büyümeye odaklanırsınız.",
    tags: ["Otomasyon", "CRM/ERP", "Yapay Zeka", "Panel"],
    features: [
      {
        title: "İç paneller",
        text: "Sipariş, stok, finans ve operasyon verisini tek ekranda toplayan özel yönetim panelleri.",
      },
      {
        title: "Entegrasyonlar",
        text: "CRM, ERP, muhasebe, kargo ve pazaryeri sistemleriniz arasında çift yönlü veri akışı.",
      },
      {
        title: "Yapay zeka destekli akışlar",
        text: "Müşteri mesajlarını sınıflandıran, içerik üreten ve rapor hazırlayan otomasyonlar.",
      },
    ],
    deliverables: [
      "İhtiyaç analizi ve süreç haritası",
      "Özel panel veya entegrasyon servisi",
      "Otomasyon senaryoları ve izleme ekranı",
      "Dokümantasyon ve ekip eğitimi",
    ],
    faqs: [
      {
        question: "Hangi süreçler otomasyona uygun?",
        answer:
          "Kuralları belli olan ve düzenli tekrar eden her iş uygundur: sipariş aktarımı, stok eşitleme, faturalama, raporlama ve müşteri mesajlarının yönlendirilmesi gibi.",
      },
    ],
  },
  seo: {
    slug: "buyume-ve-teknik-seo",
    title: "Büyüme ve Teknik SEO",
    shortTitle: "Teknik SEO",
    summary: "Schema işaretlemeleri, dönüşüm oranı optimizasyonu (CRO) ve arama sonuçlarında üstünlük.",
    description:
      "Trafiği artırmak yetmez; gelen ziyaretçinin satın alması gerekir. Teknik SEO ile dönüşüm optimizasyonunu aynı masada ele alıyoruz.",
    tags: ["Schema", "CRO", "Core Web Vitals"],
    features: [
      {
        title: "Teknik SEO denetimi",
        text: "Tarama, indeksleme, site mimarisi ve Core Web Vitals sorunlarını tespit edip gideriyoruz.",
      },
      {
        title: "Yapısal veri",
        text: "Ürün, yorum, SSS ve kurum şemalarıyla arama sonuçlarında zengin görünüm.",
      },
      {
        title: "Dönüşüm optimizasyonu",
        text: "A/B testleri ve davranış analiziyle dönüşüm oranını ölçülebilir biçimde yükseltiyoruz.",
      },
    ],
    deliverables: [
      "Teknik SEO denetim raporu",
      "Schema işaretleme kurulumu",
      "CRO test planı ve uygulaması",
      "Aylık performans raporu",
    ],
    faqs: [
      {
        question: "SEO çalışmasının etkisi ne zaman görülür?",
        answer:
          "Teknik düzeltmelerin etkisi genellikle birkaç hafta içinde ölçülmeye başlar; kalıcı sıralama kazanımları ise sitenin durumuna ve rekabete göre değişir.",
      },
    ],
  },
  hosting: {
    slug: "bulut-hosting-ve-7-24-bakim",
    title: "Bulut Hosting ve 7/24 Bakım",
    shortTitle: "Hosting ve Bakım",
    summary: "Vercel ve Cloudflare kurulumları, kesintisiz bakım ve anında acil destek.",
    description:
      "Siteniz yayındayken de yanınızdayız. Altyapıyı kuruyor, izliyor ve bir sorun çıktığında siz fark etmeden müdahale ediyoruz.",
    tags: ["Vercel", "Cloudflare", "İzleme"],
    features: [
      {
        title: "Modern bulut altyapısı",
        text: "Vercel ve Cloudflare üzerinde küresel dağıtım, önbellekleme ve güvenlik katmanları.",
      },
      {
        title: "Kesintisiz bakım",
        text: "Güncellemeler ve yayınlar ziyaretçileriniz hiçbir şey fark etmeden yapılır.",
      },
      {
        title: "Acil durum desteği",
        text: "Kritik sorunlarda doğrudan geliştiriciye ulaşırsınız; araya destek kuyruğu girmez.",
      },
    ],
    deliverables: [
      "Hosting ve CDN kurulumu",
      "Çalışma süresi ve hata izleme",
      "Düzenli güncelleme ve yedekleme",
      "Acil destek kanalı",
    ],
    faqs: [
      {
        question: "Mevcut hostingimden taşıma yapıyor musunuz?",
        answer: "Evet. Taşımayı kesinti yaşatmadan, alan adı ve e-posta ayarlarınızı koruyarak yapıyoruz.",
      },
    ],
  },
  marketplace: {
    slug: "e-ticaret-ve-pazaryeri-yonetimi",
    title: "E-Ticaret ve Pazaryeri Yönetimi",
    shortTitle: "Pazaryeri Yönetimi",
    summary: "Mağaza kurulumu, ürün yönetimi, satış operasyonları ve kanal performans takibi.",
    description:
      "Kendi mağazanız ve pazaryerlerindeki satışınızı tek elden yönetiyoruz. Ürün girişinden kampanya takibine kadar günlük operasyonu üstleniyor, kanalların performansını düzenli raporluyoruz.",
    tags: ["Pazaryeri", "Ürün Yönetimi", "Operasyon"],
    features: [
      {
        title: "Mağaza kurulumu ve ürün yönetimi",
        text: "Mağaza açılışı, kategori yapısı, ürün içerikleri ve fiyat-stok güncellemelerini yürütüyoruz.",
      },
      {
        title: "Satış operasyonları",
        text: "Kampanya katılımları, sipariş süreçleri ve müşteri sorularının takibini düzenli hale getiriyoruz.",
      },
      {
        title: "Kanal performans takibi",
        text: "Her satış kanalının ciro, kârlılık ve görünürlük verilerini karşılaştırmalı olarak izliyoruz.",
      },
    ],
    deliverables: [
      "Mağaza ve pazaryeri hesap kurulumu",
      "Ürün içerik ve katalog yönetimi",
      "Kampanya ve fiyat takibi",
      "Aylık kanal performans raporu",
    ],
    faqs: [
      {
        question: "Hangi pazaryerlerinde yönetim yapıyorsunuz?",
        answer:
          "Türkiye'de yaygın kullanılan pazaryerlerinde ve kendi e-ticaret mağazanızda yönetim sağlıyoruz. Kanal listesini ihtiyacınıza göre birlikte belirliyoruz.",
      },
    ],
  },
  ads: {
    slug: "dijital-reklam-ve-kampanya-yonetimi",
    title: "Dijital Reklam ve Kampanya Yönetimi",
    shortTitle: "Dijital Reklam",
    summary: "Google Ads, Meta reklamları, kampanya kurguları, bütçe yönetimi ve dönüşüm optimizasyonu.",
    description:
      "Reklam bütçenizi ölçülebilir satışa çeviriyoruz. Kampanyaları doğru ölçüm altyapısıyla kuruyor, veriye göre sürekli optimize ediyoruz.",
    tags: ["Google Ads", "Meta Ads", "Dönüşüm"],
    features: [
      {
        title: "Kampanya kurgusu",
        text: "Hedef kitle, teklif stratejisi ve reklam yapısını ürününüze ve hedefinize göre planlıyoruz.",
      },
      {
        title: "Bütçe yönetimi",
        text: "Bütçeyi kanal ve kampanya bazında getiriye göre dağıtıyor, verimsiz harcamayı kesiyoruz.",
      },
      {
        title: "Dönüşüm optimizasyonu",
        text: "Dönüşüm takibini doğru kuruyor, reklamdan satışa giden yolu adım adım iyileştiriyoruz.",
      },
    ],
    deliverables: [
      "Google Ads ve Meta reklam hesap yapılandırması",
      "Kampanya ve hedefleme planı",
      "Dönüşüm takibi kurulumu",
      "Düzenli performans raporu",
    ],
    faqs: [
      {
        question: "Reklam bütçesi hizmet bedeline dahil mi?",
        answer:
          "Hayır. Reklam bütçesi doğrudan reklam platformuna ödenir; hizmet bedelimiz kampanyaların kurulumu ve yönetimini kapsar.",
      },
    ],
  },
  creative: {
    slug: "urun-gorselleri-ve-kreatif-icerik",
    title: "Ürün Görselleri ve Kreatif İçerik",
    shortTitle: "Görsel ve Kreatif",
    summary: "Ürün fotoğrafçılığı, görsel yenileme, banner tasarımları ve dijital kreatif içerikler.",
    description:
      "Ürününüzü ekranda hak ettiği gibi gösteriyoruz. Mağaza, pazaryeri ve reklam kanallarınız için tutarlı ve satışa odaklı görseller üretiyoruz.",
    tags: ["Ürün Görseli", "Banner", "Kreatif"],
    features: [
      {
        title: "Ürün görselleri",
        text: "Ürün fotoğraflarını çekiyor ya da mevcut görsellerinizi temizleyip yeniliyoruz.",
      },
      {
        title: "Banner ve kampanya tasarımları",
        text: "Ana sayfa, kategori ve kampanya dönemleri için dikkat çeken görseller hazırlıyoruz.",
      },
      {
        title: "Reklam kreatifleri",
        text: "Sosyal medya ve reklam platformlarının ölçülerine uygun kreatif setler üretiyoruz.",
      },
    ],
    deliverables: [
      "Düzenlenmiş ürün görselleri",
      "Banner ve kampanya görsel seti",
      "Reklam kreatifleri",
      "Marka ile uyumlu görsel şablonlar",
    ],
    faqs: [
      {
        question: "Mevcut ürün fotoğraflarımı iyileştirebilir misiniz?",
        answer:
          "Evet. Arka plan temizleme, renk düzeltme ve yeniden boyutlandırma ile mevcut görsellerinizi mağaza standartlarına uygun hale getiriyoruz.",
      },
    ],
  },
  analytics: {
    slug: "veri-analizi-ve-raporlama",
    title: "Veri Analizi ve Raporlama",
    shortTitle: "Veri ve Raporlama",
    summary: "Satış, maliyet, reklam ve kârlılık verilerini anlamlı raporlara dönüştürüyoruz.",
    description:
      "Farklı sistemlerde dağınık duran verilerinizi bir araya getiriyoruz. Kararlarınızı tahmine değil, güncel ve anlaşılır raporlara dayandırırsınız.",
    tags: ["Raporlama", "Panel", "Kârlılık"],
    features: [
      {
        title: "Veri birleştirme",
        text: "Mağaza, pazaryeri, reklam ve muhasebe verilerini tek bir kaynakta topluyoruz.",
      },
      {
        title: "Yönetim panelleri",
        text: "Satış, maliyet ve kârlılığı tek ekranda gösteren, otomatik güncellenen paneller kuruyoruz.",
      },
      {
        title: "Düzenli raporlama",
        text: "Haftalık ve aylık raporlarla neyin işe yaradığını ve nerede kayıp olduğunu gösteriyoruz.",
      },
    ],
    deliverables: [
      "Veri kaynaklarının entegrasyonu",
      "Satış ve kârlılık paneli",
      "Reklam ve kanal performans raporu",
      "Aylık değerlendirme özeti",
    ],
    faqs: [
      {
        question: "Hangi verileri raporlayabiliyorsunuz?",
        answer:
          "Satış, sipariş, stok, reklam harcaması, maliyet ve kârlılık verilerini raporlayabiliyoruz. Kapsam, kullandığınız sistemlerin sunduğu veriye göre netleşir.",
      },
    ],
  },
};
