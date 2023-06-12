//REACT / REACT NATIVE
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button, Platform } from "react-native";
import styles from "./styles";
import { useState, useEffect } from "react";
import axios from "axios";
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

export default function App() {
  const device = Platform.OS;

  const [viewHistory, setViewHistory] = useState(["HOME"]);
  const [filter, setFilter] = useState(null);

  const Stack = createNativeStackNavigator();

  // if (state.isLoading) {
  //   return <View className="App"><Text>Loading... </Text></View>;
  // }
  return (
    <Provider store={Store}>

      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          style={styles.webNavBar} // not working
          screenOptions={({navigation}) => ({
            headerRight: () => (
              <Button
                title="Cart"
                onPress={() => navigation.navigate("Cart")}
              />
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
  /////////////OLD LOGIC//////////////
  //variables

  // const view = viewHistory[viewHistory.length - 1];
  // console.log("Current view: ", view);

  // const transition = function (newView, replace) {
  //   const oldHistory = [...viewHistory];

  //   if (replace) {
  //     oldHistory.pop();
  //   }

  //   setViewHistory([...oldHistory, newView]);
  // };

  // const back = function () {
  //   const oldHistory = [...viewHistory];
  //   if (oldHistory.length !== 1) {
  //     oldHistory.pop();
  //   }
  //   setViewHistory(oldHistory);
  // };

  //useEffects
  //axios request to get all products
//   useEffect(() => {
//     axios
//       .get("http://localhost:3000/products")
//       .then(prods => setProducts(prods.data.products));
//   }, []);
//   console.log(products);

//   //App return
//   return (
//     <View style={styles.container}>
//       {view === "HOME" && (
//         <Home
//           products={products}
//           transition={transition}
//           back={back}
//           view={view}
//           setViewHistory={setViewHistory}
//         ></Home>
//       )}
//       {view === "PRODUCTS" && <ProductList products={products}></ProductList>}
//       {view === "MAP" && device === "web" && <WebMap />}
//       {view === "MAP" && device === "mobile" && <Map />}
//       <StatusBar style="auto" />
//     </View>
//   );
// }

//   //App return
//   return (
//     <StripeProvider publishableKey="pk_test_51NDgmwLv74N28uF2MxWf6liIv4DqMJcIagTtcT1BAymIJEkX1gaky4i9nLLfmfALffHmN32aiXmRrSiPAcmn0wOP00ONBP6Dfx">
//       <View style={styles.container}>
//         {view === "HOME" && (
//           <Home
//             products={products}
//             transition={transition}
//             back={back}
//             view={view}
//             setViewHistory={setViewHistory}
//           ></Home>
//         )}
//         {view === "STRIPE" && <Stripe />}
//         {view === "PRODUCTS" && <ProductList products={products}></ProductList>}
//         {view === "MAP" && device === "web" && <WebMap />}
//         {view === "MAP" && device === "mobile" && (
//           <Map
//             transition={transition}
//             viewHistory={viewHistory}
//             setviewHistory={setViewHistory}
//           />
//         )}
//         <StatusBar style="auto" />
//       </View>
//     </StripeProvider>
//   );
// }