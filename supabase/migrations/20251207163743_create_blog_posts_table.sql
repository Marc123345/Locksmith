/*
  # Create blog_posts table

  1. New Tables
    - `blog_posts`
      - `id` (uuid, primary key) - Unique identifier for each blog post
      - `title` (text, not null) - Blog post title
      - `slug` (text, unique, not null) - URL-friendly version of the title
      - `content` (text, not null) - Full blog post content (HTML/Markdown)
      - `excerpt` (text) - Short summary for listing pages
      - `author` (text) - Author name
      - `published_date` (date, not null) - Publication date
      - `featured_image` (text) - URL to featured image
      - `category` (text) - Blog category (e.g., "Smart Locks", "Security Tips")
      - `tags` (text array) - Array of tags for filtering
      - `location` (text) - Related service location
      - `meta_description` (text) - SEO meta description
      - `status` (text) - Publication status: 'draft' or 'published'
      - `view_count` (integer) - Track post views
      - `created_at` (timestamptz) - Record creation timestamp
      - `updated_at` (timestamptz) - Last update timestamp

  2. Security
    - Enable RLS on `blog_posts` table
    - Add policy for public to read published posts
    - Only published posts with published_date <= today are visible

  3. Indexes
    - Index on slug for fast lookups
    - Index on published_date for sorting
    - Index on status for filtering
    - Index on location for location-based filtering
*/

-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  content text NOT NULL,
  excerpt text,
  author text DEFAULT 'A Secure Annapolis Locksmith',
  published_date date NOT NULL,
  featured_image text,
  category text,
  tags text[] DEFAULT ARRAY[]::text[],
  location text,
  meta_description text,
  status text DEFAULT 'published' CHECK (status IN ('draft', 'published')),
  view_count integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published_date ON blog_posts(published_date DESC);
CREATE INDEX IF NOT EXISTS idx_blog_posts_status ON blog_posts(status);
CREATE INDEX IF NOT EXISTS idx_blog_posts_location ON blog_posts(location);
CREATE INDEX IF NOT EXISTS idx_blog_posts_category ON blog_posts(category);

-- Enable Row Level Security
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Policy: Allow public to read published posts
CREATE POLICY "Anyone can view published blog posts"
  ON blog_posts
  FOR SELECT
  TO public
  USING (
    status = 'published' 
    AND published_date <= CURRENT_DATE
  );

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_blog_posts_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to automatically update updated_at
DROP TRIGGER IF EXISTS update_blog_posts_updated_at_trigger ON blog_posts;
CREATE TRIGGER update_blog_posts_updated_at_trigger
  BEFORE UPDATE ON blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION update_blog_posts_updated_at();