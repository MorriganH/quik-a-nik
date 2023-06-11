import { useState, useCallback, useEffect } from "react";
import { Text, StyleSheet, View, TextInput, Pressable } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Device from "expo-device";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import key from "../api_key";
import * as Location from "expo-location";
import { StripeProvider, CardField, useStripe } from "@stripe/stripe-react-native";

export default function Stripe() {
  return (
    <StripeProvider
      publishableKey="pk_test_51NDgmwLv74N28uF2MxWf6liIv4DqMJcIagTtcT1BAymIJEkX1gaky4i9nLLfmfALffHmN32aiXmRrSiPAcmn0wOP00ONBP6Dfx"
    >
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
            marginVertical: 30,
          }}
          onCardChange={(cardDetails) => {
            console.log("cardDetails", cardDetails);
          }}
          onFocus={(focusedField) => {
            console.log("focusField", focusedField);
          }}
        />
      </View>
    </StripeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    midWidth: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
});
