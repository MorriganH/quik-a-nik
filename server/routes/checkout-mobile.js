
require('dotenv').config()
const express = require("express");
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET);


router.post('/create-payment-intent', (req, res) => {
  // Create PaymentIntent with the order amount and currency and send to Stripe
  stripe.paymentIntents.create({
      amount: 1099,
      currency: 'cad',
  })
  .then(paymentIntent => {
      // Get client secret
      const clientSecret = paymentIntent.client_secret;

      res.json({ clientSecret: clientSecret });
  })
  // Handle failure to create the payment (non-payment related errors)
  .catch(error => {
      console.error(error);
      res.status(500).json({ message: error.message });
  });
});


module.exports = router;