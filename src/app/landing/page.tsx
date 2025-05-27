"use client";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="w-full px-6 py-4 bg-white shadow-md flex justify-between items-center">
        <h1 className="text-2xl font-bold font- text-green-600">workspace</h1>
        <nav className="flex gap-4">
          <Link href="/login" className="text-gray-600 hover:text-black">Log In</Link>
          <Link href="/signup" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            Sign Up
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col items-center text-center mt-10">
        <h2 className="text-4xl font-bold text-gray-700">Find Great Talent, Fast.</h2>
        <p className="mt-4 text-gray-500">Join a network of skilled freelancers and businesses.</p>
        <Link href="/signup" className="mt-6 px-6 py-3 bg-green-500 text-white rounded-lg text-lg hover:bg-green-600">
          Get Started
        </Link>
      </main>

      {/* Freelancer & Client Sections */}
      <section className="mt-16 px-10 grid grid-cols-2 gap-6">
        <div className="bg-white p-6 shadow-md rounded-lg text-center">
          <h3 className="text-2xl font-semibold text-green-600">Hire Top Freelancers</h3>
          <p className="text-gray-500 mt-2">Post a job and connect with experienced professionals.</p>
          <Link href="/post-job" className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Post a Job
          </Link>
        </div>
        <div className="bg-white p-6 shadow-md rounded-lg text-center">
          <h3 className="text-2xl font-semibold text-blue-600">Find Great Jobs</h3>
          <p className="text-gray-500 mt-2">Browse projects that match your skills.</p>
          <Link href="/jobs" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Browse Jobs
          </Link>
        </div>
      </section>
    </div>
  );
}
