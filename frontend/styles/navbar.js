import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  webNavBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: 3,
    height: 50,
    shadowColor: "grey",
    width: "80%",
    shadowOffset: { width: 6, height: 6 },
    shadowRadius: 10,
    margin: 20,
  },

  navSection: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "45%",
    flexDirection: "row",
  },

  button: {
    // backgroundColor: "white",
    display: "flex",
    justifyContent: "flexEnd"
  },
});


export default styles