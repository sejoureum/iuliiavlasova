type Props = {
  eyebrow: string
  title: string
  description: string
}

export function SectionHeading({ eyebrow, title, description }: Props) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[color:var(--color-ink)] sm:text-4xl">
        {title}
      </h2>
      <p className="mt-3 text-[color:var(--color-muted)]">{description}</p>
    </div>
  )
}
