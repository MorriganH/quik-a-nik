import React, { useState, useCallback, useEffect, useRef } from "react";
import { Text, } from "react-native";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import key from "../api_key";
import * as Location from "expo-location";
import styles from '../styles/webMap'

export default function WebMap() {
  const [location, setLocation] = useState({coords: {latitude: 0, longitude: 0}});
  const [markerPos, setMarkerPos] = useState(location);
  const [errorMsg, setErrorMsg] = useState(null);
  console.log("location", location);
  console.log("markerPos", markerPos);

  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: key,
  });

  useEffect(() => {
    (async () => {
      console.log("in the useEffect")
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("bad status")
        setErrorMsg("Permission to access location was denied");
        return;
      }
      console.log("setting location")

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setMarkerPos(location);
    })();
  }, []);

  let text = "Waiting..";
  // save either error message or JSON location data (in string format) in 'text' variable
  if (errorMsg) {
    text = errorMsg;
    console.log(text)
  } else if (location) {
    text = JSON.stringify(location);
  }

  const updateMarker = ev => {
    const oldMarkerPos = { ...markerPos };
    setMarkerPos(
      oldMarkerPos,
      (oldMarkerPos.coords.latitude = ev.latLng.lat()),
      (oldMarkerPos.coords.longitude = ev.latLng.lng())
    );
  };

  if (loadError) {
    return <Text>Map cannot be loaded</Text>;
  }

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={styles.mapWindow}
      center={{ lat: location.coords.latitude, lng: location.coords.longitude }}
      zoom={13}
      onClick={ev => {
        updateMarker(ev);
      }}
    >
      <Marker
        position={{
          lat: markerPos.coords.latitude,
          lng: markerPos.coords.longitude,
        }}
        draggable
        onDragEnd={ev => {
          updateMarker(ev);
        }}
      />
    </GoogleMap>
  ) : (
    <Text>{text}</Text>
  );
}
