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
    marginTop: 45,
    backgroundColor: "#6ab85d",
    padding: 20,
    borderRadius: 10,
    borderBottomWidth: Platform.OS === "web" ? 0 : 4,
    shadowOffset: { width: 3, height: 3 },
    shadowRadius: 3,
    width: 300,
  },

  name: {
    fontSize: 25,
  },

  link: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
  },

  linkText: {
    fontSize: 20,
  },
});

export default styles;
