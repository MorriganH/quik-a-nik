import { StyleSheet, Text, View, Image, Button, FlatList, Modal } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/cart";
import WebMap from "./WebMap";
import { toggleModal, adjustCartQuantity } from "../redux/actions";


export default function Cart({navigation}) {
  const { cart, modalShow } = useSelector((state) => state.reducer);
  
  const dispatch = useDispatch()

  let subTotal = 0;

  cart.forEach((item) => {
    const itemPrice = (item.price_cents / 100) * item.default_quantity;
    subTotal += itemPrice;
  });

  const Item = ({ item }) => (
    <View style={style.item}>
      <Text>{item.name}</Text>
      <Text>{item.description}</Text>
      <Button onPress={() => dispatch(adjustCartQuantity(item, "+"))} label="+"/>
      <Text>{item.default_quantity}</Text>
      <Button onPress={() => dispatch(adjustCartQuantity(item, "-"))} label="-"/>
      <Button onPress={() => dispatch(adjustCartQuantity(item, "delete"))} label="X"/>
      <Text>
        ${((item.price_cents / 100) * item.default_quantity).toFixed(2)}
      </Text>
    </View>
  );

  const taxRate = 1.13;
  const tax = subTotal * taxRate - subTotal;
  const total = subTotal + tax;

  return (
    <View>
      <FlatList
        data={cart}
        renderItem={(item) => <Item item={item.item} />}
        keyExtractor={(item) => item.id}
      />

      <View style={style.item}>
        <Text>Subtotal: ${subTotal.toFixed(2)}</Text>
        <Text>Tax: ${tax.toFixed(2)}</Text>
        <Text>Total: ${total.toFixed(2)}</Text>
      </View>
      <Button onPress={() => navigation.navigate("Map")} title="Set Location"/>
      <Modal
      visible={modalShow} transparent={true}>
        <View style={style.modal}>

        <WebMap/>
        </View>
      </Modal>
    </View>
  );
}

const style = StyleSheet.create({
  prod: {
    // border: "solid",
    padding: 5,
    margin: 5,
    width: "30%",
  },
  container: {
    flex: 1,
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
  title: {
    fontSize: 32,
  },
  modal: {
    display: "flex",
    flex: 1,
    width: "70%",
    height: "70%",
    backgroundColor: "pink",
  },
});
