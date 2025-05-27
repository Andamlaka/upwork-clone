import { supabase } from "@/lib/supabase";

async function getUser() {
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return <p>Please log in to access your dashboard.</p>;
  }

  return <p>Welcome, {user.email}!</p>;
}

export default function Dashboard() {
  return (
    <div className="p-4">
      {getUser()}
    </div>
  );
}
