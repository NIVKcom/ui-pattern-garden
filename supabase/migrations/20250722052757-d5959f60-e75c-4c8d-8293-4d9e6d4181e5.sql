-- Create the notes table
CREATE TABLE notes (
  id bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title text NOT NULL
);

-- Insert some sample data into the table
INSERT INTO notes (title)
VALUES
  ('Today I created a Supabase project.'),
  ('I added some data and queried it from Next.js.'),
  ('It was awesome!');

-- Enable Row Level Security
ALTER TABLE notes ENABLE ROW LEVEL SECURITY;