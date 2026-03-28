import { useState } from 'react'
import { Link } from 'react-router'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useSiteLanguage } from '@/context/SiteLanguageContext'
import { siteContent, type SiteLang } from '@/i18n/siteContent'

const langTabs: { id: SiteLang; label: string }[] = [
  { id: 'en', label: 'ENG' },
  { id: 'fr', label: 'FR' },
  { id: 'ru', label: 'RU' },
]

export function Header() {
  const { lang, setLang } = useSiteLanguage()
  const t = siteContent[lang]
  const nav = [
    { href: '#about', label: t.nav.about },
    { href: '#pricing', label: t.nav.pricing },
    { href: '#contact', label: t.nav.contact },
  ]
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link
          to="/"
          className="flex flex-col gap-0.5 text-neutral-900"
        >
          <span className="text-base font-semibold tracking-tight sm:text-lg">
            Iuliia VLASOVA
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500 sm:text-xs">
            IT Consulting Services
          </span>
        </Link>

        <div className="flex items-center gap-3 sm:gap-4">
          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-neutral-600 transition hover:text-neutral-900"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div
            role="group"
            aria-label={t.ariaLangSwitcher}
            className="flex shrink-0 border border-neutral-900 bg-white"
          >
            {langTabs.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                onClick={() => setLang(id)}
                className={cn(
                  'min-w-[2.75rem] rounded-none border-0 border-r border-neutral-900 px-2.5 py-1.5 text-xs font-semibold tracking-wide transition last:border-r-0 sm:min-w-[3rem] sm:px-3 sm:py-2',
                  lang === id
                    ? 'bg-neutral-900 text-white'
                    : 'bg-white text-neutral-900 hover:bg-neutral-100',
                )}
                aria-pressed={lang === id}
              >
                {label}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="rounded-none p-2 text-neutral-900 md:hidden"
            aria-expanded={open}
            aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          'border-t border-neutral-200 md:hidden',
          open ? 'block' : 'hidden',
        )}
      >
        <nav className="flex flex-col gap-1 px-4 py-3 sm:px-6">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-none px-3 py-2 text-sm font-medium text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
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
