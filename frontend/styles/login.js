import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5FCFF",
    width: "80%",
    height: "50%",
    borderRadius: 15,
  },

  title: {
    fontSize: 34,
    paddingBottom: 20,
  },

  textInput: {
    height: 40,
    width: 300,
    fontSize: 20,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
  },

  submitButton: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#55bb55",
  },
});

export default styles;
