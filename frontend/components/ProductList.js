import React, { useState, useEffect } from "react";
import { Text, View, Image, Button, Platform, FlatList } from "react-native";
import styles from "../styles/productList";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/actions";

export default function ProductList() {
  const device = Platform.OS;
  const columns = device === 'web' ? 3 : 1;

  const { cart, products } = useSelector(state => state.reducer);
  const dispatch = useDispatch();


  const Item = ({ product }) => (
    <View style={styles.item}>
      <Image
        style={styles.logo}
        source={require("../assets/Juniper_Twitter_Art.webp")}
      />
      <View style={styles.prodInfo}>
        <Text style={styles.prodName}>{product.name}</Text>
        <Text>${product.price_cents / 100}</Text>
        <Button
          color="#55bb55"
          title="Add to cart"
          onPress={() => dispatch(addItem(product))}
        />
      </View>
    </View>
  );

  return (
    <View style={styles.list}>
      <Text style={styles.title}>Take your pick!</Text>
      <Text style={styles.subtitle}>{device === 'web' ? 'Click' : 'Touch'} an item to view more info</Text>
      <FlatList
        data={products}
        numColumns={columns}
        renderItem={product => <Item product={product.item} />}
        keyExtractor={item => item.id}
      />
    </View>

    // productsArr;
  );
}
