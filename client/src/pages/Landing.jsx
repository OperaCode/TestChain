import React from "react";
import { Link } from "react-router-dom";
import { CheckCircleIcon } from "@heroicons/react/24/solid";


const stats = [
  { label: "Chains Supported", value: "7+" },
  { label: "Verified Faucets", value: "20+" },
  { label: "Builders Served", value: "500+" },
];

const features = [
  "Verified faucet links only",
  "Fast wallet connect & copy",
  "Supports multiple testnets",
  "Mobile-first minimal design",
];

const Landing = () => {
  return (
    <div>
      <header>
        <nav className="flex justify-between items-center bg-gray-900 text-white px-6 py-4 shadow">
          <Link to="/" className="text-2xl font-bold">
            DropScout
          </Link>
          <div className="space-x-6">
            <Link to="/home" className="hover:underline">
              Faucets
            </Link>
            <a href="#features" className="hover:underline">
              Features
            </a>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white text-center py-24 px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Your Ultimate Testnet Faucet Finder
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Discover verified faucets for Ethereum, Polygon, Base, Optimism, and
            more. Save time and build faster.
          </p>
          <Link
            to="/home"
            className="bg-white text-purple-700 px-8 py-4 rounded font-semibold text-lg hover:bg-gray-100 transition"
          >
            Explore Faucets
          </Link>
        </section>

        {/* stats */}
        <section className="bg-gray-100 py-12 px-6 text-center">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-bold text-purple-700 mb-2">
                  {stat.value}
                </p>
                <p className="text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section id="features" className="py-16 px-6 bg-white text-center">
          <h2 className="text-3xl font-bold mb-10">Why use DropScout?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-center justify-center space-x-4"
              >
                <CheckCircleIcon className="h-8 w-8 text-green-600" />
                <p className="text-lg">{feature}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-indigo-800 to-purple-700 text-white text-center py-16 px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start building faster today
          </h2>
          <p className="mb-8 max-w-xl mx-auto">
            Access all faucets you need for your dApp development journey in one
            place.
          </p>
          <Link
            to="/home"
            className="bg-white text-purple-700 px-8 py-4 rounded font-semibold text-lg hover:bg-gray-100 transition"
          >
            Explore Faucets
          </Link>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-300 text-center p-6 mt-10">
          © {new Date().getFullYear()} DropScout. All rights reserved.
        </footer>
      </main>
    </div>
  );
};

export default Landing;
