import { useState, useCallback, useEffect } from "react";
import { Text, StyleSheet } from "react-native";
import MapView from "react-native-maps";
import * as Device from "expo-device";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import key from "../api_key";
import * as Location from "expo-location";


export default function Map() {

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  console.log(location);

  return (
    
    <MapView
      style={styles.map}
      provider="google"
      googleMapsApiKey={key}
      loadingFallback={<Text>Loading...</Text>}
      initialRegion={{
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
  );
}

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
});
