import {
  StripeProvider,
  CardField,
  useStripe,
  useConfirmPayment,
} from "@stripe/stripe-react-native";
import { ActivityIndicator } from "react-native";
import { Text, View, Button } from "react-native";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import tunnelURL from "../backend_tunnel";
import styles from "../styles/stripeAndroid";
import axios from "axios";

export default function StripeMobile({ navigation }) {
  // console.log("Navigation from within Stripe", navigation)

  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const { confirmPayment, loading } = useConfirmPayment();

  const { locationInfo, userSession, cart } = useSelector(
    (state) => state.reducer
  );

  const dispatch = useDispatch();

  const fetchPaymentIntentClientSecret = async () => {
    const response = await fetch(
      `${tunnelURL}/checkout-mobile/create-payment-intent`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          currency: "cad",
        }),
      }
    );
    const { clientSecret } = await response.json();
    console.log(clientSecret);
    return clientSecret;
  };

  const handlePayPress = async () => {
    // Gather the customer's billing information (for example, email)
    const billingDetails: BillingDetails = {
      email: "jenny.rosen@example.com",
    };

    // Fetch the intent client secret from the backend
    const clientSecret = await fetchPaymentIntentClientSecret();

    // Confirm the payment with the card details
    const { paymentIntent, error } = await confirmPayment(clientSecret, {
      paymentMethodType: "Card",
      paymentMethodData: {
        billingDetails,
      },
    });

    if (error) {
      console.log("Payment confirmation error", error);
    } else if (paymentIntent) {
      const order = {
        locationInfo,
        userSession,
        cart,
        stripe_charge_id: paymentIntent.clientSecret,
      };

      console.log("locationInfo.markerPosition: ",locationInfo.markerPosition);

      axios
        .post(`${tunnelURL}/orders`, order)
        .then(() => {
          console.log("Getting to navigation call");
          navigation.navigate("Confirmation");
          dispatch(toggleModal(""));
          dispatch(resetCart());
        })
        .catch((err) => console.log(err));
    }
  };

  return loading ? (
    <ActivityIndicator
      size="large"
      color="#00ff00"
      style={styles.activityIndicator}
    />
  ) : (
    <StripeProvider publishableKey="pk_test_51NDgmwLv74N28uF2MxWf6liIv4DqMJcIagTtcT1BAymIJEkX1gaky4i9nLLfmfALffHmN32aiXmRrSiPAcmn0wOP00ONBP6Dfx">
      <View style={styles.container}>
        <CardField
          postalCodeEnabled={false}
          placeholders={{
            number: "4242 4242 4242 4242",
          }}
          cardStyle={{
            backgroundColor: "#FFFFFF",
            textColor: "#000000",
          }}
          style={{
            minWidth: "90%",
            minHeight: 50,
            marginVertical: 10,
          }}
        />
        <Button onPress={handlePayPress} title="Pay" disabled={loading} />
      </View>
    </StripeProvider>
  );
}
