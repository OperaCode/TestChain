// src/components/FaucetList.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const FaucetList = () => {
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

  if (loading) return <p className="text-center py-10">Loading faucets...</p>;

  return (
    <div className="p-6">
      {faucets.map((network) => (
        <div key={network.chain} className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{network.chain}</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {network.faucets.map((faucet) => (
              <li key={faucet.name} className="border p-4 rounded shadow">
                <h3 className="text-xl font-semibold mb-2">{faucet.name}</h3>
                <a
                  href={faucet.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  Visit Faucet
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FaucetList;
