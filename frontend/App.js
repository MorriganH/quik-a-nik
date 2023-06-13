//REACT / REACT NATIVE
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Image, Button, Platform, Pressable } from "react-native";
import styles from "./styles";
import { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
//EXPO

//REDUX
import { Provider, useDispatch, useSelector } from "react-redux";
import { Store } from "./redux/store";
//COMPONENTS
import Home from "./components/Home";
import Map from "./components/Map";
import WebMap from "./components/WebMap";
import Cart from "./components/Cart";
import ProductList from "./components/ProductList";
import Web from "./components/Web";
import Android from "./components/Android";
import OrderList from "./components/OrderList"

import reducer from "./redux/reducers";



export default function App() {
  const device = Platform.OS;

  const [viewHistory, setViewHistory] = useState(["HOME"]);
  const [filter, setFilter] = useState(null);

  const Stack = createNativeStackNavigator();

  return (
    <Provider store={Store}>

      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={({navigation}) => ({
            headerRight: () => (
              <Pressable onPress={() => navigation.navigate("Cart")}>
                <Text>3</Text>
              <Image style={styles.cart}  source={require("./assets/basket-shopping-solid.svg")}/> 
              </Pressable>
              
            ),
          })}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Web" component={Web} />
          <Stack.Screen name="ProductList" component={ProductList} />
          <Stack.Screen name="Android" component={Android} />
          <Stack.Screen name="WebMap" component={WebMap} />
          <Stack.Screen name="Map" component={Map} />
          <Stack.Screen name="OrderList" component={OrderList} />
          <Stack.Screen name="Cart" component={Cart} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}