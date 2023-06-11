import React from "react";
import { StyleSheet, Text, View, Image, Button, Platform } from "react-native";
import ProductListItem from "./ProductListItem";

export default function ProductList(props) {
  const device = Platform.OS;
  
  const { products, setCart, cart } = props;
  console.log(device);

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
  mobile: {

  },
});
