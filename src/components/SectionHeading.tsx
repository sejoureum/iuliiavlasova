type Props = {
  eyebrow: string
  title: string
  description: string
}

export function SectionHeading({ eyebrow, title, description }: Props) {
  return (
    <div className="max-w-2xl">
      <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-neutral-400">
        {eyebrow}
      </p>
      <h2 className="font-display mt-5 text-5xl font-black uppercase leading-[0.92] tracking-tight text-neutral-900 sm:text-6xl">
        {title}
      </h2>
      <p className="mt-5 text-sm leading-relaxed text-neutral-500">{description}</p>
    </div>
  )
}
