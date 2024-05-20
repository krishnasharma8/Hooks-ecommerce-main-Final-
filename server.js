const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors middleware
const stripe = require('stripe')('sk_test_51PHhx1SAtc1LabayuFyrL5x6QabO67iP4QBIq4uE8QgxpqF2hrBsLaLnF03E2EIXfLVFoOqb6f0HbAi8m1Qub28o00ksDSeiNW');

const app = express();
app.use(bodyParser.json());

// Allow requests from all origins
app.use(cors());

// Endpoint to create a payment intent
app.post('/create-payment-intent', async (req, res) => {
  try {
    const { amount } = req.body;
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: 'inr', // Set currency to INR
    });
    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create payment intent' });
  }
});

// Handle webhook events from Stripe (optional)
app.post('/webhook', bodyParser.raw({ type: 'application/json' }), (req, res) => {
  const event = req.body;

  // Handle the event
  switch (event.type) {
    case 'payment_intent.succeeded':
      // Handle successful payment
      break;
    case 'payment_intent.payment_failed':
      // Handle failed payment
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  res.sendStatus(200);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
