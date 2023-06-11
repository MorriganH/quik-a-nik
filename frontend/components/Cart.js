import { StyleSheet, Text, View, Image, Button } from "react-native";
import stateManager from "../hooks/stateManager";


export default function Cart() {

  const { state } = stateManager();

  let subTotal = 0;

  
  const cartItems = state.cart.map((item) => {
    const price = (item.price_cents / 100 )* item.qty
    subTotal += Number(price)
    return (
      <View key={item.id}>
        <Text>{item.name}</Text>
        <Text>{item.description}</Text>
        <Text>{item.qty}</Text>
        <Text>${price}</Text>
      </View>
    );
  });
  
  const tax = 1.13
  const total = subTotal * tax


  console.log(state.cart);

  return(
<View>
{cartItems}
<View>
    <Text>Subtotal: {subTotal}</Text>
    <Text>Tax: {tax}%</Text>
    <Text>Total: {total}</Text>

</View>
  </View>
  )
}
