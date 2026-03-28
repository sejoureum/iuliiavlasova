import { useSiteLanguage } from '@/context/SiteLanguageContext'
import { siteContent } from '@/i18n/siteContent'

export function Footer() {
  const year = new Date().getFullYear()
  const { lang } = useSiteLanguage()
  const t = siteContent[lang]
  return (
    <footer className="border-t border-[color:var(--color-accent-soft)]/80 bg-[color:var(--color-canvas)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="text-sm text-[color:var(--color-muted)]">
          © {year} {t.footer}
        </p>
        <a
          href="mailto:iuliiavlasova.fr@gmail.com"
          className="text-sm font-medium text-[color:var(--color-accent)] hover:underline"
        >
          iuliiavlasova.fr@gmail.com
        </a>
      </div>
    </footer>
  )
}
