"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { reviews } from "@/lib/site-data"
import { Reveal } from "@/components/reveal"
import { cn } from "@/lib/utils"

function Stars({ n, size = "sm" }: { n: number; size?: "sm" | "lg" }) {
  const cls = size === "lg" ? "h-5 w-5" : "h-3.5 w-3.5"
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(cls, i < n ? "fill-amber-400 text-amber-400" : "fill-muted text-border")}
        />
      ))}
    </div>
  )
}

export function ReviewsSection() {
  const [active, setActive] = useState(0)
  const total = reviews.length
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => setActive((p) => (p + 1) % total), 5000)
  }, [total])

  useEffect(() => {
    startTimer()
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [startTimer])

  const go = (idx: number) => { setActive(idx); startTimer() }
  const prev = () => go((active - 1 + total) % total)
  const next = () => go((active + 1) % total)

  const avg = (reviews.reduce((s, r) => s + r.rating, 0) / total).toFixed(1)
  const current = reviews[active]

  return (
    <section id="reviews" className="scroll-mt-20 overflow-hidden bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">

        {/* ── Header ── */}
        <Reveal className="mb-14 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Ulasan Pelanggan
            </span>
            <h2 className="mt-2 text-balance text-3xl font-black leading-tight tracking-tight text-primary md:text-4xl">
              Kata mereka tentang kami
            </h2>
          </div>

          {/* Compact rating pill */}
          <div className="flex items-center gap-3 rounded-full border border-border bg-card px-5 py-2.5 shadow-sm">
            <span className="text-2xl font-black text-primary">{avg}</span>
            <div className="flex flex-col gap-0.5">
              <Stars n={5} />
              <span className="text-[11px] text-muted-foreground">{total}+ ulasan</span>
            </div>
          </div>
        </Reveal>

        {/* ── Main spotlight ── */}
        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">

          {/* Left: featured large review */}
          <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl bg-primary px-8 py-10 text-primary-foreground md:px-12 md:py-14">
            {/* Decorative huge quote mark */}
            <span
              aria-hidden
              className="pointer-events-none absolute -right-4 -top-10 select-none text-[160px] font-black leading-none text-primary-foreground/[0.06]"
            >
              "
            </span>

            {/* Stars */}
            <Stars n={current.rating} size="lg" />

            {/* Review text */}
            <p
              key={active}
              className="mt-6 text-xl font-medium leading-relaxed text-primary-foreground/90 md:text-2xl"
              style={{ transition: "opacity 0.4s" }}
            >
              "{current.text}"
            </p>

            {/* Reviewer */}
            <div className="mt-10 flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div
                  className={cn(
                    "flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-black text-white shadow-md",
                    current.avatarColor,
                  )}
                >
                  {current.avatar}
                </div>
                <div>
                  <p className="font-bold text-primary-foreground">{current.name}</p>
                  <p className="text-sm text-primary-foreground/60">{current.location}</p>
                </div>
              </div>

              {current.order && (
                <span className="hidden rounded-full bg-primary-foreground/10 px-3 py-1.5 text-[11px] font-semibold text-primary-foreground/70 sm:block">
                  🛒 {current.order}
                </span>
              )}
            </div>

            {/* Controls */}
            <div className="mt-8 flex items-center gap-3">
              <button
                type="button"
                onClick={prev}
                aria-label="Sebelumnya"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-1.5">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Ulasan ${i + 1}`}
                    onClick={() => go(i)}
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-300",
                      i === active
                        ? "w-6 bg-primary-foreground"
                        : "w-1.5 bg-primary-foreground/30",
                    )}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={next}
                aria-label="Berikutnya"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              <span className="ml-auto text-xs text-primary-foreground/40">
                {active + 1} / {total}
              </span>
            </div>
          </div>

          {/* Right: compact review stack */}
          <div className="flex flex-col gap-3">
            {reviews.map((r, i) => (
              <button
                key={r.name}
                type="button"
                onClick={() => go(i)}
                className={cn(
                  "group flex w-full items-start gap-3 rounded-2xl border px-4 py-3.5 text-left transition-all duration-200",
                  i === active
                    ? "border-primary/20 bg-primary/5 shadow-sm"
                    : "border-border bg-card hover:border-primary/10 hover:bg-secondary/60",
                )}
              >
                {/* Avatar */}
                <div
                  className={cn(
                    "flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-black text-white",
                    r.avatarColor,
                  )}
                >
                  {r.avatar}
                </div>

                {/* Snippet */}
                <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <p className="truncate text-sm font-bold text-primary">{r.name}</p>
                    <Stars n={r.rating} />
                  </div>
                  <p className="line-clamp-1 text-xs text-muted-foreground">"{r.text}"</p>
                  <p className="text-[10px] text-muted-foreground/60">{r.date}</p>
                </div>

                {/* Active indicator */}
                {i === active && (
                  <div className="h-1.5 w-1.5 shrink-0 self-center rounded-full bg-primary" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* ── Bottom CTA ── */}
        <Reveal className="mt-14 flex flex-col items-center gap-2 text-center">
          <p className="text-sm text-muted-foreground">
            Sudah pesan dan puas dengan Lumpia Geget?
          </p>
          <a
            href={`https://wa.me/6281259969967?text=${encodeURIComponent("Halo, saya ingin memberikan ulasan untuk Lumpia Geget Surabaya! ⭐")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-2.5 text-sm font-semibold text-primary shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            Bagikan pengalaman Anda
          </a>
        </Reveal>

      </div>
    </section>
  )
}
