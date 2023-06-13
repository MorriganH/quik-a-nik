import { StyleSheet, Text, View, Image, Button, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";


export default function Cart() {

  const { cart } = useSelector(state => state.reducer);

  let subTotal = 0
  
  cart.forEach(item => {
    const itemPrice = (item.price_cents / 100) * item.default_quantity
    subTotal += itemPrice

    
  });;

  const Item = ({ item }) => (
      <View style={style.item}>
        <Text>{item.name}</Text>
        <Text>{item.description}</Text>
        <Text>{item.default_quantity}</Text>
        <Text>${((item.price_cents / 100) * (item.default_quantity)).toFixed(2)}</Text>
      </View>
      
  );
  
  const taxRate = 1.13
  const tax = ((subTotal * taxRate) - subTotal)
  const total = (subTotal + tax)



  return(
<View>

<FlatList
  data={cart}
  renderItem={(item) => <Item item ={item.item} />}
  keyExtractor={(item) => item.id}
/>



<View style={style.item}>
    <Text>Subtotal: ${subTotal.toFixed(2)}</Text>
    <Text>Tax: ${tax.toFixed(2)}</Text>
    <Text>Total: ${total.toFixed(2)}</Text>

</View>
  </View>
  )
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