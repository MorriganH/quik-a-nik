import React, { useState } from "react";
import { ActivityIndicator, View } from "react-native";
import axios from "axios";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import tunnelURL from "../backend_tunnel";
import { useSelector, useDispatch } from "react-redux";
import { toggleModal } from "../redux/actions";
import styles from "../styles/stripeWeb";

export default function Stripe({ navigation }) {

  const dispatch = useDispatch();

  const { locationInfo, userSession, cart, modalShow } = useSelector(
    (state) => state.reducer
  );
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
          if (response.data) {
            dispatch(toggleModal(''))
            return response.data;
          } else {
            alert("Payment failed: " + response.data.message);
            throw Error("Payment has failed");
          }
        })
        .then((stripe_charge_id) => {
          const order = { locationInfo, userSession, cart, stripe_charge_id };

          axios.post(`${tunnelURL}/orders`, order);
        })
        .then(() => navigation.navigate("Confirmation"))
        .catch((error) => {
          setProcessing(false);
          console.error(error);
          alert("Error: " + error.message);
        });
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{
          minHeight: 60,
          minWidth: 500,
          backgroundColor: "white",
          margin: "auto",
          padding: 10,
        }}
      >
        <CardElement style={styles.cardDetails} />
        <button
          type="submit"
          disabled={!stripe}
          style={{
            margin: "auto",
            backgroundColor: "#55bb55",
            marginTop: 15,
            marginBottom: 10,
          }}
        >
          Pay
        </button>
      </form>
      {processing && (
        <ActivityIndicator
          size="large"
          color="#00ff00"
          style={styles.activityIndicator}
        />
      )}
    </>
  );
}
