import {
  View,
  StyleSheet,
  Text,
  Button,
  Pressable,
  useWindowDimensions,
  ScrollView,
} from "react-native";
//APP
import tunnelURL from "../backend_tunnel";
import axios from "axios";

//NAVIGATOR
import {
  addItem,
  toggleModal,
  adjustQuantity,
  setProducts,
} from "../redux/actions";

//REDUX
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function Navbar({ navigation }) {
  const { cart, userSession, cartNotification } = useSelector((state) => state.reducer);
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
          <Pressable
            style={styles.button}
            onPress={() => viewSwitcher("Logout")}
          >
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
          {cartNotification > 0 &&<Text>{cartNotification} </Text>}
          <Text>Cart </Text>
        </Pressable>
      </View>
    </Text>
  );
}

const styles = StyleSheet.create({
  webNavBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: 3,
    height: 50,
    shadowColor: "grey",
    width: "80%",
    shadowOffset: { width: 6, height: 6 },
    shadowRadius: 10,
    margin: 20,
    // position: "fixed",
    // top: 20,
  },

  navSection: {
    display: "flex",
    justifyContent: "space-evenly",
    width: "45%",
    flexDirection: "row",
  },

  button: {
    backgroundColor: "white",
  },
});
