require('dotenv').config()
const express = require("express");
const router = express.Router();
const stripe = require("stripe")(process.env.STRIPE_SECRET);

// create paymentIntent and then send clientSecret to localhost:3000
router.post("/create-payment-intent", (req, res) => {
  stripe.paymentIntent
    .create({
      amount: 1099,       //Pass total amount details here.  Price should be tallied and calculated on server/router side somehow
      currency: "cad",
    })
    .then((paymentIntent) => {
      res.status(200).send({
        clientSecret: paymentIntent.client_secret,
      });
      console.log(paymentIntent.client_secret)
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
