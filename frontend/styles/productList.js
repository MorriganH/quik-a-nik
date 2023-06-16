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
    // prod: {
    //   // border: "solid",
    //   padding: 5,
    //   margin: 5,
    //   width: "30%",
    // },

    // container: {
    //   flex: 1,
    // },
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
      // width: '33%'
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
      backgroundColor: "grey",
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
      height: 1
    },
    modalUsername: {
      color: "white",
      fontWeight: "bold",
      fontSize: 25
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
    modalDivider: {
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
