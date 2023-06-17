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
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },

// Stripe-web Modal Styling Below

  modalView: {
    minWidth: "40%",
    minHeight: "25%",
    margin: 20,
    backgroundColor: "#F5FCFF",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "black",
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    position: "relative" 
  },

  closeButtonContainer: {
    position: "absolute",
    top: 10,
    left: 10,
    zIndex: 1, 
  },

  closeModal: {
    color: "black",
    fontSize: 20,
    fontWeight: 800,
  }

  
});

export default styles;
