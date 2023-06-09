import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import styles from "./styles";
import Home from "./components/Home";
import { useState, useEffect } from "react";
import axios from "axios";
import ProductList from "./components/ProductList";



export default function App() {

  const [products, setProducts] = useState([])
  const [viewHistory, setViewHistory] = useState(["HOME"]);
  //variables
  const view = viewHistory[viewHistory.length - 1]
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
  axios.get("http://localhost:3000/products").then(prods => setProducts(prods.data.products))
},[])
console.log(products)

//App return
return (
  <View style={styles.container}>
      {view === "HOME" && <Home products={products} transition={transition} back={back} view={view} setViewHistory={setViewHistory}></Home>}
      {view === "PRODUCTS" && <ProductList products={products}></ProductList>}
      <StatusBar style="auto" />
    </View>
  );
}
