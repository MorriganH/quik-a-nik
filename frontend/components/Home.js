import { React, useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  Button,
  Pressable,
  Platform,
  TouchableOpacity,
  Modal,
  ScrollView,
  ImageBackground,
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

  const [menuModalShow, setMenuModalShow] = useState(false)

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
            <ImageBackground
              source={require("../assets/product-images/mix-n-match.jpg")}
              style={styles.logoMain}
            >
              <Text style={styles.mainTitle}>Mix & Match</Text>
            </ImageBackground>
          </Pressable>
          <View style={styles.sideMain}>
            <Pressable
              style={styles.buttonSideMain}
              onPress={() => filter("deluxe", "ProductList")}
              title="Deluxe Products"
            >
              <Image
                style={styles.logo}
                source={require("../assets/product-images/grill-lovers.jpg")}
              />
              <Text style={styles.buttonTitle}>Deluxe Products</Text>
            </Pressable>
            <Pressable
              style={styles.button}
              onPress={() => filter("addons", "ProductList")}
            >
              <Image
                style={styles.logo}
                source={require("../assets/product-images/frisbee.jpg")}
              />
              <Text style={styles.buttonTitle}>Individual Items</Text>
            </Pressable>
            {/* <Pressable
              style={styles.button}
              onPress={() => viewSwitcher("OrderList")}
            >
              <Image
                style={styles.logo}
                source={require("../assets/Juniper_Twitter_Art.webp")}
              />
              <Text style={styles.buttonTitle}>Orders</Text>
            </Pressable> */}
          </View>
        </View>
        <Pressable
          style={styles.button}
          onPress={() => filter("4", "ProductList")}
        >
          <Image
            style={styles.logo}
            source={require("../assets/product-images/basket.jpg")}
          />
          <Text style={styles.buttonTitle}>Family Packages</Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() => filter("party", "ProductList")}
        >
          <Image
            style={styles.logo}
            source={require("../assets/product-images/basket.jpg")}
          />
          <Text style={styles.buttonTitle}>Party Packages</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => filter("2", "ProductList")}
        >
          <Image
            style={styles.logo}
            source={require("../assets/product-images/basket.jpg")}
          />
          <Text style={styles.buttonTitle}>Baskets for Two</Text>
        </Pressable>
      </ScrollView>
      <Modal visible={modalShow === "homeModal"} transparent={true} animationType="slide">
        <View style={styles.modal}>
          <View style={styles.modalHeader}>
            <TouchableOpacity onPress={() => dispatch(toggleModal("",""))}>
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
            <Text style={styles.modalOption}>🧾 Orders</Text>
            <Text style={styles.modalOption}>📍 About</Text>
            <Text style={styles.modalOption}>🌭 Work with us</Text>
          </View>
          <View style={styles.modalDivider}>
            <Text style={styles.modalOption}>⇇| Logout</Text>
          </View>
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
        </View>
      </Modal>
    </View>
  );
}
