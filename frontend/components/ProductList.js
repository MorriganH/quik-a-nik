import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, Button, Platform } from "react-native";
import ProductListItem from "./ProductListItem";
import axios from "axios";

export default function ProductList({ route, navigation }) {
  const device = Platform.OS;

  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3000/products")
  //     .then((prods) => setProducts(prods.data.products));
  // }, []);

  const { cart, setCart, products } = route.params;
  console.log(products);

  const productArr = products.map((product) => {
    return (
      <ProductListItem
        key={product.id}
        cart={cart}
        setCart={setCart}
        product={product}
      ></ProductListItem>
    );
  });

  if (device === "web") {
    return <View style={style.web}>{productArr}</View>;
  } else {
    return <View style={style.mobile}>{productArr}</View>;
  }
}

const style = StyleSheet.create({
  web: {
    justifyContent: "space-evenly",
    display: "flex",
    // paddingLeft: 50,

    marginTop: 100,
    width: "70%",
    border: "solid",
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 2,
  },
  mobile: {},
});
