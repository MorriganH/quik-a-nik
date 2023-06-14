import { StyleSheet, Text, View, Image, Button } from "react-native";

export default function ProductListItem(props) {
  const { product, cart, setCart } = route.params;


  const addItem = function (item) {
    if (!cart.some((i) => i.id === item.id)) {
      let lineItem = item;
      lineItem.qty = 1;

      setCart([...cart, lineItem]);
    } else {
      const index = cart.findIndex((i) => i.id === item.id);
      //I have a feeling this is bad practice need to review (but it works)
      cart[index].qty++;
    }
  };
  return (
    <View style={style.prod} >
      <Text> {product.name} </Text>
      <Button title="Add to cart" onPress={() => addItem(product)} />
    </View>
  );
}

const style = StyleSheet.create({
  prod: {
    border: "solid",
    padding: 5,
    margin: 5,
    width: "30%",
  }
});

