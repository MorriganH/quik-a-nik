import { React, useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, Button, Pressable, Platform  } from "react-native";
import * as Device from "expo-device";
import Android from "./Android";
import Web from "./Web";
import stateManager from "../hooks/stateManager";
import {useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addItem, setProducts } from "../redux/actions";
import styles from '../styles/home'
import tunnelURL from '../backend_tunnel'



export default function Home({navigation, route}) {
const device = Platform.OS

const { cart, products } = useSelector((state) => state.reducer);
const dispatch = useDispatch();

  const filter = function(path, view){
    axios
    .get(`${tunnelURL}/products/${path}`)
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

  useEffect(() => {
    axios
    .get(`${tunnelURL}/products`)
    .then((prods) => {
      dispatch(setProducts(prods.data.products))
    }).catch(err => {
      console.log(err);
      
    });
  }, []);


  return (

    <View style={styles.container}>
      <Text style={styles.bigText}>Juniper Xenoblade</Text>
      <Image
        style={styles.logo}
        source={require("../assets/Juniper_Twitter_Art.webp")}
      />

      <Text>Running on {device}</Text>
      {device === 'web' && <Web />}
      {device !== 'web' && <Android />}

      <Button
          style={styles.button}
          onPress={() => filter("","ProductList")}
          title="Mix & Match"
      />  
      <Button
          style={styles.button}
          onPress={() => filter("deluxe","ProductList")}
          title="Deluxe Products"
      />  

      {device === 'web' && <Pressable
          style={styles.button}
          onPress={() => viewSwitcher("WebMap")}
        >
          <Text>Map</Text>
        </Pressable>}
      {device !== 'web' && <Pressable
          style={styles.button}
          onPress={() => viewSwitcher("Map")}
        >
          <Text>Map</Text>
        </Pressable>}

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

   
    </View>
  );
  }