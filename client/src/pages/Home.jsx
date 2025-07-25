// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [faucets, setFaucets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFaucets = async () => {
      try {
        const res = await axios.get("http://localhost:3000/server/faucets");
        setFaucets(res.data);
      } catch (err) {
        console.error("Error fetching faucets:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchFaucets();
  }, []);

  if (loading)
    return (
      <p className="text-center py-20 text-xl text-gray-400">Loading faucets...</p>
    );

  return (
    <div className="bg-gray-900 min-h-screen text-white px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Available Testnet Faucets
      </h1>
      <div className="max-w-5xl mx-auto space-y-12">
        {faucets.map((network) => (
          <div key={network.chain}>
            <h2 className="text-2xl font-semibold border-b border-purple-600 pb-2 mb-4">
              {network.chain}
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {network.faucets.map((faucet) => (
                <li
                  key={faucet.name}
                  className="bg-gray-800 rounded-lg p-5 shadow hover:shadow-lg transition"
                >
                  <h3 className="text-xl font-bold mb-2">{faucet.name}</h3>
                  <a
                    href={faucet.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 underline"
                  >
                    Visit Faucet →
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
