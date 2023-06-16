import {
  Text,
  View,
  Image,
  Button,
  FlatList,
  Modal,
  Pressable,
  BlurView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/cart";
import WebMap from "./WebMap";
import { toggleModal, adjustCartQuantity } from "../redux/actions";

export default function Cart({ navigation }) {
  const { cart, modalShow, cartNotification } = useSelector(
    (state) => state.reducer
  );

  const dispatch = useDispatch();

  let subTotal = 0;

  cart.forEach((item) => {
    const itemPrice = (item.price_cents / 100) * item.default_quantity;
    subTotal += itemPrice;
  });

  const Item = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.name}</Text>
      <Text>{item.description}</Text>
      <Button
        onPress={() => dispatch(adjustCartQuantity(item, "+"))}
        title="+"
      />
      <Text>{item.default_quantity}</Text>
      <Button
        onPress={() => dispatch(adjustCartQuantity(item, "-"))}
        title="-"
      />
      <Button
        onPress={() => dispatch(adjustCartQuantity(item, "delete"))}
        title="X"
      />
      <Text>
        ${((item.price_cents / 100) * item.default_quantity).toFixed(2)}
      </Text>
    </View>
  );

  const taxRate = 1.13;
  const deliveryFee = cartNotification * 1.25;
  const beforeTax = subTotal + deliveryFee;
  const tax = beforeTax * taxRate - beforeTax;
  const total = beforeTax + tax;

  return (
    
    <View style={styles.container}>
      
        <FlatList
          style={styles.list}
          data={cart}
          renderItem={(item) => <Item item={item.item} />}
          keyExtractor={(item) => item.id}
        />

        <View style={styles.total}>
          <View style={styles.lineItem}>
            <Text>Items ({cartNotification}):</Text>
            <Text>${subTotal.toFixed(2)}</Text>
          </View>

          <View style={styles.lineItem}>
            <Text>Delivery fee:</Text>
            <Text>${deliveryFee.toFixed(2)}</Text>
          </View>

          <View style={styles.divider}>
            <View style={styles.lineItem}>
              <Text>Total before tax:</Text>
              <Text>${beforeTax.toFixed(2)}</Text>
            </View>

            <View style={styles.lineItem}>
              <Text>Estimated tax:</Text>
              <Text>${tax.toFixed(2)}</Text>
            </View>

            <View style={styles.lineItem}>
              <Text style={styles.orderTotal}>Order Total:</Text>
              <Text style={styles.orderTotal}>${total.toFixed(2)}</Text>
            </View>
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
