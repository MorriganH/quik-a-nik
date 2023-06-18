import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Text,
  Pressable,
  View,
  ActivityIndicator,
} from "react-native";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import key from "../api_key";
import * as Location from "expo-location";
import styles from "../styles/confirmationWeb";
import { trackDelivery } from "../helpers/confirmation";
import axios from 'axios';
import tunnelURL from "../backend_tunnel";

export default function ConfirmationWeb({ navigation }) {
  const { locationInfo, userSession, cart } = useSelector((state) => state.reducer);
  const order = { locationInfo, userSession, cart };
  
  console.log("cart: ", cart);
  console.log("locationInfo: ", locationInfo)
  console.log("userSession: ", userSession)

  const fetchRecentOrderId = (userId) => {
    axios.get(`${tunnelURL}/orders/new/1`)
      .then(response => {
        const orderData = response.data.orders;
        console.log("orderData: ",orderData)
  
        if (orderData) {
          const mostRecentOrder = orderData[0];
  
          console.log(`Most recent order ID for user: `, mostRecentOrder.id);
          return mostRecentOrder.id;
        } else {
          console.log(`No orders found for user.`);
          return null;
        }
      })
      .catch(error => {
        console.error(`Error fetching recent order ID: `, error);
      });
  };
  

  fetchRecentOrderId(1);


  const [location, setLocation] = useState({
    coords: { latitude: 0, longitude: 0 },
  });
  const [markerPos, setMarkerPos] = useState(location);
  const [errorMsg, setErrorMsg] = useState(null);

  const [deliveryStatus, setDeliveryStatus] = useState(1);
  const [deliveryString, setDeliveryString] = useState("");

  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: key,
  });

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
  }, []);

  useEffect(() => {
    // trackDelivery returns the current intervalStatus and stores it in a variable
    const intervalId = trackDelivery(setDeliveryStatus, setDeliveryString);

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

  return isLoaded ? (
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
        <View>
          <Text style={styles.title}>Thanks For Your Order!</Text>
          <Text style={styles.subtitle}>Your Basket Is On It's Way</Text>
          <Text>Order Status:</Text>
          <Text style={styles.infoText}>{deliveryString}</Text>
          {deliveryString !== "Delivered. Enjoy!!" && (
            <ActivityIndicator
              size="large"
              color="#00ff00"
              style={styles.activityIndicator}
            />
          )}

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
