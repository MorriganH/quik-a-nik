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
  ImageBackground
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



//REDUX
import { useDispatch, useSelector } from "react-redux";
import { addItem, toggleModal, adjustQuantity } from "../redux/actions";



export default function QuikanikStack() {
  //REDUX FUNCTIONS
  const { cart, products, modalShow, modalProduct,cartNotification } = useSelector(
    (state) => state.reducer
    );
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

<Pressable style={style.button} onPress={() => navigation.navigate("Cart")}>
          <ImageBackground source={require("../assets/picnic-basket2.png")}
          style={style.cartImage}>

          <Text style={style.cartNotification}>{cartNotification}</Text>
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
                <Button
                  onPress={() => dispatch(toggleModal("N/A", "homeModal"))}
                  title="Menu"
                />
              ),
            })}
          >
            <Stack.Screen name="Home" component={Home} />
          </Stack.Group>
          <Stack.Screen name="Web" component={Web} />
          <Stack.Screen name="ProductList" component={ProductList} />
          <Stack.Screen name="Map" component={Map} />
          <Stack.Screen name="OrderList" component={OrderList} />
          <Stack.Screen name="Cart" component={Cart} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Stripe" component={StripeMobile} />  
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
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
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
    margin: 0
    
  },
cartImage: {
  width: 40,
  height: 40,
},
cartNotification: {
  alignSelf: "center",
  fontWeight: "bold",
  color: "#ce4216"

}

})


