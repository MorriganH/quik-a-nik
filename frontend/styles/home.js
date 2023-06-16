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
      height: 35
      
      
    },
    modalHeader: {
      backgroundColor :"#89cc7e",
      paddingLeft: 25,
      paddingRight: 25,
      paddingTop: 25,
      paddingBottom: 10,
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
      paddingBottom: 7,
      borderBottomWidth: 1,
      borderColor: "lightgrey",
      width: "95%",
      alignSelf: "center"


    }



    
  });
}

export default styles;
