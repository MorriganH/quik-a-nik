//REACT / REACT NATIVE
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  Platform,
  Pressable,
  AnimateHamburger,
} from "react-native";

//STACK NAVIGATOR
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

//COMPONENTS
import Home from "./Home";
import Map from "./Map";
import WebMap from "./WebMap";
import Cart from "./Cart";
import ProductList from "./ProductList";
import Web from "./Web";
import Android from "./Android";
import OrderList from "./OrderList";
import Navbar from "./Navbar";
import Stripe from "./Stripe";
import Login from "./Login";

import StripeMobile from "./Stripe";

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

                {cartNotification > 0 && <Text>{cartNotification}</Text>}
              <Button onPress={() => navigation.navigate("Cart")} title="cart"/>
              
              </View>
            ),
          })}
        >
          <Stack.Group
            screenOptions={({ navigation }) => ({
              headerLeft: () => (
                <Button
                  onPress={() => dispatch(toggleModal("N/A"))}
                  title="Menu"
                />
              ),
            })}
          >
            <Stack.Screen name="Home" component={Home} />
          </Stack.Group>
          <Stack.Screen name="Web" component={Web} />
          <Stack.Screen name="ProductList" component={ProductList} />
          <Stack.Screen name="Android" component={Android} />
          <Stack.Screen name="Map" component={Map} />
          <Stack.Screen name="OrderList" component={OrderList} />
          <Stack.Screen name="Cart" component={Cart} />
          
          {/* STRIPE MOBILE MODULE HERE */}
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
          <Stack.Screen name="Android" component={Android} />
          <Stack.Screen name="Map" component={WebMap} />
          <Stack.Screen name="OrderList" component={OrderList} />
          <Stack.Screen name="Cart" component={Cart} />
          <Stack.Screen name="Navbar" component={Navbar} />
          <Stack.Screen name="Stripe" component={Stripe} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
