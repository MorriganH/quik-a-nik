import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },

  title: {
    textAlign: "center",
    fontSize: 33,
  },

  person: {
    display: "flex",
    // flex: 1,
    alignItems: "center",
    marginTop: 20,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    borderBottomWidth: Platform.OS === "web" ? 0 : 4,
    borderRightWidth: Platform.OS === "web" ? 0 : 4,
    borderBottomColor: "rgba(34, 61, 26, 0.5)",
    borderRightColor: "rgba(34, 61, 26, 0.5)",
    shadowOffset: { width: 3, height: 3 },
    shadowRadius: 10,
    width: 300,
  },

  name: {
    fontSize: 25,
  },

  link: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#89cc7e",
    borderRadius: 5,
    padding: 8,
    marginTop: 5,
  },

  linkText: {
    fontSize: 20,
  },
});

export default styles;
