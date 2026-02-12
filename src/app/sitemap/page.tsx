import type { Metadata } from 'next'
import SitemapPage from '@/views/SitemapPage'

export const metadata: Metadata = {
  title: 'Sitemap | A Secure Annapolis Locksmith',
  description: 'Browse all pages on A Secure Annapolis Locksmith website.',
  alternates: { canonical: 'https://asecureannapolislocksmith.com/sitemap' },
}

export default function Page() {
  return <SitemapPage />
}
