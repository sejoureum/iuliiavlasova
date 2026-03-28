export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-[color:var(--color-accent-soft)]/80 bg-[color:var(--color-canvas)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="text-sm text-[color:var(--color-muted)]">
          © {year} Iuliia VLASOVA — IT Consulting Services
        </p>
        <a
          href="mailto:hello@example.com"
          className="text-sm font-medium text-[color:var(--color-accent)] hover:underline"
        >
          hello@example.com
        </a>
      </div>
    </footer>
  )
}
