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
    modal: {
      backgroundColor: "white",
      height: "100%"
    
    },

    closeModal: {
      fontSize: 25,
      fontWeight: "bold",
      color: "white",
      paddingBottom: 15
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
      backgroundColor :"#89cc7e",
      paddingLeft: 25,
      paddingRight: 25,
      paddingTop: 25,
      paddingBottom: 10,
      height: 350
 
    },
    modalProductName: {
      color: "#1e1f22",
      fontWeight: "bold",
      fontSize: 25,
      margin: 15
    },
    modalEmail: {
      color: "white",
      fontSize: 15
    },
    modalOption: {
      display: "flex",
      flexDirection: "row",
      fontSize: 25,
      paddingLeft: 15,
      paddingBottom: 12,
      paddingTop: 10

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
      alignSelf: "center"


    },
    modalQuantity: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
      backgroundColor: "grey",
      width: 125,

    }
  });
}

export default styles;
