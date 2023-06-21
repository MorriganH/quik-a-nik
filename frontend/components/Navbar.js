//REACT
import { View, Text, Pressable, ImageBackground } from "react-native";

//NETWORKING
import tunnelURL from "../backend_tunnel";
import axios from "axios";

//COMPONENTs
import styles from "../styles/navbar";

//STATE
import { setProducts } from "../redux/actions";
import { setUserSession } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

//FUNCTION DEFINITION
export default function Navbar({ navigation }) {
  //STATEs
  const { cart, userSession, cartNotification } = useSelector(
    (state) => state.reducer
  );
  const dispatch = useDispatch();

  //SETS PRODUCTS TO DISPLAY IN PRODUCT LIST VIEW
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

  //CHANGES TO NEW VIEW
  const viewSwitcher = function (newView) {
    navigation.navigate(newView);
  };

  //LOGS THE USER OUT
  const logout = () => {
    dispatch(setUserSession(null));
    viewSwitcher("Login");
  };
  //RETURN
  return (
    <Text style={styles.webNavBar}>
      <View style={styles.navSection}>
        <Pressable style={styles.button} onPress={() => viewSwitcher("Home")}>
          <Text style={styles.logo}>Quik-a-nik</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => filter("", "ProductList")}
        >
          <Text style={styles.navLink}>Products</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => viewSwitcher("About")}>
          <Text style={styles.navLink}>About</Text>
        </Pressable>
      </View>
      <View style={styles.navSection}>
        {userSession === null && (
          <View style={styles.userActions}>
            <Pressable
              style={styles.button}
              onPress={() => viewSwitcher("Login")}
            >
              <Text style={styles.navLink}>Login</Text>
            </Pressable>

            <Text> | </Text>
            <Pressable
              style={styles.button}
              onPress={() => viewSwitcher("Register")}
            >
              <Text style={styles.navLink}>Register</Text>
            </Pressable>
          </View>
        )}

        {userSession !== null && (
          <View style={styles.userActions}>
            <Text style={styles.navLink}>
              {" "}
              Welcome back, {userSession.first_name}
            </Text>
            <Text> | </Text>

            <Pressable
              style={styles.button}
              onPress={() => viewSwitcher("OrderList")}
            >
              <Text style={styles.navLink}>My Orders</Text>
            </Pressable>
            <Text> | </Text>

            <Pressable style={styles.button} onPress={() => logout()}>
              <Text style={styles.navLink}>Logout</Text>
            </Pressable>
          </View>
        )}
        <Pressable style={styles.button} onPress={() => viewSwitcher("Cart")}>
          <ImageBackground
            source={require("../assets/picnic-basket-grey.png")}
            style={styles.cartImage}
          >
            <Text style={styles.cartNotification}>{cartNotification} </Text>
          </ImageBackground>
        </Pressable>
      </View>
    </Text>
  );
}
