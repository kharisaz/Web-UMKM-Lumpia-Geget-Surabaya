"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Menu, X, ShoppingCart } from "lucide-react"
import { navLinks } from "@/lib/site-data"
import { useCart } from "@/lib/cart-context"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { openCart, totalQty } = useCart()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-colors",
        scrolled ? "border-border bg-background/90 backdrop-blur-md" : "border-transparent bg-background",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 md:px-8">
        <a href="#top" className="flex items-center gap-2.5 font-bold tracking-tight text-primary">
          <Image
            src="/logo.png"
            alt="Logo Lumpia Geget Suramadu"
            width={36}
            height={36}
            className="h-9 w-9 rounded-full object-cover shadow-sm border border-accent/30"
          />
          <span className="text-base leading-none md:text-lg">
            Lumpia Geget<span className="hidden sm:inline"> Suramadu</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navigasi utama">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-primary/70 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={openCart}
            className="relative hidden items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-transform hover:scale-105 md:inline-flex"
            aria-label="Buka keranjang pesanan"
          >
            <ShoppingCart className="h-4 w-4" />
            Pesan Sekarang
            {totalQty > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-black text-primary-foreground">
                {totalQty > 99 ? "99+" : totalQty}
              </span>
            )}
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-primary md:hidden"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4" aria-label="Navigasi seluler">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-base font-medium text-primary/80 transition-colors hover:bg-secondary"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => { openCart(); setOpen(false) }}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-center text-sm font-semibold text-accent-foreground"
            >
              <ShoppingCart className="h-4 w-4" />
              Pesan Sekarang
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}
