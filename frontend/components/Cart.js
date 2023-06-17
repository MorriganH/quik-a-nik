import {
  Text,
  View,
  Image,
  Button,
  FlatList,
  Modal,
  Pressable,
  BlurView,
  ScrollView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/cart";
import WebMap from "./Map";
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
      <View style={styles.containerFlow}>
        <View style={styles.containerFlow}>
          <Image
            style={styles.image}
            source={require("../assets/Juniper_Twitter_Art.webp")}
          />

          <View style={styles.containerMid}>
            <View>
              <Text style={styles.title}>{item.name}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>

            <View style={styles.quantityControls}>
              <Pressable
                onPress={() => dispatch(adjustCartQuantity(item, "-"))}
              >
                <Text style={styles.quantityComponent}>-</Text>
              </Pressable>

              <Text style={styles.quantityComponent}>{item.default_quantity}</Text>

              <Pressable
                onPress={() => dispatch(adjustCartQuantity(item, "+"))}
              >
                <Text style={styles.quantityComponent}>+</Text>
              </Pressable>
            </View>
          </View>
        </View>

        <View style={styles.containerEnd}>
          <Pressable
            onPress={() => dispatch(adjustCartQuantity(item, "delete"))}
          >
            <Text style={styles.quantityComponent}>⨉</Text>
          </Pressable>
          <Text style={styles.orderTotal}>
            ${((item.price_cents / 100) * item.default_quantity).toFixed(2)}
          </Text>
        </View>
      </View>
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
