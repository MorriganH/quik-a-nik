import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Platform,
  FlatList,
} from "react-native";
import ProductListItem from "./ProductListItem";
import stateManager from "../hooks/stateManager";

export default function ProductList() {
  const device = Platform.OS;

  const { addItem, state } = stateManager();


  // const {products } = route.params;

  // const addItem = function (item) {
  //   console.log(item)
  //   if (!cart.some((i) => i.id === item.id)) {
  //     let lineItem = item;
  //     lineItem.qty = 1;

  //     setCart([...cart, lineItem]);
  //   } else {
  //     const index = cart.findIndex((i) => i.id === item.id);
  //     //I have a feeling this is bad practice need to review (but it works)
  //     cart[index].qty++;
  //   }
  //   console.log(cart)
  // };

  // const productsArr = state.products.map((product) => {
  //   return (
  //     <View style={style.prod} key={product.id}>
  //       <Text> {product.name} </Text>
  //       <Button title="Add to cart" onPress={() => addItem(product)} />
  //     </View>
  //   );
  // });
  // console.log(productsArr);


  const products = [  {
    id: 49,
    name: 'Adult Hydration Basket',
    price_cents: 4000,
    description: '6 Pack of Beer, 6 Pack of Wine Coolers, 1 Bag of Ice',
    is_basket: true,
    portions: 4,
    is_deluxe: true,
    image: 'booze_basket.png',
    created_at: "2023-06-09T14:40:47.689Z",
    updated_at: "2023-06-09T14:40:47.689Z"
  },
  {
    id: 50,
    name: 'Grill Lovers Pack',
    price_cents: 5000,
    description: '4 Frozen Hambuger Patties, 4 Hot Dogs, 4 Hamburger Buns, 4 Hot Dog Buns, 1 Set of Tongs',
    is_basket: true,
    portions: 8,
    is_deluxe: false,
    image: 'bbq_basket.png',
    created_at: "2023-06-09T14:40:47.689Z",
    updated_at: "2023-06-09T14:40:47.689Z"
  },
  {
    id: 51,
    name: 'Deluxe Grill Lovers Pack',
    price_cents: 12000,
    description: '8 Frozen Hambuger Patties, 8 Hot Dogs, 8 Hamburger Buns, 8 Hot Dog Buns, 1 Set of Tongs, 6 Pack of Beer, 6 Pack of Wine Coolers',
    is_basket: true,
    portions: 4,
    is_deluxe: true,
    image: 'deluxe_bbq_basket.png',
    created_at: "2023-06-09T14:40:47.689Z",
    updated_at: "2023-06-09T14:40:47.689Z"
  }
]



  const Item = ({ product }) => (
    <View style={style.item}>
      <Text style={style.title}>{product.name}</Text>
      <Button title="Add to cart" onPress={() => addItem(product)} />
    </View>
  );
  
  return (
    <FlatList
    data={products}
      renderItem={( product ) => <Item product={product.item} /> }
      keyExtractor={(item) => item.id}
    />

    // productsArr;
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
  },
  title: {
    fontSize: 32,
  },
});
