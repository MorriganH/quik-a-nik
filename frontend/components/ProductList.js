import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import ProductListItem from "./ProductListItem";



export default function ProductList(props){

const {products} = props

const productArr = products.map(product => {
  
  return(
  
  <ProductListItem product={product} key={product.id} ></ProductListItem>)

})

// console.log(productArr)
return(
  productArr
)

}