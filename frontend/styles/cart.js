import { StyleSheet } from "react-native";
import { Platform } from "react-native";

const device = Platform.OS;
let styles;

if (device === "web") {
  styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "row",
      alignItems: "space-between",
      width: 950,
      alignSelf: "center",
      marginTop: 10,
    },
    image: {
      height: 100,
      width: 100,
      margin: 5,
    },
    missingImage: {
      height: 100,
      width: 100,
      margin: 5,
      alignSelf: "center",
      marginBottom: 15
    },

    box: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#F5FCFF",
      borderRadius: 15,
    },

    item: {
      backgroundColor: "white",
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      borderRadius: 10,
      shadowColor: "grey",
      shadowOffset: { width: 3, height: 3 },
      shadowRadius: 10,
      minWidth: 530,
    },
    missingItem: {
      display: "flex",
      backgroundColor: "white",
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      borderRadius: 10,
      shadowColor: "grey",
      shadowOffset: { width: 3, height: 3 },
      shadowRadius: 10,
      width: 950,
      alignSelf: "center",
      textAlign: "center",
      justifyItems: "center"
    },
    total: {
      backgroundColor: "white",
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      borderRadius: 10,
      shadowColor: "grey",
      shadowOffset: { width: 3, height: 3 },
      shadowRadius: 10,
      width: 350,
      height: 250,
    },

    submitButton: {
      borderWidth: 1,
      padding: 10,
      margin: 10,
      borderRadius: 5,
      backgroundColor: "#55bb55",
      width: "auto",
      textAlign: "center",
    },

    lineItem: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      marginLeft: 15,
      marginRight: 15,
    },
    divider: {
      borderTopWidth: 1,
      borderColor: "lightgrey",
      marginTop: 5,
      paddingTop: 5,
    },
    orderTotal: {
      fontSize: 20,
      fontWeight: "bold",
      color: "#ce4216",
      marginTop: 5,
    },
    quantityControls: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
      borderBottomWidth: 1,
      borderBottomColor: "lightgrey",
    },
    containerFlow: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      flexShrink: 1,
    },
    containerEnd: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
    },
    containerMid: {
      display: "flex",
      justifyContent: "space-between",
    },

    list: {},
    title: {
      fontSize: 20,
      fontWeight: "bold",
    },
    description: {
      marginTop: 5,
      display: "flex",
      width: 300,
    },
    link: {
      color: "#ce4216",
      textDecorationLine: "underline",
      fontWeight: "bold"
    },
    quantityComponent: {
      fontSize: 20,
      fontWeight: "bold",
      marginLeft: 10,
    },
  });
} else {
  styles = StyleSheet.create({
    container: {
      display: "flex",
      width: "99%",
      alignSelf: "center",
      marginTop: 10,
    },
    image: {
      height: 100,
      width: 100,
      margin: 5,
    },
    missingImage: {
      height: 100,
      width: 100,
      margin: 5,
      alignSelf: "center",
      marginBottom: 15
    },

    box: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#F5FCFF",
      borderRadius: 15,
    },

    item: {
      backgroundColor: "white",
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      borderRadius: 10,
      shadowColor: "grey",
      shadowOffset: { width: 3, height: 3 },
      shadowRadius: 10,
      height: "auto",
    },
    missingItem: {
      display: "flex",
      lignItems: "center",
      backgroundColor: "white",
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      borderRadius: 10,
      shadowColor: "grey",
      shadowOffset: { width: 3, height: 3 },
      shadowRadius: 10,
      width: "80%",
      alignSelf: "center",
      textAlign: "center"

    },
    total: {
      backgroundColor: "white",
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      borderRadius: 10,
      shadowColor: "grey",
      shadowOffset: { width: 3, height: 3 },
      shadowRadius: 10,
      height: 250,
    },

    submitButton: {
      borderWidth: 1,
      padding: 10,
      margin: 10,
      borderRadius: 5,
      backgroundColor: "#55bb55",
      width: "auto",
      textAlign: "center",
    },

    lineItem: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      marginLeft: 15,
      marginRight: 15,
    },
    divider: {
      borderTopWidth: 1,
      borderColor: "lightgrey",
      marginTop: 5,
      paddingTop: 5,
    },
    orderTotal: {
      fontSize: 20,
      fontWeight: "bold",
      color: "#ce4216",
      marginTop: 5,
    },
    quantityControls: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      marginTop: 10,
    },
    quantityComponent: {
      fontSize: 20,
      fontWeight: "bold",
      marginLeft: 20,
    },
    containerFlow: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      flexShrink: 1,
    },
    containerEnd: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
    },
    containerMid: {
      display: "flex",
      justifyContent: "space-between",
    },

    list: {},
    title: {
      fontSize: 14,
      fontWeight: "bold",
    },
    description: {
      marginTop: 5,
      display: "flex",
      maxWidth: 150,
    },
    link: {
      color: "#ce4216",
      textDecorationLine: "underline",
      fontWeight: "bold",
      alignSelf: "center"
    },
  });
}

export default styles;
