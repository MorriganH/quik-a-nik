import { useState, useCallback, useEffect } from "react";
import { Text, StyleSheet } from "react-native";
import MapView, { Marker } from 'react-native-maps';
import * as Device from "expo-device";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import key from "../api_key";
import * as Location from "expo-location";


export default function Map() {
  
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  // grab device location using expo-location
  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();

      // if location permission not granted by user, return error
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      // Capture current location
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  // save either error message or JSON location data (in string format) in 'text' variable
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    
    // short circuit triggers re-render of component once location truthy
    location &&
    (<MapView
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
    >
      <Marker
        coordinate={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        }}
      />
      </MapView>)
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  map: {
    width: "100%",
    height: "100%",
  },
});
