import {
  View,
  StyleSheet,
  Text,
  Button,
  Pressable,
  useWindowDimensions,
  ScrollView,
  Modal,
  ImageBackground,
} from "react-native";
//APP
import tunnelURL from "../backend_tunnel";
import axios from "axios";
import styles from "../styles/navbar";

//NAVIGATOR
import {
  addItem,
  toggleModal,
  adjustQuantity,
  setProducts,
} from "../redux/actions";

//REDUX
import { setUserSession } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function Navbar({ navigation }) {
  const { cart, userSession, cartNotification } = useSelector(
    (state) => state.reducer
  );
  const dispatch = useDispatch();
  const test = false

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

  const logout = () => {
    dispatch(setUserSession(null));
    viewSwitcher("Login");
  };

  return (
    <Text style={styles.webNavBar}>
      <View style={styles.navSection}>
        <Pressable style={styles.button} onPress={() => viewSwitcher("Home")}>
          <Text>Quik-a-nik</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => filter("", "ProductList")}
        >
          <Text>Products</Text>
        </Pressable>
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
      <View style={styles.navSection}>
        <Pressable
          style={styles.button}
          onPress={() => viewSwitcher("OrderList")}
        >
          <Text>My Orders</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => viewSwitcher("Cart")}>
          <ImageBackground source={require("../assets/picnic-basket-grey.png")}
          style={styles.cartImage}>

          <Text style={styles.cartNotification}>{cartNotification} </Text>
          {/* <Text>Cart </Text> */}
          </ImageBackground>
        </Pressable>
      </View>

    </Text>
  );
}


