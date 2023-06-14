import { useState, useCallback, useEffect } from "react";
import { Text, View, TextInput, Pressable } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import MapView, { Marker } from "react-native-maps";
import key from "../api_key";
import * as Location from "expo-location";
import styles from '../styles/map'
import { setLocationInfo } from "../redux/actions";

export default function Map({navigation}) {

  const { locationInfo } = useSelector((state) => state.reducer);
  const dispatch = useDispatch();

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [markerPosition, setMarkerPosition] = useState(null);
  const [locationDetails, setLocationDetails] = useState(''); 

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
    dispatch(setLocationInfo(input))
        navigation.navigate("Android");
  };

  return (
    // short circuit triggers re-render of component once location truthy

    location && (
      <View style={styles.container}>
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
        <Text>{`Please provide us with more details so we can find you\n Example: "In the parking lot beside the ice cream truck" \n or "By the bench beside the duck pond" `}</Text>
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
          <Text>Proceed to Not Payment Details</Text>
        </Pressable>
      </View>
    )
  );
}
