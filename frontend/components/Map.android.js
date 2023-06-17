import { useState, useCallback, useEffect } from "react";
import {
  Text,
  View,
  TextInput,
  Pressable,
  ActivityIndicator,
  Modal,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import MapView, { Marker } from "react-native-maps";
import key from "../api_key";
import * as Location from "expo-location";
import styles from "../styles/map";
import { setLocationInfo } from "../redux/actions";
import StripeMobile from "./Stripe.android";

export default function Map({ navigation }) {
  const dispatch = useDispatch();
  const [showStripeMobile, setShowStripeMobile] = useState(false);

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [markerPosition, setMarkerPosition] = useState(null);
  const [locationDetails, setLocationDetails] = useState("");

  // grab device location using expo-location
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();

      // if location permission not granted by user, return error
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      // Capture current location
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setMarkerPosition(location.coords);
    })();
  }, []);

  let text = "Waiting..";
  // save either error message or JSON location data (in string format) in 'text' variable
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  //Set new markerPosition state onPress of map
  const handlePress = (event) => {
    setMarkerPosition(event.nativeEvent.coordinate);
  };

  const checkoutConfirmation = function (markerPosition, locationDetails) {
    const input = { markerPosition, locationDetails };
    dispatch(setLocationInfo(input));
    setShowStripeMobile(true);
    // navigation.navigate("Stripe");
  };

  return (
    // short circuit triggers re-render of component once location truthy

    location ? (
      <View style={styles.container}>
        <Text style={styles.title}>Set Location</Text>
        <Text style={styles.subtitle}>Let Us Know Exactly Where You'll Be</Text>
        <MapView
          style={styles.map}
          provider="google"
          googleMapsApiKey={key}
          loadingFallback={<Text>Loading...</Text>}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0115,
            longitudeDelta: 0.0055,
          }}
          onPress={handlePress}
        >
          <Marker coordinate={markerPosition} />
        </MapView>
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
          onPress={() => checkoutConfirmation(markerPosition, locationDetails)}
        >
          <Text style={styles.buttonText}>Proceed to Checkout</Text>
        </Pressable>
        <Modal
          animationType="slide"
          transparent={true}
          visible={showStripeMobile}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.closeButtonContainer}>
                <TouchableOpacity onPress={() => setShowStripeMobile(false)}>
                  <Text style={styles.closeModal}>⨉</Text>
                </TouchableOpacity>
              </View>
              <StripeMobile />
            </View>
          </View>
        </Modal>
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
