import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/motion/Reveal'
import { useSiteLanguage } from '@/context/SiteLanguageContext'
import { siteContent } from '@/i18n/siteContent'

export function Footer() {
  const year = new Date().getFullYear()
  const { lang } = useSiteLanguage()
  const t = siteContent[lang]
  const nav = [
    { href: '/', label: 'Home' },
    { href: '#about', label: t.nav.about },
    { href: '#pricing', label: t.nav.pricing },
    { href: '#contact', label: t.nav.contact },
  ]

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Top grid */}
        <Reveal>
          <div className="grid gap-12 border-b border-white/10 py-16 sm:grid-cols-3">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/35">
                Navigation
              </p>
              <nav className="mt-5 flex flex-col gap-3">
                {nav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="group flex items-center justify-between text-sm font-medium text-white/60 transition-colors hover:text-white"
                  >
                    {item.label}
                    <ArrowUpRight className="size-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                ))}
              </nav>
            </div>

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/35">
                Let's Talk
              </p>
              <div className="mt-5 flex flex-col gap-3">
                <a
                  href="mailto:iuliiavlasova.fr@gmail.com"
                  className="text-sm font-medium text-white/60 transition-colors hover:text-white"
                >
                  iuliiavlasova.fr@gmail.com
                </a>
                <a
                  href="tel:+33743679886"
                  className="text-sm font-medium text-white/60 transition-colors hover:text-white"
                >
                  +33 7 43 67 98 86
                </a>
              </div>
            </div>

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/35">
                Address
              </p>
              <p className="mt-5 text-sm leading-relaxed text-white/60">
                113 Boulevard de la Croisette
                <br />
                06400 Cannes, France
              </p>
            </div>
          </div>
        </Reveal>

        {/* Bottom: large brand + copyright */}
        <div className="flex items-end justify-between py-10">
          <a
            href="/"
            className="font-display text-6xl font-black uppercase leading-none tracking-tight text-white transition-opacity hover:opacity-70 sm:text-7xl md:text-8xl"
          >
            VLASOVA.
          </a>
          <div className="mb-1 flex flex-col items-end gap-1">
            <p className="text-xs text-white/35">© {year}</p>
            <p className="font-mono text-[10px] tabular-nums text-white/25">
              {t.footerSiren}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
