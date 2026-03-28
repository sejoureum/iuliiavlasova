import { useSiteLanguage } from '@/context/SiteLanguageContext'
import { siteContent } from '@/i18n/siteContent'

export function Footer() {
  const year = new Date().getFullYear()
  const { lang } = useSiteLanguage()
  const t = siteContent[lang]
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="text-sm text-neutral-500">
          © {year} {t.footer}
        </p>
        <a
          href="mailto:iuliiavlasova.fr@gmail.com"
          className="text-sm font-medium text-neutral-900 underline underline-offset-2 hover:no-underline"
        >
          iuliiavlasova.fr@gmail.com
        </a>
      </div>
    </footer>
  )
}
