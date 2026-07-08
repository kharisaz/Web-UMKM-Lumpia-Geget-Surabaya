import { cn } from "@/lib/utils"

type WaveDividerProps = {
  /** tailwind text-color class controlling the fill of the wave */
  className?: string
  /** flip the wave vertically */
  flip?: boolean
}

/**
 * A decorative wave separator. The wave color is driven by `currentColor`,
 * so set a `text-*` class via `className` to match the section below it.
 */
export function WaveDivider({ className, flip = false }: WaveDividerProps) {
  return (
    <div className={cn("pointer-events-none -mb-px w-full leading-none text-background", className)} aria-hidden="true">
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className={cn("block h-10 w-full md:h-16", flip && "rotate-180")}
      >
        <path
          fill="currentColor"
          d="M0,32 C240,80 480,0 720,24 C960,48 1200,80 1440,40 L1440,80 L0,80 Z"
        />
      </svg>
    </div>
  )
}
