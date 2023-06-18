import { Platform, StyleSheet } from "react-native";

const device = Platform.OS;
let styles;

if (device === "web") {
  styles = StyleSheet.create({
    container: {
      flex: 1
,      backgroundColor: "#f0f0f0",
      alignItems: "center",
      justifyContent: "center",
    },

    iconsHolder: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      paddingRight: 20,
      paddingLeft: 20,
      marginBottom: 15,
    },
    webColumn: {
      width: 475,
    },

    icons: {
      height: 100,
      width: 100,
      borderRadius: 50,
      overflow: "hidden",
      // backgroundColor: "pink",
    },
    iconsGroup: {
      display: "flex",
      // flexDirection: "column",
      // justifyContent: "space-between"
    },
    iconsLabel: {
      alignSelf: "center",
    },

    footer: {
      position: "fixed",
      bottom: 0,
      flexDirection: "row",
      justifyContent: "space-between",
      backgroundColor: "grey",
      width: "100%"
    },
    footerOptions: {
      display: "flex",
      height: 50,
      width: 195,
      backgroundColor: "grey",
      borderRadius: 10,
      textAlign: "center",
      justifyContent: "center",
      alignItems: "center",
    },

    scrollView: {
      display: "flex",
      // flex: 1,
      flexDirection: "row",
      paddingTop: 25,
      paddingBottom: 45,
    },

    logo: {
      width: 80,
      height: 80,
      borderRadius: 10,
    },
    logoTest: {
      width: "100%",
      height: "100%",
      borderRadius: 10,
    },

    logoMain: {
      width: 300,
      height: 150,
      borderRadius: 10,
    },

    mainTitle: {
      fontSize: 40,
      paddingLeft: 20,
    },

    buttonTitle: {
      fontSize: 15,
      marginLeft: 10,
      marginBottom: 10,
    },

    button: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      // backgroundColor: "#55bb55",
      borderRadius: 10,
      height: 200,
      // width: "97%",
      // padding: 5,
      margin: 5,
      overflow: "hidden",
    },

    spotlightButton: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      // backgroundColor: "#55bb55",
      borderRadius: 10,
      height: 250,
      // width: "97%",
      // padding: 5,
      margin: 5,
      overflow: "hidden",
    },

    buttonMain: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      backgroundColor: "none",
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
      height: "100%",
    },

    closeModal: {
      fontSize: 25,
      fontWeight: "bold",
      color: "white",
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
      height: 35,
    },

    modalHeader: {
      backgroundColor: "#89cc7e",
      paddingLeft: 25,
      paddingRight: 25,
      paddingTop: 25,
      paddingBottom: 10,
    },

    modalUsername: {
      color: "white",
      fontWeight: "bold",
      fontSize: 25,
    },

    modalEmail: {
      color: "white",
      fontSize: 18,
    },

    modalButton: {
      backgroundColor: "none",
    },

    modalOption: {
      display: "flex",
      flexDirection: "row",
      backgroundColor: "#89cc7e",
      borderRadius: 10,
      fontSize: 25,
      marginTop: 15,
      paddingLeft: 15,
      paddingBottom: 12,
      paddingTop: 10,
    },

    modalSubOption: {
      display: "flex",
      flexDirection: "row",
      backgroundColor: "#89cc7e",
      width: "95%",
      alignSelf: "center",
      borderRadius: 10,
      fontSize: 25,
      marginTop: 15,
      paddingLeft: 15,
      paddingBottom: 12,
      paddingTop: 10,
    },

    modalDivider: {
      marginTop: 5,
      paddingBottom: 15,
      borderBottomWidth: 4,
      borderColor: "lightgrey",
      width: "95%",
      alignSelf: "center",
    },
  });
}

if (device !== "web") {
  styles = StyleSheet.create({
    container: {
      backgroundColor: "#f0f0f0",
      alignItems: "center",
      justifyContent: "center",
    },

    iconsHolder: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      paddingRight: 20,
      paddingLeft: 20,
      marginBottom: 15,
    },

    icons: {
      height: 100,
      width: 100,
      borderRadius: 50,
      overflow: "hidden",
      // backgroundColor: "pink",
    },
    iconsGroup: {
      display: "flex",
      // flexDirection: "column",
      // justifyContent: "space-between"
    },
    iconsLabel: {
      alignSelf: "center",
    },

    footer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      paddingRight: 5,
      paddingLeft: 5,
      marginBottom: 15,
    },
    footerOptions: {
      display: "flex",
      height: 50,
      width: 195,
      backgroundColor: "grey",
      borderRadius: 10,
      textAlign: "center",
      justifyContent: "center",
      alignItems: "center",
    },

    scrollView: {
      paddingTop: 25,
      paddingBottom: 45,
    },

    logo: {
      width: 80,
      height: 80,
      borderRadius: 10,
    },
    logoTest: {
      width: "100%",
      height: "100%",
      borderRadius: 10,
    },

    logoMain: {
      width: 300,
      height: 150,
      borderRadius: 10,
    },

    mainTitle: {
      fontSize: 40,
      paddingLeft: 20,
    },

    buttonTitle: {
      fontSize: 15,
      marginLeft: 10,
      marginBottom: 10,
    },

    button: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      // backgroundColor: "#55bb55",
      borderRadius: 10,
      height: 150,
      // width: "97%",
      // padding: 5,
      margin: 5,
      overflow: "hidden",
    },

    spotlightButton: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      // backgroundColor: "#55bb55",
      borderRadius: 10,
      height: 250,
      // width: "97%",
      // padding: 5,
      margin: 5,
      overflow: "hidden",
    },

    buttonMain: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      backgroundColor: "none",
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
      height: "100%",
    },

    closeModal: {
      fontSize: 25,
      fontWeight: "bold",
      color: "white",
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
      height: 35,
    },

    modalHeader: {
      backgroundColor: "#89cc7e",
      paddingLeft: 25,
      paddingRight: 25,
      paddingTop: 25,
      paddingBottom: 10,
    },

    modalUsername: {
      color: "white",
      fontWeight: "bold",
      fontSize: 25,
    },

    modalEmail: {
      color: "white",
      fontSize: 18,
    },

    modalButton: {
      backgroundColor: "none",
    },

    modalOption: {
      display: "flex",
      flexDirection: "row",
      backgroundColor: "#89cc7e",
      borderRadius: 10,
      fontSize: 25,
      marginTop: 15,
      paddingLeft: 15,
      paddingBottom: 12,
      paddingTop: 10,
    },

    modalSubOption: {
      display: "flex",
      flexDirection: "row",
      backgroundColor: "#89cc7e",
      width: "95%",
      alignSelf: "center",
      borderRadius: 10,
      fontSize: 25,
      marginTop: 15,
      paddingLeft: 15,
      paddingBottom: 12,
      paddingTop: 10,
    },

    modalDivider: {
      marginTop: 5,
      paddingBottom: 15,
      borderBottomWidth: 4,
      borderColor: "lightgrey",
      width: "95%",
      alignSelf: "center",
    },
  });
}

export default styles;
