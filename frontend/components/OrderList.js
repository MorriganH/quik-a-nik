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
  const {orders} = useSelector((state) => state.reducer);
  console.log("orders in OrderList: ", orders.orders);

  const fetchOrders = () => {
    
      //GET request to server to fetch orders data
      axios.get(`${tunnelURL}/orders`)
      // Dispatch setOrders action with orders data as payload
      // to update the state in Redux
      .then((res) => dispatch(setOrders(res.data))) 
      .catch((err) => {
        console.log(err);
      });
  };

  //fetchOrders once component loaded
  useEffect(() => {
    fetchOrders();
  }, []);

  const Order = ( {order} ) => {
  console.log("order from within component: ", order);
     return (

  <View>
      <Text>{`Order ID: ${order.id}`}</Text>
    </View>
  )};

  return (
    <FlatList
      data={orders.orders} //Pass orders data to FlatList
      renderItem={(order) => <Order order={order.item} />}
      keyExtractor={(order) => order.id}
    />
  );
}
