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

  const [orderCount, setOrderCount] = useState(0)

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

  const getOrderCount = function (user_id) {
    axios
      .get(`${tunnelURL}/orders/count/${user_id}`)
      .then(res => {
        setOrderCount(res.data)
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    if (userSession) {
      getOrderCount(userSession.id)
    }
  }, [userSession]);

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
            {userSession && (
              <>
                <Text style={styles.modalUsername}>
                  {userSession.first_name} {userSession.last_name}
                </Text>
                <Text style={styles.modalEmail}>{userSession.email}</Text>

                <Text style={styles.modalOrderBanner}>
                  {" "}
                  You have made {orderCount} Quik-a-nik orders!
                </Text>
              </>
            )}
            {!userSession && (
              <Text style={styles.modalUsername}>
                Sign in to view your account details
              </Text>
            )}
          </View>
          {userSession && (
            <>
              <View style={styles.modalDivider}>
                <Text style={styles.modalOption}>🧾 Orders</Text>
                <Text style={styles.modalOption}>📍 About</Text>
                <Text style={styles.modalOption}>🌭 Work with us</Text>
              </View>
              <Pressable style={styles.modalButton} onPress={() => logout()}>
                <Text style={styles.modalOption}>⇇| Logout</Text>
              </Pressable>
            </>
          )}
          {!userSession && (
            <>
              <Pressable
                style={styles.modalButton}
                onPress={() => viewSwitcher("Login")}
              >
                <Text style={styles.modalOption}>Login</Text>
              </Pressable>

              <Pressable
                style={styles.modalButton}
                onPress={() => viewSwitcher("Register")}
              >
                <Text style={styles.modalOption}>Register</Text>
              </Pressable>
            </>
          )}
        </View>
      </Modal>
    </View>
  );
}
