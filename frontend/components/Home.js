import { React, useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Pressable,
  Platform,
  TouchableOpacity,
  Modal,
  ScrollView,
} from "react-native";

import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  addItem,
  toggleModal,
  adjustQuantity,
  setProducts,
} from "../redux/actions";
import tunnelURL from "../backend_tunnel";
import styles from "../styles/home";

export default function Home({ navigation }) {
  const device = Platform.OS;

  const { cart, products, modalShow, modalProduct, userSession } = useSelector(
    (state) => state.reducer
  );
  const dispatch = useDispatch();

  const filter = function (path, view) {
    axios
      .get(`${tunnelURL}/products/${path}`)
      .then((prods) => {
        dispatch(setProducts(prods.data.products));
      })
      .then(viewSwitcher(view))
      .catch((err) => {
        console.log(err);
      });
  };

  const viewSwitcher = function (newView) {
    navigation.navigate(newView);
  };
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.main}>
          <Pressable
            style={styles.buttonMain}
            onPress={() => filter("", "ProductList")}
            title="Mix & Match"
          >
            <Image
              style={styles.logoMain}
              source={require("../assets/Juniper_Twitter_Art.webp")}
            />
            <Text style={styles.bigText}>Mix & Match</Text>
          </Pressable>

          <View style={styles.sideMain}>
            <Pressable
              style={styles.buttonSideMain}
              onPress={() => filter("deluxe", "ProductList")}
              title="Deluxe Products"
            >
              <Image
                style={styles.logo}
                source={require("../assets/Juniper_Twitter_Art.webp")}
              />
              <Text style={styles.bigText}>Deluxe Products</Text>
            </Pressable>
            <Pressable
              style={styles.button}
              onPress={() => filter("addons", "ProductList")}
            >
              <Image
                style={styles.logo}
                source={require("../assets/Juniper_Twitter_Art.webp")}
              />
              <Text style={styles.bigText}>Individual Items</Text>
            </Pressable>

            {/* {device === "web" && (
              <Pressable
              style={styles.buttonSideMain}
              onPress={() => viewSwitcher("Map")}
              >
              <Image
              style={styles.logo}
              source={require("../assets/Juniper_Twitter_Art.webp")}
              />
                <Text style={styles.bigText}>Map</Text>
              </Pressable>
            )} */}
            {/* <Pressable
              style={styles.button}
              onPress={() => {
                viewSwitcher("Stripe");
                // setStripeModalVisible(true);
              }}
            >
              <Text>Checkout</Text>
            </Pressable>
          */}
          </View>
        </View>

        {/* {device !== "web" && (
          <Pressable
            style={styles.buttonSideMain}
            onPress={() => viewSwitcher("Map")}
          >
            <Image
              style={styles.logo}
              source={require("../assets/Juniper_Twitter_Art.webp")}
            />
            <Text style={styles.bigText}>Map</Text>
          </Pressable>
        )} */}

        {/* <Pressable
          style={styles.button}
          onPress={() => viewSwitcher("OrderList")}
        >
          <Image
            style={styles.logo}
            source={require("../assets/Juniper_Twitter_Art.webp")}
          />
          <Text style={styles.bigText}>OrderList</Text>
        </Pressable> */}

        <Pressable
          style={styles.button}
          onPress={() => filter("4", "ProductList")}
        >
          <Image
            style={styles.logo}
            source={require("../assets/Juniper_Twitter_Art.webp")}
          />
          <Text style={styles.bigText}>Family Packages</Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() => filter("party", "ProductList")}
        >
          <Image
            style={styles.logo}
            source={require("../assets/Juniper_Twitter_Art.webp")}
          />
          <Text style={styles.bigText}>Party Packages</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => filter("2", "ProductList")}
        >
          <Image
            style={styles.logo}
            source={require("../assets/Juniper_Twitter_Art.webp")}
          />
          <Text style={styles.bigText}>Baskets for Two</Text>
        </Pressable>
      </ScrollView>
      <Modal visible={modalShow} transparent={true} animationType="slide">
        <View style={styles.modal}>
          <View style={styles.modalHeader}>
            <TouchableOpacity onPress={() => dispatch(toggleModal())}>
              <Text style={styles.closeModal}>⨉</Text>
            </TouchableOpacity>
            <Text style={styles.modalUsername}>Graydon Ritchie</Text>
            <Text style={styles.modalEmail}>email@address.com</Text>

            <Text style={styles.modalOrderBanner}>
              {" "}
              You have made 9 Quik-a-nik orders!
            </Text>
          </View>
          <View style={styles.modalDivider}>
            <Text style={styles.modalOption}>🧾  Orders</Text>
            <Text style={styles.modalOption}>📍  About</Text>
            <Text style={styles.modalOption}>🌭  Work with us</Text>
          </View>
          <View style={styles.modalDivider}>
            <Text style={styles.modalOption}>⇇|  Logout</Text>

          </View>
        </View>
      </Modal>
    </View>
  );
}
