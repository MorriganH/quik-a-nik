import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  Button,
  Platform,
  FlatList,
  Modal,
  Pressable,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import styles from "../styles/productList";

import { useDispatch, useSelector } from "react-redux";
import { addItem, toggleModal, adjustQuantity } from "../redux/actions";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProductList() {
  const device = Platform.OS;
  const columns = device === "web" ? 3 : 1;
  const { cart, products, modalShow, modalProduct } = useSelector(
    (state) => state.reducer
  );
  const dispatch = useDispatch();

  const Item = ({ product }) => (
    <Pressable
      style={styles.item}
      onPress={() => dispatch(toggleModal(product))}
    >
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
    </Pressable>
  );

  return (
    <View style={styles.list}>
      <Text style={styles.title}>Take your pick!</Text>
      <Text style={styles.subtitle}>
        {device === "web" ? "Click" : "Touch"} an item to view more info
      </Text>
      <FlatList
        data={products}
        numColumns={columns}
        renderItem={(product) => <Item product={product.item} />}
        keyExtractor={(item) => item.id}
      />
      <Modal visible={modalShow} transparent={true} animationType="slide">
        <View style={styles.modal}>
          <ImageBackground
            style={styles.modalHeader}
            source={require("../assets/Juniper_Twitter_Art.webp")}
          >
            <TouchableOpacity onPress={() => dispatch(toggleModal())}>
              <Text style={styles.closeModal}>⨉</Text>
            </TouchableOpacity>
          </ImageBackground>

          <View style={styles.modalDivider}>
            <Text style={styles.modalProductName}>{modalProduct.name}</Text>
            <Text style={styles.modalProductName}>
              ${(modalProduct.price_cents / 100).toFixed(2)}
            </Text>
          </View>
          <View style={styles.modalDivider}>
            <Text>{modalProduct.description}</Text>
          </View>

          <View style={styles.modalActions}>
            <View style={styles.modalQuantity}>
              <Pressable onPress={() => dispatch(adjustQuantity("-"))}>
                <Text>-</Text>
              </Pressable>

              <Text>{modalProduct.default_quantity}</Text>
              <Pressable onPress={() => dispatch(adjustQuantity("+"))}>
                <Text>+</Text>
              </Pressable>
            </View>

            <Button
            
              title="Add to cart"
              onPress={() => dispatch(addItem(modalProduct))}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}
