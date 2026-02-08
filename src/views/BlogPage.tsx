'use client';

import { useState, useEffect } from 'react';
import { BookOpen, Search } from 'lucide-react';
import { BlogCard } from '@/components/BlogCard';
import { supabase } from '@/lib/supabase';
import { useSafeState } from '@/hooks/useSafeState';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  published_date: string;
  featured_image?: string;
  category?: string;
  location?: string;
  tags?: string[];
}

const BlogPage = () => {
  const [posts, setPosts] = useSafeState<BlogPost[]>([]);
  const [loading, setLoading] = useSafeState(true);
  const [searchQuery, setSearchQuery] = useSafeState('');
  const [selectedCategory, setSelectedCategory] = useSafeState<string | null>(null);

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('status', 'published')
        .lte('published_date', new Date().toISOString().split('T')[0])
        .order('published_date', { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      searchQuery === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      !selectedCategory || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const categories = Array.from(
    new Set(posts.map((post) => post.category).filter(Boolean))
  ) as string[];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 pt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <BookOpen className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Locksmith Blog & Security Tips
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Expert advice, security tips, and industry insights from your trusted Anne Arundel County locksmiths
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-8 space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {categories.length > 0 && (
              <div className="flex flex-wrap gap-2 justify-center">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === null
                      ? 'bg-primary text-white'
                      : 'bg-muted hover:bg-muted/80'
                  }`}
                >
                  All Posts
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-primary text-white'
                        : 'bg-muted hover:bg-muted/80'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
              <p className="mt-4 text-muted-foreground">Loading articles...</p>
            </div>
          ) : filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {filteredPosts.map((post) => (
                <BlogCard
                  key={post.id}
                  slug={post.slug}
                  title={post.title}
                  excerpt={post.excerpt || ''}
                  publishedDate={post.published_date}
                  featuredImage={post.featured_image}
                  category={post.category}
                  location={post.location}
                  tags={post.tags}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No articles found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BlogPage;
