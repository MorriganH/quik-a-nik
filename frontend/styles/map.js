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
    textAlign: "center",
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
    marginTop: 22
  },
  modalView: {
    minWidth: "80%",
    minHeight: "30%",
    margin: 20,
    backgroundColor: "#F5FCFF",
    borderColor: "black",
    borderWidth: 3,
    borderRadius: 10,
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
    fontWeight: 800,
    fontSize: 20,
  },

});

export default styles;
