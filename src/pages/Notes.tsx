import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export default function Notes() {
  const [notes, setNotes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      const { data, error } = await supabase.from("notes").select();
      if (error) {
        console.error("Error fetching notes:", error);
      } else {
        setNotes(data || []);
      }
      setLoading(false);
    };

    fetchNotes();
  }, []);

  if (loading) {
    return <div className="p-8">Loading...</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Notes</h1>
      <pre className="bg-muted p-4 rounded-lg overflow-auto">
        {JSON.stringify(notes, null, 2)}
      </pre>
    </div>
  );
}