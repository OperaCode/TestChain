// src/components/FaucetList.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSwitchChain, useAccount } from "wagmi";
import toast, { Toaster } from "react-hot-toast";

const FaucetList = () => {
  const [faucets, setFaucets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  const { switchChain } = useSwitchChain();
  const { isConnected } = useAccount();

  useEffect(() => {
    const fetchFaucets = async () => {
      try {
        const res = await axios.get("http://localhost:3000/server/faucets");
        setFaucets(res.data);
      } catch (err) {
        console.error("Error fetching faucets:", err);
        toast.error("Failed to load faucets");
      } finally {
        setLoading(false);
      }
    };
    fetchFaucets();
  }, []);

  if (loading) return <p className="text-center py-10">Loading faucets...</p>;

  const chainEmojis = {
    "Ethereum Sepolia": "🟣",
    "Polygon Mumbai": "🟪",
    "Ethereum Goerli": "🟣",
    "Base Sepolia": "🔵",
    "Binance Smart Chain Testnet": "🟡",
    "Optimism Goerli": "🔴",
    "Arbitrum Goerli": "⚪️",
  };

  const filteredFaucets = faucets.filter(
    (network) =>
      network.chain.toLowerCase().includes(query.toLowerCase()) ||
      network.faucets.some((f) =>
        f.name.toLowerCase().includes(query.toLowerCase())
      )
  );

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <Toaster />

      <div className="mb-6">
        <input
          type="text"
          placeholder="🔍 Search networks or faucets..."
          className="p-3 border rounded w-full mb-4 text-black"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {!isConnected && (
        <p className="text-center text-yellow-400 mb-6">
          ⚠️ Connect your wallet to enable chain switching.
        </p>
      )}

      {filteredFaucets.map((network) => (
        <div key={network.chain} className="mb-10">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-3xl">{chainEmojis[network.chain] || "🌐"}</span>
            {network.chain}
          </h2>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {network.faucets.map((faucet) => (
              <li
                key={faucet.name}
                className="border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 p-4 rounded-lg shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-2">{faucet.name}</h3>

                <button
                  onClick={async () => {
                    if (!isConnected) {
                      toast.error("⚠️ Connect your wallet first");
                      return;
                    }

                    try {
                      await switchChain({ chainId: network.chainId });
                      window.open(faucet.link, "_blank");
                      toast.success(`✅ Switched to ${network.chain}`);
                    } catch (err) {
                      console.error("Chain switch error:", err);
                      toast.error("❌ Switch failed. Switch manually in your wallet.");
                    }
                  }}
                  className="mt-2 inline-block bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded transition font-medium"
                >
                  Visit Faucet & Switch
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FaucetList;
