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
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);

      axios
        .post(`${tunnelURL}/charge`, {
          paymentMethodId: paymentMethod.id,
          // Include any other relevant data to your server here
        })
        .then((response) => {
          // Handle server response here
          if (response.data.success) {
            alert("Payment Successful!");
            // Redirect to a success page, update UI, etc.
          } else {
            alert(
              "Payment failed: " + (response.data.message || "Unknown error")
            );
            // Update UI to allow user to try again, etc.
          }
        })
        .catch((error) => {
          // Handle network or server error here
          console.error(error);
          alert("Error: " + (error.message || "Unknown error"));
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

//   const { confirmPayment, loading } = useStripe();

//   const fetchPaymentIntentClientSecret = async () => {
//     const response = await fetch(
//       "http://localhost:3000/mobile-checkout/create-payment-intent",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           currency: "usd",
//         }),
//       }
//     );
//     const { clientSecret } = await response.json();
//     console.log(clientSecret);
//     return clientSecret;
//   };

//   const handlePayPress = async () => {
//     // Gather the customer's billing information (for example, email)
//     // const billingDetails: BillingDetails = {
//     //   email: "jenny.rosen@example.com",
//     // };

//     // Fetch the intent client secret from the backend
//     const clientSecret = await fetchPaymentIntentClientSecret();

//     // Confirm the payment with the card details
//     const { paymentIntent, error } = await confirmPayment(clientSecret, {
//       paymentMethodType: "Card",
//       paymentMethodData: {
//         billingDetails,
//       },
//     });

//     if (error) {
//       console.log("Payment confirmation error", error);
//     } else if (paymentIntent) {
//       console.log("Success from promise", paymentIntent);
//     }
//   };

//   return (
//     <StripeProvider publishableKey="pk_test_51NDgmwLv74N28uF2MxWf6liIv4DqMJcIagTtcT1BAymIJEkX1gaky4i9nLLfmfALffHmN32aiXmRrSiPAcmn0wOP00ONBP6Dfx">
//       <View style={styles.container}>
//         <CardField
//           postalCodeEnabled={false}
//           placeholders={{
//             number: "4242 4242 4242 4242",
//           }}
//           cardStyle={{
//             backgroundColor: "#FFFFFF",
//             textColor: "#000000",
//           }}
//           style={{
//             minWidth: "90%",
//             minHeight: 50,
//             marginVertical: 30,
//           }}
//           onCardChange={(cardDetails) => {
//             console.log("cardDetails", cardDetails);
//           }}
//           onFocus={(focusedField) => {
//             console.log("focusField", focusedField);
//           }}
//         />
//         <Button onPress={handlePayPress} title="Pay" disabled={loading} />
//       </View>
//     </StripeProvider>
//   );
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     midWidth: "100%",
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#F5FCFF",
//   },
// });
