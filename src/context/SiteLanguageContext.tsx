import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'
import type { SiteLang } from '@/i18n/siteContent'

type Value = {
  lang: SiteLang
  setLang: (lang: SiteLang) => void
}

const SiteLanguageContext = createContext<Value | null>(null)

export function SiteLanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<SiteLang>('en')

  useEffect(() => {
    document.documentElement.lang =
      lang === 'en' ? 'en' : lang === 'fr' ? 'fr' : 'ru'
  }, [lang])

  return (
    <SiteLanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </SiteLanguageContext.Provider>
  )
}

export function useSiteLanguage() {
  const ctx = useContext(SiteLanguageContext)
  if (!ctx) {
    throw new Error('useSiteLanguage must be used within SiteLanguageProvider')
  }
  return ctx
}
