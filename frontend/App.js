import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import styles from "./styles";
import Home from "./components/Home";
import Map from "./components/Map";
import WebMap from "./components/WebMap";
import Cart from "./components/Cart";

import ProductList from "./components/ProductList";
import { useState, useEffect } from "react";
import axios from "axios";
import * as Device from "expo-device";
import { NavigationContainer } from "@react-navigation/native";
import Navbar from "./components/Navbar";

export default function App() {
  let device;
  if (Device.brand === null) {
    device = "web";
  }
  if (Device.brand !== null) {
    device = "mobile";
  }

  //States
  const [cart, setCart] = useState([])
  const [products, setProducts] = useState([]);
  const [viewHistory, setViewHistory] = useState(["HOME"]);
  const [filter, setFilter] = useState(null);


  //variables
  const view = viewHistory[viewHistory.length - 1];
  console.log("Current view: ", view);

  const transition = function (newView, replace) {
    const oldHistory = [...viewHistory];

    // to be used if we have transitions...
    if (replace) {
      oldHistory.pop();
    }

    setViewHistory([...oldHistory, newView]);
  };

  const back = function () {
    const oldHistory = [...viewHistory];
    if (oldHistory.length !== 1) {
      oldHistory.pop();
    }
    setViewHistory(oldHistory);
  };

  //useEffects
  //axios request to get all products
  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((prods) => setProducts(prods.data.products));
  }, []);
  // console.log(products);

  //App return
  return (
    <View style={styles.container}>
      <Navbar
        products={products}
        transition={transition}
        back={back}
        view={view}
        setViewHistory={setViewHistory}
      />
      {view === "HOME" && (
        <Home
          products={products}
          transition={transition}
          back={back}
          view={view}
          setViewHistory={setViewHistory}
 
        ></Home>
      )}
      {view === "PRODUCTS" && <ProductList cart={cart} setCart={setCart} products={products}></ProductList>}
      {view === "MAP" && device === "web" && <WebMap />}
      {view === "MAP" && device === "mobile" && <Map />}
      {view === "CART" && device === "web" && <Cart cart={cart} />}
      <StatusBar style="auto" />
    </View>
  );
}
