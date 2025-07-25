// index.js
const express = require("express");
const cors = require("cors");
const faucetData = require("./faucetData")

const app = express();
app.use(cors());



app.get("/server/faucets", (req, res) => {
  res.json(faucetData);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Faucet backend running on port ${PORT}`));
