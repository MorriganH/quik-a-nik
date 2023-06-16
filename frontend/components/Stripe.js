import React, { useState } from "react";
import { ActivityIndicator } from "react-native";
import axios from "axios";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import tunnelURL from "../backend_tunnel";
import { useSelector } from "react-redux";
import styles from "../styles/stripeWeb";

export default function Stripe() {
  const { locationInfo } = useSelector((state) => state.reducer);
  const [processing, setProcessing] = useState(false);

  const stripe = useStripe(); // Hook to access Stripe.js API
  const elements = useElements(); // Hook to access Stripe Elements

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent form from refreshing the page

    setProcessing(true);

    //Create a PaymentMethod object, using card details collected from the Stripe Element
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (error) {
      //Log errors related to creating paymentMethod
      setProcessing(false);
      console.log("[error]", error);
    } else {
      // Call to backend to send paymentMethod
      axios
        .post(`${tunnelURL}/checkout-web`, {
          paymentMethodId: paymentMethod.id,
        })
        // Server response
        .then((response) => {
          if (response.data.success) {
            alert("Payment Successful!");
          } else {
            alert("Payment failed: " + response.data.message);
            throw Error("Payment has failed");
          }
        })
        .then(() => {
          //Make axios request to insert into order table
        })
        .catch((error) => {
          setProcessing(false);
          console.error(error);
          alert("Error: " + error.message);
        });
    }
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
    {processing && <ActivityIndicator size="large" color="#00ff00" style={styles.activityIndicator} />}
    </>
  );
}
