import { StyleSheet } from "react-native";
import { Platform } from "react-native";

const styles = StyleSheet.create({
  aboutWrapper: {
    display: "flex",
    flexDirection: "row",
    width: 900,
    alignSelf: "center",
  },
  paragraphWrapper: {
    display: "flex",
    maxWidth: 600

  },
  bearBox: {
    display: "flex",
    alignSelf: 'flex-end'

  },
  paragraph: {
    margin: 10

  },
  qnBear: {
    height: 500,
    width: 250
  }
});

export default styles;
