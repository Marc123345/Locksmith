/*
  # Add Blog View Count Increment Function

  1. New Functions
    - `increment_blog_view_count` (post_id uuid)
      - Safely increments the view_count for a blog post
      - Returns void
      - Handles non-existent post IDs gracefully

  2. Purpose
    - Tracks blog post views for analytics
    - Used when readers view blog posts
    - Non-critical function that fails silently in application code
*/

-- Create function to increment blog post view count
CREATE OR REPLACE FUNCTION increment_blog_view_count(post_id uuid)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  UPDATE blog_posts
  SET view_count = view_count + 1
  WHERE id = post_id;
END;
$$;
