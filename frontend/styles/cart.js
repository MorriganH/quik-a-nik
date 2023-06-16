import { StyleSheet } from "react-native";
import { Platform } from "react-native";

const device = Platform.OS;
let styles




if (device === "web"){


styles = StyleSheet.create({



  container: {
    display: "flex",
    flexDirection: "row",
    width: "80%",
    alignSelf: "center",
    marginTop: 10,
  },

  container: {
    display: "flex",
    flexDirection: "row",
    width: "80%",
    alignSelf: "center",
    marginTop: 10,
  },

  box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5FCFF",
    borderRadius: 15,
  },

  item: {
    backgroundColor: "white",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    shadowColor: "grey",
    shadowOffset: { width: 3, height: 3 },
    shadowRadius: 10,
  },
  total: {
    backgroundColor: "white",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    shadowColor: "grey",
    shadowOffset: { width: 3, height: 3 },
    shadowRadius: 10,
    width: "auto",
    height: 250,
  },

  submitButton: {
    borderWidth: 1,
    padding: 10,
    margin: 10,
    borderRadius: 5,
    backgroundColor: "#55bb55",
    width: "auto",
    textAlign: "center",
  },

  lineItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 15,
    marginRight: 15,
  },
  divider: {
    borderTopWidth: 1,
    borderColor: "lightgrey",
    marginTop: 5,
    paddingTop: 5,
  },
  orderTotal: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#ce4216",
    marginTop: 5,
  },
  list: {
  },
});


} else {
  

styles = StyleSheet.create({




  container: {
    display: "flex",
    width: "80%",
    alignSelf: "center",
    marginTop: 10,
  },



  box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5FCFF",
    borderRadius: 15,
  },

  item: {
    backgroundColor: "white",
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    shadowColor: "grey",
    shadowOffset: { width: 3, height: 3 },
    shadowRadius: 10,
  },
  total: {
    backgroundColor: "white",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    shadowColor: "grey",
    shadowOffset: { width: 3, height: 3 },
    shadowRadius: 10,
    width: "auto",
    height: 250,
  },

  submitButton: {
    borderWidth: 1,
    padding: 10,
    margin: 10,
    borderRadius: 5,
    backgroundColor: "#55bb55",
    width: "auto",
    textAlign: "center",
  },

  lineItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 15,
    marginRight: 15,
  },
  divider: {
    borderTopWidth: 1,
    borderColor: "lightgrey",
    marginTop: 5,
    paddingTop: 5,
  },
  orderTotal: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#ce4216",
    marginTop: 5,
  },
  list: {
  },
});

}

export default styles;

