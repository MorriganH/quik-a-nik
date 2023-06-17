import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    margin: "auto",
  },

  subtitle: {
    fontSize: 20,
    margin: "auto",
    marginBottom: "2%",

  },

  container: {
    flex: 1,
    margin: "auto",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    width: "80%",
    maxHeight: "90%",
    marginBottom:"2%",
  },

  mapWindow: {
    marginTop: "2%",
    width: "95%",
    height: "60%",
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
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  }
  
});

export default styles;
