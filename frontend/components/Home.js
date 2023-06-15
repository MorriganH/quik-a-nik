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

import { setUserSession } from "../redux/actions";
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
    state => state.reducer
  );
  const dispatch = useDispatch();

  const filter = function (path, view) {
    axios
      .get(`${tunnelURL}/products/${path}`)
      .then(prods => {
        dispatch(setProducts(prods.data.products));
      })
      .then(viewSwitcher(view))
      .catch(err => {
        console.log(err);
      });
  };

  const viewSwitcher = function (newView) {
    navigation.navigate(newView);
  };

  const logout = () => {
    dispatch(setUserSession(null));
    viewSwitcher("Login");
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
          <Button title="X" onPress={() => dispatch(toggleModal())} />

          {userSession === null && (
            <Pressable
              style={styles.button}
              onPress={() => viewSwitcher("Login")}
            >
              <Text>Login</Text>
            </Pressable>
          )}

          {userSession === null && (
            <Pressable
              style={styles.button}
              onPress={() => viewSwitcher("Register")}
            >
              <Text>Register</Text>
            </Pressable>
          )}
          {userSession !== null && <Text>{userSession.first_name}</Text>}
          {userSession !== null && (
            <Pressable style={styles.button} onPress={() => logout()}>
              <Text>Logout</Text>
            </Pressable>
          )}
          {/* <View style={styles.button}>
            <Text>UserName</Text>
            <Text>Email@address.com</Text>
          </View>
          <Text>Orders</Text>
          <Text>About</Text>
          <Text>Become a certified Quik-a-nik specialist</Text> */}
        </View>
      </Modal>
    </View>
  );
}
