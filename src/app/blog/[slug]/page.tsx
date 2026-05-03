import type { Metadata } from 'next'
import BlogPostPage from '@/views/BlogPostPage'
import { getPostBySlug, getPublishedPosts } from '@/data/blogPosts'

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getPublishedPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { slug } = await props.params
  const post = getPostBySlug(slug)

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

export default function Page() {
  return <BlogPostPage />
}
