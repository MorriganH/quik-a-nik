import { Platform, StyleSheet } from "react-native";

const device = Platform.OS;
let styles;

if (device === "web") {
  const styles = StyleSheet.create({
    title: {
      fontSize: 16,
      margin: "2%",
    },

    container: {
      display: "flex",
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      margin: "auto",
      minWidth: "90%",
      minHeight: "90%",
      backgroundColor: "pink",
    },

    flatList: {
      minWidth: "50%",
      maxWidth: "50%",
    },

    orderItem: {
      display: "flex",
      flex: 1,
      marginBottom: "8%",
      borderWidth: 3,
      borderRadius: 10,
      borderColor: "#55bb55",
      padding: 10,
      minWidth: "70%",
      maxWidth: "100%",
      backgroundColor: "#c7edcc",
    },

    orderId: {
      marginBottom: "3%",
      fontWeight: 800,
      textAlign: "center",
    },

    itemList: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      borderBottomWidth: 2,
      borderColor: "#55bb55",
    },

    productText: {
      display: "flex",
      minWidth: "40%",
    },

    qtyText: {
      minWidth: "30%",
    },

    linePriceText: {
      minWidth: "10%",
    },

    location: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: "3%",
      marginBottom: "2%",
    },

    dateTotal: {
      dispplay: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },

    total: {
      fontWeight: 700,
    },

    price: {
      fontWeight: 400,
    },
  });
}

if (device !== "web") {
  styles = StyleSheet.create({
    title: {
      fontSize: 24,
      fontWeight: 800,
      margin: "2%",
    },

    container: {
      display: "flex",
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      margin: "auto",
      minWidth: "90%",
      minHeight: "90%",
      backgroundColor: "pink",
    },

    flatList: {
      minWidth: "80%",
      maxWidth: "80%",
    },

    orderItem: {
      display: "flex",
      flex: 1,
      marginBottom: "8%",
      borderWidth: 3,
      borderRadius: 10,
      borderColor: "#55bb55",
      padding: 10,
      minWidth: "70%",
      maxWidth: "100%",
      backgroundColor: "#c7edcc",
    },

    orderId: {
      marginBottom: "3%",
      fontWeight: 800,
      textAlign: "center",
    },

    itemList: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      borderBottomWidth: 2,
      borderColor: "#55bb55",
    },

    productText: {
      display: "flex",
      minWidth: "50%",
    },

    qtyText: {
      minWidth: "30%",
      maxWidth: "30%",
    },

    linePriceText: {
      minWidth: "10%",
      maxWidth: "20%",
    },

    location: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: "3%",
      marginBottom: "2%",
    },

    dateTotal: {
      dispplay: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },

    total: {
      fontWeight: 700,
    },

    price: {
      fontWeight: 400,
    },
  })}

export default styles;
