import { Clock, MapPin, Phone, Mail, MessageCircle, ShoppingBag, ExternalLink } from "lucide-react"
import { WHATSAPP_LINK, GRABFOOD_LINK } from "@/lib/site-data"

// Lokasi 1: Sekolah (Senin - Jumat)
const MAPS_SEKOLAH_LAT = -7.267539
const MAPS_SEKOLAH_LNG = 112.795389
const MAPS_SEKOLAH_LABEL = "Lumpia Geget Suramadu - Sekolah"
const MAPS_SEKOLAH_LINK = `https://www.google.com/maps?q=${MAPS_SEKOLAH_LAT},${MAPS_SEKOLAH_LNG}+(${encodeURIComponent(MAPS_SEKOLAH_LABEL)})`
const MAPS_SEKOLAH_EMBED = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.4!2d${MAPS_SEKOLAH_LNG}!3d${MAPS_SEKOLAH_LAT}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z${MAPS_SEKOLAH_LABEL}!5e0!3m2!1sid!2sid!4v1`

// Lokasi 2: Rumah (Sabtu - Minggu)
const MAPS_RUMAH_LAT = -7.230061469620751
const MAPS_RUMAH_LNG = 112.77588286663392
const MAPS_RUMAH_LABEL = "Lumpia Geget Suramadu"
const MAPS_RUMAH_LINK = `https://www.google.com/maps?q=${MAPS_RUMAH_LAT},${MAPS_RUMAH_LNG}+(${encodeURIComponent(MAPS_RUMAH_LABEL)})`
const MAPS_RUMAH_EMBED = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.4!2d${MAPS_RUMAH_LNG}!3d${MAPS_RUMAH_LAT}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z${MAPS_RUMAH_LABEL}!5e0!3m2!1sid!2sid!4v1`

const INSTAGRAM_LINK = "https://www.instagram.com/lumpiagegetsurabaya"

export function ContactFooter() {
  return (
    <footer id="contact" className="scroll-mt-20 bg-primary text-primary-foreground">
      {/* ── CTA Row ─────────────────────────────── */}
      <div className="mx-auto max-w-6xl px-5 pt-16 md:px-8 md:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          {/* Left: CTA text + buttons */}
          <div>
            <h2 className="text-balance text-3xl font-black leading-tight tracking-tight md:text-4xl">
              Lapar? Pesan lumpia geget sekarang juga.
            </h2>
            <p className="mt-4 max-w-md text-pretty leading-relaxed text-primary-foreground/70">
              Hubungi kami langsung via WhatsApp atau gunakan keranjang belanja — lalu kami akan
              konfirmasi pesanan dan waktu siap secepatnya.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-105"
              >
                <MessageCircle className="h-5 w-5" />
                Pesan via WhatsApp
              </a>
              <a
                href={GRABFOOD_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                <ShoppingBag className="h-5 w-5" />
                Pesan via GrabFood
              </a>
            </div>
          </div>

          {/* Right: Info grid */}
          <div className="grid gap-8 sm:grid-cols-2">
            {/* Jadwal & Lokasi 1 (Sekolah) */}
            <div>
              <div className="flex items-center gap-2 text-accent">
                <Clock className="h-5 w-5" />
                <h3 className="text-sm font-bold uppercase tracking-wide">Senin – Jumat (Depan Sekolah)</h3>
              </div>
              <p className="mt-3 text-sm font-semibold text-primary-foreground">
                Jam Operasional: 09.00 – 16.00
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-primary-foreground/70">
                Jl. Sutorejo Utara VII Blok G-26 No.51 Kec. Bulak, Surabaya, Jawa Timur 60129
              </p>
              <a
                href={MAPS_SEKOLAH_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2.5 inline-flex items-center gap-1 text-xs font-semibold text-accent transition-opacity hover:opacity-70"
              >
                Buka di Google Maps
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>

            {/* Jadwal & Lokasi 2 (Rumah) */}
            <div>
              <div className="flex items-center gap-2 text-accent">
                <Clock className="h-5 w-5" />
                <h3 className="text-sm font-bold uppercase tracking-wide">Sabtu – Minggu (Rumah)</h3>
              </div>
              <p className="mt-3 text-sm font-semibold text-primary-foreground">
                Jam Operasional: 08.00 – 17.00
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-primary-foreground/70">
                Jl. Bulak Cumpat Barat V No.58,
                <br />
                Kec. Bulak, Surabaya, Jawa Timur 60129
              </p>
              <a
                href={MAPS_RUMAH_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2.5 inline-flex items-center gap-1 text-xs font-semibold text-accent transition-opacity hover:opacity-70"
              >
                Buka di Google Maps
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>

            {/* Kontak */}
            <div>
              <div className="flex items-center gap-2 text-accent">
                <Phone className="h-5 w-5" />
                <h3 className="text-sm font-bold uppercase tracking-wide">Kontak</h3>
              </div>
              <ul className="mt-3 space-y-1.5 text-sm text-primary-foreground/70">
                <li className="flex items-center gap-2">
                  <Phone className="h-3.5 w-3.5 shrink-0 opacity-60" />
                  <a href="tel:+6281259969967" className="hover:text-primary-foreground">
                    +62 812-5996-9967
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5 shrink-0 opacity-60" />
                  <a href="mailto:halo@lumpiageget.id" className="hover:text-primary-foreground">
                    halo@lumpiageget.id
                  </a>
                </li>
              </ul>
            </div>

            {/* Sosial Media */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wide text-accent">Ikuti Kami</h3>
              <div className="mt-3 flex gap-3">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp Lumpia Geget Suramadu"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 transition-colors hover:border-[#25D366] hover:bg-[#25D366] hover:text-white"
                >
                  <MessageCircle className="h-5 w-5" />
                </a>
                <a
                  href={INSTAGRAM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Lumpia Geget Suramadu"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 transition-colors hover:border-pink-500 hover:bg-pink-500 hover:text-white"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                </a>
                <a
                  href={GRABFOOD_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GrabFood Lumpia Geget Suramadu"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 transition-colors hover:border-[#00B14F] hover:bg-[#00B14F] hover:text-white"
                >
                  <ShoppingBag className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── Google Maps Embed ───────────────────────── */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Map 1: Sekolah */}
          <div className="overflow-hidden rounded-2xl border border-primary-foreground/10">
            <div className="flex items-center justify-between bg-primary-foreground/5 px-4 py-3">
              <div className="flex items-center gap-2 text-sm font-semibold text-primary-foreground/80">
                <MapPin className="h-4 w-4 text-accent" />
                Depan Sekolah (Senin - Jumat)
              </div>
              <a
                href={MAPS_SEKOLAH_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground transition-opacity hover:opacity-80"
              >
                Buka Maps
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
            <iframe
              title="Lokasi Sekolah - Lumpia Geget Surabaya di Google Maps"
              src={MAPS_SEKOLAH_EMBED}
              width="100%"
              height="250"
              style={{ border: 0, display: "block", filter: "invert(10%) hue-rotate(190deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Map 2: Rumah */}
          <div className="overflow-hidden rounded-2xl border border-primary-foreground/10">
            <div className="flex items-center justify-between bg-primary-foreground/5 px-4 py-3">
              <div className="flex items-center gap-2 text-sm font-semibold text-primary-foreground/80">
                <MapPin className="h-4 w-4 text-accent" />
                Rumah (Sabtu - Minggu)
              </div>
              <a
                href={MAPS_RUMAH_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground transition-opacity hover:opacity-80"
              >
                Buka Maps
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
            <iframe
              title="Lokasi Rumah - Lumpia Geget Surabaya di Google Maps"
              src={MAPS_RUMAH_EMBED}
              width="100%"
              height="250"
              style={{ border: 0, display: "block", filter: "invert(10%) hue-rotate(190deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* ── Bottom Bar ─────────────────────────────── */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/15 py-6 text-sm text-primary-foreground/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Lumpia Geget Surabaya. Semua hak dilindungi.</p>
          <p>Made with ❤️ by Trustworthy</p>
        </div>
      </div>
    </footer>
  )
}
