import { StyleSheet, Text, View, Image, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";


export default function Cart() {

  const { cart } = useSelector(state => state.reducer);

  let subTotal = 0;

  
  const cartItems = cart.map((item) => {
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
  
  const taxRate = 1.13
  const tax = (subTotal * tax) - subTotal
  const total = subTotal * tax



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
