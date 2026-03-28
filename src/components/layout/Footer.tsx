import { Reveal } from '@/components/motion/Reveal'
import { useSiteLanguage } from '@/context/SiteLanguageContext'
import { siteContent } from '@/i18n/siteContent'

export function Footer() {
  const year = new Date().getFullYear()
  const { lang } = useSiteLanguage()
  const t = siteContent[lang]
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <Reveal className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="flex flex-col gap-1">
          <p className="text-sm text-neutral-500">
            © {year} {t.footer}
          </p>
          <p className="text-xs tabular-nums text-neutral-500">{t.footerSiren}</p>
        </div>
        <a
          href="mailto:iuliiavlasova.fr@gmail.com"
          className="text-sm font-medium text-neutral-900 underline underline-offset-2 hover:no-underline"
        >
          iuliiavlasova.fr@gmail.com
        </a>
      </Reveal>
    </footer>
  )
}
