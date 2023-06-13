import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  Button,
  Platform,
  FlatList,
} from "react-native";
import styles from '../styles/productList'
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/actions";

export default function ProductList() {
  const device = Platform.OS;

  const { cart, products } = useSelector((state) => state.reducer);
  const dispatch = useDispatch();

  console.log(cart);

  const Item = ({ product }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{product.name}</Text>
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
