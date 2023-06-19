import { Platform, StyleSheet } from "react-native";

const device = Platform.OS;
let styles;

if (device === "web") {
  styles = StyleSheet.create({
    title: {
      fontSize: 24,
      color: "#1b3e17",
      fontWeight: 800,
      margin: "auto",
      marginBottom: "5%",
    },

    container: {
      display: "flex",
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      margin: "auto",
      width: 950,
      backgroundColor: "#f2f2f2",
    },

    flatList: {
      minWidth: "100%",
      maxWidth: "100%",
    },

    orderItem: {
      display: "flex",
      flex: 1,
      width: 450,
      marginBottom: "8%",
      borderWidth: 3,
      borderRadius: 10,
      borderColor: "#1b3e17",
      padding: 10,
      backgroundColor: "white",
      shadowColor: "grey",
      shadowOffset: { width: 3, height: 3 },
      shadowRadius: 10,
    },

    orderId: {
      color: "#1b3e17",
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
      fontWeight: 800,
      color: "#ce4216",
    },

    price: {
      fontWeight: 800,
      color: "black",
    },

    qnBear: {
      height: 500,
      width: 240,
      marginTop: "15%",
      marginLeft: "10%",
    },
  });
}

if (device !== "web") {
  styles = StyleSheet.create({
    title: {
      fontSize: 24,
      color: "#1b3e17",
      fontWeight: 800,
      marginBottom: "5%",
      marginTop: "5%",
      margin: "auto",
      textAlign: "center",
    },

    container: {
      display: "flex",
      flex: 1,
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      margin: "auto",
      minWidth: "90%",
      minHeight: "90%",
      backgroundColor: "#f2f2f2",
    },

    flatList: {
      minWidth: "90%",
      maxWidth: "100%",
    },

    orderItem: {
      display: "flex",
      flex: 1,
      marginBottom: "8%",
      borderWidth: 3,
      borderRadius: 10,
      borderColor: "#1b3e17",
      padding: 10,
      minWidth: "70%",
      maxWidth: "100%",
      backgroundColor: "white",
    },

    orderId: {
      color: "#1b3e17",
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
      fontWeight: 800,
      color: "#ce4216",
    },

    price: {
      fontWeight: 800,
      color: "black",
    },
  });
}

export default styles;
