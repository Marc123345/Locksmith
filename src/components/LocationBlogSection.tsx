import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { supabase } from '@/lib/supabase';
import { BlogCard } from '@/components/BlogCard';
import { Button } from '@/components/ui/button';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  published_date: string;
  featured_image: string | null;
  category: string | null;
  location: string | null;
  tags: string[] | null;
}

interface LocationBlogSectionProps {
  locationName: string;
  heading?: string;
  maxPosts?: number;
}

export default function LocationBlogSection({
  locationName,
  heading,
  maxPosts = 3,
}: LocationBlogSectionProps) {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      setLoading(true);

      const today = new Date().toISOString().split('T')[0];

      const { data: locationPosts } = await supabase
        .from('blog_posts')
        .select('id, title, slug, excerpt, published_date, featured_image, category, location, tags')
        .eq('status', 'published')
        .lte('published_date', today)
        .ilike('location', locationName)
        .order('published_date', { ascending: false })
        .limit(maxPosts);

      let combinedPosts = locationPosts || [];

      if (combinedPosts.length < maxPosts) {
        const existingIds = combinedPosts.map((p) => p.id);
        const { data: tagPosts } = await supabase
          .from('blog_posts')
          .select('id, title, slug, excerpt, published_date, featured_image, category, location, tags')
          .eq('status', 'published')
          .lte('published_date', today)
          .contains('tags', [locationName])
          .order('published_date', { ascending: false })
          .limit(maxPosts);

        if (tagPosts) {
          for (const post of tagPosts) {
            if (!existingIds.includes(post.id) && combinedPosts.length < maxPosts) {
              combinedPosts.push(post);
            }
          }
        }
      }

      setPosts(combinedPosts);
      setLoading(false);
    }

    fetchPosts();
  }, [locationName, maxPosts]);

  if (loading || posts.length === 0) return null;

  const displayHeading = heading || `Explore Our Blog for ${locationName}`;

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 mb-4">
            <BookOpen className="h-7 w-7 text-blue-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {displayHeading}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tips, guides, and local security insights for {locationName} homeowners and businesses.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
        >
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <BlogCard
                slug={post.slug}
                title={post.title}
                excerpt={post.excerpt || ''}
                publishedDate={post.published_date}
                featuredImage={post.featured_image || undefined}
                category={post.category || undefined}
                location={post.location || undefined}
                tags={post.tags || undefined}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Button variant="outline" size="lg" className="group" asChild>
            <Link to="/blog">
              View All Articles
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
