"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Star, X, Crown, Info } from "lucide-react"
import { menuItems, type MenuItem } from "@/lib/site-data"
import { Reveal } from "@/components/reveal"

export function MenuSection() {
  const [active, setActive] = useState<MenuItem | null>(null)

  const featured = menuItems.filter((item) => item.category === "unggulan")
  const others   = menuItems.filter((item) => item.category === "lainnya")

  /* Close modal on Escape */
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
    <section id="menu" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">

        {/* ── Produk Unggulan ── */}
        <Reveal className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-accent-foreground">
              <Crown className="h-4 w-4" />
              Produk Unggulan
            </span>
            <h2 className="mt-3 text-balance text-3xl font-black leading-tight tracking-tight text-primary md:text-4xl">
              Favorit pelanggan kami
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Tiga menu andalan yang paling dicari. Semua digoreng fresh dengan bahan premium pilihan.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((item, i) => (
            <Reveal key={item.name} delay={i * 80}>
              <button
                type="button"
                onClick={() => setActive(item)}
                className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border-2 border-accent/30 bg-card text-left transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-xl hover:shadow-accent/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label={`Lihat detail ${item.name}`}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    width={600}
                    height={600}
                    className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {item.badge && (
                    <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground shadow-sm">
                      <Star className="h-3 w-3 fill-current" />
                      {item.badge}
                    </span>
                  )}
                  {/* Info hint on hover */}
                  <div className="absolute inset-0 flex items-center justify-center bg-primary/30 opacity-0 backdrop-blur-[1px] transition-opacity duration-300 group-hover:opacity-100">
                    <span className="flex items-center gap-2 rounded-full bg-background/90 px-4 py-2 text-sm font-semibold text-primary shadow-lg">
                      <Info className="h-4 w-4" />
                      Lihat Detail
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-bold text-primary">{item.name}</h3>
                  <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                  <p className="mt-4 text-sm font-bold text-primary">{item.price}</p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>

        {/* ── Menu Lainnya ── */}
        <Reveal className="mt-20 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Menu Lainnya
            </span>
            <h2 className="mt-3 text-balance text-3xl font-black leading-tight tracking-tight text-primary md:text-4xl">
              Pilihan lengkap dari dapur kami
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Dari minuman tradisional hingga masakan harian, semuanya tersedia untuk Anda.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((item, i) => (
            <Reveal key={item.name} delay={i * 60}>
              <button
                type="button"
                onClick={() => setActive(item)}
                className="group flex h-full w-full items-start gap-4 overflow-hidden rounded-2xl border border-border bg-card p-4 text-left transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label={`Lihat detail ${item.name}`}
              >
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-secondary">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    width={160}
                    height={160}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-center">
                  <h3 className="font-bold text-primary">{item.name}</h3>
                  <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                  <p className="mt-2 text-sm font-bold text-primary">{item.price}</p>
                </div>
                <Info className="h-4 w-4 shrink-0 self-center text-muted-foreground/40 transition-colors group-hover:text-accent-foreground" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* ── Detail Modal ── */}
      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="menu-title"
        >
          <button
            type="button"
            aria-label="Tutup"
            className="absolute inset-0 bg-primary/50 backdrop-blur-sm"
            onClick={() => setActive(null)}
          />
          <div className="relative z-10 w-full max-w-md overflow-hidden rounded-2xl border border-border bg-card shadow-2xl duration-300 animate-in fade-in zoom-in-95">
            <div className="relative">
              <Image
                src={active.image || "/placeholder.svg"}
                alt={active.name}
                width={600}
                height={400}
                className="aspect-video w-full object-cover"
              />
              {active.badge && (
                <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
                  <Star className="h-3 w-3 fill-current" />
                  {active.badge}
                </span>
              )}
              <button
                type="button"
                onClick={() => setActive(null)}
                aria-label="Tutup detail menu"
                className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-background/90 text-primary transition-colors hover:bg-background"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-6">
              <h3 id="menu-title" className="text-xl font-bold text-primary">
                {active.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {active.description}
              </p>
              <div className="mt-5 flex items-center justify-between gap-4">
                <span className="text-lg font-black text-primary">{active.price}</span>
                <button
                  type="button"
                  onClick={() => setActive(null)}
                  className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
