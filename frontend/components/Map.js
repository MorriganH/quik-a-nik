import { useState, useCallback } from "react";
import { Text, StyleSheet } from "react-native";
import MapView from "react-native-maps";
import * as Device from 'expo-device'
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import key from "../api_key";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

export default function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: key,
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  if (Device.osName === "Windows" || Device.osName === "Mac OS") {
    
    return isLoaded ? (
      <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
      >
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <></>
    );
  }
  if (Device.osName === "Android") {
    return (<MapView
      style={styles.map}
      provider="google"
      googleMapsApiKey={key}
      loadingFallback={<Text>Loading...</Text>}
    />)
  }
}

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
});
