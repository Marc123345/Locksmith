import type { Metadata } from 'next'
import { createClient } from '@supabase/supabase-js'
import BlogPostPage from '@/views/BlogPostPage'

// 1. Define the Props type for Next.js 15
type PageProps = {
  params: Promise<{ slug: string }>
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// 2. Add Dynamic Route Configuration
export const dynamic = 'force-dynamic'
export const dynamicParams = true

export async function generateMetadata(
  props: PageProps
): Promise<Metadata> {
  // 3. Await the params promise before accessing properties
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
    alternates: { canonical: `https://asecureannapolislocksmith.com/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description,
      url: `https://asecureannapolislocksmith.com/blog/${post.slug}`,
      type: 'article',
      ...(post.featured_image && { images: [post.featured_image] }),
    },
  }
}

export default function Page() {
  return <BlogPostPage />
}