import { useState, useCallback, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Pressable,
  Button,
} from "react-native";
import axios from "axios";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import tunnelURL from '../backend_tunnel'

export default function Stripe() {
  const stripe = useStripe();                       // Hook to access Stripe.js API
  const elements = useElements();                   // Hook to access Stripe Elements


  const handleSubmit = async (event) => {
    event.preventDefault();                         // Prevent form from refreshing the page

    //Create a PaymentMethod object, using card details collected from the Stripe Element
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (error) {
      //Log errors related to creating paymentMethod
      console.log("[error]", error);
    } else {
      //Log paymentMethod
      console.log("[PaymentMethod]", paymentMethod);

      // Call to backend to send paymentMethod
      axios
        .post(`${tunnelURL}/checkout`, {
          paymentMethodId: paymentMethod.id,
        })
        // Server response
        .then((response) => {
          if (response.data.success) {
            alert("Payment Successful!");
          } else {
            alert(
              "Payment failed: " + (response.data.message)
            );
          }
        })
        .catch((error) => {
          console.error(error);
          alert("Error: " + (error.message));
        });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
}
