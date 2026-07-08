import { MessageCircle, ExternalLink, Phone, ShoppingBag } from "lucide-react"
import { WHATSAPP_LINK, WHATSAPP_INFO_LINK, GRABFOOD_LINK } from "@/lib/site-data"
import { Reveal } from "@/components/reveal"

export function OrderSection() {
  return (
    <section id="order" className="scroll-mt-20 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <Reveal className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Pesan Sekarang
          </span>
          <h2 className="mx-auto mt-3 max-w-2xl text-balance text-3xl font-black leading-tight tracking-tight text-primary md:text-4xl">
            Pilih cara pesan yang paling nyaman untuk Anda
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground">
            Pesan langsung via WhatsApp untuk pemesanan cepat, atau gunakan GrabFood untuk kemudahan pembayaran dan pengantaran.
          </p>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
          {/* ── WhatsApp Card ─────────────────────────── */}
          <Reveal delay={0}>
            <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border-2 border-[#25D366]/20 bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#25D366]/50 hover:shadow-xl hover:shadow-[#25D366]/5">
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[#25D366]/10 transition-transform duration-500 group-hover:scale-150" aria-hidden />
              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#25D366] text-white shadow-lg shadow-[#25D366]/20">
                  <MessageCircle className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-primary">Pesan via WhatsApp</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Langsung terhubung dengan kami untuk pemesanan, tanya stok, atau konsultasi menu untuk acara Anda.
                </p>
                <ul className="mt-5 space-y-2.5">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366]">✓</span>
                    Respon cepat & ramah
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366]">✓</span>
                    Pemesanan partai besar
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366]">✓</span>
                    Konsultasi menu acara
                  </li>
                </ul>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:scale-105 hover:bg-[#22c55e] hover:shadow-lg hover:shadow-[#25D366]/25"
                  >
                    <Phone className="h-4 w-4" />
                    Pesan Sekarang
                  </a>
                  <a
                    href={WHATSAPP_INFO_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-[#25D366]/30 px-6 py-3.5 text-sm font-semibold text-[#25D366] transition-all hover:bg-[#25D366]/5"
                  >
                    Tanya Info
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* ── GrabFood Card ─────────────────────────── */}
          <Reveal delay={100}>
            <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border-2 border-[#00B14F]/20 bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#00B14F]/50 hover:shadow-xl hover:shadow-[#00B14F]/5">
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[#00B14F]/10 transition-transform duration-500 group-hover:scale-150" aria-hidden />
              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#00B14F] text-white shadow-lg shadow-[#00B14F]/20">
                  <ShoppingBag className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-primary">Pesan via GrabFood</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Pesan lumpia dan menu favorit kami langsung melalui aplikasi Grab. Praktis, cepat, dan bisa bayar digital.
                </p>
                <ul className="mt-5 space-y-2.5">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#00B14F]/10 text-[#00B14F]">✓</span>
                    Bayar via GrabPay / OVO
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#00B14F]/10 text-[#00B14F]">✓</span>
                    Tracking pengantaran real-time
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#00B14F]/10 text-[#00B14F]">✓</span>
                    Promo & voucher Grab
                  </li>
                </ul>
                <div className="mt-8">
                  <a
                    href={GRABFOOD_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#00B14F] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:scale-105 hover:bg-[#009a43] hover:shadow-lg hover:shadow-[#00B14F]/25"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Buka di GrabFood
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
