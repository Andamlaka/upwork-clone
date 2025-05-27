'use client'

import LandingPage from "@/app/landing/page";
import { useState } from "react";
import Auth from "@/components/Auth";
import "./styles/global.css";
export default function Home() {
  const [showAuth, setShowAuth] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen">
      {!showAuth ? (
        <LandingPage />
      ) : (
        <Auth />
      )}
      <button
        onClick={() => setShowAuth(!showAuth)}
        className="absolute top-5 right-5 px-4 py-2 bg-green-500 text-white rounded"
      >
        {showAuth ? "Back to Landing" : "Login / Sign Up"}
      </button>
    </div>
  );
}
