'use client'

import { usePathname } from 'next/navigation'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import ErrorBoundary from '@/components/ErrorBoundary'

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  // PPC landing pages render without site chrome — no nav, no footer,
  // no internal links. The only action on those pages is calling.
  const isPpcPage = pathname?.startsWith('/ppc')

  if (isPpcPage) {
    return (
      <ErrorBoundary>
        <main className="min-h-screen">{children}</main>
      </ErrorBoundary>
    )
  }

  return (
    <ErrorBoundary>
      <div className="min-h-screen flex flex-col">
        <Header />
        <Breadcrumbs />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </ErrorBoundary>
  )
}
