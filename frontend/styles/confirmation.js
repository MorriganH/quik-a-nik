import { Platform, StyleSheet } from "react-native";

const device = Platform.OS;
let styles;

if (device === "web") {
  styles = StyleSheet.create({
    container: {
      display: "flex",
      alignItems: "center",
      flex: 1,
      flexDirection: "row",
      margin: "auto",
      justifyContent: "space-between",
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

    header: {
      marginBottom: "15%",
    },

    title: {
      fontSize: 32,
      margin: "auto",
    },

    subtitle: {
      fontSize: 20,
      margin: "auto",
    },

    orderSummary: {
      display: "flex",
      flex: 1,
      padding: 10,
      justifyContent: "space-between",
    },

    order: {
      alignItems: "flex-start",
    },

    orderId: {
      fontSize: 14,
      fontWeight: 800,
    },

    ineItemContainer: {},

    lineItem: {},

    orderTotal: {},

    orderTracker: {
      alignItems: "center",
      marginTop: "10%%",
      marginBottom: "10%",
      marginLeft: "10%",
      marginRight: "10%",
      borderWidth: 1,
      borderRadius: 10,
      shadowColor: "grey",
      shadowOffset: { width: 3, height: 3 },
      shadowRadius: 10,
      minHeight: "22%",
      maxHeight: "22%",
      maxWidth: "75%",
    },

    orderStatus: {
      fontSize: 14,
      fontWeight: 800,
      color: "#ce4216",
    },

    statusString: {
      fontStyle: "italic",
    },

    myOrdersButton: {
      alignSelf: "center",
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
  });
}

if (device !== "web") {
  styles = StyleSheet.create({
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
      marginBottom: "4%",
      // marginBottom: "3%",
      // margin: "auto",
    },

    header: {
      // marginBottom: "15%",
    },

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

    orderSummary: {
      display: "flex",
      justifyContent: "space-between",
      marginLeft: "auto",
      marginRight: "auto",
    },

    order: {
      // alignItems: "flex-start",
    },

    orderId: {
      fontSize: 20,
      fontWeight: 800,
      marginLeft: "auto",
      marginRight: "auto",
      marginBottom: "1%",
    },

    ineItemContainer: {},

    lineItem: {},

    orderTotal: {},

    statusString: {
      fontStyle: "italic",
      fontSize: 18,
      fontWeight: 500,
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "3%",
    },

    myOrdersButton: {
      borderWidth: 1,
      padding: 10,
      borderRadius: 5,
      backgroundColor: "#55bb55",
      maxWidth: "40%",
      marginLeft: "auto",
      marginRight: "auto",
      alignSelf: "flex-end",
      marginBottom: "10%",
      // margin: "auto",
    },

    buttonText: {
      fontWeight: 500,
      // margin: "auto",
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
      padding: 10,
    },

    orderTracker: {
      marginTop: "4%",
      marginBottom: "2%",
      marginLeft: "auto",
      marginRight: "auto",
      height: 130,
      width: "80%",
      borderWidth: 1,
      borderRadius: 10,
      borderBottomWidth: 4,
      borderRightWidth: 4,
      borderRadius: 10,
      borderBottomColor: "#223d1a",
      borderRightColor: "#223d1a",
    },

    orderStatus: {
      fontSize: 20,
      fontWeight: 800,
      color: "#ce4216",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "4%",
    },

    myOrdersButton: {
      borderWidth: 1,
      padding: 10,
      borderRadius: 5,
      backgroundColor: "#55bb55",
      maxWidth: "40%",
      marginLeft: "auto",
      marginRight: "auto",
      alignSelf: "flex-end",
      marginBottom: "10%",
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
      padding: 8,
      marginTop: "6%",
    },

    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      // marginTop: 22
    },
  });
}

export default styles;
