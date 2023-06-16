import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },

  map: {
    minWidth: "90%",
    minHeight: "50%",
    marginBottom: "3%",
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
    textAlign: "center"
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

});


export default styles;