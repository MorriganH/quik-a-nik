//REACT
import React, { useState, useEffect } from "react";
import {
  Text,
  Pressable,
  View,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { useSelector } from "react-redux";

//EXPO
import * as Location from "expo-location";

//HELPER FUNCTIONS
import { trackDelivery } from "../helpers/confirmation";
import { formatOrderId, formatPrice } from "../helpers/orders";

//APIs
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import key from "../api_key";
import styles from "../styles/confirmation";

//NETWORKING
import axios from "axios";
import tunnelURL from "../backend_tunnel";

export default function ConfirmationWeb({ route, navigation }) {
  //STATES
  const { locationInfo, userSession } = useSelector((state) => state.reducer);
  const [location, setLocation] = useState({
    coords: { latitude: 0, longitude: 0 },
  });
  const [markerPos, setMarkerPos] = useState(location);
  const [errorMsg, setErrorMsg] = useState(null);
  const order = { locationInfo, userSession, cart };
  const [deliveryStatus, setDeliveryStatus] = useState(1);
  const [deliveryString, setDeliveryString] = useState("");
  const [recentOrder, setrecentOrder] = useState(null);
  const cart = route.params.cart;

  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: key,
  });

  //AXIOS CALL TO SERVER FETCHES ORDER DATA
  const fetchRecentOrder = (userId) => {
    axios
      .get(`${tunnelURL}/orders/new/${userSession.id}`)
      .then((response) => {
        const orderData = response.data.orders;

        if (orderData) {
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

  //useEffect sets location and user variables after render
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
    fetchRecentOrder(userSession.id);

    // Return function to clear the interval when the component is unmounted to prevent memory leak
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  //Handle map render errors
  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  if (loadError) {
    return <Text>Map cannot be loaded</Text>;
  }

  //Build item component for FlatList
  function LineItem({ item }) {
    return (
      <View style={styles.lineItemContainer}>
        <Text
          style={styles.lineItem}
        >{`${item.name} (x${item.default_quantity})`}</Text>
      </View>
    );
  }

  //RETURN
  //Check recentOrder state, returns ActivityIndicator if falsy, view component if truthy
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
          <View style={styles.header}>
            <Text style={styles.title}>Thanks For Your Order!</Text>
            <Text style={styles.subtitle}>Your Basket Is On It's Way</Text>
          </View>
          <View style={styles.order}>
            <Text style={styles.orderId}>
              Order ID: {formatOrderId(recentOrder.id)}
            </Text>
            <FlatList
              data={cart}
              renderItem={({ item }) => <LineItem item={item} />}
              keyExtractor={(item) => item.name}
            />
            <Text style={styles.orderTotal}>
              Total: {formatPrice(recentOrder.total_price_cents)}
            </Text>
          </View>
          <View style={styles.orderTracker}>
            <Text style={styles.orderStatus}>Order Status:</Text>
            <Text style={styles.statusString}>{deliveryString}</Text>
            {deliveryString !== "Delivered. Enjoy!!" && (
              <ActivityIndicator
                size="large"
                color="#00ff00"
                style={styles.activityIndicator}
              />
            )}
          </View>

          <Pressable
            style={styles.myOrdersButton}
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
