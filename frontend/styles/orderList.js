import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
    minWidth: "90%",
    maxWidth: "60%",
    minHeight: "90%",
    backgroundColor: "pink",
  },

  orderItem: {
    display: "flex",
    marginBottom: "8%",
    borderWidth: 3,
    borderRadius: 10,
    borderColor: "#55bb55",
    padding: 8,
    minWidth: 400,
    backgroundColor: "#c7edcc",
  },

  orderId: {
    marginBottom: "3%",
    fontWeight: 800,
    textAlign: "center",
  },



  itemList: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 2,
    borderColor: "#55bb55",
  },

  productText: {
    display: "flex",
    minWidth: "60%",
  },

  qtyText: {
    mindWidth: "30%",
  },

  linePriceText: {
    minWidth: "10%"
  },

  location: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "3%",
    marginBottom: "2%",
  },

  dateTotal: {
    dispplay: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  total: {
    fontWeight: 700,
  },

  price: {
    fontWeight: 400,
  }
});

export default styles;
