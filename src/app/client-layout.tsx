'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import ErrorBoundary from '@/components/ErrorBoundary'

export function ClientLayout({ children }: { children: React.ReactNode }) {
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
