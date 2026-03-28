import { Outlet } from 'react-router'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { SiteLanguageProvider } from '@/context/SiteLanguageContext'

export function RootLayout() {
  return (
    <SiteLanguageProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </SiteLanguageProvider>
  )
}
