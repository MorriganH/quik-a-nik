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

export default function Navbar({ navigation }) {
  const { cart, products, modalShow, modalProduct } = useSelector(
    (state) => state.reducer
  );
  const dispatch = useDispatch();

  const cartNotification = cart.reduce((sum, current) => {
    sum += current.default_quantity
  }, 0);

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
        <Pressable style={styles.button} onPress={() => viewSwitcher("Login")}>
          <Text>Login</Text>
        </Pressable>
      </View>
      <View style={styles.navSection}>
        <Pressable style={styles.button} onPress={() => viewSwitcher("Cart")}>
          <Text>My Orders</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => viewSwitcher("Cart")}>
          <Text>Cart {cartNotification} </Text>
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
    flexDirection: "row"
  },

  button: {
    backgroundColor: "white",
  },
});
