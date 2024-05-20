// src/utils/StripeProvider.js
import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51PHhx1SAtc1LabaywvYCbjgsLXjWDGKHjzfwjAdMDpr63A5v04nJSFNkJt5QKQWbDX7jQRjhwuPszxqO1443LRTW007dX2Zr0A'); // Replace with your actual publishable key

const StripeProvider = ({ children }) => (
  <Elements stripe={stripePromise}>
    {children}
  </Elements>
);

export default StripeProvider;
