import { StyleSheet, Text, View, Image, Button } from "react-native";

export default function ProductListItem(props) {
  const { product } = props;
  return(
   
    
    <Text> {product.name} </Text>
   
    ) 
  }
