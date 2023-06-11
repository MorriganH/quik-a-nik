import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, Button, Platform } from "react-native";
import ProductListItem from "./ProductListItem";
import stateManager from "../hooks/stateManager";



export default function ProductList() {
  const device = Platform.OS;

  const {addItem, state} = stateManager()
  console.log(state.cart)


  // const {products } = route.params;
  console.log(state.products);

  // const addItem = function (item) {
  //   console.log(item)
  //   if (!cart.some((i) => i.id === item.id)) {
  //     let lineItem = item;
  //     lineItem.qty = 1;

  //     setCart([...cart, lineItem]);
  //   } else {
  //     const index = cart.findIndex((i) => i.id === item.id);
  //     //I have a feeling this is bad practice need to review (but it works)
  //     cart[index].qty++;
  //   }
  //   console.log(cart)
  // };

  const productsArr = state.products.map((product) => {
    return (
      <View style={style.prod} key={product.id}>
        <Text> {product.name} </Text>
        <Button title="Add to cart" onPress={() => addItem(product)} />
      </View>
    );
  });
console.log(productsArr)
  return productsArr;
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
  prod: {
    border: "solid",
    padding: 5,
    margin: 5,
    width: "30%",
  },
});
