import { Platform, StyleSheet } from "react-native";

const device = Platform.OS;
let styles;

if (device === "web") {
  styles = StyleSheet.create({
    container: {
      backgroundColor: "rgb(242, 242, 242)",
    },

    scrollView: {
      display: "flex",
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },

    bigText: {
      fontSize: 40,
    },

    logo: {
      width: 80,
      height: 80,
    },

    button: {
      display: "flex",
      flex: 1,
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      backgroundColor: "#55bb55",
      borderRadius: 10,
      height: "auto",
      width: "80%",
      padding: 5,
      margin: 5,
      shadowColor: "grey",
      shadowOffset: { width: 3, height: 3 },
      shadowRadius: 10,
    },

    main: {
      display: "flex",
      justifyContent: "flex-start",
      flexDirection: "row",
      width: "80.5%",
      height: 300,
    },

    logoMain: {
      width: 200,
      height: 200,
    },

    buttonMain: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      backgroundColor: "#55bb55",
      borderRadius: 10,
      height: "auto",
      width: "50%",
      padding: 5,
      margin: 5,
      shadowColor: "grey",
      shadowOffset: { width: 3, height: 3 },
      shadowRadius: 10,
    },

    sideMain: {
      width: "60.5%",
    },

    buttonSideMain: {
      display: "flex",
      flex: 1,
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      backgroundColor: "#55bb55",
      borderRadius: 10,
      height: "auto",
      width: "80%",
      padding: 5,
      margin: 5,
      shadowColor: "grey",
      shadowOffset: { width: 3, height: 3 },
      shadowRadius: 10,
    },
  });
}

if (device !== "web") {
  styles = StyleSheet.create({
    container: {
      backgroundColor: "rgb(242, 242, 242)",
      alignItems: "center",
      justifyContent: "center",
    },

    logo: {
      width: 80,
      height: 80,
    },

    logoMain: {
      width: 80,
      height: 80,
    },

    bigText: {
      fontSize: 25,
    },

    button: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      backgroundColor: "#55bb55",
      borderRadius: 10,
      height: 150,
      width: "97%",
      padding: 5,
      margin: 5,
    },

    buttonMain: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      backgroundColor: "#55bb55",
      borderRadius: 10,
      height: 150,
      width: "97%",
      padding: 5,
      margin: 5,
    },

    buttonSideMain: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      backgroundColor: "#55bb55",
      borderRadius: 10,
      height: 150,
      width: "97%",
      padding: 5,
      margin: 5,
    },
  });
}

export default styles;
