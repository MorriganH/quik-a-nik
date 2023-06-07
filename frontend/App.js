import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import styles from "./styles";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.bigText}>Juniper Xenoblade</Text>
      <Image
        style={styles.logo}
        source={require("./assets/Juniper_Twitter_Art.webp")}
      />
      <StatusBar style="auto" />
    </View>
  );
}

