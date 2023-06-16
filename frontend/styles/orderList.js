import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  container: {
    display: "flex",
    alignItems: "center",
    minWidth: "80%",
  },

  orderList: {
    display: "flex",
    marginTop: "5%",
  },

  itemList: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "1%",
    marginBottom: "1%",
  },

  lineItem: {
    display: "flex",
  }
});

export default styles;
