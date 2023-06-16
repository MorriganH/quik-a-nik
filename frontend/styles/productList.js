import { Platform, StyleSheet } from "react-native";

const device = Platform.OS;
let styles;

if (device === "web") {
  styles = StyleSheet.create({
    list: {
      display: "flex",
      alignItems: "center",
    },

    item: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      backgroundColor: "white",
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      borderRadius: 10,
      width: "30%",
      shadowColor: "grey",
      shadowOffset: { width: 3, height: 3 },
      shadowRadius: 10,
    },

    logo: {
      width: 100,
      height: 100,
    },

    title: {
      fontSize: 32,
    },

    subtitle: {
      fontSize: 20,
    },

    prodInfo: {
      display: "flex",
      flexDirection: "column",
      padding: 10,
    },

    prodName: {
      width: 200,
      fontSize: 24,
    },
  });
}

if (device !== "web") {
  styles = StyleSheet.create({
    list: {
      display: "flex",
      alignItems: "center",
    },

    item: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      backgroundColor: "white",
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      borderRadius: 10,
    },

    itemPressable: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
    },

    logo: {
      width: 100,
      height: 100,
    },

    title: {
      width: 200,
      fontSize: 24,
    },

    prodInfo: {
      display: "flex",
      flexDirection: "column",
      padding: 10,
    },

    prodName: {
      width: 200,
      fontSize: 24,
    },
  });
}

export default styles;
