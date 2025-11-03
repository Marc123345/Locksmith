/*
  # Contact Form Submissions Table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required)
      - `phone` (text, required)
      - `message` (text, required)
      - `created_at` (timestamp with timezone)
      - `status` (text, default: 'new')
      - `notes` (text)
      - `page_source` (text) - tracks which page the submission came from
      - `service_type` (text) - categorizes the type of service requested
      - `location_preference` (text) - for location-specific inquiries

  2. Security
    - Enable RLS on contact_submissions table
    - Add policy for authenticated users to read submissions
    - Add policy for anon/authenticated users to insert submissions
*/

-- Create the contact submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  message text NOT NULL,
  page_source text,
  service_type text,
  location_preference text,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'new',
  notes text,
  
  -- Add constraints
  CONSTRAINT valid_email CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
  CONSTRAINT valid_phone CHECK (phone ~* '^[0-9+\-() ]+$'),
  CONSTRAINT valid_status CHECK (status IN ('new', 'in_progress', 'completed', 'archived'))
);

-- Enable RLS
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy for authenticated users to read submissions
CREATE POLICY "Authenticated users can read contact submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

-- Create policy for anyone to insert submissions
CREATE POLICY "Anyone can create contact submissions"
  ON contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Create indexes for faster queries
CREATE INDEX IF NOT EXISTS contact_submissions_created_at_idx ON contact_submissions (created_at DESC);
CREATE INDEX IF NOT EXISTS contact_submissions_page_source_idx ON contact_submissions (page_source);
CREATE INDEX IF NOT EXISTS contact_submissions_service_type_idx ON contact_submissions (service_type);
CREATE INDEX IF NOT EXISTS contact_submissions_location_preference_idx ON contact_submissions (location_preference);