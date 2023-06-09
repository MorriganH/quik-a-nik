import { React, useState } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import * as Device from "expo-device";
import Android from "./Android";
import Web from "./Web";
import styles from "../styles";


export default function Home(props) {
  const {setViewHistory, back, transition } = props;

  const viewSwitcher = function(newView) {
    transition(newView)
  }

  return (
    <>
      <Text style={styles.bigText}>Juniper Xenoblade</Text>
      <Image
        style={styles.logo}
        source={require("../assets/Juniper_Twitter_Art.webp")}
      />

      <Text>Running on {Device.osName}</Text>
      {Device.osName === "Android" && <Android />}
      {(Device.osName === "Windows" || Device.osName === "iOS") && <Web />}

      <Button onPress={() => viewSwitcher("PRODUCTS")} title="RENDER PRODUCTS" ></Button>
   
    </>
  );
}
