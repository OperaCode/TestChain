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
  "Fast wallet connect & chain switch",
  "Supports multiple testnets",
  "Mobile-first minimal design",
];

const Landing = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <header className="flex justify-between items-center px-6 py-6 max-w-7xl mx-auto">
        <Link
          to="/"
          className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
        >
          TestChain
        </Link>
        <nav className="space-x-6">
          <Link
            to="/home"
            className="hover:text-cyan-400 transition-colors duration-200 font-semibold"
          >
            Explore Faucets
          </Link>
          <a
            href="#top"
            className="hover:text-cyan-400 transition-colors duration-200 font-semibold"
          >
            TestChain
          </a>
          <a
            href="#features"
            className="hover:text-cyan-400 transition-colors duration-200 font-semibold"
          >
            Features
          </a>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section id="top" className="text-center py-24 px-4 bg-gradient-to-r from-cyan-500 to-blue-600">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Your Ultimate Testnet Faucet Finder
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Discover verified faucets for Ethereum, Polygon, Base, Optimism, and
            more. Save time and build faster.
          </p>
          <Link
            to="/home"
            className="bg-white text-cyan-600 px-8 py-4 rounded font-semibold text-lg hover:bg-gray-100 transition"
          >
            Explore Faucets
          </Link>
        </section>

        {/* Stats */}
        <section className="py-12 px-6 bg-gray-800 text-center">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-bold text-cyan-400 mb-2">
                  {stat.value}
                </p>
                <p className="text-lg text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section id="features" className="py-16 px-6 bg-gray-900 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Why use DropScout?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-center justify-center space-x-4"
              >
                <CheckCircleIcon className="h-8 w-8 text-green-400" />
                <p className="text-lg">{feature}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-16 px-4 bg-gradient-to-r from-blue-600 to-cyan-500">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start building faster today
          </h2>
          <p className="mb-8 max-w-xl mx-auto">
            Access all faucets you need for your dApp development journey in one
            place.
          </p>
          <Link
            to="/home"
            className="bg-white text-blue-700 px-8 py-4 rounded font-semibold text-lg hover:bg-gray-100 transition"
          >
            Explore Faucets
          </Link>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-gray-400 text-center p-6 mt-10">
          © {new Date().getFullYear()} DropScout. Built with ❤️ by Opera, for Web3 builders.
        </footer>
      </main>
    </div>
  );
};

export default Landing;
