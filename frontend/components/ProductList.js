import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import ProductListItem from "./ProductListItem";

export default function ProductList(props) {
  const { products, setCart, cart } = props;

  const addItem = function (item) {
    if(!cart.some(i => i.id === item.id)){

      let lineItem = item;
      lineItem.qty = 1;
      
      setCart([...cart, lineItem]);
    } else {
      const index = cart.findIndex(i => i.id === item.id)
      //I have a feeling this is bad practice need to review (but it works)
      cart[index].qty++
      
    }
  };

  const productArr = products.map((product) => {
    return (
      <View style={style.prod} key={product.id}>
        <ProductListItem product={product}></ProductListItem>
        <Button title="Add to cart" onPress={() => addItem(product)} />
      </View>
    );
  });

  // console.log(productArr)
  return <View style={style.container}>{productArr}</View>;
}

const style = StyleSheet.create({
  prod: {
    border: "solid",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    flex: 1,
  },
});
