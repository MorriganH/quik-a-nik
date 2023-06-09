
import React, { useState, useCallback, useEffect } from "react";
import { Text, StyleSheet } from "react-native";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import key from "../api_key";
import * as Location from 'expo-location'

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

export default function WebMap() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null)

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
  
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: key,
  });
  
  const [map, setMap] = useState(null);
  
  const onLoad = useCallback(async function callback(map) {
    await location;
    const bounds = new window.google.maps.LatLngBounds({lat: location.coords.latitude, lng: location.coords.longitude});
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  const onDragEnd = event => {
    // event.nativeEvent.coordinate
    console.log(event.domEvent)
  }

  return isLoaded ? (
    location &&
    (<GoogleMap
      mapContainerStyle={containerStyle}
      center={{lat: location.coords.latitude, lng: location.coords.longitude}}
      zoom={12}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <><Marker position={{lat: location.coords.latitude, lng: location.coords.longitude}} draggable onDragEnd={() => console.log(this.status)} /></>
    </GoogleMap>)
  ) : (
    <></>
  );
}