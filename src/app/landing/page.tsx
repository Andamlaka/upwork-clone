"use client";
import Link from "next/link";
import { useState } from "react";
import { navbarItems } from "@/constants/index";  
import Image from "next/image";

export default function LandingPage() {
  const [active, setActive] = useState<'talent' | 'jobs'>('talent');
  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Header */}
      <header className="w-full px-6 py-4 bg-white shadow-md flex justify-between items-center">
        <h1 className="text-2xl font-bold">workspace</h1>
        <nav className="flex gap-6">
  {navbarItems.map(item => (
    <div key={item.id} className="relative group">
     <button className="text-black cursor-pointer hover:text-green-500 font-medium">
  {item.label}
  {item.dropdown && (
    <Image src="/images/dropdown.svg" 
    alt="Dropdown"
    className="ml-2 inline transition-transform duration-300  group-hover:rotate-180 " 
    width={20} height={20} />
  )}            
</button>
      {item.dropdown && (
        <div className="absolute top-full left-0 bg-white border 
        shadow-md hidden group-hover:block mt-2 rounded z-10">
          {item.dropdown.map((option, i) => (
            <div key={i} className="px-4 py-2 hover:bg-gray-100 whitespace-nowrap">
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  ))}
</nav>

        <nav className="flex gap-4 justify-center items-center">
          <Link href="/login" className="text-gray-600 hover:text-black">Log In</Link>
          <Link href="/signup" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            Sign Up
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="relative w-[80%] h-[80vh] mx-auto mt-10 rounded-2xl overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 bg-[url('/images/hero.jpg')] bg-cover bg-center transition-all duration-700" />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        
        {/* Hero content */}
        <div className="relative lg:w-[60%] w-[100%] z-10 flex flex-col left-5 h-full mt-20 px-10">
          <h2 className="text-6xl font-bold text-white">What are you looking for, freelancer or client?</h2>
            <div className="flex flex-col bg-gray-800 rounded-lg p-4 mt-10">
              <div className="flex bg-gray-500 rounded-4xl cursor-pointer ">
              <button 
               onClick={() => setActive('talent')}
               className={`px-4 py-2 text-white w-[50%] transition-all duration-300 rounded-4xl cursor-pointer
              ${active === 'talent' ? 'outline outline-2 outline-white' : ''}`}>
                Find talent
              </button>
              <button  type='button'
               onClick={() => setActive('jobs')}
               className={`px-4 py-2 text-white w-[50%] transition-all duration-300 rounded-4xl cursor-pointer
              ${active === 'jobs' ? 'outline outline-2 outline-white' : ''}`}>
                
                  Browse jobs
              </button>

              </div>
              {active === 'talent' && (
                <div className="flex bg-white rounded-4xl mt-4">
                  <input type="text" placeholder="Search by skill, roll, or keyword" className="flex-1 px-4 py-2 text-gray-900 rounded-l-lg" />
                  <button type='button' className="px-4 py-2 bg-green-500 text-white rounded-r-lg hover:bg-green-600">
                    Search
                  </button>

                </div>
              )}
              {active === 'jobs' && (
                <div className="flex flex-col items-center justify-center gap-4 mt-4">
                    <p className="text-white  text-center">Build your freelancing Carrer on Upwork, with thousand of jobs posted every week.</p>
                    <button  type="button" className="text-white w-auto bg-green-500 rounded-lg items-center justify-center p-4 cursor-pointer" >Explore recently posted jobs</button>
                </div>
              )}
            </div>
         
        </div>
      </main>

      {/* Freelancer & Client Sections */}
      <section className="mt-16 px-10 grid grid-cols-1 md:grid-cols-2 gap-6">
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
