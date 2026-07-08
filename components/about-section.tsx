import { Flame, Leaf, Clock } from "lucide-react"
import { Reveal } from "@/components/reveal"

const highlights = [
  {
    icon: Flame,
    title: "Cita Rasa Autentik",
    description: "Resep khas Surabaya yang diwariskan turun-temurun, dengan bumbu rempah asli.",
  },
  {
    icon: Leaf,
    title: "Bahan Premium",
    description: "Dipilih segar setiap pagi dari pasar lokal untuk kualitas terbaik.",
  },
  {
    icon: Clock,
    title: "Disajikan Fresh",
    description: "Digoreng tepat saat pesanan masuk, jadi selalu renyah saat sampai.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal direction="left">
            <span className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Tentang Kami
            </span>
            <h2 className="mt-3 text-balance text-3xl font-black leading-tight tracking-tight text-primary md:text-4xl">
              Lebih dari sekadar gorengan, ini soal kerenyahan yang jujur.
            </h2>
          </Reveal>
          <Reveal direction="right" delay={100} className="max-w-xl">
            <p className="text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              Lumpia Geget Surabaya lahir dari kecintaan pada jajanan pasar yang otentik. Kami percaya bahwa
              kelezatan sejati datang dari bahan berkualitas, resep yang tulus, dan penyajian yang tepat waktu.
              Setiap lumpia kami goreng saat kamu pesan, sehingga tidak ada kompromi soal rasa dan tekstur.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {highlights.map((item, i) => (
            <Reveal key={item.title} delay={i * 100}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-primary">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
