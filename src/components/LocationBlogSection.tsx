'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Calendar, MapPin, BookOpen } from 'lucide-react';
import { Card, CardContent, CardFooter } from './ui/card';
import { Button } from './ui/button';
import { supabase } from '@/lib/supabase';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  location: string;
  created_at: string;
}

interface LocationBlogSectionProps {
  locationName?: string;
  heading?: string;
  limit?: number;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function LocationBlogSection({
  locationName,
  heading = "Latest Blog Posts",
  limit = 3
}: LocationBlogSectionProps) {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        let query = supabase
          .from('blog_posts')
          .select('id, title, slug, excerpt, location, created_at')
          .eq('published', true)
          .order('created_at', { ascending: false })
          .limit(limit);

        if (locationName) {
          query = query.or(`location.eq.${locationName},location.is.null`);
        }

        const { data, error } = await query;

        if (error) throw error;
        setPosts(data || []);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, [locationName, limit]);

  if (loading || posts.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-slate-50" aria-label="Blog posts">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Blog
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{heading}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Helpful tips and guides about locksmith services in Annapolis and Anne Arundel County
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {posts.map((post) => (
            <motion.article key={post.id} variants={itemVariants}>
              <Link href={`/blog/${post.slug}`} className="block h-full">
                <Card className="h-full border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-xl group flex flex-col">
                  <CardContent className="pt-6 flex-grow">
                    <div className="h-12 w-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-4 group-hover:bg-primary/10 transition-colors">
                      <BookOpen className="h-6 w-6" />
                    </div>
                    <div className="flex items-center gap-3 mb-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        <time dateTime={post.created_at}>
                          {new Date(post.created_at).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </time>
                      </div>
                      {post.location && (
                        <div className="flex items-center gap-1.5">
                          <MapPin className="h-3.5 w-3.5" />
                          <span>{post.location}</span>
                        </div>
                      )}
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <span className="inline-flex items-center text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </CardFooter>
                </Card>
              </Link>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" className="group border-2" asChild>
            <Link href="/blog">
              View All Blog Posts
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
