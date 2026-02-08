import type { Metadata } from 'next'
import { createClient } from '@supabase/supabase-js'
import BlogPostPage from '@/views/BlogPostPage'

// 1. Define types for clarity
type PageProps = {
  params: Promise<{ slug: string }>
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// 2. Add dynamic route configuration
export const dynamic = 'force-dynamic'
export const dynamicParams = true

/**
 * Generates SEO metadata by awaiting the params promise 
 * and fetching data from Supabase.
 */
export async function generateMetadata(
  props: PageProps // Do not destructure here
): Promise<Metadata> {
  // Await the params object before accessing slug
  const params = await props.params
  const slug = params.slug

  const supabase = createClient(supabaseUrl, supabaseAnonKey)
  const { data: post } = await supabase
    .from('blog_posts')
    .select('title, excerpt, meta_description, featured_image, slug')
    .eq('slug', slug)
    .eq('status', 'published')
    .maybeSingle()

  if (!post) {
    return {
      title: 'Blog Post | A Secure Annapolis Locksmith',
      description: 'Read our latest locksmith tips, guides, and news from A Secure Annapolis Locksmith.',
    }
  }

  const description = post.meta_description || post.excerpt || 'Read our latest locksmith tips and guides.'

  return {
    title: `${post.title} | A Secure Annapolis Locksmith`,
    description,
    alternates: { canonical: `https://www.asecureannapolislocksmith.com/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description,
      url: `https://www.asecureannapolislocksmith.com/blog/${post.slug}`,
      type: 'article',
      ...(post.featured_image && { images: [post.featured_image] }),
    },
  }
}

/**
 * The Page component also receives params as a Promise in Next.js 15.
 * We pass the params promise down to the view component.
 */
export default async function Page(props: PageProps) {
  const params = await props.params
  
  // We pass the resolved slug to the BlogPostPage view
  return <BlogPostPage slug={params.slug} />
}