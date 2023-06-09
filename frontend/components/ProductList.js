import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import Product from "./Product";



export default function ProductList(props){

const {products} = props

const productArr = products.map(product => {
  
  return(<Product product={product} key={product.id} ></Product>)

})

// console.log(productArr)
return(
  productArr
)

}