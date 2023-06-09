import { StyleSheet, Text, View, Image, Button } from "react-native";

export default function (props) {
  const { product } = props;
  return <Text> {product.name} </Text>;
}
