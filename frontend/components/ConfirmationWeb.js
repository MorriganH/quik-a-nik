import React, { useState, useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Text, TextInput, Pressable, View, ActivityIndicator } from "react-native";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import key from "../api_key";
import * as Location from "expo-location";
import styles from "../styles/webMap";
import { setLocationInfo } from "../redux/actions";

export default function ConfirmationWeb({ navigation }) {
  const { locationInfo } = useSelector((state) => state.reducer);
  const dispatch = useDispatch();

  const [location, setLocation] = useState({
    coords: { latitude: 0, longitude: 0 },
  });
  const [markerPos, setMarkerPos] = useState(location);
  const [errorMsg, setErrorMsg] = useState(null);

  const [locationDetails, setLocationDetails] = useState("");

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

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setMarkerPos(location);
    })();
  }, []);

  let text = "Waiting..";
  // save either error message or JSON location data (in string format) in 'text' variable
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  const updateMarker = (ev) => {
    const oldMarkerPos = { ...markerPos };
    setMarkerPos(
      oldMarkerPos,
      (oldMarkerPos.coords.latitude = ev.latLng.lat()),
      (oldMarkerPos.coords.longitude = ev.latLng.lng())
    );
  };

  const checkoutConfirmation = function (markerPos, locationDetails) {
    const input = { markerPos, locationDetails };
    dispatch(setLocationInfo(input));
    navigation.navigate("Stripe");
  };

  if (loadError) {
    return <Text>Map cannot be loaded</Text>;
  }

  return  (
    isLoaded ? (
    <>
      <Text style={styles.title}>Order Successful!</Text>
      <Text style={styles.subtitle}>Your Basket Is On It's Way</Text>
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
              lat: markerPos.coords.latitude,
              lng: markerPos.coords.longitude,
            }}
            draggable
            onDragEnd={(ev) => {
              updateMarker(ev);
            }}
          />
        </GoogleMap>
        <Text style={styles.infoText}>{`Please provide us with some more details so we can find you`}</Text>
        <TextInput
          style={styles.locationDetailsInput}
          placeholder="Location Details"
          editable
          multiline
          onChangeText={(text) => setLocationDetails(text)}
          value={locationDetails}
          numberOfLines={5}
          maxLength={255}
        />
        <Pressable
          style={styles.checkoutButton}
          onPress={() => checkoutConfirmation(markerPos, locationDetails)}
        >
          <Text style={styles.buttonText}>Proceed to Checkout</Text>
        </Pressable>
      </View>
    </>
  ) : <ActivityIndicator size="large" color="#00ff00" style={styles.activityIndicator} /> )
}
