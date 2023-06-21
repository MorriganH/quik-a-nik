//REACT
import { Platform, View, Text, Pressable } from "react-native";
import styles from "../styles/home";

//Store user platform in variable
const device = Platform.OS;

//FUNCTION DEFINITION
export default function Footer({ navigation }) {
  //WEB
  if (device !== "web") {
    return (
      <View>
        <View style={styles.footer}>
          <Pressable onPress={() => navigation.navigate("About")} style={styles.footerOptions}>
            <Text>About us</Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate("ContactUs")}
            style={styles.footerOptions}
          >
            <Text>Contact us</Text>
          </Pressable>
        </View>
        <View style={styles.footer}>
          <Pressable style={styles.footerOptions}>
            <Text>Work with us</Text>
          </Pressable>
          <Pressable style={styles.footerOptions}>
            <Text>FAQ</Text>
          </Pressable>
        </View>
        <Text style={styles.buttonTitle}> TeamTBD™</Text>
      </View>
    );
    //ANDROID
  } else {
    return (
      <View style={styles.footer}>
        <Pressable onPress={() => navigation.navigate("About")} style={styles.footerOptions}>
          <Text>About us</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("ContactUs")}
          style={styles.footerOptions}
        >
          <Text>Contact us</Text>
        </Pressable>
        <Pressable style={styles.footerOptions}>
          <Text>Work with us</Text>
        </Pressable>
        <Pressable style={styles.footerOptions}>
          <Text>FAQ</Text>
        </Pressable>
        <Text style={styles.buttonTitle}> TeamTBD™</Text>
      </View>
    );
  }
}
