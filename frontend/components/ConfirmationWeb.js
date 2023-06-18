import React, { useState, useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Text,
  TextInput,
  Pressable,
  View,
  ActivityIndicator,
} from "react-native";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import key from "../api_key";
import * as Location from "expo-location";
import styles from "../styles/webMap";
import { setLocationInfo } from "../redux/actions";
import { trackDelivery } from "../helpers/confirmation";

export default function ConfirmationWeb({ navigation }) {
  const { locationInfo } = useSelector((state) => state.reducer);
  console.log("ConfirmationWeb locationInfo: ", locationInfo); //REMOVE THIS
  const dispatch = useDispatch();

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
    //trackDelivery returns the current interval and stores in variable
    const interval = trackDelivery(setDeliveryStatus, setDeliveryString);
    
    // return function to clear interval, preventing memory leak
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
      <Text style={styles.title}>Order Successful!</Text>
      <Text style={styles.subtitle}>Your Basket Is On It's Way</Text>
      <View style={styles.container}>
        <Text>{deliveryString}</Text>
        {deliveryString !== "Order Status: Delivered. Enjoy!!" &&     <ActivityIndicator
      size="large"
      color="#00ff00"
      style={styles.activityIndicator}
    />}
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

        <Pressable
          style={styles.checkoutButton}
          onPress={() => navigation.navigate("OrderList")}
        >
          <Text style={styles.buttonText}>View Your Orders</Text>
        </Pressable>
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
