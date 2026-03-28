import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'
import { SectionHeading } from '@/components/SectionHeading'
import { useSiteLanguage } from '@/context/SiteLanguageContext'
import { siteContent } from '@/i18n/siteContent'

export function HomePage() {
  const { lang } = useSiteLanguage()
  const t = siteContent[lang]
  const hero = t.hero

  return (
    <>
      <section
        lang={hero.sectionLang}
        className="flex min-h-[100dvh] flex-col border-b border-neutral-200 bg-gradient-to-b from-white to-neutral-100"
      >
        <div className="flex flex-1 flex-col justify-center px-4 pb-20 pt-16 sm:px-6 sm:pb-24 sm:pt-20">
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
                className="inline-flex items-center gap-2 border border-neutral-900 bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-neutral-800"
              >
                {hero.ctaPrimary}
                <ArrowRight className="size-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border-2 border-neutral-900 bg-white px-6 py-3 text-sm font-semibold text-neutral-900 transition-colors hover:bg-neutral-50"
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
        className="scroll-mt-24 border-b border-neutral-200 bg-white"
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
                className="border border-neutral-200 bg-neutral-50 p-6"
              >
                <h3 className="text-lg font-semibold text-neutral-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500">
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

      <section
        id="contact"
        lang={hero.sectionLang}
        className="scroll-mt-24 bg-neutral-50"
      >
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="border border-neutral-200 bg-white p-8 sm:p-12">
            <SectionHeading
              eyebrow={t.contact.eyebrow}
              title={t.contact.title}
              description={t.contact.description}
            />
            <div className="mt-8 grid gap-6 border-b border-neutral-200 pb-8 sm:grid-cols-2">
              <div className="flex gap-3">
                <MapPin
                  className="mt-0.5 size-5 shrink-0 text-neutral-500"
                  aria-hidden
                />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-neutral-500">
                    {t.contact.addressLabel}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-neutral-900">
                    {t.contact.address}
                  </p>
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-neutral-500">
                  {t.contact.sirenLabel}
                </p>
                <p className="mt-1 text-sm font-medium tabular-nums tracking-wide text-neutral-900">
                  {t.contact.sirenNumber}
                </p>
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="mailto:iuliiavlasova.fr@gmail.com"
                className="inline-flex items-center justify-center gap-3 border border-neutral-900 bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-neutral-800"
              >
                <Mail className="size-4 shrink-0" />
                iuliiavlasova.fr@gmail.com
              </a>
              <a
                href="tel:+33743679886"
                className="inline-flex items-center justify-center gap-3 border-2 border-neutral-900 bg-white px-6 py-3 text-sm font-semibold text-neutral-900 transition-colors hover:bg-neutral-50"
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
