export const WHATSAPP_NUMBER = "6281259969967"
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Halo Lumpia Geget Suramadu, saya mau pesan.",
)}`
export const WHATSAPP_INFO_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Halo, saya ingin bertanya tentang produk Lumpia Geget Suramadu.",
)}`

// Placeholder – replace with the actual GrabFood store URL once available
export const GRABFOOD_LINK = "https://food.grab.com/id/en/restaurants"

export type CategoryId = "jajanan" | "paket-nasi" | "menu-harian" | "lauk-sayur" | "bahan-minuman"

export type MenuCategory = {
  id: CategoryId
  name: string
  subtitle: string
}

export const menuCategories: MenuCategory[] = [
  {
    id: "jajanan",
    name: "Jajanan, Gorengan & Frozen Food",
    subtitle: "Lumpia rebung khas, gorengan renyah, dan stok frozen food praktis.",
  },
  {
    id: "paket-nasi",
    name: "Paket Nasi & Tumpeng",
    subtitle: "Nasi Bebek Madura, Nasi Jumat Berkah, Nasi Kotak, dan Tumpeng Syukuran.",
  },
  {
    id: "menu-harian",
    name: "Paket Menu Harian Komplit",
    subtitle: "Paket makan sehat seimbang lauk & sayur komplit Rp 15.000 / porsi.",
  },
  {
    id: "lauk-sayur",
    name: "Menu Lauk Pauk & Sayur",
    subtitle: "Aneka masakan lauk rumahan (bumbu bali, mangut lele, lontong mie, dll).",
  },
  {
    id: "bahan-minuman",
    name: "Bahan Mentah & Minuman",
    subtitle: "Rebung segar olahan kiloan dan minuman herbal Sinom dingin.",
  },
]

export type MenuItem = {
  name: string
  description: string
  price: string
  image: string
  category: CategoryId
  badge?: string
  featured?: boolean
}

export const menuItems: MenuItem[] = [
  // ── 1. Jajanan, Gorengan & Frozen Food ──────────────────────
  {
    name: "Lumpia Rebung Reguler",
    description: "Lumpia goreng renyah ukuran reguler dengan isian rebung manis gurih khas Lumpia Geget Suramadu.",
    price: "Rp 5.000 / pcs",
    image: "/menu-lumpia.png",
    category: "jajanan",
    badge: "Best Seller",
    featured: true,
  },
  {
    name: "Lumpia Rebung Jumbo",
    description: "Lumpia goreng porsi jumbo mantap dengan isian rebung melimpah dan gurih khas Suramadu.",
    price: "Rp 7.000 / pcs",
    image: "/menu-lumpia.png",
    category: "jajanan",
    badge: "Pilihan Jumbo",
    featured: true,
  },
  {
    name: "Lumpia Frozen",
    description: "Lumpia rebung mentah beku/frozen praktis, siap digoreng sendiri kapan saja di rumah.",
    price: "Rp 25.000 / 5 pcs",
    image: "/menu-lumpia-frozen.jpg",
    category: "jajanan",
    badge: "Frozen Food",
  },
  {
    name: "Pastel (Roguth)",
    description: "Pastel krispi garing berlapis dengan isian rogut ayam dan sayuran creamy khas rumahan.",
    price: "Rp 6.000 / pcs",
    image: "/menu-pastel.png",
    category: "jajanan",
    badge: "Favorit",
  },
  {
    name: "Ote-ote Udang",
    description: "Bakwan udang khas yang renyah keemasan dengan campuran sayuran segar dan topping udang utuh.",
    price: "Rp 10.000 / 3 pcs",
    image: "/menu-ote-ote.png",
    category: "jajanan",
    badge: "Dapat 3 Pcs",
  },
  {
    name: "Tahu Isi Sayur",
    description: "Tahu goreng gurih renyah di luar, berisian tumisan sayuran segar bumbu gurih lezat.",
    price: "Rp 10.000 / 3 pcs",
    image: "/menu-tahu-isi.png",
    category: "jajanan",
    badge: "Dapat 3 Pcs",
  },
  {
    name: "Kroket (Frozen / Goreng)",
    description: "Kroket kentang lezat dengan isian gurih, tersedia pilihan siap makan (goreng) atau frozen.",
    price: "Rp 5.000 / pcs",
    image: "/menu-risol.png",
    category: "jajanan",
  },
  {
    name: "Bergedel",
    description: "Perkedel kentang bumbu rempah pilihan, lembut di dalam dan gurih di luar.",
    price: "Rp 2.500 / pcs",
    image: "/placeholder.svg",
    category: "jajanan",
  },

  // ── 2. Paket Nasi & Tumpeng ─────────────────────────────────
  {
    name: "Nasi Bebek Madura",
    description: "Nasi hangat disajikan dengan bebek goreng gurih krispi khas Madura, bumbu rempah, lalapan, dan sambal pedas.",
    price: "Rp 15.000",
    image: "/menu-nasi-bebek.png",
    category: "paket-nasi",
    badge: "Best Seller",
    featured: true,
  },
  {
    name: "Nasi Jumat Berkah",
    description: "Paket nasi hemat spesial Jumat Berkah lengkap dengan lauk pauk lezat (seperti ayam bakar/goreng, lalapan & sambal).",
    price: "Rp 10.000 / porsi",
    image: "/menu-jumat-berkah.jpg",
    category: "paket-nasi",
    badge: "Spesial Berkah",
  },
  {
    name: "Menu Nasi Porsi Biasa",
    description: "Nasi porsi biasa hangat dengan pilihan lauk harian (ayam/daging/ikan) dan sayur rumahan.",
    price: "Rp 13.000 - Rp 15.000 / porsi",
    image: "/menu-nasi-kotak.png",
    category: "paket-nasi",
  },
  {
    name: "Nasi Kotak",
    description: "Paket konsumsi nasi kotak praktis & higienis untuk rapat, pengajian, atau acara kantor. Harga menyesuaikan menu.",
    price: "Rp 15.000 - Rp 30.000 / kotak",
    image: "/menu-nasi-kotak.png",
    category: "paket-nasi",
    badge: "Bisa Custom",
  },
  {
    name: "Tumpeng (10 Porsi)",
    description: "Nasi tumpeng hias cantik untuk 10 porsi acara syukuran. Bisa nambah lauk sesuai permintaan dengan tambahan harga lauk.",
    price: "Rp 350.000 / 10 porsi",
    image: "/menu-tumpeng.jpg",
    category: "paket-nasi",
    badge: "Acara Syukuran",
  },

  // ── 3. Paket Menu Harian Komplit (Rp 15.000 / porsi) ───────
  {
    name: "Menu Harian 1: Bayam & Botok Udang",
    description: "Paket komplit: Sayur bayem segar, botok udang gurih, tatem ayam crispi, dan dadar jagung renyah.",
    price: "Rp 15.000 / porsi",
    image: "/menu-lauk-pauk.jpg",
    category: "menu-harian",
    badge: "Paket Komplit",
  },
  {
    name: "Menu Harian 2: Sambal Tempe & Dadar Telur",
    description: "Paket komplit: Sambel tempe kacang panjang pedas nikmat disajikan dengan dadar telor hangat.",
    price: "Rp 15.000 / porsi",
    image: "/menu-lauk-pauk.jpg",
    category: "menu-harian",
    badge: "Paket Komplit",
  },
  {
    name: "Menu Harian 3: Ayam Kecap & Tumis Buncis",
    description: "Paket komplit: Ayam kecap bumbu manis gurih meresap dipadu tumis buncis wortel segar.",
    price: "Rp 15.000 / porsi",
    image: "/menu-lauk-pauk.jpg",
    category: "menu-harian",
    badge: "Paket Komplit",
  },
  {
    name: "Menu Harian 4: Bayam, Kreseng Tahu & Telur Puyuh",
    description: "Paket komplit: Sayur bayem segar, kreseng tahu tempe gurih, dan telor puyuh lezat.",
    price: "Rp 15.000 / porsi",
    image: "/menu-lauk-pauk.jpg",
    category: "menu-harian",
    badge: "Paket Komplit",
  },

  // ── 4. Menu Lauk Pauk & Sayur (Satuan / Porsi) ──────────────
  {
    name: "Bali Tahu Telor Bandeng",
    description: "Porsi komplit lauk bumbu bali lezat. Isi komplit: 3 telor, 2 ikan bandeng, tahu, dan tempe.",
    price: "Rp 30.000 / porsi",
    image: "/menu-lauk-pauk.jpg",
    category: "lauk-sayur",
    badge: "Porsi Komplit",
  },
  {
    name: "Mangut Lele",
    description: "Olahan mangut lele kuah santan bumbu rempah gurih pedas khas Jawa. (Isi: 4 lele).",
    price: "Rp 30.000 / porsi",
    image: "/menu-lauk-pauk.jpg",
    category: "lauk-sayur",
    badge: "Isi 4 Lele",
  },
  {
    name: "Masakan Lauk Harian Lainnya",
    description: "Aneka masakan lauk pauk harian rumahan lezat (daging/ayam/ikan/tahu tempe) berganti tiap harinya.",
    price: "Rp 30.000 / porsi",
    image: "/menu-lauk-pauk.jpg",
    category: "lauk-sayur",
  },
  {
    name: "Sayur Sop",
    description: "Sayur sop bening segar dengan potongan wortel, buncis, kentang, dan kaldu gurih harum.",
    price: "Rp 10.000 / porsi",
    image: "/placeholder.svg",
    category: "lauk-sayur",
  },
  {
    name: "Ayam Goreng",
    description: "Ayam goreng bumbu ungkep rempah tradisional yang gurih meresap hingga ke dalam.",
    price: "Rp 6.000 / potong",
    image: "/placeholder.svg",
    category: "lauk-sayur",
  },
  {
    name: "Ayam Kentaki",
    description: "Ayam krispi gaya kentaki dengan tepung berbumbu renyah kriuk lezat.",
    price: "Rp 7.000 / potong",
    image: "/placeholder.svg",
    category: "lauk-sayur",
  },
  {
    name: "Lontong Mie",
    description: "Lontong mie khas Surabaya lengkap dengan lontong, mi kuning, petis gurih, dan taburan kerupuk.",
    price: "Rp 12.000 / porsi",
    image: "/menu-lontong-mie.jpg",
    category: "lauk-sayur",
  },

  // ── 5. Bahan Mentah & Minuman ───────────────────────────────
  {
    name: "Rebung Utuh",
    description: "Rebung segar utuh kualitas pilihan langsung dari pasar, siap diolah sendiri untuk masakan rumahan.",
    price: "Rp 20.000 / kg",
    image: "/menu-rebung.jpg",
    category: "bahan-minuman",
  },
  {
    name: "Rebung Rajang",
    description: "Rebung siap masak yang sudah dirajang/diiris halus dan dibersihkan, praktis untuk lodeh atau lumpia.",
    price: "Rp 22.000 / kg",
    image: "/menu-rebung.jpg",
    category: "bahan-minuman",
  },
  {
    name: "Sinom",
    description: "Minuman herbal tradisional Sinom segar dingin racikan dari kunyit dan daun asam muda asli.",
    price: "Rp 6.000 / botol",
    image: "/menu-sinom.png",
    category: "bahan-minuman",
  },
]

export type Review = {
  name: string
  location: string
  avatar: string        // initials, 2 chars
  avatarColor: string   // tailwind bg class
  rating: number        // 1-5
  text: string
  date: string
  order?: string        // menu yang dipesan
}

export const reviews: Review[] = [
  {
    name: "Sari Dewi",
    location: "Surabaya Pusat",
    avatar: "SD",
    avatarColor: "bg-orange-400",
    rating: 5,
    text: "Lumpianya renyah banget! Beda sama yang lain, ini beneran digoreng fresh waktu pesanan masuk. Sampe rumah masih krispi. Sudah langganan tiap minggu untuk arisan ibu-ibu.",
    date: "2 minggu lalu",
    order: "Lumpia Geget × 30 pcs",
  },
  {
    name: "Budi Santoso",
    location: "Surabaya Timur",
    avatar: "BS",
    avatarColor: "bg-blue-500",
    rating: 5,
    text: "Pesan buat konsumsi rapat kantor 50 pcs lumpia + pastel. Semua on time dan masih panas waktu datang. Respon WA-nya juga cepat dan ramah. Recommended banget!",
    date: "1 minggu lalu",
    order: "Lumpia Geget + Pastel × 50 pcs",
  },
  {
    name: "Mbak Rina",
    location: "Sidoarjo",
    avatar: "MR",
    avatarColor: "bg-pink-500",
    rating: 5,
    text: "Ote-ote udangnya juara! Udangnya kerasa banget, tidak pelit. Sinom-nya juga segar alami. Cocok banget dimakan bareng. Harganya juga masih sangat terjangkau.",
    date: "3 minggu lalu",
    order: "Ote-ote Udang + Sinom",
  },
  {
    name: "Pak Hendra",
    location: "Surabaya Barat",
    avatar: "PH",
    avatarColor: "bg-emerald-500",
    rating: 5,
    text: "Nasi bebek gorengnya mantap, sambalnya nampol! Sudah coba beberapa tempat nasi bebek di Surabaya, ini salah satu yang terbaik. Porsinya juga besar untuk harganya.",
    date: "1 bulan lalu",
    order: "Nasi Bebek",
  },
  {
    name: "Fitri Handayani",
    location: "Surabaya Selatan",
    avatar: "FH",
    avatarColor: "bg-violet-500",
    rating: 5,
    text: "Pesan untuk syukuran keluarga, minta 100 pcs lumpia. Hasilnya memuaskan, semua tamu senang dan minta nambah. Pelayanannya profesional dan tepat waktu. Terima kasih!",
    date: "1 bulan lalu",
    order: "Lumpia Geget × 100 pcs",
  },
  {
    name: "Dian Pratiwi",
    location: "Surabaya Utara",
    avatar: "DP",
    avatarColor: "bg-amber-500",
    rating: 5,
    text: "Sudah 3 bulan jadi pelanggan setia. Kualitasnya konsisten, tidak pernah mengecewakan. Setiap pesan selalu renyah dan bumbunya meresap sempurna. Top markotop!",
    date: "3 hari lalu",
    order: "Lumpia Geget + Pastel",
  },
]


export type Faq = {
  question: string
  answer: string
}

export const faqs: Faq[] = [
  {
    question: "Bagaimana cara memesan?",
    answer:
      "Pilih menu yang Anda inginkan lewat tombol 'Pesan Sekarang', tambahkan ke keranjang, lalu checkout — detail pesanan akan terkirim otomatis ke WhatsApp kami. Anda juga bisa langsung chat ke WhatsApp untuk tanya-tanya terlebih dahulu, atau pesan melalui GrabFood.",
  },
  {
    question: "Apakah bisa pesan dalam jumlah besar untuk acara?",
    answer:
      "Tentu saja! Kami melayani pesanan untuk arisan, syukuran, pernikahan, rapat kantor, dan berbagai acara lainnya. Untuk pesanan di atas 50 pcs, harap pesan minimal H-1 agar semua digoreng fresh dan tepat waktu. Hubungi kami untuk harga spesial pesanan partai.",
  },
  {
    question: "Apakah ada layanan antar ke rumah?",
    answer:
      "Ya! Kami melayani pengantaran untuk area Surabaya dan sekitarnya. Ongkos kirim menyesuaikan jarak dari lokasi kami. Anda juga bisa pesan melalui GrabFood untuk pengantaran yang lebih praktis dengan tracking real-time.",
  },
  {
    question: "Berapa lama lumpia tetap renyah setelah dipesan?",
    answer:
      "Karena digoreng fresh saat pesanan masuk, lumpia paling nikmat dinikmati dalam 1–2 jam pertama. Jika perlu disimpan, panaskan kembali di air fryer selama 3–5 menit atau di oven — lumpia akan kembali garing seperti baru digoreng.",
  },
  {
    question: "Apa saja isian lumpia Geget?",
    answer:
      "Lumpia Geget berisi rebung pilihan yang sudah dirajang, dicampur telur, bumbu rempah khas Surabaya, dan bahan premium lainnya. Isiannya padat, gurih, dan tidak berminyak berlebih. Semua bahan disiapkan fresh setiap harinya.",
  },
  {
    question: "Apakah tersedia rebung utuh atau rajang untuk dibeli?",
    answer:
      "Ya! Kami juga menjual rebung utuh siap olah dan rebung rajang yang sudah bersih dan siap masak. Cocok untuk Anda yang ingin memasak lumpia sendiri di rumah atau untuk keperluan usaha kuliner. Hubungi kami via WhatsApp untuk ketersediaan dan harga.",
  },
  {
    question: "Apakah ada minimal pesanan?",
    answer:
      "Tidak ada minimal pesanan untuk pembelian satuan. Namun untuk pesanan antar/delivery, biasanya ada minimum pembelian agar ongkos kirim lebih efisien. Untuk pesanan acara dalam jumlah besar, kami bisa diskusikan langsung via WhatsApp.",
  },
  {
    question: "Jam berapa bisa memesan?",
    answer:
      "Kami menerima pesanan setiap hari. Untuk pesanan hari itu (same-day), hubungi kami pagi hari agar sempat disiapkan fresh. Untuk pesanan acara atau dalam jumlah besar, pesan minimal H-1. Cek WhatsApp kami untuk info jam operasional terkini.",
  },
  {
    question: "Metode pembayaran apa saja yang diterima?",
    answer:
      "Kami menerima berbagai metode pembayaran: tunai (COD saat pengantaran), transfer bank (BCA, BRI, Mandiri), serta e-wallet seperti QRIS, GoPay, Dana, dan OVO. Untuk pemesanan via GrabFood, pembayaran mengikuti opsi yang tersedia di aplikasi.",
  },
]

export const navLinks = [
  { label: "Tentang", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Pesan", href: "#order" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontak", href: "#contact" },
]
