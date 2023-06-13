import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Platform,
  FlatList,
  Modal,
  Pressable,
} from "react-native";

import {  useDispatch, useSelector } from "react-redux";
import { addItem, showModal  } from "../redux/actions";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../styles";

export default function ProductList() {
  const device = Platform.OS;

  const { cart, products, modalShow, modalProduct } = useSelector((state) => state.reducer);
  const dispatch = useDispatch();



  console.log(cart);

  const Item = ({ product }) => (
    <View style={style.item}>
      <Pressable onPress={() => dispatch(showModal(product))}>
        <Text style={style.title}>{product.name}</Text>
      </Pressable>
      <Button title="Add to cart" onPress={() => dispatch(addItem(product))} />
    </View>
  );

  return (
    <SafeAreaView style={styles.fill}>
      <FlatList
        data={products}
        renderItem={(product) => <Item product={product.item} />}
        keyExtractor={(item) => item.id}
      />
      <Modal
      visible={modalShow}
      transparent={true}
      animationType="slide">
        <View style={style.modal}>

<Text>{modalProduct.name}</Text>
<Text>{modalProduct.description}</Text>
<Text>${modalProduct.price_cents / 100}</Text>
        </View>
      </Modal>
    </SafeAreaView>
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
  modal: {
    display: "flex",
    width: "70%",
    height: "70%",
    backgroundColor: "pink"
    
  }
});
