'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import { Calendar, MapPin, Tag, ArrowLeft, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BlogCard } from '@/components/BlogCard';
import { supabase } from '@/lib/supabase';
import { useSafeState } from '@/hooks/useSafeState';
import { CONTACT } from '@/utils/contact';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  author: string;
  published_date: string;
  featured_image?: string;
  category?: string;
  location?: string;
  tags?: string[];
  meta_description?: string;
}

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useSafeState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useSafeState<BlogPost[]>([]);
  const [loading, setLoading] = useSafeState(true);
  const [isNotFound, setIsNotFound] = useSafeState(false);

  useEffect(() => {
    if (slug) {
      fetchBlogPost();
    }
  }, [slug]);

  const fetchBlogPost = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .eq('status', 'published')
        .lte('published_date', new Date().toISOString().split('T')[0])
        .maybeSingle();

      if (error) throw error;

      if (!data) {
        setIsNotFound(true);
        return;
      }

      setPost(data);
      incrementViewCount(data.id);
      fetchRelatedPosts(data.category, data.location, data.id);
    } catch (error) {
      console.error('Error fetching blog post:', error);
      setIsNotFound(true);
    } finally {
      setLoading(false);
    }
  };

  const incrementViewCount = async (postId: string) => {
    try {
      await supabase.rpc('increment_blog_view_count', { post_id: postId });
    } catch (error) {
      console.error('Error incrementing view count:', error);
    }
  };

  const fetchRelatedPosts = async (
    category?: string,
    location?: string,
    currentPostId?: string
  ) => {
    try {
      let query = supabase
        .from('blog_posts')
        .select('*')
        .eq('status', 'published')
        .lte('published_date', new Date().toISOString().split('T')[0])
        .neq('id', currentPostId)
        .limit(3);

      if (category) {
        query = query.eq('category', category);
      } else if (location) {
        query = query.eq('location', location);
      }

      const { data } = await query.order('published_date', { ascending: false });

      if (data && data.length > 0) {
        setRelatedPosts(data);
      } else {
        const { data: fallbackData } = await supabase
          .from('blog_posts')
          .select('*')
          .eq('status', 'published')
          .lte('published_date', new Date().toISOString().split('T')[0])
          .neq('id', currentPostId)
          .order('published_date', { ascending: false })
          .limit(3);

        setRelatedPosts(fallbackData || []);
      }
    } catch (error) {
      console.error('Error fetching related posts:', error);
    }
  };

  if (isNotFound) {
    notFound();
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          <p className="mt-4 text-muted-foreground">Loading article...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.published_date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.featured_image,
    datePublished: post.published_date,
    author: {
      '@type': 'Organization',
      name: post.author,
    },
    publisher: {
      '@type': 'LocalBusiness',
      '@id': 'https://www.asecureannapolislocksmith.com/#localbusiness',
      name: 'A Secure Annapolis Locksmith',
      image: 'https://i.imgur.com/VfpMzbE.png',
      telephone: CONTACT.PHONE,
      email: CONTACT.EMAIL,
      address: {
        '@type': 'PostalAddress',
        streetAddress: CONTACT.ADDRESS,
        addressLocality: 'Annapolis',
        addressRegion: 'MD',
        postalCode: '21403',
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '38.9784',
        longitude: '-76.4922',
      },
      areaServed: post.location ? [post.location, 'Anne Arundel County', 'Maryland'] : ['Annapolis', 'Anne Arundel County', 'Maryland'],
      logo: {
        '@type': 'ImageObject',
        url: 'https://i.imgur.com/VfpMzbE.png',
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 pt-16">
        <article className="container mx-auto px-4 py-12 max-w-4xl">
          <Link
            href="/blog"
            className="inline-flex items-center text-primary hover:underline mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>

          {post.featured_image && (
            <div className="relative rounded-xl overflow-hidden mb-8 h-[400px] md:h-[500px]">
              <img
                src={post.featured_image}
                alt={post.title}
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>
          )}

          <div className="mb-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-4">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{formattedDate}</span>
              </div>

              {post.location && (
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>{post.location}</span>
                </div>
              )}

              {post.category && (
                <div className="flex items-center gap-2">
                  <Tag className="h-4 w-4" />
                  <span className="text-primary font-medium">{post.category}</span>
                </div>
              )}
            </div>

            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-muted px-3 py-1 rounded-full text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div
            className="prose prose-lg max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: post.content }}
            style={{
              fontSize: '1.125rem',
              lineHeight: '1.75',
            }}
          />

          <div className="border-t border-border pt-8 mb-12">
            <div className="bg-primary/5 rounded-lg p-6 border-l-4 border-primary">
              <h3 className="text-2xl font-bold mb-4">Need Locksmith Services?</h3>
              <p className="text-muted-foreground mb-4">
                Contact A Secure Annapolis Locksmith today for professional locksmith services
                in {post.location || 'Anne Arundel County'}.
              </p>
              <Button asChild size="lg" className="shadow-lg">
                <a href={`tel:${CONTACT.PHONE}`} className="flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  Call {CONTACT.PHONE_DISPLAY}
                </a>
              </Button>
            </div>
          </div>

          {relatedPosts.length > 0 && (
            <div className="border-t border-border pt-12">
              <h2 className="text-3xl font-bold mb-6">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <BlogCard
                    key={relatedPost.id}
                    slug={relatedPost.slug}
                    title={relatedPost.title}
                    excerpt={relatedPost.excerpt || ''}
                    publishedDate={relatedPost.published_date}
                    featuredImage={relatedPost.featured_image}
                    category={relatedPost.category}
                    location={relatedPost.location}
                    tags={relatedPost.tags}
                  />
                ))}
              </div>
            </div>
          )}
        </article>
      </div>
    </>
  );
};

export default BlogPostPage;
