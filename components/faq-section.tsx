"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { faqs } from "@/lib/site-data"
import { Reveal } from "@/components/reveal"
import { cn } from "@/lib/utils"

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="scroll-mt-20">
      <div className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
        <Reveal className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">FAQ</span>
          <h2 className="mt-3 text-balance text-3xl font-black leading-tight tracking-tight text-primary md:text-4xl">
            Pertanyaan yang sering ditanya
          </h2>
          <p className="mx-auto mt-3 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
            Belum menemukan jawabannya? Hubungi kami langsung via WhatsApp, kami siap membantu.
          </p>
        </Reveal>

        <div className="mt-10 flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <Reveal key={faq.question} delay={i * 60}>
                <div className="overflow-hidden rounded-2xl border border-border bg-card">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-secondary/60"
                  >
                    <span className="font-semibold text-primary">{faq.question}</span>
                    <Plus
                      className={cn(
                        "h-5 w-5 shrink-0 text-accent-foreground transition-transform duration-300",
                        isOpen && "rotate-45",
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      "grid transition-all duration-300 ease-out",
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
