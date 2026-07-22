export const WHATSAPP_NUMBER = "6281259969967"
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Halo Lumpia Geget Suramadu, saya mau pesan.",
)}`
export const WHATSAPP_INFO_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Halo, saya ingin bertanya tentang produk Lumpia Geget Suramadu.",
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
  {
<<<<<<< HEAD
    name: "Lumpia Geget",
    description:
      "Lumpia renyah dengan isian premium yang gurih dan penuh rasa. Digoreng fresh sampai keemasan sempurna — signature khas Lumpia Geget Suramadu.",
    price: "Rp 3.000 / pcs",
=======
    name: "Lumpia Rebung Reguler",
    description: "Lumpia goreng renyah ukuran reguler dengan isian rebung manis segar pilihan, wortel, dan bumbu khas Surabaya.",
    price: "Rp 5.000 / pcs",
>>>>>>> 271c3c3 (update)
    image: "/menu-lumpia.png",
    category: "lainnya",
  },
  {
    name: "Lumpia Rebung Jumbo",
    description: "Lumpia goreng porsi mantap ukuran jumbo, diisi penuh dengan rebung manis, telur, dan irisan daging ayam lezat.",
    price: "Rp 7.000 / pcs",
    image: "/menu-lumpia.png",
    category: "lainnya",
  },
  {
    name: "Pastel Roguth",
    description: "Pastel krispi dengan kulit pastry berlapis, berisi ragout ayam dan sayuran creamy yang gurih lezat.",
    price: "Rp 6.000 / pcs",
    image: "/menu-pastel.png",
    category: "lainnya",
  },
  {
    name: "Ote-ote Udang",
    description: "Bakwan sayur khas Surabaya yang digoreng garing keemasan dengan topping udang segar utuh di atasnya. (Isi 3 pcs)",
    price: "Rp 10.000 / isi 3",
    image: "/menu-ote-ote.png",
    category: "lainnya",
  },
  {
    name: "Tahu Isi Sayur",
    description: "Tahu goreng renyah dengan isian tumisan sayur segar bumbu gurih khas rumahan. (Isi 3 pcs)",
    price: "Rp 10.000 / isi 3",
    image: "/menu-tahu-isi.png",
    category: "lainnya",
  },
  {
    name: "Nasi Bebek",
    description: "Nasi hangat disajikan dengan bebek goreng bumbu bebek gurih khas Surabaya, lalapan, dan sambal pedas.",
    price: "Rp 15.000 / pcs",
    image: "/menu-nasi-bebek.png",
    category: "lainnya",
  },
  {
    name: "Nasi Kotak",
    description: "Paket nasi kotak praktis higienis lengkap dengan lauk pauk pilihan, cocok untuk rapat kantor maupun konsumsi acara.",
    price: "Mulai Rp 15.000 (sesuai menu)",
    image: "/menu-nasi-kotak.png",
    category: "lainnya",
  },
  {
    name: "Nasi Jumat Berkah",
    description: "Paket nasi kotak spesial Jumat Berkah dengan menu masakan rumahan lezat, higienis, dan harga bersahabat.",
    price: "Rp 10.000 / pcs",
    image: "/menu-nasi-kotak.png",
    category: "lainnya",
  },
  {
    name: "Tumpeng (10 Porsi)",
    description: "Nasi kuning tumpeng lengkap untuk 10 porsi acara syukuran. Dilengkapi ayam goreng, kering tempe, mi, perkedel, telur dadar iris, dan sambal.",
    price: "Rp 350.000 / paket",
    image: "/menu-nasi-kotak.png",
    category: "lainnya",
  },
  {
    name: "Sinom",
    description: "Minuman jamu tradisional khas Jawa yang segar dari olahan kunyit dan daun asam muda asli berkualitas.",
    price: "Rp 6.000 / botol",
    image: "/menu-sinom.png",
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
  { label: "FAQ", href: "#faq" },
  { label: "Kontak", href: "#contact" },
]
