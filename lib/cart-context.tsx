"use client"

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react"
import type { MenuItem } from "@/lib/site-data"

export type CartItem = {
  item: MenuItem
  qty: number
}

type CartContextValue = {
  items: CartItem[]
  totalQty: number
  /** Set or update qty for any menu item (adds if not in cart, removes if qty <= 0) */
  setItemQty: (item: MenuItem, qty: number) => void
  getQty: (name: string) => number
  clear: () => void
  /** Drawer state — lifted so any component can open it */
  isCartOpen: boolean
  openCart: () => void
  closeCart: () => void
}

const CartContext = createContext<CartContextValue | null>(null)

/** Parse "Rp 3.000 / pcs" → 3000, "Rp 10.000 / 3 pcs" → 10000 */
export function parsePrice(raw: string): number {
  const firstPart = raw.split("/")[0] || ""
  const digits = firstPart.replace(/[^0-9]/g, "")
  return parseInt(digits, 10) || 0
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isCartOpen, setCartOpen] = useState(false)

  const setItemQty = useCallback((item: MenuItem, qty: number) => {
    if (qty <= 0) {
      setItems((prev) => prev.filter((ci) => ci.item.name !== item.name))
      return
    }
    setItems((prev) => {
      const existing = prev.find((ci) => ci.item.name === item.name)
      if (existing) {
        return prev.map((ci) =>
          ci.item.name === item.name ? { ...ci, qty } : ci,
        )
      }
      return [...prev, { item, qty }]
    })
  }, [])

  const getQty = useCallback(
    (name: string) => items.find((ci) => ci.item.name === name)?.qty ?? 0,
    [items],
  )

  const clear = useCallback(() => setItems([]), [])
  const openCart = useCallback(() => setCartOpen(true), [])
  const closeCart = useCallback(() => setCartOpen(false), [])

  const totalQty = items.reduce((s, ci) => s + ci.qty, 0)

  return (
    <CartContext.Provider
      value={{
        items,
        totalQty,
        setItemQty,
        getQty,
        clear,
        isCartOpen,
        openCart,
        closeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be inside <CartProvider>")
  return ctx
}
