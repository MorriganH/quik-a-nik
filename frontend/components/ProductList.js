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
  ActivityIndicator,
} from "react-native";
import styles from "../styles/productList";
import { useDispatch, useSelector } from "react-redux";
import { addItem, toggleModal, adjustQuantity } from "../redux/actions";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProductList() {
  const device = Platform.OS;
  const columns = device === "web" ? 3 : 1;
  const modalTransition = device === "web" ? "fade" : "slide"
  const { cart, products, modalShow, modalProduct } = useSelector(
    state => state.reducer
  );
  const dispatch = useDispatch();

  const Item = ({ product }) => {
    return (
      <Pressable
        style={styles.item}
        onPress={() => dispatch(toggleModal(product, "productModal"))}
      >
        <Image style={styles.logo} source={{ uri: product.image }} />
        <View style={styles.prodInfo}>
          <Text style={styles.prodName}>{product.name}</Text>
          <Text>${(product.price_cents / 100).toFixed(2)}</Text>
          <Pressable
          
            onPress={() => dispatch(addItem(product))}
            >
            <Text style={styles.add}>Add to basket + </Text>

          </Pressable>
        </View>
      </Pressable>
    );
  };

  return (
    <View style={styles.list}>
    <Text style={styles.title}>Take your pick!</Text>
      <Text style={styles.subtitle}>
        {device === "web" ? "Click" : "Touch"} an item to view more info
      </Text>
      { products.length < 2 ?  <ActivityIndicator
        size="large"
        color="#00ff00"
        style={styles.activityIndicator}
      /> :
      <FlatList
        data={products}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        numColumns={columns}
        renderItem={(product) => <Item product={product.item} />}
        keyExtractor={(item) => item.id}
      /> }
      <Modal visible={modalShow === "productModal"} transparent={true} animationType={modalTransition} >
      <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', width: "100%", height: "100%"}}>
        <View style={styles.modal}>
          <ImageBackground
            style={styles.modalHeader}
            source={{uri: modalProduct.image}}
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
            <Text style={styles.description}>{modalProduct.description}</Text>
          </View>

          <View style={styles.modalActions}>
            <View style={styles.modalQuantity}>
              <Pressable onPress={() => dispatch(adjustQuantity("-"))}>
                <Text style={styles.quantityComponent}>-</Text>
              </Pressable>

              <Text style={styles.quantityComponent}>{modalProduct.default_quantity}</Text>
              <Pressable  onPress={() => dispatch(adjustQuantity("+"))}>
                <Text style={styles.quantityComponent}>+</Text>
              </Pressable>
            </View>

            <Pressable
            
            style={styles.modalButton}
            onPress={() => dispatch(addItem(modalProduct))}
            >
              <Text style={styles.modalButtonText}> add +</Text>
            </Pressable>
          </View>
        </View>
        </View>
      </Modal>
    </View>
  );
}
