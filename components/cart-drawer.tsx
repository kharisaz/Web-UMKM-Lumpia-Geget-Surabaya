"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { X, Minus, Plus, Trash2, ShoppingCart, MessageCircle, User, MapPin, ClipboardList } from "lucide-react"
import { useCart, parsePrice } from "@/lib/cart-context"
import { menuItems, WHATSAPP_NUMBER } from "@/lib/site-data"
import { cn } from "@/lib/utils"

function formatRupiah(n: number) {
  return "Rp " + n.toLocaleString("id-ID")
}

function buildWhatsAppMessage(
  items: ReturnType<typeof useCart>["items"],
  nama: string,
  alamat: string,
  catatan: string,
) {
  const lines = items.map((ci) => `• ${ci.item.name} (${ci.item.price}) × ${ci.qty}`)

  const msg = [
    "Halo Lumpia Geget Suramadu!",
    "",
    `*Nama:* ${nama}`,
    `*Alamat:* ${alamat}`,
    ...(catatan.trim() ? [`*Catatan:* ${catatan.trim()}`] : []),
    "",
    "*Pesanan:*",
    ...lines,
    "",
    "Mohon konfirmasi ketersediaan dan total harganya ya. Terima kasih!",
  ].join("\n")

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`
}

/* ── Qty Row ── */
type QtyRowProps = { item: (typeof menuItems)[number] }

function QtyRow({ item }: QtyRowProps) {
  const { getQty, setItemQty } = useCart()
  const qty = getQty(item.name)
  const unitPrice = parsePrice(item.price)

  return (
    <div className={cn(
      "flex items-center gap-3 rounded-xl border p-3 transition-all duration-200",
      qty > 0
        ? "border-accent/50 bg-accent/5"
        : "border-border bg-background hover:border-accent/30",
    )}>
      {/* Thumbnail */}
      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-secondary">
        <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col gap-0.5 min-w-0">
        <p className="truncate text-sm font-semibold text-primary">{item.name}</p>
        <p className="text-xs text-muted-foreground">{item.price}</p>
      </div>

      {/* Stepper */}
      <div className="flex shrink-0 items-center gap-1.5">
        <button
          type="button"
          aria-label={`Kurangi ${item.name}`}
          onClick={() => setItemQty(item, qty - 1)}
          disabled={qty === 0}
          className={cn(
            "flex h-7 w-7 items-center justify-center rounded-full border transition-colors",
            qty === 0
              ? "border-border text-muted-foreground/30 cursor-default"
              : "border-border bg-background text-primary hover:bg-secondary",
          )}
        >
          <Minus className="h-3 w-3" />
        </button>

        <span className={cn(
          "w-6 text-center text-sm font-black transition-colors",
          qty > 0 ? "text-primary" : "text-muted-foreground/30",
        )}>
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

/* ── Input Field ── */
function Field({
  id, label, icon: Icon, placeholder, value, onChange, required, as = "input",
}: {
  id: string
  label: string
  icon: React.ElementType
  placeholder: string
  value: string
  onChange: (v: string) => void
  required?: boolean
  as?: "input" | "textarea"
}) {
  const base =
    "w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm text-primary placeholder:text-muted-foreground/50 outline-none transition-colors focus:border-accent/60 focus:ring-2 focus:ring-accent/20"

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
        <Icon className="h-3.5 w-3.5" />
        {label}
        {required && <span className="text-destructive">*</span>}
      </label>
      {as === "textarea" ? (
        <textarea
          id={id}
          rows={2}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={cn(base, "resize-none")}
        />
      ) : (
        <input
          id={id}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={base}
        />
      )}
    </div>
  )
}

/* ── Main Drawer ── */
export function CartDrawer() {
  const { items, totalQty, clear, isCartOpen, closeCart } = useCart()
  const drawerRef = useRef<HTMLDivElement>(null)

  const [nama, setNama] = useState("")
  const [alamat, setAlamat] = useState("")
  const [catatan, setCatatan] = useState("")

  const canOrder = totalQty > 0 && nama.trim() !== "" && alamat.trim() !== ""

  /* Close on Escape */
  useEffect(() => {
    if (!isCartOpen) return
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") closeCart() }
    document.addEventListener("keydown", handler)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", handler)
      document.body.style.overflow = ""
    }
  }, [isCartOpen, closeCart])

  const handleOrder = () => {
    if (!canOrder) return
    const url = buildWhatsAppMessage(items, nama.trim(), alamat.trim(), catatan)
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
          isCartOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
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

        {/* ── Scrollable body ── */}
        <div className="flex-1 overflow-y-auto">

          {/* Customer info */}
          <div className="px-4 pb-6 space-y-3">
            <p className="mb-1 text-[11px] font-bold uppercase tracking-wide text-muted-foreground">
              Data Pemesan
            </p>

            <Field
              id="order-nama"
              label="Nama"
              icon={User}
              placeholder="Nama lengkap kamu"
              value={nama}
              onChange={setNama}
              required
            />

            <Field
              id="order-alamat"
              label="Alamat Pengantaran"
              icon={MapPin}
              placeholder="Tuliskan alamat"
              value={alamat}
              onChange={setAlamat}
              required
              as="textarea"
            />

            <Field
              id="order-catatan"
              label="Catatan (opsional)"
              icon={ClipboardList}
              placeholder="cth: tidak pedas, ambil sendiri, dll."
              value={catatan}
              onChange={setCatatan}
            />
          </div>

          {/* Divider */}
          <div className="mx-4 my-4 h-px bg-border" />

          {/* Product list */}
          <div className="px-4 pt-4 pb-2">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-wide text-muted-foreground">
              Pilih Menu
            </p>
            <div className="space-y-2">
              {menuItems.map((item) => (
                <QtyRow key={item.name} item={item} />
              ))}
            </div>
          </div>
        </div>

        {/* ── Footer ── */}
        <div className="border-t border-border bg-background/80 px-5 py-4 backdrop-blur-sm">
          {/* Order summary */}
          {totalQty > 0 && (
            <div className="mb-3 space-y-1.5 rounded-xl bg-secondary/60 p-3">
              <p className="text-[11px] font-bold uppercase tracking-wide text-muted-foreground">
                Daftar Pesanan ({totalQty} item)
              </p>
              <div className="max-h-28 overflow-y-auto space-y-1 pr-1">
                {items.map((ci) => (
                  <div key={ci.item.name} className="flex justify-between text-xs text-primary font-medium">
                    <span className="truncate max-w-[75%]">{ci.item.name}</span>
                    <span className="font-bold text-accent-foreground">× {ci.qty}</span>
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-muted-foreground pt-1.5 border-t border-border/60">
                *Total harga &amp; ongkir akan dikonfirmasi langsung via WhatsApp.
              </p>
            </div>
          )}

          {/* Validation hint */}
          {totalQty > 0 && (!nama.trim() || !alamat.trim()) && (
            <p className="mb-2 text-center text-xs text-muted-foreground">
              Lengkapi nama &amp; alamat untuk melanjutkan
            </p>
          )}

          <button
            type="button"
            onClick={handleOrder}
            disabled={!canOrder}
            className={cn(
              "flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-bold transition-all duration-200",
              canOrder
                ? "bg-[#25D366] text-white shadow-lg shadow-[#25D366]/20 hover:scale-[1.02] hover:bg-[#22c55e] active:scale-95"
                : "bg-secondary text-muted-foreground cursor-not-allowed",
            )}
          >
            <MessageCircle className="h-5 w-5" />
            {totalQty === 0
              ? "Belum ada pesanan"
              : !canOrder
                ? "Lengkapi data pemesan"
                : "Kirim Pesanan via WhatsApp"}
          </button>
        </div>
      </div>
    </>
  )
}
