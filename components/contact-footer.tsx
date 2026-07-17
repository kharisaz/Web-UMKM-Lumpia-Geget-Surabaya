import { Clock, MapPin, Phone, Mail, MessageCircle, ShoppingBag, ExternalLink } from "lucide-react"
import { WHATSAPP_LINK, GRABFOOD_LINK } from "@/lib/site-data"

/* ── Google Maps deep-link & embed ──────────────────────────────────────
   Ganti koordinat di bawah dengan koordinat asli toko Anda:
   Untuk mendapatkan koordinat: buka Google Maps → cari lokasi toko →
   klik kanan → "What's here?" → salin lat,lng dari URL.               */
const MAPS_LAT = -7.2575
const MAPS_LNG = 112.7524
const MAPS_LABEL = "Lumpia Geget Surabaya"
const MAPS_LINK = `https://www.google.com/maps?q=${MAPS_LAT},${MAPS_LNG}+(${encodeURIComponent(MAPS_LABEL)})`
const MAPS_EMBED = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.4!2d${MAPS_LNG}!3d${MAPS_LAT}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z${MAPS_LABEL}!5e0!3m2!1sid!2sid!4v1`

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
                Contact via WhatsApp
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
            {/* Jam Buka */}
            <div>
              <div className="flex items-center gap-2 text-accent">
                <Clock className="h-5 w-5" />
                <h3 className="text-sm font-bold uppercase tracking-wide">Jam Buka</h3>
              </div>
              <ul className="mt-3 space-y-1 text-sm text-primary-foreground/70">
                <li>Senin – Jumat: 08.00 – 20.00</li>
                <li>Sabtu – Minggu: 08.00 – 21.00</li>
                <li className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-[#25D366]/20 px-2.5 py-0.5 text-[11px] font-semibold text-[#4ade80]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#4ade80]" />
                  Buka Hari Ini
                </li>
              </ul>
            </div>

            {/* Lokasi */}
            <div>
              <div className="flex items-center gap-2 text-accent">
                <MapPin className="h-5 w-5" />
                <h3 className="text-sm font-bold uppercase tracking-wide">Lokasi</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">
                Jl. Genteng Besar No. 12,
                <br />
                Genteng, Surabaya,
                <br />
                Jawa Timur 60275
              </p>
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-accent transition-opacity hover:opacity-70"
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
                  <a href="tel:+6281234567890" className="hover:text-primary-foreground">
                    +62 812-3456-7890
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
                  aria-label="WhatsApp Lumpia Geget Surabaya"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 transition-colors hover:border-[#25D366] hover:bg-[#25D366] hover:text-white"
                >
                  <MessageCircle className="h-5 w-5" />
                </a>
                <a
                  href={INSTAGRAM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Lumpia Geget Surabaya"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 transition-colors hover:border-pink-500 hover:bg-pink-500 hover:text-white"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                </a>
                <a
                  href={GRABFOOD_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GrabFood Lumpia Geget Surabaya"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 transition-colors hover:border-[#00B14F] hover:bg-[#00B14F] hover:text-white"
                >
                  <ShoppingBag className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── Google Maps Embed ───────────────────────── */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-primary-foreground/10">
          <div className="flex items-center justify-between bg-primary-foreground/5 px-4 py-3">
            <div className="flex items-center gap-2 text-sm font-semibold text-primary-foreground/80">
              <MapPin className="h-4 w-4 text-accent" />
              {MAPS_LABEL}
            </div>
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground transition-opacity hover:opacity-80"
            >
              Buka Maps
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
          <iframe
            title="Lokasi Lumpia Geget Surabaya di Google Maps"
            src={MAPS_EMBED}
            width="100%"
            height="300"
            style={{ border: 0, display: "block", filter: "invert(10%) hue-rotate(190deg)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* ── Bottom Bar ─────────────────────────────── */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/15 py-6 text-sm text-primary-foreground/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Lumpia Geget Suramadu. Semua hak dilindungi.</p>
          <p>Trustwhorty</p>
        </div>
      </div>
    </footer>
  )
}
