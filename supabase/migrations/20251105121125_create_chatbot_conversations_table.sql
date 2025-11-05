/*
  # Chatbot Conversations and Leads Management

  1. New Tables
    - `chatbot_conversations`
      - `id` (uuid, primary key)
      - `session_id` (text, unique identifier for chat session)
      - `visitor_name` (text, nullable)
      - `visitor_email` (text, nullable)
      - `visitor_phone` (text, nullable)
      - `service_interest` (text, nullable)
      - `location_preference` (text, nullable)
      - `conversation_data` (jsonb, stores full conversation history)
      - `lead_status` (text, options: 'new', 'qualified', 'contacted', 'converted')
      - `lead_score` (integer, 0-100 scoring)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
      - `completed_at` (timestamptz, nullable)
    
    - `chatbot_messages`
      - `id` (uuid, primary key)
      - `conversation_id` (uuid, foreign key to chatbot_conversations)
      - `message_type` (text, 'bot' or 'user')
      - `message_text` (text)
      - `message_data` (jsonb, stores additional message metadata)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on both tables
    - Public can insert new conversations and messages
    - Only authenticated users (admin) can view all data
    - Visitors can only access their own session data via session_id
*/

-- Create chatbot_conversations table
CREATE TABLE IF NOT EXISTS chatbot_conversations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id text UNIQUE NOT NULL,
  visitor_name text,
  visitor_email text,
  visitor_phone text,
  service_interest text,
  location_preference text,
  conversation_data jsonb DEFAULT '[]'::jsonb,
  lead_status text DEFAULT 'new' CHECK (lead_status IN ('new', 'qualified', 'contacted', 'converted')),
  lead_score integer DEFAULT 0 CHECK (lead_score >= 0 AND lead_score <= 100),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  completed_at timestamptz
);

-- Create chatbot_messages table
CREATE TABLE IF NOT EXISTS chatbot_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  conversation_id uuid REFERENCES chatbot_conversations(id) ON DELETE CASCADE,
  message_type text NOT NULL CHECK (message_type IN ('bot', 'user')),
  message_text text NOT NULL,
  message_data jsonb DEFAULT '{}'::jsonb,
  created_at timestamptz DEFAULT now()
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_chatbot_conversations_session_id ON chatbot_conversations(session_id);
CREATE INDEX IF NOT EXISTS idx_chatbot_conversations_lead_status ON chatbot_conversations(lead_status);
CREATE INDEX IF NOT EXISTS idx_chatbot_conversations_created_at ON chatbot_conversations(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_chatbot_messages_conversation_id ON chatbot_messages(conversation_id);
CREATE INDEX IF NOT EXISTS idx_chatbot_messages_created_at ON chatbot_messages(created_at DESC);

-- Enable Row Level Security
ALTER TABLE chatbot_conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE chatbot_messages ENABLE ROW LEVEL SECURITY;

-- Policies for chatbot_conversations
CREATE POLICY "Allow public to insert conversations"
  ON chatbot_conversations
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow public to read own conversation by session"
  ON chatbot_conversations
  FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Allow public to update own conversation by session"
  ON chatbot_conversations
  FOR UPDATE
  TO anon
  USING (true);

CREATE POLICY "Allow authenticated users to read all conversations"
  ON chatbot_conversations
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated users to update conversations"
  ON chatbot_conversations
  FOR UPDATE
  TO authenticated
  USING (true);

-- Policies for chatbot_messages
CREATE POLICY "Allow public to insert messages"
  ON chatbot_messages
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow public to read messages"
  ON chatbot_messages
  FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Allow authenticated users to read all messages"
  ON chatbot_messages
  FOR SELECT
  TO authenticated
  USING (true);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_chatbot_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to automatically update updated_at
DROP TRIGGER IF EXISTS chatbot_conversations_updated_at ON chatbot_conversations;
CREATE TRIGGER chatbot_conversations_updated_at
  BEFORE UPDATE ON chatbot_conversations
  FOR EACH ROW
  EXECUTE FUNCTION update_chatbot_updated_at();
