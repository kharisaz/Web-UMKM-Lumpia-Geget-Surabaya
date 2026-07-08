"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ArrowUpRight, X } from "lucide-react"
import { promos, type Promo, WHATSAPP_LINK } from "@/lib/site-data"
import { Reveal } from "@/components/reveal"

export function PromoSection() {
  const [active, setActive] = useState<Promo | null>(null)

  useEffect(() => {
    if (!active) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null)
    }
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [active])

  return (
    <section className="bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Promo &amp; Kabar
          </span>
          <h2 className="mt-3 text-balance text-3xl font-black leading-tight tracking-tight text-primary md:text-4xl">
            Update terbaru dari dapur kami
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {promos.map((promo, i) => (
            <Reveal key={promo.title} delay={i * 80} as="div">
            <button
              type="button"
              onClick={() => setActive(promo)}
              className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-border bg-card text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:flex-row"
            >
              <div className="relative overflow-hidden sm:w-2/5">
                <Image
                  src={promo.image || "/placeholder.svg"}
                  alt={promo.title}
                  width={400}
                  height={400}
                  className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:aspect-square sm:h-full"
                />
              </div>
              <div className="flex flex-1 flex-col justify-center p-6">
                <span className="text-xs font-semibold uppercase tracking-wide text-accent-foreground/60">
                  {promo.date}
                </span>
                <h3 className="mt-2 text-lg font-bold text-primary">{promo.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{promo.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Selengkapnya
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </button>
            </Reveal>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="promo-title"
        >
          <button
            type="button"
            aria-label="Tutup"
            className="absolute inset-0 bg-primary/50 backdrop-blur-sm"
            onClick={() => setActive(null)}
          />
          <div className="relative z-10 w-full max-w-lg overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
            <div className="relative">
              <Image
                src={active.image || "/placeholder.svg"}
                alt={active.title}
                width={600}
                height={340}
                className="aspect-video w-full object-cover"
              />
              <button
                type="button"
                onClick={() => setActive(null)}
                aria-label="Tutup detail promo"
                className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-background/90 text-primary transition-colors hover:bg-background"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-6">
              <span className="text-xs font-semibold uppercase tracking-wide text-accent-foreground/60">
                {active.date}
              </span>
              <h3 id="promo-title" className="mt-2 text-xl font-bold text-primary">
                {active.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{active.content}</p>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:scale-105"
              >
                Pesan Sekarang
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
