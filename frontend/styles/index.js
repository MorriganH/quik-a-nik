import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  webNavBar: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 3,
    height: 50,
    shadowColor: "grey",
    width: "70%",
    shadowOffset: { width: 6, height: 6 },
    shadowRadius: 10,
    position: "fixed",
    top: 20,
  },
});

export default styles;
