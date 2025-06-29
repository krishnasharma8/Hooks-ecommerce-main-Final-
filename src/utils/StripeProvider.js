// src/utils/StripeProvider.js
import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_51QQFicDbyunLPozjf34GNgHlz4A05c8N9Y114UbhgBSqolquwmFExf4NXAmn0CvlUdrApHLPZfBAdZXOxA9Aq33b003aj4JsYU'); 

const StripeProvider = ({ children }) => (
  <Elements stripe={stripePromise}>
    {children}
  </Elements>
);

export default StripeProvider;

