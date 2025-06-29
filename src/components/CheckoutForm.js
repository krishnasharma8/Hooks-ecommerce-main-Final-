// import React from 'react';
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
// import './CheckoutForm.css'; // Import the CSS file

// const CheckoutForm = ({ totalAmount, onSuccess }) => {
//   const stripe = useStripe();
//   const elements = useElements();

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!stripe || !elements) {
//       return;
//     }

//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: 'card',
//       card: elements.getElement(CardElement),
//     });

//     if (!error) {
//       // Send paymentMethod.id and totalAmount to your server to create a payment intent
//       const response = await fetch('http://localhost:3001/create-payment-intent', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           paymentMethodId: paymentMethod.id,
//           amount: totalAmount,
//         }),
//       });

//       const paymentIntent = await response.json();

//       if (paymentIntent.status === 'succeeded') {
//         onSuccess(paymentIntent);
//       } else {
//         console.error('Payment failed:', paymentIntent);
//       }
//     } else {
//       console.error(error);
//     }
//   };

//   return (
//     <form className="checkout-form" onSubmit={handleSubmit}>
//       <div className="card-element">
//         <CardElement />
//       </div>
//       <button type="submit" className="pay-button" disabled={!stripe}>
//         Pay
//       </button>
//     </form>
//   );
// };

// export default CheckoutForm;

import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './CheckoutForm.css';

const CheckoutForm = ({ totalAmount, onSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : '');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);
    setError(null);

    if (!stripe || !elements) {
      setError('Stripe is not loaded yet');
      setProcessing(false);
      return;
    }

    try {
      // 1. Create payment intent
      console.log('[FRONTEND] Creating payment intent...');
      const intentResponse = await fetch('http://localhost:3001/create-payment-intent', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          amount: Math.round(totalAmount * 100)
        })
      });

      const intentData = await intentResponse.json();
      
      if (!intentResponse.ok) {
        console.error('[FRONTEND] Payment intent creation failed:', intentData);
        throw new Error(intentData.error || 'Failed to create payment intent');
      }

      console.log('[FRONTEND] Created PaymentIntent:', intentData.id);

      // 2. Confirm payment immediately with CardElement
      console.log('[FRONTEND] Confirming payment...');
      const { error: confirmError, paymentIntent } = await stripe.confirmCardPayment(
        intentData.clientSecret,
        {
          payment_method: {
            card: elements.getElement(CardElement),
            billing_details: {
              name: 'Customer Name',
              email: 'customer@example.com',
              address: {
                line1: '123 Main St',
                city: 'Mumbai',
                postal_code: '400001',
                country: 'IN'
              }
            }
          }
        }
      );

      if (confirmError) {
        throw confirmError;
      }

      // 3. Handle payment result
      console.log('[FRONTEND] Payment result:', paymentIntent.status);
      
      if (paymentIntent.status === 'succeeded') {
        onSuccess(paymentIntent);
      } else if (paymentIntent.status === 'requires_action') {
        // Handle 3D Secure authentication
        console.log('[FRONTEND] Handling 3D Secure...');
        const { error: actionError } = await stripe.confirmCardPayment(
          intentData.clientSecret
        );
        
        if (actionError) {
          throw actionError;
        }
        
        onSuccess(paymentIntent);
      } else {
        throw new Error(`Unexpected payment status: ${paymentIntent.status}`);
      }

    } catch (err) {
      console.error('[FRONTEND] Payment error:', err);
      setError(err.message || 'Payment failed. Please try again.');
    } finally {
      setProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="checkout-form">
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
        onChange={handleChange}
      />
      
      {error && <div className="error-message">{error}</div>}
      
      <button
        type="submit"
        disabled={!stripe || processing || disabled}
        className="pay-button"
      >
        {processing ? 'Processing...' : `Pay ₹${totalAmount}`}
      </button>
    </form>
  );
};

export default CheckoutForm;