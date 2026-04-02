import { useState } from 'react'
import { Link } from 'react-router'
import { motion, useReducedMotion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { easeOut } from '@/lib/motion-variants'
import { useSiteLanguage } from '@/context/SiteLanguageContext'
import { siteContent, type SiteLang } from '@/i18n/siteContent'

const langTabs: { id: SiteLang; label: string }[] = [
  { id: 'en', label: 'EN' },
  { id: 'fr', label: 'FR' },
  { id: 'ru', label: 'RU' },
]

export function Header() {
  const reduce = useReducedMotion()
  const { lang, setLang } = useSiteLanguage()
  const t = siteContent[lang]
  const nav = [
    { href: '/', label: 'Home' },
    { href: '#about', label: t.nav.about },
    { href: '#pricing', label: t.nav.pricing },
    { href: '#contact', label: t.nav.contact },
  ]
  const [open, setOpen] = useState(false)

  return (
    <motion.header
      className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur-md"
      initial={reduce ? false : { opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduce ? 0 : 0.42, ease: easeOut }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6">
        {/* Desktop nav with "/" separators */}
        <nav className="hidden items-center md:flex">
          {nav.map((item, i) => (
            <span key={item.href} className="flex items-center">
              {i > 0 && (
                <span className="mx-3 select-none text-[10px] text-neutral-300">/</span>
              )}
              <a
                href={item.href}
                className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-500 transition-colors hover:text-neutral-900"
              >
                {item.label}
              </a>
            </span>
          ))}
        </nav>

        {/* Mobile: brand + burger */}
        <Link
          to="/"
          className="font-display text-base font-black uppercase tracking-tight text-neutral-900 md:hidden"
        >
          VLASOVA.
        </Link>
        <button
          type="button"
          className="p-1.5 text-neutral-900 md:hidden"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>

        {/* Right: lang switcher + brand */}
        <div className="hidden items-center gap-5 md:flex">
          <div
            role="group"
            aria-label={t.ariaLangSwitcher}
            className="flex items-center divide-x divide-neutral-200"
          >
            {langTabs.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                onClick={() => setLang(id)}
                className={cn(
                  'px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] transition first:pl-0 last:pr-0',
                  lang === id
                    ? 'text-neutral-900'
                    : 'text-neutral-400 hover:text-neutral-700',
                )}
                aria-pressed={lang === id}
              >
                {label}
              </button>
            ))}
          </div>
          <Link
            to="/"
            className="font-display text-xl font-black uppercase tracking-tight text-neutral-900"
          >
            VLASOVA.
          </Link>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div className={cn('border-t border-neutral-100 md:hidden', open ? 'block' : 'hidden')}>
        <nav className="flex flex-col px-4 py-2 sm:px-6">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="border-b border-neutral-100 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-500 last:border-0 hover:text-neutral-900"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center border-t border-neutral-100 px-4 py-3 sm:px-6">
          {langTabs.map(({ id, label }, i) => (
            <button
              key={id}
              type="button"
              onClick={() => setLang(id)}
              className={cn(
                'px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] transition',
                i > 0 && 'border-l border-neutral-200',
                lang === id ? 'text-neutral-900' : 'text-neutral-400',
              )}
              aria-pressed={lang === id}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </motion.header>
  )
}
