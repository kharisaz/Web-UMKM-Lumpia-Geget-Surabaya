"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Star, X, Crown, Info, ThumbsUp } from "lucide-react"
import { menuItems, type MenuItem } from "@/lib/site-data"
import { Reveal } from "@/components/reveal"
import { cn } from "@/lib/utils"

export function MenuSection() {
  const [active, setActive] = useState<MenuItem | null>(null)
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
        {/* ── Header Menu ── */}
        <Reveal className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end mb-10">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Daftar Menu
            </span>
            <h2 className="mt-3 text-balance text-3xl font-black leading-tight tracking-tight text-primary md:text-4xl">
              Pilihan menu dari dapur kami
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Sajian kuliner autentik khas Surabaya, mulai dari jajanan renyah hingga masakan harian yang dimasak fresh setiap hari.
          </p>
        </Reveal>

        {/* ── Unified Menu Grid ── */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {menuItems.map((item, i) => (
            <Reveal key={item.name} delay={i * 60}>
              <button
                type="button"
                onClick={() => setActive(item)}
                className={cn(
                  "group flex h-full w-full flex-col overflow-hidden rounded-2xl border bg-card text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  item.category === "unggulan"
                    ? "border-accent/40 shadow-sm shadow-accent/5 hover:border-accent"
                    : "border-border hover:border-primary/20"
                )}
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
                  
                  {/* Badge: only for featured/unggulan items, styled as Best Seller */}
                  {item.category === "unggulan" && (
                    <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-accent-foreground shadow-sm">
                      <ThumbsUp className="h-3 w-3 fill-current" />
                      Best Seller
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
