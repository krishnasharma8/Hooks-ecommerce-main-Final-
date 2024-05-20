import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './CheckoutForm.css'; // Import the CSS file

const CheckoutForm = ({ totalAmount, onSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (!error) {
      // Send paymentMethod.id and totalAmount to your server to create a payment intent
      const response = await fetch('http://localhost:3001/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          paymentMethodId: paymentMethod.id,
          amount: totalAmount,
        }),
      });

      const paymentIntent = await response.json();

      if (paymentIntent.status === 'succeeded') {
        onSuccess(paymentIntent);
      } else {
        console.error('Payment failed:', paymentIntent);
      }
    } else {
      console.error(error);
    }
  };

  return (
    <form className="checkout-form" onSubmit={handleSubmit}>
      <div className="card-element">
        <CardElement />
      </div>
      <button type="submit" className="pay-button" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;
