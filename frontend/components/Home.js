import { React, useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, Button, Pressable, Platform, TouchableOpacity  } from "react-native";
import * as Device from "expo-device";
import Android from "./Android";
import Web from "./Web";
import stateManager from "../hooks/stateManager";
import {useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addItem, setProducts } from "../redux/actions";



export default function Home({navigation, route}) {
const device = Platform.OS

const { cart, products } = useSelector((state) => state.reducer);
const dispatch = useDispatch();

  const filter = function(path, view){
    axios
    .get(`https://quikanik.loca.lt/products/${path}`)
    .then((prods) => {
      dispatch(setProducts(prods.data.products))
    }).then(viewSwitcher(view)).catch(err => {
      console.log(err);
      
    });
  }

  const viewSwitcher = function(newView) {
    // {device !== "web" && navigation.navigate(newView), products}
    // {device === "web" && transition(newView)} 
    navigation.navigate(newView) 
    
  }

  // useEffect(() => {
  //   axios
  //   .get("https://643d-142-189-255-40.ngrok-free.app/products")
  //   .then((prods) => {
  //     dispatch(setProducts(prods.data.products))
  //   }).catch(err => {
  //     console.log(err);
      
  //   });
  // }, []);


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

      <TouchableOpacity
          style={styles.button}
          onPress={() => filter("","ProductList")}
          title="Mix & Match"
      />  
      <Button
          style={styles.button}
          onPress={() => filter("deluxe","ProductList")}
          title="Deluxe Products"
      />  
      <Button
          style={styles.button}
          onPress={() => filter("2","ProductList")}
          title="Baskets for 2"
      />  
      <Button
          style={styles.button}
          onPress={() => filter("4","ProductList")}
          title="Baskets for the whole family"
      />  
      <Button
          style={styles.button}
          onPress={() => filter("addons","ProductList")}
          title="Individual Items"
      />  


   
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
    logo: {
      width: 200,
      height: 200,
    },
})
