import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import ProductListItem from "./ProductListItem";
import { supportedCpuArchitectures } from "expo-device";



export default function ProductList(props){

const {products, setCart, cart} = props

const addItem = function(item){
  setCart([...cart, item])
}

const productArr = products.map(product => {
  
  return(
  <View key={product.id}>

  <ProductListItem product={product}  ></ProductListItem>
  <Button title="Add to cart" onPress={() => addItem(product) }/>
  </View>
  )

})

// console.log(productArr)
return(
  productArr
)

}