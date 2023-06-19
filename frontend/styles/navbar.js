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
    width: 950,
    shadowColor: "rgba(34, 61, 26, 0.5)",
    shadowOffset: { width:3, height: 3 },
    shadowRadius: 3,
    marginTop: 15,
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