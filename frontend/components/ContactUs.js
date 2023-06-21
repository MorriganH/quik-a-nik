//REACT
import { Linking, Pressable, Text, View } from "react-native";

//STYLES
import styles from "../styles/contactUs";

//FUNCTION DEFINITION
export default function ContactUs() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Check out the people who made this app!</Text>
      <View style={styles.person}>
      <Text style={styles.name}>Graydon Richie</Text>
        <Pressable style={styles.link} onPress={() => Linking.openURL('https://www.linkedin.com/in/graydonritchie/')}>
          <Text style={styles.linkText}>-> LinkedIn</Text>
        </Pressable>
        <Pressable style={styles.link} onPress={() => Linking.openURL('https://github.com/SirGraybon')}>
          <Text style={styles.linkText}>-> Github</Text>
        </Pressable>
      </View>
      <View style={styles.person}>
      <Text style={styles.name}>Morrigan Hennessy</Text>
        <Pressable style={styles.link} onPress={() => Linking.openURL('https://www.linkedin.com/in/morrigan-hennessy')}>
          <Text style={styles.linkText}>-> LinkedIn</Text>
        </Pressable>
        <Pressable style={styles.link} onPress={() => Linking.openURL('https://github.com/MorriganH')}>
          <Text style={styles.linkText}>-> Github</Text>
        </Pressable>
      </View>
      <View style={styles.person}>
      <Text style={styles.name}>Viktor Ristic</Text>
        <Pressable style={styles.link} onPress={() => Linking.openURL('https://www.linkedin.com/in/vikristic/')}>
          <Text style={styles.linkText}>-> LinkedIn</Text>
        </Pressable>
        <Pressable style={styles.link} onPress={() => Linking.openURL('https://github.com/vktr-r2')}>
          <Text style={styles.linkText}>-> Github</Text>
        </Pressable>
      </View>
    </View>
  );
}
