"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Star, X, Info, ThumbsUp, ShoppingCart, Plus, Minus } from "lucide-react"
import { menuItems, menuCategories, type MenuItem, type CategoryId } from "@/lib/site-data"
import { Reveal } from "@/components/reveal"
import { useCart, parsePrice } from "@/lib/cart-context"
import { cn } from "@/lib/utils"

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryId | "all">("all")
  const [activeItem, setActiveItem] = useState<MenuItem | null>(null)
  const { setItemQty, getQty, openCart } = useCart()

  /* Close modal on Escape */
  useEffect(() => {
    if (!activeItem) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveItem(null)
    }
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [activeItem])

  /* Filter categories */
  const displayedCategories =
    activeCategory === "all"
      ? menuCategories
      : menuCategories.filter((cat) => cat.id === activeCategory)

  return (
    <section id="menu" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        {/* ── Header Menu ── */}
        <Reveal className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end mb-8">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Daftar Menu
            </span>
            <h2 className="mt-3 text-balance text-3xl font-black leading-tight tracking-tight text-primary md:text-4xl">
              Pilihan menu dari dapur kami
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Sajian kuliner autentik khas Surabaya & Suramadu, dari jajanan renyah, frozen food, hingga paket makan harian.
          </p>
        </Reveal>

        {/* ── Category Filter Tabs ── */}
        <Reveal delay={100} className="mb-12 flex flex-wrap items-center gap-2 border-b border-border pb-4">
          <button
            type="button"
            onClick={() => setActiveCategory("all")}
            className={cn(
              "rounded-full px-4 py-2 text-xs font-bold transition-all duration-200 md:text-sm",
              activeCategory === "all"
                ? "bg-primary text-primary-foreground shadow-md"
                : "bg-secondary text-secondary-foreground hover:bg-primary/10"
            )}
          >
            Semua Menu
          </button>
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "rounded-full px-4 py-2 text-xs font-bold transition-all duration-200 md:text-sm",
                activeCategory === cat.id
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary text-secondary-foreground hover:bg-primary/10"
              )}
            >
              {cat.name}
            </button>
          ))}
        </Reveal>

        {/* ── Grouped Menu Categories ── */}
        <div className="space-y-16">
          {displayedCategories.map((category) => {
            const items = menuItems.filter((item) => item.category === category.id)
            if (items.length === 0) return null

            return (
              <div key={category.id} className="scroll-mt-24">
                {/* Category Header */}
                <div className="mb-6 flex flex-col gap-1 border-l-4 border-accent pl-4">
                  <h3 className="text-xl font-extrabold text-primary md:text-2xl">
                    {category.name}
                  </h3>
                  <p className="text-xs text-muted-foreground md:text-sm">
                    {category.subtitle}
                  </p>
                </div>

                {/* Items Grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((item, i) => {
                    const currentQty = getQty(item.name)
                    return (
                      <Reveal key={item.name} delay={i * 40}>
                        <div
                          className={cn(
                            "group flex h-full w-full flex-col overflow-hidden rounded-2xl border bg-card text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
                            item.featured
                              ? "border-accent/40 shadow-sm shadow-accent/5 hover:border-accent"
                              : "border-border hover:border-primary/20"
                          )}
                        >
                          {/* Image Container */}
                          <div
                            onClick={() => setActiveItem(item)}
                            className="relative overflow-hidden cursor-pointer"
                          >
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              width={600}
                              height={600}
                              className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />

                            {/* Badge */}
                            {item.badge && (
                              <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-accent-foreground shadow-sm">
                                <ThumbsUp className="h-3 w-3 fill-current" />
                                {item.badge}
                              </span>
                            )}

                            {/* Hover info overlay */}
                            <div className="absolute inset-0 flex items-center justify-center bg-primary/30 opacity-0 backdrop-blur-[1px] transition-opacity duration-300 group-hover:opacity-100">
                              <span className="flex items-center gap-2 rounded-full bg-background/90 px-4 py-2 text-sm font-semibold text-primary shadow-lg">
                                <Info className="h-4 w-4" />
                                Detail Menu
                              </span>
                            </div>
                          </div>

                          {/* Content & Actions */}
                          <div className="flex flex-1 flex-col p-5">
                            <h4
                              onClick={() => setActiveItem(item)}
                              className="text-lg font-bold text-primary cursor-pointer hover:text-accent-foreground transition-colors"
                            >
                              {item.name}
                            </h4>
                            <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                              {item.description}
                            </p>
                            
                            <div className="mt-4 flex items-center justify-between gap-3 border-t border-border/60 pt-3">
                              <span className="text-sm md:text-base font-extrabold text-primary leading-tight">
                                {item.price}
                              </span>

                              {/* Cart Controls */}
                              {currentQty > 0 ? (
                                <div className="flex shrink-0 items-center gap-2 rounded-full bg-primary/10 p-1">
                                  <button
                                    type="button"
                                    onClick={() => setItemQty(item, currentQty - 1)}
                                    className="flex h-7 w-7 items-center justify-center rounded-full bg-card text-primary shadow-sm hover:bg-secondary"
                                    aria-label="Kurangi jumlah"
                                  >
                                    <Minus className="h-3.5 w-3.5" />
                                  </button>
                                  <span className="min-w-[1.25rem] text-center text-xs font-bold text-primary">
                                    {currentQty}
                                  </span>
                                  <button
                                    type="button"
                                    onClick={() => setItemQty(item, currentQty + 1)}
                                    className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm hover:bg-primary/90"
                                    aria-label="Tambah jumlah"
                                  >
                                    <Plus className="h-3.5 w-3.5" />
                                  </button>
                                </div>
                              ) : (
                                <button
                                  type="button"
                                  onClick={() => setItemQty(item, 1)}
                                  className="inline-flex shrink-0 whitespace-nowrap items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                                >
                                  <ShoppingCart className="h-3.5 w-3.5 shrink-0" />
                                  <span>+ Keranjang</span>
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      </Reveal>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* ── Detail Modal ── */}
      {activeItem && (
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
            onClick={() => setActiveItem(null)}
          />
          <div className="relative z-10 w-full max-w-md overflow-hidden rounded-2xl border border-border bg-card shadow-2xl duration-300 animate-in fade-in zoom-in-95">
            <div className="relative">
              <Image
                src={activeItem.image || "/placeholder.svg"}
                alt={activeItem.name}
                width={600}
                height={400}
                className="aspect-video w-full object-cover"
              />
              {activeItem.badge && (
                <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
                  <Star className="h-3 w-3 fill-current" />
                  {activeItem.badge}
                </span>
              )}
              <button
                type="button"
                onClick={() => setActiveItem(null)}
                aria-label="Tutup detail menu"
                className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-background/90 text-primary transition-colors hover:bg-background shadow-md"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-6">
              <h3 id="menu-title" className="text-xl font-bold text-primary">
                {activeItem.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {activeItem.description}
              </p>
              
              <div className="mt-6 flex items-center justify-between gap-4 border-t border-border pt-4">
                <div>
                  <span className="text-xs text-muted-foreground block">Harga</span>
                  <span className="text-lg font-black text-primary">{activeItem.price}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      if (getQty(activeItem.name) === 0) setItemQty(activeItem, 1)
                      setActiveItem(null)
                      openCart()
                    }}
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs font-bold text-primary-foreground shadow-md transition-transform hover:scale-105"
                  >
                    <ShoppingCart className="h-4 w-4" />
                    Pesan via Keranjang
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
