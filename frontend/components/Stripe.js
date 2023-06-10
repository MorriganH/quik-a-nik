import { useState, useCallback, useEffect } from "react";
import { Text, StyleSheet, View, TextInput, Pressable } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Device from "expo-device";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import key from "../api_key";
import * as Location from "expo-location";

export default function Stripe() {

  return (
    <Text> Test stripe page? </Text>
  )
}