const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors()); // Enable CORS

const dealerPricing = {
  1: [
    { dealer: "Dealer A", price: 500 },
    { dealer: "Dealer B", price: 550 }
  ],
  2: [
    { dealer: "Dealer C", price: 300 },
    { dealer: "Dealer D", price: 320 }
  ],
  3: [
    { dealer: "Dealer E", price: 200 },
    { dealer: "Dealer F", price: 220 }
  ]
};

app.get("/pricing/:productId", (req, res) => {
  const productId = req.params.productId;
  res.json(dealerPricing[productId] || []);
});

app.listen(port, () => {
  console.log(`Dealer Pricing service running on port ${port}`);
});
