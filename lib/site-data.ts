export const WHATSAPP_NUMBER = "6281234567890"
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

export type Promo = {
  title: string
  excerpt: string
  date: string
  image: string
  content: string
}

export const promos: Promo[] = [
  {
    title: "Paket Bundling Hemat Keluarga",
    excerpt: "Nikmati 50 pcs jajanan campur dengan harga spesial untuk kumpul keluarga.",
    date: "Promo Minggu Ini",
    image: "/promo-bundle.png",
    content:
      "Dapatkan paket bundling isi 50 pcs jajanan campur (lumpia, pastel, dan ote-ote udang) hanya dengan Rp 120.000. Cocok untuk arisan, rapat, atau kumpul keluarga. Promo berlaku untuk pemesanan minimal H-1 melalui WhatsApp. Gratis ongkir untuk area Surabaya Pusat.",
  },
  {
    title: "Selalu Digoreng Fresh Setiap Pesanan",
    excerpt: "Kenapa lumpia kami selalu renyah? Karena kami goreng saat kamu pesan.",
    date: "Cerita Dapur",
    image: "/promo-fresh.png",
    content:
      "Rahasia kerenyahan Lumpia Geget ada pada proses penggorengan yang dilakukan tepat saat pesanan masuk. Kami tidak menyimpan gorengan lama-lama, sehingga tekstur tetap garing dan rasa tetap gurih saat sampai di tangan kamu. Bahan-bahan dipilih segar setiap pagi langsung dari pasar lokal Surabaya.",
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
      "Cukup klik tombol 'Pesan via WhatsApp' di halaman ini untuk terhubung langsung dengan kami. Sebutkan menu dan jumlah pesanan, lalu kami akan konfirmasi total dan estimasi waktu. Anda juga bisa memesan melalui GrabFood.",
  },
  {
    question: "Apakah menerima pesanan dalam jumlah besar?",
    answer:
      "Tentu! Kami melayani pesanan untuk arisan, rapat, hajatan, dan acara kantor. Untuk pesanan di atas 50 pcs, mohon pesan minimal H-1 agar semua digoreng fresh.",
  },
  {
    question: "Apakah ada layanan antar?",
    answer:
      "Ya, kami melayani pengantaran untuk area Surabaya. Gratis ongkir untuk area Surabaya Pusat dengan minimum pembelian tertentu. Di luar area, ongkir menyesuaikan jarak. Anda juga bisa pesan via GrabFood.",
  },
  {
    question: "Berapa lama lumpia tetap renyah?",
    answer:
      "Karena selalu digoreng fresh saat pesanan masuk, lumpia paling renyah dinikmati dalam 2-3 jam pertama. Bila dingin, cukup panaskan sebentar di air fryer atau oven agar kembali garing.",
  },
  {
    question: "Metode pembayaran apa saja yang tersedia?",
    answer:
      "Kami menerima pembayaran tunai (COD), transfer bank, serta e-wallet seperti QRIS, GoPay, dan OVO untuk memudahkan transaksi kamu. Pembayaran juga bisa dilakukan melalui GrabFood.",
  },
]

export const navLinks = [
  { label: "Tentang", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Pesan", href: "#order" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontak", href: "#contact" },
]
