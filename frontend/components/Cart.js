import {
  Text,
  View,
  Image,
  Button,
  FlatList,
  Modal,
  Pressable,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/cart";
import WebMap from "./WebMap";
import { toggleModal } from "../redux/actions";

export default function Cart({ navigation }) {
  const { cart, modalShow } = useSelector(state => state.reducer);

  const dispatch = useDispatch();

  let subTotal = 0;

  cart.forEach(item => {
    const itemPrice = (item.price_cents / 100) * item.default_quantity;
    subTotal += itemPrice;
  });

  const Item = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.name}</Text>
      <Text>{item.description}</Text>
      <Text>{item.default_quantity}</Text>
      <Text>
        ${((item.price_cents / 100) * item.default_quantity).toFixed(2)}
      </Text>
    </View>
  );

  const taxRate = 1.13;
  const tax = subTotal * taxRate - subTotal;
  const total = subTotal + tax;

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <FlatList
          data={cart}
          renderItem={item => <Item item={item.item} />}
          keyExtractor={item => item.id}
        />

        <View style={styles.item}>
          <Text>Subtotal: ${subTotal.toFixed(2)}</Text>
          <Text>Tax: ${tax.toFixed(2)}</Text>
          <Text>Total: ${total.toFixed(2)}</Text>
        </View>
        <Pressable
          style={styles.submitButton}
          onPress={() => navigation.navigate("Map")}
        >
          <Text>Select Drop-off Location</Text>
        </Pressable>
      </View>
    </View>
  );
}

// <Pressable
// style={styles.submitButton}
// onPress={() => checkPasswords(password, passwordConfirm)}
// ></Pressable>
