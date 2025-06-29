// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors'); // Import the cors middleware
// const stripe = require('stripe')('sk_test_51PHhx1SAtc1LabayuFyrL5x6QabO67iP4QBIq4uE8QgxpqF2hrBsLaLnF03E2EIXfLVFoOqb6f0HbAi8m1Qub28o00ksDSeiNW');

// const app = express();
// app.use(bodyParser.json());

// // Allow requests from all origins
// app.use(cors());

// // Endpoint to create a payment intent
// app.post('/create-payment-intent', async (req, res) => {
//   try {
//     const { amount } = req.body;
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount: amount,
//       currency: 'inr', // Set currency to INR
//     });
//     res.json({ clientSecret: paymentIntent.client_secret });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Failed to create payment intent' });
//   }
// });

// // Handle webhook events from Stripe (optional)
// app.post('/webhook', bodyParser.raw({ type: 'application/json' }), (req, res) => {
//   const event = req.body;

//   // Handle the event
//   switch (event.type) {
//     case 'payment_intent.succeeded':
//       // Handle successful payment
//       break;
//     case 'payment_intent.payment_failed':
//       // Handle failed payment
//       break;
//     default:
//       console.log(`Unhandled event type ${event.type}`);
//   }

//   res.sendStatus(200);
// });

// const PORT = 3001;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });



const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const stripe = require("stripe")("sk_test_51QQFicDbyunLPozjFJjZ9K6ggS7RuXPVQrZ6mGTZLFYqhkIImQGL6XW1lbTru2C66Td8Egix2Rt47wttVmw4iD7O0050NogSwK");

const app = express();

// Middleware
app.use(cors({
  origin: true,
  methods: ['POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(bodyParser.json());

// Payment Intent Creation Endpoint
app.post('/create-payment-intent', async (req, res) => {
  // console.log('[BACKEND] Creating payment intent for amount:', req.body.amount);
  
  try {
    const { amount } = req.body;

    // Validate amount
    if (!amount || isNaN(amount)) {
      console.error('Invalid amount:', amount);
      return res.status(400).json({ 
        error: 'Valid amount is required',
        code: 'invalid_amount'
      });
    }
    
    // Minimum amount check (50 paise for INR)
    if (amount < 50) {
      console.error('Amount too small:', amount);
      return res.status(400).json({ 
        error: 'Amount must be at least ₹0.50 (50 paise)',
        code: 'amount_too_small',
        minimum_amount: 50
      });
    }

    // Create Payment Intent with immediate confirmation
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount),
      currency: 'inr',
      payment_method_types: ['card'],
      description: 'E-commerce purchase',
      capture_method: 'automatic',
      metadata: {
        created_at: Date.now(),
        integration: 'react-ecommerce'
      }
    });

    // console.log('[BACKEND] Created PaymentIntent:', paymentIntent.id);
    
    res.json({
      clientSecret: paymentIntent.client_secret,
      id: paymentIntent.id,
      status: paymentIntent.status,
      created: paymentIntent.created
    });

  } catch (err) {
    console.error('[BACKEND] Stripe error:', err);
    res.status(500).json({ 
      error: err.message || 'Failed to create payment intent',
      code: err.code || 'stripe_error',
      type: err.type
    });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
