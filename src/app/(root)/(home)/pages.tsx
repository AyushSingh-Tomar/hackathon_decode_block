import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title>HackIndia 2025 - India's Biggest Web3 & AI Hackathon</title>
        <meta name="description" content="Join HackIndia 2025, India's Biggest Web3 & AI Hackathon with ₹150+ Price Pool" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Top Navigation Bar */}
      <header className="border-b border-purple-800">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/">
            <div className="flex items-center cursor-pointer">
              <Image src="/images/decodeblock-logo.svg" alt="DecodeBlock Logo" width={24} height={24} />
              <span className="ml-2 text-white text-lg">DecodeBlock</span>
            </div>
          </Link>
          <Link href="/signin">
            <button className="bg-transparent border border-purple-500 text-white px-4 py-1 rounded hover:bg-purple-900 transition-colors">
              Sign in
            </button>
          </Link>
        </div>
      </header>

      {/* Secondary Navigation */}
      <nav className="bg-gray-800 py-2">
        <div className="container mx-auto px-4 flex items-center">
          <div className="flex items-center mr-6">
            <Image src="/images/hackindia-logo-small.png" alt="HackIndia Logo" width={36} height={36} />
            <span className="ml-2 font-bold text-white uppercase">HACKINDIA</span>
          </div>
          <div className="flex space-x-2 text-sm">
            <NavButton text="Overview" active />
            <NavButton text="Create Team" />
            <NavButton text="Prizes & Sponsors" />
            <NavButton text="FAQs" />
            <NavButton text="Judging & Rules" />
            <NavButton text="Resources" />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 flex flex-col items-center">
        {/* SingularityNET Logo */}
        <div className="mb-6">
          <Image src="/images/singularitynet-logo.svg" alt="SingularityNET" width={180} height={50} />
        </div>

        {/* Hackathon Logo and Title */}
        <div className="text-center mb-10">
          <Image src="/images/hackindia-2025-logo.png" alt="HackIndia 2025" width={350} height={100} className="mb-4" />
          <h2 className="text-xl tracking-wide uppercase mb-8">India's Biggest Web3 & AI Hackathon</h2>
          
          {/* Date */}
          <div className="inline-block bg-purple-900 px-6 py-2 rounded-md mb-10">
            <p className="text-white">February 28 - September 28</p>
          </div>

          {/* Stats */}
          <div className="flex justify-center items-center space-x-8 mb-10">
            <div className="text-center">
              <span className="text-orange-500 font-bold text-xl">₹150+</span> <span className="text-gray-300">Price Pool</span>
            </div>
            <div className="h-8 w-px bg-gray-700"></div>
            <div className="text-center">
              <span className="text-orange-500 font-bold text-xl">150+</span> <span className="text-gray-300">University</span>
            </div>
            <div className="h-8 w-px bg-gray-700"></div>
            <div className="text-center">
              <span className="text-orange-500 font-bold text-xl">25,000+</span> <span className="text-gray-300">Students</span>
            </div>
          </div>

          {/* Register Button */}
          <button className="bg-transparent border border-purple-500 text-white px-8 py-2 rounded hover:bg-purple-900 transition-colors">
            Register now!
          </button>
        </div>
      </main>

      {/* Partners/Sponsors */}
      <footer className="bg-gray-950 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8">
            {/* We'll use placeholders for the partner logos */}
            {Array.from({ length: 12 }).map((_, index) => (
              <div key={index} className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center">
                <Image src={`/images/partner-${index + 1}.png`} alt={`Partner ${index + 1}`} width={40} height={40} />
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

// NavButton Component
interface NavButtonProps {
  text: string;
  active?: boolean;
}

const NavButton: React.FC<NavButtonProps> = ({ text, active = false }) => {
  return (
    <button 
      className={`px-3 py-1 rounded text-white text-xs ${active ? 'bg-purple-900' : 'bg-transparent hover:bg-gray-700'}`}
    >
      {text}
    </button>
  );
};

export default Home;