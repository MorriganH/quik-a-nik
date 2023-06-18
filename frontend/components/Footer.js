import { Platform, View, Text, Pressable } from "react-native";
import styles from "../styles/home";

const device = Platform.OS;

export default function Footer({ navigation }) {
  if (device !== "web") {
    return (
      <View>
        <View style={styles.footer}>
          <Pressable
            onPress={() => navigation.navigate("ContactUs")}
            style={styles.footerOptions}
          >
            <Text>Contact us</Text>
          </Pressable>
          <Pressable style={styles.footerOptions}>
            <Text>About us</Text>
          </Pressable>
        </View>
        <View style={styles.footer}>
          <Pressable style={styles.footerOptions}>
            <Text>Find a park</Text>
          </Pressable>
          <Pressable style={styles.footerOptions}>
            <Text>How we're helping</Text>
          </Pressable>
        </View>
        <Text style={styles.buttonTitle}> TeamTBD™</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.footer}>
        <Pressable
          onPress={() => navigation.navigate("ContactUs")}
          style={styles.footerOptions}
        >
          <Text>Contact us</Text>
        </Pressable>
        <Pressable style={styles.footerOptions}>
          <Text>About us</Text>
        </Pressable>
        <Pressable style={styles.footerOptions}>
          <Text>Find a park</Text>
        </Pressable>
        <Pressable style={styles.footerOptions}>
          <Text>How we're helping</Text>
        </Pressable>
        <Text style={styles.buttonTitle}> TeamTBD™</Text>
      </View>
    );
  }
}
