import { React, useState } from "react";
import { StyleSheet, Text, View, Image, Button, Pressable, Platform  } from "react-native";
import * as Device from "expo-device";
import Android from "./Android";
import Web from "./Web";

export default function Home(props) {
const device = Platform.OS

  const {setViewHistory, back, transition, navigation, products} = props;

  const viewSwitcher = function(newView) {
    // {device !== "web" && navigation.navigate(newView), products}
    // {device === "web" && transition(newView)} 
    navigation.navigate(newView) 
    
  }

  return (
    <>
      <Text style={styles.bigText}>Juniper Xenoblade</Text>
      <Image
        style={styles.logo}
        source={require("../assets/Juniper_Twitter_Art.webp")}
      />

      <Text>Running on {Device.brand}</Text>
      {Device.brand === null && <Web />}
      {Device.brand !== null && <Android />}

      <Button
          style={styles.button}
          onPress={() => viewSwitcher("ProductList")}
          title="Mix & Match0"
      />  
        
      <Pressable
          style={styles.button}
          onPress={() => viewSwitcher("Web")}
        >
          <Text>Web</Text>
        </Pressable>
      <Pressable
          style={styles.button}
          onPress={() => viewSwitcher("Android")}
        >
          <Text>Android</Text>
        </Pressable>
      <Pressable
          style={styles.button}
          onPress={() => viewSwitcher("OrderList")}
        >
          <Text>OrderList</Text>
        </Pressable>
      <Pressable
          style={styles.button}
          onPress={() => viewSwitcher("PRODUCTS")}
        >
          <Text>Family Packages</Text>
        </Pressable>
      <Pressable
          style={styles.button}
          onPress={() => viewSwitcher("PRODUCTS")}
        >
          <Text>Individual alignItems</Text>
        </Pressable>

   
    </>
  );
  }
  const styles = StyleSheet.create({
    webNavBar: {
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
      backgroundColor: "white",
      borderRadius: 3,
      height: 50,
      shadowColor: "grey",
      width: "70%",
      shadowOffset: { width: 6, height: 6 },
      shadowRadius: 10,
      position: "fixed",
      top: 20,
    },
  
    button: {
      backgroundColor: "white",
      // border: "solid",
      padding: 5,
      margin: 5,
    },
})
