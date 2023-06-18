import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  webNavBar: {
    display: "flex",
    justifyContent: "space-between",
    // alignItems: "center",
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: 10,
    height: 50,
    shadowColor: "grey",
    width: 950,
    shadowOffset: { width: 6, height: 6 },
    shadowRadius: 10,
    margin: 20,
    color: "#1b3e17",
  },

  navSection: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "45%",
    flexDirection: "row",
  },
  userActions: {
    display: "flex",
    flexDirection: "row",
  },

  button: {
    // backgroundColor: "white",
    display: "flex",
    justifyContent: "flexEnd"
  },
  cartImage: {
    width: 40,
    height: 40,
  },
  cartNotification: {
    alignSelf: "center",
    fontWeight: "bold",
    color: "#ce4216"
  
  }
});


export default styles