import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Text, View, Image, Button, FlatList } from "react-native";
import axios from "axios";
import tunnelURL from '../backend_tunnel';

import { setOrders } from "../redux/actions";

export default function OrderList() {
  //useDispatch hook dispatches Redux action
  const dispatch = useDispatch();

  //useSelector hook selects orders state from Redux
  const orders = useSelector((state) => state.orders);

  const fetchOrders = async () => {
    try {
      //GET request to server to fetch orders data
      const res = await axios.get(`${tunnelURL}/orders`);
      // Dispatch setOrders action with orders data as payload
      // to update the state in Redux
      dispatch(setOrders(res.data));
    } catch (error) {
      console.log(error);
    }
  };

  //fetchOrders once component loaded
  useEffect(() => {
    fetchOrders();
  }, []);

  const renderOrder = ({ order }) => (
    <View>
      <Text>{`Order ID: ${order.id}`}</Text>
    </View>
  );

  return (
    <FlatList
      data={orders} //Pass orders data to FlatList
      renderItem={renderOrder} //render each order
      keyExtractor={(order) => order.id}
    />
  );
}
