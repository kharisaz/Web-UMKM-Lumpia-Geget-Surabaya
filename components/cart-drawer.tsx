"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { X, Minus, Plus, Trash2, ShoppingCart, MessageCircle } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { menuItems, WHATSAPP_NUMBER } from "@/lib/site-data"
import { cn } from "@/lib/utils"

function formatRupiah(n: number) {
  return "Rp " + n.toLocaleString("id-ID")
}

function buildWhatsAppMessage(
  items: ReturnType<typeof useCart>["items"],
  total: number,
) {
  const lines = items.map((ci) => {
    const unit = parseInt(ci.item.price.replace(/[^0-9]/g, ""), 10) || 0
    return `• ${ci.item.name} × ${ci.qty} = ${formatRupiah(unit * ci.qty)}`
  })
  const msg = [
    "Halo Lumpia Geget Suramadu! 👋",
    "",
    "Saya ingin memesan:",
    ...lines,
    "",
    `*Total Estimasi: ${formatRupiah(total)}*`,
    "",
    "Mohon konfirmasi ketersediaan dan estimasi waktu siapnya ya. Terima kasih! 🙏",
  ].join("\n")
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`
}

type QtyRowProps = {
  item: (typeof menuItems)[number]
}

function QtyRow({ item }: QtyRowProps) {
  const { getQty, setItemQty } = useCart()
  const qty = getQty(item.name)
  const unitPrice = parseInt(item.price.replace(/[^0-9]/g, ""), 10) || 0

  return (
    <div className="flex items-center gap-3 rounded-xl border border-border bg-background p-3 transition-colors hover:border-accent/40">
      {/* Thumbnail */}
      <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-secondary">
        <Image
          src={item.image || "/placeholder.svg"}
          alt={item.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col gap-0.5 min-w-0">
        <p className="truncate text-sm font-semibold text-primary">{item.name}</p>
        <p className="text-xs text-muted-foreground">{item.price}</p>
        {qty > 0 && (
          <p className="text-[11px] font-semibold text-accent-foreground">
            = {formatRupiah(unitPrice * qty)}
          </p>
        )}
      </div>

      {/* Stepper */}
      <div className="flex shrink-0 items-center gap-1.5">
        <button
          type="button"
          aria-label={`Kurangi ${item.name}`}
          onClick={() => setItemQty(item, qty - 1)}
          disabled={qty === 0}
          className={cn(
            "flex h-7 w-7 items-center justify-center rounded-full border text-sm font-bold transition-colors",
            qty === 0
              ? "border-border text-muted-foreground/40 cursor-default"
              : "border-border bg-background text-primary hover:bg-secondary",
          )}
        >
          <Minus className="h-3 w-3" />
        </button>

        <span
          className={cn(
            "w-6 text-center text-sm font-black transition-colors",
            qty > 0 ? "text-primary" : "text-muted-foreground/40",
          )}
        >
          {qty}
        </span>

        <button
          type="button"
          aria-label={`Tambah ${item.name}`}
          onClick={() => setItemQty(item, qty + 1)}
          className="flex h-7 w-7 items-center justify-center rounded-full bg-accent text-accent-foreground transition-all hover:scale-110"
        >
          <Plus className="h-3 w-3" />
        </button>
      </div>
    </div>
  )
}

export function CartDrawer() {
  const { items, totalQty, totalPrice, clear, isCartOpen, closeCart } = useCart()
  const drawerRef = useRef<HTMLDivElement>(null)

  /* Close on Escape */
  useEffect(() => {
    if (!isCartOpen) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeCart()
    }
    document.addEventListener("keydown", handler)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", handler)
      document.body.style.overflow = ""
    }
  }, [isCartOpen, closeCart])

  const handleOrder = () => {
    if (items.length === 0) return
    const url = buildWhatsAppMessage(items, totalPrice)
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <>
      {/* Backdrop */}
      <div
        aria-hidden
        onClick={closeCart}
        className={cn(
          "fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300",
          isCartOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Form Pesanan"
        className={cn(
          "fixed right-0 top-0 z-50 flex h-full w-full max-w-sm flex-col bg-card shadow-2xl transition-transform duration-300 ease-in-out",
          isCartOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        {/* ── Header ── */}
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <div className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5 text-accent-foreground" />
            <h2 className="text-lg font-bold text-primary">Pesanan Saya</h2>
            {totalQty > 0 && (
              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1 text-xs font-black text-accent-foreground">
                {totalQty}
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            {totalQty > 0 && (
              <button
                type="button"
                onClick={clear}
                className="flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-destructive"
              >
                <Trash2 className="h-3 w-3" />
                Reset
              </button>
            )}
            <button
              type="button"
              onClick={closeCart}
              aria-label="Tutup pesanan"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-primary transition-colors hover:bg-secondary"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* ── Scrollable product list ── */}
        <div className="flex-1 overflow-y-auto px-4 py-4">
          <div className="space-y-2">
            {menuItems.map((item) => (
              <QtyRow key={item.name} item={item} />
            ))}
          </div>
        </div>

        {/* ── Footer ── */}
        <div className="border-t border-border bg-background/80 px-5 py-5 backdrop-blur-sm">
          {totalQty === 0 ? (
            <p className="mb-4 text-center text-sm text-muted-foreground">
              Pilih menu di atas lalu tekan <strong>+</strong> untuk menambah jumlah.
            </p>
          ) : (
            <div className="mb-4 space-y-1.5">
              {items.map((ci) => {
                const unit = parseInt(ci.item.price.replace(/[^0-9]/g, ""), 10) || 0
                return (
                  <div key={ci.item.name} className="flex justify-between text-xs text-muted-foreground">
                    <span className="truncate max-w-[60%]">
                      {ci.item.name} × {ci.qty}
                    </span>
                    <span>{formatRupiah(unit * ci.qty)}</span>
                  </div>
                )
              })}
              <div className="flex justify-between border-t border-border pt-2 text-sm font-black text-primary">
                <span>Total Estimasi</span>
                <span>{formatRupiah(totalPrice)}</span>
              </div>
              <p className="text-[10px] text-muted-foreground">
                *Harga final dikonfirmasi via WhatsApp. Belum termasuk ongkir.
              </p>
            </div>
          )}

          <button
            type="button"
            onClick={handleOrder}
            disabled={totalQty === 0}
            className={cn(
              "flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-bold transition-all duration-200",
              totalQty > 0
                ? "bg-[#25D366] text-white shadow-lg shadow-[#25D366]/20 hover:scale-[1.02] hover:bg-[#22c55e] active:scale-95"
                : "bg-secondary text-muted-foreground cursor-not-allowed",
            )}
          >
            <MessageCircle className="h-5 w-5" />
            {totalQty > 0 ? "Kirim Pesanan via WhatsApp" : "Belum ada pesanan"}
          </button>
        </div>
      </div>
    </>
  )
}
