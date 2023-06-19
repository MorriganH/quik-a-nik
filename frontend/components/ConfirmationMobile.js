import { useState, useEffect } from "react";
import {
  Text,
  View,
  FlatList,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import MapView, { Marker } from "react-native-maps";
import key from "../api_key";
import styles from "../styles/confirmation";
import { trackDelivery } from "../helpers/confirmation";
import axios from "axios";
import tunnelURL from "../backend_tunnel";
import { formatOrderId, formatPrice } from "../helpers/orders";

export default function ConfirmationMobile({ route, navigation }) {
  const { locationInfo, userSession } = useSelector((state) => state.reducer);

  const cart = route.params.cart;
  const order = { locationInfo, userSession, cart };

  const [deliveryStatus, setDeliveryStatus] = useState(1);
  const [deliveryString, setDeliveryString] = useState("");
  const [recentOrder, setrecentOrder] = useState(null);

  const initialRegion = {
    latitude: locationInfo.latitude,
    longitude: locationInfo.longitude,
    latitudeDelta: 0.0115,
    longitudeDelta: 0.0055,
  };

  const fetchRecentOrder = (userId) => {
    axios
      .get(`${tunnelURL}/orders/new/${userSession.id}`)
      .then((response) => {
        const orderData = response.data.orders;
        console.log("orderData: ", orderData);

        if (orderData) {
          //set order fetched to recentOrder state
          const mostRecentOrder = orderData[0];
          setrecentOrder(mostRecentOrder);
        } else {
          console.log(`No orders found for user.`);
          return null;
        }
      })
      .catch((error) => {
        console.error(`Error fetching recent order ID: `, error);
      });
  };

  useEffect(() => {
    // trackDelivery returns the current intervalStatus and stores it in a variable
    const intervalId = trackDelivery(setDeliveryStatus, setDeliveryString);

    //fetch the most recent order for the user
    fetchRecentOrder(userSession.id);

    // Return function to clear the interval when the component is unmounted to prevent memory leak
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function LineItem({ item }) {
    return (
      <View style={styles.lineItemContainer}>
        <Text
          style={styles.lineItemName}
        >{`${item.name} (x${item.default_quantity})`}</Text>
      </View>
    );
  }

  return (
    // short circuit triggers re-render of component once location truthy

    recentOrder ? (
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.title}>Thanks For Your Order!</Text>
          <Text style={styles.subtitle}>Your Basket Is On It's Way</Text>
          <MapView
            style={styles.map}
            provider="google"
            googleMapsApiKey={key}
            loadingFallback={<Text>Loading...</Text>}
            initialRegion={initialRegion}
          >
            <Marker coordinate={initialRegion} />
          </MapView>

          <View style={styles.order}>
            <Text style={styles.orderId}>
              Order ID: {formatOrderId(recentOrder.id)}
            </Text>
            <FlatList
              data={cart}
              renderItem={({ item }) => <LineItem item={item} />}
              keyExtractor={(item) => item.name}
            />
            <Text style={styles.total}>
              Total: {formatPrice(recentOrder.total_price_cents)}
            </Text>
          </View>

          <View style={styles.orderTracker}>
            <Text style={styles.orderStatus}>Order Status:</Text>
            <Text style={styles.statusText}>{deliveryString}</Text>
            {deliveryString !== "Delivered. Enjoy!!" && (
              <ActivityIndicator
                size="large"
                color="#00ff00"
                style={styles.activityIndicator}
              />
            )}
          </View>
        </View>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("OrderList")}
        >
          <Text style={styles.buttonText}>View Your Orders</Text>
        </Pressable>
      </View>
    ) : (
      <ActivityIndicator
        size="large"
        color="#00ff00"
        style={styles.activityIndicator}
      />
    )
  );
}
