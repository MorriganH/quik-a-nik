import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Text,
  Pressable,
  View,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import key from "../api_key";
import * as Location from "expo-location";
import styles from "../styles/confirmationWeb";
import { trackDelivery } from "../helpers/confirmation";
import axios from "axios";
import tunnelURL from "../backend_tunnel";
import { formatOrderId, formatPrice } from "../helpers/orders";

export default function ConfirmationWeb({ navigation }) {
  const { locationInfo, userSession, cart } = useSelector(
    (state) => state.reducer
  );
  const order = { locationInfo, userSession, cart };

  console.log("cart: ", cart);
  console.log("locationInfo: ", locationInfo);
  console.log("userSession: ", userSession);

  const [location, setLocation] = useState({
    coords: { latitude: 0, longitude: 0 },
  });
  const [markerPos, setMarkerPos] = useState(location);
  const [errorMsg, setErrorMsg] = useState(null);

  const [deliveryStatus, setDeliveryStatus] = useState(1);
  const [deliveryString, setDeliveryString] = useState("");
  const [recentOrder, setrecentOrder] = useState(null);

  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: key,
  });

  //Call to backend to grab new Order ID and price
  const fetchrecentOrder = (userId) => {
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
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      setLocation({
        coords: {
          latitude: locationInfo.latitude,
          longitude: locationInfo.longitude,
        },
      });
      setMarkerPos({
        latitude: locationInfo.latitude,
        longitude: locationInfo.longitude,
      });
    })();

    // trackDelivery returns the current intervalStatus and stores it in a variable
    const intervalId = trackDelivery(setDeliveryStatus, setDeliveryString);

    //fetch the most recent order for the user
    fetchrecentOrder(1);

    // Return function to clear the interval when the component is unmounted to prevent memory leak
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  let text = "Waiting..";
  // save either error message or JSON location data (in string format) in 'text' variable
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  if (loadError) {
    return <Text>Map cannot be loaded</Text>;
  }

  function LineItem({ item }) {
    return (
      <View style={styles.lineItemContainer}>
        <Text style={styles.lineItemName}>{`${item.name} (x${item.default_quantity})`}</Text>
        {/* <Text style={styles.lineItemQuantity}>{item.default_quantity}</Text> */}
      </View>
    );
  }

  return recentOrder ? (
    <>
      <View style={styles.container}>
        <GoogleMap
          mapContainerStyle={styles.mapWindow}
          center={{
            lat: location.coords.latitude,
            lng: location.coords.longitude,
          }}
          zoom={13}
          onClick={(ev) => {
            updateMarker(ev);
          }}
        >
          <Marker
            position={{
              lat: markerPos.latitude,
              lng: markerPos.longitude,
            }}
          />
        </GoogleMap>
        <View style={styles.orderSummary}>
          <View>
            <Text style={styles.title}>Thanks For Your Order!</Text>
            <Text style={styles.subtitle}>Your Basket Is On It's Way</Text>
          </View>
          <View style={styles.order}>
            <Text style={styles.orderId}>Order ID: {formatOrderId(recentOrder.id)}</Text>
            <FlatList
              data={cart}
              renderItem={({ item }) => <LineItem item={item} />}
              keyExtractor={(item) => item.name}
            />
            <Text>Total: {formatPrice(recentOrder.total_price_cents)}</Text>
          </View>
            <Text style={styles.orderStatus}>Order Status:</Text>
          <View style={styles.orderTracker}>
            <Text style={styles.infoText}>{deliveryString}</Text>
            {deliveryString !== "Delivered. Enjoy!!" && (
              <ActivityIndicator
                size="large"
                color="#00ff00"
                style={styles.activityIndicator}
              />
            )}
          </View>

          <Pressable
            style={styles.checkoutButton}
            onPress={() => navigation.navigate("OrderList")}
          >
            <Text style={styles.buttonText}>View Your Orders</Text>
          </Pressable>
        </View>
      </View>
    </>
  ) : (
    <ActivityIndicator
      size="large"
      color="#00ff00"
      style={styles.activityIndicator}
    />
  );
}
