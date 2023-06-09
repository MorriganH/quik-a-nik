import { useState, useCallback } from "react";
import { Text, StyleSheet } from "react-native";
import MapView from "react-native-maps";
import * as Device from "expo-device";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import key from "../api_key";

export default function Map() {
  return (
    <MapView
      style={styles.map}
      provider="google"
      googleMapsApiKey={key}
      loadingFallback={<Text>Loading...</Text>}
    />
  );
}

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
});
