import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Platform,
  FlatList,
} from "react-native";

import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/actions";

export default function ProductList() {
  const device = Platform.OS;

  const { cart, products } = useSelector((state) => state.reducer);
  const dispatch = useDispatch();

  console.log(cart);

  const Item = ({ product }) => (
    <View style={style.item}>
      <Text style={style.title}>{product.name}</Text>
      <Button title="Add to cart" onPress={() => dispatch(addItem(product))} />
    </View>
  );

  return (
    <FlatList
      data={products}
      renderItem={(product) => <Item product={product.item} />}
      keyExtractor={(item) => item.id}
    />

    // productsArr;
  );
}

const style = StyleSheet.create({
  prod: {
    // border: "solid",
    padding: 5,
    margin: 5,
    width: "30%",
  },
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: "white",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
