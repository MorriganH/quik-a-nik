import { Platform, StyleSheet } from "react-native";

const device = Platform.OS;
let styles;

if (device === "web") {
  styles = StyleSheet.create({
    title: {
      fontSize: 32,
      margin: "auto",
    },

    subtitle: {
      fontSize: 20,
      margin: "auto",
      marginBottom: "25%",
    },

    container: {
      display: "flex",
      flex: 1,
      flexDirection: "row",
      margin: "auto",
      alignItems: "center",
      justifyContent: "space-around",
      backgroundColor: "#F5FCFF",
      width: 950,
      maxHeight: "90%",
      marginBottom: "2%",
    },

    mapWindow: {
      marginTop: "2%",
      width: "50%",
      height: "80%",
      marginBottom: "2%",
    },

    infoText: {
      fontStyle: "italic",
    },

    locationDetailsInput: {
      margin: 20,
      minWidth: "90%",
      borderWidth: 1,
      borderRadius: 5,
      padding: 10,
    },

    checkoutButton: {
      borderWidth: 1,
      padding: 10,
      borderRadius: 5,
      backgroundColor: "#55bb55",
    },

    buttonText: {
      fontWeight: 500,
    },

    activityIndicator: {
      flex: 1,
      justifyContent: "center",
      flexDirection: "row",
      justifyContent: "space-around",
      padding: 10,
    },

    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22,
    },

    orderSummary: {
      display: "flex",
      justifyContent: "space-between",
      height: "80%",
    },

    orderId: {
      fontSize: 14,
      fontWeight: 800,
    },

    order: {
      margin: "auto",
    },

    orderStatus: {
      fontSize: 14,
      fontWeight: 800,
      color: "#ce4216",
    },

    orderTracker: {
      margin: "auto",
    },
  });
}

if (device !== "web") {
  styles = StyleSheet.create({
    title: {
      fontSize: 30,
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "3%",
    },

    subtitle: {
      fontSize: 20,
      marginLeft: "auto",
      marginRight: "auto",
    },

    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      flex: 1,
      height: "100%",
      backgroundColor: "white",
    },

    map: {
      width: "65%",
      height: "35%",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "7%",
      marginBottom: "7%",
      // marginBottom: "3%",
      // margin: "auto",
    },

    statusText: {
      fontStyle: "italic",
      fontSize: 18,
      fontWeight: 500,
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "3%",
    },

    button: {
      borderWidth: 1,
      padding: 10,
      borderRadius: 5,
      backgroundColor: "#55bb55",
      maxWidth: "40%",
      marginLeft: "auto",
      marginRight: "auto",
      alignSelf: "flex-end",
      marginBottom: "10%"
      // margin: "auto",
    },

    buttonText: {
      fontWeight: 500,
      // margin: "auto",
    },

    activityIndicator: {
      flex: 1,
      justifyContent: "center",
      flexDirection: "row",
      justifyContent: "space-around",
      padding: 10,
      marginTop: "8%",
    },

    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      // marginTop: 22
    },

    orderSummary: {
      display: "flex",
      justifyContent: "space-between",
      marginLeft: "auto",
      marginRight: "auto",
    },

    orderId: {
      fontSize: 20,
      fontWeight: 800,
      marginLeft: "auto",
      marginRight: "auto",
      marginBottom: "1%"
    },

    lineItemName: {
      fontStyle: "italic",
      fontSize: 16,
      marginLeft: "auto",
      marginRight: "auto",
    },

    total: {
      fontSize: 16,
      fontWeight: 600,
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "1%",
    },


    order: {
      marginLeft: "auto",
      marginRight: "auto",
      // borderWidth: 1,
      // borderRadius: 10,
      padding: 10,
    },

    orderTracker: {
      minHeight: "20%",
    },

    orderStatus: {
      fontSize: 20,
      fontWeight: 800,
      color: "#ce4216",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "4%",
    },

    orderTracker: {
      marginLeft: "auto",
      marginRight: "auto",
    },
  });
}

export default styles;
