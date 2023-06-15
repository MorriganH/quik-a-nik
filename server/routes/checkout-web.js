require('dotenv').config()
const express = require("express");
const router = express.Router();
const Stripe = require('stripe');
const stripe = new Stripe(process.env.STRIPE_SECRET);


router.post('/', async (req, res) => {
  const { paymentMethodId, amount } = req.body;

  try {
      // Create PaymentIntent with the order amount and currency and send to Stripe
      const paymentIntent = await stripe.paymentIntents.create({
          amount: 2000,
          currency: "cad",
          payment_method_types: ['card'],
          payment_method: paymentMethodId,
          confirmation_method: 'manual',
          confirm: true,
      });

      // Send response to frontend
      if (paymentIntent.status === 'succeeded') {
          res.json({ success: true });
      } else {
          // Handle other Stripe related payment statuses
          res.json({ success: false });
      }
  // Handle failure to create the payment (non-payment related errors)
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
  }
});



// router.post('/create-payment-intent', (req, res) => {
//   // Create PaymentIntent with the order amount and currency and send to Stripe
//   stripe.paymentIntents.create({
//       amount: 1099,
//       currency: 'cad',
//   })
//   .then(paymentIntent => {
//       // Get client secret
//       const clientSecret = paymentIntent.client_secret;

//       // You can do anything with clientSecret here, for example send it to the client
//       res.json({ clientSecret: clientSecret });
//   })
//   // Handle failure to create the payment (non-payment related errors)
//   .catch(error => {
//       console.error(error);
//       res.status(500).json({ message: error.message });
//   });
// });



module.exports = router;
