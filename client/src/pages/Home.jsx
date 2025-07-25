// src/pages/Home.jsx
import React from "react";
import FaucetList from "../components/FaucetList";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <header className="relative z-10 flex justify-between items-center px-6 py-8 max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          TestChain
        </h1>
        <nav className="flex items-center gap-6">
          <ConnectButton />
          <Link
            to="/"
            className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-semibold"
          >
            Exit
          </Link>
        </nav>
      </header>

      <main className="relative">
        <section className="text-center py-16 px-4 bg-gradient-to-b from-gray-800 to-gray-900">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Explore Testnet Faucets
            </h2>
            <p className="text-gray-300 mb-6">
              Easily find faucets for popular Ethereum, Polygon, BSC, and Layer 2 testnets. Connect your wallet to switch chains seamlessly.
            </p>
            <div className="flex justify-center">
              <ConnectButton />
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 py-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-10 text-center">
            Available Faucets
          </h3>

          <FaucetList />
        </section>
      </main>

      <footer className="text-center py-6 text-gray-500 text-sm border-t border-gray-700">
        &copy; {new Date().getFullYear()} TestChain Faucet Finder. Built with ❤️
      </footer>
    </div>
  );
};

export default Home;
