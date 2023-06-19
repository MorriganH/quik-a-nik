import { Platform, StyleSheet } from "react-native";

const device = Platform.OS;
let styles;

if (device === "web") {
  styles = StyleSheet.create({
    list: {
      display: "flex",
      justifyContent: "space-between",
      alignSelf: "center",
      alignItems: "center",
      flex: 1,
      overflow: "hidden",
      marginBottom: 40,
    },
    add: {
      display: "flex",
      fontSize: 18,
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      backgroundColor: "#55bb55",
      width: 150,
      height: 30,
      textAlign: "center",
      borderRadius: 5,
      marginTop: 20
    },

    item: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "white",
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      borderRadius: 10,
      // width: "30%",
      shadowColor: "grey",
      shadowOffset: { width: 3, height: 3 },
      shadowRadius: 10,
      width: 300,
      // height: 150
    },

    logo: {
      width: 100,
      height: 100,
      marginRight:20
    },

    title: {
      fontSize: 32,
    },

    subtitle: {
      fontSize: 20,
    },

    prodInfo: {
      display: "flex",
      // alignSelf: "flex-end",
      alignItems: 'space-between',
      flexDirection: "column",
      // padding: 10,
    },

    prodName: {
      width: 140,
      fontSize: 20,
      height: 50
    },

    activityIndicator: {
      flex: 1,
      justifyContent: "center",
      flexDirection: "row",
      justifyContent: "space-around",
      padding: 10,
    },

    modal: {
      backgroundColor: "white",
      display: "flex",
      height: "95%",
      width: 550,
      alignSelf: "center",
      marginTop: 25,
      borderRadius: 25,
      overflow: "hidden",
    },

    closeModal: {
      fontSize: 45,
      fontWeight: "bold",
      color: "white",
      textShadowColor: "black",
      textShadowOffset: {height: 3, width: 1},
      borderRadius: 25,
      paddingBottom: 15,


    },

    modalOrderBanner: {
      fontSize: 15,
      alignSelf: "center",
      textAlign: "center",
      marginTop: 10,
      paddingBottom: 5,
      paddingTop: 5,
      backgroundColor: "white",
      borderRadius: 12,
      width: "100%",
    },

    modalHeader: {
      backgroundColor: "#89cc7e",
      paddingLeft: 25,
      paddingRight: 25,
      paddingTop: 25,
      paddingBottom: 10,
      height: 500,
      width: 550,
    },

    modalProductName: {
      color: "#1e1f22",
      fontWeight: "bold",
      fontSize: 25,
      margin: 15,
    },
    description: {
      fontSize: 25,
      margin: 10,
    },

    modalOption: {
      display: "flex",
      flexDirection: "row",
      fontSize: 25,
      paddingLeft: 15,
      paddingBottom: 12,
      paddingTop: 10,
    },

    modalActions: {
      marginTop: 5,
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
      height: 100,
      position: "absolute",
      bottom: 0,
      alignSelf: "center",
      padding: 25,
      width: "100%",
      backgroundColor: "white",
    },

    modalDivider: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 5,
      paddingBottom: 7,
      borderBottomWidth: 1,
      borderColor: "lightgrey",
      width: "95%",
      alignSelf: "center",
    },

    modalQuantity: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
      backgroundColor: "#b24213",
      width: 125,
      borderRadius: 25,
      marginRight: 10,
    },
    modalButton: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
      backgroundColor: "#6ab85d",
      width: 100,
      borderRadius: 25,
      marginRight: 10,
    },
    quantityComponent: {
      fontSize: 20,
      fontWeight: "bold",
      margin: 10,
    },
    modalButtonText: {
      fontSize: 20,
      fontWeight: "bold",
      margin: 10,
    },
  });
}

if (device !== "web") {
  styles = StyleSheet.create({
    list: {
      display: "flex",
      alignItems: "center",
      marginBottom: 60,
      marginTop: 15,
      width: "100%",
    },

    item: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      backgroundColor: "white",
      padding: 20,
      marginVertical: 8,
      borderBottomWidth: 4,
      borderRightWidth: 4,
      borderBottomColor: "rgba(34, 61, 26, 0.5)",
      borderRightColor: "rgba(34, 61, 26, 0.5)",
      borderRadius: 10,
    },
    add: {
      display: "flex",
      fontSize: 18,
      alignItems: "center",
      alignSelf: "flex-end",
      justifyContent: "center",
      color: "white",
      backgroundColor: "#55bb55",
      width: 150,
      height: 30,
      textAlign: "center",
      borderRadius: 5,
      marginTop: 20
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
      height: 60
    },

    activityIndicator: {
      flex: 1,
      justifyContent: "center",
      flexDirection: "row",
      justifyContent: "space-around",
      padding: 10,
    },

    modal: {
      backgroundColor: "white",
      height: "100%",
    },    

    closeModal: {
      fontSize: 25,
      fontWeight: "bold",
      color: "white",
      paddingBottom: 15,
      elevation: 15,
      textShadowColor: "black",
      textShadowOffset: {height: 3, width: 1},

    },

    modalOrderBanner: {
      fontSize: 15,
      alignSelf: "center",
      textAlign: "center",
      marginTop: 10,
      paddingBottom: 5,
      paddingTop: 5,
      backgroundColor: "white",
      borderRadius: 12,
      width: "100%",
    },

    modalHeader: {
      backgroundColor: "#89cc7e",
      paddingLeft: 25,
      paddingRight: 25,
      paddingTop: 25,
      paddingBottom: 10,
      height: 350,
    },

    modalProductName: {
      color: "#1e1f22",
      fontWeight: "bold",
      fontSize: 20,
      margin: 15,
    },
    description: {
      margin: 10,
      fontSize: 25,
    },

    modalOption: {
      display: "flex",
      flexDirection: "row",
      fontSize: 25,
      paddingLeft: 15,
      paddingBottom: 12,
      paddingTop: 10,
    },

    modalActions: {
      marginTop: 5,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      height: 100,
      position: "absolute",
      bottom: 0,
      alignSelf: "center",
      padding: 25,
      width: "100%",
      backgroundColor: "white",
    },

    modalDivider: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 5,
      paddingBottom: 7,
      borderBottomWidth: 1,
      borderColor: "lightgrey",
      width: "95%",
      alignSelf: "center",
    },

    modalQuantity: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
      backgroundColor: "#b24213",
      width: 125,
      borderRadius: 25,
    },
    modalButton: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
      backgroundColor: "#6ab85d",
      width: 125,
      borderRadius: 25,
    },
    quantityComponent: {
      fontSize: 20,
      fontWeight: "bold",
      margin: 10,
    },
    modalButtonText: {
      fontSize: 20,
      fontWeight: "bold",
      margin: 10,
    },
  });
}

export default styles;
