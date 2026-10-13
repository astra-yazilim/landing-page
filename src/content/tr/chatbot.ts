import type { ChatbotContent } from "@/content/types";

export const chatbot: ChatbotContent = {
  title: "Astra Asistan",
  subtitle: "Genel sorularınız için hızlı yanıtlar",
  launcherLabel: "Asistanı aç",
  closeLabel: "Asistanı kapat",
  inputPlaceholder: "Sorunuzu yazın…",
  sendLabel: "Gönder",
  greeting:
    "Merhaba! Hizmetlerimiz, kredi sistemi ve ücretsiz analiz hakkında kısa bilgiler verebilirim. Ne öğrenmek istersiniz?",
  fallback:
    "Bu konuda elimde hazır bir yanıt yok. Ekibimiz size net bilgi verebilir; iletişim formundan yazmanız yeterli.",
  fallbackLink: { label: "İletişime geç", route: "contact" },
  disclaimer: "Asistan genel bilgi verir. Teklif ve detaylar için ekibimizle iletişime geçin.",
  suggestions: [
    "Hangi hizmetleri veriyorsunuz?",
    "Kredi sistemi nasıl çalışır?",
    "Ücretsiz analiz nedir?",
    "Nasıl teklif alırım?",
  ],
  intents: [
    {
      id: "services",
      keywords: ["hizmet", "ne yapiyorsunuz", "neler yapiyorsunuz", "cozum", "yazilim"],
      answer:
        "E-ticaret geliştirme ve pazaryeri yönetimi, web tasarım, mobil uygulama, özel yazılım ve otomasyon, dijital reklam, teknik SEO, ürün görselleri, veri raporlama ve hosting alanlarında çalışıyoruz.",
      link: { label: "Hizmetleri incele", route: "services" },
    },
    {
      id: "products",
      keywords: ["urun", "stok", "tedarik", "depozito", "is takip", "hazir cozum", "demo"],
      answer:
        "Dört hazır yazılım ürünümüz var: stok takip, tedarik yönetimi, depozito takip ve özel iş takip çözümleri. Hepsi işletmenize göre uyarlanabiliyor.",
      link: { label: "Yazılım ürünlerini incele", route: "products" },
    },
    {
      id: "projects",
      keywords: ["proje", "referans", "ornek", "portfoy", "daha once"],
      answer: "Geliştirdiğimiz yazılım, e-ticaret ve web projelerinden örnekleri referanslar sayfasında bulabilirsiniz.",
      link: { label: "Referansları gör", route: "projects" },
    },
    {
      id: "ads",
      keywords: ["reklam", "google ads", "meta", "kampanya", "instagram", "facebook"],
      answer:
        "Google Ads ve Meta reklamlarında kampanya kurgusu, bütçe yönetimi ve dönüşüm optimizasyonu yapıyoruz.",
      link: { label: "Dijital reklam hizmeti", route: "services", service: "ads" },
    },
    {
      id: "creative",
      keywords: ["gorsel", "fotograf", "banner", "kreatif", "tasarim"],
      answer: "Ürün görselleri, banner tasarımları ve reklam kreatifleri hazırlıyoruz.",
      link: { label: "Görsel ve kreatif hizmeti", route: "services", service: "creative" },
    },
    {
      id: "analytics",
      keywords: ["rapor", "veri", "analitik", "karlilik", "dashboard"],
      answer: "Satış, maliyet, reklam ve kârlılık verilerinizi tek panelde toplayıp düzenli raporluyoruz.",
      link: { label: "Veri ve raporlama hizmeti", route: "services", service: "analytics" },
    },
    {
      id: "marketplace",
      keywords: ["pazaryeri", "trendyol", "hepsiburada", "urun yonetimi", "magaza yonetimi"],
      answer:
        "Kendi mağazanız ve pazaryerlerindeki ürün yönetimi, satış operasyonları ve kanal performans takibini üstleniyoruz.",
      link: { label: "Pazaryeri yönetimi", route: "services", service: "marketplace" },
    },
    {
      id: "credits",
      keywords: ["kredi", "gorev", "paket"],
      answer:
        "Kredi paketi alırsınız, ihtiyaç duydukça görev açarsınız. Her görevin kredi karşılığını işe başlamadan önce söyleriz; iş bitince kredi düşer. Aylık taahhüt yoktur.",
      link: { label: "Paketleri gör", route: "pricing" },
    },
    {
      id: "pricing",
      keywords: ["fiyat", "ucret", "kac para", "ne kadar", "maliyet", "butce", "abonelik", "aylik"],
      answer:
        "İki modelimiz var: ihtiyaç anında görev kredisi ve aylık partner aboneliği. Güncel fiyatları ihtiyacınıza göre net bir teklifle iletiyoruz.",
      link: { label: "Fiyatlandırmaya git", route: "pricing" },
    },
    {
      id: "audit",
      keywords: ["analiz", "ucretsiz", "hiz", "pagespeed", "yavas", "performans", "lighthouse"],
      answer:
        "Site adresinizi girin; mobil hız ve arayüz darboğazlarını ölçelim. Tespit ettiğimiz ilk küçük sorunu da ücretsiz düzeltiyoruz.",
      link: { label: "Ücretsiz analiz al", route: "audit" },
    },
    {
      id: "platforms",
      keywords: ["ikas", "ticimax", "woocommerce", "shopify", "altyapi", "platform", "e-ticaret", "eticaret", "magaza"],
      answer:
        "E-ticarette ağırlıklı olarak ikas, Ticimax ve WooCommerce üzerinde özel geliştirme yapıyoruz. Farklı bir altyapınız varsa kapsamı birlikte değerlendiririz.",
      link: { label: "E-ticaret hizmeti", route: "services", service: "ecommerce" },
    },
    {
      id: "mobile",
      keywords: ["mobil", "uygulama", "ios", "android", "react native", "expo"],
      answer:
        "React Native ve Expo ile tek kod tabanından iOS ve Android uygulamaları geliştiriyoruz. Uygulama, mağazanızın ürün ve sipariş verisiyle senkron çalışır.",
      link: { label: "Mobil uygulama hizmeti", route: "services", service: "mobile" },
    },
    {
      id: "automation",
      keywords: ["otomasyon", "yapay zeka", "ai", "crm", "erp", "entegrasyon", "panel"],
      answer:
        "İç paneller, CRM/ERP entegrasyonları ve tekrarlayan işleri ortadan kaldıran yapay zeka destekli otomasyonlar kuruyoruz.",
      link: { label: "Otomasyon hizmeti", route: "services", service: "automation" },
    },
    {
      id: "seo",
      keywords: ["seo", "google", "siralama", "schema", "donusum", "cro"],
      answer:
        "Teknik SEO denetimi, schema işaretlemeleri ve dönüşüm oranı optimizasyonu yapıyoruz; trafikle birlikte satışı da hedefliyoruz.",
      link: { label: "Teknik SEO hizmeti", route: "services", service: "seo" },
    },
    {
      id: "hosting",
      keywords: ["hosting", "sunucu", "bakim", "destek", "vercel", "cloudflare", "acil"],
      answer: "Vercel ve Cloudflare kurulumu, kesintisiz bakım ve kritik durumlar için acil destek sağlıyoruz.",
      link: { label: "Hosting ve bakım", route: "services", service: "hosting" },
    },
    {
      id: "duration",
      keywords: ["sure", "ne zaman", "kac gun", "teslim", "hizli"],
      answer:
        "Süre görevin kapsamına göre değişir. Tahmini teslim süresini, kredi karşılığıyla birlikte işe başlamadan önce paylaşıyoruz.",
    },
    {
      id: "contact",
      keywords: ["teklif", "iletisim", "ulas", "telefon", "mail", "e-posta", "eposta", "whatsapp", "gorusme", "toplanti"],
      answer:
        "İletişim formunu doldurmanız yeterli. İhtiyacınızı inceleyip kapsam, süre ve maliyeti içeren net bir teklifle dönüyoruz.",
      link: { label: "Teklif al", route: "contact" },
    },
    {
      id: "greeting",
      keywords: ["merhaba", "selam", "iyi gunler", "hey"],
      answer: "Merhaba! Hizmetler, fiyatlandırma veya ücretsiz analiz hakkında sorunuzu yazabilirsiniz.",
    },
    {
      id: "thanks",
      keywords: ["tesekkur", "sagol", "eyvallah"],
      answer: "Rica ederim! Başka bir sorunuz olursa buradayım.",
    },
  ],
};
