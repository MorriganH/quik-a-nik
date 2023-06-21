import React, { useState, useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Text,
  TextInput,
  Pressable,
  View,
  ActivityIndicator,
  Modal,
  TouchableOpacity,
} from "react-native";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import key from "../api_key";
import * as Location from "expo-location";
import styles from "../styles/webMap";
import { setLocationInfo, toggleModal } from "../redux/actions";
import Stripe from "./Stripe";

export default function Map({ navigation }) {
  const { locationInfo, modalShow } = useSelector((state) => state.reducer);
  const dispatch = useDispatch();

  const [location, setLocation] = useState({
    coords: { latitude: 0, longitude: 0 },
  });
  const [markerPos, setMarkerPos] = useState(location);
  const [errorMsg, setErrorMsg] = useState(null);
  const [locationDetails, setLocationDetails] = useState("");
  //const [showStripeWeb, setShowStripeWeb] = useState(false);

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
    const { longitude, latitude } = markerPos.coords;
    const input = { longitude, latitude, locationDetails };
    dispatch(setLocationInfo(input));
    // navigation.navigate("Stripe");
    dispatch(toggleModal(null, "stripeWebModal"));
  };

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
              lat: markerPos.coords.latitude,
              lng: markerPos.coords.longitude,
            }}
            draggable
            onDragEnd={(ev) => {
              updateMarker(ev);
            }}
          />
        </GoogleMap>
        <View>
          <Text style={styles.title}>Set Location</Text>
          <Text style={styles.subtitle}>
            Let Us Know Exactly Where You'll Be
          </Text>
          <Text
            style={styles.infoText}
          >{`Please provide us with some more details so we can find you`}</Text>
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
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalShow === "stripeWebModal"}
        >
          <View
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              width: "100%",
              height: "100%",
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Stripe navigation={navigation} />
                <View style={styles.closeButtonContainer}>
                  <TouchableOpacity onPress={() => dispatch(toggleModal(""))}>
                    <Text style={styles.closeModal}>⨉</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </Modal>
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
