import React, { useState, useCallback, useEffect, useRef } from "react";
import { Text, StyleSheet } from "react-native";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import key from "../api_key";
import * as Location from "expo-location";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

export default function WebMap() {
  const [location, setLocation] = useState({});
  const [markerPos, setMarkerPos] = useState(location);
  console.log(markerPos)

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
      setMarkerPos(location)
    })();
  }, []);

  const updateMarker = ev => {
    const oldMarkerPos = { ...markerPos };
    setMarkerPos(oldMarkerPos, oldMarkerPos.coords.latitude = ev.latLng.lat(), oldMarkerPos.coords.longitude = ev.latLng.lng())
  };

  if (loadError) {
    return <Text>Map cannot be loaded</Text>;
  }

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={{ lat: location.coords.latitude, lng: location.coords.longitude }}
      zoom={13}
      onClick={ev => {
        updateMarker(ev)
      }}
    >
      <Marker
        position={{
          lat: markerPos.coords.latitude,
          lng: markerPos.coords.longitude,
        }}
        
        draggable
        onDragEnd={ev => {
          updateMarker(ev)
        }}
      />
    </GoogleMap>
  ) : (
    <Text>Loading</Text>
  );
}
