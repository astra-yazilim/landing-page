import type { ProductId } from "@/config/products";
import type { ProjectId } from "@/config/projects";
import type { ProductText, ProjectText } from "@/content/types";

export const products: Record<ProductId, ProductText> = {
  stock: {
    name: "Stok Takip Uygulaması",
    tagline: "Stoklarınızı kolayca yönetin.",
    description:
      "Depo ve mağaza stoklarınızı tek ekrandan izleyin. Giriş, çıkış ve sayım hareketleri anlık işlenir; kritik seviyeye düşen ürünler için uyarı alırsınız.",
    features: [
      "Çoklu depo ve lokasyon takibi",
      "Barkod ile hızlı giriş ve çıkış",
      "Kritik stok uyarıları",
      "E-ticaret ve pazaryeri stok eşitleme",
    ],
  },
  supply: {
    name: "Tedarik Yönetim Sistemi",
    tagline: "Tedarik süreçlerinizi dijitalleştirin.",
    description:
      "Satın alma talebinden teslimata kadar tedarik sürecini tek akışta yönetin. Tedarikçi teklifleri, siparişler ve teslim tarihleri kayıt altında kalır.",
    features: [
      "Satın alma talebi ve onay akışları",
      "Tedarikçi ve teklif karşılaştırma",
      "Sipariş ve teslimat takibi",
      "Maliyet ve performans raporları",
    ],
  },
  deposit: {
    name: "Depozito Takip Uygulaması",
    tagline: "Depozito süreçlerinizi kontrol altında tutun.",
    description:
      "Müşterilere verilen depozitolu ürünleri ve iadelerini kayıt altına alın. Kimde ne kadar depozito olduğunu ve tahsilat durumunu her an görün.",
    features: [
      "Müşteri bazlı depozito bakiyesi",
      "Teslim ve iade hareketleri",
      "Tahsilat ve mutabakat ekranları",
      "Saha ekibi için mobil kullanım",
    ],
  },
  workflow: {
    name: "Özel İş Takip Çözümleri",
    tagline: "İş süreçlerinizi verimli yönetin.",
    description:
      "İşletmenizin kendi akışına göre şekillenen görev ve süreç takip sistemi. Kimin ne üzerinde çalıştığını, hangi işin nerede beklediğini net görürsünüz.",
    features: [
      "Size özel iş akışı ve durumlar",
      "Görev atama ve bildirimler",
      "Rol bazlı yetkilendirme",
      "Yönetici özet ekranları",
    ],
  },
};

export const projects: Record<ProjectId, ProjectText> = {
  ekinKocadag: {
    title: "Ekin Kocadağ",
    category: "E-ticaret",
    summary: "Zeytinyağı ve doğal ürünler için ürün öneri akışı ve sohbet asistanı içeren e-ticaret mağazası.",
  },
  stargazeApp: {
    title: "Stargaze Mobil",
    category: "Astroloji",
    summary: "Günlük ve aylık burç yorumları sunan astroloji mobil uygulaması.",
  },
  salesCollection: {
    title: "Satış ve Tahsilat Platformu",
    category: "Saha yönetimi",
    summary: "Gıda pazarlama firması için alacak, tahsilat ve bölge takibi yapan saha yönetim paneli.",
  },
  huntflow: {
    title: "HuntFlow",
    category: "SaaS",
    summary: "Product Hunt lansmanlarını simüle etmeye yarayan SaaS ürününün tanıtım sitesi.",
  },
  torkImplant: {
    title: "Tork İmplant",
    category: "Sağlık",
    summary: "Diş implant sistemleri üreticisi için ürün, teknoloji ve doküman bölümleri olan kurumsal site.",
  },
  avukatevkil: {
    title: "Avukatevkil",
    category: "Hukuk",
    summary: "Avukatların iş ilanı açıp başvuru aldığı yardımlaşma platformu.",
  },
  nadirGold: {
    title: "Nadir Gold",
    category: "E-ticaret",
    summary: "Altın ve gümüş ürünleri için çevrim içi satış sitesi.",
  },
  luneraHome: {
    title: "Lunera Home Design",
    category: "E-ticaret",
    summary: "Sofra ve ev dekorasyon ürünleri için sepet ve favori listesi olan çok dilli e-ticaret sitesi.",
  },
  stargazeWeb: {
    title: "Stargaze",
    category: "Astroloji",
    summary: "Doğum haritası ve burç yorumları sunan astroloji sitesi.",
  },
  ikPortal: {
    title: "İK Süreçleri Portalı",
    category: "İnsan kaynakları",
    summary: "İzin ve avans taleplerini, onayları ve takvimi tek yerden yöneten İK portalı.",
  },
  emlakKonut: {
    title: "Emlak Konut Gayrimenkul Sertifikası",
    category: "Gayrimenkul",
    summary: "Gayrimenkul sertifikası projesini tanıtan kampanya sitesi.",
  },
  questionTeams: {
    title: "Question Ekip Yönetimi",
    category: "Ekip yönetimi",
    summary: "Takımları, soru havuzunu ve testleri yöneten ekip yönetim paneli.",
  },
  toog: {
    title: "Toog",
    category: "Medya",
    summary: "Film ve dizi izleme platformu arayüzü.",
  },
  ikilem: {
    title: "ikilem.org",
    category: "Topluluk",
    summary: "Kullanıcıların ikilemlerini paylaşıp karar süreçlerini kolaylaştırmayı amaçlayan topluluk platformu.",
  },
  alistak: {
    title: "Alistak Alüminyum Sistemleri",
    category: "Üretim",
    summary: "Alüminyum doğrama sistemleri üreticisi için çok dilli kurumsal site.",
  },
  daphneBeauty: {
    title: "Daphne Beauty",
    category: "Güzellik",
    summary: "Kalıcı makyaj stüdyosu için İngilizce tanıtım ve randevu sitesi.",
  },
  adminPanel: {
    title: "Yönetim Paneli",
    category: "Yönetim paneli",
    summary: "Satış, kullanıcı ve proje verilerini gösteren yönetim paneli arayüzü.",
  },
  klinikdent: {
    title: "Klinikdent",
    category: "Sağlık",
    summary: "Ağız ve diş sağlığı polikliniği için tedavileri tanıtan çok dilli site.",
  },
  bebe: {
    title: "Bebe",
    category: "Yayıncılık",
    summary: "Çocuk kitapları için alışveriş sepetli tanıtım sitesi.",
  },
  flipMaster: {
    title: "Flip Master",
    category: "Oyun",
    summary: "Skor tablosu olan tarayıcı tabanlı kart oyunu.",
  },
  ephesusTaxi: {
    title: "Ephesus Taxi",
    category: "Ulaşım",
    summary: "Taksi ve havalimanı transfer hizmeti için tanıtım sitesi.",
  },
  emfar: {
    title: "Emfar Yangın Söndürme",
    category: "Güvenlik",
    summary: "Yangın söndürme ve güvenlik sistemleri firması için kurumsal site.",
  },
  fatihRentACar: {
    title: "Fatih Rent A Car",
    category: "Araç kiralama",
    summary: "Araç kiralama firması için hızlı rezervasyon formu içeren site.",
  },
  farmenOto: {
    title: "Farmen Oto Elektronik",
    category: "Otomotiv",
    summary: "İstanbul Ümraniye'deki oto elektronik servisi için hizmet tanıtım sitesi.",
  },
  sirius: {
    title: "Sirius Veteriner Kliniği",
    category: "Veterinerlik",
    summary: "Veteriner kliniği ve petshop için tanıtım sitesi.",
  },
  mertBurakTur: {
    title: "Mert Burak Tur",
    category: "Turizm",
    summary: "Yolcu taşımacılığı firması için hizmet ve tur tanıtım sitesi.",
  },
  variciLojistik: {
    title: "Varıcı Lojistik",
    category: "Lojistik",
    summary: "Kurye ve lojistik hizmetleri için tanıtım sitesi.",
  },
  zemfa: {
    title: "ZEMFA",
    category: "İnşaat",
    summary: "Kuyu temel ve inşaat çözümleri firması için referans ve proje bölümleri olan kurumsal site.",
  },
};
