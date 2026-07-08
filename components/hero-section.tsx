import Image from "next/image"
import { MessageCircle } from "lucide-react"
import { WHATSAPP_LINK } from "@/lib/site-data"
import { Reveal } from "@/components/reveal"

export function HeroSection() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-5 pb-8 pt-10 md:px-8 md:pt-16">
      <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr]">
        <Reveal direction="left">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary/70">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Khas Surabaya
          </span>
          <h1 className="mt-5 text-balance text-4xl font-black leading-[1.05] tracking-tight text-primary sm:text-5xl md:text-6xl lg:text-7xl">
            Kerenyahan Autentik Lumpia Geget Surabaya
          </h1>
          <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            Digoreng fresh setiap pesanan dengan bahan premium. Renyah di luar, gurih di dalam, cita rasa asli
            Surabaya yang bikin nagih.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition-transform hover:scale-105"
            >
              <MessageCircle className="h-5 w-5" />
              Pesan via WhatsApp
            </a>
            <a
              href="#menu"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
            >
              Lihat Menu
            </a>
          </div>
          <div className="mt-10 flex items-center gap-8">
            <div>
              <p className="text-2xl font-black text-primary">10rb+</p>
              <p className="text-xs text-muted-foreground">Lumpia terjual</p>
            </div>
            <div className="h-8 w-px bg-border" />
            <div>
              <p className="text-2xl font-black text-primary">100%</p>
              <p className="text-xs text-muted-foreground">Digoreng fresh</p>
            </div>
            <div className="h-8 w-px bg-border" />
            <div>
              <p className="text-2xl font-black text-primary">4.9★</p>
              <p className="text-xs text-muted-foreground">Rating pelanggan</p>
            </div>
          </div>
        </Reveal>

        <Reveal direction="right" delay={120} className="relative">
          <div className="absolute -right-4 -top-4 hidden h-24 w-24 rounded-full bg-accent md:block" aria-hidden />
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card">
            <Image
              src="/hero-lumpia.png"
              alt="Lumpia goreng keemasan yang renyah disajikan di atas piring putih"
              width={800}
              height={800}
              priority
              className="aspect-square w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
