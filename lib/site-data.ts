export const WHATSAPP_NUMBER = "6281259969967"
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Halo Lumpia Geget Surabaya, saya mau pesan.",
)}`
export const WHATSAPP_INFO_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Halo, saya ingin bertanya tentang produk Lumpia Geget Surabaya.",
)}`

// Placeholder – replace with the actual GrabFood store URL once available
export const GRABFOOD_LINK = "https://food.grab.com/id/en/restaurants"

export type MenuItem = {
  name: string
  description: string
  price: string
  image: string
  featured?: boolean
  badge?: string
  category: "unggulan" | "lainnya"
}

export const menuItems: MenuItem[] = [
  // ── Produk Unggulan ──────────────────────────────────────────
  {
    name: "Lumpia Geget",
    description:
      "Lumpia renyah dengan isian premium yang gurih dan penuh rasa. Digoreng fresh sampai keemasan sempurna — signature khas Lumpia Geget Surabaya.",
    price: "Rp 3.000 / pcs",
    image: "/menu-lumpia.png",
    badge: "Best Seller",
    featured: true,
    category: "unggulan",
  },
  {
    name: "Pastel",
    description: "Pastel garing berisi sayuran dan bumbu rempah khas rumahan. Renyah di setiap gigitan.",
    price: "Rp 2.500 / pcs",
    image: "/menu-pastel.png",
    badge: "Favorit",
    featured: true,
    category: "unggulan",
  },
  {
    name: "Ote-ote Udang",
    description: "Bakwan udang khas Surabaya yang renyah dengan campuran sayuran segar dan udang pilihan.",
    price: "Rp 3.000 / pcs",
    image: "/menu-ote-ote.png",
    badge: "Favorit",
    featured: true,
    category: "unggulan",
  },
  // ── Produk Lainnya ───────────────────────────────────────────
  {
    name: "Sinom",
    description:
      "Minuman tradisional Jawa dari daun asam muda yang menyegarkan. Khasiat alami untuk kesehatan.",
    price: "Rp 5.000",
    image: "/menu-sinom.png",
    category: "lainnya",
  },
  {
    name: "Nasi Kotak",
    description: "Paket nasi lengkap dengan lauk pilihan, cocok untuk acara dan makan siang.",
    price: "Rp 20.000",
    image: "/menu-nasi-kotak.png",
    category: "lainnya",
  },
  {
    name: "Nasi Bebek",
    description:
      "Bebek goreng renyah disajikan dengan nasi hangat, sambal pedas, dan lalapan segar.",
    price: "Rp 25.000",
    image: "/menu-nasi-bebek.png",
    category: "lainnya",
  },
  {
    name: "Rebung Utuh",
    description:
      "Rebung segar utuh siap olah untuk berbagai masakan tradisional. Kualitas pilihan langsung dari pasar.",
    price: "Rp 15.000 / pack",
    image: "/placeholder.svg",
    category: "lainnya",
  },
  {
    name: "Rebung Rajang",
    description:
      "Rebung yang sudah dirajang halus, siap dimasak langsung. Praktis untuk sayur lodeh dan lumpia.",
    price: "Rp 18.000 / pack",
    image: "/placeholder.svg",
    category: "lainnya",
  },
  {
    name: "Aneka Masakan Harian",
    description:
      "Menu masakan rumahan yang berubah setiap hari. Hidangan khas Surabaya dengan cita rasa otentik.",
    price: "Mulai Rp 10.000",
    image: "/placeholder.svg",
    category: "lainnya",
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
  { label: "Ulasan", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontak", href: "#contact" },
]
