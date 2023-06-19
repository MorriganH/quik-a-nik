//REACT / REACT NATIVE
import { StatusBar } from "expo-status-bar";
import {
  Text,
  Image,
  Button,
  Platform,
  Pressable,
  AnimateHamburger,
  StyleSheet,
  View,
  ImageBackground,
} from "react-native";

//STACK NAVIGATOR
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

//COMPONENTS
import Home from "./Home";
import Cart from "./Cart";
import ProductList from "./ProductList";
import Web from "./Web";
import OrderList from "./OrderList";
import Navbar from "./Navbar";
import Stripe from "./Stripe";
import Login from "./Login";
import Register from "./Register";
import StripeMobile from "./Stripe";
import Map from "./Map";
import ConfirmationMobile from "./ConfirmationMobile";
import ConfirmationWeb from "./ConfirmationWeb";
import About from "./About";
import Footer from "./Footer";
import ContactUs from "./ContactUs";


//REDUX
import { useDispatch, useSelector } from "react-redux";
import { addItem, toggleModal, adjustQuantity } from "../redux/actions";

export default function QuikanikStack() {
  //REDUX FUNCTIONS
  const { cart, products, modalShow, modalProduct, cartNotification } =
    useSelector((state) => state.reducer);
  const dispatch = useDispatch();

  //VARIABLEs
  const device = Platform.OS;
  const Stack = createNativeStackNavigator();

  if (device !== "web") {
    // if (!true) {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={({ navigation }) => ({
            headerRight: () => (
              <View>
                <Pressable
                  style={style.button}
                  onPress={() => navigation.navigate("Cart")}
                >
                  <ImageBackground
                    source={require("../assets/picnic-basket-grey.png")}
                    style={style.cartImage}
                  >
                    <Text style={style.cartNotification}>
                      {cartNotification}
                    </Text>
                    {/* <Text>Cart </Text> */}
                  </ImageBackground>
                </Pressable>
              </View>
            ),
          })}
        >
          <Stack.Group
            screenOptions={({ navigation }) => ({
              headerLeft: () => (
                <Pressable
                  onPress={() => dispatch(toggleModal("N/A", "homeModal"))}
                >
                  <Text style={style.menu}> ☰ </Text>
                </Pressable>
              ),
            })}
          >
            <Stack.Screen name="Home" component={Home} options={{ title: '    Quik-a-nik', color: "green" }} />
          </Stack.Group>
          <Stack.Screen name="Web" component={Web} />
          <Stack.Screen name="ProductList" component={ProductList} options={{ title: 'Quik-a-nik' }} />
          <Stack.Screen name="Map" component={Map} options={{ title: 'Quik-a-nik' }} />
          <Stack.Screen name="OrderList" component={OrderList} options={{ title: 'Quik-a-nik' }} />
          <Stack.Screen name="Cart" component={Cart} options={{ title: 'Quik-a-nik' }} />
          <Stack.Screen name="Login" component={Login} options={{ title: 'Quik-a-nik' }} />
          <Stack.Screen name="Register" component={Register} options={{ title: 'Quik-a-nik' }} />
          <Stack.Screen name="Stripe" component={StripeMobile} options={{ title: 'Quik-a-nik' }}/>  
          <Stack.Screen name="About" component={About} options={{ title: 'Quik-a-nik' }}/>  
          <Stack.Screen name="Confirmation" component={ConfirmationMobile} options={{ title: 'Quik-a-nik' }} />
          <Stack.Screen name="Footer" component={Footer} />
          <Stack.Screen name="ContactUs" component={ContactUs} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={({ navigation }) => ({
            header: () => <Navbar navigation={navigation} />,
          })}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Web" component={Web} />
          <Stack.Screen name="ProductList" component={ProductList} />
          <Stack.Screen name="Map" component={Map} />
          <Stack.Screen name="OrderList" component={OrderList} />
          <Stack.Screen name="Cart" component={Cart} />
          <Stack.Screen name="Navbar" component={Navbar} />
          <Stack.Screen name="Stripe" component={Stripe} />
          <Stack.Screen name="Confirmation" component={ConfirmationWeb} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="About" component={About} />
          <Stack.Screen name="Footer" component={Footer} />
          <Stack.Screen name="ContactUs" component={ContactUs} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const style = StyleSheet.create({
  modal: {
    position: "absolute",
    backgroundColor: "pink",
    maxHeight: 50,
    margin: 0,
  },
  cartImage: {
    width: 40,
    height: 40,
  },
  cartNotification: {
    alignSelf: "center",
    fontWeight: "bold",
    color: "#ce4216",
    fontSize: 13,
  },
  menu: {
    fontSize: 25,
    fontWeight: "bold",

    color: "#ce4216",
  },
});
