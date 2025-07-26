-- Create policy to make notes publicly readable
CREATE POLICY "public can read notes"
ON public.notes
FOR SELECT TO anon
USING (true);