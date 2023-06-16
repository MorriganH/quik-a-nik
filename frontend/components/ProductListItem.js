import { Text, View, Image, Button } from "react-native";
import styles from "../styles/productListItem";

export default function ProductListItem(props) {
  const { product, cart, setCart } = route.params;

  const addItem = function (item) {
    if (!cart.some(i => i.id === item.id)) {
      let lineItem = item;
      lineItem.qty = 1;

      setCart([...cart, lineItem]);
    } else {
      const index = cart.findIndex(i => i.id === item.id);
      //I have a feeling this is bad practice need to review (but it works)
      cart[index].qty++;
    }
  };
  return (
    <View style={styles.prod}>
      <Text> {product.name} </Text>
      <Button title="Add to cart" onPress={() => addItem(product)} />
    </View>
  );
}
