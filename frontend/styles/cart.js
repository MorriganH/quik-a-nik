import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 10,
    height: "auto",
  },

  box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5FCFF",
    width: "80%",
    // height: "80%",
    borderRadius: 15,
  },

  item: {
    backgroundColor: "white",
    // width: "80%",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    shadowColor: "grey",
    shadowOffset: { width: 3, height: 3 },
    shadowRadius: 10,
  },

  submitButton: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#55bb55",
    width: "50%",
  },
});

export default styles;
