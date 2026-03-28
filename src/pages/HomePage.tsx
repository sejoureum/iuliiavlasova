import { ArrowRight, Mail, Phone } from 'lucide-react'
import { SectionHeading } from '@/components/SectionHeading'
import { cn } from '@/lib/utils'
import { useSiteLanguage } from '@/context/SiteLanguageContext'
import { siteContent, type SiteLang } from '@/i18n/siteContent'

const langTabs: { id: SiteLang; label: string }[] = [
  { id: 'en', label: 'ENG' },
  { id: 'fr', label: 'FR' },
  { id: 'ru', label: 'RU' },
]

export function HomePage() {
  const { lang, setLang } = useSiteLanguage()
  const t = siteContent[lang]
  const hero = t.hero

  return (
    <>
      <section
        lang={hero.sectionLang}
        className="relative flex min-h-[100dvh] flex-col border-b border-neutral-200 bg-gradient-to-b from-white to-neutral-100"
      >
        <div
          className="absolute right-4 top-20 z-10 sm:right-6 sm:top-24"
          role="group"
          aria-label={t.ariaLangSwitcher}
        >
          <div className="flex border border-neutral-900 bg-white">
            {langTabs.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                onClick={() => setLang(id)}
                className={cn(
                  'min-w-[3rem] rounded-none border-0 border-r border-neutral-900 px-3 py-2 text-xs font-semibold tracking-wide transition last:border-r-0',
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
        </div>

        <div className="relative flex flex-1 flex-col justify-center px-4 pb-20 pt-28 sm:px-6 sm:pb-24 sm:pt-32">
          <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
              {hero.eyebrow}
            </p>
            <div className="h-px w-16 bg-neutral-900" aria-hidden />
            <h1 className="text-3xl font-semibold leading-snug tracking-tight text-neutral-900 sm:text-4xl md:text-[2.75rem] md:leading-tight">
              {hero.title}
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-neutral-500 sm:text-lg">
              {hero.lead}
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#about"
                className="inline-flex items-center gap-2 bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-neutral-800"
              >
                {hero.ctaPrimary}
                <ArrowRight className="size-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-neutral-800"
              >
                {hero.ctaSecondary}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        lang={hero.sectionLang}
        className="scroll-mt-24 border-b border-[color:var(--color-accent-soft)]/60"
      >
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <SectionHeading
            eyebrow={t.about.eyebrow}
            title={t.about.title}
            description={t.about.description}
          />
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {t.about.cards.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-[color:var(--color-accent-soft)]/80 bg-white/60 p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-[color:var(--color-ink)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-muted)]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="pricing"
        lang={hero.sectionLang}
        className="scroll-mt-24 border-b border-neutral-200 bg-white"
      >
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <SectionHeading
            eyebrow={t.pricing.eyebrow}
            title={t.pricing.title}
            description={t.pricing.description}
          />
          <ul className="mt-10 border border-neutral-200 bg-neutral-50">
            {t.pricing.rows.map((row) => (
              <li
                key={row.id}
                className="flex flex-col gap-2 border-b border-neutral-200 px-5 py-5 last:border-b-0 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="font-semibold text-neutral-900">{row.name}</p>
                  {row.note ? (
                    <p className="mt-1 text-sm text-neutral-500">{row.note}</p>
                  ) : null}
                </div>
                <p className="shrink-0 text-sm font-semibold text-neutral-900 sm:text-base">
                  {row.price}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-neutral-500">
            {t.pricing.footerBefore}
            <a
              href="#contact"
              className="font-medium text-neutral-900 underline underline-offset-2 hover:no-underline"
            >
              {t.pricing.footerLink}
            </a>
            {t.pricing.footerAfter}
          </p>
        </div>
      </section>

      <section id="contact" lang={hero.sectionLang} className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="rounded-3xl border border-[color:var(--color-accent-soft)] bg-[linear-gradient(135deg,var(--color-accent-soft)_0%,transparent_55%)] p-8 sm:p-12">
            <SectionHeading
              eyebrow={t.contact.eyebrow}
              title={t.contact.title}
              description={t.contact.description}
            />
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href="mailto:iuliiavlasova.fr@gmail.com"
                className="inline-flex items-center gap-3 rounded-full bg-[color:var(--color-ink)] px-6 py-3 text-sm font-semibold text-[color:var(--color-canvas)] transition hover:bg-[color:var(--color-accent)]"
              >
                <Mail className="size-4 shrink-0" />
                iuliiavlasova.fr@gmail.com
              </a>
              <a
                href="tel:+33743679886"
                className="inline-flex items-center gap-3 rounded-full border border-[color:var(--color-accent-soft)] bg-white/80 px-6 py-3 text-sm font-semibold text-[color:var(--color-ink)] transition hover:border-[color:var(--color-accent)]/50"
              >
                <Phone className="size-4 shrink-0" />
                +33 7 43 67 98 86
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
