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
    height: "80%"
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
    color: "#ce4216"
  },
  
  orderTracker: {
    margin: "auto",
  }

});
}



if (device !== "web") {
  styles = StyleSheet.create({

    title: {
      fontSize: 24,
    },
  
    subtitle: {
      fontSize: 16,
      margin: "auto",
      marginBottom: "10%",
    },
  
    container: {
      flex: 1,
      height: "100%",
      justifyContent: "center",
      // alignItems: "center",
      backgroundColor: "white",
    },
  
    map: {
      maxWidth: "60%",
      minHeight: "30%",
      marginBottom: "3%",
    },
  
    infoText: {
      fontStyle: "italic",
    },
  
    checkoutButton: {
      borderWidth: 1,
      padding: 10,
      borderRadius: 5,
      backgroundColor: "#55bb55",
      maxWidth: "40%"
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
      marginTop: 22
    },

    orderSummary: {
    display: "flex",
    justifyContent: "space-between",
    height: "80%"
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
    color: "#ce4216"
  },
  
  orderTracker: {
    margin: "auto",
  }

  })}

export default styles;
