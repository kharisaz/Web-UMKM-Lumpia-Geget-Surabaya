import { Clock, MapPin, Phone, ExternalLink, MessageCircle, ShoppingBag } from "lucide-react"
import { WHATSAPP_LINK, GRABFOOD_LINK } from "@/lib/site-data"

export function ContactFooter() {
  return (
    <footer id="contact" className="scroll-mt-20 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className="text-balance text-3xl font-black leading-tight tracking-tight md:text-4xl">
              Lapar? Pesan lumpia geget sekarang juga.
            </h2>
            <p className="mt-4 max-w-md text-pretty leading-relaxed text-primary-foreground/70">
              Hubungi kami langsung via WhatsApp untuk pemesanan harian maupun acara. Atau pesan praktis melalui
              GrabFood.
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

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <div className="flex items-center gap-2 text-accent">
                <Clock className="h-5 w-5" />
                <h3 className="text-sm font-bold uppercase tracking-wide">Jam Buka</h3>
              </div>
              <ul className="mt-3 space-y-1 text-sm text-primary-foreground/70">
                <li>Senin – Jumat: 08.00 – 20.00</li>
                <li>Sabtu – Minggu: 08.00 – 21.00</li>
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-2 text-accent">
                <MapPin className="h-5 w-5" />
                <h3 className="text-sm font-bold uppercase tracking-wide">Lokasi</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">
                Jl. Genteng Besar No. 12, Genteng, Surabaya, Jawa Timur
              </p>
            </div>
            <div>
              <div className="flex items-center gap-2 text-accent">
                <Phone className="h-5 w-5" />
                <h3 className="text-sm font-bold uppercase tracking-wide">Kontak</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">
                +62 812-3456-7890
                <br />
                halo@lumpiageget.id
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wide text-accent">Pesan Online</h3>
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
                  href={GRABFOOD_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GrabFood Lumpia Geget Surabaya"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 transition-colors hover:border-[#00B14F] hover:bg-[#00B14F] hover:text-white"
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/15 pt-6 text-sm text-primary-foreground/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Lumpia Geget Surabaya. Semua hak dilindungi.</p>
          <p>Dibuat dengan cinta di Surabaya.</p>
        </div>
      </div>
    </footer>
  )
}
