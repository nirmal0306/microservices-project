const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors()); // Enable CORS

const dealerPricing = {
  1: [
    { dealer: "BestTech Store", price: 500 },
    { dealer: "Laptop World", price: 550 }
  ],
  2: [
    { dealer: "Mobile Hub", price: 300 },
    { dealer: "Smartphone Center", price: 320 }
  ],
  3: [
    { dealer: "Tablet Express", price: 200 },
    { dealer: "Gadget Planet", price: 220 }
  ]
};

app.get("/pricing/:productId", (req, res) => {
  const productId = req.params.productId;
  res.json(dealerPricing[productId] || []);
});

app.listen(port, () => {
  console.log(`Dealer Pricing service running on port ${port}`);
});
