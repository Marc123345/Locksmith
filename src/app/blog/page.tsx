import type { Metadata } from 'next'
import BlogPage from '@/views/BlogPage'

export const metadata: Metadata = {
  title: 'Locksmith Blog | Security Tips & Advice | A Secure Annapolis Locksmith',
  description: 'Expert locksmith tips, security advice, and home safety guides from A Secure Annapolis Locksmith.',
  alternates: { canonical: 'https://asecureannapolislocksmith.com/blog' },
}

export default function Page() {
  return <BlogPage />
}
