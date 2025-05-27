'use client';

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("client");
  const [message, setMessage] = useState(""); // Add message state

  async function signUp() {
    setMessage(""); // Reset message before signup

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setMessage(`Signup failed: ${error.message}`);
      console.error("Signup error:", error.message);
      return;
    }

    if (!data.user) {
      setMessage("Signup failed: No user data returned.");
      return;
    }

    // Insert the authenticated user into `users`
    const { error: insertError } = await supabase.from("users").insert([
      { id: data.user.id, email, role },
    ]);

    if (insertError) {
      setMessage(`Database error: ${insertError.message}`);
      console.error("Database insert error:", insertError.message);
      return;
    }

    setMessage("Signup successful! You can now log in.");
    console.log("User signed up successfully:", data.user);
  }

  return (
    <div className="p-4 max-w-sm mx-auto">
      {message && <p className="text-center text-green-500 mb-2">{message}</p>} {/* Show success/error message */}
      <input
        type="email"
        placeholder="Email"
        className="border p-2 w-full mb-2"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="border p-2 w-full mb-2"
        onChange={(e) => setPassword(e.target.value)}
      />
      <select
        aria-label="Select your role"
        className="border p-2 w-full mb-2"
        onChange={(e) => setRole(e.target.value)}
      >
        <option value="client">Client</option>
        <option value="freelancer">Freelancer</option>
      </select>
      <button onClick={signUp} className="bg-green-500 text-white p-2 w-full">
        Sign Up
      </button>
    </div>
  );
}
