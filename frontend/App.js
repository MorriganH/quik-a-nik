import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import * as Device from 'expo-device';
import styles from "./styles";
import Android from "./components/android";
import Web from "./components/web";


export default function App() {
  

  return (
    <View style={styles.container}>
      <Text style={styles.bigText}>Juniper Xenoblade</Text>
      <Image
        style={styles.logo}
        source={require("./assets/Juniper_Twitter_Art.webp")}
      />

      <Text>Running on {Device.osName}</Text>
      {Device.osName === 'Android' && <Android />}
      {Device.osName === 'Windows' || Device.osName === 'iOS' && <Web />}
      <StatusBar style="auto" />
    </View>
  );
}

