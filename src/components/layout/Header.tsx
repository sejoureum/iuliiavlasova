import { useState } from 'react'
import { Link } from 'react-router'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useSiteLanguage } from '@/context/SiteLanguageContext'
import { siteContent } from '@/i18n/siteContent'

export function Header() {
  const { lang } = useSiteLanguage()
  const t = siteContent[lang]
  const nav = [
    { href: '#about', label: t.nav.about },
    { href: '#pricing', label: t.nav.pricing },
    { href: '#contact', label: t.nav.contact },
  ]
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--color-accent-soft)]/60 bg-[color:var(--color-canvas)]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link
          to="/"
          className="flex flex-col gap-0.5 text-[color:var(--color-ink)]"
        >
          <span className="text-base font-semibold tracking-tight sm:text-lg">
            Iuliia VLASOVA
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[color:var(--color-muted)] sm:text-xs">
            IT Consulting Services
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[color:var(--color-muted)] transition hover:text-[color:var(--color-accent)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="rounded-lg p-2 text-[color:var(--color-ink)] md:hidden"
          aria-expanded={open}
          aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      <div
        className={cn(
          'border-t border-[color:var(--color-accent-soft)]/60 md:hidden',
          open ? 'block' : 'hidden',
        )}
      >
        <nav className="flex flex-col gap-1 px-4 py-3 sm:px-6">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-[color:var(--color-muted)] hover:bg-[color:var(--color-accent-soft)]/40 hover:text-[color:var(--color-ink)]"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
