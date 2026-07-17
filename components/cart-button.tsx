"use client"

import { ShoppingCart } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { CartDrawer } from "@/components/cart-drawer"
import { cn } from "@/lib/utils"

export function CartButton() {
  const { totalQty, isCartOpen, openCart } = useCart()

  return (
    <>
      <button
        type="button"
        id="cart-button"
        aria-label={`Buka pesanan${totalQty > 0 ? ` (${totalQty} item)` : ""}`}
        onClick={openCart}
        className={cn(
          "fixed bottom-6 right-6 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl",
          totalQty > 0 && "ring-4 ring-accent/30",
          isCartOpen && "opacity-0 pointer-events-none",
        )}
      >
        <ShoppingCart className="h-6 w-6" />
        {totalQty > 0 && (
          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-black text-primary-foreground">
            {totalQty > 99 ? "99+" : totalQty}
          </span>
        )}
      </button>

      {/* Drawer is now rendered here — driven by context state */}
      <CartDrawer />
    </>
  )
}
